# 05 — Triângulo de comparações
# Objetivo: compreender triângulo de comparações.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 6

n, total = 4, 0
for i in range(n):
    for j in range(i):
        total += 1
print(total)
