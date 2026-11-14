import test from 'node:test';
import assert from 'node:assert/strict';
import {Readable} from 'node:stream';
import {createContactHandler} from '../lib/contact-handler.js';
process.env.APP_ORIGIN='https://dewakergoirle.com';
process.env.SUPABASE_URL='https://example.supabase.co';
process.env.SUPABASE_ANON_KEY='anon';process.env.SUPABASE_SERVICE_ROLE_KEY='service';
process.env.CONTACT_SMTP_USER='bestuurvvedewaker@gmail.com';process.env.CONTACT_SMTP_APP_PASSWORD='test-only-not-real';
const form={name:'Bewoner',apartment:'1',subject:'Algemene vraag',message:'Dit is een testbericht.'};
function req(body=form,headers={}){const r=Readable.from([]);r.method='POST';r.headers={'content-type':'application/json',origin:process.env.APP_ORIGIN,cookie:'waker_session=valid',...headers};r.body=body;return r;}
function res(){return {statusCode:200,headers:{},setHeader(k,v){this.headers[k]=v;},end(t){this.text=t;}};}
function provider({active=true,quota=true,quotaOK=true}={}){return async p=>{
 if(p==='/auth/v1/user')return {ok:true,data:{id:'resident-1',email:'geverifieerd@example.nl'}};
 if(p.startsWith('/rest/v1/residents'))return {ok:true,data:active?[{user_id:'resident-1'}]:[]};
 if(p.includes('reserve_contact_attempt'))return {ok:quotaOK,data:quota};
 throw Error('Unexpected call');
};}
async function run(request,options={}){let mail;const response=res();await createContactHandler({call:provider(options),send:async m=>{mail=m;return {accepted:['bestuurvvedewaker@gmail.com']};},...options})(request,response);return {response,mail};}
test('contact weigert niet-ingelogde bezoekers',async()=>{const {response,mail}=await run(req(form,{cookie:''}));assert.equal(response.statusCode,401);assert.equal(mail,undefined);});
test('contact weigert ingetrokken bewoners',async()=>{const {response,mail}=await run(req(),{active:false});assert.equal(response.statusCode,401);assert.equal(mail,undefined);});
test('contact weigert andere origin vóór providercontact',async()=>{const {response}=await run(req(form,{origin:'https://ander.nl'}),{call:()=>{throw Error('should not call');}});assert.equal(response.statusCode,403);});
test('contact accepteert geen GET',async()=>{const r=req();r.method='GET';const {response}=await run(r);assert.equal(response.statusCode,405);});
test('bericht gaat alleen naar bestuur en antwoordadres is geverifieerd',async()=>{const {response,mail}=await run(req({...form,email:'vals@example.nl',to:'aanvaller@example.nl'}));assert.equal(response.statusCode,200);assert.equal(mail.to,'bestuurvvedewaker@gmail.com');assert.equal(mail.replyTo,'geverifieerd@example.nl');assert.ok(mail.text.includes(form.message));assert.equal(mail.html,undefined);assert.equal(mail.cc,undefined);});
test('te korte of lege tekst wordt geweigerd',async()=>{const {response,mail}=await run(req({...form,message:'kort'}));assert.equal(response.statusCode,400);assert.equal(mail,undefined);});
test('te lange tekst wordt geweigerd',async()=>{const {response}=await run(req({...form,message:'a'.repeat(4001)}));assert.equal(response.statusCode,400);});
test('headerinjectie in onderwerp wordt geweigerd',async()=>{const {response}=await run(req({...form,subject:'Algemene vraag\r\nBcc: vals@example.nl'}));assert.equal(response.statusCode,400);});
test('honeypot wordt geweigerd',async()=>{const {response}=await run(req({...form,website:'https://spam.nl'}));assert.equal(response.statusCode,400);});
test('te grote request wordt geweigerd',async()=>{const {response}=await run(req({...form,extra:'a'.repeat(17000)}));assert.equal(response.statusCode,400);});
test('centrale verzendlimiet blokkeert mail',async()=>{const {response,mail}=await run(req(),{quota:false});assert.equal(response.statusCode,429);assert.equal(mail,undefined);});
test('onbereikbare quota geeft geen mail of succes',async()=>{const {response,mail}=await run(req(),{quotaOK:false});assert.equal(response.statusCode,503);assert.equal(mail,undefined);});
test('SMTP afwijzing geeft geen succes',async()=>{const {response}=await run(req(),{send:async()=>({accepted:[]})});assert.equal(response.statusCode,503);assert.equal(JSON.parse(response.text).ok,undefined);});
test('SMTP timeout geeft geen succes',async()=>{const {response}=await run(req(),{send:async()=>{throw Error('secret content must not leak');}});assert.equal(response.statusCode,503);assert.ok(!response.text.includes('secret'));});
