/* Cada estado é uma fotografia anterior ou posterior a uma única operação. */
function pedCardTrace(method, numbers, target) {
  let cards = numbers.map((value, id) => ({ value, id }));
  const frames = [];
  const fixed = new Set();
  let comparisons = 0;
  let moves = 0;
  function frame(message, focus = [], extra = {}) {
    frames.push({
      cards: cards.map(card => ({ ...card })), fixed: [...fixed],
      focus, message, comparisons, moves, ...extra,
    });
  }
  function compare(message, focus, extra = {}) {
    comparisons++;
    frame(message, focus, extra);
  }
  function swap(a, b, message) {
    if (a === b) return;
    [cards[a], cards[b]] = [cards[b], cards[a]];
    moves++;
    frame(message, [a, b], { changed: [a, b] });
  }
  frame('Organize os alunos na sequência mostrada. Cada posição começa no índice 0. Valores repetidos pertencem a alunos diferentes.');
  if (method === 'linear' || method === 'binary') {
    let found = -1;
    if (method === 'linear') {
      for (let i = 0; i < cards.length; i++) {
        compare('Compare a carta da posição ' + i + ' com o alvo ' + target + '.', [i], { excluded: Array.from({ length: i }, (_, k) => k) });
        if (cards[i].value === target) { found = i; break; }
        frame('O valor é diferente. Descarte somente esta posição e avance uma carta.', [], { excluded: Array.from({ length: i + 1 }, (_, k) => k) });
      }
    } else {
      let left = 0, right = cards.length - 1;
      while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const excluded = cards.map((_, i) => i).filter(i => i < left || i > right);
        compare('Intervalo [' + left + ', ' + right + ']. Meio = piso((' + left + ' + ' + right + ') / 2) = ' + middle + '. Compare ' + cards[middle].value + ' com ' + target + '.', [middle], { excluded, range: [left, right] });
        if (cards[middle].value === target) { found = middle; break; }
        if (cards[middle].value < target) {
          left = middle + 1;
          frame('A carta do meio é menor que o alvo. Elimine o meio e tudo à esquerda dele.', [], {
            excluded: cards.map((_, i) => i).filter(i => i < left || i > right),
          });
        } else {
          right = middle - 1;
          frame('A carta do meio é maior que o alvo. Elimine o meio e tudo à direita dele.', [], {
            excluded: cards.map((_, i) => i).filter(i => i < left || i > right),
          });
        }
      }
    }
    frame(found < 0 ? 'Busca encerrada. O alvo não está na sequência.' :
      'Alvo encontrado no índice ' + found + '. Esta busca encerra na primeira igualdade que examina. Com repetições, a busca binária pode encontrar uma ocorrência que não é a primeira da lista.',
      [], { found, excluded: found < 0 ? cards.map((_, i) => i) : [] });
    return frames;
  }
  if (method === 'bubble') {
    for (let end = cards.length - 1; end > 0; end--) {
      for (let i = 0; i < end; i++) {
        compare('Compare os vizinhos nas posições ' + i + ' e ' + (i + 1) + '. O da esquerda é maior?', [i, i + 1]);
        if (cards[i].value > cards[i + 1].value) swap(i, i + 1, 'Troque os dois alunos de posição. Agora o maior está à direita.');
        else frame('Mantenha as posições. Em caso de empate, estes alunos não trocam.', [i, i + 1]);
      }
      fixed.add(end);
      frame('Fim da passagem. O maior valor ainda livre chegou à posição ' + end + ', que é definitiva.');
    }
  }
  if (method === 'selection') {
    for (let start = 0; start < cards.length - 1; start++) {
      let minimum = start;
      frame('Comece na posição ' + start + '. Esta carta é a candidata a menor.', [minimum], { candidate: minimum });
      for (let i = start + 1; i < cards.length; i++) {
        compare('Compare a candidata ' + cards[minimum].value + ' com a carta ' + cards[i].value + '. Procure um valor estritamente menor.', [minimum, i], { candidate: minimum });
        if (cards[i].value < cards[minimum].value) minimum = i;
        frame('A candidata atual está no índice ' + minimum + '. Nenhuma troca foi feita nesta comparação.', [], { candidate: minimum });
      }
      swap(start, minimum, 'Troque a menor carta restante com a primeira posição livre.');
      fixed.add(start);
      frame('A posição ' + start + ' está definitiva. A próxima procura começa uma posição adiante.');
    }
  }
  if (method === 'insertion') {
    frame('A primeira carta forma um grupo ordenado de tamanho 1. Ela ainda pode mudar de posição.', [], { ordered: [0] });
    for (let i = 1; i < cards.length; i++) {
      let j = i;
      frame('A carta ' + cards[i].value + ' entra no grupo ordenado. Vamos deslocá-la para a esquerda quando necessário.', [i], { ordered: Array.from({ length: i }, (_, k) => k) });
      while (j > 0) {
        compare('Compare a carta em inserção com sua vizinha à esquerda.', [j - 1, j], { ordered: Array.from({ length: i }, (_, k) => k) });
        if (cards[j - 1].value <= cards[j].value) {
          frame('Pare. A vizinha é menor ou igual. O empate preserva a ordem entre estes alunos.', [j - 1, j]);
          break;
        }
        swap(j - 1, j, 'A carta em inserção anda uma posição à esquerda. A vizinha anda uma à direita.');
        j--;
      }
      frame('As primeiras ' + (i + 1) + ' cartas estão ordenadas entre si. Elas ainda podem ser deslocadas por cartas futuras.', [], { ordered: Array.from({ length: i + 1 }, (_, k) => k) });
    }
  }
  if (method === 'merge') {
    function merge(left, right, depth) {
      if (left >= right) {
        frame('Grupo [' + left + ', ' + right + '] tem uma carta. Ele já está ordenado entre si.', [], { range: [left, right], depth });
        return;
      }
      const middle = Math.floor((left + right) / 2);
      frame('Divida o grupo [' + left + ', ' + right + '] em [' + left + ', ' + middle + '] e [' + (middle + 1) + ', ' + right + '].', [], { range: [left, right], depth });
      merge(left, middle, depth + 1);
      merge(middle + 1, right, depth + 1);
      const a = cards.slice(left, middle + 1), b = cards.slice(middle + 1, right + 1), output = [];
      let i = 0, j = 0;
      const trays = () => ({ leftTray: a.slice(i), rightTray: b.slice(j), output: output.slice() });
      frame('Monte duas filas auxiliares com os grupos ordenados. A linha principal aguarda a intercalação completa.', [], { ...trays(), range: [left, right], depth });
      while (i < a.length || j < b.length) {
        if (i < a.length && j < b.length) compare('Compare somente a primeira carta livre de cada fila auxiliar.', [], {
          ...trays(), compareTrays: true, range: [left, right], depth,
        });
        if (j >= b.length || (i < a.length && a[i].value <= b[j].value)) output.push(a[i++]);
        else output.push(b[j++]);
        moves++;
        frame('Leve a menor carta livre para a saída auxiliar. No empate, escolha a fila esquerda.', [], { ...trays(), range: [left, right], depth });
      }
      cards.splice(left, output.length, ...output);
      frame('Devolva a saída auxiliar ao grupo [' + left + ', ' + right + ']. Ele está ordenado entre si.', [], {
        ordered: Array.from({ length: right - left + 1 }, (_, k) => left + k), range: [left, right], depth,
      });
    }
    merge(0, cards.length - 1, 0);
  }
  if (method === 'quick') {
    function quick(left, right, depth) {
      if (left > right) return;
      if (left === right) { fixed.add(left); frame('O grupo tem uma única carta. Esta posição é definitiva.'); return; }
      const pivot = cards[right].value;
      let boundary = left;
      frame('Pivô = última carta do grupo [' + left + ', ' + right + '], valor ' + pivot + '. A fronteira começa em ' + boundary + '.', [], { pivot: right, range: [left, right], depth });
      for (let i = left; i < right; i++) {
        compare('Compare ' + cards[i].value + ' com o pivô ' + pivot + '. Valores menores ou iguais entram no grupo da esquerda. Fronteira = ' + boundary + '.', [i, right], { pivot: right, range: [left, right], depth });
        if (cards[i].value <= pivot) {
          swap(i, boundary, 'Leve a carta para o grupo menor ou igual ao pivô.');
          boundary++;
          frame('Avance a fronteira para ' + boundary + '. Os grupos ainda não estão ordenados internamente.', [], { pivot: right, range: [left, right], depth });
        } else frame('Mantenha a carta no grupo maior que o pivô.', [i], { pivot: right, range: [left, right], depth });
      }
      swap(boundary, right, 'Coloque o pivô na fronteira entre os dois grupos.');
      fixed.add(boundary);
      frame('O pivô ficou na posição definitiva ' + boundary + '. Resolva cada lado separadamente.', [], { pivot: boundary, range: [left, right], depth });
      quick(left, boundary - 1, depth + 1);
      quick(boundary + 1, right, depth + 1);
    }
    quick(0, cards.length - 1, 0);
  }
  cards.forEach((_, i) => fixed.add(i));
  frame('Ordenação concluída. Todas as posições são definitivas. Compare a ordem dos alunos que começaram com o mesmo número.');
  return frames;
}

