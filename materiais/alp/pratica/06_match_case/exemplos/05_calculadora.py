# 05 — Calculadora de uma operação
# Objetivo: Combinar seleção e proteção de divisão.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: match seleciona o operador; if verifica uma condição dentro do caso.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   8
#   /
#   2
# Confira na saída: 'Resultado: 4.0'

a = float(input("Primeiro número: "))
operador = input("Operação (+, -, *, /): ")
b = float(input("Segundo número: "))
match operador:
    case "+":
        print("Resultado:", a + b)
    case "-":
        print("Resultado:", a - b)
    case "*":
        print("Resultado:", a * b)
    case "/":
        if b == 0:
            print("Divisor não pode ser zero.")
        else:
            print("Resultado:", a / b)
    case _:
        print("Operação inválida")
