# 06 — Verificação e invariante
# Objetivo: Explicar por que um resultado é coerente.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Invariante é uma propriedade que permanece válida durante a repetição.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Verificações concluídas'

def somar_ate(limite):
    """Retorne 1 + ... + limite; limite deve ser inteiro não negativo."""
    soma = 0
    # Antes de cada volta, soma contém os inteiros anteriores a atual.
    for atual in range(1, limite + 1):
        soma += atual
        # Depois da volta, soma contém os inteiros de 1 até atual.
    return soma

# Para limite 3: (atual, soma após corpo) é 1/1, 2/3, 3/6.
# Não construímos pares ou coleções; esta é só uma anotação no papel.
assert somar_ate(0) == 0  # Caso sem repetições.
assert somar_ate(1) == 1  # Menor caso com uma repetição.
assert somar_ate(3) == 6  # Caso usual.
# assert serve para conferir hipóteses, não para validar entrada de usuário.
for limite in range(6):
    esperado = limite * (limite + 1) // 2
    assert somar_ate(limite) == esperado
print("Verificações concluídas")
# Se o laço usasse range(1, limite), o caso limite 1 revelaria a falha.
