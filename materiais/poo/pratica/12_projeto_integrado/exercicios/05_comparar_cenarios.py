# Compare dois cenários — Projeto: reposição entre unidades
#
# Use as mesmas definições dos exemplos deste tópico e compare estes trechos. Antes de executar, registre o estado inicial, as chamadas e o resultado esperado de cada um. Explique a razão da diferença.
#
# CENÁRIO A
# a, b = Estoque("Centro", 8), Estoque("Norte", 2)
# try:
#     transferir(a, b, 9)
# except ValueError as erro:
#     print(erro)
# print(a.saldo, b.saldo)
#
# CENÁRIO B
# a, b = Estoque("Centro", 8), Estoque("Norte", 2)
# antes = a.saldo + b.saldo
# transferir(a, b, 8)
# print(a.saldo, b.saldo)
# print(a.saldo + b.saldo == antes)
#
# Conferência: as saídas esperadas estão nos cabeçalhos dos exemplos 02 e 03. Sua entrega deve explicar o comportamento, não apenas reproduzir essas saídas.
