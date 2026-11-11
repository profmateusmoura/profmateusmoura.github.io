# Retirada com validação — cenário didático Lojas Blue
# Objetivo: Recusar formato, sinal e saldo insuficiente antes de alterar estado.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Saldo final: 15'
# Entradas guiadas, uma por solicitação:
#   abc
#   0
#   19
#   3

saldo = 18
while True:
    try:
        retirada = int(input("Retirada inteira positiva, até 18: "))
    except ValueError:
        print("Formato inválido")
        continue
    if retirada <= 0 or retirada > saldo:
        print("Retirada recusada; saldo preservado")
        continue
    saldo -= retirada
    break
print("Saldo final:", saldo)