(() => {
  if (typeof document === 'undefined') return;
  const methods = [
    ['linear', '2-busca-linear-verificar-um-por-um', 'Busca linear',
      'O alvo fica anunciado no quadro. Um aluno por vez levanta sua carta. Ao encontrar o alvo, encerre a busca. Repita procurando um número ausente e depois procure todas as ocorrências de um repetido.'],
    ['binary', '3-busca-binaria-eliminar-metade-das-possibilidades', 'Busca binária',
      'Organize a fila por valor crescente antes de começar. Dois alunos apontam os limites, e outro identifica o meio. Após cada comparação, quem saiu do intervalo abaixa a carta. Ninguém troca de posição durante a busca.'],
    ['bubble', '6-bubble-sort-comparar-vizinhos', 'Bubble Sort',
      'Dois alunos vizinhos levantam as cartas. Se o da esquerda tiver valor maior, eles trocam de posição. Ao fim de uma passagem, marque a última posição livre como definitiva. Repita sem incluir o trecho já resolvido.'],
    ['selection', '7-selection-sort-escolher-o-menor-restante', 'Selection Sort',
      'Um aluno aponta a primeira posição livre. Outro acompanha a candidata a menor carta. Examine o restante sem trocar alunos. Só depois da varredura troque a menor com a primeira posição livre e marque essa posição como definitiva.'],
    ['insertion', '8-insertion-sort-encaixar-cada-elemento-no-lugar-certo', 'Insertion Sort',
      'Delimite o grupo ordenado à esquerda. O próximo aluno entra nesse grupo e passa por vizinhos maiores até encaixar sua carta. Esta demonstração usa trocas entre vizinhos para representar o deslocamento. No código com chave temporária, guarde a carta, desloque as maiores e insira a chave no espaço aberto.'],
    ['merge', '10-merge-sort-dividir-ordenar-e-intercalar', 'Merge Sort',
      'Separe o grupo ao meio sucessivamente até restar um aluno por grupo. Para reunir dois grupos ordenados, forme duas filas. Compare apenas a frente de cada fila e encaminhe o menor para uma terceira fila. No empate, sai primeiro quem estava no grupo esquerdo. Cada aluno ocupa uma única fila física. As filas auxiliares da tela mostram o trabalho antes da atualização da linha principal.'],
    ['quick', '11-quick-sort-selecionar-um-pivo-e-separar-grupos', 'Quick Sort',
      'Reserve o último aluno como pivô. Marque uma fronteira no início do grupo. Cada carta menor ou igual ao pivô vai para a fronteira, que avança. No fim, troque o pivô com a carta da fronteira. Marque o pivô como definitivo e repita em cada lado. Esta é a partição de Lomuto.'],
  ];
  for (const [method, anchor, title, guide] of methods) {
    const heading = document.getElementById(anchor);
    if (!heading) continue;
    const panel = document.createElement('section');
    panel.className = 'number-card-demo';
    panel.setAttribute('aria-label', title + ' com cartas numeradas');
    panel.innerHTML = `
      <div class="cards-titlebar">
        <h3>Dinâmica com cartas · ${title}</h3>
        <button type="button" class="cards-fullscreen" aria-pressed="false">Abrir em tela inteira</button>
      </div>
      <p>${guide}</p>
      <details><summary>Preparar a turma e explorar repetições</summary>
        <p>Entregue uma carta com apenas um número a cada participante. Use 7 alunos para acompanhar o exemplo ou divida a turma em grupos. Escreva os índices no chão ou no quadro. Um aluno narra as decisões e outro contabiliza as comparações. Antes de avançar, peça que prevejam a próxima ação.</p>
        <p>Use a sequência 7, 3, 5, 3, 9, 1, 5. Nas cartas repetidas, acompanhe a identidade dos alunos pela ordem inicial. Na tela, “carta 1”, “carta 2” etc. identifica cada participante, sem mudar o valor comparado. Troque os papéis e repita com cartas já ordenadas, em ordem inversa e com todos os valores iguais.</p>
      </details>
      <form class="cards-settings">
        <label>Valores das cartas <input name="values" value="${method === 'binary' ? '1, 3, 3, 5, 5, 7, 9' : '7, 3, 5, 3, 9, 1, 5'}" required></label>
        ${method === 'linear' || method === 'binary' ? '<label>Número procurado <input name="target" type="number" value="3" required></label>' : ''}
        <button>Preparar cartas</button>
      </form>
      <p class="cards-error" role="alert"></p>
      <div class="cards-legend">
        <span class="state-compare">Comparando</span><span class="state-changed">Acabou de trocar</span>
        <span class="state-fixed">Posição definitiva / encontrado</span><span class="state-ordered">Grupo ordenado, pode mudar</span>
        <span class="state-excluded">Descartado na busca</span><span class="state-candidate">Candidato / pivô</span>
      </div>
      <div class="cards-line"></div><div class="cards-trays"></div>
      <p class="cards-explanation" aria-live="polite"></p>
      <p class="cards-counter"></p>
      <div class="cards-controls">
        <button type="button" data-action="first">Reiniciar</button>
        <button type="button" data-action="back">Passo anterior</button>
        <button type="button" data-action="next">Próximo passo</button>
      </div>`;
    heading.after(panel);
    const fullscreenButton = panel.querySelector('.cards-fullscreen');
    let previousFocus = null;
    function syncFullscreen() {
      const open = document.fullscreenElement === panel || panel.classList.contains('cards-expanded');
      fullscreenButton.textContent = open ? 'Voltar ao caderno' : 'Abrir em tela inteira';
      fullscreenButton.setAttribute('aria-pressed', String(open));
      document.body.classList.toggle('cards-overlay-open',
        Boolean(document.querySelector('.cards-expanded')));
    }
    function closeOverlay() {
      panel.classList.remove('cards-expanded');
      syncFullscreen();
      previousFocus?.focus();
    }
    fullscreenButton.onclick = async () => {
      if (document.fullscreenElement === panel) {
        await document.exitFullscreen();
        return;
      }
      if (panel.classList.contains('cards-expanded')) {
        closeOverlay();
        return;
      }
      previousFocus = document.activeElement;
      if (panel.requestFullscreen) {
        try {
          await panel.requestFullscreen();
          return;
        } catch {
          // Navegadores que bloqueiam fullscreen usam a expansão dentro da página.
        }
      }
      panel.classList.add('cards-expanded');
      syncFullscreen();
      fullscreenButton.focus();
    };
    document.addEventListener('fullscreenchange', () => {
      syncFullscreen();
      if (!document.fullscreenElement && previousFocus && !panel.classList.contains('cards-expanded')) {
        previousFocus.focus();
        previousFocus = null;
      }
    });
    panel.addEventListener('keydown', event => {
      if (!panel.classList.contains('cards-expanded')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeOverlay();
      }
      if (event.key === 'Tab') {
        const controls = [...panel.querySelectorAll('button:not(:disabled), input, summary')]
          .filter(control => control.getClientRects().length);
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
    const form = panel.querySelector('form');
    const error = panel.querySelector('.cards-error');
    let frames = [], step = 0;
    function cardNode(card, index, state, trayCompare = false) {
      const wrapper = document.createElement('div');
      wrapper.className = 'number-card-cell';
      const cardElement = document.createElement('div');
      cardElement.className = 'number-card';
      const labels = [];
      const states = [
        ['fixed', 'state-fixed', 'definitiva'], ['ordered', 'state-ordered', 'grupo ordenado'],
        ['focus', 'state-compare', 'comparando'], ['changed', 'state-changed', 'trocou'],
        ['excluded', 'state-excluded', 'descartada'],
      ];
      for (const [key, className, label] of states) {
        if (state[key]?.includes(index)) { cardElement.classList.add(className); labels.push(label); }
      }
      if (index === state.found) { cardElement.classList.add('state-fixed'); labels.push('encontrada'); }
      if (index === state.candidate || index === state.pivot) {
        cardElement.classList.add('state-candidate'); labels.push(index === state.pivot ? 'pivô' : 'candidata');
      }
      if (trayCompare) { cardElement.classList.add('state-compare'); labels.push('comparando'); }
      const value = document.createElement('strong');
      value.textContent = card.value;
      cardElement.append(value);
      const position = document.createElement('small');
      position.textContent = index === null ? '' : 'índice ' + index;
      const identity = document.createElement('small');
      identity.textContent = 'carta ' + (card.id + 1);
      const note = document.createElement('small');
      note.textContent = labels.join(' · ') || 'aguarda';
      wrapper.append(position, cardElement, identity, note);
      return wrapper;
    }
    function render() {
      const state = frames[step];
      const line = panel.querySelector('.cards-line');
      line.replaceChildren(...state.cards.map((card, index) => cardNode(card, index, state)));
      const trays = panel.querySelector('.cards-trays');
      trays.replaceChildren();
      if (state.range) {
        const range = document.createElement('p');
        range.textContent = 'Grupo ativo · índices ' + state.range[0] + ' a ' + state.range[1];
        trays.append(range);
      }
      for (const [key, name] of [['leftTray', 'Fila esquerda'], ['rightTray', 'Fila direita'], ['output', 'Saída auxiliar']]) {
        if (!state[key]) continue;
        const group = document.createElement('div');
        const label = document.createElement('p');
        label.textContent = name + (state[key].length ? '' : ' · vazia');
        const row = document.createElement('div');
        row.className = 'cards-line';
        row.append(...state[key].map((card, i) => cardNode(card, null, {}, state.compareTrays && key !== 'output' && i === 0)));
        group.append(label, row);
        trays.append(group);
      }
      panel.querySelector('.cards-explanation').textContent = state.message;
      panel.querySelector('.cards-counter').textContent = 'Passo ' + step + ' de ' + (frames.length - 1) +
        ' · Comparações: ' + state.comparisons + ' · ' + (method === 'merge' ? 'Cartas levadas à saída: ' : 'Trocas: ') + state.moves;
      panel.querySelector('[data-action="back"]').disabled = step === 0;
      panel.querySelector('[data-action="next"]').disabled = step === frames.length - 1;
    }
    function prepare() {
      const tokens = form.elements.values.value.trim().split(/[\s,;]+/);
      const values = tokens.map(Number);
      const target = Number(form.elements.target?.value || 0);
      if (tokens.length < 2 || tokens.length > 12 || values.some(value => !Number.isSafeInteger(value) || Math.abs(value) > 999) ||
        !Number.isSafeInteger(target)) {
        error.textContent = 'Use de 2 a 12 números inteiros entre -999 e 999, separados por vírgulas.';
        return;
      }
      if (method === 'binary' && values.some((value, i) => i > 0 && values[i - 1] > value)) {
        error.textContent = 'A busca binária exige cartas em ordem crescente. Ordene os valores antes de preparar.';
        return;
      }
      error.textContent = '';
      frames = pedCardTrace(method, values, target);
      step = 0;
      render();
    }
    form.onsubmit = event => { event.preventDefault(); prepare(); };
    panel.querySelector('[data-action="first"]').onclick = () => { step = 0; render(); };
    panel.querySelector('[data-action="back"]').onclick = () => { step = Math.max(0, step - 1); render(); };
    panel.querySelector('[data-action="next"]').onclick = () => { step = Math.min(frames.length - 1, step + 1); render(); };
    prepare();
  }
})();
