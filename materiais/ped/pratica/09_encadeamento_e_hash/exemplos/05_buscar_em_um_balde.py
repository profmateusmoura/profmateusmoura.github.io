# 05 — Buscar em um balde
# Objetivo: compreender buscar em um balde.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# True

baldes = [[4, 8], [5], [], []]
alvo = 8
print(alvo in baldes[alvo % 4])
