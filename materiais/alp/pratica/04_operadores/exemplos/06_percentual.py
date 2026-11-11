# 06 — Percentual e atualização
# Objetivo: Calcular desconto sem confundir taxa e valor.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Uma taxa de 15% corresponde a 15 / 100.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Total: R$ 170.00'

preco = 200.0
taxa_percentual = 15.0
desconto = preco * taxa_percentual / 100
total = preco - desconto
print(f"Desconto: R$ {desconto:.2f}")
print(f"Total: R$ {total:.2f}")
# += é uma forma abreviada de atualizar a própria variável.
pontos = 10
pontos += 3
print("Pontos:", pontos)
# Outras atualizações abreviadas usadas nos próximos tópicos:
saldo = 20
saldo -= 5  # Equivale a saldo = saldo - 5.
produto = 2
produto *= 3  # Equivale a produto = produto * 3.
restante = 123
restante //= 10  # Equivale a restante = restante // 10.
print("Após atualizações:", saldo, produto, restante)
