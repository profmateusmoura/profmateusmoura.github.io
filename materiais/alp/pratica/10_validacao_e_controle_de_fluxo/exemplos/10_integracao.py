# 10 — Resumo de valores com entrada robusta
# Objetivo: Integrar conversão, sentinela e acumuladores.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O laço só encerra ao converter e reconhecer -1.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   abc
#   -3
#   0
#   6
#   -1
# Confira na saída: 'Média: 3.0'

soma = 0
quantidade = 0
while True:
    try:
        numero = int(input("Inteiro não negativo; -1 encerra: "))
    except ValueError:
        print("Formato inválido")
        continue  # Pede uma nova entrada antes de usar numero.
    if numero == -1:
        break
    if numero < 0:
        print("Negativo recusado")
        continue
    soma += numero
    quantidade += 1
print("Quantidade:", quantidade)
if quantidade > 0:
    print("Média:", soma / quantidade)
else:
    print("Sem dados para média")
