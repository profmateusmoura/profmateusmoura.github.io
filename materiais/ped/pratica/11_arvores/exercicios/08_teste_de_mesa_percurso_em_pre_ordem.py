# 08 — Teste de mesa: Percurso em pré-ordem
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: arvore, filho. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# arvore = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}
# def visitar(no):
#     """Visita um nó antes de seus filhos na árvore fornecida."""
#     print(no)
#     for filho in arvore[no]:
#         visitar(filho)
# visitar("A")
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 11_arvores/exemplos/04_percurso_em_pre_ordem.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
