# 03 — Laços consecutivos
# Objetivo: compreender laços consecutivos.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 8

n, contador = 4, 0
for _ in range(n):
    contador += 1
for _ in range(n):
    contador += 1
print(contador)
