scoreboard players add @a[r=5] scaletimer 100
tag @s add status_scaled
execute as @a[scores={scaletimer = 500..}] run event entity @s sm:scale_1_9x
execute as @a[scores={scaletimer = 400..499}] run event entity @s sm:scale_1_8x
execute as @a[scores={scaletimer = 300..399}] run event entity @s sm:scale_1_7x
execute as @a[scores={scaletimer = 200..299}] run event entity @s sm:scale_1_6x
execute as @a[scores={scaletimer = 92..199}] run event entity @s sm:scale_1_5x
execute as @a[scores={scaletimer = 9}] run event entity @s sm:scale_1_4x
execute as @a[scores={scaletimer = 7}] run event entity @s sm:scale_1_3x
execute as @a[scores={scaletimer = 5}] run event entity @s sm:scale_1_2x
execute as @a[scores={scaletimer = 3}] run event entity @s sm:scale_1_1x
execute as @a[scores={scaletimer = 1}] run event entity @s sm:scale_default
execute as @a[scores={scaletimer = 0}] run tag @s remove status_scaled
execute as @a[scores={scaletimer = 0}] run event entity @s sm:clear_scales
execute as @a[scores={scaletimer = 0}] run scoreboard players reset @s scaletimer
execute as @a[scores={scaletimer = 1..}] run scoreboard players remove @s scaletimer 1
execute as @a[scores={scaletimer = 1..}] run effect @s slowness 1 0 true