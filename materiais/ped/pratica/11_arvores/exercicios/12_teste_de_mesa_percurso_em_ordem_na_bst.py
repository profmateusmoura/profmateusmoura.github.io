# 12 — Teste de mesa: Percurso em ordem na BST
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: arvore, direita, esquerda. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# arvore = {4: (2, 6), 2: (None, None), 6: (None, None)}
# def em_ordem(no):
#     """Percorre esquerda, nó e direita; None indica ausência."""
#     if no is None:
#         return
#     esquerda, direita = arvore[no]
#     em_ordem(esquerda)
#     print(no)
#     em_ordem(direita)
# em_ordem(4)
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 11_arvores/exemplos/06_percurso_em_ordem_na_bst.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
