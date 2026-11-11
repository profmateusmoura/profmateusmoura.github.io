# 06 — Escopo local
# Objetivo: Entender que parâmetros e variáveis locais são próprios da chamada.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Atribuir ao parâmetro não altera a variável numérica do chamador.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: este exemplo não solicita entrada.
# Confira na saída: 'Fora da função: 20'

def adicionar_bonus(pontos):
    """Retorne pontos acrescidos de dez; pontos deve ser numérico."""
    pontos = pontos + 10
    print("Dentro da função:", pontos)
    return pontos

pontos = 20
novo_total = adicionar_bonus(pontos)
print("Fora da função:", pontos)
print("Retorno guardado:", novo_total)
# Para atualizar o nome externo, seria preciso atribuir o retorno a ele.
