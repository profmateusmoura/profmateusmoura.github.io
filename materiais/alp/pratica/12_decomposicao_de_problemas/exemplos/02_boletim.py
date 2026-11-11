# 02 — Boletim de duas notas
# Objetivo: Reutilizar uma leitura e manter o cálculo independente.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Duas chamadas da mesma função evitam duplicar a validação.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   6
#   8
# Confira na saída: 'Situação: Aprovado'

# Plano: duas leituras válidas -> média -> classificação -> saída.
def ler_nota(mensagem):
    """Leia e retorne uma nota numérica de 0 a 10 inclusive."""
    while True:
        try:
            nota = float(input(mensagem))
        except ValueError:
            print("Formato inválido.")
            continue
        if 0 <= nota <= 10:
            return nota
        print("Nota fora da faixa.")

def calcular_media(nota_1, nota_2):
    """Retorne a média aritmética de duas notas válidas."""
    return (nota_1 + nota_2) / 2

def classificar(media):
    """Retorne a situação para média válida; cortes em 5 e 7."""
    if media >= 7:
        return "Aprovado"
    if media >= 5:
        return "Recuperação"
    return "Reprovado"

def main():
    """Coordene o boletim sem guardar notas em coleções."""
    nota_1 = ler_nota("Nota 1: ")
    nota_2 = ler_nota("Nota 2: ")
    media = calcular_media(nota_1, nota_2)
    print(f"Média: {media:.1f}")
    print("Situação:", classificar(media))

if __name__ == "__main__":
    main()
