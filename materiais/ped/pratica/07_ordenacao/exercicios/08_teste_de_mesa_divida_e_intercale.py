# 08 — Teste de mesa: Divida e intercale
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: a, b, i, j, meio, resultado. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# def merge_sort(valores):
#     """Ordena os valores e devolve uma nova lista."""
#     if len(valores) <= 1:
#         return valores[:]
#     meio = len(valores) // 2
#     a, b = merge_sort(valores[:meio]), merge_sort(valores[meio:])
#     resultado = []
#     i = j = 0
#     while i < len(a) and j < len(b):
#         if a[i] <= b[j]:
#             resultado.append(a[i]); i += 1
#         else:
#             resultado.append(b[j]); j += 1
#     return resultado + a[i:] + b[j:]
# print(merge_sort([4, 1, 3, 2]))
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 07_ordenacao/exemplos/04_divida_e_intercale.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
