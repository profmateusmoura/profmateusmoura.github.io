# 04 — Divida e intercale
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

def merge_sort(valores):
    """Ordena os valores e devolve uma nova lista."""
    if len(valores) <= 1:
        return valores[:]
    meio = len(valores) // 2
    a, b = merge_sort(valores[:meio]), merge_sort(valores[meio:])
    resultado = []
    i = j = 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            resultado.append(a[i]); i += 1
        else:
            resultado.append(b[j]); j += 1
    return resultado + a[i:] + b[j:]
print(merge_sort([4, 1, 3, 2]))
