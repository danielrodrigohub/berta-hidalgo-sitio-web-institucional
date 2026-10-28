import sharp from 'sharp';
import {parse} from 'yaml';
import {readdir,readFile,mkdir} from 'node:fs/promises';
import {join,dirname} from 'node:path';
import {coverInfo} from '../src/lib/social.mjs';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function wrap(s,max){const lines=[];let line='';for(const word of s.split(/\s+/)){if(line&&(line+' '+word).length>max){lines.push(line);line=word;}else line=line?line+' '+word:word;}if(line)lines.push(line);return lines;}
async function* files(dir){for(const f of await readdir(dir,{withFileTypes:true})){const p=join(dir,f.name);if(f.isDirectory())yield*files(p);else if(f.name.endsWith('.md'))yield p;}}
for await(const path of files('src/content/noticias')){
 const raw=await readFile(path,'utf8');const front=raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);if(!front)continue;
 const data=parse(front[1]);if(data.draft)continue;
 const id=path.replace(/^src\/content\/noticias\//,'').replace(/\.md$/,'');const info=coverInfo(id,data);
 let size=48,lines=wrap(data.title,26);if(lines.length>4){size=40;lines=wrap(data.title,32);}if(lines.length>5){size=32;lines=wrap(data.title,40);}
 const gap=size*1.18;const start=500-(lines.length-1)*gap;
 const text=lines.map((line,i)=>`<text x="48" y="${start+i*gap}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="700" fill="white">${esc(line)}</text>`).join('');
 const date=new Date(data.date).toLocaleDateString('es-CL',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
 const svg=`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="shade"><stop offset="0" stop-color="#08264c" stop-opacity=".97"/><stop offset=".38" stop-color="#08264c" stop-opacity=".86"/><stop offset=".75" stop-color="#08264c" stop-opacity=".16"/><stop offset="1" stop-color="#08264c" stop-opacity=".04"/></linearGradient><linearGradient id="base" x1="0" y1="0" x2="0" y2="1"><stop offset=".25" stop-color="#08264c" stop-opacity="0"/><stop offset="1" stop-color="#08264c" stop-opacity=".65"/></linearGradient></defs><rect width="1200" height="630" fill="url(#shade)"/><rect width="1200" height="630" fill="url(#base)"/><text x="48" y="48" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="white">Escuela Básica Berta Hidalgo Barahona</text><text x="48" y="76" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="white">Tahuinco · Salamanca</text><text x="48" y="${start-55}" font-family="Arial, Helvetica, sans-serif" font-size="17" letter-spacing="2" fill="white">${esc((data.category||'Comunidad').toUpperCase())}</text>${text}<text x="48" y="566" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="white">${esc(date)}</text></svg>`;
 const out='public'+info.url;await mkdir(dirname(out),{recursive:true});
 await sharp(info.file).resize(1200,630,{fit:'cover',position:'centre'}).composite([{input:Buffer.from(svg)}]).jpeg({quality:88,mozjpeg:true}).toFile(out);
 console.log('Portada social:',info.url);
}
