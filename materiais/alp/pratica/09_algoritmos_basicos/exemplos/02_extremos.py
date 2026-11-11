# 02 — Maior e menor de várias entradas
# Objetivo: Inicializar extremos com um dado real.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O primeiro valor inicia os dois candidatos, inclusive quando todos são negativos.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   3
#   -5
#   -9
#   -2
# Confira na saída: 'Menor: -9.0'

quantidade = int(input("Quantidade positiva: "))
primeiro = float(input("Valor 1: "))
maior = primeiro
menor = primeiro
# O primeiro já foi processado; começamos a contagem em dois.
for ordem in range(2, quantidade + 1):
    valor = float(input(f"Valor {ordem}: "))
    if valor > maior:
        maior = valor
    if valor < menor:
        menor = valor
print("Maior:", maior)
print("Menor:", menor)
