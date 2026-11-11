# Ordem de estudo — ALP

## Como percorrer

Siga os tópicos de 01 a 13. Dentro de cada um, leia a introdução abaixo, percorra todos os exemplos em ordem e resolva os exercícios numerados.
Os primeiros exercícios consolidam um recurso; os últimos exigem combinar recursos já estudados.
Cada exercício indica arquivos de apoio do próprio tópico. Os conceitos dos tópicos anteriores também são pré-requisitos.
Os exemplos de apoio oferecem recursos e padrões; os desafios finais podem pedir novas combinações desses padrões.
Até 09, as faixas e os formatos informados são precondições, e não pedidos para implementar validação.
Em 10, valide apenas o que cada enunciado exigir; em 12, os projetos explicitam seus leitores e contratos.
Você pode alternar exemplos e exercícios, desde que não pule os exemplos que introduzem recursos exigidos pela atividade.
Os arquivos são independentes: não existe um programa anterior que precise ficar aberto.

A entrada em 02 se limita a solicitar e exibir respostas, sem armazenar, converter ou calcular.
Em 03 começam atribuição, variáveis, tipos e conversões, ainda sem cálculos ou comparações.
Operadores aritméticos, comparações e lógica começam somente em 04; decisões em 05; seleção em 06; while em 07; for e range em 08.
Os tópicos iniciais têm quantidades diferentes de atividades: a progressão do conteúdo tem prioridade sobre a quantidade.
O teste de mesa é apresentado formalmente em 13, mas use rascunhos de estado desde 03.
Antes de 11, as funções chamadas são recursos prontos do Python; a definição de funções próprias começa em 11.

Não há prazo fixo. Avance ao cumprir o critério de autonomia do tópico e conseguir explicar pelo menos um exercício sem ler o código.
Ao retomar depois de uma pausa, refaça um exercício curto do tópico anterior.

## Mapa do percurso

