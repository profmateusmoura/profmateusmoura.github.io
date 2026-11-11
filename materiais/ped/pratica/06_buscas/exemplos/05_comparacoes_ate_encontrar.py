# 05 — Comparações até encontrar
# Objetivo: compreender comparações até encontrar.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 3

a, alvo, comparacoes = [8, 3, 6, 1], 6, 0
for v in a:
    comparacoes += 1
    if v == alvo:
        break
print(comparacoes)
