# 01 — Escolha um ramo da árvore
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

arvore = {8: (3, 10), 3: (1, 6), 10: (None, None), 1: (None, None), 6: (None, None)}
atual, alvo = 8, 6
while atual is not None:
    print(atual)
    if atual == alvo:
        break
    esquerda, direita = arvore[atual]
    atual = esquerda if alvo < atual else direita
