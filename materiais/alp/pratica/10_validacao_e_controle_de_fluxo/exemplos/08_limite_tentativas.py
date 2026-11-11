# 08 — Validação com limite de tentativas
# Objetivo: Combinar faixa válida e controle de término.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O contador avança em toda tentativa, inclusive as entradas inválidas.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   abc
#   8
#   5
# Confira na saída: 'Aceito: 5'

tentativas = 0
aceito = False
while tentativas < 3 and not aceito:
    tentativas += 1
    try:
        numero = int(input("Inteiro de 1 a 5: "))
    except ValueError:
        print("Formato inválido")
    else:
        if 1 <= numero <= 5:
            # Reutilizamos a comparação encadeada ensinada em operadores.
            aceito = True
        else:
            print("Fora da faixa")
if aceito:
    print("Aceito:", numero)
else:
    print("Limite atingido")
