import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve,sep} from 'node:path';
export function coverInfo(id,data){
 const root=resolve('public');
 const image=data.image||'/images/fachada-escuela.webp';
 const file=resolve(root,'.'+image);
 if(!file.startsWith(root+sep))throw new Error('La portada debe ser una imagen local dentro de public: '+image);
 const bytes=readFileSync(file);
 const date=new Date(data.date).toISOString().slice(0,10);
 const hash=createHash('sha256').update(JSON.stringify([data.title,data.category||'Comunidad',date,'social-v1'])).update(bytes).digest('hex').slice(0,12);
 return {url:'/images/social/'+id.replaceAll('/','-')+'-'+hash+'.jpg',file,date};
}
