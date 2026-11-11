# 04 — Resumo de uma turma sem histórico
# Objetivo: Decompor um processamento de várias entradas.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: O processamento retorna só a média; notas são consumidas uma por vez.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   3
#   7
#   8
#   9
# Confira na saída: 'Média da turma: 8.00'

def ler_quantidade():
    """Leia e retorne o tamanho positivo da turma como inteiro."""
    while True:
        try:
            quantidade = int(input("Quantidade de estudantes: "))
        except ValueError:
            print("Use um inteiro.")
            continue
        if quantidade > 0:
            return quantidade
        print("A turma deve ter ao menos um estudante.")

def ler_nota():
    """Leia e retorne uma nota de 0 a 10 inclusive."""
    while True:
        try:
            nota = float(input("Nota: "))
        except ValueError:
            print("Use um número.")
            continue
        if 0 <= nota <= 10:
            return nota
        print("Nota inválida.")

def processar_turma(quantidade):
    """Leia quantidade notas válidas e retorne a média; quantidade > 0.

    Esta função coordena leituras e acumulação; não preserva as notas.
    """
    soma = 0.0
    for ordem in range(1, quantidade + 1):
        print("Estudante", ordem)
        soma += ler_nota()
    return soma / quantidade

def main():
    """Leia o tamanho da turma, processe as notas e exiba a média."""
    quantidade = ler_quantidade()
    media = processar_turma(quantidade)
    print(f"Média da turma: {media:.2f}")

if __name__ == "__main__":
    main()
