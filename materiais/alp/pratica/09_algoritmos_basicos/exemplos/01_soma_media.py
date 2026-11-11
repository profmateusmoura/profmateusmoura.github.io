# 01 — Soma e média de entradas
# Objetivo: Resumir valores à medida que chegam.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Nenhum histórico é necessário quando só queremos soma e média.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   3
#   4
#   6
#   8
# Confira na saída: 'Média: 6.00'

quantidade = int(input("Quantidade positiva de valores: "))
soma = 0.0
for ordem in range(1, quantidade + 1):
    valor = float(input(f"Valor {ordem}: "))
    soma += valor
# A quantidade positiva evita divisão por zero.
media = soma / quantidade
print(f"Soma: {soma:.2f}")
print(f"Média: {media:.2f}")
