# 02 — Teste de mesa: Busca em largura com fila
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: atual, fila, grafo, vistos, vizinho. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# from collections import deque
# grafo = {"A": ["B", "C"], "B": ["A", "D"], "C": ["A"], "D": ["B"]}
# fila, vistos = deque(["A"]), {"A"}
# while fila:
#     atual = fila.popleft()
#     print(atual)
#     for vizinho in grafo[atual]:
#         if vizinho not in vistos:
#             vistos.add(vizinho)
#             fila.append(vizinho)
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 12_grafos/exemplos/01_busca_em_largura_com_fila.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
