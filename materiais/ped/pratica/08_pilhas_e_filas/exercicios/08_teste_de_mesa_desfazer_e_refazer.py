# 08 — Teste de mesa: Desfazer e refazer
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: desfeitas, feitas. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# feitas, desfeitas = ["A", "B"], []
# desfeitas.append(feitas.pop())
# print(feitas, desfeitas)
# feitas.append(desfeitas.pop())
# print(feitas, desfeitas)
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 08_pilhas_e_filas/exemplos/04_desfazer_e_refazer.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
