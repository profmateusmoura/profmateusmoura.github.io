(() => {
  'use strict';
  let paused=true, callback=null, raf=0, previous=0;
  const root=document.documentElement, play=document.getElementById('play'), status=document.getElementById('animation-status');
  function theme(){try{root.dataset.theme=parent!==window?parent.document.documentElement.dataset.theme||'light':localStorage.getItem('pi-theme')||'light';}catch(e){root.dataset.theme='light';}}
  theme();
  try{if(parent!==window)new MutationObserver(()=>{theme();window.pedRedraw();}).observe(parent.document.documentElement,{attributes:true,attributeFilter:['data-theme']});}catch(e){}
  function tick(time){raf=0;if(paused||document.hidden)return;const fps=Number(document.getElementById('speed').value);if(time-previous>=1000/fps){previous=time;callback();}else raf=requestAnimationFrame(tick);}
  window.pedIsPaused=()=>paused;
  window.pedSchedule=fn=>{callback=fn;if(!paused&&!raf&&!document.hidden)raf=requestAnimationFrame(tick);};
  window.pedRedraw=()=>{if(callback){const wasPaused=paused;paused=true;callback();paused=wasPaused;}};
  function pause(){paused=true;cancelAnimationFrame(raf);raf=0;play.textContent='Continuar animação';status.textContent='Pausada. Observe o estado antes de continuar.';}
  play.onclick=()=>{if(!paused){pause();return;}paused=false;play.textContent='Pausar animação';status.textContent='Em execução. Use Pausar para examinar um movimento.';window.pedSchedule(callback);};
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});
  window.addEventListener('message',event=>{if(event.source===parent&&event.data?.type==='ped-pause')pause();});
  const size=()=>{if(parent!==window)parent.postMessage({type:'ped-animation-size',height:document.body.scrollHeight+24},location.origin==='null'?'*':location.origin);};
  new ResizeObserver(size).observe(document.body);window.addEventListener('load',size);
})();
