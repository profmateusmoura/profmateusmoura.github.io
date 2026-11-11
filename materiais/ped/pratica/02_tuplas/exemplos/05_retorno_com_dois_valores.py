# 05 — Retorno com dois valores
# Objetivo: compreender retorno com dois valores.
# Pré-requisitos: ALP e exemplos anteriores deste assunto.
# Como estudar: preveja, execute e registre o estado após cada operação.
# Execução guiada: sem entrada; dados didáticos no próprio arquivo.
# Saída de conferência:
# 2 8

def extremos(valores):
    """Retorna menor e maior de uma sequência não vazia."""
    return min(valores), max(valores)
menor, maior = extremos([8, 2, 5])
print(menor, maior)
