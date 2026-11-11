# 03 — Sentinela e ausência de dados
# Objetivo: Separar encerramento, validação e processamento.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: -1 encerra; outros negativos são recusados; zero é um dado válido.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   -2
#   0
#   6
#   -1
# Confira na saída: 'Média: 3.0'

quantidade = 0
soma = 0.0
valor = float(input("Valor não negativo; -1 encerra: "))
while valor != -1:
    # float("inf") representa infinito positivo, usado como limite aberto.
    # A comparação exige valor finito e não negativo. Não estamos
    # estudando operações com infinito; apenas recusando entradas especiais.
    if 0 <= valor < float("inf"):
        soma += valor
        quantidade += 1
    else:
        print("Valor não finito ou negativo recusado.")
    valor = float(input("Valor não negativo; -1 encerra: "))
if quantidade == 0:
    print("Nenhum dado válido.")
else:
    print("Média:", soma / quantidade)
# Pressupõe conversão numérica válida; foco no protocolo da sentinela.
