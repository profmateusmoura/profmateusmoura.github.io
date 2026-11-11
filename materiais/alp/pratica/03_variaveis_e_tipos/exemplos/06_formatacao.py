# 06 — Apresentação de variáveis
# Objetivo: Usar f-strings e casas decimais.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Formatar a saída não muda o valor armazenado.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Medida armazenada: 1.23456'

produto = "Caneta"
preco = 3.5
# f antes das aspas permite inserir valores entre chaves.
# :.2f pede duas casas decimais na apresentação.
print(f"{produto}: R$ {preco:.2f}")
medida = 1.23456
print(f"Medida apresentada: {medida:.2f}")
print("Medida armazenada:", medida)
# float aproxima alguns decimais; este curso usa contas didáticas.
