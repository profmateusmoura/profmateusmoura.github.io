# 06 — Projeto integrador: sessão de exercícios
# Objetivo: Integrar menu, validação, contagem, média e funções.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O estado da sessão permanece em main; cada função recebe o necessário.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   2
#   1
#   8
#   1
#   6
#   0
# Confira na saída: 'Média: 7.00'

# Requisitos: registrar pontuação de 0 a 10, consultar resumo e sair.
# Sem arquivos ou histórico: só quantidade, soma e maior pontuação.
def ler_pontuacao():
    """Leia e retorne uma pontuação numérica válida de 0 a 10."""
    while True:
        try:
            valor = float(input("Pontuação de 0 a 10: "))
        except ValueError:
            print("Use um número.")
            continue
        if 0 <= valor <= 10:
            return valor
        print("Pontuação fora da faixa.")

def calcular_media(soma, quantidade):
    """Retorne soma / quantidade; quantidade deve ser positiva."""
    return soma / quantidade

def mostrar_resumo(quantidade, soma, maior):
    """Exiba os totais; maior só é significativo quando quantidade > 0."""
    if quantidade == 0:
        print("Nenhum exercício registrado.")
        return  # Retorno sem valor: encerra a apresentação deste caso.
    print("Exercícios registrados:", quantidade)
    print(f"Média: {calcular_media(soma, quantidade):.2f}")
    print(f"Maior pontuação: {maior:.2f}")

def main():
    """Controle o estado e coordene os serviços da sessão."""
    quantidade = 0
    soma = 0.0
    maior = 0.0  # Só será consultado depois do primeiro registro.
    while True:
        print("1: registrar | 2: resumo | 0: encerrar")
        opcao = input("Opção: ")
        match opcao:
            case "1":
                valor = ler_pontuacao()
                if quantidade == 0 or valor > maior:
                    maior = valor
                soma += valor
                quantidade += 1
            case "2":
                mostrar_resumo(quantidade, soma, maior)
            case "0":
                mostrar_resumo(quantidade, soma, maior)
                break
            case _:
                print("Opção inválida.")

if __name__ == "__main__":
    main()
