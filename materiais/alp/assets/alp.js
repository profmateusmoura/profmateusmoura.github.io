(() => {
 'use strict';
 const sidebar=document.getElementById('sidebar'), menu=document.getElementById('menu');
 menu.onclick=()=>{const open=sidebar.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));};
 document.addEventListener('keydown',event=>{if(event.key==='Escape'){sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false');}});
 document.addEventListener('click',event=>{if(!sidebar.contains(event.target)&&event.target!==menu){sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false');}});
 document.getElementById('theme').onclick=()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('pi-theme',theme);}catch(e){}};
 document.querySelectorAll('[data-trace]').forEach(box=>{
  const steps=window.ALP_STEPS[Number(box.dataset.trace)];let step=-1;
  const render=()=>{box.querySelector('[data-state]').textContent=step<0?'Antes de começar: leia o código e preveja a saída.':`Passo ${step+1}/${steps.length}: ${steps[step]}`;box.querySelector('progress').value=step+1;box.querySelector('[data-back]').disabled=step<0;box.querySelector('[data-next]').disabled=step===steps.length-1;};
  box.querySelector('[data-next]').onclick=()=>{step++;render();};box.querySelector('[data-back]').onclick=()=>{step--;render();};box.querySelector('[data-reset]').onclick=()=>{step=-1;render();};render();
 });
 document.querySelectorAll('.quiz button').forEach(button=>button.onclick=()=>{button.parentElement.querySelector('[data-feedback]').textContent=(button.dataset.correct==='true'?'Correto! ':'Reveja a ideia. ')+button.dataset.why;});
 const input=document.getElementById('activity-search');
 if(input){let entries=null;const results=document.getElementById('search-results');const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  input.addEventListener('input',async()=>{const query=normalize(input.value.trim());results.replaceChildren();if(query.length<2)return;
   try{entries=entries||await fetch('assets/search-index.json').then(r=>{if(!r.ok)throw Error();return r.json();});if(query!==normalize(input.value.trim()))return;
    const hits=entries.filter(e=>normalize(e.title+' '+e.text).includes(query)).slice(0,25);if(!hits.length)results.textContent='Nenhuma explicação encontrada.';
    hits.forEach(hit=>{const a=document.createElement('a');a.href=hit.url;a.textContent=hit.title;results.append(a);});
   }catch(e){results.textContent='A busca está indisponível aqui. Use os cadernos abaixo para encontrar os conceitos.';}
  });
 }
 // Reveal a linked activity when arriving from search.
 const reveal=()=>{const id=decodeURIComponent(location.hash.slice(1));const target=document.getElementById(id);if(target?.tagName==='DETAILS'){target.open=true;target.scrollIntoView();}};
 window.addEventListener('hashchange',reveal);reveal();
})();
