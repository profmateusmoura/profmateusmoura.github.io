(function () {
  /* =========================================================
     1. DESAFIOS GUIADOS MULTI-RODADA ([data-dw1-lab])
     ========================================================= */
  const LABS = {
    "01": {
      title: "Laboratório 01 — Arquitetura Web, HTTP e Esqueleto HTML5",
      rounds: [
        {
          prompt: "Rodada 1 — O que acontece se um documento HTML com palavras acentuadas ('Promoção', 'Catálogo') for servido sem <meta charset=\"UTF-8\"> no <head>?",
          code: "<head>\n  <!-- Sem declaração de charset -->\n  <title>Promoção Lojas Blue</title>\n</head>",
          options: [
            { text: "O navegador pode interpretar os bytes em outra codificação (como ISO-8859-1 ou Windows-1252), exibindo caracteres truncados (mojibake).", correct: true },
            { text: "O servidor HTTP bloqueia a resposta com erro 404 Not Found.", correct: false },
            { text: "O navegador apaga automaticamente todas as tags do <body>.", correct: false }
          ],
          feedback: "Exato! A meta tag UTF-8 logo no início do <head> garante que qualquer caractere acentuado ou símbolo monetário seja decodificado corretamente."
        },
        {
          prompt: "Rodada 2 — Onde o texto colocado dentro da tag <title> aparece para a pessoa usuária?",
          code: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Lojas Blue — Vitrine Oficial</title>\n</head>",
          options: [
            { text: "Na aba do navegador, no histórico, nos favoritos e no título dos resultados de busca.", correct: true },
            { text: "Como o maior título visível no topo da área branca da página (<body>).", correct: false },
            { text: "Apenas no console do DevTools.", correct: false }
          ],
          feedback: "Perfeito! O <title> é um metadado do documento; o título visível dentro da página é papel do <h1> no <body>."
        },
        {
          prompt: "Rodada 3 — Qual código de status HTTP indica que o servidor encontrou o documento HTML e o entregou com sucesso?",
          code: "GET /index.html HTTP/1.1\nHost: lojasblue.com.br",
          options: [
            { text: "200 OK", correct: true },
            { text: "404 Not Found", correct: false },
            { text: "500 Internal Server Error", correct: false }
          ],
          feedback: "Correto! A faixa 2xx (como 200 OK) representa sucesso na comunicação HTTP."
        }
      ]
    },
    "02": {
      title: "Laboratório 02 — Hierarquia de Títulos e Semântica Textual",
      rounds: [
        {
          prompt: "Rodada 1 — Analise a estrutura de títulos abaixo. Qual é o problema semântico?",
          code: "<h1>Catálogo Lojas Blue</h1>\n<h4>Periféricos</h4>\n<h2>Teclados Mecânicos</h2>",
          options: [
            { text: "Salto indevido de nível (de <h1> direto para <h4>) e inversão da subcategoria (<h2> abaixo de <h4>).", correct: true },
            { text: "O HTML5 proíbe usar mais de um título na mesma página.", correct: false },
            { text: "A tag <h1> só pode ser usada dentro do <head>.", correct: false }
          ],
          feedback: "Isso mesmo! A hierarquia deve ser contínua: <h1> para o documento, <h2> para seções e <h3> para subseções."
        },
        {
          prompt: "Rodada 2 — Qual estrutura HTML é a mais semântica para representar uma Ficha Técnica formada por pares 'Propriedade: Valor' (ex.: SKU: BL-108, Garantia: 12 meses)?",
          code: "SKU: BL-108\nPeso: 420g\nGarantia: 12 meses",
          options: [
            { text: "Uma lista de descrição <dl> com pares <dt> (termo) e <dd> (descrição).", correct: true },
            { text: "Uma lista ordenada <ol>, pois os dados são numerados.", correct: false },
            { text: "Várias tags <br> soltas dentro de uma <div>.", correct: false }
          ],
          feedback: "Perfeito! <dl>, <dt> e <dd> foram criados exatamente para pares chave-valor e glossários."
        },
        {
          prompt: "Rodada 3 — Qual a diferença semântica entre <strong> e <b> no HTML5?",
          code: "<p><strong>Atenção:</strong> estoque limitado a 5 unidades.</p>",
          options: [
            { text: "<strong> comunica forte importância ou urgência semântica; <b> aplica apenas destaque visual sem relevância extra.", correct: true },
            { text: "<b> deixa o texto em itálico e <strong> deixa sublinhado.", correct: false },
            { text: "<strong> foi removido do HTML5.", correct: false }
          ],
          feedback: "Correto! Leitores de tela e motores de busca reconhecem a importância semântica de <strong> e <em>."
        }
      ]
    },
    "03": {
      title: "Laboratório 03 — Marcos Semânticos (Landmarks), Links e Mídia",
      rounds: [
        {
          prompt: "Rodada 1 — Como fazer um link do menu rolar diretamente até a seção de ofertas na mesma página?",
          code: "<nav>\n  <a href=\"???\">Ver Ofertas</a>\n</nav>\n...\n<section id=\"ofertas-relampago\">...</section>",
          options: [
            { text: "href=\"#ofertas-relampago\"", correct: true },
            { text: "href=\"ofertas-relampago.html\"", correct: false },
            { text: "href=\".ofertas-relampago\"", correct: false }
          ],
          feedback: "Exato! O caractere # seguido do id do elemento alvo cria uma âncora interna no documento."
        },
        {
          prompt: "Rodada 2 — Quando abrimos um link externo em nova aba com target=\"_blank\", qual atributo devemos adicionar por segurança e privacidade?",
          code: "<a href=\"https://parceiro.com\" target=\"_blank\" ???>Rastrear entrega</a>",
          options: [
            { text: "rel=\"noopener noreferrer\"", correct: true },
            { text: "alt=\"link externo\"", correct: false },
            { text: "scope=\"col\"", correct: false }
          ],
          feedback: "Muito bem! rel=\"noopener noreferrer\" impede que a página externa acesse window.opener da sua aplicação."
        },
        {
          prompt: "Rodada 3 — Qual é a regra correta para o atributo alt em uma imagem puramente decorativa (como um divisor gráfico abstrato)?",
          code: "<img src=\"divisor-ondas.svg\" ???>",
          options: [
            { text: "Manter o atributo vazio (alt=\"\") para que o leitor de tela ignore a imagem sem ler o nome do arquivo.", correct: true },
            { text: "Omitir completamente o atributo alt.", correct: false },
            { text: "Escrever alt=\"imagem bonita\".", correct: false }
          ],
          feedback: "Correto! Sem o atributo alt, leitores de tela costumam soletrar o nome do arquivo .svg; com alt=\"\", entendem que é decorativo."
        }
      ]
    },
    "04": {
      title: "Laboratório 04 — Tabelas Acessíveis e Formulários HTML5",
      rounds: [
        {
          prompt: "Rodada 1 — Como vincular explicitamente um <label> a um <input> para que o clique no texto foque o campo?",
          code: "<label for=\"cep-entrega\">CEP:</label>\n<input ??? type=\"text\" name=\"cep\">",
          options: [
            { text: "Adicionando id=\"cep-entrega\" no <input> (igual ao atributo for do label).", correct: true },
            { text: "Adicionando class=\"cep-entrega\" no <input>.", correct: false },
            { text: "Adicionando placeholder=\"cep-entrega\" no <input>.", correct: false }
          ],
          feedback: "Perfeito! O par for (no label) e id (no controle) cria o vínculo explícito de acessibilidade e usabilidade."
        },
        {
          prompt: "Rodada 2 — Para que apenas uma opção de frete (PAC, SEDEX ou Retirada) possa ser marcada por vez em botões type=\"radio\", o que eles precisam compartilhar?",
          code: "<input type=\"radio\" id=\"r1\" ??? value=\"pac\">\n<input type=\"radio\" id=\"r2\" ??? value=\"sedex\">",
          options: [
            { text: "O mesmo atributo name (ex.: name=\"modalidade_frete\"), mantendo ids diferentes.", correct: true },
            { text: "O mesmo atributo id em todos os inputs.", correct: false },
            { text: "O mesmo atributo value.", correct: false }
          ],
          feedback: "Exato! O atributo name agrupa os botões de rádio em uma escolha mutuamente exclusiva."
        },
        {
          prompt: "Rodada 3 — Qual atributo na tag <th> informa aos leitores de tela que aquele cabeçalho identifica uma coluna inteira da tabela?",
          code: "<thead>\n  <tr>\n    <th ???>Produto</th>\n    <th ???>Preço</th>\n  </tr>\n</thead>",
          options: [
            { text: "scope=\"col\"", correct: true },
            { text: "colspan=\"2\"", correct: false },
            { text: "for=\"coluna\"", correct: false }
          ],
          feedback: "Isso mesmo! scope=\"col\" para cabeçalhos de coluna e scope=\"row\" para cabeçalhos de linha."
        }
      ]
    },
    "05": {
      title: "Laboratório 05 — Seletores CSS, Especificidade e Variáveis",
      rounds: [
        {
          prompt: "Rodada 1 — Três regras CSS miram o mesmo parágrafo <p id=\"aviso\" class=\"destaque\">. Qual cor será exibida?",
          code: "#aviso { color: #15803d; }\n.destaque { color: #b91c1c; }\np { color: #1d4ed8; }",
          options: [
            { text: "Verde (#15803d), porque o seletor de ID (#aviso) tem especificidade (1,0,0), maior que classe (0,1,0) e tag (0,0,1).", correct: true },
            { text: "Azul (#1d4ed8), porque a regra p aparece por último no arquivo.", correct: false },
            { text: "Vermelho (#b91c1c), porque classes sempre vencem IDs.", correct: false }
          ],
          feedback: "Exato! A ordem no arquivo só desempata seletores de mesma especificidade. Aqui #aviso (1,0,0) vence."
        },
        {
          prompt: "Rodada 2 — Qual é a sintaxe correta para declarar e consumir uma variável CSS global (Custom Property)?",
          code: ":root {\n  /* declaração */\n}\n.card {\n  /* uso */\n}",
          options: [
            { text: "Declarar --cor-primaria: #1d4ed8; no :root e consumir com var(--cor-primaria).", correct: true },
            { text: "Declarar $cor-primaria = #1d4ed8; e usar $(cor-primaria).", correct: false },
            { text: "Declarar var-cor: #1d4ed8; e usar get(var-cor).", correct: false }
          ],
          feedback: "Perfeito! Custom properties começam com dois hifens (--) e são lidas pela função var()."
        },
        {
          prompt: "Rodada 3 — Para garantir acessibilidade de teclado ao estilizar botões e links, qual pseudo-classe deve acompanhar :hover?",
          code: ".btn-acao:hover,\n.btn-acao:??? {\n  outline: 3px solid #1d4ed8;\n}",
          options: [
            { text: ":focus-visible", correct: true },
            { text: ":first-child", correct: false },
            { text: ":disabled", correct: false }
          ],
          feedback: "Muito bem! :focus-visible destaca claramente o elemento focado pela tecla Tab."
        }
      ]
    },
    "06": {
      title: "Laboratório 06 — Box Model, Unidades Relativas e Position",
      rounds: [
        {
          prompt: "Rodada 1 — Um card tem box-sizing: content-box, width: 300px, padding: 20px e border: 5px solid. Qual é a largura total ocupada na tela?",
          code: ".card {\n  box-sizing: content-box;\n  width: 300px;\n  padding: 20px;\n  border: 5px solid #000;\n}",
          options: [
            { text: "350px (300 + 20 esquerda + 20 direita + 5 esquerda + 5 direita).", correct: true },
            { text: "300px cravados.", correct: false },
            { text: "325px (soma apenas um lado).", correct: false }
          ],
          feedback: "Certo! Em content-box, padding e border de ambos os lados somam-se ao width. Com border-box, ficaria em exatos 300px."
        },
        {
          prompt: "Rodada 2 — Você colocou position: absolute; top: 10px; right: 10px; em um selo .badge, mas ele foi parar no canto da janela inteira em vez do card. O que faltou?",
          code: ".card { /* faltou algo aqui */ }\n.badge { position: absolute; top: 10px; right: 10px; }",
          options: [
            { text: "Definir position: relative; na classe .card (elemento pai).", correct: true },
            { text: "Definir display: inline; no .badge.", correct: false },
            { text: "Trocar top por margin-top.", correct: false }
          ],
          feedback: "Exato! Um elemento com position: absolute se ancora no ancestral posicionado (relative/absolute/fixed/sticky) mais próximo."
        },
        {
          prompt: "Rodada 3 — Qual a diferença entre as unidades rem e em no CSS?",
          code: "html { font-size: 16px; }\n.card { font-size: 20px; padding: 1em; margin-bottom: 1.5rem; }",
          options: [
            { text: "rem é sempre relativo ao font-size da raiz (<html>), enquanto em é relativo ao font-size do próprio contexto/elemento.", correct: true },
            { text: "rem só funciona para cores e em para larguras.", correct: false },
            { text: "Não há diferença; ambas valem sempre 10px.", correct: false }
          ],
          feedback: "Perfeito! Aqui 1.5rem = 24px (1.5 × 16px da raiz) e 1em = 20px (1 × 20px do próprio .card)."
        }
      ]
    },
    "07": {
      title: "Laboratório 07 — Layout Moderno com Flexbox",
      rounds: [
        {
          prompt: "Rodada 1 — Em um container com display: flex e flex-direction: row (padrão), qual par de propriedades distribui os itens nas extremidades horizontais e os centraliza verticalmente?",
          code: ".header-loja {\n  display: flex;\n  /* completar */\n}",
          options: [
            { text: "justify-content: space-between; e align-items: center;", correct: true },
            { text: "align-items: space-between; e justify-content: center;", correct: false },
            { text: "flex-wrap: nowrap; e float: left;", correct: false }
          ],
          feedback: "Exato! No sentido row, justify-content atua no eixo horizontal (principal) e align-items no eixo vertical (transversal)."
        },
        {
          prompt: "Rodada 2 — Três cards estão lado a lado, mas têm textos de tamanhos diferentes. Como fazer o botão 'Comprar' ficar sempre colado no rodapé de cada card?",
          code: ".card {\n  display: flex;\n  flex-direction: column;\n}\n.btn-comprar { /* completar */ }",
          options: [
            { text: "Aplicar margin-top: auto; no .btn-comprar.", correct: true },
            { text: "Aplicar justify-content: center; no .btn-comprar.", correct: false },
            { text: "Aplicar flex-wrap: wrap; no botão.", correct: false }
          ],
          feedback: "Isso mesmo! Em um flex container coluna, margin-top: auto empurra o elemento para o final do eixo vertical."
        },
        {
          prompt: "Rodada 3 — O que acontece quando vários itens com largura mínima estão em um container display: flex sem flex-wrap: wrap?",
          code: ".galeria {\n  display: flex;\n  /* flex-wrap: nowrap é o padrão */\n}",
          options: [
            { text: "Eles tentam caber todos em uma única linha, podendo encolher demais ou vazar horizontalmente (overflow).", correct: true },
            { text: "Eles quebram automaticamente em 3 colunas.", correct: false },
            { text: "Apenas o primeiro item é exibido.", correct: false }
          ],
          feedback: "Correto! Adicionar flex-wrap: wrap permite que os itens quebrem para a linha de baixo quando falta espaço."
        }
      ]
    },
    "08": {
      title: "Laboratório 08 — CSS Grid e Responsividade",
      rounds: [
        {
          prompt: "Rodada 1 — O que faz a regra grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))?",
          code: ".vitrine {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}",
          options: [
            { text: "Cria automaticamente quantas colunas de no mínimo 220px couberem na tela e distribui a sobra igualmente (1fr).", correct: true },
            { text: "Fixa a grade em exatamente 1 coluna de 220px em qualquer monitor.", correct: false },
            { text: "Gera 220 colunas de 1 pixel cada.", correct: false }
          ],
          feedback: "Perfeito! É o padrão ouro do CSS Grid para grades de produtos fluidas e responsivas."
        },
        {
          prompt: "Rodada 2 — Como fazer um banner promocional ocupar 2 colunas de largura dentro de uma grade CSS Grid?",
          code: ".card-banner {\n  /* expandir por 2 colunas */\n}",
          options: [
            { text: "grid-column: span 2;", correct: true },
            { text: "flex-grow: 2;", correct: false },
            { text: "column-count: 2;", correct: false }
          ],
          feedback: "Exato! grid-column: span 2 faz o item abranger duas faixas de coluna consecutivas."
        },
        {
          prompt: "Rodada 3 — Em uma estratégia Mobile-First, qual condição de Media Query usamos para adicionar colunas conforme a tela fica maior?",
          code: ".grade { grid-template-columns: 1fr; }\n@media (???: 768px) {\n  .grade { grid-template-columns: 1fr 1fr; }\n}",
          options: [
            { text: "min-width: 768px", correct: true },
            { text: "max-height: 768px", correct: false },
            { text: "device-only: mobile", correct: false }
          ],
          feedback: "Correto! No Mobile-First, o CSS base atende telas pequenas e @media (min-width: ...) expande o layout para telas maiores."
        }
      ]
    },
    "09": {
      title: "Laboratório 09 — JavaScript e Manipulação do DOM",
      rounds: [
        {
          prompt: "Rodada 1 — Por que preferimos elemento.textContent em vez de elemento.innerHTML quando vamos apenas exibir um texto digitado pelo usuário?",
          code: "resumo.textContent = nomeDigitado;",
          options: [
            { text: "Porque textContent trata o valor estritamente como texto puro, evitando injeção de tags/scripts maliciosos (XSS).", correct: true },
            { text: "Porque innerHTML não funciona em tags <span> ou <p>.", correct: false },
            { text: "Porque textContent apaga o arquivo CSS.", correct: false }
          ],
          feedback: "Exato! textContent é mais rápido e seguro contra XSS sempre que o objetivo for atualizar texto."
        },
        {
          prompt: "Rodada 2 — Dado <article id=\"prod\" data-categoria=\"perifericos\" data-preco=\"199\">, como lemos a categoria no JavaScript?",
          code: "const card = document.querySelector('#prod');\nconst cat = ???;",
          options: [
            { text: "card.dataset.categoria", correct: true },
            { text: "card.data.categoria", correct: false },
            { text: "card.classList.categoria", correct: false }
          ],
          feedback: "Perfeito! Todos os atributos data-* ficam disponíveis no objeto elemento.dataset."
        },
        {
          prompt: "Rodada 3 — Qual método de classList adiciona a classe 'ativo' se ela não existir e a remove se já estiver presente?",
          code: "painelSacola.classList.???('ativo');",
          options: [
            { text: "toggle", correct: true },
            { text: "switch", correct: false },
            { text: "replaceAll", correct: false }
          ],
          feedback: "Isso mesmo! classList.toggle('ativo') alterna o estado booleano da classe em uma única linha."
        }
      ]
    },
    "10": {
      title: "Laboratório 10 — Eventos e Interação em Tempo Real",
      rounds: [
        {
          prompt: "Rodada 1 — Você criou um formulário de cupom e tratou o evento 'submit' no JavaScript, mas a página pisca, recarrega e perde os dados. O que faltou?",
          code: "form.addEventListener('submit', (event) => {\n  /* faltou uma linha aqui */\n  validarCupom();\n});",
          options: [
            { text: "Chamar event.preventDefault(); logo no início da função ouvinte.", correct: true },
            { text: "Chamar window.close(); no final.", correct: false },
            { text: "Trocar addEventListener por querySelector.", correct: false }
          ],
          feedback: "Exato! event.preventDefault() impede o envio HTTP tradicional que recarregaria a página."
        },
        {
          prompt: "Rodada 2 — Qual a diferença entre os eventos 'input' e 'change' em um <input type=\"text\">?",
          code: "campoBusca.addEventListener('input', filtrarCatalogo);",
          options: [
            { text: "'input' dispara imediatamente a cada tecla digitada/apagada; 'change' só dispara quando o usuário confirma e tira o foco do campo.", correct: true },
            { text: "'change' dispara a cada movimento do mouse e 'input' apenas ao clicar.", correct: false },
            { text: "Não há diferença; são sinônimos.", correct: false }
          ],
          feedback: "Perfeito! Para buscas instantâneas e calculadoras em tempo real, o evento 'input' oferece resposta imediata."
        },
        {
          prompt: "Rodada 3 — Ao ler const qtd = campoNumero.value, qual é o tipo de dado retornado por .value e como somá-lo corretamente?",
          code: "const qtd = Number(campoNumero.value);",
          options: [
            { text: ".value retorna sempre uma String; devemos converter com Number() antes de somar para evitar concatenação ('1' + 1 = '11').", correct: true },
            { text: ".value retorna sempre um Array.", correct: false },
            { text: "O navegador converte automaticamente qualquer soma com + para número.", correct: false }
          ],
          feedback: "Correto! Em JS, '2' + 1 resulta em '21'. Usar Number() garante aritmética numérica real."
        }
      ]
    },
    "11": {
      title: "Laboratório 11 — DOM Dinâmico e Persistência com localStorage",
      rounds: [
        {
          prompt: "Rodada 1 — O que acontece se salvarmos um array de objetos diretamente com localStorage.setItem('sacola', meuArray)?",
          code: "const meuArray = [{ nome: 'Mouse', preco: 120 }];\nlocalStorage.setItem('sacola', meuArray);",
          options: [
            { text: "O array é convertido na string inútil '[object Object]', perdendo os dados. É preciso usar JSON.stringify(meuArray).", correct: true },
            { text: "O navegador salva o array perfeitamente sem conversão.", correct: false },
            { text: "O computador reinicia.", correct: false }
          ],
          feedback: "Exato! localStorage só armazena texto. Usamos JSON.stringify() ao salvar e JSON.parse() ao ler."
        },
        {
          prompt: "Rodada 2 — Ao re-renderizar uma lista de produtos filtrados dentro de <ul id=\"lista\">, por que fazemos lista.innerHTML = '' antes do forEach?",
          code: "function renderizar(itens) {\n  lista.innerHTML = '';\n  itens.forEach(item => { ... });\n}",
          options: [
            { text: "Para limpar os elementos da renderização anterior e evitar que os novos cards sejam duplicados ao final da lista.", correct: true },
            { text: "Para apagar o localStorage do navegador.", correct: false },
            { text: "Porque createElement só funciona se o elemento pai estiver vazio.", correct: false }
          ],
          feedback: "Isso mesmo! Limpar o container garante que o DOM reflita exatamente o estado atual do array filtrado."
        },
        {
          prompt: "Rodada 3 — Qual sequência cria uma tag <li>, define seu texto e a insere dentro de uma <ul>?",
          code: "const ul = document.querySelector('#itens');",
          options: [
            { text: "const li = document.createElement('li'); li.textContent = 'Teclado'; ul.appendChild(li);", correct: true },
            { text: "const li = ul.querySelector('new li'); li.value = 'Teclado';", correct: false },
            { text: "document.write('<li>Teclado</li>');", correct: false }
          ],
          feedback: "Perfeito! createElement + textContent + appendChild é o fluxo seguro e estruturado de criação de nós DOM."
        }
      ]
    },
    "12": {
      title: "Laboratório 12 — Arquitetura do Projeto Integrado Vitrine Lojas Blue",
      rounds: [
        {
          prompt: "Rodada 1 — Na Vitrine Lojas Blue, o usuário selecionou a categoria 'Periféricos' E digitou 'sem fio' na busca. Como os filtros devem ser combinados?",
          code: "const visiveis = catalogo.filter(p => {\n  const bateCat = estado.cat === 'Todos' || p.cat === estado.cat;\n  const bateBusca = p.nome.toLowerCase().includes(estado.busca.toLowerCase());\n  return ???;\n});",
          options: [
            { text: "return bateCat && bateBusca; (o produto precisa atender ambos os critérios simultaneamente).", correct: true },
            { text: "return bateCat || bateBusca; (qualquer produto serve).", correct: false },
            { text: "return !bateCat;", correct: false }
          ],
          feedback: "Exato! A conjunção lógica && garante que a busca textual refine dentro da categoria escolhida."
        },
        {
          prompt: "Rodada 2 — Qual método de Array em JavaScript é ideal para somar o subtotal de todos os itens da sacola (preço × quantidade) em um único valor?",
          code: "const subtotal = sacola.???((soma, item) => soma + item.preco * item.qtd, 0);",
          options: [
            { text: "reduce", correct: true },
            { text: "map", correct: false },
            { text: "forEach", correct: false }
          ],
          feedback: "Perfeito! O método reduce() acumula todos os elementos do array em um único resultado numérico."
        },
        {
          prompt: "Rodada 3 — Por que usamos delegação de eventos (ou funções centralizadas que atualizam o estado e chamam renderizarTudo()) em vez de espalhar cálculos no HTML?",
          code: "function alterarQtd(id, delta) {\n  atualizarEstado(id, delta);\n  salvarNoStorage();\n  renderizarTudo();\n}",
          options: [
            { text: "Para manter uma fonte única de verdade: a interface (cards, sacola, barra de frete e total) nunca fica dessincronizada.", correct: true },
            { text: "Porque o navegador proíbe mais de uma função por arquivo.", correct: false },
            { text: "Apenas para deixar o código maior.", correct: false }
          ],
          feedback: "Excelente! Esse fluxo Estado -> Persistência -> Renderização é a base de todas as interfaces web modernas."
        }
      ]
    }
  };

  function initLabs() {
    document.querySelectorAll("[data-dw1-lab]").forEach((root) => {
      const id = root.getAttribute("data-dw1-lab");
      const config = LABS[id];
      if (!config) return;

      let currentRound = 0;
      const solved = new Array(config.rounds.length).fill(false);

      function render() {
        const round = config.rounds[currentRound];
        const doneCount = solved.filter(Boolean).length;

        root.innerHTML = `
          <div class="lr-head">
            <div>
              <span class="lr-kicker">Desafio Interativo · Verificação de Conceitos</span>
              <h4>${config.title}</h4>
            </div>
            <span class="lr-score">Concluídas: ${doneCount}/${config.rounds.length}</span>
          </div>
          <div class="lr-round-tabs">
            ${config.rounds
              .map(
                (_, idx) => `
              <button type="button" class="lr-tab ${idx === currentRound ? "active" : ""} ${solved[idx] ? "done" : ""}" data-round="${idx}">
                Rodada ${idx + 1} ${solved[idx] ? "✓" : ""}
              </button>
            `
              )
              .join("")}
          </div>
          <div class="lr-box">
            <p style="margin:0 0 0.5rem;font-weight:600;">${round.prompt}</p>
            <pre class="lr-code">${round.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
            <div class="lr-options">
              ${round.options
                .map(
                  (opt, oIdx) => `
                <button type="button" class="lr-opt" data-opt="${oIdx}">${opt.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</button>
              `
                )
                .join("")}
            </div>
            <div class="lr-feedback" hidden></div>
          </div>
        `;

        root.querySelectorAll(".lr-tab").forEach((btn) => {
          btn.addEventListener("click", () => {
            currentRound = Number(btn.getAttribute("data-round"));
            render();
          });
        });

        const fb = root.querySelector(".lr-feedback");
        root.querySelectorAll(".lr-opt").forEach((btn) => {
          btn.addEventListener("click", () => {
            const idx = Number(btn.getAttribute("data-opt"));
            const opt = round.options[idx];
            root.querySelectorAll(".lr-opt").forEach((b) => b.classList.remove("correct", "wrong"));
            if (opt.correct) {
              btn.classList.add("correct");
              solved[currentRound] = true;
              fb.hidden = false;
              fb.innerHTML = `<strong>Correto!</strong> ${round.feedback}`;
              const scoreEl = root.querySelector(".lr-score");
              if (scoreEl) scoreEl.textContent = `Concluídas: ${solved.filter(Boolean).length}/${config.rounds.length}`;
              const activeTab = root.querySelector(`.lr-tab[data-round="${currentRound}"]`);
              if (activeTab) {
                activeTab.classList.add("done");
                activeTab.textContent = `Rodada ${currentRound + 1} ✓`;
              }
            } else {
              btn.classList.add("wrong");
              fb.hidden = false;
              fb.innerHTML = `<strong>Tente novamente:</strong> analise o trecho de código e a regra semântica/técnica do navegador.`;
            }
          });
        });
      }

      render();
    });
  }

  /* =========================================================
     2. SIMULADORES VISUAIS AO VIVO ([data-dw1-playground])
     ========================================================= */
  function esc(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function initPlaygrounds() {
    document.querySelectorAll("[data-dw1-playground]").forEach((root) => {
      const id = root.getAttribute("data-dw1-playground");
      if (PLAYGROUND_BUILDERS[id]) {
        PLAYGROUND_BUILDERS[id](root);
      }
    });
  }

  const PLAYGROUND_BUILDERS = {
    /* 01: Simulador de Documento HTML5 e Inspecao head vs body */
    "01": function (root) {
      let state = {
        charset: true,
        title: "Lojas Blue — Vitrine Oficial",
        heading: "Ofertas de Periféricos e Papelaria",
        status: "200 OK"
      };

      function update() {
        const displayHeading = state.charset
          ? state.heading
          : state.heading.replace(/é/g, "Ã©").replace(/á/g, "Ã¡").replace(/ç/g, "Ã§").replace(/õ/g, "Ãµ");

        const htmlCode = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    ${state.charset ? '<meta charset="UTF-8">' : "<!-- SEM meta charset UTF-8! -->"}
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${state.title}</title>
  </head>
  <body>
    <h1>${state.heading}</h1>
    <p>Catálogo oficial verificado pelo navegador.</p>
  </body>
</html>`;

        root.querySelector("#pg01-tab").textContent = state.title || "(Sem título)";
        const canvas = root.querySelector("#pg01-canvas");
        if (state.status === "404 Not Found") {
          canvas.innerHTML = `
            <div style="text-align:center;padding:1.2rem;color:#dc2626;">
              <strong style="font-size:1.3rem;">HTTP 404 — Recurso não encontrado</strong>
              <p style="margin:0.4rem 0 0;font-size:0.88rem;color:var(--muted);">O servidor não localizou o arquivo solicitado na URL.</p>
            </div>`;
        } else {
          canvas.innerHTML = `
            <div class="dw1-sim-card">
              <span style="font-size:0.74rem;font-weight:700;color:var(--green);">ÁREA VISÍVEL (&lt;body&gt;)</span>
              <h3 style="margin:0.35rem 0;">${esc(displayHeading)}</h3>
              <p style="margin:0;font-size:0.88rem;color:var(--muted);">Catálogo oficial verificado pelo navegador.</p>
            </div>`;
        }
        root.querySelector("#pg01-code").textContent = htmlCode;
        root.querySelector("#pg01-status").innerHTML = `
          <span><strong>Resposta HTTP:</strong> ${state.status}</span>
          <span><strong>Codificação (&lt;head&gt;):</strong> ${state.charset ? "UTF-8 Ativo (Acentos perfeitos)" : "Ausente (Risco de Mojibake!)"}</span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · HTML5 & HTTP</span>
            <h4 class="dw1-pg-title">Inspeção de &lt;head&gt;, &lt;body&gt; e Resposta HTTP</h4>
            <p class="dw1-pg-subtitle">Altere o título da aba, ligue/desligue o UTF-8 e simule o status HTTP para ver o efeito imediato no navegador.</p>
          </div>
        </div>
        <div class="dw1-pg-controls">
          <div class="dw1-ctrl-group">
            <label>Título da Aba (&lt;title&gt;)</label>
            <input type="text" id="pg01-in-title" value="${state.title}">
          </div>
          <div class="dw1-ctrl-group">
            <label>Título Visível (&lt;h1&gt; no &lt;body&gt;)</label>
            <input type="text" id="pg01-in-h1" value="${state.heading}">
          </div>
          <div class="dw1-ctrl-group">
            <label>Status HTTP</label>
            <select id="pg01-in-http">
              <option value="200 OK">200 OK (Sucesso)</option>
              <option value="404 Not Found">404 Not Found (Arquivo ausente)</option>
            </select>
          </div>
          <div class="dw1-ctrl-group" style="flex:0 0 auto;">
            <label>&lt;meta charset="UTF-8"&gt;</label>
            <button type="button" class="dw1-pill-btn active" id="pg01-btn-utf">UTF-8 Ligado ✓</button>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar">
              <span class="dw1-browser-dots"><i></i><i></i><i></i></span>
              <span>Aba: <strong id="pg01-tab"></strong></span>
              <span>Janela do Navegador</span>
            </div>
            <div class="dw1-canvas-body" id="pg01-canvas"></div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>Código HTML Gerado</span><span>index.html</span></div>
            <pre class="dw1-code-body" id="pg01-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg01-status"></div>
      `;

      root.querySelector("#pg01-in-title").addEventListener("input", (e) => { state.title = e.target.value; update(); });
      root.querySelector("#pg01-in-h1").addEventListener("input", (e) => { state.heading = e.target.value; update(); });
      root.querySelector("#pg01-in-http").addEventListener("change", (e) => { state.status = e.target.value; update(); });
      root.querySelector("#pg01-btn-utf").addEventListener("click", (e) => {
        state.charset = !state.charset;
        e.target.classList.toggle("active", state.charset);
        e.target.textContent = state.charset ? "UTF-8 Ligado ✓" : "UTF-8 Desligado ✗";
        update();
      });
      update();
    },

    /* 02: Simulador de Semantica de Texto e Listas (ul, ol, dl) */
    "02": function (root) {
      let mode = "ul";
      const modes = {
        ul: {
          label: "<ul> Lista Não Ordenada",
          reason: "Ideal para destaques e características cuja ordem não altera o significado.",
          html: `<h2>Destaques do Headset Blue</h2>\n<ul>\n  <li>Cancelamento ativo de ruído</li>\n  <li>Bateria de 40 horas</li>\n  <li>Conexão multiponto Bluetooth 5.3</li>\n</ul>`,
          render: `<h4 style="margin:0 0 0.5rem;">Destaques do Headset Blue</h4><ul style="margin:0;padding-left:1.2rem;"><li>Cancelamento ativo de ruído</li><li>Bateria de 40 horas</li><li>Conexão multiponto Bluetooth 5.3</li></ul>`
        },
        ol: {
          label: "<ol> Lista Ordenada",
          reason: "Ideal para instruções passo a passo ou rankings onde a sequência importa.",
          html: `<h2>Como parear seu Headset</h2>\n<ol>\n  <li>Pressione o botão Power por 3 segundos</li>\n  <li>Ative o Bluetooth no notebook</li>\n  <li>Selecione "Blue Audio Pro" na lista</li>\n</ol>`,
          render: `<h4 style="margin:0 0 0.5rem;">Como parear seu Headset</h4><ol style="margin:0;padding-left:1.2rem;"><li>Pressione o botão Power por 3 segundos</li><li>Ative o Bluetooth no notebook</li><li>Selecione "Blue Audio Pro" na lista</li></ol>`
        },
        dl: {
          label: "<dl> Lista de Descrição",
          reason: "Ideal para fichas técnicas com pares chave (<dt>) e valor (<dd>).",
          html: `<h2>Ficha Técnica</h2>\n<dl>\n  <dt>SKU</dt>\n  <dd>BL-HEAD-53</dd>\n  <dt>Impedância</dt>\n  <dd>32 Ohms</dd>\n  <dt>Garantia</dt>\n  <dd>12 meses de fábrica</dd>\n</dl>`,
          render: `<h4 style="margin:0 0 0.5rem;">Ficha Técnica</h4><dl style="margin:0;display:grid;grid-template-columns:110px 1fr;gap:0.35rem 0.75rem;"><dt style="font-weight:700;color:var(--green);">SKU</dt><dd style="margin:0;">BL-HEAD-53</dd><dt style="font-weight:700;color:var(--green);">Impedância</dt><dd style="margin:0;">32 Ohms</dd><dt style="font-weight:700;color:var(--green);">Garantia</dt><dd style="margin:0;">12 meses de fábrica</dd></dl>`
        }
      };

      function update() {
        const cur = modes[mode];
        root.querySelector("#pg02-canvas").innerHTML = `<div class="dw1-sim-card">${cur.render}</div>`;
        root.querySelector("#pg02-code").textContent = cur.html;
        root.querySelector("#pg02-status").innerHTML = `<span><strong>Estrutura ativa:</strong> ${esc(cur.label)}</span><span>${esc(cur.reason)}</span>`;
        root.querySelectorAll("[data-pg02-mode]").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-pg02-mode") === mode);
        });
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · Semântica de Conteúdo</span>
            <h4 class="dw1-pg-title">Comparador Semântico: &lt;ul&gt;, &lt;ol&gt; e &lt;dl&gt;</h4>
            <p class="dw1-pg-subtitle">Alterne entre os três tipos de listas do HTML5 e compare a renderização visual e a marcação semântica.</p>
          </div>
        </div>
        <div class="dw1-pg-controls">
          <div class="dw1-pill-row">
            <button type="button" class="dw1-pill-btn active" data-pg02-mode="ul">Destaques (&lt;ul&gt;)</button>
            <button type="button" class="dw1-pill-btn" data-pg02-mode="ol">Passo a Passo (&lt;ol&gt;)</button>
            <button type="button" class="dw1-pill-btn" data-pg02-mode="dl">Ficha Técnica (&lt;dl&gt;)</button>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Renderização Semântica</span></div>
            <div class="dw1-canvas-body" id="pg02-canvas"></div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>Marcação HTML5</span><span>semantica.html</span></div>
            <pre class="dw1-code-body" id="pg02-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg02-status"></div>
      `;

      root.querySelectorAll("[data-pg02-mode]").forEach((btn) => {
        btn.addEventListener("click", () => {
          mode = btn.getAttribute("data-pg02-mode");
          update();
        });
      });
      update();
    },

    /* 03: Inspetor de Landmarks Semanticos e Atributo alt */
    "03": function (root) {
      let selected = "header";
      const landmarks = {
        header: { tag: "<header>", role: "banner", desc: "Cabeçalho introdutório da página com marca e busca.", code: `<header>\n  <h1>Lojas Blue</h1>\n  <nav aria-label="Principal">\n    <a href="#ofertas">Ofertas</a>\n    <a href="#contato">Contato</a>\n  </nav>\n</header>` },
        main: { tag: "<main>", role: "main", desc: "Conteúdo central e exclusivo deste documento (único por página).", code: `<main>\n  <section id="ofertas">\n    <h2>Ofertas da Semana</h2>\n    <article>\n      <h3>Luminária LED Articulada</h3>\n      <img src="lum.svg" alt="Luminária preta com braço articulado" width="200" height="140">\n    </article>\n  </section>\n</main>` },
        aside: { tag: "<aside>", role: "complementary", desc: "Conteúdo complementar (filtros laterais, cupom ou aviso de frete).", code: `<aside aria-label="Benefícios">\n  <h2>Frete Grátis</h2>\n  <p>Compras acima de R$ 250 ganham envio expresso.</p>\n</aside>` },
        footer: { tag: "<footer>", role: "contentinfo", desc: "Rodapé institucional com direitos autorais, CNPJ e suporte.", code: `<footer>\n  <p>&copy; 2026 Lojas Blue — Atendimento e SAC</p>\n</footer>` }
      };

      function update() {
        const cur = landmarks[selected];
        root.querySelectorAll("[data-lm]").forEach((el) => {
          const isSel = el.getAttribute("data-lm") === selected;
          el.style.borderColor = isSel ? "var(--green)" : "var(--border)";
          el.style.background = isSel ? "var(--mint)" : "var(--bg)";
        });
        root.querySelector("#pg03-code").textContent = cur.code;
        root.querySelector("#pg03-status").innerHTML = `
          <span><strong>Região selecionada:</strong> ${esc(cur.tag)} (ARIA role: <code>${cur.role}</code>)</span>
          <span>${esc(cur.desc)}</span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · Landmarks HTML5</span>
            <h4 class="dw1-pg-title">Mapa Interativo de Regiões Semânticas da Página</h4>
            <p class="dw1-pg-subtitle">Clique em qualquer região do layout abaixo para inspecionar sua tag semântica, seu papel de acessibilidade (ARIA Landmark) e o código HTML.</p>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Clique nas regiões para inspecionar</span></div>
            <div class="dw1-canvas-body" style="gap:0.5rem;">
              <div data-lm="header" style="padding:0.65rem;border:2px solid var(--border);border-radius:10px;cursor:pointer;font-weight:700;">&lt;header&gt; + &lt;nav&gt; — Topo e Menu</div>
              <div style="display:grid;grid-template-columns:2fr 1fr;gap:0.5rem;">
                <div data-lm="main" style="padding:1rem;border:2px solid var(--border);border-radius:10px;cursor:pointer;font-weight:700;">&lt;main&gt; &gt; &lt;section&gt; &gt; &lt;article&gt; — Grade de Produtos</div>
                <div data-lm="aside" style="padding:1rem;border:2px solid var(--border);border-radius:10px;cursor:pointer;font-weight:700;">&lt;aside&gt; — Filtros / Avisos</div>
              </div>
              <div data-lm="footer" style="padding:0.65rem;border:2px solid var(--border);border-radius:10px;cursor:pointer;font-weight:700;">&lt;footer&gt; — Rodapé Institucional</div>
            </div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>Código da Região</span><span>landmarks.html</span></div>
            <pre class="dw1-code-body" id="pg03-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg03-status"></div>
      `;

      root.querySelectorAll("[data-lm]").forEach((el) => {
        el.addEventListener("click", () => {
          selected = el.getAttribute("data-lm");
          update();
        });
      });
      update();
    },

    /* 04: Simulador de Formulario e Payload de Envio */
    "04": function (root) {
      function update() {
        const nome = root.querySelector("#pg04-nome").value.trim();
        const qtd = root.querySelector("#pg04-qtd").value;
        const frete = root.querySelector("input[name='pg04-frete']:checked").value;
        const valido = nome.length >= 3 && Number(qtd) >= 1 && Number(qtd) <= 10;

        const query = `cliente=${encodeURIComponent(nome || "vazio")}&quantidade=${encodeURIComponent(qtd)}&frete=${encodeURIComponent(frete)}`;
        root.querySelector("#pg04-code").textContent = `<form action="/checkout" method="post">
  <label for="campo-nome">Nome do Cliente</label>
  <input id="campo-nome" name="cliente" type="text" required minlength="3" value="${nome}">

  <label for="campo-qtd">Quantidade (1 a 10)</label>
  <input id="campo-qtd" name="quantidade" type="number" min="1" max="10" value="${qtd}">

  <fieldset>
    <legend>Modalidade de Frete</legend>
    <input type="radio" id="f-sedex" name="frete" value="sedex"${frete === "sedex" ? " checked" : ""}>
    <label for="f-sedex">SEDEX Expresso</label>
  </fieldset>
</form>

/* Dados empacotados (pares name=value): */
${query}`;

        root.querySelector("#pg04-status").innerHTML = `
          <span><strong>Validação Nativa HTML5:</strong> ${valido ? '<span style="color:var(--green);font-weight:700;">Formulário Válido ✓</span>' : '<span style="color:#dc2626;font-weight:700;">Pendente (Nome >= 3 letras e Qtd 1..10)</span>'}</span>
          <span><strong>Payload gerado:</strong> <code>${esc(query)}</code></span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · Formulários HTML5</span>
            <h4 class="dw1-pg-title">Inspetor de Vínculo &lt;label for&gt;, Validação e Payload</h4>
            <p class="dw1-pg-subtitle">Preencha os controles abaixo e observe como os atributos <code>name</code> e <code>value</code> formam o pacote de dados enviado ao servidor.</p>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Checkout Lojas Blue</span></div>
            <div class="dw1-canvas-body" style="gap:0.75rem;">
              <div class="dw1-ctrl-group">
                <label for="pg04-nome">Nome do Cliente (required, mín. 3 letras)</label>
                <input id="pg04-nome" type="text" value="Marina Costa">
              </div>
              <div class="dw1-ctrl-group">
                <label for="pg04-qtd">Quantidade (type="number", min=1, max=10)</label>
                <input id="pg04-qtd" type="number" min="1" max="10" value="2">
              </div>
              <fieldset style="border:1px solid var(--border);border-radius:10px;padding:0.6rem 0.85rem;">
                <legend style="font-size:0.78rem;font-weight:700;padding:0 0.35rem;">Modalidade de Frete (mesmo name="frete")</legend>
                <label style="margin-right:1rem;font-size:0.86rem;cursor:pointer;"><input type="radio" name="pg04-frete" value="pac"> PAC</label>
                <label style="margin-right:1rem;font-size:0.86rem;cursor:pointer;"><input type="radio" name="pg04-frete" value="sedex" checked> SEDEX</label>
                <label style="font-size:0.86rem;cursor:pointer;"><input type="radio" name="pg04-frete" value="retirada"> Retirar na Loja</label>
              </fieldset>
            </div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>HTML + Payload HTTP</span><span>checkout.html</span></div>
            <pre class="dw1-code-body" id="pg04-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg04-status"></div>
      `;

      root.querySelector("#pg04-nome").addEventListener("input", update);
      root.querySelector("#pg04-qtd").addEventListener("input", update);
      root.querySelectorAll("input[name='pg04-frete']").forEach((r) => r.addEventListener("change", update));
      update();
    },

    /* 05: Simulador de Especificidade CSS e Cascata */
    "05": function (root) {
      let useTag = true;
      let useClass = true;
      let useId = false;

      function update() {
        let winner = "Tag h3 -> (0, 0, 1)";
        let color = "#475569";
        if (useClass) {
          winner = "Classe .titulo-oferta -> (0, 1, 0)";
          color = "#1d4ed8";
        }
        if (useId) {
          winner = "ID #destaque-vip -> (1, 0, 0)";
          color = "#15803d";
        }

        root.querySelector("#pg05-preview").innerHTML = `
          <div class="dw1-sim-card" style="text-align:center;">
            <span style="font-size:0.75rem;font-weight:700;color:var(--muted);">Elemento: &lt;h3${useId ? ' id="destaque-vip"' : ""}${useClass ? ' class="titulo-oferta"' : ""}&gt;</span>
            <h3 style="margin:0.5rem 0;font-size:1.35rem;color:${color};transition:color 0.2s;">Teclado Mecânico Blue Switch — R$ 289,90</h3>
            <span style="display:inline-block;padding:0.25rem 0.65rem;border-radius:999px;background:${color};color:#fff;font-size:0.78rem;font-weight:700;">Cor aplicada: ${color}</span>
          </div>
        `;

        root.querySelector("#pg05-code").textContent = `/* 1. Seletor de Tag — Especificidade (0, 0, 1) */
h3 {
  color: #475569; /* cinza */
}

${useClass ? `/* 2. Seletor de Classe — Especificidade (0, 1, 0) */
.titulo-oferta {
  color: #1d4ed8; /* azul */
}` : "/* Classe .titulo-oferta desativada */"}

${useId ? `/* 3. Seletor de ID — Especificidade (1, 0, 0) */
#destaque-vip {
  color: #15803d; /* verde */
}` : "/* ID #destaque-vip desativado */"}`;

        root.querySelector("#pg05-status").innerHTML = `
          <span><strong>Regra Vencedora na Cascata:</strong> ${winner}</span>
          <span><strong>Ordem de peso:</strong> ID (1,0,0) &gt; Classe (0,1,0) &gt; Tag (0,0,1)</span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · Cascata & Especificidade CSS</span>
            <h4 class="dw1-pg-title">Disputa de Seletores: Tag vs. Classe vs. ID</h4>
            <p class="dw1-pg-subtitle">Ative ou desative as regras CSS que apontam para o mesmo título e veja qual seletor vence a disputa de especificidade.</p>
          </div>
        </div>
        <div class="dw1-pg-controls">
          <div class="dw1-pill-row">
            <button type="button" class="dw1-pill-btn active" disabled>Regra Tag <code>h3</code> (0,0,1) — Sempre ativa</button>
            <button type="button" class="dw1-pill-btn active" id="pg05-btn-class">Classe <code>.titulo-oferta</code> (0,1,0) ✓</button>
            <button type="button" class="dw1-pill-btn" id="pg05-btn-id">ID <code>#destaque-vip</code> (1,0,0)</button>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Elemento Renderizado</span></div>
            <div class="dw1-canvas-body" id="pg05-preview"></div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>Folha de Estilo CSS</span><span>estilos.css</span></div>
            <pre class="dw1-code-body" id="pg05-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg05-status"></div>
      `;

      root.querySelector("#pg05-btn-class").addEventListener("click", (e) => {
        useClass = !useClass;
        e.target.classList.toggle("active", useClass);
        e.target.innerHTML = `Classe <code>.titulo-oferta</code> (0,1,0) ${useClass ? "✓" : ""}`;
        update();
      });
      root.querySelector("#pg05-btn-id").addEventListener("click", (e) => {
        useId = !useId;
        e.target.classList.toggle("active", useId);
        e.target.innerHTML = `ID <code>#destaque-vip</code> (1,0,0) ${useId ? "✓" : ""}`;
        update();
      });
      update();
    },

    /* 06: Simulador Visual do Box Model (width, padding, border, margin, box-sizing) */
    "06": function (root) {
      let state = {
        width: 220,
        padding: 20,
        border: 4,
        margin: 16,
        borderBox: true
      };

      function update() {
        const totalBoxWidth = state.borderBox
          ? state.width
          : state.width + state.padding * 2 + state.border * 2;
        const innerContentWidth = state.borderBox
          ? Math.max(40, state.width - state.padding * 2 - state.border * 2)
          : state.width;

        root.querySelector("#pg06-val-w").textContent = `${state.width}px`;
        root.querySelector("#pg06-val-p").textContent = `${state.padding}px`;
        root.querySelector("#pg06-val-b").textContent = `${state.border}px`;
        root.querySelector("#pg06-val-m").textContent = `${state.margin}px`;

        root.querySelector("#pg06-canvas").innerHTML = `
          <div style="text-align:center;">
            <div class="dw1-bm-margin" style="padding:${state.margin}px;">
              <div class="dw1-bm-border" style="border-width:${state.border}px;">
                <div class="dw1-bm-padding" style="padding:${state.padding}px;">
                  <div class="dw1-bm-content" style="width:${innerContentWidth}px;">
                    Miolo: ${innerContentWidth}px<br>Caixa: ${totalBoxWidth}px
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top:0.65rem;font-size:0.76rem;color:var(--muted);display:flex;justify-content:center;gap:0.85rem;flex-wrap:wrap;">
              <span>🟧 Margin (${state.margin}px)</span>
              <span>🟦 Border (${state.border}px)</span>
              <span>🟩 Padding (${state.padding}px)</span>
            </div>
          </div>
        `;

        root.querySelector("#pg06-code").textContent = `.card-produto {
  box-sizing: ${state.borderBox ? "border-box" : "content-box"};
  width: ${state.width}px;
  padding: ${state.padding}px;
  border: ${state.border}px solid #2563eb;
  margin: ${state.margin}px;
}

/* Matemática do Navegador:
   Largura da Caixa (borda a borda) = ${totalBoxWidth}px
   Largura útil do conteúdo interno = ${innerContentWidth}px
   Espaço total com margens = ${totalBoxWidth + state.margin * 2}px */`;

        root.querySelector("#pg06-status").innerHTML = `
          <span><strong>Modo:</strong> <code>box-sizing: ${state.borderBox ? "border-box" : "content-box"}</code></span>
          <span><strong>Largura Real da Caixa:</strong> ${totalBoxWidth}px (Conteúdo: ${innerContentWidth}px + Padding: ${state.padding * 2}px + Borda: ${state.border * 2}px)</span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · CSS Box Model</span>
            <h4 class="dw1-pg-title">Laboratório Visual de Camadas e <code>box-sizing</code></h4>
            <p class="dw1-pg-subtitle">Arraste os controles de largura, padding, border e margin e alterne entre <code>border-box</code> e <code>content-box</code>.</p>
          </div>
        </div>
        <div class="dw1-pg-controls">
          <div class="dw1-ctrl-group">
            <label>width <span class="val" id="pg06-val-w"></span></label>
            <input type="range" id="pg06-w" min="160" max="280" step="4" value="${state.width}">
          </div>
          <div class="dw1-ctrl-group">
            <label>padding <span class="val" id="pg06-val-p"></span></label>
            <input type="range" id="pg06-p" min="0" max="36" step="4" value="${state.padding}">
          </div>
          <div class="dw1-ctrl-group">
            <label>border <span class="val" id="pg06-val-b"></span></label>
            <input type="range" id="pg06-b" min="0" max="12" step="2" value="${state.border}">
          </div>
          <div class="dw1-ctrl-group">
            <label>margin <span class="val" id="pg06-val-m"></span></label>
            <input type="range" id="pg06-m" min="0" max="28" step="4" value="${state.margin}">
          </div>
          <div class="dw1-ctrl-group" style="flex:0 0 auto;">
            <label>box-sizing</label>
            <button type="button" class="dw1-pill-btn active" id="pg06-btn-bs">border-box ✓</button>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Inspeção Visual de Camadas (DevTools)</span></div>
            <div class="dw1-canvas-body" id="pg06-canvas"></div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>CSS & Cálculo Real</span><span>box-model.css</span></div>
            <pre class="dw1-code-body" id="pg06-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg06-status"></div>
      `;

      root.querySelector("#pg06-w").addEventListener("input", (e) => { state.width = Number(e.target.value); update(); });
      root.querySelector("#pg06-p").addEventListener("input", (e) => { state.padding = Number(e.target.value); update(); });
      root.querySelector("#pg06-b").addEventListener("input", (e) => { state.border = Number(e.target.value); update(); });
      root.querySelector("#pg06-m").addEventListener("input", (e) => { state.margin = Number(e.target.value); update(); });
      root.querySelector("#pg06-btn-bs").addEventListener("click", (e) => {
        state.borderBox = !state.borderBox;
        e.target.classList.toggle("active", state.borderBox);
        e.target.textContent = state.borderBox ? "border-box ✓" : "content-box";
        update();
      });
      update();
    },

    /* 07: Simulador Interativo de Flexbox */
    "07": function (root) {
      let state = {
        dir: "row",
        justify: "space-between",
        align: "center",
        gap: 12
      };

      function update() {
        const stage = root.querySelector("#pg07-stage");
        stage.style.flexDirection = state.dir;
        stage.style.justifyContent = state.justify;
        stage.style.alignItems = state.align;
        stage.style.gap = `${state.gap}px`;
        root.querySelector("#pg07-val-gap").textContent = `${state.gap}px`;

        root.querySelector("#pg07-code").textContent = `.container-vitrine {
  display: flex;
  flex-direction: ${state.dir};
  justify-content: ${state.justify};
  align-items: ${state.align};
  gap: ${state.gap}px;
}`;

        root.querySelector("#pg07-status").innerHTML = `
          <span><strong>Eixo Principal (justify-content):</strong> ${state.dir.startsWith("row") ? "Horizontal" : "Vertical"} (<code>${state.justify}</code>)</span>
          <span><strong>Eixo Transversal (align-items):</strong> <code>${state.align}</code></span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · CSS Flexbox</span>
            <h4 class="dw1-pg-title">Playground Visual de Eixos Flexbox</h4>
            <p class="dw1-pg-subtitle">Experimente mudar a direção, o alinhamento principal (<code>justify-content</code>), o alinhamento transversal (<code>align-items</code>) e o <code>gap</code>.</p>
          </div>
        </div>
        <div class="dw1-pg-controls">
          <div class="dw1-ctrl-group">
            <label>flex-direction</label>
            <select id="pg07-dir">
              <option value="row">row (linha →)</option>
              <option value="row-reverse">row-reverse (←)</option>
              <option value="column">column (coluna ↓)</option>
            </select>
          </div>
          <div class="dw1-ctrl-group">
            <label>justify-content</label>
            <select id="pg07-justify">
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="space-between" selected>space-between</option>
              <option value="space-around">space-around</option>
              <option value="space-evenly">space-evenly</option>
            </select>
          </div>
          <div class="dw1-ctrl-group">
            <label>align-items</label>
            <select id="pg07-align">
              <option value="stretch">stretch</option>
              <option value="flex-start">flex-start</option>
              <option value="center" selected>center</option>
              <option value="flex-end">flex-end</option>
            </select>
          </div>
          <div class="dw1-ctrl-group">
            <label>gap <span class="val" id="pg07-val-gap"></span></label>
            <input type="range" id="pg07-gap" min="0" max="32" step="4" value="${state.gap}">
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Flex Container (.container-vitrine)</span></div>
            <div class="dw1-canvas-body">
              <div class="dw1-flex-stage" id="pg07-stage">
                <div class="dw1-flex-item">1. Logo Blue</div>
                <div class="dw1-flex-item" style="padding:1.1rem 0.9rem;">2. Busca</div>
                <div class="dw1-flex-item">3. Sacola (2)</div>
              </div>
            </div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>CSS Flexbox</span><span>flexbox.css</span></div>
            <pre class="dw1-code-body" id="pg07-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg07-status"></div>
      `;

      root.querySelector("#pg07-dir").addEventListener("change", (e) => { state.dir = e.target.value; update(); });
      root.querySelector("#pg07-justify").addEventListener("change", (e) => { state.justify = e.target.value; update(); });
      root.querySelector("#pg07-align").addEventListener("change", (e) => { state.align = e.target.value; update(); });
      root.querySelector("#pg07-gap").addEventListener("input", (e) => { state.gap = Number(e.target.value); update(); });
      update();
    },

    /* 08: Simulador de CSS Grid e Viewport Responsivo */
    "08": function (root) {
      let state = {
        viewport: 100,
        minCol: 130,
        spanFirst: false
      };

      function update() {
        const stage = root.querySelector("#pg08-stage");
        stage.style.width = `${state.viewport}%`;
        stage.style.gridTemplateColumns = `repeat(auto-fit, minmax(${state.minCol}px, 1fr))`;
        stage.style.gap = "10px";

        const firstCard = root.querySelector("#pg08-card1");
        firstCard.style.gridColumn = state.spanFirst && state.viewport >= 65 ? "span 2" : "span 1";
        firstCard.classList.toggle("featured", state.spanFirst);

        root.querySelector("#pg08-val-vp").textContent = `${state.viewport}%`;
        root.querySelector("#pg08-val-mc").textContent = `${state.minCol}px`;

        const bpLabel = state.viewport >= 85 ? "Desktop (Largo)" : state.viewport >= 60 ? "Tablet (Médio)" : "Mobile (Compacto)";

        root.querySelector("#pg08-code").textContent = `.grade-produtos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${state.minCol}px, 1fr));
  gap: 10px;
  width: ${state.viewport}%;
}
${state.spanFirst ? "\n.card-destaque {\n  grid-column: span 2;\n}" : ""}`;

        root.querySelector("#pg08-status").innerHTML = `
          <span><strong>Simulação de Tela:</strong> ${bpLabel} (${state.viewport}% da largura)</span>
          <span><strong>Regra ativa:</strong> <code>minmax(${state.minCol}px, 1fr)</code></span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · CSS Grid & Responsividade</span>
            <h4 class="dw1-pg-title">Simulador de Viewport, <code>auto-fit</code> e <code>span 2</code></h4>
            <p class="dw1-pg-subtitle">Reduza a largura simulada da tela para ver os cards quebrarem sozinhos de 4 colunas até 1 coluna (Mobile).</p>
          </div>
        </div>
        <div class="dw1-pg-controls">
          <div class="dw1-ctrl-group">
            <label>Largura da Viewport <span class="val" id="pg08-val-vp"></span></label>
            <input type="range" id="pg08-vp" min="42" max="100" step="2" value="${state.viewport}">
          </div>
          <div class="dw1-ctrl-group">
            <label>Largura Mínima (minmax) <span class="val" id="pg08-val-mc"></span></label>
            <input type="range" id="pg08-mc" min="90" max="180" step="10" value="${state.minCol}">
          </div>
          <div class="dw1-ctrl-group" style="flex:0 0 auto;">
            <label>Destaque 1º Card</label>
            <button type="button" class="dw1-pill-btn" id="pg08-btn-span">grid-column: span 2</button>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Grade Responsiva (.grade-produtos)</span></div>
            <div class="dw1-canvas-body">
              <div class="dw1-grid-stage" id="pg08-stage">
                <div class="dw1-grid-item" id="pg08-card1">Card 1 (Oferta)</div>
                <div class="dw1-grid-item">Card 2</div>
                <div class="dw1-grid-item">Card 3</div>
                <div class="dw1-grid-item">Card 4</div>
              </div>
            </div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>CSS Grid</span><span>grid.css</span></div>
            <pre class="dw1-code-body" id="pg08-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg08-status"></div>
      `;

      root.querySelector("#pg08-vp").addEventListener("input", (e) => { state.viewport = Number(e.target.value); update(); });
      root.querySelector("#pg08-mc").addEventListener("input", (e) => { state.minCol = Number(e.target.value); update(); });
      root.querySelector("#pg08-btn-span").addEventListener("click", (e) => {
        state.spanFirst = !state.spanFirst;
        e.target.classList.toggle("active", state.spanFirst);
        update();
      });
      update();
    },

    /* 09: Simulador de DOM, textContent, classList e dataset */
    "09": function (root) {
      let state = {
        titulo: "Webcam Full HD 1080p",
        preco: 249,
        emOferta: false,
        esgotado: false
      };

      function update() {
        const precoFinal = state.emOferta ? (state.preco * 0.85).toFixed(2) : state.preco.toFixed(2);
        const classes = ["card-produto"];
        if (state.emOferta) classes.push("em-oferta");
        if (state.esgotado) classes.push("esgotado");

        root.querySelector("#pg09-canvas").innerHTML = `
          <div class="dw1-sim-card" style="border-width:2px;border-color:${state.emOferta ? "var(--green)" : "var(--border)"};opacity:${state.esgotado ? "0.55" : "1"};transition:all 0.2s;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:0.75rem;font-family:monospace;color:var(--muted);">class="${classes.join(" ")}"</span>
              ${state.emOferta ? '<span style="background:var(--green);color:#fff;padding:0.15rem 0.55rem;border-radius:999px;font-size:0.72rem;font-weight:700;">-15% OFERTA</span>' : ""}
            </div>
            <h4 style="margin:0.45rem 0;">${esc(state.titulo)}</h4>
            <p style="margin:0;font-size:1.15rem;font-weight:800;color:var(--green);">R$ ${precoFinal.replace(".", ",")}</p>
            <p style="margin:0.35rem 0 0;font-size:0.8rem;color:var(--muted);">Status: ${state.esgotado ? "Indisponível no estoque" : "Pronta entrega"}</p>
          </div>
        `;

        root.querySelector("#pg09-code").textContent = `const card = document.querySelector('#card-webcam');
const titulo = card.querySelector('.titulo');
const preco = card.querySelector('.preco');

titulo.textContent = "${state.titulo}";
preco.textContent = "R$ ${precoFinal.replace(".", ",")}";
card.dataset.precoBase = "${state.preco}";
card.classList.toggle("em-oferta", ${state.emOferta});
card.classList.toggle("esgotado", ${state.esgotado});`;

        root.querySelector("#pg09-status").innerHTML = `
          <span><strong>card.classList:</strong> <code>[${classes.map((c) => `"${c}"`).join(", ")}]</code></span>
          <span><strong>card.dataset.precoBase:</strong> <code>"${state.preco}"</code></span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · JavaScript & DOM</span>
            <h4 class="dw1-pg-title">Manipulador de Nós DOM: <code>textContent</code>, <code>dataset</code> e <code>classList</code></h4>
            <p class="dw1-pg-subtitle">Edite o texto e alterne as classes de estado para ver como o JavaScript modifica o elemento sem recarregar a página.</p>
          </div>
        </div>
        <div class="dw1-pg-controls">
          <div class="dw1-ctrl-group">
            <label>titulo.textContent</label>
            <input type="text" id="pg09-in-titulo" value="${state.titulo}">
          </div>
          <div class="dw1-ctrl-group" style="flex:0 0 auto;">
            <label>Classes CSS (classList.toggle)</label>
            <div class="dw1-pill-row">
              <button type="button" class="dw1-pill-btn" id="pg09-btn-oferta">.em-oferta (-15%)</button>
              <button type="button" class="dw1-pill-btn" id="pg09-btn-esgotado">.esgotado</button>
            </div>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Elemento DOM (#card-webcam)</span></div>
            <div class="dw1-canvas-body" id="pg09-canvas"></div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>Comandos DOM Executados</span><span>dom.js</span></div>
            <pre class="dw1-code-body" id="pg09-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg09-status"></div>
      `;

      root.querySelector("#pg09-in-titulo").addEventListener("input", (e) => { state.titulo = e.target.value; update(); });
      root.querySelector("#pg09-btn-oferta").addEventListener("click", (e) => {
        state.emOferta = !state.emOferta;
        e.target.classList.toggle("active", state.emOferta);
        update();
      });
      root.querySelector("#pg09-btn-esgotado").addEventListener("click", (e) => {
        state.esgotado = !state.esgotado;
        e.target.classList.toggle("active", state.esgotado);
        update();
      });
      update();
    },

    /* 10: Simulador de Eventos (input, click, submit + preventDefault) */
    "10": function (root) {
      let state = {
        qtd: 2,
        precoUnit: 140,
        cupom: "",
        descontoAtivo: false,
        ultimoEvento: "Nenhum evento disparado ainda"
      };

      function update() {
        const bruto = state.qtd * state.precoUnit;
        const final = state.descontoAtivo ? bruto * 0.9 : bruto;

        root.querySelector("#pg10-resumo").innerHTML = `
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span>Subtotal (${state.qtd}x R$ 140,00):</span>
            <strong style="font-size:1.15rem;color:var(--green);">R$ ${final.toFixed(2).replace(".", ",")}</strong>
          </div>
          <div style="margin-top:0.35rem;font-size:0.8rem;color:var(--muted);">
            ${state.descontoAtivo ? "✓ Cupom BLUE10 aplicado (-10%) sem recarregar a página!" : "Digite BLUE10 e clique em Aplicar para testar submit + preventDefault()."}
          </div>
        `;

        root.querySelector("#pg10-code").textContent = `campoQtd.addEventListener("input", (e) => {
  const qtd = Number(e.target.value); // ${state.qtd}
  atualizarSubtotal(qtd * 140);
});

formCupom.addEventListener("submit", (event) => {
  event.preventDefault(); // Bloqueia o reload da página!
  const codigo = inputCupom.value.trim().toUpperCase();
  aplicarDesconto(codigo === "BLUE10");
});`;

        root.querySelector("#pg10-status").innerHTML = `
          <span><strong>Último evento capturado:</strong> <code>${esc(state.ultimoEvento)}</code></span>
          <span><strong>Reload bloqueado:</strong> <code>event.preventDefault()</code> ativo</span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · Eventos do DOM</span>
            <h4 class="dw1-pg-title">Monitor de Eventos: <code>input</code>, <code>click</code> e <code>submit</code></h4>
            <p class="dw1-pg-subtitle">Altere a quantidade ou envie o formulário de cupom para ver o log de eventos e o cálculo instantâneo.</p>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Calculadora Interativa de Produto</span></div>
            <div class="dw1-canvas-body" style="gap:0.75rem;">
              <div class="dw1-ctrl-group">
                <label for="pg10-qtd">Quantidade de Kits Caderno Inteligente (R$ 140,00 un.)</label>
                <input id="pg10-qtd" type="number" min="1" max="20" value="${state.qtd}">
              </div>
              <form id="pg10-form" style="display:flex;gap:0.5rem;align-items:flex-end;">
                <div class="dw1-ctrl-group" style="margin:0;">
                  <label for="pg10-cupom">Cupom Promocional (teste: BLUE10)</label>
                  <input id="pg10-cupom" type="text" placeholder="Ex.: BLUE10">
                </div>
                <button type="submit" class="dw1-pill-btn active" style="height:36px;">Aplicar (submit)</button>
              </form>
              <div class="dw1-sim-card" id="pg10-resumo"></div>
            </div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>Listeners JavaScript</span><span>eventos.js</span></div>
            <pre class="dw1-code-body" id="pg10-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg10-status"></div>
      `;

      root.querySelector("#pg10-qtd").addEventListener("input", (e) => {
        state.qtd = Math.max(1, Number(e.target.value) || 1);
        state.ultimoEvento = `input -> target.value = "${state.qtd}"`;
        update();
      });
      root.querySelector("#pg10-form").addEventListener("submit", (e) => {
        e.preventDefault();
        state.cupom = root.querySelector("#pg10-cupom").value.trim().toUpperCase();
        state.descontoAtivo = state.cupom === "BLUE10";
        state.ultimoEvento = `submit (preventDefault executado) -> cupom = "${state.cupom}"`;
        update();
      });
      update();
    },

    /* 11: Simulador de Criacao Dinamica de Elementos e localStorage JSON */
    "11": function (root) {
      let itens = [
        { id: 1, nome: "Hub USB-C 7 em 1", preco: 189 },
        { id: 2, nome: "Suporte Articulado Notebook", preco: 129 }
      ];

      function update() {
        const jsonStr = JSON.stringify(itens, null, 2);
        root.querySelector("#pg11-list").innerHTML = itens.length
          ? itens
              .map(
                (item) => `
              <li style="display:flex;justify-content:space-between;align-items:center;padding:0.45rem 0.65rem;border:1px solid var(--border);border-radius:8px;background:var(--bg);">
                <span><strong>${esc(item.nome)}</strong> — R$ ${item.preco},00</span>
                <button type="button" class="dw1-pill-btn" data-del="${item.id}" style="padding:0.2rem 0.55rem;font-size:0.75rem;">Remover</button>
              </li>`
              )
              .join("")
          : '<li style="color:var(--muted);font-size:0.86rem;">Lista vazia. Adicione um item acima!</li>';

        root.querySelectorAll("[data-del]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = Number(btn.getAttribute("data-del"));
            itens = itens.filter((i) => i.id !== id);
            update();
          });
        });

        root.querySelector("#pg11-code").textContent = `// Estado serializado em localStorage.setItem("blue_favoritos", ...):
${jsonStr}`;

        root.querySelector("#pg11-status").innerHTML = `
          <span><strong>Nós &lt;li&gt; criados via DOM:</strong> ${itens.length} elemento(s)</span>
          <span><strong>Tamanho no localStorage:</strong> ${jsonStr.length} bytes JSON</span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Interativo ao Vivo · DOM Dinâmico & localStorage</span>
            <h4 class="dw1-pg-title">Construtor de Lista Dinâmica + Inspetor JSON</h4>
            <p class="dw1-pg-subtitle">Adicione ou remova produtos da lista e acompanhe a string JSON gerada em tempo real por <code>JSON.stringify()</code>.</p>
          </div>
        </div>
        <div class="dw1-pg-controls">
          <div class="dw1-ctrl-group">
            <label>Novo Produto</label>
            <input type="text" id="pg11-nome" value="Mousepad Extra Grande 90x40">
          </div>
          <div class="dw1-ctrl-group" style="max-width:130px;">
            <label>Preço (R$)</label>
            <input type="number" id="pg11-preco" value="89">
          </div>
          <div class="dw1-ctrl-group" style="flex:0 0 auto;">
            <label>Ação DOM</label>
            <button type="button" class="dw1-pill-btn active" id="pg11-add">+ createElement('li')</button>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>&lt;ul id="lista-favoritos"&gt;</span></div>
            <div class="dw1-canvas-body">
              <ul id="pg11-list" style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.45rem;"></ul>
            </div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>localStorage["blue_favoritos"]</span><span>JSON</span></div>
            <pre class="dw1-code-body" id="pg11-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg11-status"></div>
      `;

      root.querySelector("#pg11-add").addEventListener("click", () => {
        const nome = root.querySelector("#pg11-nome").value.trim() || "Produto Blue";
        const preco = Number(root.querySelector("#pg11-preco").value) || 99;
        itens.push({ id: Date.now(), nome, preco });
        update();
      });
      update();
    },

    /* 12: Mini Vitrine Interativa Integrada Lojas Blue */
    "12": function (root) {
      const catalogo = [
        { id: 1, nome: "Teclado Mecânico Blue", cat: "Periféricos", preco: 260 },
        { id: 2, nome: "Mouse Sem Fio Ergo", cat: "Periféricos", preco: 140 },
        { id: 3, nome: "Caderno Pontilhado A5", cat: "Papelaria", preco: 65 },
        { id: 4, nome: "Kit Canetas Técnicas", cat: "Papelaria", preco: 85 }
      ];
      let state = {
        cat: "Todos",
        sacola: [{ id: 2, nome: "Mouse Sem Fio Ergo", preco: 140, qtd: 1 }],
        cupom: false
      };

      function update() {
        const visiveis = catalogo.filter((p) => state.cat === "Todos" || p.cat === state.cat);
        const subtotal = state.sacola.reduce((acc, i) => acc + i.preco * i.qtd, 0);
        const desc = state.cupom ? subtotal * 0.1 : 0;
        const liquido = subtotal - desc;
        const metaFrete = 250;
        const pctFrete = Math.min(100, Math.round((liquido / metaFrete) * 100));

        root.querySelectorAll("[data-pg12-cat]").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-pg12-cat") === state.cat);
        });

        root.querySelector("#pg12-cards").innerHTML = visiveis
          .map(
            (p) => `
          <div style="padding:0.55rem 0.7rem;border:1px solid var(--border);border-radius:10px;background:var(--bg);display:flex;justify-content:space-between;align-items:center;">
            <div>
              <strong style="font-size:0.84rem;">${esc(p.nome)}</strong>
              <div style="font-size:0.75rem;color:var(--muted);">${p.cat} · R$ ${p.preco},00</div>
            </div>
            <button type="button" class="dw1-pill-btn" data-add="${p.id}" style="padding:0.25rem 0.6rem;font-size:0.76rem;">+ Sacola</button>
          </div>`
          )
          .join("");

        root.querySelectorAll("[data-add]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = Number(btn.getAttribute("data-add"));
            const prod = catalogo.find((x) => x.id === id);
            const existente = state.sacola.find((x) => x.id === id);
            if (existente) existente.qtd += 1;
            else state.sacola.push({ id: prod.id, nome: prod.nome, preco: prod.preco, qtd: 1 });
            update();
          });
        });

        root.querySelector("#pg12-frete-bar").style.width = `${pctFrete}%`;
        root.querySelector("#pg12-frete-msg").textContent =
          liquido >= metaFrete
            ? "🎉 Parabéns! Frete Grátis desbloqueado!"
            : `Faltam R$ ${(metaFrete - liquido).toFixed(2).replace(".", ",")} para Frete Grátis`;

        root.querySelector("#pg12-code").textContent = `// Estado Integrado da Vitrine Lojas Blue:
${JSON.stringify(
  {
    categoriaAtiva: state.cat,
    produtosExibidos: visiveis.length,
    cupomBLUE10: state.cupom,
    subtotalBruto: subtotal,
    totalFinal: liquido,
    freteGratis: liquido >= metaFrete,
    itensSacola: state.sacola
  },
  null,
  2
)}`;

        root.querySelector("#pg12-status").innerHTML = `
          <span><strong>Itens na Sacola:</strong> ${state.sacola.reduce((a, b) => a + b.qtd, 0)} un.</span>
          <span><strong>Total Final:</strong> <strong style="color:var(--green);">R$ ${liquido.toFixed(2).replace(".", ",")}</strong></span>
        `;
      }

      root.innerHTML = `
        <div class="dw1-pg-header">
          <div>
            <span class="dw1-pg-kicker">Simulador Integrado · Projeto Final Vitrine Lojas Blue</span>
            <h4 class="dw1-pg-title">Mini Vitrine Completa: Filtro + Sacola + Barra de Frete Grátis + Cupom</h4>
            <p class="dw1-pg-subtitle">Filtre departamentos, adicione itens à sacola e ative o cupom <code>BLUE10</code> para observar o ciclo completo de estado da aplicação.</p>
          </div>
        </div>
        <div class="dw1-pg-controls" style="justify-content:space-between;">
          <div class="dw1-pill-row">
            <button type="button" class="dw1-pill-btn active" data-pg12-cat="Todos">Todos (4)</button>
            <button type="button" class="dw1-pill-btn" data-pg12-cat="Periféricos">Periféricos (2)</button>
            <button type="button" class="dw1-pill-btn" data-pg12-cat="Papelaria">Papelaria (2)</button>
          </div>
          <div class="dw1-pill-row">
            <button type="button" class="dw1-pill-btn" id="pg12-cupom">Cupom BLUE10 (-10%)</button>
            <button type="button" class="dw1-pill-btn" id="pg12-limpar">Limpar Sacola</button>
          </div>
        </div>
        <div class="dw1-split">
          <div class="dw1-canvas-panel">
            <div class="dw1-panel-bar"><span class="dw1-browser-dots"><i></i><i></i><i></i></span><span>Vitrine Interativa Lojas Blue</span></div>
            <div class="dw1-canvas-body" style="gap:0.65rem;">
              <div style="padding:0.5rem 0.7rem;border-radius:8px;background:var(--bg);border:1px solid var(--border);">
                <div style="font-size:0.76rem;font-weight:700;margin-bottom:0.3rem;" id="pg12-frete-msg"></div>
                <div style="height:8px;background:var(--border);border-radius:999px;overflow:hidden;">
                  <div id="pg12-frete-bar" style="height:100%;background:var(--green);transition:width 0.25s;"></div>
                </div>
              </div>
              <div id="pg12-cards" style="display:flex;flex-direction:column;gap:0.45rem;"></div>
            </div>
          </div>
          <div class="dw1-code-panel">
            <div class="dw1-panel-bar"><span>Estado Unificado da Aplicação</span><span>vitrine-state.json</span></div>
            <pre class="dw1-code-body" id="pg12-code"></pre>
          </div>
        </div>
        <div class="dw1-status-strip" id="pg12-status"></div>
      `;

      root.querySelectorAll("[data-pg12-cat]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.cat = btn.getAttribute("data-pg12-cat");
          update();
        });
      });
      root.querySelector("#pg12-cupom").addEventListener("click", (e) => {
        state.cupom = !state.cupom;
        e.target.classList.toggle("active", state.cupom);
        update();
      });
      root.querySelector("#pg12-limpar").addEventListener("click", () => {
        state.sacola = [];
        update();
      });
      update();
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initLabs();
      initPlaygrounds();
    });
  } else {
    initLabs();
    initPlaygrounds();
  }
})();
