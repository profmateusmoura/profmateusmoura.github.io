extends Area2D
@export var velocidade: float = 85.0
@export var limite_esquerdo: float = 320.0
@export var limite_direito: float = 700.0
var sentido: float = 1.0
func _physics_process(delta: float) -> void:
 position.x += sentido * velocidade * delta
 if position.x >= limite_direito:
  position.x = limite_direito
  sentido = -1.0
 elif position.x <= limite_esquerdo:
  position.x = limite_esquerdo
  sentido = 1.0
