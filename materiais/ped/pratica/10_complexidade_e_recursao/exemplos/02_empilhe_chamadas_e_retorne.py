# 02 — Empilhe chamadas e retorne
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

def soma(n):
    """Calcula a soma de zero até n para um inteiro não negativo."""
    if n == 0:
        return 0
    return n + soma(n - 1)
print(soma(3))
