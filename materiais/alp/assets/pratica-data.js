window.PED_PRACTICE = {
  "output_sequencia": {
    "frames": [
      ["Início da execução: tela vazia", []],
      ["Linha 1: print(\"Lojas Blue\") envia texto e quebra de linha", ["Lojas Blue"]],
      ["Linha 2: print(\"Setor: Perfumaria\") acrescenta a 2ª linha", ["Lojas Blue", "Setor: Perfumaria"]],
      ["Linha 3: print(\"Caixa 01 liberado\") acrescenta a 3ª linha", ["Lojas Blue", "Setor: Perfumaria", "Caixa 01 liberado"]]
    ],
    "answer": "3",
    "why": "Cada chamada padrão de print() envia uma quebra de linha ao final (end=\"\\n\"), gerando 3 linhas independentes."
  },
  "output_sep_end": {
    "frames": [
      ["Início: cursor no começo da 1ª linha", []],
      ["1º print com sep=\" - \" e end=\" | \" permanece na mesma linha", ["10 - 05 - 2026 | "]],
      ["2º print escreve logo após \" | \" e finaliza a linha", ["10 - 05 - 2026 | Lojas Blue"]]
    ],
    "answer": "1",
    "why": "Como o primeiro print definiu end=\" | \" em vez de \"\\n\", o segundo print continuou na mesma linha, totalizando 1 linha."
  },
  "input_aninhado": {
    "frames": [
      ["Python encontra print(input(\"Filial: \"))", ["Aguardando chamada interna input()"]],
      ["1º passo: input exibe \"Filial: \" e pausa até o Enter", ["Prompt: Filial: ", "Digitado: Centro"]],
      ["2º passo: input devolve \"Centro\" para print()", ["print(\"Centro\")"]],
      ["3º passo: print exibe o texto retornado na tela", ["Saída: Centro"]]
    ],
    "answer": "2",
    "why": "A função interna input() sempre termina primeiro (passo 1) e só depois print() exibe o texto devolvido (passo 2)."
  },
  "input_fluxo": {
    "frames": [
      ["Início do roteiro com duas leituras seguidas", []],
      ["1º print(input(\"Produto: \")) lê \"Shampoo\" e imprime", ["Produto lido: Shampoo"]],
      ["2º print(input(\"Setor: \")) pausa novamente, lê \"Cosméticos\" e imprime", ["Produto lido: Shampoo", "Setor lido: Cosméticos"]]
    ],
    "answer": "2",
    "why": "O programa pausa uma vez para cada chamada de input() executada."
  },
  "variaveis_reatribuicao": {
    "frames": [
      ["estoque = 15 (cria a variável inteira com 15)", ["estoque: 15 (int)"]],
      ["estoque = 12 (substitui o valor anterior por 12)", ["estoque: 12 (int)"]],
      ["estoque = 20 (substitui novamente o valor por 20)", ["estoque: 20 (int)"]]
    ],
    "answer": "20",
    "why": "Uma variável escalar guarda apenas o último valor atribuído a ela; os valores 15 e 12 foram substituídos."
  },
  "variaveis_conversao": {
    "frames": [
      ["Leitura do teclado: texto = \"4\"", ["texto = \"4\" (str)"]],
      ["Conversão explícita: qtd = int(texto)", ["texto = \"4\" (str)", "qtd = 4 (int)"]],
      ["Exibição do tipo e do valor inteiro", ["qtd guarda o inteiro 4"]]
    ],
    "answer": "4",
    "why": "int(\"4\") converte o texto \"4\" no número inteiro 4."
  },
  "operadores_precedencia": {
    "frames": [
      ["Expressão sem parênteses: 20 + 10 * 2", ["10 * 2 é calculado primeiro = 20", "20 + 20 = 40"]],
      ["Expressão com parênteses: (20 + 10) * 2", ["(20 + 10) é calculado primeiro = 30", "30 * 2 = 60"]],
      ["Comparação dos dois resultados", ["sem_parenteses = 40", "com_parenteses = 60"]]
    ],
    "answer": "60",
    "why": "Os parênteses forçam a adição 20 + 10 = 30 antes da multiplicação por 2, resultando em 60."
  },
  "operadores_divisao": {
    "frames": [
      ["Total de 23 unidades em caixas de 5 unidades", ["unidades = 23", "capacidade = 5"]],
      ["Divisão inteira: caixas = 23 // 5", ["caixas = 4 (quociente inteiro)"]],
      ["Resto da divisão: avulsas = 23 % 5", ["caixas = 4", "avulsas = 3 (unidades que sobram)"]]
    ],
    "answer": "3",
    "why": "4 caixas de 5 ocupam 20 unidades; o operador % devolve o resto 23 - 20 = 3."
  },
  "if_elif_faixas": {
    "frames": [
      ["Entrada: valor_compra = 140", ["valor_compra = 140"]],
      ["Teste 1: 140 >= 200 → False (pula o bloco do if)", ["140 >= 200: False"]],
      ["Teste 2: 140 >= 100 → True (entra no 1º elif e define desconto = 15)", ["140 >= 100: True", "desconto = 15"]],
      ["Demais ramos (elif >= 50 e else) são ignorados", ["Resultado final: desconto = 15"]]
    ],
    "answer": "15",
    "why": "Em uma cadeia if/elif/else, apenas o primeiro ramo cuja condição é True é executado; os seguintes são descartados."
  },
  "if_independentes": {
    "frames": [
      ["Estoque inicial: 3 unidades", ["estoque = 3", "alertas = 0"]],
      ["1º if: estoque < 10 → True (incrementa alertas)", ["estoque = 3", "alertas = 1"]],
      ["2º if independente: estoque < 5 → True (também executa!)", ["estoque = 3", "alertas = 2"]]
    ],
    "answer": "2",
    "why": "Quando usamos dois if separados (em vez de elif), o Python testa ambos de forma independente."
  },
  "match_canal": {
    "frames": [
      ["Valor recebido: canal = 2", ["canal = 2"]],
      ["Compara com case 1: não coincide", ["case 1: ignorado"]],
      ["Compara com case 2: coincide! Executa o bloco e encerra o match", ["case 2: Retirada rápida", "prazo_horas = 2"]]
    ],
    "answer": "2",
    "why": "O valor 2 coincide com case 2, que define prazo_horas = 2 e encerra a estrutura match."
  },
  "match_ curinga": {
    "frames": [
      ["Valor recebido: codigo_setor = 99", ["codigo_setor = 99"]],
      ["Testa case 10, case 20 e case 30: nenhum coincide", ["10, 20, 30: sem correspondência"]],
      ["Chega ao case _: captura o valor não previsto", ["case _: código inválido (taxa = 0)"]]
    ],
    "answer": "0",
    "why": "Como 99 não coincide com 10, 20 ou 30, o padrão curinga case _ é acionado e define taxa = 0."
  },
  "while_contador": {
    "frames": [
      ["Antes do laço: passo = 1, total = 0", ["passo = 1", "total = 0"]],
      ["1ª repetição (1 <= 3 True): soma 10 e avança passo para 2", ["passo = 2", "total = 10"]],
      ["2ª repetição (2 <= 3 True): soma 10 e avança passo para 3", ["passo = 3", "total = 20"]],
      ["3ª repetição (3 <= 3 True): soma 10 e avança passo para 4", ["passo = 4", "total = 30"]],
      ["Novo teste (4 <= 3 False): encerra o while", ["Fim: passo = 4", "total = 30"]]
    ],
    "answer": "4",
    "why": "O laço repete para 1, 2 e 3, mas só termina quando passo passa a valer 4 e torna a condição passo <= 3 falsa."
  },
  "while_sentinela": {
    "frames": [
      ["Leitura inicial antes do while: valor = 25", ["valor = 25", "soma = 0", "itens = 0"]],
      ["25 != 0 True: acumula 25 (itens = 1) e lê próximo valor = 15", ["valor = 15", "soma = 25", "itens = 1"]],
      ["15 != 0 True: acumula 15 (itens = 2) e lê próximo valor = 0", ["valor = 0", "soma = 40", "itens = 2"]],
      ["0 != 0 False: sentinela 0 encerra sem entrar na contagem", ["soma = 40", "itens = 2"]]
    ],
    "answer": "2",
    "why": "O valor sentinela 0 serve apenas para encerrar a repetição e não é contabilizado como item vendido."
  },
  "for_range_fim": {
    "frames": [
      ["Início de for i in range(1, 5): o limite final 5 fica de fora", ["Sequência prevista: 1, 2, 3, 4"]],
      ["1ª e 2ª repetições: i assume 1 e depois 2", ["Visitados: 1, 2"]],
      ["3ª e 4ª repetições: i assume 3 e depois 4 (para antes de 5)", ["Visitados: 1, 2, 3, 4"]]
    ],
    "answer": "4",
    "why": "Em range(inicio, fim), o valor final (5) nunca é incluído; o último valor gerado é 4, totalizando 4 repetições."
  },
  "for_acumulador": {
    "frames": [
      ["Inicialização antes do laço: soma = 0", ["soma = 0"]],
      ["k = 1 → soma = 0 + 1 = 1", ["k = 1", "soma = 1"]],
      ["k = 2 → soma = 1 + 2 = 3", ["k = 2", "soma = 3"]],
      ["k = 3 → soma = 3 + 3 = 6", ["k = 3", "soma = 6"]],
      ["k = 4 → soma = 6 + 4 = 10", ["k = 4", "soma = 10"]]
    ],
    "answer": "10",
    "why": "O acumulador soma 1 + 2 + 3 + 4 ao longo das quatro voltas de range(1, 5), terminando em 10."
  },
  "algoritmos_maior": {
    "frames": [
      ["1ª leitura inicializa a referência: maior = 28", ["lido = 28", "maior = 28"]],
      ["2ª leitura (45 > 28 True): atualiza maior para 45", ["lido = 45", "maior = 45"]],
      ["3ª leitura (19 > 45 False): mantém maior = 45", ["lido = 19", "maior = 45"]],
      ["4ª leitura (52 > 45 True): atualiza maior para 52", ["lido = 52", "maior = 52"]]
    ],
    "answer": "52",
    "why": "A variável maior começa com o primeiro valor lido e só muda quando surge um valor estritamente superior."
  },
  "algoritmos_digitos": {
    "frames": [
      ["Número inicial: n = 472, soma_digitos = 0", ["n = 472", "soma = 0"]],
      ["472 % 10 extrai 2; 472 // 10 reduz n para 47", ["dígito = 2", "n = 47", "soma = 2"]],
      ["47 % 10 extrai 7; 47 // 10 reduz n para 4", ["dígito = 7", "n = 4", "soma = 9"]],
      ["4 % 10 extrai 4; 4 // 10 reduz n para 0 (fim)", ["dígito = 4", "n = 0", "soma = 13"]]
    ],
    "answer": "13",
    "why": "A combinação de % 10 (último dígito) e // 10 (remove o último dígito) soma 2 + 7 + 4 = 13."
  },
  "validacao_faixa": {
    "frames": [
      ["1ª tentativa: nota = -2 (inválida, pois nota < 0)", ["nota = -2", "Fora de 0..10 → pede novamente"]],
      ["2ª tentativa: nota = 14 (inválida, pois nota > 10)", ["nota = 14", "Fora de 0..10 → pede novamente"]],
      ["3ª tentativa: nota = 8 (válida! Condição do while fica False)", ["nota = 8", "Saída do laço de validação"]]
    ],
    "answer": "8",
    "why": "O laço while nota < 0 or nota > 10 rejeita -2 e 14, e só libera o fluxo quando recebe 8."
  },
  "validacao_continue_break": {
    "frames": [
      ["Item 1: valor = 30 (válido → soma = 30, válidos = 1)", ["soma = 30", "válidos = 1"]],
      ["Item 2: valor = -5 (negativo → continue ignora o restante da volta)", ["soma = 30", "válidos = 1 (ignorado)"]],
      ["Item 3: valor = 20 (válido → soma = 50, válidos = 2)", ["soma = 50", "válidos = 2"]],
      ["Item 4: valor = 0 (código de parada → break encerra o laço)", ["Fim imediato: soma = 50", "válidos = 2"]]
    ],
    "answer": "50",
    "why": "O valor -5 é pulado pelo continue e o 0 encerra o laço com break; apenas 30 e 20 são somados (50)."
  },
  "funcoes_retorno": {
    "frames": [
      ["Chamada: final = aplicar_desconto(100, 15)", ["preco = 100", "percentual = 15"]],
      ["Cálculo interno na função: valor_final = 100 - 15 = 85", ["valor_final (local) = 85"]],
      ["return valor_final devolve 85 para a variável final", ["final = 85"]]
    ],
    "answer": "85",
    "why": "A instrução return entrega o resultado 85 ao ponto de chamada, permitindo armazená-lo em final."
  },
  "funcoes_escopo": {
    "frames": [
      ["Programa principal define taxa = 10", ["main: taxa = 10"]],
      ["Dentro de simular(): cria variável local taxa = 99", ["main: taxa = 10", "simular (local): taxa = 99"]],
      ["simular() termina e seu escopo local desaparece", ["main: taxa continua 10"]]
    ],
    "answer": "10",
    "why": "Variáveis locais criadas dentro de uma função não alteram variáveis de mesmo nome fora dela."
  },
  "decomposicao_pipeline": {
    "frames": [
      ["Etapa 1 — Entrada validada: ler_quantidade() devolve 4", ["qtd = 4", "preco_unit = 25"]],
      ["Etapa 2 — Processamento: calcular_bruto(4, 25) devolve 100", ["bruto = 100"]],
      ["Etapa 3 — Regra de negócio: aplicar_cupom(100, 10) devolve 90", ["liquido = 90"]],
      ["Etapa 4 — Saída: exibir_resumo(90) mostra o cupom fiscal", ["Total a pagar: R$ 90"]]
    ],
    "answer": "90",
    "why": "Cada função cumpre uma única responsabilidade e passa seu retorno como argumento para a etapa seguinte."
  },
  "decomposicao_menu": {
    "frames": [
      ["main() inicia saldo_estoque = 50", ["saldo_estoque = 50"]],
      ["Opção 1 chama registrar_entrada(50, 20) → retorna 70", ["saldo_estoque = 70"]],
      ["Opção 2 chama registrar_saida(70, 15) → retorna 55", ["saldo_estoque = 55"]],
      ["Opção 0 encerra o menu principal", ["Saldo final = 55"]]
    ],
    "answer": "55",
    "why": "50 + 20 (entrada) - 15 (saída) = 55 unidades ao encerrar o menu."
  },
  "mesa_rastrear": {
    "frames": [
      ["Linha 1-2: x = 4, y = 10", ["x = 4", "y = 10"]],
      ["Linha 3: x = x + 3 (usa 4 + 3)", ["x = 7", "y = 10"]],
      ["Linha 4: y = y - x (usa 10 - 7, com o x já atualizado!)", ["x = 7", "y = 3"]],
      ["Linha 5: x = x * 2 (usa 7 * 2)", ["x = 14", "y = 3"]]
    ],
    "answer": "3",
    "why": "Na linha 4, x já valia 7, portanto y = 10 - 7 = 3."
  },
  "mesa_fronteira": {
    "frames": [
      ["Regra correta da loja: frete grátis a partir de R$ 100 (compra >= 100)", ["Fronteira exata: 100"]],
      ["Código com defeito escreveu: if compra > 100", ["Para 99: False (correto)", "Para 101: True (correto)"]],
      ["Teste na fronteira exata compra = 100: 100 > 100 dá False (erro revelado!)", ["Para 100: esperado True, obteve False"]]
    ],
    "answer": "100",
    "why": "O valor de fronteira 100 é o único que distingue imediatamente o operador > do operador correto >=."
  }
};
