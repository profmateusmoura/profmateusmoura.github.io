# 03 — Ocorrências e percentual
# Objetivo: Relacionar uma parte ao total de entradas.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O denominador é a quantidade total, e não o contador filtrado.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   4
#   7
#   6
#   9
#   5
# Confira na saída: 'Percentual: 50.0%'

quantidade = int(input("Quantidade positiva de notas: "))
aprovados = 0
for ordem in range(1, quantidade + 1):
    nota = float(input(f"Nota {ordem}, entre 0 e 10: "))
    if nota >= 7:
        aprovados += 1
percentual = aprovados * 100 / quantidade
print("Aprovados:", aprovados)
print(f"Percentual: {percentual:.1f}%")
