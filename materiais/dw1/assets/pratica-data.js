window.PED_PRACTICE = {
  "01-a": {
    "frames": [
      ["1. Usuário digita https://lojasblue.com.br/vitrine.html", ["Fase: Cliente", "DOM: vazio"]],
      ["2. Navegador envia requisição HTTP GET /vitrine.html", ["Método: GET", "Recurso: /vitrine.html"]],
      ["3. Servidor localiza o arquivo e responde HTTP 200 OK", ["Status: 200 OK", "Tipo: text/html"]],
      ["4. Parser lê <!DOCTYPE html> e <head> (UTF-8 e <title>)", ["Modo: HTML5 Padrão", "Aba: Lojas Blue"]],
      ["5. Parser constrói <body> com <h1> e <p> na tela", ["Filhos de html: 2 (head, body)", "Filhos de body: 2 (h1, p)"]]
    ],
    "answer": "2",
    "why": "O elemento raiz <html> possui exatamente 2 filhos diretos: <head> (metadados) e <body> (conteúdo visível)."
  },
  "01-b": {
    "frames": [
      ["Linha 1: <!DOCTYPE html> ativa o modo padrão HTML5", ["DOCTYPE: ativo", "Visível no body: 0"]],
      ["Linhas 3-6: <head> configura UTF-8, viewport e <title>", ["Aba: Lojas Blue", "Visível no body: 0"]],
      ["Linha 8: <h1>Catálogo Oficial</h1> entra no <body>", ["Aba: Lojas Blue", "Visível no body: 1 elemento (h1)"]]
    ],
    "answer": "1",
    "why": "Apenas o elemento <h1> está dentro de <body>; <meta> e <title> ficam no <head> e não aparecem como blocos no corpo da página."
  },
  "02-a": {
    "frames": [
      ["<h1>Lojas Blue — Catálogo 2026</h1> abre o documento", ["Nível atual: h1", "Total de h2: 0"]],
      ["<h2>1. Periféricos</h2> inicia a primeira seção", ["Nível atual: h2", "Total de h2: 1"]],
      ["<h3>1.1 Teclados</h3> e <h3>1.2 Mouses</h3> detalham subseções", ["Nível atual: h3", "Total de h2: 1"]],
      ["<h2>2. Papelaria Técnica</h2> inicia a segunda seção principal", ["Nível atual: h2", "Total de h2: 2"]]
    ],
    "answer": "2",
    "why": "O documento possui 1 título principal (h1), 2 seções de primeiro nível (h2) e 2 subcategorias (h3)."
  },
  "02-b": {
    "frames": [
      ["Caso 1: Destaques sem ordem fixa -> usa <ul> com 2 <li>", ["Lista: <ul>", "Itens: 2"]],
      ["Caso 2: Passo a passo sequencial -> usa <ol> com 2 <li>", ["Lista: <ol>", "Itens: 1º e 2º"]],
      ["Caso 3: Ficha técnica SKU/Garantia -> usa <dl> com 3 pares <dt>/<dd>", ["Lista: <dl>", "Pares dt/dd: 3"]]
    ],
    "answer": "3",
    "why": "O HTML5 oferece 3 tipos semânticos de listas: não ordenada (<ul>), ordenada (<ol>) e de descrição (<dl>)."
  },
  "03-a": {
    "frames": [
      ["<header> e <nav> exibem o link <a href='#ofertas'>", ["Landmark: header > nav", "Alvo: #ofertas"]],
      ["<main> abre o conteúdo principal único da página", ["Landmark: main (1 por página)"]],
      ["<section id='ofertas'> contém 2 cards <article>", ["Landmark: section#ofertas", "Articles: 2"]],
      ["<footer> encerra a estrutura com dados institucionais", ["Landmark: footer", "Total de main: 1"]]
    ],
    "answer": "1",
    "why": "Todo documento HTML5 deve ter apenas 1 elemento <main> visível representando o conteúdo principal exclusivo da página."
  },
  "03-b": {
    "frames": [
      ["<figure> agrupa a mídia ilustrativa e sua legenda", ["Container: <figure>"]],
      ["<img src='cadeira.svg' width='240' height='160' alt='...'>", ["Largura: 240px", "Altura: 160px"]],
      ["<figcaption> associa a legenda descritiva à imagem", ["Legenda: vinculada", "Atributos de dimensão: 2"]]
    ],
    "answer": "240",
    "why": "O atributo width='240' reserva 240 pixels horizontais antes mesmo de a imagem terminar de carregar, evitando saltos de layout."
  },
  "04-a": {
    "frames": [
      ["<caption> identifica o título da tabela: Pedido #402", ["Seção: caption"]],
      ["<thead> define 3 colunas com <th scope='col'>", ["Seção: thead", "Colunas: 3 (Item, Qtd, Total)"]],
      ["<tbody> lista os produtos e <tfoot> resume a soma", ["Seção: tbody + tfoot", "Colunas: 3"]]
    ],
    "answer": "3",
    "why": "A linha do <thead> possui 3 células <th scope='col'>, estruturando 3 colunas na tabela."
  },
  "04-b": {
    "frames": [
      ["<label for='email'> conecta-se ao <input id='email'>", ["Vínculo for/id: email"]],
      ["Usuário preenche 2 campos com atributo name='email' e name='cep'", ["Campos com name: 2"]],
      ["Clique em <button type='submit'> valida required e envia o par", ["Envio: autorizado", "Pares enviados: 2"]]
    ],
    "answer": "2",
    "why": "Apenas controles que possuem o atributo name são empacotados e enviados na submissão do formulário (2 pares)."
  },
  "05-a": {
    "frames": [
      ["Regra 1: seletor de tag p { color: gray } -> peso (0,0,1)", ["Candidata: cinza", "Peso: (0,0,1)"]],
      ["Regra 2: seletor de classe .preco { color: blue } -> peso (0,1,0)", ["Candidata: azul", "Peso: (0,1,0)"]],
      ["Regra 3: seletor de ID #preco-vip { color: green } -> peso (1,0,0)", ["Vencedora: verde", "Peso: (1,0,0)"]]
    ],
    "answer": "3",
    "why": "A Regra 3 (#preco-vip) possui especificidade de ID (1,0,0), superando a classe (0,1,0) e a tag (0,0,1)."
  },
  "05-b": {
    "frames": [
      [":root declara --espaco: 16px e --raio: 12px", ["--espaco: 16px", "--raio: 12px"]],
      [".card aplica padding: var(--espaco) -> resolve para 16px", ["padding: 16px"]],
      [".card aplica border-radius: var(--raio) -> resolve para 12px", ["border-radius: 12px"]]
    ],
    "answer": "12",
    "why": "A função var(--raio) busca o valor declarado no :root e aplica 12px ao border-radius."
  },
  "06-a": {
    "frames": [
      ["Cenário content-box: width: 260px + padding: 20px (x2) + border: 2px (x2)", ["content-box total: 304px"]],
      ["Cenário border-box: width: 260px trava a largura externa total", ["border-box total: 260px"]],
      ["Em border-box, o conteúdo interno se ajusta: 260 - 40 - 4 = 216px", ["Largura externa final: 260px"]]
    ],
    "answer": "260",
    "why": "Com box-sizing: border-box, padding e border ficam incluídos dentro dos 260px definidos em width."
  },
  "06-b": {
    "frames": [
      [".card define position: relative (torna-se referência)", ["Pai: .card (relative)"]],
      [".badge define position: absolute; top: 12px; right: 12px;", ["Filho: .badge (absolute)", "Distância do topo: 12px"]]
    ],
    "answer": "12",
    "why": "Com o card pai em position: relative, top: 12px posiciona o selo a exatos 12 pixels da borda superior do card."
  },
  "07-a": {
    "frames": [
      [".navbar recebe display: flex (direção padrão: row)", ["Eixo principal: horizontal", "Itens: 3 (Logo, Busca, Sacola)"]],
      ["justify-content: space-between distribui os 3 itens na linha", ["Espaços intermediários: 2"]],
      ["align-items: center nivela os 3 itens verticalmente", ["Itens alinhados: 3"]]
    ],
    "answer": "3",
    "why": "Os 3 filhos diretos da .navbar tornam-se Flex Items alinhados na mesma linha horizontal."
  },
  "07-b": {
    "frames": [
      [".card recebe display: flex e flex-direction: column", ["Eixo principal: vertical", "Filhos: 4 (img, h3, p, button)"]],
      [".btn-comprar recebe margin-top: auto", ["Sobra vertical: absorvida antes do botão", "Botão: colado no rodapé"]]
    ],
    "answer": "4",
    "why": "Todos os 4 filhos diretos do card são empilhados em coluna, e margin-top: auto empurra o 4º item (botão) para a base."
  },
  "08-a": {
    "frames": [
      ["Regra: repeat(auto-fit, minmax(220px, 1fr)) com gap: 20px", ["Mínimo por coluna: 220px"]],
      ["Em tela de 1000px: cabem 4 colunas (4x220 + 3x20 = 940 <= 1000)", ["Desktop (1000px): 4 colunas"]],
      ["Em tela de 520px: cabem 2 colunas (2x220 + 20 = 460 <= 520)", ["Tablet (520px): 2 colunas"]]
    ],
    "answer": "2",
    "why": "Em 520px cabem duas colunas de no mínimo 220px mais o gap de 20px (460px), mas não cabem três (700px)."
  },
  "08-b": {
    "frames": [
      ["Desktop (1200px): .layout usa grid-template-columns: 240px 1fr (2 colunas)", ["Viewport: 1200px", "Colunas: 2"]],
      ["Mobile (680px): @media (max-width: 768px) entra em vigor", ["Viewport: 680px <= 768px", "@media: ativa"]],
      ["A regra responsiva muda .layout para grid-template-columns: 1fr", ["Colunas no mobile: 1"]]
    ],
    "answer": "1",
    "why": "Abaixo de 768px, a Media Query substitui o layout de 2 colunas por 1 única coluna (1fr)."
  },
  "09-a": {
    "frames": [
      ["const precoEl = document.querySelector('#preco-item')", ["data-preco: '200'"]],
      ["const base = Number(precoEl.dataset.preco)", ["base: 200 (Number)"]],
      ["const comDesconto = base * 0.90", ["comDesconto: 180"]],
      ["precoEl.textContent = 'R$ ' + comDesconto", ["Texto no DOM: R$ 180"]]
    ],
    "answer": "180",
    "why": "O valor 200 lido de dataset.preco recebe 10% de desconto (200 * 0.90 = 180) e atualiza textContent."
  },
  "09-b": {
    "frames": [
      ["Início: <article class='card'> possui 1 classe", ["classList: ['card'] (1 classe)"]],
      ["1ª chamada: card.classList.toggle('selecionado') adiciona a classe", ["classList: ['card', 'selecionado'] (2 classes)"]],
      ["2ª chamada: card.classList.toggle('selecionado') remove a classe", ["classList: ['card'] (1 classe)"]]
    ],
    "answer": "2",
    "why": "Após a primeira chamada de toggle('selecionado'), o elemento passa a ter 2 classes ('card' e 'selecionado')."
  },
  "10-a": {
    "frames": [
      ["Listener 'input' registrado no campo de quantidade (preço = R$ 150)", ["Qtd inicial: 1", "Subtotal: 150"]],
      ["Usuário digita 3 no campo -> event.target.value vale '3'", ["event.target.value: '3'", "Number('3'): 3"]],
      ["Subtotal recalculado: 3 * 150 = 450", ["Subtotal na tela: R$ 450"]]
    ],
    "answer": "450",
    "why": "O evento input dispara imediatamente e multiplica as 3 unidades por R$ 150, resultando em 450."
  },
  "10-b": {
    "frames": [
      ["Usuário envia o formulário de cupom com ' blue10 '", ["Evento: submit"]],
      ["event.preventDefault() bloqueia o recarregamento da página", ["Reload: 0 (bloqueado)"]],
      ["' blue10 '.trim().toUpperCase() resulta em 'BLUE10' (10% de desconto)", ["Desconto aplicado: 10%"]]
    ],
    "answer": "10",
    "why": "Após normalizar a entrada com trim() e toUpperCase(), o código coincide com 'BLUE10' e libera 10% de desconto."
  },
  "11-a": {
    "frames": [
      ["const itens = ['Mouse', 'Teclado', 'Headset'] (3 produtos)", ["Array: 3 itens"]],
      ["listaUl.innerHTML = '' limpa a lista antes de renderizar", ["Filhos na <ul>: 0"]],
      ["forEach executa createElement('li') e appendChild para cada item", ["Filhos na <ul>: 3"]]
    ],
    "answer": "3",
    "why": "O laço forEach percorre os 3 elementos do array e anexa um <li> para cada um dentro da <ul>."
  },
  "11-b": {
    "frames": [
      ["const sacola = [{ sku: 'BL-01', qtd: 2 }, { sku: 'BL-02', qtd: 1 }]", ["Objetos no array: 2"]],
      ["localStorage.setItem('sacola', JSON.stringify(sacola))", ["Salvo como texto JSON"]],
      ["Após F5: const lido = JSON.parse(localStorage.getItem('sacola'))", ["Objetos reconstruídos: 2"]]
    ],
    "answer": "2",
    "why": "JSON.stringify e JSON.parse preservam integralmente os 2 objetos salvos no localStorage."
  },
  "12-a": {
    "frames": [
      ["Catálogo total possui 4 produtos (2 Periféricos e 2 Papelaria)", ["Total no catálogo: 4"]],
      ["Usuário clica no filtro 'Periféricos' -> estado.categoria = 'Periféricos'", ["Filtro ativo: Periféricos"]],
      ["catalogo.filter() seleciona apenas os itens de Periféricos", ["Cards renderizados: 2"]]
    ],
    "answer": "2",
    "why": "O método filter() mantém apenas os 2 produtos cuja categoria é 'Periféricos'."
  },
  "12-b": {
    "frames": [
      ["Sacola tem 2x R$ 150 -> reduce() calcula subtotal = R$ 300", ["Subtotal bruto: 300"]],
      ["Cupom BLUE10 ativo -> desconto = 300 * 0.10 = R$ 30", ["Desconto: 30"]],
      ["Total líquido = 300 - 30 = R$ 270 (acima da meta de R$ 250 de frete grátis!)", ["Total final: 270", "Frete: R$ 0"]]
    ],
    "answer": "270",
    "why": "O subtotal de R$ 300 menos R$ 30 (10% do cupom BLUE10) resulta em R$ 270 e garante frete grátis."
  }
};
