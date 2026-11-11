# 06 — Opções e faixas
# Objetivo: Escolher a estrutura adequada para cada decisão.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: Use valores literais em case e comparações de faixa em if.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   comum
#   10
# Confira na saída: 'Tarifa: 5.00'

modalidade = input("Modalidade: comum ou expresso: ")
# Tarifas inventadas apenas para exercitar decisões.
match modalidade:
    case "comum":
        # Só esta modalidade depende da distância.
        distancia = float(input("Distância em km, não negativa: "))
        if distancia <= 10:
            print("Tarifa: 5.00")
        else:
            print("Tarifa: 8.00")
    case "expresso":
        print("Tarifa: 12.00")
    case _:
        print("Modalidade inválida")
