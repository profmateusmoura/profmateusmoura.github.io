# 03 — Todas as ocorrências
# Objetivo: compreender todas as ocorrências.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [0, 2]

a = [2, 5, 2, 7]
print([i for i, v in enumerate(a) if v == 2])
