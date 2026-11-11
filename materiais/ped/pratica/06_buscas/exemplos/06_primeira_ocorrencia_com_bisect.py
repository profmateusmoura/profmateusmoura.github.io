# 06 — Primeira ocorrência com bisect
# Objetivo: compreender primeira ocorrência com bisect.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 1
# 4

from bisect import bisect_left
a = [1, 3, 3, 3, 7]
i = bisect_left(a, 3)
print(i)
print(bisect_left(a, 4))
