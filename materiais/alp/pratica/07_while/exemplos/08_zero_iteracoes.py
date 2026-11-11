# 08 — Laço que pode não executar
# Objetivo: Distinguir teste de condição e execução do corpo.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: while testa antes da primeira repetição.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   2
# Confira na saída: 'Retiradas de 3: 0'

saldo = int(input("Saldo inteiro não negativo: "))
retiradas = 0
while saldo >= 3:
    saldo -= 3
    retiradas += 1
print("Retiradas de 3:", retiradas)
print("Saldo restante:", saldo)
# Com saldo dois, a condição é falsa já na primeira avaliação.
