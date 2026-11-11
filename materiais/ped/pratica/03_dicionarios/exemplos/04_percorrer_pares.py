# 04 — Percorrer pares
# Objetivo: compreender percorrer pares.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# A 3
# B 7

estoque = {"A": 3, "B": 7}
for nome, quantidade in estoque.items():
    print(nome, quantidade)
