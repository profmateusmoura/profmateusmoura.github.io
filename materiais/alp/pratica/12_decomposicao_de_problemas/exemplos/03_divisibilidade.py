# 03 — Serviço de divisibilidade
# Objetivo: Combinar validação reutilizável e função de decisão.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A função de cálculo recebe dados prontos, sem depender do terminal.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   12
#   3
# Confira na saída: '12 é divisível por 3.'

# Plano: obter dois positivos -> testar -> relatar.
def ler_positivo(mensagem):
    """Leia e retorne um inteiro estritamente positivo."""
    while True:
        try:
            numero = int(input(mensagem))
        except ValueError:
            print("Use um inteiro.")
            continue
        if numero > 0:
            return numero
        print("Use um valor positivo.")

def eh_divisivel(numero, divisor):
    """Retorne se divisor divide numero; ambos devem ser positivos."""
    return numero % divisor == 0

def mostrar_resultado(numero, divisor, divisivel):
    """Apresente o teste entre dois positivos e um resultado bool."""
    if divisivel:
        print(f"{numero} é divisível por {divisor}.")
    else:
        print(f"{numero} não é divisível por {divisor}.")

def main():
    """Integre as etapas do teste de divisibilidade."""
    numero = ler_positivo("Número: ")
    divisor = ler_positivo("Divisor: ")
    resposta = eh_divisivel(numero, divisor)
    mostrar_resultado(numero, divisor, resposta)

if __name__ == "__main__":
    main()
