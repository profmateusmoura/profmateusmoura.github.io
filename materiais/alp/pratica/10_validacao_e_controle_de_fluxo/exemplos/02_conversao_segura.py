# 02 — Conversão segura com try/except
# Objetivo: Distinguir formato inválido de valor fora da faixa.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Capturamos somente ValueError da conversão; não usamos except genérico.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   abc
#   0
#   3
# Confira na saída: 'Quantidade aceita: 3'

valido = False
while not valido:
    texto = input("Quantidade inteira positiva: ")
    try:
        quantidade = int(texto)
    except ValueError:
        # Letras ou texto como 2.5 não representam um int válido.
        print("Digite um número inteiro.")
    else:
        # Este else pertence ao try: só roda se não houve ValueError.
        if quantidade > 0:
            valido = True
        else:
            print("O inteiro deve ser positivo.")
print("Quantidade aceita:", quantidade)
