# 14 — Média somente dos positivos
# Objetivo: Manter soma e contagem do mesmo grupo.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A média só existe se ao menos um valor foi selecionado.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   -2
#   0
#   2
#   4
#   -1
# Confira na saída: 'Média positiva: 3.0'

soma = 0.0
positivos = 0
for ordem in range(1, 6):
    valor = float(input(f"Valor {ordem}: "))
    if valor > 0:
        soma += valor
        positivos += 1
if positivos > 0:
    print("Média positiva:", soma / positivos)
else:
    print("Nenhum positivo; média não calculada.")
