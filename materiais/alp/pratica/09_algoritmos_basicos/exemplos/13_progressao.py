# 13 — Progressão aritmética
# Objetivo: Gerar termos a partir de um estado e um passo.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A razão pode ser positiva, zero ou negativa.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   10
#   -3
#   4
# Confira na saída: 'Termo 4: 1'

termo = int(input("Primeiro termo: "))
razao = int(input("Razão: "))
quantidade = int(input("Quantidade não negativa: "))
for ordem in range(1, quantidade + 1):
    print(f"Termo {ordem}: {termo}")
    termo += razao
# Não precisamos guardar os termos anteriores para produzir o seguinte.
