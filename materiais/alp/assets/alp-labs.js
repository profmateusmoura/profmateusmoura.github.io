(() => {
  'use strict';
  const LABS = {
    "01_output": [
      {
        code: 'print("Lojas", "Blue", sep=" - ")',
        cards: [["Arg 1", '"Lojas"'], ["Arg 2", '"Blue"'], ["sep", '" - "'], ["end", '"\\n" (padrão)']],
        q: 'Qual será a saída exata exibida na tela?',
        options: ['Lojas - Blue', 'Lojas Blue -', '"Lojas" - "Blue"'],
        answer: 'Lojas - Blue',
        why: 'O argumento sep=" - " entra apenas entre os argumentos separados por vírgula, e as aspas delimitam o texto no código sem aparecer na saída.'
      },
      {
        code: 'print("Caixa", end=": ")\nprint("Aberto")',
        cards: [["1º print", '"Caixa"'], ["end do 1º", '": " (sem quebrar linha)'], ["2º print", '"Aberto"']],
        q: 'Quantas linhas visíveis serão impressas e qual será o texto?',
        options: ['1 linha: Caixa: Aberto', '2 linhas: Caixa / Aberto', '1 linha: Caixa Aberto:'],
        answer: '1 linha: Caixa: Aberto',
        why: 'Como o primeiro print trocou end="\\n" por end=": ", o segundo print continua exatamente na mesma linha.'
      },
      {
        code: 'print("Linha 1")\nprint()\nprint("Linha 3")',
        cards: [["Chamada 1", 'Linha 1'], ["Chamada 2", 'print() vazio'], ["Chamada 3", 'Linha 3']],
        q: 'O que a chamada print() sem argumentos produz entre Linha 1 e Linha 3?',
        options: ['Uma linha em branco', 'Um erro de sintaxe', 'A palavra None'],
        answer: 'Uma linha em branco',
        why: 'Chamar print() sem argumentos envia apenas o finalizador padrão (uma quebra de linha), criando uma linha vazia.'
      }
    ],
    "02_input": [
      {
        code: 'print(input("Cidade da filial: "))',
        cards: [["1º a iniciar", 'print(...)'], ["1º a concluir", 'input("Cidade da filial: ")'], ["Digitado", 'Belo Horizonte']],
        q: 'Qual função termina sua execução primeiro?',
        options: ['input("Cidade da filial: ")', 'print(...)', 'As duas terminam juntas'],
        answer: 'input("Cidade da filial: ")',
        why: 'Na composição print(input(...)), o Python precisa primeiro concluir a leitura interna de input() para entregar o texto resultante ao print().'
      },
      {
        code: 'print("Unidade:", input("Setor: "))',
        cards: [["Argumento 1", '"Unidade:"'], ["Prompt exibido", 'Setor: '], ["Usuário digita", 'Perfumaria']],
        q: 'Após o usuário digitar Perfumaria e pressionar Enter, o que print exibe?',
        options: ['Unidade: Perfumaria', 'Setor: Unidade: Perfumaria', 'Perfumaria'],
        answer: 'Unidade: Perfumaria',
        why: 'O prompt "Setor: " aparece durante a pausa do input; depois, print junta "Unidade:" e o valor lido "Perfumaria" separados por espaço.'
      },
      {
        code: '# O usuário digita 250 no teclado\nprint(input("Código: "))',
        cards: [["Teclas", '2, 5, 0 + Enter'], ["Retorno de input", '"250" (str)']],
        q: 'Qual é o tipo do valor devolvido por input() quando o usuário digita 250?',
        options: ['str (texto)', 'int (inteiro)', 'float (real)'],
        answer: 'str (texto)',
        why: 'input() sempre devolve uma string (str), mesmo quando os caracteres digitados são algarismos.'
      }
    ],
    "03_variaveis_e_tipos": [
      {
        code: 'estoque = 18\ncopia = estoque\nestoque = 10\nprint(estoque, copia)',
        cards: [["1. estoque = 18", "estoque → 18"], ["2. copia = estoque", "copia → 18"], ["3. estoque = 10", "estoque → 10 | copia → 18"]],
        q: 'O que será impresso por print(estoque, copia)?',
        options: ['10 18', '10 10', '18 18'],
        answer: '10 18',
        why: 'copia recebeu o valor que estoque tinha na linha 2 (18). Mudar estoque na linha 3 não altera rétroativamente copia.'
      },
      {
        code: 'entrada = "15"\nqtd = int(entrada)\npreco = float("9.50")',
        cards: [["entrada", '"15" (str)'], ["qtd", '15 (int)'], ["preco", '9.5 (float)']],
        q: 'Quais são os tipos de entrada, qtd e preco após essas três linhas?',
        options: ['str, int, float', 'int, int, float', 'str, str, float'],
        answer: 'str, int, float',
        why: 'int(entrada) devolve um novo inteiro em qtd, mas a variável original entrada permanece como str.'
      },
      {
        code: 'a = "Lojas"\nb = "Blue"\na = b\nprint(a, b)',
        cards: [["Início", 'a="Lojas", b="Blue"'], ["Após a = b", 'a="Blue", b="Blue"']],
        q: 'Em uma atribuição a = b, qual lado é modificado?',
        options: ['A variável à esquerda (a) recebe o valor da direita (b)', 'A variável à direita (b) recebe o valor de a', 'As duas trocam de valor entre si'],
        answer: 'A variável à esquerda (a) recebe o valor da direita (b)',
        why: 'O operador = lê o valor da expressão à direita e o armazena na variável indicada à esquerda.'
      }
    ],
    "04_operadores": [
      {
        code: 'ovos = 26\ncaixas = ovos // 6\nsobra = ovos % 6',
        cards: [["ovos", "26"], ["26 // 6", "4 caixas completas"], ["26 % 6", "2 unidades avulsas"]],
        q: 'Quais valores ficam guardados em caixas e sobra?',
        options: ['caixas = 4 e sobra = 2', 'caixas = 4.33 e sobra = 2', 'caixas = 2 e sobra = 4'],
        answer: 'caixas = 4 e sobra = 2',
        why: '// calcula o quociente inteiro (4 × 6 = 24) e % calcula o resto da divisão inteira (26 - 24 = 2).'
      },
      {
        code: 'estoque = 8\nminimo = 10\nativo = True\nalerta = ativo and estoque < minimo',
        cards: [["ativo", "True"], ["estoque < minimo", "8 < 10 → True"], ["True and True", "True"]],
        q: 'Qual é o valor booleano armazenado em alerta?',
        options: ['True', 'False', '8'],
        answer: 'True',
        why: 'Operadores relacionais (<) são avaliados antes de and: 8 < 10 resulta em True, e True and True resulta em True.'
      },
      {
        code: 'preco = 50\nfrete = 10\ntotal = preco + frete * 2',
        cards: [["frete * 2", "10 * 2 = 20"], ["preco + 20", "50 + 20 = 70"]],
        q: 'Qual é o valor de total e por quê?',
        options: ['70, porque a multiplicação precede a adição', '120, porque a conta é lida da esquerda para a direita', '100, porque o + duplica ambos'],
        answer: '70, porque a multiplicação precede a adição',
        why: 'Sem parênteses, * tem precedência maior que +, portanto 10 * 2 = 20 é somado a 50.'
      }
    ],
    "05_if_elif_else": [
      {
        code: 'compra = 250\nif compra >= 200:\n    faixa = "Ouro"\nelif compra >= 100:\n    faixa = "Prata"\nelse:\n    faixa = "Bronze"',
        cards: [["compra >= 200", "250 >= 200 → True"], ["elif compra >= 100", "Ignorado!"], ["else", "Ignorado!"]],
        q: 'Embora 250 também seja >= 100, qual valor termina em faixa?',
        options: ['"Ouro"', '"Prata"', '"Ouro" e depois "Prata"'],
        answer: '"Ouro"',
        why: 'Em um encadeamento if/elif/else, assim que o primeiro ramo verdadeiro executa, todos os demais ramos da cadeia são descartados.'
      },
      {
        code: 'estoque = 10\nif estoque < 10:\n    status = "Repor"\nelse:\n    status = "Normal"',
        cards: [["Valor na fronteira", "estoque = 10"], ["Teste: 10 < 10", "False"], ["Ramo escolhido", "else → Normal"]],
        q: 'Qual é o resultado para o valor de fronteira estoque = 10?',
        options: ['"Normal", pois 10 < 10 é False', '"Repor", pois 10 está no limite', 'Nenhum ramo executa'],
        answer: '"Normal", pois 10 < 10 é False',
        why: 'A desigualdade estrita < não inclui o 10. Para incluir o 10 no alerta, seria necessário usar <=.'
      },
      {
        code: 'idade = 20\nrenda = 1500\n# Regra: aprovar se idade >= 18 E renda >= 2000',
        cards: [["idade >= 18", "True"], ["renda >= 2000", "False"], ["True and False", "False"]],
        q: 'Qual condição expressa corretamente a exigência simultânea das duas regras?',
        options: ['idade >= 18 and renda >= 2000', 'idade >= 18 or renda >= 2000', 'idade and renda >= 2000'],
        answer: 'idade >= 18 and renda >= 2000',
        why: 'O operador and exige que ambas as comparações completas sejam verdadeiras.'
      }
    ],
    "06_match_case": [
      {
        code: 'opcao = 2\nmatch opcao:\n    case 1:\n        acao = "Consultar"\n    case 2:\n        acao = "Vender"\n    case _:\n        acao = "Inválida"',
        cards: [["Alvo", "opcao = 2"], ["case 1", "Não coincide"], ["case 2", "Coincide → Vender"], ["case _", "Não acionado"]],
        q: 'Quando o bloco case _ é executado em um match/case?',
        options: ['Apenas quando nenhum case anterior coincidiu com o valor', 'Sempre ao final do match, depois do case escolhido', 'Apenas quando ocorre erro de sintaxe'],
        answer: 'Apenas quando nenhum case anterior coincidiu com o valor',
        why: 'O curinga _ funciona como padrão de captura final (semelhante ao else) quando nenhum caso literal anterior corresponde.'
      },
      {
        code: 'setor = "B"\nmatch setor:\n    case "A":\n        corredor = 1\n    case "B":\n        corredor = 2',
        cards: [["Digitado", '"b" (minúsculo)'], ["case \"A\"", 'Falso'], ["case \"B\"", 'Falso ("b" != "B")']],
        q: 'Se setor valer "b" (minúsculo), qual case será escolhido?',
        options: ['Nenhum, pois "b" é diferente de "B"', 'O case "B", pois letras iguais coincidem', 'O case "A" por padrão'],
        answer: 'Nenhum, pois "b" é diferente de "B"',
        why: 'A comparação de strings diferencia maiúsculas e minúsculas ("b" != "B").'
      },
      {
        code: '# Situação: classificar nota em < 60, >= 60 e < 80, ou >= 80',
        cards: [["match/case", "Valores literais fixos (1, 2, 'S')"], ["if/elif/else", "Intervalos e desigualdades (<, >=)"]],
        q: 'Qual estrutura é a mais indicada quando a decisão depende de faixas numéricas (<, >=)?',
        options: ['if / elif / else', 'match / case com literais', 'print com sep'],
        answer: 'if / elif / else',
        why: 'if/elif/else expressa comparações de intervalos (<, <=, >, >=) de forma direta e legível.'
      }
    ],
    "07_while": [
      {
        code: 'cont = 1\nwhile cont <= 3:\n    print(cont)\n    cont = cont + 1',
        cards: [["Início", "cont = 1"], ["Voltas executadas", "1, 2, 3"], ["Saída do laço", "cont = 4 (4 <= 3 é False)"]],
        q: 'Quantas vezes print(cont) executa e qual é o valor final de cont após o while?',
        options: ['Executa 3 vezes e cont termina valendo 4', 'Executa 3 vezes e cont termina valendo 3', 'Executa 4 vezes e cont termina valendo 4'],
        answer: 'Executa 3 vezes e cont termina valendo 4',
        why: 'Na 3ª repetição, cont imprime 3 e é incrementado para 4; o teste 4 <= 3 falha e encerra o laço com cont = 4.'
      },
      {
        code: 'preco = float(input("Preço (0 encerra): "))\nsoma = 0.0\nwhile preco != 0:\n    soma = soma + preco\n    preco = float(input("Preço (0 encerra): "))',
        cards: [["1ª leitura (fora)", "Lê o primeiro preço"], ["Teste while", "Verifica se já não é 0"], ["Leitura no fim do bloco", "Prepara a próxima volta"]],
        q: 'Por que a segunda leitura de preco fica na última linha dentro do while, após somar?',
        options: ['Para que o sentinela 0 seja testado imediatamente antes de ser somado', 'Apenas por estética, a ordem dentro do while não importa', 'Para somar o 0 ao total antes de sair'],
        answer: 'Para que o sentinela 0 seja testado imediatamente antes de ser somado',
        why: 'Se lêssemos antes de somar no mesmo bloco, o valor sentinela 0 (ou um código negativo de parada) entraria indevidamente na conta.'
      },
      {
        code: 'tentativas = 3\nwhile tentativas > 0:\n    print(tentativas)\n    # esquecemos de atualizar tentativas!',
        cards: [["Início", "tentativas = 3"], ["Condição", "3 > 0 (sempre True)"], ["Atualização", "Ausente!"]],
        q: 'O que acontece quando o corpo do while não altera nenhuma variável da condição?',
        options: ['Laço infinito: a condição permanece True indefinidamente', 'O Python encerra sozinho após 3 repetições', 'O laço não executa nenhuma vez'],
        answer: 'Laço infinito: a condição permanece True indefinidamente',
        why: 'Todo laço while precisa progredir em direção a tornar sua condição falsa.'
      }
    ],
    "08_for_e_range": [
      {
        code: 'for n in range(2, 9, 2):\n    print(n)',
        cards: [["Início (inclusivo)", "2"], ["Fim (exclusivo)", "9 (para antes)"], ["Passo", "+2"]],
        q: 'Quais números são gerados por range(2, 9, 2)?',
        options: ['2, 4, 6, 8', '2, 4, 6, 8, 9', '2, 3, 4, 5, 6, 7, 8'],
        answer: '2, 4, 6, 8',
        why: 'Começa em 2 e soma 2 a cada passo (2, 4, 6, 8), parando antes de alcançar ou ultrapassar 9.'
      },
      {
        code: 'for i in range(4):\n    print(i)',
        cards: [["Início padrão", "0"], ["Fim exclusivo", "4"], ["Quantidade", "4 valores"]],
        q: 'Quais valores i assume em range(4)?',
        options: ['0, 1, 2, 3', '1, 2, 3, 4', '0, 1, 2, 3, 4'],
        answer: '0, 1, 2, 3',
        why: 'Com um único argumento, range(fim) começa em 0 e vai até fim - 1.'
      },
      {
        code: 'for andar in range(1, 3):\n    for loja in range(1, 4):\n        print(andar, loja)',
        cards: [["Laço externo (andar)", "2 valores (1, 2)"], ["Laço interno (loja)", "3 valores (1, 2, 3) para cada andar"], ["Total", "2 × 3 = 6"]],
        q: 'Quantas vezes o print interno será executado no total?',
        options: ['6 vezes (3 lojas para cada um dos 2 andares)', '5 vezes (2 + 3)', '3 vezes'],
        answer: '6 vezes (3 lojas para cada um dos 2 andares)',
        why: 'Para cada repetição do laço externo, o laço interno executa seu ciclo completo do início ao fim (2 × 3 = 6).'
      }
    ],
    "09_algoritmos_basicos": [
      {
        code: '# Queremos descobrir o menor preço entre 5 produtos lidos\nprimeiro = float(input("Preço 1: "))\nmenor = primeiro',
        cards: [["Erro clássico", "menor = 0 (nenhum preço positivo será menor que 0!)"], ["Forma correta", "menor = primeiro valor real lido"]],
        q: 'Por que inicializar menor = 0 falha ao procurar o menor preço positivo de uma loja?',
        options: ['Porque qualquer preço real (ex.: 19.90) será maior que 0, e menor continuará 0', 'Porque o Python proíbe atribuir 0 a variáveis float', 'Porque 0 é sempre o maior número'],
        answer: 'Porque qualquer preço real (ex.: 19.90) será maior que 0, e menor continuará 0',
        why: 'Para achar mínimo ou máximo sem coleções, inicializamos a referência com o primeiro valor válido efetivamente lido.'
      },
      {
        code: 'codigo = 583\nultimo = codigo % 10\nrestante = codigo // 10',
        cards: [["codigo", "583"], ["583 % 10", "3 (unidade)"], ["583 // 10", "58 (remove a unidade)"]],
        q: 'Quais são os valores de ultimo e restante para codigo = 583?',
        options: ['ultimo = 3 e restante = 58', 'ultimo = 58 e restante = 3', 'ultimo = 5 e restante = 83'],
        answer: 'ultimo = 3 e restante = 58',
        why: 'Na base 10, % 10 extrai o algarismo das unidades e // 10 descarta o algarismo das unidades.'
      },
      {
        code: 'anterior = 1\natual = 1\nproximo = anterior + atual\nanterior = atual\natual = proximo',
        cards: [["Antes", "anterior=1, atual=1"], ["proximo = 1 + 1", "proximo=2"], ["Deslocamento", "anterior=1, atual=2"]],
        q: 'Por que precisamos calcular proximo antes de fazer anterior = atual?',
        options: ['Para não perder o valor antigo de anterior antes de somá-lo com atual', 'Apenas para deixar o código com mais linhas', 'Porque + não funciona sem três variáveis'],
        answer: 'Para não perder o valor antigo de anterior antes de somá-lo com atual',
        why: 'Se fizéssemos anterior = atual primeiro, perderíamos o valor antigo de anterior.'
      }
    ],
    "10_validacao_e_controle_de_fluxo": [
      {
        code: 'qtd = int(input("Quantidade (1 a 50): "))\nwhile qtd < 1 or qtd > 50:\n    print("Valor inválido!")\n    qtd = int(input("Quantidade (1 a 50): "))',
        cards: [["Intervalo válido", "qtd >= 1 and qtd <= 50"], ["Condição de rejeição (while)", "qtd < 1 or qtd > 50"]],
        q: 'Por que a condição do while de validação usa OR (qtd < 1 or qtd > 50) em vez de AND?',
        options: ['Porque nenhum número pode ser menor que 1 e maior que 50 ao mesmo tempo; basta violar um dos limites para ser inválido', 'Porque or e and têm exatamente o mesmo efeito em laços while', 'Porque o Python não aceita and no cabeçalho do while'],
        answer: 'Porque nenhum número pode ser menor que 1 e maior que 50 ao mesmo tempo; basta violar um dos limites para ser inválido',
        why: 'O laço deve repetir enquanto a entrada estiver fora da faixa (abaixo do mínimo OU acima do máximo).'
      },
      {
        code: 'try:\n    idade = int(input("Idade: "))\nexcept ValueError:\n    print("Digite apenas números inteiros!")',
        cards: [["Usuário digita \"vinte\"", "int(\"vinte\") levanta ValueError"], ["Bloco except ValueError", "Captura a falha sem derrubar o programa"]],
        q: 'O que acontece quando o usuário digita "vinte" nesse bloco try/except?',
        options: ['O programa captura o ValueError e exibe a mensagem amigável sem encerrar com falha', 'O programa trava com Traceback na tela', 'A variável idade recebe automaticamente o número 20'],
        answer: 'O programa captura o ValueError e exibe a mensagem amigável sem encerrar com falha',
        why: 'try/except ValueError intercepta o erro de conversão de texto não numérico e permite recuperar o fluxo.'
      },
      {
        code: '# Diferença entre break e continue dentro de um laço',
        cards: [["break", "Encerra o laço inteiro imediatamente"], ["continue", "Pula apenas o resto da repetição atual e vai para o próximo teste"]],
        q: 'Qual instrução deve ser usada para ignorar um item inválido e passar imediatamente para a próxima repetição do mesmo laço?',
        options: ['continue', 'break', 'return'],
        answer: 'continue',
        why: 'continue interrompe apenas a volta atual e retorna ao cabeçalho do laço; break encerra o laço por completo.'
      }
    ],
    "11_funcoes": [
      {
        code: 'def calcular_frete(peso):\n    return peso * 4.0\n\nvalor = calcular_frete(3)\nprint(valor + 10)',
        cards: [["Definição def", "Registra a função"], ["Chamada calcular_frete(3)", "peso recebe 3 e retorna 12.0"], ["valor + 10", "12.0 + 10 = 22.0"]],
        q: 'Por que calcular_frete usa return em vez de apenas dar print(peso * 4.0)?',
        options: ['Porque return devolve o número ao chamador, permitindo guardá-lo em valor e somar 10', 'Porque print é proibido em programas com funções', 'Porque return já imprime o valor na tela automaticamente'],
        answer: 'Porque return devolve o número ao chamador, permitindo guardá-lo em valor e somar 10',
        why: 'Uma função que apenas imprime e não tem return devolve None, o que impediria reutilizar o resultado em valor + 10.'
      },
      {
        code: 'def mostrar_aviso():\n    print("Estoque conferido")\n\nx = mostrar_aviso()',
        cards: [["Corpo da função", "Imprime texto, mas não tem return"], ["Valor devolvido", "None"]],
        q: 'Qual valor fica guardado na variável x quando a função não possui return?',
        options: ['None', '"Estoque conferido"', '0'],
        answer: 'None',
        why: 'Toda função Python que termina sem executar um return explícito devolve None.'
      },
      {
        code: 'def aplicar_bonus(pontos):\n    pontos = pontos + 50\n    return pontos\n\nmeus_pontos = 100\nnovo = aplicar_bonus(meus_pontos)',
        cards: [["meus_pontos (fora)", "100"], ["pontos (parâmetro local)", "Passa de 100 para 150"], ["Retorno em novo", "novo = 150 | meus_pontos continua 100"]],
        q: 'Após a chamada, quanto valem meus_pontos e novo?',
        options: ['meus_pontos = 100 e novo = 150', 'meus_pontos = 150 e novo = 150', 'meus_pontos = 100 e novo = 100'],
        answer: 'meus_pontos = 100 e novo = 150',
        why: 'O parâmetro pontos é uma variável local da função; reatribuí-lo não altera meus_pontos fora dela.'
      }
    ],
    "12_decomposicao_de_problemas": [
      {
        code: 'def ler_preco(): ...\ndef calcular_imposto(preco): ...\ndef exibir_cupom(preco, imposto): ...\ndef main():\n    p = ler_preco()\n    imp = calcular_imposto(p)\n    exibir_cupom(p, imp)',
        cards: [["ler_preco()", "Entrada e validação"], ["calcular_imposto(p)", "Regra de cálculo pura"], ["exibir_cupom(p, imp)", "Apresentação formatada"], ["main()", "Coordena o fluxo"]],
        q: 'Qual é a principal vantagem de separar entrada, cálculo e exibição em funções distintas coordenadas por main()?',
        options: ['Cada função tem uma única responsabilidade clara, facilitando testar o cálculo isoladamente e manter o programa', 'O programa executa 10 vezes mais rápido no processador', 'Evita o uso de variáveis locais'],
        answer: 'Cada função tem uma única responsabilidade clara, facilitando testar o cálculo isoladamente e manter o programa',
        why: 'Quando uma função de cálculo recebe parâmetros e devolve retorno sem usar input/print, ela pode ser testada e reaproveitada em qualquer contexto.'
      },
      {
        code: '# Planejamento Top-Down de um fechamento de caixa',
        cards: [["1. Entradas", "Quais dados o programa recebe?"], ["2. Regras/Cálculos", "Quais transformações produzem a resposta?"], ["3. Saídas", "O que deve ser exibido ao final?"]],
        q: 'O que deve ser definido no contrato de uma função antes mesmo de escrever seu código interno?',
        options: ['Nome claro, quais parâmetros ela recebe e o que ela retorna', 'Quantas linhas de código ela terá exatamente', 'As cores do terminal do usuário'],
        answer: 'Nome claro, quais parâmetros ela recebe e o que ela retorna',
        why: 'O contrato (assinatura + propósito) permite integrar as partes do programa com segurança.'
      }
    ],
    "13_teste_de_mesa": [
      {
        code: 'a = 2\nb = 5\naux = a\na = b + 1\nb = aux * 2\nprint(a, b)',
        cards: [["Início", "a=2, b=5"], ["aux = a", "aux=2, a=2, b=5"], ["a = b + 1", "aux=2, a=6, b=5"], ["b = aux * 2", "aux=2, a=6, b=4"]],
        q: 'Por que b termina valendo 4 e não 12?',
        options: ['Porque b = aux * 2 multiplica aux (que guardou o valor antigo 2 de a), e não o novo a (6)', 'Porque a linha a = b + 1 foi ignorada', 'Porque * tem precedência menor que ='],
        answer: 'Porque b = aux * 2 multiplica aux (que guardou o valor antigo 2 de a), e não o novo a (6)',
        why: 'No teste de mesa, registramos cada variável passo a passo: aux preservou o 2 inicial antes de a mudar para 6.'
      },
      {
        code: '# Regra: desconto de 10% para compras de 100 reais ou mais.\n# Código suspeito:\nif compra > 100:\n    desconto = compra * 0.10\nelse:\n    desconto = 0.0',
        cards: [["Caso típico (150)", "150 > 100 → True (não revela o erro)"], ["Caso de fronteira (100)", "100 > 100 → False (revela o erro!)"], ["Caso abaixo (80)", "80 > 100 → False (não revela o erro)"]],
        q: 'Qual caso de teste revela imediatamente que o programador usou > em vez de >=?',
        options: ['compra = 100 (exatamente na fronteira)', 'compra = 150 (acima da fronteira)', 'compra = 50 (abaixo da fronteira)'],
        answer: 'compra = 100 (exatamente na fronteira)',
        why: 'Erros de limite (< vs <=, > vs >=) aparecem justamente quando testamos o valor exato de fronteira.'
      }
    ]
  };

  document.querySelectorAll('[data-alp-lab]').forEach(lab => {
    const key = lab.dataset.alpLab;
    const tasks = LABS[key];
    if (!tasks || !tasks.length) return;
    const get = s => lab.querySelector(s);
    let round = 0;
    let solved = false;

    const render = () => {
      const t = tasks[round];
      get('[data-prompt]').textContent = `Desafio ${round + 1} de ${tasks.length}: ${t.q}`;
      get('[data-code]').textContent = t.code;
      const board = get('[data-board]');
      board.replaceChildren();
      t.cards.forEach(([label, val]) => {
        const card = document.createElement('div');
        card.className = 'lr-card';
        const sm = document.createElement('small');
        sm.textContent = label;
        const st = document.createElement('strong');
        st.textContent = val;
        card.append(sm, st);
        board.append(card);
      });
      const answers = get('[data-answers]');
      answers.replaceChildren();
      t.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = opt;
        btn.onclick = () => {
          solved = (opt === t.answer);
          get('[data-next]').disabled = !solved;
          get('[data-feedback]').textContent = (solved ? 'Correto! ' : 'Ainda não. ') + t.why;
          [...board.children].forEach(c => c.toggleAttribute('data-active', solved));
        };
        answers.append(btn);
      });
      get('[data-next]').disabled = !solved;
    };

    get('[data-next]').onclick = () => {
      round = (round + 1) % tasks.length;
      solved = false;
      get('[data-feedback]').textContent = '';
      render();
    };
    get('[data-reset]').onclick = () => {
      round = 0;
      solved = false;
      get('[data-feedback]').textContent = '';
      render();
    };
    render();
    get('.lr-interactive').hidden = false;
  });
})();
