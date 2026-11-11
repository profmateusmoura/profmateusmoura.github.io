# 04 — Quantidade definida de leituras
# Objetivo: Processar dados sem armazenar uma coleção.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O valor lido é usado imediatamente e pode ser substituído na próxima volta.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   3
#   2
#   4
#   6
# Confira na saída: 'Média: 4.0'

quantidade = int(input("Quantidade de valores, maior que zero: "))
contador = 0
soma = 0.0
while contador < quantidade:
    valor = float(input("Valor: "))
    soma += valor
    contador += 1
# A quantidade positiva é uma precondição deste exemplo.
print("Média:", soma / quantidade)
