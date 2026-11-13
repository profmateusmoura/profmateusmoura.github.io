# Compare dois cenários — Testar comportamentos de objetos
#
# Use as mesmas definições dos exemplos deste tópico e compare estes trechos. Antes de executar, registre o estado inicial, as chamadas e o resultado esperado de cada um. Explique a razão da diferença.
#
# CENÁRIO A
# e = Estoque(5)
# e.retirar(5)
# assert e.saldo == 0
# print("Fronteira: OK")
#
# CENÁRIO B
# e = Estoque(5)
# try:
#     e.retirar(6)
# except ValueError:
#     pass
# else:
#     raise AssertionError("A retirada deveria falhar")
# assert e.saldo == 5
# print("Falha preserva estado: OK")
#
# Conferência: as saídas esperadas estão nos cabeçalhos dos exemplos 02 e 03. Sua entrega deve explicar o comportamento, não apenas reproduzir essas saídas.
