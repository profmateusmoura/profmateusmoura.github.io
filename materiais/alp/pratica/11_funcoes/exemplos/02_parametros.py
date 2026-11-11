# 02 — Parâmetros e argumentos
# Objetivo: Receber dados sem fazer input dentro da função.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Parâmetro é o nome na definição; argumento é o valor na chamada.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Olá, Bruno!'

def saudar(nome):
    """Exiba uma saudação para nome, um texto; não retorne resultado."""
    print(f"Olá, {nome}!")

# O mesmo código trabalha com argumentos diferentes.
saudar("Ana")
saudar("Bruno")
# Cada chamada possui seu próprio parâmetro local nome.
