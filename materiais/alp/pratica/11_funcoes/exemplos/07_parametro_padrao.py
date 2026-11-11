# 07 — Parâmetro com valor padrão
# Objetivo: Tornar um argumento opcional.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O padrão é usado quando o chamador omite aquele argumento.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Três unidades: 25.5'

def calcular_total(preco, quantidade=1):
    """Retorne preco * quantidade; ambos devem ser não negativos."""
    return preco * quantidade

print("Uma unidade:", calcular_total(8.5))
print("Três unidades:", calcular_total(8.5, 3))
# Parâmetros obrigatórios vêm antes dos que possuem padrão.
# Usamos apenas valores escalares como parâmetros e retornos.
