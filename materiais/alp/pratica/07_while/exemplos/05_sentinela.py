# 05 — Leitura com sentinela
# Objetivo: Encerrar por um valor especial que não entra na soma.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A primeira leitura ocorre antes do teste; as demais ficam no fim do corpo.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   4
#   -1
#   0
# Confira na saída: 'Total: 3'

total = 0
numero = int(input("Inteiro para somar; zero encerra: "))
while numero != 0:
    total += numero
    # Esta nova leitura permite chegar à sentinela.
    numero = int(input("Inteiro para somar; zero encerra: "))
print("Total:", total)
# Se a primeira entrada for zero, não processamos nenhum valor.
