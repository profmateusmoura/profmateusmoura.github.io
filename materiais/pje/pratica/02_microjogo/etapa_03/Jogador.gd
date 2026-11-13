extends Area2D
signal atingido
@export var velocidade: float = 260.0
var ativo: bool = true
func _ready() -> void:
 area_entered.connect(_ao_tocar)
func _process(delta: float) -> void:
 if not ativo: return
 var direcao := Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
 position += direcao * velocidade * delta
 position = position.clamp(Vector2(18, 18), Vector2(942, 522))
func _ao_tocar(_area: Area2D) -> void:
 if ativo:
  ativo = false
  atingido.emit()
