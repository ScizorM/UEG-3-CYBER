#bridge-file-version: #9
scoreboard players add abilities_enabled abilities_enabled 1
execute if score abilities_enabled abilities_enabled matches 2.. run scoreboard players set abilities_enabled abilities_enabled 0
#execute if score abilities_enabled abilities_enabled matches 1.. run execute positioned ~ ~ ~ run execute if block ~1 ~ ~ sm:type_melee run setblock ~1 ~ ~ sm:type_trap
execute if score abilities_enabled abilities_enabled matches 1.. run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aAbilities are now enabled."}]}
#execute if score abilities_enabled abilities_enabled matches 1.. run execute positioned ~ ~ ~ run clone 98 12 22 98 12 22 109 14 24
#execute if score abilities_enabled abilities_enabled matches 0 run execute positioned ~ ~ ~ run execute if block ~1 ~ ~ sm:type_trap run setblock ~1 ~ ~ sm:type_melee
execute if score abilities_enabled abilities_enabled matches 0 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §cAbilities are now disabled."}]}
#execute if score abilities_enabled abilities_enabled matches 0 run execute positioned ~ ~ ~ run clone 98 13 22 98 13 22 109 14 24