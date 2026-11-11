# 14 — Compreensão com transformação
# Objetivo: compreender compreensão com transformação.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [4, 8]

a = [1, 2, 3, 4]
print([v * 2 for v in a if v % 2 == 0])
