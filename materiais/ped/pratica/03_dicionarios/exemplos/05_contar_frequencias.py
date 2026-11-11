# 05 — Contar frequências
# Objetivo: compreender contar frequências.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# {'A': 2, 'B': 1}

contagem = {}
for nome in ["A", "B", "A"]:
    contagem[nome] = contagem.get(nome, 0) + 1
print(contagem)
