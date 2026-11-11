export class AuthError extends Error {}
export function config() {
  const {APP_ORIGIN, SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY} = process.env;
  if (!APP_ORIGIN || !SUPABASE_URL || !SUPABASE_ANON_KEY || !SUPABASE_SERVICE_ROLE_KEY || SUPABASE_URL.includes('PROJECT')) throw new Error('Configuratie ontbreekt');
  const origin = new URL(APP_ORIGIN).origin;
  if (!origin.startsWith('https://') && !['localhost','127.0.0.1'].includes(new URL(origin).hostname)) throw new Error('HTTPS vereist');
  return {origin, url:SUPABASE_URL.replace(/\/$/,''), anon:SUPABASE_ANON_KEY, service:SUPABASE_SERVICE_ROLE_KEY};
}
export async function supabase(path, {method='GET', body, token, admin=false}={}) {
  const c=config();
  const response=await fetch(c.url+path, {method, headers:{apikey:admin?c.service:c.anon, Authorization:`Bearer ${token || (admin?c.service:c.anon)}`, 'Content-Type':'application/json'}, body:body?JSON.stringify(body):undefined, signal:AbortSignal.timeout(10000)});
  const data=await response.json().catch(()=>null);
  return {ok:response.ok, status:response.status, data};
}
export async function residentByEmail(email, call=supabase) {
  const result=await call(`/rest/v1/residents?email=eq.${encodeURIComponent(email)}&active=eq.true&select=user_id&limit=1`, {admin:true});
  if (!result.ok) throw new Error('Bewonersregister niet beschikbaar');
  return result.data?.[0] || null;
}
export async function authorize(req, call=supabase) {
  const raw=(req.headers.cookie||'').split(';').map(v=>v.trim()).find(v=>v.startsWith('waker_session='));
  const token=raw?.slice('waker_session='.length);
  if (!token || token.length>12000) throw new AuthError();
  const user=await call('/auth/v1/user',{token});
  if (!user.ok || !user.data?.id || !user.data.email) throw new AuthError();
  const row=await residentByEmail(user.data.email.toLowerCase(),call);
  if (!row || row.user_id!==user.data.id) throw new AuthError();
  return {token,user:user.data};
}
export function setSession(res, token, seconds=0) {
  const secure=new URL(config().origin).protocol==='https:'?'; Secure':'';
  res.setHeader('Set-Cookie',`waker_session=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${Math.max(0,Math.min(3600,seconds))}${secure}`);
}
