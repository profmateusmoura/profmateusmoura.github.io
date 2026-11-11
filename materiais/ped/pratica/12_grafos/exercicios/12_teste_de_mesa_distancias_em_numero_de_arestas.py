# 12 — Teste de mesa: Distâncias em número de arestas
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: distancia, fila, g, no, vizinho. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# from collections import deque
# g = {"A": ["B"], "B": ["A", "C"], "C": ["B"]}
# distancia, fila = {"A": 0}, deque(["A"])
# while fila:
#     no = fila.popleft()
#     for vizinho in g[no]:
#         if vizinho not in distancia:
#             distancia[vizinho] = distancia[no] + 1
#             fila.append(vizinho)
# print(distancia)
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 12_grafos/exemplos/06_distancias_em_numero_de_arestas.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
