import http from 'node:http';import {readFile} from 'node:fs/promises';import {resolve,extname,sep} from 'node:path';import {createHandler} from '../lib/handler.js';
const root=resolve('public');
http.createServer(async(req,res)=>{
 const url=new URL(req.url,'http://localhost:3000');
 const path=url.pathname==='/bewoners'?'/api/portal':url.pathname;
 if(path.startsWith('/api/')){
  const action=path.slice(5);
  if(!['login','verify','logout','portal','session'].includes(action)){res.writeHead(404);return res.end();}
  return createHandler(action)(req,res);
 }
 let name=path==='/'?'/index.html':path==='/inloggen'?'/login.html':path;
 try{
  const file=resolve(root,'.'+decodeURIComponent(name));
  if(!file.startsWith(root+sep))throw new Error(); // sep: werkt ook op Windows
  const data=await readFile(file);const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.txt':'text/plain'};
  res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(data);
 }catch{res.writeHead(404);res.end('Niet gevonden');}
}).listen(3000,()=>console.log('De Waker: http://localhost:3000 (inloggen vereist Supabase-configuratie)'));
