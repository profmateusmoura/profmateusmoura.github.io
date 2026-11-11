# 04 — Percurso em pré-ordem
# Objetivo: compreender percurso em pré-ordem.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# A
# B
# D
# C

arvore = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}
def visitar(no):
    """Visita um nó antes de seus filhos na árvore fornecida."""
    print(no)
    for filho in arvore[no]:
        visitar(filho)
visitar("A")
