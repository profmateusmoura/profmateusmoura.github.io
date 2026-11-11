# 08 — Contrato e retornos por caminho
# Objetivo: Documentar a entrada aceita e os limites.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Cada caminho retorna um único texto.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Nota 5: recuperação'

def classificar_nota(nota):
    """Receba uma nota numérica finita e retorne sua classificação.

    Retorne inválida fora da faixa, aprovada a partir de 7,
    recuperação a partir de 5 e reprovada abaixo de 5.
    """
    if nota < 0 or nota > 10:
        return "inválida"
    if nota >= 7:
        return "aprovada"
    if nota >= 5:
        return "recuperação"
    return "reprovada"

# Cada return encerra imediatamente a chamada atual.
print("Nota 7:", classificar_nota(7))
print("Nota 5:", classificar_nota(5))
print("Nota -1:", classificar_nota(-1))
