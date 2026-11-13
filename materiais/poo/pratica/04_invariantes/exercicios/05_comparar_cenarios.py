# Compare dois cenários — Invariantes e validação
#
# Use as mesmas definições dos exemplos deste tópico e compare estes trechos. Antes de executar, registre o estado inicial, as chamadas e o resultado esperado de cada um. Explique a razão da diferença.
#
# CENÁRIO A
# e = Estoque(4)
# try:
#     e.retirar(5)
# except ValueError as erro:
#     print(erro)
# print(e.consultar())
#
# CENÁRIO B
# e = Estoque(4)
# try:
#     e.retirar(True)
# except ValueError as erro:
#     print(erro)
# print(e.consultar())
#
# Conferência: as saídas esperadas estão nos cabeçalhos dos exemplos 02 e 03. Sua entrega deve explicar o comportamento, não apenas reproduzir essas saídas.
