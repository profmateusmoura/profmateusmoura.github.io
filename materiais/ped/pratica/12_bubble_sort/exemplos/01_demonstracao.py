# 01 — Trocas entre vizinhos
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

valores = [3, 2, 1]
for fim in range(len(valores)-1, 0, -1):
    for i in range(fim):
        if valores[i] > valores[i+1]:
            valores[i], valores[i+1] = valores[i+1], valores[i]
print(valores)
