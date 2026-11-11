# 06 — Mutabilidade interna
# Objetivo: compreender mutabilidade interna.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# ('A', [2, 3, 4])

registro = ("A", [2, 3])
registro[1].append(4)
print(registro)
