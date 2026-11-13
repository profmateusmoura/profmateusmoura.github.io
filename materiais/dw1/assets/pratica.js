(() => {
  'use strict';
  document.querySelectorAll('[data-practice]').forEach(section => {
    const data = window.PED_PRACTICE[section.dataset.practice];
    if (!data) return;
    const get = selector => section.querySelector(selector);
    let index = 0;
    const render = () => {
      const [description, values] = data.frames[index];
      get('[data-step]').textContent = `Estado ${index + 1} de ${data.frames.length}: ${description}`;
      get('[data-state]').replaceChildren();
      if (!values.length) get('[data-state]').textContent = 'Vazio — nenhum elemento neste estado.';
      values.forEach(value => {
        const cell = document.createElement('span');
        cell.className = 'ped-cell'; cell.textContent = String(value);
        get('[data-state]').append(cell);
      });
      get('[data-back]').disabled = index === 0;
      get('[data-next]').disabled = index === data.frames.length - 1;
    };
    get('[data-back]').onclick = () => { if (index > 0) index--; render(); };
    get('[data-next]').onclick = () => { if (index < data.frames.length - 1) index++; render(); };
    get('[data-reset]').onclick = () => {
      index = 0; get('[data-answer]').value = ''; get('[data-feedback]').textContent = ''; render();
    };
    const check = () => {
      const input = get('[data-answer]');
      get('[data-feedback]').textContent = input.value.trim() === '' ? 'Digite sua previsão antes de conferir.' :
        input.valueAsNumber === Number(data.answer) ? 'Correto! ' + data.why : 'Ainda não. ' + data.why + ' Revise os estados e tente novamente.';
    };
    get('[data-check]').onclick = check;
    get('[data-answer]').onkeydown = event => { if (event.key === 'Enter') check(); };
    render(); get('[data-interaction]').hidden = false;
  });
})();
