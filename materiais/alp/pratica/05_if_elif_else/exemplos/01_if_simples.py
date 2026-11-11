# 01 — Condição simples
# Objetivo: Executar um bloco apenas quando necessário.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Os quatro espaços de indentação delimitam o bloco.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   32
# Confira na saída: 'Dia quente.'

temperatura = float(input("Temperatura: "))
if temperatura > 30:
    # Esta linha só roda se a condição for verdadeira.
    print("Dia quente.")
# Sem indentação: esta linha roda em qualquer caso.
print("Leitura concluída.")
