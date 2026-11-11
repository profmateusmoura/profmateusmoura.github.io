# 06 — Fatorial com caso base
# Objetivo: compreender fatorial com caso base.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 24

def fatorial(n):
    """Calcula n! para n inteiro não negativo."""
    if n == 0:
        return 1
    return n * fatorial(n - 1)
print(fatorial(4))
