# 06 — Distâncias em número de arestas
# Objetivo: compreender distâncias em número de arestas.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# {'A': 0, 'B': 1, 'C': 2}

from collections import deque
g = {"A": ["B"], "B": ["A", "C"], "C": ["B"]}
distancia, fila = {"A": 0}, deque(["A"])
while fila:
    no = fila.popleft()
    for vizinho in g[no]:
        if vizinho not in distancia:
            distancia[vizinho] = distancia[no] + 1
            fila.append(vizinho)
print(distancia)
