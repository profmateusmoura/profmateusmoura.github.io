# 01 — Contador crescente
# Objetivo: Identificar início, condição e atualização.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Sem a atualização, a condição continuaria verdadeira indefinidamente.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Ao terminar: 6'

contador = 1  # Estado inicial: primeiro valor a mostrar.
while contador <= 5:
    print(contador)
    # Atualizamos depois de mostrar o valor atual.
    contador += 1
# Ao sair, o contador vale seis, pois a condição já falhou.
print("Ao terminar:", contador)
