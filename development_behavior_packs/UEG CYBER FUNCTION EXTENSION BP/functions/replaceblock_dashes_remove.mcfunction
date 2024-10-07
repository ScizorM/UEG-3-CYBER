#bridge-file-version: #25
scoreboard players add max_dashes max_dashes -1
execute if score max_dashes max_dashes matches -1 run scoreboard players set max_dashes max_dashes 10
execute if score max_dashes max_dashes matches 0 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §cDashes disabled."}]}
execute if score max_dashes max_dashes matches 1 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 1."}]}
execute if score max_dashes max_dashes matches 2 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 2."}]}
execute if score max_dashes max_dashes matches 3 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 3."}]}
execute if score max_dashes max_dashes matches 4 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 4."}]}
execute if score max_dashes max_dashes matches 5 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 5."}]}
execute if score max_dashes max_dashes matches 6 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 6."}]}
execute if score max_dashes max_dashes matches 7 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 7."}]}
execute if score max_dashes max_dashes matches 8 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 8."}]}
execute if score max_dashes max_dashes matches 9 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 9."}]}
execute if score max_dashes max_dashes matches 10 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax dashes set to 10."}]}
#execute if score max_dashes max_dashes matches 10 run execute positioned ~ ~ ~ run clone 98 11 14 98 11 14 113 14 16
#execute if score max_dashes max_dashes matches 9 run execute positioned ~ ~ ~ run clone 98 12 14 98 12 14 113 14 16
#execute if score max_dashes max_dashes matches 8 run execute positioned ~ ~ ~ run clone 98 13 14 98 13 14 113 14 16
#execute if score max_dashes max_dashes matches 7 run execute positioned ~ ~ ~ run clone 98 14 14 98 14 14 113 14 16
#execute if score max_dashes max_dashes matches 6 run execute positioned ~ ~ ~ run clone 98 15 14 98 15 14 113 14 16
#execute if score max_dashes max_dashes matches 5 run execute positioned ~ ~ ~ run clone 98 16 14 98 16 14 113 14 16
#execute if score max_dashes max_dashes matches 4 run execute positioned ~ ~ ~ run clone 98 17 14 98 17 14 113 14 16
#execute if score max_dashes max_dashes matches 3 run execute positioned ~ ~ ~ run clone 98 18 14 98 18 14 113 14 16
#execute if score max_dashes max_dashes matches 2 run execute positioned ~ ~ ~ run clone 98 19 14 98 19 14 113 14 16
#execute if score max_dashes max_dashes matches 1 run execute positioned ~ ~ ~ run clone 98 20 14 98 20 14 113 14 16
#execute if score max_dashes max_dashes matches 0 run execute positioned ~ ~ ~ run clone 98 21 14 98 21 14 113 14 16