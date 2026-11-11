# 06 — Tabuada
# Objetivo: Separar valor fixo e fator que varia.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O número informado fica fixo enquanto o fator percorre o intervalo.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   3
# Confira na saída: '3 x 10 = 30'

numero = int(input("Número para a tabuada: "))
for fator in range(1, 11):
    resultado = numero * fator
    print(f"{numero} x {fator} = {resultado}")
# Dez fatores geram exatamente dez linhas de resultados.
