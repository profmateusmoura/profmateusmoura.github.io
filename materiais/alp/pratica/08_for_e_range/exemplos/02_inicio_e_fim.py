# 02 — Início e fim
# Objetivo: Ajustar um intervalo ao limite inclusivo do problema.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Para incluir n, use n + 1 como parada.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   3
# Confira na saída: 'Número: 3'

limite = int(input("Limite inteiro não negativo: "))
for numero in range(1, limite + 1):
    print("Número:", numero)
# range(1, 1) seria vazio: nenhum número satisfaz os limites.
