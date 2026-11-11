# 04 — Redução pela metade
# Objetivo: compreender redução pela metade.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 4

n, passos = 16, 0
while n > 1:
    n //= 2
    passos += 1
print(passos)
