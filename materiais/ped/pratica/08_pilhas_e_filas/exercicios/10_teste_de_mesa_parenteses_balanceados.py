# 10 — Teste de mesa: Parênteses balanceados
# Tipo: prever, rastrear e explicar
#
# ENUNCIADO
# Sem executar, acompanhe o programa abaixo. Construa uma tabela com as colunas passo, instrução, estado e saída acumulada.
# Registre as alterações de: pilha, simbolo, texto, valido. Nas funções, registre cada chamada e retorno; nos laços, registre cada repetição.
# Escreva a saída prevista. Depois execute sua transcrição e compare linha por linha.
#
# CÓDIGO PARA ANALISAR
# texto = "(())"
# pilha = []
# valido = True
# for simbolo in texto:
#     if simbolo == "(":
#         pilha.append(simbolo)
#     elif not pilha:
#         valido = False
#         break
#     else:
#         pilha.pop()
# print(valido and not pilha)
#
# DICA
# Avalie o lado direito antes de atualizar a variável. Não apague linhas já impressas quando o valor de uma variável mudar.
#
# CRITÉRIOS DE CONFERÊNCIA
# Sua previsão deve coincidir com a execução do exemplo de apoio. Explique a primeira divergência, caso exista, e corrija sua tabela.
# Registre o estado inicial e final e justifique quando o programa termina. Não basta copiar a saída: a tabela deve mostrar como ela foi construída.
#
# EXEMPLO DE APOIO
# 08_pilhas_e_filas/exemplos/05_parenteses_balanceados.py
#
# Escreva sua previsão e tabela abaixo, antes de executar qualquer código.
