# 04 — Vértice isolado
# Objetivo: compreender vértice isolado.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# ['C']

g = {"A": ["B"], "B": ["A"], "C": []}
print([no for no, vizinhos in g.items() if not vizinhos])
