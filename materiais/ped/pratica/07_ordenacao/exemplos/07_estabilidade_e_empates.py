# 07 — Estabilidade e empates
# Objetivo: compreender estabilidade e empates.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [('B', 1), ('A', 2), ('C', 2)]

a = [("A", 2), ("B", 1), ("C", 2)]
print(sorted(a, key=lambda item: item[1]))
