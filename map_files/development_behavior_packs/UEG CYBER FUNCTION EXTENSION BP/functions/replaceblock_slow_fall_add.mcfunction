#bridge-file-version: #20
scoreboard players add slow_fall_level slow_fall_level 1
execute if score slow_fall_level slow_fall_level matches 0 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §cSlow Falling disabled."}]}
execute if score slow_fall_level slow_fall_level matches 1 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aSlow Falling level set to I."}]}
execute if score slow_fall_level slow_fall_level matches 2 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aSlow Falling level set to II."}]}
execute if score slow_fall_level slow_fall_level matches 3.. run scoreboard players set slow_fall_level slow_fall_level 2
#execute if score slow_fall_level slow_fall_level matches 2 run execute positioned ~ ~ ~ run clone 98 14 16 98 14 16 109 15 20
#execute if score slow_fall_level slow_fall_level matches 1 run execute positioned ~ ~ ~ run clone 98 15 16 98 15 16 109 15 20
#execute if score slow_fall_level slow_fall_level matches 0 run execute positioned ~ ~ ~ run clone 98 16 16 98 16 16 109 15 20