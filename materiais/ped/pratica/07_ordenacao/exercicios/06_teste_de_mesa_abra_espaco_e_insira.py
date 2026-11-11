# 06 — Teste de mesa: Abra espaço e insira
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: atual, i, j, valores. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# valores = [3, 1, 2]
# for i in range(1, len(valores)):
#     atual = valores[i]
#     j = i - 1
#     while j >= 0 and valores[j] > atual:
#         valores[j+1] = valores[j]
#         j -= 1
#     valores[j+1] = atual
# print(valores)
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 07_ordenacao/exemplos/03_abra_espaco_e_insira.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
