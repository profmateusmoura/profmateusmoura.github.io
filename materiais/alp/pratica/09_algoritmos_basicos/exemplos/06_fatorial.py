# 06 — Fatorial
# Objetivo: Acumular um produto e tratar zero naturalmente.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O produto vazio permanece um: por isso 0! resulta em 1.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   5
# Confira na saída: '5! = 120'

numero = int(input("Inteiro não negativo: "))
fatorial = 1
for fator in range(2, numero + 1):
    fatorial *= fator
print(f"{numero}! = {fatorial}")
# Negativos estão fora da precondição; validação aparece no tópico 10.
