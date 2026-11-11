import {randomBytes} from 'node:crypto';import {supabase} from '../lib/auth.js';
const [action,raw]=process.argv.slice(2),email=raw?.trim().toLowerCase();
if(!['add','remove'].includes(action)||!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){console.error('Gebruik: npm run bewoner -- add|remove naam@voorbeeld.nl');process.exit(1);}
async function must(path,options){const r=await supabase(path,options);if(!r.ok)throw new Error('Bewerking mislukt (HTTP '+r.status+'). Controleer configuratie en account.');return r.data;}
try{
 if(action==='remove'){
  const rows=await must(`/rest/v1/residents?email=eq.${encodeURIComponent(email)}&select=user_id`,{admin:true});
  if(!rows?.length)throw new Error('Dit adres staat niet in het bewonersregister.');
  await must(`/rest/v1/residents?email=eq.${encodeURIComponent(email)}`,{method:'PATCH',admin:true,body:{active:false}});
  console.log('Toegang ingetrokken voor '+email);process.exit(0);
 }
 let user;
 for(let page=1;page<=100;page++){
  const result=await must(`/auth/v1/admin/users?page=${page}&per_page=100`,{admin:true});
  user=result.users?.find(u=>u.email?.toLowerCase()===email);
  if(user || !result.users?.length || result.users.length<100)break;
  if(page===100)throw new Error('Te veel accounts; voeg deze bewoner handmatig toe.');
 }
 if(!user)user=await must('/auth/v1/admin/users',{method:'POST',admin:true,body:{email,email_confirm:true,password:randomBytes(32).toString('base64url')}});
 if(!user.id)throw new Error('Account kon niet worden aangemaakt.');
 const existing=await must(`/rest/v1/residents?user_id=eq.${encodeURIComponent(user.id)}&select=user_id`,{admin:true});
 if(existing.length)await must(`/rest/v1/residents?user_id=eq.${encodeURIComponent(user.id)}`,{method:'PATCH',admin:true,body:{email,active:true}});
 else await must('/rest/v1/residents',{method:'POST',admin:true,body:{user_id:user.id,email,active:true}});
 console.log('Toegang geactiveerd voor '+email+'. De bewoner kan nu zelf een code aanvragen.');
}catch(error){console.error(error.message);process.exit(1);}
