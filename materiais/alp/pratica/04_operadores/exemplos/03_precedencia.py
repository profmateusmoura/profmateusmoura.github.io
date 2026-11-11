# 03 — Precedência e parênteses
# Objetivo: Traduzir fórmulas sem ambiguidades.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Parênteses alteram a ordem das operações.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Média: 8.0'

print("Sem parênteses:", 2 + 3 * 4)
print("Com parênteses:", (2 + 3) * 4)
base = 5
# ** é potência; não confunda com multiplicação.
print("Quadrado:", base ** 2)
nota_1 = 7
nota_2 = 9
media = (nota_1 + nota_2) / 2
print("Média:", media)
