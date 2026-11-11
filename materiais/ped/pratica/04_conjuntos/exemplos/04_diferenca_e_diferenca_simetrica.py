# 04 — Diferença e diferença simétrica
# Objetivo: compreender diferença e diferença simétrica.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [1, 3]
# [1, 3, 4]

a, b = {1, 2, 3}, {2, 4}
print(sorted(a - b))
print(sorted(a ^ b))
