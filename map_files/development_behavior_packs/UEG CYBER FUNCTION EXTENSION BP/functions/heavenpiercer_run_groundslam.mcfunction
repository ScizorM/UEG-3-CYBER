#bridge-file-version: #8
execute if score @s heavenpiercer_timer matches 0..79 run summon sm:explosion_440
execute if score @s heavenpiercer_timer matches 80.. run summon sm:explosion_440_2
execute as @s[tag=team_nu] run execute as @a[tag=team_lambda,r=10,scores={heavenpiercer_timer=80..}] run execute positioned as @s run summon lightning_bolt
execute as @s[tag=team_lambda,scores={heavenpiercer_timer=80..}] run execute as @a[tag=team_nu,r=10] run execute positioned as @s run summon lightning_bolt
tag @s remove in_air_heavenpiercer
scoreboard players reset @s heavenpiercer_timer
scoreboard players reset @s heavenpiercer_meter