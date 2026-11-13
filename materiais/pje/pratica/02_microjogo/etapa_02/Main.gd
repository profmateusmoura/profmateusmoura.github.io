extends Node2D
const ETAPA: int = 2
const OBSTACULO = preload("res://Obstaculo.tscn")
var jogador: Area2D
var painel: Label
var botao: Button
var gerador: Timer
var tempo: float = 0.0
var jogando: bool = false
func _ready() -> void:
 jogador = preload("res://Jogador.tscn").instantiate()
 jogador.position = Vector2(480, 440)
 jogador.ativo = false
 add_child(jogador)
 jogador.atingido.connect(perder)
 gerador = Timer.new()
 gerador.wait_time = 0.8
 gerador.timeout.connect(criar_obstaculo)
 add_child(gerador)
 criar_interface()
 painel.text = "DESVIE • Setas para mover • Sobreviva 30 segundos"
func iniciar() -> void:
 for item in get_tree().get_nodes_in_group("obstaculos"): item.queue_free()
 tempo = 0.0
 jogador.position = Vector2(480, 440)
 jogador.ativo = true
 jogando = true
 botao.hide()
 if ETAPA >= 2: gerador.start()
func criar_obstaculo() -> void:
 var item := OBSTACULO.instantiate()
 item.position = Vector2(randf_range(24, 936), -25)
 item.velocidade = 160.0 + tempo * 3.0 if ETAPA >= 4 else 160.0
 item.add_to_group("obstaculos")
 add_child(item)
func _process(delta: float) -> void:
 if not jogando: return
 tempo += delta
 painel.text = "Tempo: %.1f / 30 s • Setas para mover" % tempo
 if ETAPA >= 3 and tempo >= 30.0: terminar("Conseguiu! Sobreviveu por 30 segundos.")
func perder() -> void:
 if ETAPA >= 3: terminar("Colisão! Tente outra rota.")
 else: jogador.ativo = true
func terminar(mensagem: String) -> void:
 jogando = false
 jogador.ativo = false
 gerador.stop()
 for item in get_tree().get_nodes_in_group("obstaculos"): item.set_process(false)
 painel.text = mensagem
 botao.text = "Jogar novamente"
 botao.show()
func criar_interface() -> void:
 var camada := CanvasLayer.new()
 add_child(camada)
 painel = Label.new()
 painel.position = Vector2(20, 15)
 painel.add_theme_font_size_override("font_size", 22)
 camada.add_child(painel)
 botao = Button.new()
 botao.position = Vector2(370, 235)
 botao.size = Vector2(220, 60)
 botao.text = "Iniciar partida"
 botao.pressed.connect(iniciar)
 camada.add_child(botao)
