# 03 — Abra espaço e insira
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

valores = [3, 1, 2]
for i in range(1, len(valores)):
    atual = valores[i]
    j = i - 1
    while j >= 0 and valores[j] > atual:
        valores[j+1] = valores[j]
        j -= 1
    valores[j+1] = atual
print(valores)
