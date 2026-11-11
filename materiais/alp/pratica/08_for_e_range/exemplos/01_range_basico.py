# 01 — range com um argumento
# Objetivo: Percorrer um intervalo numérico sem criar listas.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: range(5) fornece 0, 1, 2, 3 e 4: o limite final fica de fora.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Intervalo concluído'

# range descreve um intervalo; não convertemos o resultado em lista.
for numero in range(5):
    print(numero)
# O for controla a passagem ao próximo número automaticamente.
print("Intervalo concluído")
