# 06 — Percurso em ordem na BST
# Objetivo: compreender percurso em ordem na bst.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 2
# 4
# 6

arvore = {4: (2, 6), 2: (None, None), 6: (None, None)}
def em_ordem(no):
    """Percorre esquerda, nó e direita; None indica ausência."""
    if no is None:
        return
    esquerda, direita = arvore[no]
    em_ordem(esquerda)
    print(no)
    em_ordem(direita)
em_ordem(4)
