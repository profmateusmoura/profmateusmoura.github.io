# 12 — Contagem de dígitos
# Objetivo: Considerar explicitamente o caso zero.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O número zero possui um dígito, embora não entre no laço.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   0
# Confira na saída: 'Dígitos: 1'

numero = int(input("Inteiro não negativo: "))
restante = numero
if numero == 0:
    quantidade = 1
else:
    quantidade = 0
while restante > 0:
    quantidade += 1
    restante //= 10
print("Dígitos:", quantidade)
