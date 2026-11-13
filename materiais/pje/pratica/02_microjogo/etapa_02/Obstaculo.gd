extends Area2D
@export var velocidade: float = 160.0
func _process(delta: float) -> void:
 position.y += velocidade * delta
 if position.y > 580: queue_free()
