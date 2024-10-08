#bridge-file-version: #42
scoreboard players add @s icarus_cooldown 8
scoreboard players add @s[scores={icarus_cooldown=0..2}] icarus_temperature 10
scoreboard players add @s[scores={icarus_cooldown=3..}] icarus_temperature 20
execute if score @s icarus_temperature matches 100.. run summon sm:explosion_440_2
#execute if score @s icarus_temperature matches 100.. run function explosion_fire
execute if score @s icarus_temperature matches 100.. run scoreboard players set @s icarus_is_inactive 1
execute if score @s icarus_temperature matches 100.. run /camera @s fade time 0 0 1 color 140 20 20
execute if score @s icarus_temperature matches 100.. run function title_overheating
execute as @s[scores={icarus_gun_fire=0..1}] run scoreboard players add @s icarus_gun_fire 1
execute as @s[scores={icarus_gun_fire=2}] run scoreboard players set @s icarus_gun_fire 0
function icarus_effects