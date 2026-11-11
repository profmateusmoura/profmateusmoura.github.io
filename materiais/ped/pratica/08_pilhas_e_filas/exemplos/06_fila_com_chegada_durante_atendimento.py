# 06 — Fila com chegada durante atendimento
# Objetivo: compreender fila com chegada durante atendimento.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# P1
# ['P2', 'P3']

from collections import deque
fila = deque(["P1", "P2"])
print(fila.popleft())
fila.append("P3")
print(list(fila))
