#bridge-file-version: #11
scoreboard players add max_wallJumps max_wallJumps 1
execute if score max_wallJumps max_wallJumps matches 2.. run scoreboard players set max_wallJumps max_wallJumps 0
#execute if score max_wallJumps max_wallJumps matches 1.. run execute positioned ~ ~ ~ run execute if block ~1 ~ ~ sm:type_melee run setblock ~1 ~ ~ sm:type_trap
execute if score max_wallJumps max_wallJumps matches 1.. run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aWalljumping is now enabled."}]}
#execute if score max_wallJumps max_wallJumps matches 1.. run execute positioned ~ ~ ~ run clone 98 12 24 98 12 24 109 14 28
#execute if score max_wallJumps max_wallJumps matches 0 run execute positioned ~ ~ ~ run execute if block ~1 ~ ~ sm:type_trap run setblock ~1 ~ ~ sm:type_melee
execute if score max_wallJumps max_wallJumps matches 0 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §cWalljumping is now disabled."}]}
#execute if score max_wallJumps max_wallJumps matches 0 run execute positioned ~ ~ ~ run clone 98 13 24 98 13 24 109 14 28