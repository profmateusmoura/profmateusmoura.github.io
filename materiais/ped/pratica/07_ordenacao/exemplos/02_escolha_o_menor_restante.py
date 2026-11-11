# 02 — Escolha o menor restante
# Objetivo: acompanhar os estados e explicar o resultado.
# Pré-requisitos: conceitos de ALP e temas anteriores de PED.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: não solicita entrada; usa dados didáticos no próprio código.
# Confira a saída no GUIA_DOCENTE.md, depois de registrar sua previsão.

valores = [3, 1, 2]
for i in range(len(valores)-1):
    menor = i
    for j in range(i+1, len(valores)):
        if valores[j] < valores[menor]:
            menor = j
    valores[i], valores[menor] = valores[menor], valores[i]
print(valores)
