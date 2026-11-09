(()=>{
  'use strict';
  const items = Array.isArray(window.CATALOGO_MATERIAIS) ? window.CATALOGO_MATERIAIS : [];
  const $ = (selector) => document.querySelector(selector);
  const grid = $('#catalog-grid'), search = $('#search'), filters = $('#filters');
  const count = $('#cards-counter'), empty = $('#empty');
  let category = 'Todos';
  function norm(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
  function el(tag, cls, txt){const node=document.createElement(tag);if(cls)node.className=cls;if(txt!==undefined)node.textContent=txt;return node}
  function iconArrow(){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.innerHTML='<path d="m5 12 14 0m-6-6 6 6-6 6"/>';return svg}
  function card(item){
    const article=el('article','material-card');article.dataset.cor=['azul','roxo'].includes(item.cor)?item.cor:'verde';
    const cover=el('div','card-art');cover.append(el('span','art-label',item.categoria||'Material'),el('span','art-sign',item.destaque||'01'),el('div','art-lines'));article.append(cover);
    const inside=el('div','card-inner'),meta=el('div','card-meta');meta.append(el('span','category',item.categoria||'Material'),el('span','', '•'),el('span','',item.nivel||'Material de apoio'));
    inside.append(meta,el('h3','',item.titulo||'Novo conteúdo'),el('p','card-subtitle',item.subtitulo||''),el('p','card-description',item.descricao||''));
    const tags=el('div','tag-list');(item.temas||[]).slice(0,5).forEach(t=>tags.append(el('span','',t)));inside.append(tags);article.append(inside);
    const foot=el('div','card-bottom');foot.append(el('small','',item.detalhes||'Material de estudo'));if(item.disponivel===false){article.classList.add('material-upcoming');const status=el('span','card-upcoming','Em preparação');status.setAttribute('aria-label','Material ainda não publicado');foot.append(status)}else{const link=el('a','card-link','Acessar material');link.append(iconArrow());link.href=item.caminho||'#';foot.append(link)}article.append(foot);
    return article;
  }
  function update(){
    const q=norm(search.value.trim());const matches=items.filter(item=>(category==='Todos'||item.categoria===category)&&norm([item.titulo,item.subtitulo,item.descricao,item.categoria,...(item.temas||[])].join(' ')).includes(q));
    grid.replaceChildren(...matches.map(card));empty.hidden=matches.length!==0;count.textContent=matches.length+' '+(matches.length===1?'material':'materiais');
    [...filters.children].forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===category)));
  }
  function buildFilters(){const cats=['Todos',...new Set(items.map(i=>i.categoria).filter(Boolean))];filters.replaceChildren(...cats.map(c=>{const b=el('button','filter-btn',c);b.type='button';b.dataset.category=c;b.setAttribute('aria-pressed',String(c===category));b.addEventListener('click',()=>{category=c;update()});return b}));}
  buildFilters();update();
  const avail=items.filter(i=>i.disponivel!==false).length;
  $('#total-materiais').textContent=avail;
  $('#label-materiais').textContent=avail===1?'material disponível':'materiais disponíveis';
  search.addEventListener('input',update);
  $('#clear-filters').addEventListener('click',()=>{category='Todos';search.value='';update();search.focus()});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!e.altKey&&!e.metaKey&&!e.ctrlKey){e.preventDefault();search.focus()}});
  $('#year').textContent=new Date().getFullYear();
  const themeBtn=$('#theme-toggle');
  function themeLabel(){themeBtn.setAttribute('aria-label',document.documentElement.dataset.theme==='dark'?'Ativar tema claro':'Ativar tema escuro')}
  themeLabel();themeBtn.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('portal-theme',next)}catch(e){}themeLabel()});
})();
