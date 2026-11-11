# ALP — Algoritmos e Lógica de Programação com Python

Curso introdutório completo, do primeiro `print` à decomposição de problemas e ao teste de mesa.
O material contém **117 exemplos completos** e **301 exercícios sem solução**, distribuídos em 13 tópicos.
Todo o material está em português e os arquivos usam UTF-8.

## Comece aqui

1. Extraia o ZIP. A pasta externa se chama `ALP`.
2. Abra [ORDEM_DE_ESTUDO.md](ORDEM_DE_ESTUDO.md), que contém conceitos, sequência, índice de todos os arquivos e critérios para avançar.
3. Estude os arquivos de cada subpasta em ordem numérica. Cada exemplo é um programa independente.
4. Preveja a saída antes de executar, compare o resultado e altere uma condição por vez.
5. Implemente os exercícios antes de consultar novamente os exemplos. Não há gabaritos no pacote.

## Requisitos e execução

Use **Python 3.10 ou superior**, necessário para `match/case`, e um editor que preserve UTF-8.
Não há bibliotecas externas, instalação de pacotes ou conexão à internet.

Abra um terminal na pasta ALP e execute um arquivo por vez:

```text
python 01_output/exemplos/01_primeira_mensagem.py
python 02_input/exemplos/01_eco.py
```

No Windows, se o comando disponível for `py`, substitua `python` por `py -3`.
Digite uma entrada por solicitação e confirme com Enter. Use ponto decimal, como `3.5`.
Os cabeçalhos dos exemplos informam entradas de demonstração e um trecho que deve aparecer na saída.
Não execute todos os exemplos interativos de uma só vez.
No terminal, Ctrl+C interrompe um programa em execução.

## Organização

Cada um dos 13 tópicos possui exatamente dois subdiretórios:

```text
ALP/
├── README.md
├── ORDEM_DE_ESTUDO.md
├── 01_output/
│   ├── exemplos/
│   └── exercicios/
...
└── 13_teste_de_mesa/
    ├── exemplos/
    └── exercicios/
```

`exemplos` contém código executável, comentários de raciocínio e demonstração guiada.
`exercicios` contém apenas comentários com enunciado, dica e casos de conferência; executar esses arquivos antes de resolvê-los não produz saída.
As funções dos exemplos possuem docstrings. Escreva também docstrings nas suas soluções com funções.
Os exemplos de decomposição usam `main` e cada função retorna, quando necessário, um único valor escalar.

## Limites deste curso

ALP termina ao concluir o tópico 13. O foco é raciocínio com variáveis escalares, decisões, repetições, funções e decomposição.
Textos aparecem como mensagens, nomes, comandos e formatação de saída. Não há indexação, fatiamento ou percurso de caracteres.
`for` percorre somente intervalos numéricos com `range`; esses intervalos nunca são convertidos em listas.

**Ficam para Programação 1 (PED):** listas, tuplas, dicionários, conjuntos, estruturas aninhadas, manipulação mais rica de strings, arquivos, JSON, busca, ordenação, pilhas, filas, hash e complexidade.
Orientação a objetos pertence a **POO — Programação Orientada a Objetos**. **JOG — Programação de Jogos Eletrônicos** será desenvolvido depois.
Este pacote entrega somente o conteúdo de ALP.

## Convenções e domínio das entradas

- Até o tópico 09, siga as precondições de cada exemplo. Digitar letras onde se pede um inteiro pode causar `ValueError`; a recuperação desse erro é conteúdo do tópico 10.
- Mesmo no tópico 10, cada exemplo tem um foco: alguns pressupõem formato válido e dizem isso nos comentários; outros integram validação de formato e de domínio.
- Considere entradas decimais finitas e de magnitude razoável. `float` usa aproximação; a formatação com duas casas muda a apresentação, não o valor. Textos especiais como `nan` e `inf` não são medições válidas.
- A versão de orçamento mostra como recusar também valores especiais não finitos. Nas faixas fechadas, comparações encadeadas recusam valores que não pertencem ao intervalo.
- Valores negativos, zero e quantidades vazias só são aceitos quando o contrato permitir. Não use uma entrada fora do contrato para concluir que um algoritmo está incorreto.
- Valores de tarifas e regras de classificação são convenções didáticas, sem finalidade normativa ou de uso financeiro real.
- Use quatro espaços para indentar, nomes descritivos e uma instrução por linha. Evite atalhos como troca por tupla, funções agregadoras e soluções com coleções.

