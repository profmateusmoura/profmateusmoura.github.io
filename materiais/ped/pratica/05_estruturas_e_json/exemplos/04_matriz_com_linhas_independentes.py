# 04 — Matriz com linhas independentes
# Objetivo: compreender matriz com linhas independentes.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [[0, 7], [0, 0], [0, 0]]

matriz = [[0 for _ in range(2)] for _ in range(3)]
matriz[0][1] = 7
print(matriz)
