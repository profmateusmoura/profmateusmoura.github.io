# Compare dois cenários — Propriedades e interfaces
#
# Use as mesmas definições dos exemplos deste tópico e compare estes trechos. Antes de executar, registre o estado inicial, as chamadas e o resultado esperado de cada um. Explique a razão da diferença.
#
# CENÁRIO A
# p = Produto(2490)
# p.preco_centavos = 1990
# print(p.preco_centavos)
#
# CENÁRIO B
# p = Produto(2490)
# try:
#     p.preco_centavos = -1
# except ValueError as erro:
#     print(erro)
# print(p.preco_centavos)
#
# Conferência: as saídas esperadas estão nos cabeçalhos dos exemplos 02 e 03. Sua entrega deve explicar o comportamento, não apenas reproduzir essas saídas.
