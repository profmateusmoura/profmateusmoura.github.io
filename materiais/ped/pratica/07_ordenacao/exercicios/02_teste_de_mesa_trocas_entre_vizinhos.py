# 02 — Teste de mesa: Trocas entre vizinhos
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: fim, i, valores. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# valores = [3, 2, 1]
# for fim in range(len(valores)-1, 0, -1):
#     for i in range(fim):
#         if valores[i] > valores[i+1]:
#             valores[i], valores[i+1] = valores[i+1], valores[i]
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
# 07_ordenacao/exemplos/01_trocas_entre_vizinhos.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
