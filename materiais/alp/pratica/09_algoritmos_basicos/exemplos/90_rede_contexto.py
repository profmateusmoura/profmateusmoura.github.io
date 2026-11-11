# Extremos de vendas sem histórico — cenário didático Lojas Blue
# Objetivo: Calcular o maior valor sem listas ou funções próprias.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Maior venda: 129.90'
# Entradas guiadas, uma por solicitação:
#   3
#   24.9
#   129.9
#   18.9

quantidade = int(input("Quantidade positiva de vendas: "))
maior = float(input("Primeira venda não negativa: "))
for ordem in range(2, quantidade + 1):
    valor = float(input(f"Venda {ordem}, não negativa: "))
    if valor > maior:
        maior = valor
print(f"Maior venda: {maior:.2f}")
# O primeiro dado inicializa o candidato; não há max ou coleção.