| Etapa | Tópico | Exemplos | Exercícios | Resultado de aprendizagem |
|---|---|---:|---:|---|
| 01 | [Saída de dados](#01_output) | 7 | 13 | Exibir mensagens e controlar a apresentação sem variáveis. |
| 02 | [Entrada de dados](#02_input) | 4 | 7 | Solicitar e exibir textos, sem variáveis, conversões ou cálculos. |
| 03 | [Variáveis e tipos](#03_variaveis_e_tipos) | 8 | 13 | Distinguir int, float, str e bool e acompanhar atribuições. |
| 04 | [Operadores](#04_operadores) | 9 | 17 | Traduzir fórmulas e condições para expressões Python. |
| 05 | [Decisões](#05_if_elif_else) | 7 | 43 | Escolher caminhos com condições simples, compostas e aninhadas. |
| 06 | [Seleção com match/case](#06_match_case) | 7 | 13 | Selecionar alternativas por valores literais escalares. |
| 07 | [Repetição com while](#07_while) | 9 | 43 | Controlar repetições por contagem, condição e sentinela. |
| 08 | [Repetição com for e range](#08_for_e_range) | 10 | 45 | Repetir por intervalos numéricos e combinar laços. |
| 09 | [Algoritmos básicos](#09_algoritmos_basicos) | 17 | 19 | Construir algoritmos numéricos usando somente variáveis escalares. |
| 10 | [Validação e controle de fluxo](#10_validacao_e_controle_de_fluxo) | 11 | 13 | Validar entradas, encerrar laços e construir menus seguros. |
| 11 | [Funções](#11_funcoes) | 13 | 47 | Definir contratos, parâmetros, retornos e responsabilidades. |
| 12 | [Decomposição de problemas](#12_decomposicao_de_problemas) | 8 | 14 | Planejar e integrar funções pequenas em programas completos. |
| 13 | [Teste de mesa](#13_teste_de_mesa) | 7 | 14 | Prever estados, verificar limites e explicar o comportamento de algoritmos. |

<a id="01_output"></a>

## 01 — Saída de dados

**Objetivo:** Exibir mensagens e controlar a apresentação sem variáveis.

**Base conceitual.** Uma instrução diz ao computador o que fazer. A execução começa na primeira linha e segue a ordem escrita. `print` apresenta valores; texto literal fica entre aspas. As vírgulas separam argumentos da função, sem construir uma lista. `sep` controla o que aparece entre argumentos e `end` controla o final da saída.

**Pré-requisito:** nenhum conhecimento de programação; apenas editar e executar um arquivo.

**Erros para observar:** Esquecer aspas em texto; confundir uma quebra de linha com um espaço; colocar a palavra sep dentro da frase em vez de usá-la como argumento.

**Exemplos, na ordem:**

- [01 — Primeira mensagem](01_output/exemplos/01_primeira_mensagem.py)
- [02 — Sequência de linhas](01_output/exemplos/02_sequencia_de_linhas.py)
- [03 — Vários textos na mesma saída](01_output/exemplos/03_varios_textos.py)
- [04 — Separador de saída](01_output/exemplos/04_separador.py)
- [05 — Final da linha](01_output/exemplos/05_final_da_linha.py)
- [06 — Quebras e aspas](01_output/exemplos/06_quebras_e_aspas.py)
- [Cartaz de atendimento — cenário didático Lojas Blue](01_output/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Saudação inicial](01_output/exercicios/01_saudacao_inicial.py)
- [02 — Três etapas](01_output/exercicios/02_tres_etapas.py)
- [03 — Ficha fixa](01_output/exercicios/03_ficha_fixa.py)
- [04 — Dois textos](01_output/exercicios/04_dois_textos.py)
- [05 — Separador de data](01_output/exercicios/05_separador_de_data.py)
- [06 — Separador de trilha](01_output/exercicios/06_separador_de_trilha.py)
- [07 — Uma linha em duas partes](01_output/exercicios/07_uma_linha_em_duas_partes.py)
- [08 — Linha vazia](01_output/exercicios/08_linha_vazia.py)
- [09 — Aspas no conteúdo](01_output/exercicios/09_aspas_no_conteudo.py)
- [10 — Cartão de apresentação](01_output/exercicios/10_cartao_de_apresentacao.py)
- [Prever a apresentação](01_output/exercicios/91_rede_91.py)
- [Comparar duas formas de saída](01_output/exercicios/92_rede_92.py)
- [Mensagem em partes — Lojas Blue](01_output/exercicios/93_rede_93.py)

**Critério para avançar:** Produza uma saída com várias linhas e outra com dois print na mesma linha. Explique a diferença entre aspas do código e aspas visíveis.

<a id="02_input"></a>

## 02 — Entrada de dados

**Objetivo:** Solicitar e exibir textos, sem variáveis, conversões ou cálculos.

**Base conceitual.** `input` interrompe o programa até o usuário digitar uma linha e pressionar Enter. Aqui o programa apenas recebe e exibe a resposta, sem guardá-la ou transformá-la. Em `print(input("Digite: "))`, a chamada interna de input termina primeiro; depois print exibe a resposta recebida. Não há variáveis, conversões ou cálculos neste tópico.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Confundir a mensagem de convite com a resposta; esperar que a leitura continue sem pressionar Enter; solicitar várias respostas de uma vez quando cada input recebe apenas uma linha.

**Exemplos, na ordem:**

- [01 — Eco de uma entrada](02_input/exemplos/01_eco.py)
- [02 — Duas leituras independentes](02_input/exemplos/02_duas_leituras.py)
- [03 — Uma resposta livre](02_input/exemplos/03_resposta_livre.py)
- [Recepção de cliente — cenário didático Lojas Blue](02_input/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Eco de cidade](02_input/exercicios/01_eco_de_cidade.py)
- [02 — Saudação nominal](02_input/exercicios/02_saudacao_nominal.py)
- [03 — Ficha de duas entradas](02_input/exercicios/03_ficha_de_duas_entradas.py)
- [04 — Resposta livre](02_input/exercicios/04_resposta_livre.py)
- [Prever leitura e confirmação](02_input/exercicios/91_rede_91.py)
- [Corrigir uma confirmação fixa](02_input/exercicios/92_rede_92.py)
- [Contato inicial — Lojas Blue](02_input/exercicios/93_rede_93.py)

**Critério para avançar:** Solicite e exiba uma resposta inteira, inclusive com espaços, e explique a ordem de leitura e exibição.

<a id="03_variaveis_e_tipos"></a>

## 03 — Variáveis e tipos

**Objetivo:** Distinguir int, float, str e bool e acompanhar atribuições.

**Base conceitual.** Uma variável é um nome associado a um valor. O tipo pertence ao valor: `int` representa inteiros, `float` números aproximados com parte fracionária, `str` texto e `bool` verdadeiro ou falso. Em uma atribuição, o lado direito é avaliado antes de atualizar o nome à esquerda. Nomes descritivos ajudam a reconhecer o significado dos dados.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Ler = como igualdade matemática; usar nomes sem significado; presumir que int arredonda; confundir o texto False com o valor booleano False.

**Exemplos, na ordem:**

- [01 — Quatro tipos escalares](03_variaveis_e_tipos/exemplos/01_tipos_escalares.py)
- [02 — Atribuição e reatribuição](03_variaveis_e_tipos/exemplos/02_reatribuicao.py)
- [03 — Nomes e cópia de valores](03_variaveis_e_tipos/exemplos/03_nomes_e_copia.py)
- [04 — Conversões explícitas](03_variaveis_e_tipos/exemplos/04_conversoes.py)
- [05 — Troca com variável auxiliar](03_variaveis_e_tipos/exemplos/05_troca_escalar.py)
- [06 — Apresentação de variáveis](03_variaveis_e_tipos/exemplos/06_formatacao.py)
- [07 — Guardar uma entrada convertida](03_variaveis_e_tipos/exemplos/07_leitura_numerica.py)
- [Ficha escalar de produto — cenário didático Lojas Blue](03_variaveis_e_tipos/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Identificar tipos](03_variaveis_e_tipos/exercicios/01_identificar_tipos.py)
- [02 — Número ou texto](03_variaveis_e_tipos/exercicios/02_numero_ou_texto.py)
- [03 — Reatribuir estoque](03_variaveis_e_tipos/exercicios/03_reatribuir_estoque.py)
- [04 — Cópia independente](03_variaveis_e_tipos/exercicios/04_copia_independente.py)
- [05 — Conversão explícita](03_variaveis_e_tipos/exercicios/05_conversao_explicita.py)
- [06 — Truncamento](03_variaveis_e_tipos/exercicios/06_truncamento.py)
- [07 — Troca de valores](03_variaveis_e_tipos/exercicios/07_troca_de_valores.py)
- [08 — Preço formatado](03_variaveis_e_tipos/exercicios/08_preco_formatado.py)
- [09 — Valor e apresentação](03_variaveis_e_tipos/exercicios/09_valor_e_apresentacao.py)
- [10 — Estado booleano](03_variaveis_e_tipos/exercicios/10_estado_booleano.py)
- [Prever a cópia de um cadastro](03_variaveis_e_tipos/exercicios/91_rede_91.py)
- [Comparar número e apresentação](03_variaveis_e_tipos/exercicios/92_rede_92.py)
- [Alteração cadastral — Lojas Blue](03_variaveis_e_tipos/exercicios/93_rede_93.py)

**Critério para avançar:** Acompanhe uma troca com auxiliar e explique por que uma cópia não acompanha futuras reatribuições. Diferencie valor armazenado e apresentação com casas decimais.

<a id="04_operadores"></a>

## 04 — Operadores

**Objetivo:** Traduzir fórmulas e condições para expressões Python.

**Base conceitual.** Expressões combinam valores e operadores. Parênteses deixam a intenção clara. `/` divide, `//` calcula quociente inteiro e `%` calcula resto. Para a divisão de inteiros não negativos por divisor positivo, vale dividendo = divisor * quociente + resto. `==`, `!=`, `<`, `<=`, `>` e `>=` produzem bool. `and`, `or` e `not` combinam condições.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Dividir por zero; esquecer a soma dos pesos na média ponderada; tratar 15 como a taxa fracionária de 15%; confundir = e ==. Com números negativos, // arredonda para baixo, não necessariamente em direção a zero.

**Exemplos, na ordem:**

- [01 — Operações aritméticas](04_operadores/exemplos/01_aritmetica.py)
- [02 — Quociente e resto](04_operadores/exemplos/02_quociente_resto.py)
- [03 — Precedência e parênteses](04_operadores/exemplos/03_precedencia.py)
- [04 — Comparações](04_operadores/exemplos/04_comparacoes.py)
- [05 — Operadores lógicos](04_operadores/exemplos/05_logica.py)
- [06 — Percentual e atualização](04_operadores/exemplos/06_percentual.py)
- [O segundo teste nem sempre é avaliado](04_operadores/exemplos/07_curto_circuito.py)
- [Divisão inteira, resto e truncamento](04_operadores/exemplos/08_divisao_e_truncamento.py)
- [Orçamento de shampoo — cenário didático Lojas Blue](04_operadores/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Quatro operações](04_operadores/exercicios/01_quatro_operacoes.py)
- [02 — Horas e minutos](04_operadores/exercicios/02_horas_e_minutos.py)
- [03 — Centenas dezenas unidades](04_operadores/exercicios/03_centenas_dezenas_unidades.py)
- [04 — Média ponderada](04_operadores/exercicios/04_media_ponderada.py)
- [05 — Desconto](04_operadores/exercicios/05_desconto.py)
- [06 — Comparar dois valores](04_operadores/exercicios/06_comparar_dois_valores.py)
- [07 — Pertence ao intervalo](04_operadores/exercicios/07_pertence_ao_intervalo.py)
- [08 — Fora do intervalo](04_operadores/exercicios/08_fora_do_intervalo.py)
- [09 — Requisito composto](04_operadores/exercicios/09_requisito_composto.py)
- [10 — Fórmulas e precedência](04_operadores/exercicios/10_formulas_e_precedencia.py)
- [Prever uma expressão de orçamento](04_operadores/exercicios/91_rede_91.py)
- [Corrigir o percentual](04_operadores/exercicios/92_rede_92.py)
- [Condição de falta — Lojas Blue](04_operadores/exercicios/93_rede_93.py)
- [Prever a avaliação lógica](04_operadores/exercicios/94_prever.py)
- [Corrigir a proteção da expressão](04_operadores/exercicios/95_investigar.py)
- [Comparar duas conversões de quociente](04_operadores/exercicios/96_prever.py)
- [Completar a reconstrução](04_operadores/exercicios/97_investigar.py)

**Critério para avançar:** Traduza uma fórmula com porcentagem e uma condição de intervalo. Explique como reconstruir um inteiro a partir do quociente e do resto.

<a id="05_if_elif_else"></a>

## 05 — Decisões

**Objetivo:** Escolher caminhos com condições simples, compostas e aninhadas.

**Base conceitual.** `if` executa um bloco quando sua condição é verdadeira; `else` trata a alternativa; `elif` acrescenta outra condição. Em uma cadeia, apenas o primeiro bloco verdadeiro executa. Já dois if independentes podem executar ambos. Indentação de quatro espaços indica quais instruções pertencem a cada bloco.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Misturar tabulações e espaços; ordenar faixas de modo que um ramo nunca seja alcançado; esquecer o empate; fazer a operação perigosa antes da verificação.

**Exemplos, na ordem:**

- [01 — Condição simples](05_if_elif_else/exemplos/01_if_simples.py)
- [02 — Dois caminhos](05_if_elif_else/exemplos/02_par_ou_impar.py)
- [03 — Faixas com elif](05_if_elif_else/exemplos/03_tres_faixas.py)
- [04 — Intervalos e condições compostas](05_if_elif_else/exemplos/04_condicao_composta.py)
- [05 — Decisão aninhada](05_if_elif_else/exemplos/05_decisao_aninhada.py)
- [06 — Maior entre três valores](05_if_elif_else/exemplos/06_maior_de_tres.py)
- [Alerta de estoque — cenário didático Lojas Blue](05_if_elif_else/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Sinal de alerta](05_if_elif_else/exercicios/01_sinal_de_alerta.py)
- [02 — Sinal do número](05_if_elif_else/exercicios/02_sinal_do_numero.py)
- [03 — Paridade](05_if_elif_else/exercicios/03_paridade.py)
- [04 — Maior de dois](05_if_elif_else/exercicios/04_maior_de_dois.py)
- [05 — Classificação de nota](05_if_elif_else/exercicios/05_classificacao_de_nota.py)
- [06 — Divisão protegida](05_if_elif_else/exercicios/06_divisao_protegida.py)
- [07 — Tarifa fictícia](05_if_elif_else/exercicios/07_tarifa_ficticia.py)
- [08 — Triângulo](05_if_elif_else/exercicios/08_triangulo.py)
- [09 — Menor de três](05_if_elif_else/exercicios/09_menor_de_tres.py)
- [10 — Desconto por faixa](05_if_elif_else/exercicios/10_desconto_por_faixa.py)
- [11 — Aviso e conclusão](05_if_elif_else/exercicios/11_aviso_e_conclusao.py)
- [12 — Pedido atendido por inteiro](05_if_elif_else/exercicios/12_pedido_atendido_por_inteiro.py)
- [13 — Maior com empate explícito](05_if_elif_else/exercicios/13_maior_com_empate_explicito.py)
- [14 — Frete pelo valor da compra](05_if_elif_else/exercicios/14_frete_pelo_valor_da_compra.py)
- [15 — Distância até zero](05_if_elif_else/exercicios/15_distancia_ate_zero.py)
- [16 — Disponibilidade de duas exigências](05_if_elif_else/exercicios/16_disponibilidade_de_duas_exigencias.py)
- [17 — Campanha com duas alternativas](05_if_elif_else/exercicios/17_campanha_com_duas_alternativas.py)
- [18 — Faixa com duas fronteiras](05_if_elif_else/exercicios/18_faixa_com_duas_fronteiras.py)
- [19 — Faixas de pontos exclusivas](05_if_elif_else/exercicios/19_faixas_de_pontos_exclusivas.py)
- [20 — Preço especial em uma condição](05_if_elif_else/exercicios/20_preco_especial_em_uma_condicao.py)
- [21 — Saldo após uma retirada](05_if_elif_else/exercicios/21_saldo_apos_uma_retirada.py)
- [22 — Classificação em torno do mínimo](05_if_elif_else/exercicios/22_classificacao_em_torno_do_minimo.py)
- [23 — Dois alertas independentes](05_if_elif_else/exercicios/23_dois_alertas_independentes.py)
- [24 — Uma categoria com prioridade](05_if_elif_else/exercicios/24_uma_categoria_com_prioridade.py)
- [25 — Taxa por tipo de entrega](05_if_elif_else/exercicios/25_taxa_por_tipo_de_entrega.py)
- [26 — Menor preço com preferência](05_if_elif_else/exercicios/26_menor_preco_com_preferencia.py)
- [27 — Maior valor e número de ocorrências](05_if_elif_else/exercicios/27_maior_valor_e_numero_de_ocorrencias.py)
- [28 — Quadrante de um ponto](05_if_elif_else/exercicios/28_quadrante_de_um_ponto.py)
- [29 — Divisibilidade combinada](05_if_elif_else/exercicios/29_divisibilidade_combinada.py)
- [30 — Preço progressivo por quantidade](05_if_elif_else/exercicios/30_preco_progressivo_por_quantidade.py)
- [31 — Prever ifs e cadeia elif](05_if_elif_else/exercicios/31_prever_ifs_e_cadeia_elif.py)
- [32 — Investigar a ordem das faixas](05_if_elif_else/exercicios/32_investigar_a_ordem_das_faixas.py)
- [33 — Investigar a indentação](05_if_elif_else/exercicios/33_investigar_a_indentacao.py)
- [34 — Comparar condição composta e aninhada](05_if_elif_else/exercicios/34_comparar_condicao_composta_e_aninhada.py)
- [35 — Comparar limites inclusivos](05_if_elif_else/exercicios/35_comparar_limites_inclusivos.py)
- [36 — Compra com dois critérios de promoção](05_if_elif_else/exercicios/36_compra_com_dois_criterios_de_promocao.py)
- [37 — Transferência entre duas lojas](05_if_elif_else/exercicios/37_transferencia_entre_duas_lojas.py)
- [38 — Caixa com pagamento suficiente](05_if_elif_else/exercicios/38_caixa_com_pagamento_suficiente.py)
- [39 — Retirada com duas restrições](05_if_elif_else/exercicios/39_retirada_com_duas_restricoes.py)
- [40 — Síntese de reposição e urgência](05_if_elif_else/exercicios/40_sintese_de_reposicao_e_urgencia.py)
- [Prever o limite da falta](05_if_elif_else/exercicios/91_rede_91.py)
- [Corrigir a regra de reposição](05_if_elif_else/exercicios/92_rede_92.py)
- [Faixa promocional — Lojas Blue](05_if_elif_else/exercicios/93_rede_93.py)

**Critério para avançar:** Resolva uma classificação com limites inclusivos e proteja uma divisão. Explique quando usar uma cadeia e quando usar if independentes.

<a id="06_match_case"></a>

## 06 — Seleção com match/case

**Objetivo:** Selecionar alternativas por valores literais escalares.

**Base conceitual.** `match` compara um valor com padrões. Aqui usamos somente literais escalares e alternativas: `case 1`, `case "s"` e casos unidos por `|`. O curinga `_` cobre o restante e deve vir por último. Não há passagem automática de um case ao seguinte e não se usa break para finalizar cada case. Um nome solto em case pode capturar um valor; por isso os exemplos usam literais.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Tirar as aspas de opções textuais; tentar escrever uma comparação de intervalo como literal de case; esquecer o curinga; esperar que comandos em maiúsculas sejam automaticamente iguais aos minúsculos.

**Exemplos, na ordem:**

- [01 — Menu por valor exato](06_match_case/exemplos/01_menu_literal.py)
- [02 — Código inteiro](06_match_case/exemplos/02_codigo_inteiro.py)
- [03 — Alternativas no mesmo caso](06_match_case/exemplos/03_alternativas.py)
- [04 — Comandos textuais](06_match_case/exemplos/04_comandos_textuais.py)
- [05 — Calculadora de uma operação](06_match_case/exemplos/05_calculadora.py)
- [06 — Opções e faixas](06_match_case/exemplos/06_opcoes_e_faixas.py)
- [Canal de atendimento — cenário didático Lojas Blue](06_match_case/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Turnos](06_match_case/exercicios/01_turnos.py)
- [02 — Códigos de cor](06_match_case/exercicios/02_codigos_de_cor.py)
- [03 — Dias da semana](06_match_case/exercicios/03_dias_da_semana.py)
- [04 — Dias úteis](06_match_case/exercicios/04_dias_uteis.py)
- [05 — Confirmação](06_match_case/exercicios/05_confirmacao.py)
- [06 — Operação aritmética](06_match_case/exercicios/06_operacao_aritmetica.py)
- [07 — Calculadora protegida](06_match_case/exercicios/07_calculadora_protegida.py)
- [08 — Menu geométrico](06_match_case/exercicios/08_menu_geometrico.py)
- [09 — Entrega fictícia](06_match_case/exercicios/09_entrega_ficticia.py)
- [10 — Conversão por comando](06_match_case/exercicios/10_conversao_por_comando.py)
- [Prever o canal selecionado](06_match_case/exercicios/91_rede_91.py)
- [Corrigir o tipo do caso](06_match_case/exercicios/92_rede_92.py)
- [Estado de pedido — Lojas Blue](06_match_case/exercicios/93_rede_93.py)

**Critério para avançar:** Crie um menu de execução única com caso desconhecido. Explique por que texto 1 e inteiro 1 exigem casos diferentes.

<a id="07_while"></a>

## 07 — Repetição com while

**Objetivo:** Controlar repetições por contagem, condição e sentinela.

**Base conceitual.** `while` repete enquanto uma condição for verdadeira e testa antes do corpo, que pode executar zero vezes. Procure três elementos: estado inicial, condição e atualização. Contador registra quantidade de eventos; acumulador resume valores; sentinela indica encerramento e não é um dado comum. A primeira leitura antes do laço torna explícito o caso sem dados.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Esquecer a atualização ou a nova leitura; usar o mesmo nome para contador e soma; incluir a sentinela nos dados; dividir por uma quantidade que pode ser zero.

**Exemplos, na ordem:**

- [01 — Contador crescente](07_while/exemplos/01_contador.py)
- [02 — Contagem decrescente](07_while/exemplos/02_decrescente.py)
- [03 — Contador e acumulador](07_while/exemplos/03_acumulador.py)
- [04 — Quantidade definida de leituras](07_while/exemplos/04_quantidade_de_leituras.py)
- [05 — Leitura com sentinela](07_while/exemplos/05_sentinela.py)
- [06 — Contagem de ocorrências](07_while/exemplos/06_ocorrencias.py)
- [07 — Repetir até atingir uma meta](07_while/exemplos/07_crescimento.py)
- [08 — Laço que pode não executar](07_while/exemplos/08_zero_iteracoes.py)
- [Fechamento parcial do caixa — cenário didático Lojas Blue](07_while/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Contagem crescente](07_while/exercicios/01_contagem_crescente.py)
- [02 — Contagem regressiva](07_while/exercicios/02_contagem_regressiva.py)
- [03 — Pares até um limite](07_while/exercicios/03_pares_ate_um_limite.py)
- [04 — Soma acumulada](07_while/exercicios/04_soma_acumulada.py)
- [05 — Produto acumulado](07_while/exercicios/05_produto_acumulado.py)
- [06 — Média de leituras](07_while/exercicios/06_media_de_leituras.py)
- [07 — Sentinela de soma](07_while/exercicios/07_sentinela_de_soma.py)
- [08 — Contagem de negativos](07_while/exercicios/08_contagem_de_negativos.py)
- [09 — Meta por passos](07_while/exercicios/09_meta_por_passos.py)
- [10 — Retiradas fixas](07_while/exercicios/10_retiradas_fixas.py)
- [11 — Contagem com limite zero](07_while/exercicios/11_contagem_com_limite_zero.py)
- [12 — Intervalo a partir de outro início](07_while/exercicios/12_intervalo_a_partir_de_outro_inicio.py)
- [13 — Contagem regressiva com zero](07_while/exercicios/13_contagem_regressiva_com_zero.py)
- [14 — Saltos a partir de um valor](07_while/exercicios/14_saltos_a_partir_de_um_valor.py)
- [15 — Soma dos pares de um intervalo](07_while/exercicios/15_soma_dos_pares_de_um_intervalo.py)
- [16 — Soma e quantidade separadas](07_while/exercicios/16_soma_e_quantidade_separadas.py)
- [17 — Duas contagens de sinais](07_while/exercicios/17_duas_contagens_de_sinais.py)
- [18 — Média com quantidade possivelmente vazia](07_while/exercicios/18_media_com_quantidade_possivelmente_vazia.py)
- [19 — Produto de valores informados](07_while/exercicios/19_produto_de_valores_informados.py)
- [20 — Ocorrências de um alvo](07_while/exercicios/20_ocorrencias_de_um_alvo.py)
- [21 — Sentinela diferente de zero](07_while/exercicios/21_sentinela_diferente_de_zero.py)
- [22 — Média de vendas até encerrar](07_while/exercicios/22_media_de_vendas_ate_encerrar.py)
- [23 — Duas categorias até a sentinela](07_while/exercicios/23_duas_categorias_ate_a_sentinela.py)
- [24 — Meta com avanço configurável](07_while/exercicios/24_meta_com_avanco_configuravel.py)
- [25 — Caixas completas e sobra](07_while/exercicios/25_caixas_completas_e_sobra.py)
- [26 — Contagem de estoque crítico](07_while/exercicios/26_contagem_de_estoque_critico.py)
- [27 — Total de falta nas posições](07_while/exercicios/27_total_de_falta_nas_posicoes.py)
- [28 — Maior leitura desde a primeira](07_while/exercicios/28_maior_leitura_desde_a_primeira.py)
- [29 — Menor venda do atendimento](07_while/exercicios/29_menor_venda_do_atendimento.py)
- [30 — Sequência de pagamentos para uma meta](07_while/exercicios/30_sequencia_de_pagamentos_para_uma_meta.py)
- [31 — Prever teste antes do corpo](07_while/exercicios/31_prever_teste_antes_do_corpo.py)
- [32 — Investigar atualização esquecida](07_while/exercicios/32_investigar_atualizacao_esquecida.py)
- [33 — Investigar sentinela somada](07_while/exercicios/33_investigar_sentinela_somada.py)
- [34 — Investigar contador condicionado](07_while/exercicios/34_investigar_contador_condicionado.py)
- [35 — Comparar antes e depois de atualizar](07_while/exercicios/35_comparar_antes_e_depois_de_atualizar.py)
- [36 — Percentual sem armazenamento](07_while/exercicios/36_percentual_sem_armazenamento.py)
- [37 — Maior e quantidade de empates](07_while/exercicios/37_maior_e_quantidade_de_empates.py)
- [38 — Saldo após vendas sucessivas](07_while/exercicios/38_saldo_apos_vendas_sucessivas.py)
- [39 — Fechamento com dois acumuladores](07_while/exercicios/39_fechamento_com_dois_acumuladores.py)
- [40 — Síntese de conferência de estoque](07_while/exercicios/40_sintese_de_conferencia_de_estoque.py)
- [Prever um fechamento sem vendas](07_while/exercicios/91_rede_91.py)
- [Corrigir a contagem da sentinela](07_while/exercicios/92_rede_92.py)
- [Separação por lotes — Lojas Blue](07_while/exercicios/93_rede_93.py)

**Critério para avançar:** Explique por que seu laço termina e resolva uma leitura por sentinela sem armazenar histórico.

<a id="08_for_e_range"></a>

## 08 — Repetição com for e range

**Objetivo:** Repetir por intervalos numéricos e combinar laços.

**Base conceitual.** `for` com `range` é adequado a intervalos numéricos. `range(parada)` começa em zero; `range(inicio, parada, passo)` usa passo não nulo, e a parada é excluída. O intervalo é percorrido diretamente, sem criar listas. Laços aninhados repetem integralmente o laço interno para cada volta externa.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Excluir o último valor sem querer; usar passo na direção incompatível; atualizar manualmente a variável esperando controlar o próximo valor do for; colocar a quebra de linha no laço errado.

**Exemplos, na ordem:**

- [01 — range com um argumento](08_for_e_range/exemplos/01_range_basico.py)
- [02 — Início e fim](08_for_e_range/exemplos/02_inicio_e_fim.py)
- [03 — Passo diferente de um](08_for_e_range/exemplos/03_passo.py)
- [04 — Intervalo decrescente](08_for_e_range/exemplos/04_passo_negativo.py)
- [05 — Acumular em um for](08_for_e_range/exemplos/05_soma_e_produto.py)
- [06 — Tabuada](08_for_e_range/exemplos/06_tabuada.py)
- [07 — Repetições aninhadas](08_for_e_range/exemplos/07_aninhados.py)
- [08 — Padrão triangular](08_for_e_range/exemplos/08_padrao_triangular.py)
- [O mesmo acumulador com while e for](08_for_e_range/exemplos/09_comparar_while_e_for.py)
- [Conferência de três posições — cenário didático Lojas Blue](08_for_e_range/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Intervalo iniciado em zero](08_for_e_range/exercicios/01_intervalo_iniciado_em_zero.py)
- [02 — Intervalo fechado](08_for_e_range/exercicios/02_intervalo_fechado.py)
- [03 — Múltiplos de três](08_for_e_range/exercicios/03_multiplos_de_tres.py)
- [04 — Contagem por salto](08_for_e_range/exercicios/04_contagem_por_salto.py)
- [05 — Soma de quadrados](08_for_e_range/exercicios/05_soma_de_quadrados.py)
- [06 — Tabuada completa](08_for_e_range/exercicios/06_tabuada_completa.py)
- [07 — Contagem por faixa](08_for_e_range/exercicios/07_contagem_por_faixa.py)
- [08 — Duas tabuadas](08_for_e_range/exercicios/08_duas_tabuadas.py)
- [09 — Triângulo crescente](08_for_e_range/exercicios/09_triangulo_crescente.py)
- [10 — Triângulo decrescente](08_for_e_range/exercicios/10_triangulo_decrescente.py)
- [11 — Intervalo com uma única passagem](08_for_e_range/exercicios/11_intervalo_com_uma_unica_passagem.py)
- [12 — Intervalo vazio explicado](08_for_e_range/exercicios/12_intervalo_vazio_explicado.py)
- [13 — Pares incluindo zero](08_for_e_range/exercicios/13_pares_incluindo_zero.py)
- [14 — Ímpares em ordem decrescente](08_for_e_range/exercicios/14_impares_em_ordem_decrescente.py)
- [15 — Intervalo inclusivo com negativos](08_for_e_range/exercicios/15_intervalo_inclusivo_com_negativos.py)
- [16 — Passo que não alcança a ponta](08_for_e_range/exercicios/16_passo_que_nao_alcanca_a_ponta.py)
- [17 — Soma de um intervalo deslocado](08_for_e_range/exercicios/17_soma_de_um_intervalo_deslocado.py)
- [18 — Múltiplos sem contagem duplicada](08_for_e_range/exercicios/18_multiplos_sem_contagem_duplicada.py)
- [19 — Quantidade de leituras exata](08_for_e_range/exercicios/19_quantidade_de_leituras_exata.py)
- [20 — Soma de produtos sucessivos](08_for_e_range/exercicios/20_soma_de_produtos_sucessivos.py)
- [21 — Média de preços informados](08_for_e_range/exercicios/21_media_de_precos_informados.py)
- [22 — Contagens em duas faixas](08_for_e_range/exercicios/22_contagens_em_duas_faixas.py)
- [23 — Maior e menor de n leituras](08_for_e_range/exercicios/23_maior_e_menor_de_n_leituras.py)
- [24 — Tabuada com faixa escolhida](08_for_e_range/exercicios/24_tabuada_com_faixa_escolhida.py)
- [25 — Tabela de preço por quantidade](08_for_e_range/exercicios/25_tabela_de_preco_por_quantidade.py)
- [26 — Conferência de unidades e valores](08_for_e_range/exercicios/26_conferencia_de_unidades_e_valores.py)
- [27 — Grade de posições impressas](08_for_e_range/exercicios/27_grade_de_posicoes_impressas.py)
- [28 — Retângulo de símbolos](08_for_e_range/exercicios/28_retangulo_de_simbolos.py)
- [29 — Escada numerada](08_for_e_range/exercicios/29_escada_numerada.py)
- [30 — Tabuadas em duas dimensões](08_for_e_range/exercicios/30_tabuadas_em_duas_dimensoes.py)
- [31 — Prever a parada excluída](08_for_e_range/exercicios/31_prever_a_parada_excluida.py)
- [32 — Investigar um passo incompatível](08_for_e_range/exercicios/32_investigar_um_passo_incompativel.py)
- [33 — Investigar acumulador reiniciado](08_for_e_range/exercicios/33_investigar_acumulador_reiniciado.py)
- [34 — Comparar filtragem e passo](08_for_e_range/exercicios/34_comparar_filtragem_e_passo.py)
- [35 — Comparar for e while no produto](08_for_e_range/exercicios/35_comparar_for_e_while_no_produto.py)
- [36 — Contar fronteiras de uma grade](08_for_e_range/exercicios/36_contar_fronteiras_de_uma_grade.py)
- [37 — Totais por loja sem guardar histórico](08_for_e_range/exercicios/37_totais_por_loja_sem_guardar_historico.py)
- [38 — Contar execuções de laços dependentes](08_for_e_range/exercicios/38_contar_execucoes_de_lacos_dependentes.py)
- [39 — Dois percursos para o mesmo total](08_for_e_range/exercicios/39_dois_percursos_para_o_mesmo_total.py)
- [40 — Síntese de reposição por loja](08_for_e_range/exercicios/40_sintese_de_reposicao_por_loja.py)
- [Prever a conferência](08_for_e_range/exercicios/91_rede_91.py)
- [Corrigir a quantidade de etiquetas](08_for_e_range/exercicios/92_rede_92.py)
- [Gôndola desenhada — Lojas Blue](08_for_e_range/exercicios/93_rede_93.py)
- [Comparar o controle dos laços](08_for_e_range/exercicios/94_prever.py)
- [Escolher o laço adequado](08_for_e_range/exercicios/95_investigar.py)

**Critério para avançar:** Escolha início, parada e passo para intervalos crescentes e decrescentes. Preveja quantas vezes um corpo aninhado executará.

<a id="09_algoritmos_basicos"></a>

## 09 — Algoritmos básicos

**Objetivo:** Construir algoritmos numéricos usando somente variáveis escalares.

**Base conceitual.** Um algoritmo combina passos para produzir um resultado. Os padrões deste bloco são acumulação, seleção, extração de algarismos e atualização de estados. Primeiro reconheça entrada, saída e precondições. Depois escolha valores iniciais válidos e trate os casos zero, um, empate e entradas negativas quando o contrato permitir. Os algoritmos são versões didáticas, não uma comparação de desempenho.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Começar maior ou menor em zero arbitrário; iniciar produto em zero; classificar um como primo; perder um estado no Fibonacci; esquecer que zero possui um dígito; tentar preservar zeros à esquerda em um inteiro.

**Exemplos, na ordem:**

- [01 — Soma e média de entradas](09_algoritmos_basicos/exemplos/01_soma_media.py)
- [02 — Maior e menor de várias entradas](09_algoritmos_basicos/exemplos/02_extremos.py)
- [03 — Ocorrências e percentual](09_algoritmos_basicos/exemplos/03_ocorrencias_percentual.py)
- [04 — Divisores de um inteiro](09_algoritmos_basicos/exemplos/04_divisores.py)
- [05 — Número primo](09_algoritmos_basicos/exemplos/05_primo.py)
- [06 — Fatorial](09_algoritmos_basicos/exemplos/06_fatorial.py)
- [07 — Fibonacci sem coleções](09_algoritmos_basicos/exemplos/07_fibonacci.py)
- [08 — MDC pelo algoritmo de Euclides](09_algoritmos_basicos/exemplos/08_mdc.py)
- [09 — MMC a partir do MDC](09_algoritmos_basicos/exemplos/09_mmc.py)
- [10 — Soma dos algarismos](09_algoritmos_basicos/exemplos/10_soma_algarismos.py)
- [11 — Inversão numérica](09_algoritmos_basicos/exemplos/11_inversao.py)
- [12 — Contagem de dígitos](09_algoritmos_basicos/exemplos/12_contagem_digitos.py)
- [13 — Progressão aritmética](09_algoritmos_basicos/exemplos/13_progressao.py)
- [14 — Média somente dos positivos](09_algoritmos_basicos/exemplos/14_soma_seletiva.py)
- [15 — Tabela numérica](09_algoritmos_basicos/exemplos/15_tabela_numerica.py)
- [16 — Retângulo de símbolos](09_algoritmos_basicos/exemplos/16_padrao_retangular.py)
- [Extremos de vendas sem histórico — cenário didático Lojas Blue](09_algoritmos_basicos/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Resumo de medições](09_algoritmos_basicos/exercicios/01_resumo_de_medicoes.py)
- [02 — Extremos negativos](09_algoritmos_basicos/exercicios/02_extremos_negativos.py)
- [03 — Percentual de pares](09_algoritmos_basicos/exercicios/03_percentual_de_pares.py)
- [04 — Divisores e soma](09_algoritmos_basicos/exercicios/04_divisores_e_soma.py)
- [05 — Primalidade](09_algoritmos_basicos/exercicios/05_primalidade.py)
- [06 — Fatorial iterativo](09_algoritmos_basicos/exercicios/06_fatorial_iterativo.py)
- [07 — Termos de Fibonacci](09_algoritmos_basicos/exercicios/07_termos_de_fibonacci.py)
- [08 — MDC de positivos](09_algoritmos_basicos/exercicios/08_mdc_de_positivos.py)
- [09 — MMC de positivos](09_algoritmos_basicos/exercicios/09_mmc_de_positivos.py)
- [10 — Soma de algarismos](09_algoritmos_basicos/exercicios/10_soma_de_algarismos.py)
- [11 — Inversão numérica](09_algoritmos_basicos/exercicios/11_inversao_numerica.py)
- [12 — Quantidade de dígitos](09_algoritmos_basicos/exercicios/12_quantidade_de_digitos.py)
- [13 — Progressão aritmética](09_algoritmos_basicos/exercicios/13_progressao_aritmetica.py)
- [14 — Média dos selecionados](09_algoritmos_basicos/exercicios/14_media_dos_selecionados.py)
- [15 — Palíndromo numérico](09_algoritmos_basicos/exercicios/15_palindromo_numerico.py)
- [16 — Número perfeito](09_algoritmos_basicos/exercicios/16_numero_perfeito.py)
- [Prever o candidato a maior](09_algoritmos_basicos/exercicios/91_rede_91.py)
- [Completar o resumo de vendas](09_algoritmos_basicos/exercicios/92_rede_92.py)
- [Soma dos dígitos do código — Lojas Blue](09_algoritmos_basicos/exercicios/93_rede_93.py)

**Critério para avançar:** Implemente um algoritmo numérico a partir do enunciado, justifique a inicialização e confirme pelo menos um caso de fronteira.

<a id="10_validacao_e_controle_de_fluxo"></a>

## 10 — Validação e controle de fluxo

**Objetivo:** Validar entradas, encerrar laços e construir menus seguros.

**Base conceitual.** Validação de formato pergunta se o texto pode ser convertido; validação de domínio pergunta se o valor pertence à faixa do problema. `try/except ValueError` trata a primeira. No exemplo com `else` do try, esse bloco só executa quando a conversão não falha. Flags guardam estados booleanos. `break` encerra o laço mais interno; `continue` passa à próxima volta. `while True` precisa de um caminho de saída.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Capturar todo erro sem critério; usar uma variável depois de conversão fracassada; pular a atualização com continue em um while; apagar uma flag que registra ocorrência; pedir nova entrada depois da opção sair.

**Exemplos, na ordem:**

- [01 — Repetir até obter um valor válido](10_validacao_e_controle_de_fluxo/exemplos/01_intervalo.py)
- [02 — Conversão segura com try/except](10_validacao_e_controle_de_fluxo/exemplos/02_conversao_segura.py)
- [03 — Sentinela e ausência de dados](10_validacao_e_controle_de_fluxo/exemplos/03_sentinela_e_vazio.py)
- [04 — Flag de ocorrência](10_validacao_e_controle_de_fluxo/exemplos/04_flag.py)
- [05 — Saída antecipada com break](10_validacao_e_controle_de_fluxo/exemplos/05_break.py)
- [06 — Pular uma iteração com continue](10_validacao_e_controle_de_fluxo/exemplos/06_continue.py)
- [07 — Menu repetitivo](10_validacao_e_controle_de_fluxo/exemplos/07_menu_repetitivo.py)
- [08 — Validação com limite de tentativas](10_validacao_e_controle_de_fluxo/exemplos/08_limite_tentativas.py)
- [09 — Confirmação textual](10_validacao_e_controle_de_fluxo/exemplos/09_confirmacao.py)
- [10 — Resumo de valores com entrada robusta](10_validacao_e_controle_de_fluxo/exemplos/10_integracao.py)
- [Retirada com validação — cenário didático Lojas Blue](10_validacao_e_controle_de_fluxo/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Nota válida](10_validacao_e_controle_de_fluxo/exercicios/01_nota_valida.py)
- [02 — Quantidade positiva](10_validacao_e_controle_de_fluxo/exercicios/02_quantidade_positiva.py)
- [03 — Confirmação estrita](10_validacao_e_controle_de_fluxo/exercicios/03_confirmacao_estrita.py)
- [04 — Sentinela e vazio](10_validacao_e_controle_de_fluxo/exercicios/04_sentinela_e_vazio.py)
- [05 — Flag persistente](10_validacao_e_controle_de_fluxo/exercicios/05_flag_persistente.py)
- [06 — Tentativas limitadas](10_validacao_e_controle_de_fluxo/exercicios/06_tentativas_limitadas.py)
- [07 — Ignorar inválidos com continue](10_validacao_e_controle_de_fluxo/exercicios/07_ignorar_invalidos_com_continue.py)
- [08 — Menu de contador](10_validacao_e_controle_de_fluxo/exercicios/08_menu_de_contador.py)
- [09 — Faixa com limite de tentativas](10_validacao_e_controle_de_fluxo/exercicios/09_faixa_com_limite_de_tentativas.py)
- [10 — Resumo robusto](10_validacao_e_controle_de_fluxo/exercicios/10_resumo_robusto.py)
- [Prever uma sequência de recusas](10_validacao_e_controle_de_fluxo/exercicios/91_rede_91.py)
- [Corrigir a ordem da alteração](10_validacao_e_controle_de_fluxo/exercicios/92_rede_92.py)
- [Resumo sem vendas — Lojas Blue](10_validacao_e_controle_de_fluxo/exercicios/93_rede_93.py)

**Critério para avançar:** Recuse letras e números fora da faixa, permita encerramento previsto e trate a ausência de dados sem resultados fictícios.

<a id="11_funcoes"></a>

## 11 — Funções

**Objetivo:** Definir contratos, parâmetros, retornos e responsabilidades.

**Base conceitual.** `def` define uma função; a chamada a executa. Parâmetros nomeiam os dados recebidos; argumentos são os valores passados. `return` devolve um valor e encerra a chamada. Sem retorno explícito, o resultado é `None`. Variáveis locais pertencem à chamada. Docstring é o primeiro texto do corpo e deve explicar objetivo, entradas, precondições e retorno quando houver. Funções de cálculo recebem dados e retornam resultados; funções de interação assumem explicitamente leitura ou saída.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Imprimir um cálculo quando o chamador precisa do retorno; esquecer return em um caminho; depender de variáveis globais; deixar a docstring prometer uma validação que a função não faz.

**Exemplos, na ordem:**

- [01 — Definir e chamar](11_funcoes/exemplos/01_definir_e_chamar.py)
- [02 — Parâmetros e argumentos](11_funcoes/exemplos/02_parametros.py)
- [03 — Retornar um resultado](11_funcoes/exemplos/03_return.py)
- [04 — Mais de um parâmetro](11_funcoes/exemplos/04_dois_parametros.py)
- [05 — Função que responde uma pergunta](11_funcoes/exemplos/05_retorno_booleano.py)
- [06 — Escopo local](11_funcoes/exemplos/06_escopo.py)
- [07 — Parâmetro com valor padrão](11_funcoes/exemplos/07_parametro_padrao.py)
- [08 — Contrato e retornos por caminho](11_funcoes/exemplos/08_contrato_e_limites.py)
- [09 — Algoritmo numérico em função](11_funcoes/exemplos/09_algoritmo_em_funcao.py)
- [10 — Função de leitura validada](11_funcoes/exemplos/10_entrada_validada.py)
- [Mostrar um cálculo e devolver um cálculo](11_funcoes/exemplos/11_print_return_none.py)
- [Usar o retorno de uma função em outra](11_funcoes/exemplos/12_compor_funcoes.py)
- [Função de reposição — cenário didático Lojas Blue](11_funcoes/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Função de apresentação](11_funcoes/exercicios/01_funcao_de_apresentacao.py)
- [02 — Saudação parametrizada](11_funcoes/exercicios/02_saudacao_parametrizada.py)
- [03 — Retorno numérico](11_funcoes/exercicios/03_retorno_numerico.py)
- [04 — Dois parâmetros](11_funcoes/exercicios/04_dois_parametros.py)
- [05 — Pergunta booleana](11_funcoes/exercicios/05_pergunta_booleana.py)
- [06 — Escopo local](11_funcoes/exercicios/06_escopo_local.py)
- [07 — Argumento padrão](11_funcoes/exercicios/07_argumento_padrao.py)
- [08 — Contrato de classificação](11_funcoes/exercicios/08_contrato_de_classificacao.py)
- [09 — Função de algarismos](11_funcoes/exercicios/09_funcao_de_algarismos.py)
- [10 — Leitor validado](11_funcoes/exercicios/10_leitor_validado.py)
- [11 — Mensagem reutilizada com parâmetro](11_funcoes/exercicios/11_mensagem_reutilizada_com_parametro.py)
- [12 — Área devolvida ao chamador](11_funcoes/exercicios/12_area_devolvida_ao_chamador.py)
- [13 — Ordem de parâmetros que importa](11_funcoes/exercicios/13_ordem_de_parametros_que_importa.py)
- [14 — Pergunta sobre uma faixa](11_funcoes/exercicios/14_pergunta_sobre_uma_faixa.py)
- [15 — Falta sem efeito de apresentação](11_funcoes/exercicios/15_falta_sem_efeito_de_apresentacao.py)
- [16 — Menor entre dois argumentos](11_funcoes/exercicios/16_menor_entre_dois_argumentos.py)
- [17 — Conversão com retorno](11_funcoes/exercicios/17_conversao_com_retorno.py)
- [18 — Quantidade padrão e explícita](11_funcoes/exercicios/18_quantidade_padrao_e_explicita.py)
- [19 — Classificação com retorno em cada faixa](11_funcoes/exercicios/19_classificacao_com_retorno_em_cada_faixa.py)
- [20 — Valor externo preservado](11_funcoes/exercicios/20_valor_externo_preservado.py)
- [21 — Soma de intervalo em função](11_funcoes/exercicios/21_soma_de_intervalo_em_funcao.py)
- [22 — Contar múltiplos em uma faixa](11_funcoes/exercicios/22_contar_multiplos_em_uma_faixa.py)
- [23 — Potência por multiplicações](11_funcoes/exercicios/23_potencia_por_multiplicacoes.py)
- [24 — Soma dos pares com retorno](11_funcoes/exercicios/24_soma_dos_pares_com_retorno.py)
- [25 — Maior de três por reutilização](11_funcoes/exercicios/25_maior_de_tres_por_reutilizacao.py)
- [26 — Orçamento por composição](11_funcoes/exercicios/26_orcamento_por_composicao.py)
- [27 — Regra booleana usada pelo chamador](11_funcoes/exercicios/27_regra_booleana_usada_pelo_chamador.py)
- [28 — Soma de algarismos encapsulada](11_funcoes/exercicios/28_soma_de_algarismos_encapsulada.py)
- [29 — Leitura validada e cálculo separados](11_funcoes/exercicios/29_leitura_validada_e_calculo_separados.py)
- [30 — Leitura de opção em dois valores](11_funcoes/exercicios/30_leitura_de_opcao_em_dois_valores.py)
- [31 — Investigar print no lugar de return](11_funcoes/exercicios/31_investigar_print_no_lugar_de_return.py)
- [32 — Investigar retorno que falta](11_funcoes/exercicios/32_investigar_retorno_que_falta.py)
- [33 — Investigar retorno dentro do laço](11_funcoes/exercicios/33_investigar_retorno_dentro_do_laco.py)
- [34 — Prever atribuição local e retorno](11_funcoes/exercicios/34_prever_atribuicao_local_e_retorno.py)
- [35 — Comparar chamadas equivalentes](11_funcoes/exercicios/35_comparar_chamadas_equivalentes.py)
- [36 — Conferir contrato nas fronteiras](11_funcoes/exercicios/36_conferir_contrato_nas_fronteiras.py)
- [37 — Chamadas consecutivas sem acumular estado](11_funcoes/exercicios/37_chamadas_consecutivas_sem_acumular_estado.py)
- [38 — Reutilizar cálculo em várias posições](11_funcoes/exercicios/38_reutilizar_calculo_em_varias_posicoes.py)
- [39 — Duas funções para conferir primalidade](11_funcoes/exercicios/39_duas_funcoes_para_conferir_primalidade.py)
- [40 — Síntese de orçamento reutilizável](11_funcoes/exercicios/40_sintese_de_orcamento_reutilizavel.py)
- [Prever retornos e variáveis locais](11_funcoes/exercicios/91_rede_91.py)
- [Completar o contrato de reposição](11_funcoes/exercicios/92_rede_92.py)
- [Pergunta sobre saldo — Lojas Blue](11_funcoes/exercicios/93_rede_93.py)
- [Prever saída e retorno](11_funcoes/exercicios/94_prever.py)
- [Corrigir um cálculo que só imprime](11_funcoes/exercicios/95_investigar.py)
- [Rastrear a composição](11_funcoes/exercicios/96_prever.py)
- [Completar etapas de um orçamento](11_funcoes/exercicios/97_investigar.py)

**Critério para avançar:** Escreva uma função de cálculo sem input ou print, documente seu contrato e reutilize o retorno. Explique a diferença entre variável local e variável do chamador.

<a id="12_decomposicao_de_problemas"></a>

## 12 — Decomposição de problemas

**Objetivo:** Planejar e integrar funções pequenas em programas completos.

**Base conceitual.** Decompor é dividir o problema por responsabilidades. Antes do código, escreva requisitos, dados, regras, casos de teste e etapas. Desenhe o fluxo leitura -> validação -> cálculo -> apresentação e decida quem guarda o estado. `main` coordena as etapas; `if __name__ == "__main__":` a chama somente na execução direta. Os arquivos continuam independentes e não precisam importar uns aos outros.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Fragmentar cada linha em uma função sem propósito; fazer toda a lógica em main; manter estado global oculto; retornar vários dados por tupla. Neste curso, cada retorno é escalar, e o estado conjunto pode permanecer no coordenador.

**Exemplos, na ordem:**

- [01 — Decompor um orçamento](12_decomposicao_de_problemas/exemplos/01_orcamento.py)
- [02 — Boletim de duas notas](12_decomposicao_de_problemas/exemplos/02_boletim.py)
- [03 — Serviço de divisibilidade](12_decomposicao_de_problemas/exemplos/03_divisibilidade.py)
- [04 — Resumo de uma turma sem histórico](12_decomposicao_de_problemas/exemplos/04_resumo_de_turma.py)
- [05 — Menu de ferramentas numéricas](12_decomposicao_de_problemas/exemplos/05_menu_numerico.py)
- [06 — Projeto integrador: sessão de exercícios](12_decomposicao_de_problemas/exemplos/06_projeto_integrador.py)
- [Serviço escalar de reposição — cenário didático Lojas Blue](12_decomposicao_de_problemas/exemplos/90_rede_contexto.py)
- [Reposição: quatro posições, uma por vez](12_decomposicao_de_problemas/exemplos/91_caso_reposicao.py)

**Exercícios, na ordem:**

- [01 — Plano de conversão](12_decomposicao_de_problemas/exercicios/01_plano_de_conversao.py)
- [02 — Orçamento validado](12_decomposicao_de_problemas/exercicios/02_orcamento_validado.py)
- [03 — Boletim ponderado](12_decomposicao_de_problemas/exercicios/03_boletim_ponderado.py)
- [04 — Ferramenta de divisores](12_decomposicao_de_problemas/exercicios/04_ferramenta_de_divisores.py)
- [05 — Serviço de MDC](12_decomposicao_de_problemas/exercicios/05_servico_de_mdc.py)
- [06 — Resumo de medições](12_decomposicao_de_problemas/exercicios/06_resumo_de_medicoes.py)
- [07 — Menu de operações](12_decomposicao_de_problemas/exercicios/07_menu_de_operacoes.py)
- [08 — Revisão de responsabilidades](12_decomposicao_de_problemas/exercicios/08_revisao_de_responsabilidades.py)
- [09 — Sessão de pontuações](12_decomposicao_de_problemas/exercicios/09_sessao_de_pontuacoes.py)
- [10 — Projeto final: resumo numérico](12_decomposicao_de_problemas/exercicios/10_projeto_final_resumo_numerico.py)
- [Prever o fluxo do serviço](12_decomposicao_de_problemas/exercicios/91_rede_91.py)
- [Comparar responsabilidades](12_decomposicao_de_problemas/exercicios/92_rede_92.py)
- [Fechamento escalar — Lojas Blue](12_decomposicao_de_problemas/exercicios/93_rede_93.py)
- [Reposição no recorte comum](12_decomposicao_de_problemas/exercicios/94_problema_evolutivo.py)

**Critério para avançar:** Implemente o projeto final, com menu, validação, resumo vazio e reinício. Explique o contrato de cada função e o caminho de cada dado.

<a id="13_teste_de_mesa"></a>

## 13 — Teste de mesa

**Objetivo:** Prever estados, verificar limites e explicar o comportamento de algoritmos.

**Base conceitual.** Teste de mesa é simular a execução antes de rodar. Defina entradas, linhas relevantes e colunas de estado; após cada atribuição, registre a mudança. Inclua condições falsas, o estado final e as saídas. Uma tabela no papel é uma ferramenta de raciocínio, não uma estrutura de dados do programa. Um invariante descreve o que permanece verdadeiro entre as repetições. `assert` pode conferir hipóteses de desenvolvimento, mas não substitui validação de entrada.

**Pré-requisito:** tópicos anteriores e seus critérios de autonomia.

**Erros para observar:** Registrar só o resultado final; omitir a condição que encerra o laço; misturar estado local e externo; escolher os resultados esperados somente depois de observar o programa.

**Exemplos, na ordem:**

- [01 — Rastrear atribuições](13_teste_de_mesa/exemplos/01_atribuicoes.py)
- [02 — Rastrear ramos e limites](13_teste_de_mesa/exemplos/02_ramos_e_limites.py)
- [03 — Rastrear um while](13_teste_de_mesa/exemplos/03_rastrear_while.py)
- [04 — Rastrear uma sentinela](13_teste_de_mesa/exemplos/04_rastrear_sentinela.py)
- [05 — Rastrear chamadas e retornos](13_teste_de_mesa/exemplos/05_rastrear_chamadas.py)
- [06 — Verificação e invariante](13_teste_de_mesa/exemplos/06_verificacao_e_invariante.py)
- [Rastrear um saldo — cenário didático Lojas Blue](13_teste_de_mesa/exemplos/90_rede_contexto.py)

**Exercícios, na ordem:**

- [01 — Troca no papel](13_teste_de_mesa/exercicios/01_troca_no_papel.py)
- [02 — Cópia e reatribuição](13_teste_de_mesa/exercicios/02_copia_e_reatribuicao.py)
- [03 — Fronteiras de nota](13_teste_de_mesa/exercicios/03_fronteiras_de_nota.py)
- [04 — Condição final do while](13_teste_de_mesa/exercicios/04_condicao_final_do_while.py)
- [05 — Sentinela como primeira entrada](13_teste_de_mesa/exercicios/05_sentinela_como_primeira_entrada.py)
- [06 — Atualização de Fibonacci](13_teste_de_mesa/exercicios/06_atualizacao_de_fibonacci.py)
- [07 — Limites de range](13_teste_de_mesa/exercicios/07_limites_de_range.py)
- [08 — Flag que não deve apagar](13_teste_de_mesa/exercicios/08_flag_que_nao_deve_apagar.py)
- [09 — Escopo e retorno](13_teste_de_mesa/exercicios/09_escopo_e_retorno.py)
- [10 — Roteiro de validação final](13_teste_de_mesa/exercicios/10_roteiro_de_validacao_final.py)
- [Prever todas as avaliações do laço](13_teste_de_mesa/exercicios/91_rede_91.py)
- [Investigar uma divergência de estado](13_teste_de_mesa/exercicios/92_rede_92.py)
- [Roteiro do fechamento — Lojas Blue](13_teste_de_mesa/exercicios/93_rede_93.py)
- [Rastrear o recorte comum](13_teste_de_mesa/exercicios/94_problema_evolutivo.py)

**Critério para avançar:** Preveja e explique uma execução sem dados, uma comum e uma de fronteira. Encontre a primeira divergência de estado ao investigar um defeito.

## Fechamento e passagem para PED

Ao terminar, você deve conseguir transformar um enunciado em entradas, regras e saídas; acompanhar atribuições; escolher condições e laços; explicar o término; usar funções com contratos; validar entradas e conferir comportamento por teste de mesa.

Refaça o projeto final do tópico 12, apresente os roteiros de verificação do tópico 13 e explique como mantém resumo e extremos sem guardar histórico.
Se ainda depender de copiar, volte ao exemplo que introduz o recurso em dificuldade e resolva uma atividade menor.

**ALP termina aqui.** A próxima etapa é PED — Programação 1, que começa o trabalho sistemático com coleções e estruturas.
Não é necessário implementar listas ou orientação a objetos para concluir este material.

## Atividades no contexto das lojas

Depois dos fundamentos de cada tópico, siga a [trilha Lojas Blue](TRILHA_LOJAS_BLUE.md). Ela fornece 14 exemplos e 41 desafios adicionais, sem coleções ou JSON.

## Novas formas de praticar

As atividades contextuais 91 e 92 de cada tópico agora variam previsão, investigação, comparação e complementação. As atividades 94 de 12 e 13 trabalham o caso evolutivo.

## Problema comum e atividades variadas

Consulte o [caso evolutivo de reposição](PROBLEMA_EVOLUTIVO.md) e o [índice completo de atividades por tipo](ATIVIDADES_POR_TIPO.md). Os exercícios novos aparecem nesse índice com seus arquivos e objetivos.

## Complementos e comparações

Siga [APROFUNDAMENTO_E_COMPARACOES.md](APROFUNDAMENTO_E_COMPARACOES.md) para integrar os exemplos e as atividades desta rodada ao percurso.

## Prática intensiva dos fundamentos

Use [PRATICA_INTENSIVA.md](PRATICA_INTENSIVA.md) para distribuir as atividades adicionais de decisões, while, for e funções em sessões de prática e revisão.
