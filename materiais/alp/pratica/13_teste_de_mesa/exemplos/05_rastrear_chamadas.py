# 05 — Rastrear chamadas e retornos
# Objetivo: Manter separados os estados do chamador e da função.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Cada chamada começa com novos valores locais.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Resultado: 5'

def incrementar(valor):
    """Retorne o inteiro valor acrescido de um."""
    valor += 1
    return valor

# etapa                    | externo | local valor | retorno
# externo = 3              | 3       | —           | —
# incrementar(externo)     | 3       | 3 -> 4      | 4
# resultado recebe retorno | 3       | —           | 4
# incrementar(resultado)   | 3       | 4 -> 5      | 5
externo = 3
resultado = incrementar(externo)
resultado = incrementar(resultado)
print("Externo:", externo)
print("Resultado:", resultado)
