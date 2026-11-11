# 09 — Filtrar sem modificar o percurso
# Objetivo: compreender filtrar sem modificar o percurso.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [2, 8]
# [2, 7, 1, 8]

a = [2, 7, 1, 8]
pares = []
for valor in a:
    if valor % 2 == 0:
        pares.append(valor)
print(pares)
print(a)
