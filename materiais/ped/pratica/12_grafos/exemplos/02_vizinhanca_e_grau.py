# 02 — Vizinhança e grau
# Objetivo: compreender vizinhança e grau.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# ['B', 'C']
# 2

g = {"A": ["B", "C"], "B": ["A"], "C": ["A"]}
print(g["A"])
print(len(g["A"]))
