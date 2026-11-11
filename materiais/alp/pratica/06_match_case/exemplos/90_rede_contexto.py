# Canal de atendimento — cenário didático Lojas Blue
# Objetivo: Escolher uma resposta por código sem repetições.
# Pré-requisito: tópicos anteriores e exemplos anteriores deste tópico.
# Estude: preveja o resultado, execute e altere um dado por vez.
# Confira na saída: 'Atendimento por WhatsApp'
# Entradas guiadas, uma por solicitação:
#   5

canal = input("Canal: 1 loja física, 5 WhatsApp: ")
match canal:
    case "1":
        print("Atendimento na loja física")
    case "5":
        print("Atendimento por WhatsApp")
    case _:
        print("Canal não contemplado nesta simulação")
# Este recorte usa dois dos cinco canais da base.
