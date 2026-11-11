import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {config, supabase, authorize, residentByEmail, setSession, AuthError} from './auth.js';
const generic='Als dit e-mailadres toegang heeft, ontvangt u een inlogcode. Controleer ook uw spammap.';
function json(res,status,data){res.statusCode=status;res.setHeader('Content-Type','application/json; charset=utf-8');res.end(JSON.stringify(data));}
async function body(req){
  if (!(req.headers['content-type']||'').startsWith('application/json')) throw new AuthError();
  if (req.body && typeof req.body==='object') {if(JSON.stringify(req.body).length>8192) throw new AuthError(); return req.body;}
  let value=''; for await(const part of req){value+=part;if(value.length>8192) throw new AuthError();}
  try{return JSON.parse(value);}catch{throw new AuthError();}
}
export function createHandler(action, call=supabase){return async function handler(req,res){
  res.setHeader('Cache-Control','private, no-store, max-age=0');
  res.setHeader('Vercel-CDN-Cache-Control','no-store');res.setHeader('CDN-Cache-Control','no-store');
  res.setHeader('Vary','Cookie');res.setHeader('X-Robots-Tag','noindex, nofollow, noarchive');
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('X-Frame-Options','DENY');
  res.setHeader('Referrer-Policy','no-referrer');
  try {
    const post=['login','verify','logout'].includes(action);
    if(req.method!==(post?'POST':'GET')) {res.setHeader('Allow',post?'POST':'GET');return json(res,405,{error:'Methode niet toegestaan'});}
    // Never trust Host or forwarded headers to establish the allowed origin.
    if(post && req.headers.origin!==config().origin) return json(res,403,{error:'Verzoek niet toegestaan'});
    if(action==='logout'){
      const token=(req.headers.cookie||'').split(';').map(x=>x.trim()).find(x=>x.startsWith('waker_session='))?.slice(14);
      setSession(res,'',0);
      if(token) await call('/auth/v1/logout?scope=local',{method:'POST',token}).catch(()=>{});
      return json(res,200,{ok:true});
    }
    if(action==='login' || action==='verify'){
      const input=await body(req);
      const email=typeof input.email==='string'?input.email.trim().toLowerCase():'';
      if(email.length>254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(res,400,{error:'Vul een geldig e-mailadres in.'});
      const resident=await residentByEmail(email,call);
      if(action==='login'){
        if(resident){
          const result=await call('/auth/v1/otp',{method:'POST',body:{email,create_user:false}});
          // Provider errors are deliberately not exposed as an account lookup.
          if(!result.ok) console.error('OTP delivery failed',result.status);
        }
        return json(res,200,{message:generic});
      }
      const token=typeof input.code==='string'?input.code.trim():'';
      if(!/^[0-9]{6,10}$/.test(token) || !resident) return json(res,401,{error:'Code ongeldig of verlopen. Vraag zo nodig een nieuwe code aan.'});
      const result=await call('/auth/v1/verify',{method:'POST',body:{email,token,type:'email'}});
      if(!result.ok || !result.data?.access_token || result.data.user?.id!==resident.user_id) return json(res,401,{error:'Code ongeldig of verlopen.'});
      // Recheck membership after verification so revocation also wins during login.
      const current=await residentByEmail(email,call);
      if(!current || current.user_id!==result.data.user.id) throw new AuthError();
      setSession(res,result.data.access_token,result.data.expires_in || 3600);
      return json(res,200,{redirect:'/bewoners'});
    }
    await authorize(req,call);
    if(action==='session') return json(res,200,{ok:true});
    if(action==='portal'){
      // These files are function-only input, never part of the public build.
      // Gemaakt door scripts/build.js (npm run build) uit portaal.html en src/.
      const html=await readFile(join(process.cwd(),'private/portaal.html'),'utf8');
      res.setHeader('Content-Type','text/html; charset=utf-8');return res.end(html);
    }
    return json(res,404,{error:'Niet gevonden'});
  }catch(error){
    if(error instanceof AuthError){
      if(action==='portal'){res.statusCode=303;res.setHeader('Location','/inloggen');return res.end();}
      return json(res,401,{error:'Log opnieuw in om verder te gaan.'});
    }
    console.error('De Waker request failed:',error.name);
    return json(res,503,{error:'Inloggen is tijdelijk niet beschikbaar. Probeer het later opnieuw of neem contact op met het bestuur.'});
  }
};}
