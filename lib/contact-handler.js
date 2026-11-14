import { authorize, config, supabase, AuthError } from './auth.js';
const TO = 'bestuurvvedewaker@gmail.com';
const SUBJECTS = ['Algemene vraag', 'Storing of defect', 'Nieuws of mededeling', 'Activiteit voorstellen', 'Overig'];
class InputError extends Error {}
async function input(req) {
  if (!(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) throw new InputError();
  let data = req.body;
  if (data === undefined) {
    const parts = []; let size = 0;
    for await (const part of req) {
      const bytes = Buffer.from(part); size += bytes.length;
      if (size > 16384) throw new InputError();
      parts.push(bytes);
    }
    data = Buffer.concat(parts).toString('utf8');
  }
  if (Buffer.isBuffer(data)) data = data.toString('utf8');
  if (typeof data === 'string') { if(Buffer.byteLength(data)>16384)throw new InputError(); try {data=JSON.parse(data);} catch {throw new InputError();} }
  if (!data || Array.isArray(data) || typeof data !== 'object' || Buffer.byteLength(JSON.stringify(data))>16384) throw new InputError();
  const clean = key => typeof data[key] === 'string' ? data[key].trim() : '';
  const name=clean('name'), apartment=clean('apartment'), subject=clean('subject'), message=clean('message');
  if (name.length<2 || name.length>100 || /[\r\n\x00-\x1f]/.test(name) || apartment.length>40 || /[\r\n\x00-\x1f]/.test(apartment) || !SUBJECTS.includes(subject) || message.length<10 || message.length>4000 || message.includes('\0') || clean('website')) throw new InputError();
  return {name, apartment, subject, message};
}
async function deliver(mail) {
  // Dynamische import: SMTP wordt uitsluitend op de server geladen.
  const { default: nodemailer } = await import('nodemailer');
  const transport = nodemailer.createTransport({
    host:'smtp.gmail.com', port:465, secure:true,
    auth:{user:process.env.CONTACT_SMTP_USER, pass:process.env.CONTACT_SMTP_APP_PASSWORD?.replace(/\s/g,'')},
    connectionTimeout:10000, greetingTimeout:10000, socketTimeout:15000,
    disableFileAccess:true, disableUrlAccess:true, logger:false, debug:false
  });
  try { return await transport.sendMail(mail); } finally { transport.close(); }
}
export function createContactHandler({call=supabase, send=deliver}={}) {
  return async (req,res) => {
    const json=(status,data)=>{res.statusCode=status;res.setHeader('Content-Type','application/json; charset=utf-8');res.end(JSON.stringify(data));};
    res.setHeader('Cache-Control','private, no-store');
    res.setHeader('Vercel-CDN-Cache-Control','no-store');
    res.setHeader('X-Content-Type-Options','nosniff');
    try {
      if(req.method!=='POST'){res.setHeader('Allow','POST');return json(405,{error:'Methode niet toegestaan.'});}
      if(req.headers.origin!==config().origin)return json(403,{error:'Open het formulier op dewakergoirle.com.'});
      const {user}=await authorize(req,call);
      const form=await input(req);
      if(!process.env.CONTACT_SMTP_USER || !/^[^\s@\r\n]+@gmail\.com$/i.test(process.env.CONTACT_SMTP_USER) || !process.env.CONTACT_SMTP_APP_PASSWORD) return json(503,{error:'Het contactformulier is nog niet ingesteld. Mail naar '+TO+'.'});
      const quota=await call('/rest/v1/rpc/reserve_contact_attempt',{admin:true,method:'POST',body:{p_user_id:user.id}});
      if(!quota.ok)throw new Error('ContactQuota');
      if(quota.data!==true){res.setHeader('Retry-After','3600');return json(429,{error:'U kunt maximaal vijf verzendpogingen per uur doen. Probeer het later opnieuw.'});}
      const result=await send({
        from:{name:'De Waker – contactformulier',address:process.env.CONTACT_SMTP_USER},
        to:TO, replyTo:user.email,
        subject:'[De Waker] '+form.subject,
        text:['Bericht via het bewonersportaal van De Waker.','',
          'Naam: '+form.name,'Appartement: '+(form.apartment || 'Niet ingevuld'),
          'E-mailadres (ingelogde bewoner): '+user.email,'Onderwerp: '+form.subject,'',form.message].join('\n'),
        disableFileAccess:true,disableUrlAccess:true
      });
      if(!result?.accepted?.some(address=>String(address).toLowerCase()===TO))throw new Error('NotAccepted');
      return json(200,{ok:true,message:'Uw bericht is verzonden aan het VvE-bestuur. Het bestuur kan antwoorden op het e-mailadres waarmee u bent ingelogd.'});
    } catch(error) {
      if(error instanceof AuthError)return json(401,{error:'Uw sessie is verlopen. Log opnieuw in. Uw tekst blijft in dit formulier staan zolang u deze pagina openhoudt.'});
      if(error instanceof InputError)return json(400,{error:'Controleer uw naam, onderwerp en bericht (10 tot 4000 tekens).'});
      // Geen berichtinhoud, e-mailadres of geheimen in de logs.
      console.error("Contactformulier fout", {
  type: error.name,
  code: error.code || (
    error.message === "ContactQuota"
      ? "CONTACT_DATABASE"
      : "ONBEKEND"
  ),
  smtpStatus: error.responseCode || null
});
      return json(503,{error:'Verzending kon niet worden bevestigd. Uw tekst blijft staan. Controleer bij het bestuur voordat u hetzelfde bericht nogmaals verstuurt, of mail naar '+TO+'.'});
    }
  };
}
