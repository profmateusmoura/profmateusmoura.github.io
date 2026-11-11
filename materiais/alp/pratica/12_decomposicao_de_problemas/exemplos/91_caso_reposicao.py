# Reposição: quatro posições, uma por vez
# Estude os exemplos anteriores deste tópico antes desta aplicação.
# Execução: python 12_decomposicao_de_problemas/exemplos/91_caso_reposicao.py
# Confira na saída: 'Depois da retirada: 4 críticas e 10 a repor'
# Preveja o resultado e altere um dado por vez para conferir seu raciocínio.

def calcular_falta(saldo, minimo):
    """Retorne a falta até o mínimo para inteiros não negativos."""
    if saldo < minimo:
        return minimo - saldo
    return 0

def main():
    """Resuma quatro posições com variáveis escalares, sem guardar coleção."""
    criticas = 0
    total = 0
    # Unidade 1, produto 1: saldo 18 e mínimo 10.
    falta = calcular_falta(18, 10)
    if falta > 0:
        criticas += 1
    total += falta
    # Unidade 1, produto 4: saldo 4 e mínimo 8.
    falta = calcular_falta(4, 8)
    if falta > 0:
        criticas += 1
    total += falta
    # Unidade 1, produto 10: saldo 6 e mínimo 10.
    falta = calcular_falta(6, 10)
    if falta > 0:
        criticas += 1
    total += falta
    # Unidade 3, produto 2: saldo 9 e mínimo 10.
    falta = calcular_falta(9, 10)
    if falta > 0:
        criticas += 1
    total += falta
    print("Posições críticas:", criticas)
    print("Total a repor:", total)
    # Simule retirar nove da primeira posição: só a sua falta precisa mudar.
    adicional = calcular_falta(18 - 9, 10)
    print("Depois da retirada:", criticas + 1, "críticas e", total + adicional, "a repor")

if __name__ == "__main__":
    main()
