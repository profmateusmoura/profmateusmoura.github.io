# 05 — Menu de ferramentas numéricas
# Objetivo: Separar controle do menu e algoritmos puros.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Cada opção pede só um inteiro não negativo e retorna um escalar.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   1
#   0
#   2
#   204
#   0
# Confira na saída: 'Soma: 6'

def ler_nao_negativo():
    """Leia e retorne um inteiro maior ou igual a zero."""
    while True:
        try:
            numero = int(input("Inteiro não negativo: "))
        except ValueError:
            print("Formato inválido.")
            continue
        if numero >= 0:
            return numero
        print("Não use negativos.")

def calcular_fatorial(numero):
    """Retorne o fatorial do inteiro não negativo numero."""
    produto = 1
    for fator in range(2, numero + 1):
        produto *= fator
    return produto

def somar_algarismos(numero):
    """Retorne a soma dos algarismos do inteiro não negativo numero."""
    soma = 0
    while numero > 0:
        soma += numero % 10
        numero //= 10
    return soma

def main():
    """Mantenha o menu ativo até o usuário escolher zero."""
    while True:
        print("1: fatorial | 2: soma de algarismos | 0: sair")
        opcao = input("Opção: ")
        match opcao:
            case "1":
                numero = ler_nao_negativo()
                print("Fatorial:", calcular_fatorial(numero))
            case "2":
                numero = ler_nao_negativo()
                print("Soma:", somar_algarismos(numero))
            case "0":
                break
            case _:
                print("Opção inválida.")
    print("Programa encerrado")

if __name__ == "__main__":
    main()
