# 01 — Particione em torno do pivô
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

def quick_sort(valores):
    """Ordena os valores e devolve uma nova lista."""
    if len(valores) <= 1:
        return valores[:]
    pivo = valores[0]
    menores = [v for v in valores if v < pivo]
    iguais = [v for v in valores if v == pivo]
    maiores = [v for v in valores if v > pivo]
    return quick_sort(menores) + iguais + quick_sort(maiores)
print(quick_sort([3, 1, 4, 2, 3]))
