#bridge-file-version: #20
scoreboard players add jump_boost_level jump_boost_level 1
execute if score jump_boost_level jump_boost_level matches 0 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §cJump Boost disabled."}]}
execute if score jump_boost_level jump_boost_level matches 1 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aJump Boost level set to I."}]}
execute if score jump_boost_level jump_boost_level matches 2 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aJump Boost level set to II."}]}
execute if score jump_boost_level jump_boost_level matches 3 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aJump Boost level set to III."}]}
execute if score jump_boost_level jump_boost_level matches 4 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aJump Boost level set to IV."}]}
execute if score jump_boost_level jump_boost_level matches 5.. run scoreboard players set jump_boost_level jump_boost_level 4
#execute if score jump_boost_level jump_boost_level matches 4 run execute positioned ~ ~ ~ run clone 98 12 16 98 12 16 109 15 20
#execute if score jump_boost_level jump_boost_level matches 3 run execute positioned ~ ~ ~ run clone 98 13 16 98 13 16 109 15 20
#execute if score jump_boost_level jump_boost_level matches 2 run execute positioned ~ ~ ~ run clone 98 14 16 98 14 16 109 15 20
#execute if score jump_boost_level jump_boost_level matches 1 run execute positioned ~ ~ ~ run clone 98 15 16 98 15 16 109 15 20
#execute if score jump_boost_level jump_boost_level matches 0 run execute positioned ~ ~ ~ run clone 98 16 16 98 16 16 109 15 20