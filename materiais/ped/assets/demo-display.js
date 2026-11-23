(() => {
  function attach(panel) {
    if (panel.querySelector(':scope > .ped-expand-button')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'ped-expand-button';
    button.textContent = 'Abrir em tela inteira';
    button.setAttribute('aria-pressed', 'false');
    let focus;
    function update() {
      const open = document.fullscreenElement === panel || panel.classList.contains('ped-expanded');
      button.textContent = open ? 'Voltar ao material' : 'Abrir em tela inteira';
      button.setAttribute('aria-pressed', String(open));
      document.body.classList.toggle('ped-expanded-open', Boolean(document.querySelector('.ped-expanded')));
    }
    button.onclick = async () => {
      if (document.fullscreenElement === panel) { await document.exitFullscreen(); return; }
      if (panel.classList.contains('ped-expanded')) {
        panel.classList.remove('ped-expanded'); update(); focus?.focus(); return;
      }
      focus = document.activeElement;
      if (panel.requestFullscreen) {
        try { await panel.requestFullscreen(); return; } catch {}
      }
      panel.classList.add('ped-expanded');
      update();
      button.focus();
    };
    document.addEventListener('fullscreenchange', update);
    panel.addEventListener('keydown', event => {
      if (!panel.classList.contains('ped-expanded')) return;
      if (event.key === 'Escape') {
        event.preventDefault(); panel.classList.remove('ped-expanded'); update(); focus?.focus();
      }
      if (event.key === 'Tab') {
        const controls = [...panel.querySelectorAll('button:not(:disabled),input,select,summary,a[href],iframe')]
          .filter(node => node.getClientRects().length);
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    panel.prepend(button);
  }
  document.querySelectorAll('.ped-animation,[data-practice]').forEach(attach);
  if (document.getElementById('animCanvas')) attach(document.querySelector('.container'));
})();
