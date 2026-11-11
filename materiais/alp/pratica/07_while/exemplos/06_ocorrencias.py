# 06 — Contagem de ocorrências
# Objetivo: Contar somente valores que atendem a uma condição.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O número de leituras e o número de positivos são contagens diferentes.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   2
#   0
#   -3
#   7
# Confira na saída: 'Positivos: 2'

lidos = 0
positivos = 0
while lidos < 4:
    valor = int(input("Digite um inteiro: "))
    if valor > 0:
        positivos += 1
    lidos += 1  # Toda entrada conta como uma leitura.
print("Positivos:", positivos)
# Zero não é positivo nem negativo.
