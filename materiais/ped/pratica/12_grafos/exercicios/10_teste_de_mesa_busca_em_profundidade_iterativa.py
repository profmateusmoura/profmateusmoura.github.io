# 10 — Teste de mesa: Busca em profundidade iterativa
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: g, no, pilha, vistos. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# g = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}
# pilha, vistos = ["A"], set()
# while pilha:
#     no = pilha.pop()
#     if no in vistos:
#         continue
#     vistos.add(no)
#     print(no)
#     pilha.extend(reversed(g[no]))
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 12_grafos/exemplos/05_busca_em_profundidade_iterativa.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
