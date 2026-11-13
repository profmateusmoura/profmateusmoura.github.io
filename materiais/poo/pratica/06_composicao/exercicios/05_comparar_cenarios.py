# Compare dois cenários — Composição de objetos
#
# Use as mesmas definições dos exemplos deste tópico e compare estes trechos. Antes de executar, registre o estado inicial, as chamadas e o resultado esperado de cada um. Explique a razão da diferença.
#
# CENÁRIO A
# p = Produto("Shampoo", 1000)
# linha = LinhaPedido(p, 2)
# p.preco_centavos = 1500
# print(linha.subtotal())
#
# CENÁRIO B
# p = Produto("Shampoo", 1000)
# a = LinhaPedido(p, 1)
# p.preco_centavos = 1500
# b = LinhaPedido(p, 1)
# print(a.subtotal(), b.subtotal())
#
# Conferência: as saídas esperadas estão nos cabeçalhos dos exemplos 02 e 03. Sua entrega deve explicar o comportamento, não apenas reproduzir essas saídas.
