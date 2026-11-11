# 05 — Função que responde uma pergunta
# Objetivo: Retornar bool para compor decisões.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A comparação já produz o valor True ou False necessário.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   0
# Confira na saída: 'O número é par.'

def eh_par(numero):
    """Retorne True se o inteiro numero for par; caso contrário, False."""
    return numero % 2 == 0

numero = int(input("Inteiro: "))
if eh_par(numero):
    print("O número é par.")
else:
    print("O número é ímpar.")
# Uma função de cálculo pode ser testada sem interação com o terminal.
