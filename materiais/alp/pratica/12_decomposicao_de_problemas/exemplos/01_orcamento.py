# 01 — Decompor um orçamento
# Objetivo: Transformar entrada, cálculo e saída em etapas nomeadas.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O fluxo fica em main; cada função tem uma responsabilidade.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   8.5
#   3
# Confira na saída: 'Total do orçamento: R$ 25.50'

# Plano: ler preço -> ler quantidade -> calcular -> mostrar.
def ler_preco():
    """Leia e retorne um preço não negativo, recusando formato inválido."""
    while True:
        try:
            preco = float(input("Preço (ponto decimal): "))
        except ValueError:
            print("Digite um número.")
            continue
        # Também recusa NaN e infinito, que float aceita como texto.
        if 0 <= preco < float("inf"):
            return preco
        print("Informe um preço finito não negativo.")

def ler_quantidade():
    """Leia e retorne uma quantidade inteira positiva."""
    while True:
        try:
            quantidade = int(input("Quantidade: "))
        except ValueError:
            print("Digite um inteiro.")
            continue
        if quantidade > 0:
            return quantidade
        print("Use quantidade positiva.")

def calcular_total(preco, quantidade):
    """Retorne o total para preço não negativo e quantidade positiva."""
    return preco * quantidade

def mostrar_total(total):
    """Exiba total numérico com duas casas decimais."""
    print(f"Total do orçamento: R$ {total:.2f}")

def main():
    """Coordene a leitura, o cálculo e a apresentação do orçamento."""
    preco = ler_preco()
    quantidade = ler_quantidade()
    total = calcular_total(preco, quantidade)
    mostrar_total(total)

# Esta condição chama main quando o arquivo é executado diretamente.
# Ao importar o arquivo, as funções ficam disponíveis sem abrir a interação.
if __name__ == "__main__":
    main()
