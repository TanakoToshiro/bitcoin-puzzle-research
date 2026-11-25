import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {marked} from 'marked';

const here=path.dirname(fileURLToPath(import.meta.url));
const repo=path.resolve(here,'..');
const out=path.join(here,'dist');
const topics=[
 ['01-historical-generators','Исторические генераторы','Historical generators','Python, BX/SX, .NET и конечные пространства seed.','Python, BX/SX, .NET and finite seed spaces.','cpu'],
 ['02-prng-recovery','Состояния PRNG','PRNG state recovery','MT19937, RNG64 и ограничения на скрытое состояние.','MT19937, RNG64 and constraints on hidden states.','nodes'],
 ['03-wallets','Кошельки и дочерние ключи','Wallets & child keys','Исторические derivation, импорт, экспорт и порядок.','Historical derivation, import, export and ordering.','wallet'],
 ['04-sequences-and-lattices','Последовательности и решётки','Sequences & lattices','Скрытые рекурсии, малые эталоны и пределы восстановления.','Hidden recurrences, small reference cases and recovery limits.','grid'],
 ['05-signatures-and-provenance','Подписи и происхождение','Signatures & provenance','Nonce-точки, транзакции и архивные источники.','Nonce points, transactions and archival sources.','fingerprint'],
 ['06-key-position-statistics','Положение ключей','Key-position statistics','Предикторы, статистические связи и мощность тестов.','Predictors, statistical relationships and test power.','chart'],
 ['07-masks-and-order','Маски и порядок','Masks & ordering','Что наблюдается в ключах и что остаётся гипотезой.','What keys reveal and what remains a hypothesis.','layers'],
 ['08-methodology-and-history','Методика и история','Methods & history','Протоколы, независимые сверки и журнал исследований.','Protocols, independent audits and the research journal.','book']
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
marked.use({extensions:[
 {name:'mathBlock',level:'block',start:s=>s.search(/\$\$|\\\[/),tokenizer(s){const m=/^(?:\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\])(?:\n|$)/.exec(s);if(m)return{type:'mathBlock',raw:m[0]}},renderer:t=>`<div class="math-block">${esc(t.raw)}</div>\n`},
 {name:'mathInline',level:'inline',start:s=>s.search(/\\\(/),tokenizer(s){const m=/^\\\([^\n]+?\\\)/.exec(s);if(m)return{type:'mathInline',raw:m[0]}},renderer:t=>`<span class="math-inline">${esc(t.raw)}</span>`}
]});
const plain=s=>marked.parse(String(s)).replace(/<[^>]*>/g,' ').replace(/&(?:amp|lt|gt|quot|#39|#x27);/g,x=>({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&#x27;':"'"}[x])).replace(/\s+/g,' ').trim();
const slug=s=>plain(s).toLowerCase().replace(/[^\p{L}\p{N}_\-\s]/gu,'').replace(/ /g,'-');
async function walk(dir){let result=[];for(const item of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,item.name);if(item.isDirectory())result.push(...await walk(p));else result.push(p)}return result.sort()}
async function write(p,value){await fs.mkdir(path.dirname(p),{recursive:true});await fs.writeFile(p,value)}
const englishStatus=new Map((await fs.readFile(path.join(repo,'en/metadata/translation-manifest.csv'),'utf8')).trim().split('\n').slice(1).map(l=>{const a=l.replace(/\r$/,'').split(',');return[a[0],a[3]]}));
await fs.mkdir(out,{recursive:true});
await fs.cp(path.join(here,'src'),out,{recursive:true});
await fs.mkdir(path.join(out,'vendor'),{recursive:true});
await fs.copyFile(path.join(here,'node_modules/dompurify/dist/purify.min.js'),path.join(out,'vendor/purify.min.js'));
for(const pkg of ['marked','dompurify','katex'])await fs.copyFile(path.join(here,'node_modules',pkg,'LICENSE'),path.join(out,'vendor',pkg+'-LICENSE.txt'));
for(const name of ['katex.min.js','katex.min.css','contrib/auto-render.min.js'])await fs.copyFile(path.join(here,'node_modules/katex/dist',name),path.join(out,'vendor',path.basename(name)));
await fs.cp(path.join(here,'node_modules/katex/dist/fonts'),path.join(out,'vendor/fonts'),{recursive:true});
const counts={};
for(const lang of ['ru','en']){
 const seriesTopic=new Map();
 for(const [id] of topics){const text=await fs.readFile(path.join(repo,lang,'topics',id+'.md'),'utf8');for(const match of text.matchAll(/reports\/experiments\/([^/)]+)\/INDEX\.md/g))seriesTopic.set(match[1],id)}
 const catalog=[],search=[];
 const files=await walk(path.join(repo,lang));
 for(const file of files){
  const rel=path.relative(path.join(repo,lang),file).split(path.sep).join('/');
  if(!file.endsWith('.md')){await write(path.join(out,'archive',lang,rel),await fs.readFile(file));continue}
  const original=await fs.readFile(file,'utf8');
  let lines=original.split(/\r?\n/);let start=lines.findIndex(l=>/^#\s/.test(l));
  const title=start>=0?plain(lines[start].replace(/^#\s+/,'')):path.basename(file,'.md');
  lines=start>=0?lines.slice(start+1):lines;
  while(lines.length&&(!lines[0].trim()||/^> |^\[(?:Home|Начало|English|Правила|Reading|Русский|Документа)/.test(lines[0])))lines.shift();
  const body=lines.join('\n');
  const sectionIds=new Map(),toc=[];
  const renderer=new marked.Renderer();
  renderer.heading=function(token){const base=slug(token.text);const n=sectionIds.get(base)||0;sectionIds.set(base,n+1);const id=base+(n?'-'+n:'');if(token.depth<=3)toc.push({title:plain(token.text),id,level:token.depth});return `<h${token.depth} id="${esc(id)}">${this.parser.parseInline(token.tokens)}</h${token.depth}>\n`};
  const html=marked.parse(body,{renderer,gfm:true,breaks:false});
  const series=rel.match(/^reports\/experiments\/([^/]+)/)?.[1]||null;
  const dateMatch=(series||rel).match(/(20\d{2})(\d{2})(\d{2})/);
  const date=dateMatch?`${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`:null;
  const topic=series?seriesTopic.get(series)||topics.at(-1)[0]:rel.startsWith('topics/0')?path.basename(rel,'.md'):topics.at(-1)[0];
  const type=/\/(?:FINAL_REPORT|CONCLUSION|RESULTS)\.md$/.test(rel)?'report':/\/(?:PROTOCOL|PLAN|METHOD|MATH)\.md$/.test(rel)?'method':/\/(?:JOURNAL|LOG)\.md$/.test(rel)?'journal':rel.endsWith('/INDEX.md')||rel==='docs/DOCUMENT_INDEX.md'?'index':'document';
  const paragraph=body.split(/\n\s*\n/).find(p=>p.trim()&&!/^[#>|`]/.test(p.trim()))||body;
  const info={path:rel,title,series,topic,date,type,excerpt:plain(paragraph).slice(0,240),translation:lang==='en'?(englishStatus.get(rel)||'local-machine-translation'):'original'};
  catalog.push(info);search.push({path:rel,text:plain(body).toLowerCase().replaceAll('ё','е')});
  await write(path.join(out,'content',lang,rel+'.json'),JSON.stringify({...info,html,toc}));
 }
 const topicInfo=topics.map(([id,ru,en,rd,ed,icon])=>({id,title:lang==='ru'?ru:en,description:lang==='ru'?rd:ed,icon,series:[...seriesTopic].filter(([,v])=>v===id).length}));
 await write(path.join(out,`catalog-${lang}.json`),JSON.stringify({documents:catalog,topics:topicInfo,seriesCount:seriesTopic.size,snapshot:'2026-11-25',latest:'2026-11-14'}));
 await write(path.join(out,`search-${lang}.json`),JSON.stringify(search));
 counts[lang]=catalog.length;
}
await write(path.join(out,'.nojekyll'),'');
console.log(JSON.stringify({status:'built',documents:counts,output:'site/dist',networkDependencies:false}));
