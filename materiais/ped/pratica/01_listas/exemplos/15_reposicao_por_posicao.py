# 15 — Reposição por posição
# Objetivo: compreender reposição por posição.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [3, 5, 3]

estoques = [0, 5, 2]
for i in range(len(estoques)):
    if estoques[i] < 3:
        estoques[i] = 3
print(estoques)
