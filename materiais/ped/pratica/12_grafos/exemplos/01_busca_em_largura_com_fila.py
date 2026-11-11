# 01 — Busca em largura com fila
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

from collections import deque
grafo = {"A": ["B", "C"], "B": ["A", "D"], "C": ["A"], "D": ["B"]}
fila, vistos = deque(["A"]), {"A"}
while fila:
    atual = fila.popleft()
    print(atual)
    for vizinho in grafo[atual]:
        if vizinho not in vistos:
            vistos.add(vizinho)
            fila.append(vizinho)
