# 05 — Decisão aninhada
# Objetivo: Proteger uma operação com uma condição anterior.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A divisão só ocorre no ramo em que o divisor é diferente de zero.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   8
#   2
# Confira na saída: 'Quociente: 4.0'

numerador = float(input("Numerador: "))
divisor = float(input("Divisor: "))
if divisor == 0:
    print("Não é possível dividir por zero.")
else:
    resultado = numerador / divisor
    if resultado > 0:
        print("Resultado positivo")
    else:
        print("Resultado zero ou negativo")
    print("Quociente:", resultado)
