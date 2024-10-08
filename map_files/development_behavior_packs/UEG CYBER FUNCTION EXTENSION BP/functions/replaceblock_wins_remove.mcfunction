#bridge-file-version: #23
scoreboard players add max_wins max_wins -1
execute if score max_wins max_wins matches 0 run scoreboard players set max_wins max_wins 9
execute if score max_wins max_wins matches 1 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax wins set to 1."}]}
execute if score max_wins max_wins matches 2 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax wins set to 2."}]}
execute if score max_wins max_wins matches 3 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax wins set to 3."}]}
execute if score max_wins max_wins matches 4 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax wins set to 4."}]}
execute if score max_wins max_wins matches 5 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax wins set to 5."}]}
execute if score max_wins max_wins matches 6 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax wins set to 6."}]}
execute if score max_wins max_wins matches 7 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax wins set to 7."}]}
execute if score max_wins max_wins matches 8 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax wins set to 8."}]}
execute if score max_wins max_wins matches 9 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax wins set to 9."}]}
#execute if score max_wins max_wins matches 9 run execute positioned ~ ~ ~ run clone 98 12 12 98 12 12 113 14 12
#execute if score max_wins max_wins matches 8 run execute positioned ~ ~ ~ run clone 98 13 12 98 13 12 113 14 12
#execute if score max_wins max_wins matches 7 run execute positioned ~ ~ ~ run clone 98 14 12 98 14 12 113 14 12
#execute if score max_wins max_wins matches 6 run execute positioned ~ ~ ~ run clone 98 15 12 98 15 12 113 14 12
#execute if score max_wins max_wins matches 5 run execute positioned ~ ~ ~ run clone 98 16 12 98 16 12 113 14 12
#execute if score max_wins max_wins matches 4 run execute positioned ~ ~ ~ run clone 98 17 12 98 17 12 113 14 12
#execute if score max_wins max_wins matches 3 run execute positioned ~ ~ ~ run clone 98 18 12 98 18 12 113 14 12
#execute if score max_wins max_wins matches 2 run execute positioned ~ ~ ~ run clone 98 19 12 98 19 12 113 14 12
#execute if score max_wins max_wins matches 1 run execute positioned ~ ~ ~ run clone 98 20 12 98 20 12 113 14 12