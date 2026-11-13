extends Node2D
const ETAPA: int = 3
var jogador: CharacterBody2D
var painel: Label
var botao: Button
var jogando: bool = false
var terminou: bool = false
var coletados: int = 0
var seguidores: Array[Node2D] = []
var historico: Array[Vector2] = []
var porta: Area2D
var longe: Parallax2D
var perto: Parallax2D
var aviso: String = ""
var aviso_tempo: float = 0.0
func _ready() -> void:
 if ETAPA >= 5: criar_fundo()
 plataforma(Vector2(480, 530), Vector2(960, 20))
 plataforma(Vector2(235, 440), Vector2(170, 18))
 plataforma(Vector2(455, 360), Vector2(170, 18))
 plataforma(Vector2(690, 440), Vector2(170, 18))
 jogador = preload("res://Jogador.tscn").instantiate()
 jogador.position = Vector2(70, 490)
 jogador.ativo = false
 jogador.permitir_wrap = ETAPA >= 4
 jogador.atravessou_borda.connect(limpar_trilha)
 add_child(jogador)
 if ETAPA >= 2:
  for pos in [Vector2(230, 405), Vector2(450, 325), Vector2(690, 405)]:
   var item := area(pos, Color(1, 0.82, 0.22))
   item.body_entered.connect(coletar.bind(item))
  porta = area(Vector2(890, 488), Color(0.3, 0.9, 0.7))
  porta.scale = Vector2(1.5, 2.0)
  porta.body_entered.connect(entrar_porta)
 if ETAPA >= 3:
  var inimigo := preload("res://Inimigo.tscn").instantiate()
  inimigo.position = Vector2(490, 500)
  inimigo.body_entered.connect(tocar_inimigo)
  add_child(inimigo)
  inimigo.set_physics_process(false)
 criar_interface()
 painel.text = "RESGATE • Setas: mover • Espaço: saltar • Reúna 3 e alcance a porta"
func iniciar() -> void:
 if terminou:
  get_tree().reload_current_scene()
  return
 jogando = true
 jogador.ativo = true
 for filho in get_children():
  if filho is Area2D: filho.set_physics_process(true)
 botao.hide()
func plataforma(pos: Vector2, tamanho: Vector2) -> void:
 var corpo := StaticBody2D.new()
 corpo.position = pos
 var forma := RectangleShape2D.new()
 forma.size = tamanho
 var colisao := CollisionShape2D.new()
 colisao.shape = forma
 corpo.add_child(colisao)
 var desenho := Polygon2D.new()
 var h := tamanho / 2.0
 desenho.polygon = PackedVector2Array([Vector2(-h.x,-h.y), Vector2(h.x,-h.y), h, Vector2(-h.x,h.y)])
 desenho.color = Color(0.25,0.42,0.55)
 corpo.add_child(desenho)
 add_child(corpo)
func area(pos: Vector2, cor: Color) -> Area2D:
 var item := Area2D.new()
 item.position = pos
 item.collision_layer = 0
 item.collision_mask = 2
 var colisao := CollisionShape2D.new()
 var forma := CircleShape2D.new()
 forma.radius = 14
 colisao.shape = forma
 item.add_child(colisao)
 var desenho := Polygon2D.new()
 desenho.polygon = PackedVector2Array([-12,-12,12,-12,12,12,-12,12])
 desenho.color = cor
 item.add_child(desenho)
 add_child(item)
 return item
func coletar(corpo: Node2D, item: Area2D) -> void:
 if corpo != jogador or not jogando or item.has_meta("coletado"): return
 item.set_meta("coletado", true)
 item.set_deferred("monitoring", false)
 item.hide()
 coletados += 1
 if ETAPA >= 3:
  var seguidor := Polygon2D.new()
  seguidor.polygon = PackedVector2Array([-7,-7,7,-7,7,7,-7,7])
  seguidor.color = Color(1,0.82,0.22)
  seguidor.position = jogador.position
  add_child(seguidor)
  seguidores.append(seguidor)
func _physics_process(delta: float) -> void:
 if not jogando: return
 historico.push_front(jogador.position)
 if historico.size() > 120: historico.pop_back()
 for i in range(seguidores.size()):
  var indice := mini((i + 1) * 12, historico.size() - 1)
  seguidores[i].position = historico[indice]
 painel.text = "Resgatados: %d / 3 • Setas: mover • Espaço: saltar" % coletados
 aviso_tempo = maxf(0.0, aviso_tempo - delta)
 if aviso_tempo > 0.0: painel.text += "\n" + aviso
func limpar_trilha() -> void:
 historico.clear()
 for seguidor in seguidores: seguidor.position = jogador.position
func entrar_porta(corpo: Node2D) -> void:
 if corpo != jogador or not jogando: return
 if coletados == 3: terminar("Resgate concluído! Todos chegaram à saída.")
 else:
  aviso = "A porta precisa dos três resgates."
  aviso_tempo = 2.0
func tocar_inimigo(corpo: Node2D) -> void:
 if corpo == jogador and jogando: terminar("Você tocou no perigo. Planeje o salto e tente novamente.")
func terminar(mensagem: String) -> void:
 terminou = true
 jogando = false
 jogador.ativo = false
 for filho in get_children():
  if filho is Area2D: filho.set_physics_process(false)
 painel.text = mensagem
 botao.text = "Preparar nova partida"
 botao.show()
func criar_fundo() -> void:
 longe = Parallax2D.new()
 longe.z_index = -2
 longe.autoscroll = Vector2(-8, 0)
 longe.repeat_size = Vector2(960, 0)
 longe.ignore_camera_scroll = true
 var desenho_longe := Sprite2D.new()
 desenho_longe.texture = preload("res://longe.svg")
 desenho_longe.centered = false
 longe.add_child(desenho_longe)
 add_child(longe)
 perto = Parallax2D.new()
 perto.z_index = -1
 perto.autoscroll = Vector2(-22, 0)
 perto.repeat_size = Vector2(960, 0)
 perto.ignore_camera_scroll = true
 var desenho_perto := Sprite2D.new()
 desenho_perto.texture = preload("res://perto.svg")
 desenho_perto.centered = false
 perto.add_child(desenho_perto)
 add_child(perto)
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
