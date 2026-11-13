extends CharacterBody2D
@export var velocidade: float = 240.0
@export var impulso: float = -470.0
@export var gravidade: float = 1100.0
var ativo: bool = true
var permitir_salto: bool = true
var permitir_wrap: bool = false
signal atravessou_borda
func _physics_process(delta: float) -> void:
 if not ativo: return
 velocity.x = Input.get_axis("ui_left", "ui_right") * velocidade
 if not is_on_floor(): velocity.y += gravidade * delta
 if permitir_salto and Input.is_action_just_pressed("ui_accept") and is_on_floor():
  velocity.y = impulso
 move_and_slide()
 if permitir_wrap:
  if position.x < 0.0 or position.x >= 960.0:
   position.x = wrapf(position.x, 0.0, 960.0)
   atravessou_borda.emit()
 else:
  position.x = clampf(position.x, 14.0, 946.0)
