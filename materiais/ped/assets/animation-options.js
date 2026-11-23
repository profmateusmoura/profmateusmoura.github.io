(() => {
  const settings = window.pedAnimationOptions;
  if (!settings) return;
  const container = document.querySelector('.container');
  const form = document.createElement('form');
  form.className = 'animation-settings';
  form.innerHTML = `
    <label>Quantidade de elementos <input name="count" type="number" min="${settings.min}" max="${settings.max}" value="${settings.kind === 'prices' ? 10 : settings.kind === 'search' ? 12 : 8}" required></label>
    ${settings.kind === 'prices' ? '<label>Organização <select name="order"><option value="mixed">Misturados</option><option value="ascending">Crescente</option><option value="descending">Decrescente</option><option value="duplicates">Com repetições</option></select></label>' : ''}
    ${settings.kind === 'search' ? '<label>ID procurado <input name="target" type="number" min="1" max="999" value="7" required></label>' : ''}
    <button>Preparar elementos</button>`;
  container.querySelector('canvas').before(form);
  const next = document.createElement('button');
  next.type = 'button';
  next.textContent = 'Próxima operação';
  next.onclick = () => window.pedStep();
  container.querySelector('.controls').append(next);
  function prepare() {
    const count = Number(form.elements.count.value);
    const target = Number(form.elements.target?.value || 7);
    if (!Number.isInteger(count) || count < settings.min || count > settings.max) return;
    let values = Array.from({ length: count }, (_, i) => 12.9 + i * 12);
    const order = form.elements.order?.value;
    if (order === 'descending') values.reverse();
    if (order === 'duplicates') values = values.map((_, i) => 24.9 + (i % 3) * 20);
    if (order === 'mixed') {
      const odd = values.filter((_, i) => i % 2).reverse();
      values = odd.concat(values.filter((_, i) => i % 2 === 0));
    }
    window.pedPause();
    settings.apply({ count, values, target });
    window.pedRedraw();
    document.getElementById('animation-status').textContent =
      count + ' elementos preparados. Avance uma operação ou inicie a animação.';
  }
  form.onsubmit = event => { event.preventDefault(); prepare(); };
  if (settings.kind === 'linked' || settings.kind === 'stack' || settings.kind === 'queue' || settings.kind === 'hash') prepare();
})();
