"""Escolha um ramo da árvore

Objetivo: acompanhar o exemplo e explicar cada estado.
Execute com Python 3. Antes de executar, preveja a saída.
Dados pequenos e didáticos; não é necessário banco de dados.
"""

arvore = {8: (3, 10), 3: (1, 6), 10: (None, None), 1: (None, None), 6: (None, None)}
atual, alvo = 8, 6
while atual is not None:
    print(atual)
    if atual == alvo:
        break
    esquerda, direita = arvore[atual]
    atual = esquerda if alvo < atual else direita
