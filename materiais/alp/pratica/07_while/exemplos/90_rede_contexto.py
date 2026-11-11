# Fechamento parcial do caixa — cenário didático Lojas Blue
# Objetivo: Acumular vendas uma por vez com sentinela.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Total do caixa: 74.70'
# Entradas guiadas, uma por solicitação:
#   24.9
#   49.8
#   0

total = 0.0
quantidade = 0
valor = float(input("Valor de venda positivo; zero encerra: "))
# Neste tópico considere entradas válidas: valores positivos ou zero.
while valor != 0:
    total += valor
    quantidade += 1
    valor = float(input("Valor de venda positivo; zero encerra: "))
print("Vendas:", quantidade)
print(f"Total do caixa: {total:.2f}")
# Não guardamos as vendas: apenas quantidade e total.
