# 10 — Função de leitura validada
# Objetivo: Isolar a interação do cálculo.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Esta função tem entrada interativa por responsabilidade explícita.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   abc
#   0
#   4
# Confira na saída: 'Dobro da quantidade: 8'

def ler_inteiro_positivo(mensagem):
    """Solicite até obter um inteiro positivo e retorne esse inteiro.

    mensagem é o texto do convite; formato e faixa inválidos são recusados.
    """
    while True:
        try:
            numero = int(input(mensagem))
        except ValueError:
            print("Digite um inteiro.")
            continue
        if numero > 0:
            return numero  # Encerra a função e seu laço.
        print("O inteiro deve ser positivo.")

quantidade = ler_inteiro_positivo("Quantidade: ")
print("Dobro da quantidade:", quantidade * 2)
# Cálculos continuam fora da função de leitura.
