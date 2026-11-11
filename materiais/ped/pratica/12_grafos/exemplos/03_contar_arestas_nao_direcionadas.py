# 03 — Contar arestas não direcionadas
# Objetivo: compreender contar arestas não direcionadas.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 2

g = {"A": ["B", "C"], "B": ["A"], "C": ["A"]}
print(sum(len(v) for v in g.values()) // 2)
