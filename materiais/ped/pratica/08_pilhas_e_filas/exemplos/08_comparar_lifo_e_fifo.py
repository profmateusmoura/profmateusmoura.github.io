# 08 — Comparar LIFO e FIFO
# Objetivo: compreender comparar lifo e fifo.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 3 1

from collections import deque
pilha = [1, 2, 3]
fila = deque([1, 2, 3])
print(pilha.pop(), fila.popleft())
