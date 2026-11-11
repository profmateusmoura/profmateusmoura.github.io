# 04 — Comandos textuais
# Objetivo: Reconhecer comandos sem manipulação de strings.
# Pré-requisitos: exemplos anteriores deste tópico e tópicos anteriores.
# Observe: A comparação diferencia maiúsculas e minúsculas.
# Como estudar: preveja a saída, execute e altere um valor por vez.
# Execução guiada: digite uma entrada por solicitação, nesta ordem:
#   sair
# Confira na saída: 'Até logo'

comando = input("Digite iniciar, ajuda ou sair: ")
match comando:
    case "iniciar" | "INICIAR":
        print("Atividade iniciada")
    case "ajuda" | "AJUDA":
        print("Escolha um comando exibido no convite.")
    case "sair" | "SAIR":
        print("Até logo")
    case _:
        # Não usamos lower ou outras operações de strings.
        print("Comando não reconhecido")
