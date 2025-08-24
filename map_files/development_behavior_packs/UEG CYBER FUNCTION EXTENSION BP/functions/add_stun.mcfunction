scoreboard players set @a[r=5] stuntimer 20
tag @s add status_stunned
execute as @a[scores={stuntimer = 0}] run tag @s remove status_stunned
execute as @a[scores={stuntimer = 0}] run scoreboard players reset @s stuntimer
execute as @a[scores={stuntimer = 1..}] run scoreboard players remove @s stuntimer 1
