#bridge-file-version: #21
scoreboard players add speed_level speed_level -1
execute if score speed_level speed_level matches 0 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §cSpeed disabled."}]}
execute if score speed_level speed_level matches 1 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aSpeed level set to I."}]}
execute if score speed_level speed_level matches 2 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aSpeed level set to II."}]}
execute if score speed_level speed_level matches 3 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aSpeed level set to III."}]}
execute if score speed_level speed_level matches 4 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aSpeed level set to IV."}]}
execute if score speed_level speed_level matches -1 run scoreboard players set speed_level speed_level 0
#execute if score speed_level speed_level matches 4 run execute positioned ~ ~ ~ run clone 98 12 18 98 12 18 109 14 20
#execute if score speed_level speed_level matches 3 run execute positioned ~ ~ ~ run clone 98 13 18 98 13 18 109 14 20
#execute if score speed_level speed_level matches 2 run execute positioned ~ ~ ~ run clone 98 14 18 98 14 18 109 14 20
#execute if score speed_level speed_level matches 1 run execute positioned ~ ~ ~ run clone 98 15 18 98 15 18 109 14 20
#execute if score speed_level speed_level matches 0 run execute positioned ~ ~ ~ run clone 98 16 18 98 16 18 109 14 20