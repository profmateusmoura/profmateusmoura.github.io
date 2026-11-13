# Compare dois cenários — Do registro ao objeto
#
# Use as mesmas definições dos exemplos deste tópico e compare estes trechos. Antes de executar, registre o estado inicial, as chamadas e o resultado esperado de cada um. Explique a razão da diferença.
#
# CENÁRIO A
# produto = {"nome": "Batom", "estoque": 2}
# try:
#     retirar(produto, 3)
# except ValueError as erro:
#     print(erro)
# print(produto["estoque"])
#
# CENÁRIO B
# produto = {"nome": "Creme", "estoque": 4}
# retirar(produto, 4)
# print(produto["estoque"])
#
# Conferência: as saídas esperadas estão nos cabeçalhos dos exemplos 02 e 03. Sua entrega deve explicar o comportamento, não apenas reproduzir essas saídas.
