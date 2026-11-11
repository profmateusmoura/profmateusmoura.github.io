# 04 — Teste de mesa: Reduza o intervalo
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: alvo, fim, inicio, meio, valores. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# valores = [2, 4, 6, 8, 10, 12, 14]
# inicio, fim, alvo = 0, 6, 12
# while inicio <= fim:
#     meio = (inicio + fim) // 2
#     if valores[meio] == alvo:
#         print(meio)
#         break
#     if valores[meio] < alvo:
#         inicio = meio + 1
#     else:
#         fim = meio - 1
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 06_buscas/exemplos/02_reduza_o_intervalo.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
