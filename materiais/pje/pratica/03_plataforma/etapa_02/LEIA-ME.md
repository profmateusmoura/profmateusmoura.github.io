# Resgate — etapa 2
Godot 4.5.1 Standard. Importe project.godot e pressione F5. Clique Iniciar.
Setas movem; Espaço salta (ação ui_accept). Reúna três quadrados amarelos e alcance a porta verde à direita.
1: movimento, gravidade, plataformas e salto. 2: resgates e porta com condição.
3: seguidores por histórico e inimigo patrulhando; dano encerra a tentativa.
4: screen wrap horizontal. O grupo atravessa junto e a trilha antiga é descartada.
5: Parallax2D com duas camadas em movimento automático e velocidades diferentes.
ETAPA seleciona os recursos da versão cumulativa. Os nós do cenário são criados em Main.gd:
veja a árvore Remote durante a execução. As cenas Jogador e Inimigo são editáveis no editor.
O fundo usa autoscroll com câmera fixa; não representa uma câmera seguindo o jogador.
O seguidor é visual, sem colisão própria. A porta verifica coletados, não posição de cada seguidor.
Ao vencer ou perder, clique Preparar nova partida e depois Iniciar.
