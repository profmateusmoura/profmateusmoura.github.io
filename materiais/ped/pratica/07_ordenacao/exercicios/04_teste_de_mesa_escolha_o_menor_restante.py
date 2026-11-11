# 04 — Teste de mesa: Escolha o menor restante
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: i, j, menor, valores. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# valores = [3, 1, 2]
# for i in range(len(valores)-1):
#     menor = i
#     for j in range(i+1, len(valores)):
#         if valores[j] < valores[menor]:
#             menor = j
#     valores[i], valores[menor] = valores[menor], valores[i]
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
# 07_ordenacao/exemplos/02_escolha_o_menor_restante.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
