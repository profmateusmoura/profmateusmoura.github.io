# 03 — Passo diferente de um
# Objetivo: Gerar uma progressão sem testar cada inteiro.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O terceiro argumento indica quanto avançar a cada volta.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Par: 10'

# Começamos em dois e avançamos dois; a parada doze é excluída.
for par in range(2, 12, 2):
    print("Par:", par)
# Um passo zero não é permitido por range.
