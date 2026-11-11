# 10 — Teste de mesa: Altura em arestas
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: arvore, filho. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# arvore = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}
# def altura(no):
#     """Retorna a altura em arestas; uma folha tem altura zero."""
#     if not arvore[no]:
#         return 0
#     return 1 + max(altura(filho) for filho in arvore[no])
# print(altura("A"))
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 11_arvores/exemplos/05_altura_em_arestas.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
