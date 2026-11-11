# 07 — Rodízio de tarefas
# Objetivo: compreender rodízio de tarefas.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# A
# B
# C
# A

from collections import deque
fila = deque(["A", "B", "C"])
for _ in range(4):
    tarefa = fila.popleft()
    print(tarefa)
    fila.append(tarefa)
