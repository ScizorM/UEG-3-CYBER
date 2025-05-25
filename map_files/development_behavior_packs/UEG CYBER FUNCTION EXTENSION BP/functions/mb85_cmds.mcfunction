#bridge-file-version: #42
execute as @s[scores={icarus_gun_fire=0..1}] run scoreboard players add @s icarus_gun_fire 1
execute as @s[scores={icarus_gun_fire=2}] run scoreboard players set @s icarus_gun_fire 0
function icarus_effects