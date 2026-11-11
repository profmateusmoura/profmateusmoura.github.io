# 07 — Guardar uma entrada convertida
# Objetivo: Ler números depois de conhecer variáveis e tipos.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A conversão altera o tipo; nenhuma conta é feita neste exemplo.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   18
#   1.75
# Confira na saída: 'Altura informada: 1.75'

# input é avaliado primeiro; int converte; = guarda o resultado.
idade = int(input("Idade inteira: "))
# Use ponto para digitar a parte decimal.
altura = float(input("Altura em metros: "))
print("Idade informada:", idade)
print("Tipo da idade:", type(idade))
print("Altura informada:", altura)
print("Tipo da altura:", type(altura))
# Suponha digitação numérica válida. Não vamos validar a entrada aqui.
