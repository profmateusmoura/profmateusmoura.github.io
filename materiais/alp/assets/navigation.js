(() => {
 'use strict';
 const theme=document.getElementById('theme-toggle'),root=document.documentElement;
 const moon='<path d="M20.5 14.1A8 8 0 0 1 9.9 3.5 8 8 0 1 0 20.5 14.1Z"/>';
 const sun='<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>';
 function syncTheme(){const dark=root.dataset.theme==='dark';theme.querySelector('svg').innerHTML=dark?sun:moon;theme.title=dark?'Ativar tema claro':'Ativar tema escuro';theme.setAttribute('aria-label',theme.title);}
 syncTheme();new MutationObserver(syncTheme).observe(root,{attributes:true,attributeFilter:['data-theme']});
 const sidebar=document.getElementById('sidebar'),toggle=document.getElementById('menu-toggle');
 toggle.addEventListener('click',()=>{if(toggle.getAttribute('aria-expanded')==='true'){const current=sidebar.querySelector('.nav-module.active')||sidebar.querySelector('.portal-return');current?.focus();current?.scrollIntoView({block:'nearest'});}});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&sidebar.contains(document.activeElement))toggle.focus();});
 const backdrop=document.getElementById('search-backdrop'),dialog=backdrop.querySelector('.search-dialog');
 dialog.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const all=[...dialog.querySelectorAll('button,a[href],input')].filter(el=>!el.disabled&&el.getClientRects().length);const first=all[0],last=all.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
 document.getElementById('search-results').addEventListener('click',event=>{const link=event.target.closest('a');if(!link)return;const target=new URL(link.href);if(target.pathname===location.pathname){document.getElementById('search-close').click();const heading=document.getElementById(decodeURIComponent(target.hash.slice(1)));if(heading){heading.tabIndex=-1;requestAnimationFrame(()=>heading.focus());}}});
})();