## Rotina de aprendizagem

Para cada exemplo, identifique entrada, processamento, saída, estado inicial e condição de término quando houver laço.
Faça ao menos três conferências em cada exercício: um caso comum, um de fronteira e um caso diferente do primeiro.
Teste entrada inválida somente quando o enunciado pedir validação. Compare o resultado com o esperado antes de mudar o programa.
Se errar, localize a primeira variável que diverge do teste de mesa e corrija a causa.

O tópico 13 consolida uma prática que deve começar desde as primeiras atribuições, não somente ao fim do curso.
Depois do projeto integrador, refaça-o sem copiar e explique suas escolhas em voz alta ou por escrito.

## Verificação desta edição

Consulte [VERIFICACAO_REDE.md](VERIFICACAO_REDE.md) para os resultados da revisão atual.

## Complemento Lojas Blue

Foram acrescentados 14 exemplos e 41 exercícios contextualizados, mantendo os arquivos do núcleo geral.
Siga [TRILHA_LOJAS_BLUE.md](TRILHA_LOJAS_BLUE.md) e o [contexto comum](CONTEXTO_LOJAS_BLUE.md).
O complemento não contém base JSON nem leitura de arquivos e respeita os limites de cada tópico.
O relatório de verificação reúne o núcleo e os complementos desta edição.

## Progressão e prática

Siga o [problema evolutivo de reposição](PROBLEMA_EVOLUTIVO.md), com os mesmos dados e resultados de referência nas três disciplinas. Use o [índice de atividades por tipo](ATIVIDADES_POR_TIPO.md) para alternar implementação, previsão, investigação e comparação.

Consulte [APROFUNDAMENTO_E_COMPARACOES.md](APROFUNDAMENTO_E_COMPARACOES.md) para as novas explicações, comparações e exercícios.

## Mais prática dos fundamentos

Os tópicos de if/elif/else e while têm 43 exercícios cada; for/range tem 45, e funções tem 47. Siga [PRATICA_INTENSIVA.md](PRATICA_INTENSIVA.md) para os blocos de fixação, aplicação e consolidação.

## Licenças

Copyright (c) 2026 Mateus Moura (@profmateusmoura).

Este repositório aplica uma licença ao código e outra ao conteúdo didático,
conforme o escopo abaixo. Cada licença se aplica ao respectivo material;
não se trata de uma escolha entre duas licenças para o mesmo conteúdo.

| Material | Licença |
|---|---|
| Exemplos executáveis em `.py`, incluindo seus comentários e docstrings | MIT |
| Módulos auxiliares em `.py` e seus comentários e docstrings | MIT |
| Enunciados, dicas e casos de conferência em `exercicios/*.py`, que contêm apenas comentários | CC BY 4.0 |
| Guias, explicações e demais documentos didáticos em `.md` | CC BY 4.0 |

O texto integral da **MIT** está em [LICENSE](LICENSE). Ao redistribuir o código,
preserve o aviso de direitos autorais e o aviso de permissão dessa licença.

O texto integral da **Creative Commons Atribuição 4.0 Internacional (CC BY 4.0)**
está em [LICENSE-CONTENT](LICENSE-CONTENT). Ao compartilhar o material didático,
atribua crédito, indique a licença, preserve as informações exigidas por ela e
informe as alterações realizadas. Consulte também o
[resumo em português](https://creativecommons.org/licenses/by/4.0/deed.pt-br).

As duas licenças permitem uso comercial. Para citar o material didático, identifique
“ALP — Mateus Moura (@profmateusmoura)”, inclua o endereço do repositório de origem e a referência
à CC BY 4.0; se adaptar o conteúdo, descreva as alterações.

Materiais de terceiros identificados com licença própria conservam seus respectivos
avisos e condições. Os textos integrais das licenças são reproduzidos sem alterações
em seus termos; esta seção delimita sua aplicação ao material do repositório.
