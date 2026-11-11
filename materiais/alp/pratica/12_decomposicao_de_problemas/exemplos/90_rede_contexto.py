# Serviço escalar de reposição — cenário didático Lojas Blue
# Objetivo: Separar leitura validada, cálculo e apresentação.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Reposição sugerida: 4'
# Entradas guiadas, uma por solicitação:
#   4
#   8

def ler_nao_negativo(mensagem):
    """Leia e retorne um inteiro não negativo, repetindo entradas inválidas."""
    while True:
        try:
            valor = int(input(mensagem))
        except ValueError:
            print("Digite um inteiro.")
            continue
        if valor >= 0:
            return valor
        print("Não use negativos.")

def sugerir(saldo, minimo):
    """Retorne a falta até o mínimo para inteiros não negativos."""
    if saldo < minimo:
        return minimo - saldo
    return 0

def main():
    """Coordene a conferência de uma posição de estoque por execução."""
    saldo = ler_nao_negativo("Saldo: ")
    minimo = ler_nao_negativo("Mínimo: ")
    print("Reposição sugerida:", sugerir(saldo, minimo))

if __name__ == "__main__":
    main()
