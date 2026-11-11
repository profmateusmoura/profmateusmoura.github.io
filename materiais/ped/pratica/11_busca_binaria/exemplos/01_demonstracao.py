# 01 — Reduza o intervalo
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

valores = [2, 4, 6, 8, 10, 12, 14]
inicio, fim, alvo = 0, 6, 12
while inicio <= fim:
    meio = (inicio + fim) // 2
    if valores[meio] == alvo:
        print(meio)
        break
    if valores[meio] < alvo:
        inicio = meio + 1
    else:
        fim = meio - 1
