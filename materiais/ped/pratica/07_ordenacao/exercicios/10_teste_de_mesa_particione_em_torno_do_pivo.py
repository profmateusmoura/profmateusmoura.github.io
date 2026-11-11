# 10 — Teste de mesa: Particione em torno do pivô
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: iguais, maiores, menores, pivo, v. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# def quick_sort(valores):
#     """Ordena os valores e devolve uma nova lista."""
#     if len(valores) <= 1:
#         return valores[:]
#     pivo = valores[0]
#     menores = [v for v in valores if v < pivo]
#     iguais = [v for v in valores if v == pivo]
#     maiores = [v for v in valores if v > pivo]
#     return quick_sort(menores) + iguais + quick_sort(maiores)
# print(quick_sort([3, 1, 4, 2, 3]))
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 07_ordenacao/exemplos/05_particione_em_torno_do_pivo.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
