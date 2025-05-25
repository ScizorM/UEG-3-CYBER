#bridge-file-version: #14
scoreboard players add enforcer_creditR enforcer_creditR 1
execute if score enforcer_creditR enforcer_creditR matches 2.. run scoreboard players set enforcer_creditR enforcer_creditR 0
#execute if score enforcer_creditR enforcer_creditR matches 1.. run execute positioned ~ ~ ~ run execute if block ~1 ~ ~ sm:type_melee run setblock ~1 ~ ~ sm:type_trap
execute if score enforcer_creditR enforcer_creditR matches 1.. run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aThe Enforcer credit penalty is now disabled."}]}
#execute if score enforcer_creditR enforcer_creditR matches 1.. run execute positioned ~ ~ ~ run clone 98 12 24 98 12 24 109 14 32
#execute if score enforcer_creditR enforcer_creditR matches 0 run execute positioned ~ ~ ~ run execute if block ~1 ~ ~ sm:type_trap run setblock ~1 ~ ~ sm:type_melee
execute if score enforcer_creditR enforcer_creditR matches 0 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §cThe Enforcer credit penalty is now enabled."}]}
#execute if score enforcer_creditR enforcer_creditR matches 0 run execute positioned ~ ~ ~ run clone 98 13 24 98 13 24 109 14 32