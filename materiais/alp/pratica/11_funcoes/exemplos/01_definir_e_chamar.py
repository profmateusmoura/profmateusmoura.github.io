# 01 — Definir e chamar
# Objetivo: Distinguir definição de execução.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O corpo da função só executa quando há uma chamada.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Bem-vindo ao ALP!'

def mostrar_abertura():
    """Exiba a abertura do curso; não receba dados nem retorne resultado."""
    # Uma responsabilidade simples: apresentar uma mensagem.
    print("Bem-vindo ao ALP!")
    print("Leia, preveja, execute e pratique.")

# A definição acima apenas disponibiliza a função.
mostrar_abertura()
mostrar_abertura()  # Reutilizamos o mesmo comportamento.
