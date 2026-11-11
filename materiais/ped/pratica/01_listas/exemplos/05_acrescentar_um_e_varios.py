# 05 — Acrescentar um e vários
# Objetivo: compreender acrescentar um e vários.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# [1, [2, 3]]
# [1, 2, 3]

a = [1]
a.append([2, 3])
b = [1]
b.extend([2, 3])
print(a)
print(b)
