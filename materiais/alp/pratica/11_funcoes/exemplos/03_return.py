# 03 — Retornar um resultado
# Objetivo: Separar cálculo e apresentação.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: return entrega um valor ao chamador; print apenas escreve na tela.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Dobro mais três: 17'

def calcular_dobro(numero):
    """Retorne o dobro de numero, que deve ser int ou float."""
    return numero * 2

resultado = calcular_dobro(7)
# O retorno pode participar de outras contas.
total = resultado + 3
print("Dobro:", resultado)
print("Dobro mais três:", total)
# Sem return explícito, uma função devolve None, não o texto de print.
