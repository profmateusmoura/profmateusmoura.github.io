# Contexto comum — Lojas Blue

Este é um cenário hipotético de uma rede de cosméticos, inspirado no material em `C:/dev/PRI`.
Não se trata de informação operacional de uma empresa real.
A fotografia fornecida contém 10 unidades (8 lojas e 2 CDs), 5 categorias, 20 produtos, 8 clientes,
5 canais, 18 posições de estoque, 8 pedidos, 6 solicitações de reposição e 7 eventos de histórico.

## Vocabulário e regras compartilhadas

- **Unidade:** uma loja ou um centro de distribuição, identificada por id. Sete Lagoas Centro tem id 1; CD Contagem tem id 20.
- **Produto:** id, nome, categoria e preço. O produto 1 é Shampoo Nutritivo 350 ml, preço 24.90; o produto 4 é Perfume Floral 100 ml, preço 129.90.
- **Posição de estoque:** combinação de unidade_id e produto_id. O mesmo produto em duas unidades ocupa duas posições diferentes.
- **Estoque crítico:** quantidade estritamente menor que mínimo. Igualdade com o mínimo não é crítica. Há 7 posições críticas na fotografia original.
- **Retirada didática:** quantidade inteira positiva que não excede o saldo. Falha deve preservar o estado; saldo zero é permitido depois de retirada válida.
- **Reposição sugerida até o mínimo:** diferença entre mínimo e saldo quando houver falta; caso contrário, zero. Isso é uma sugestão calculada, diferente da quantidade de uma solicitação já cadastrada.
- **Pedido:** referência a cliente, unidade e canal, além de total e status. O arquivo não contém itens de pedido; não invente produtos vendidos a partir do total.
- **Solicitação de reposição:** pedido interno entre operações da rede. Nas atividades que usam prioridade, adote a regra didática explícita: 3 é mais urgente que 2, que é mais urgente que 1; empates por id crescente.
- **Histórico:** a coluna ordem determina a sequência; o histórico disponível não cobre todos os pedidos.

## Mesma situação, três representações

| Situação | ALP | PED | POO |
|---|---|---|---|
| Produto 1 | nome e preço em variáveis separadas | registro em dicionário e catálogo em lista | objeto Produto |
| Estoque da unidade 1 | quantidade 18 e mínimo 10 | registro identificado pelo par de ids | objeto Estoque que protege retiradas |
| Selecionar faltas | contar entradas uma de cada vez | filtrar registros e relacionar tabelas | serviço que consulta objetos de estoque |
| Reposição | calcular uma sugestão numérica | ordenar e enfileirar solicitações | serviço com uma política de prioridade |
| Persistência | ausente | JSON depois de coleções e arquivos | adaptador separado do domínio |

## Valores e simulações

Os exemplos de ALP e os primeiros de PED trazem todos os valores necessários escritos no código ou no enunciado.
Novas retiradas, entradas e preços promocionais são simulações independentes, não atualizações da fotografia.
Em PED, os preços originais permanecem como números do JSON e a saída usa duas casas.
Em POO, os exercícios de comportamento monetário usam centavos inteiros; 24.90 corresponde a 2490 centavos.
O adaptador de POO converte o preço no momento de ler o arquivo e explica esse limite.
Não há sincronização automática entre os cursos nem gravação na base original de PRI.
