# 02 — Teste de mesa: Escolha um ramo da árvore
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: alvo, arvore, atual, direita, esquerda. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# arvore = {8: (3, 10), 3: (1, 6), 10: (None, None), 1: (None, None), 6: (None, None)}
# atual, alvo = 8, 6
# while atual is not None:
#     print(atual)
#     if atual == alvo:
#         break
#     esquerda, direita = arvore[atual]
#     atual = esquerda if alvo < atual else direita
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 11_arvores/exemplos/01_escolha_um_ramo_da_arvore.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
