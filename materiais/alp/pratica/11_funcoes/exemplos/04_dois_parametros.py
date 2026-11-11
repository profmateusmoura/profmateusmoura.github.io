# 04 — Mais de um parâmetro
# Objetivo: Passar todos os dados necessários ao cálculo.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A função não depende de variáveis globais ou de entrada interativa.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Área 2: 10'

def calcular_area_retangulo(largura, altura):
    """Retorne a área; largura e altura devem ser medidas não negativas."""
    return largura * altura

# Primeiro pela posição, depois pelos nomes dos parâmetros.
area_1 = calcular_area_retangulo(4, 3)
area_2 = calcular_area_retangulo(altura=2, largura=5)
print("Área 1:", area_1)
print("Área 2:", area_2)
# As medidas são independentes; nenhum retorno múltiplo é necessário.
