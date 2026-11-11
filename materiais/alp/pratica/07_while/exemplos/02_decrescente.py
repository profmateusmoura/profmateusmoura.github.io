# 02 — Contagem decrescente
# Objetivo: Aproximar o estado de uma condição de término.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O passo negativo combina com a comparação >=.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Fim da contagem'

restante = 5
while restante >= 1:
    print("Faltam:", restante)
    restante -= 1
print("Fim da contagem")
# Experimente iniciar com zero: o corpo não será executado.
