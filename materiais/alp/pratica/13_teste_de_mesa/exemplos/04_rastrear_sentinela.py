# 04 — Rastrear uma sentinela
# Objetivo: Verificar que o marcador de término não entra nos dados.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A tabela separa a leitura da decisão de processar.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   0
#   4
#   -1
# Confira na saída: 'Quantidade: 2'

# entrada | valor != -1 | quantidade após corpo | soma após corpo
# 0       | True        | 1                     | 0
# 4       | True        | 2                     | 4
# -1      | False       | permanece 2           | permanece 4
quantidade = 0
soma = 0
valor = int(input("Inteiro; -1 encerra: "))
while valor != -1:
    soma += valor
    quantidade += 1
    valor = int(input("Inteiro; -1 encerra: "))
print("Quantidade:", quantidade)
print("Soma:", soma)
# Repita com -1 como primeira entrada: o corpo deve executar zero vezes.
