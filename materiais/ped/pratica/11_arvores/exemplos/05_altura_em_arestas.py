# 05 — Altura em arestas
# Objetivo: compreender altura em arestas.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 2

arvore = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}
def altura(no):
    """Retorna a altura em arestas; uma folha tem altura zero."""
    if not arvore[no]:
        return 0
    return 1 + max(altura(filho) for filho in arvore[no])
print(altura("A"))
