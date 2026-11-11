(() => {
  'use strict';
  const frames=new Set();
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)entry.target.contentWindow?.postMessage({type:'ped-pause'},location.origin==='null'?'*':location.origin);}),{threshold:0});
  document.querySelectorAll('[data-load-animation]').forEach(button=>{
    button.onclick=()=>{
      const frame=document.createElement('iframe');frame.src=button.dataset.loadAnimation;frame.title='Demonstração animada: '+button.dataset.title;
      button.parentElement.querySelector('[data-animation-slot]').append(frame);frames.add(frame);observer.observe(frame);button.hidden=true;
    };
  });
  window.addEventListener('message',event=>{
    if(event.origin!==location.origin||event.data?.type!=='ped-animation-size')return;
    const frame=[...frames].find(f=>f.contentWindow===event.source);const height=event.data.height;
    if(frame&&Number.isFinite(height)&&height>=200&&height<=1800)frame.style.height=Math.ceil(height)+'px';
  });
})();
