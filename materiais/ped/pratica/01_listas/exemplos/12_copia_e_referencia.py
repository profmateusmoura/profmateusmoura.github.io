# 12 — Cópia e referência
# Objetivo: compreender cópia e referência.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [9, 2] [9, 2] [1, 2]

a = [1, 2]
b = a
c = a.copy()
b[0] = 9
print(a, b, c)
