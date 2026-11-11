# 05 — Busca em profundidade iterativa
# Objetivo: compreender busca em profundidade iterativa.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# A
# B
# D
# C

g = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}
pilha, vistos = ["A"], set()
while pilha:
    no = pilha.pop()
    if no in vistos:
        continue
    vistos.add(no)
    print(no)
    pilha.extend(reversed(g[no]))
