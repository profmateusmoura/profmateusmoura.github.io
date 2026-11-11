# 10 — Acumular total e média
# Objetivo: compreender acumular total e média.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 60 20.0

precos = [10, 20, 30]
total = 0
for preco in precos:
    total += preco
print(total, total / len(precos))
