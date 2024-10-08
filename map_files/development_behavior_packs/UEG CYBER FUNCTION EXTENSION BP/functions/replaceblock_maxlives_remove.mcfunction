#bridge-file-version: #23
scoreboard players add max_lives max_lives -1
execute if score max_lives max_lives matches 0 run scoreboard players set max_lives max_lives 9
execute if score max_lives max_lives matches 1 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax lives set to 1."}]}
execute if score max_lives max_lives matches 2 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax lives set to 2."}]}
execute if score max_lives max_lives matches 3 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax lives set to 3."}]}
execute if score max_lives max_lives matches 4 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax lives set to 4."}]}
execute if score max_lives max_lives matches 5 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax lives set to 5."}]}
execute if score max_lives max_lives matches 6 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax lives set to 6."}]}
execute if score max_lives max_lives matches 7 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax lives set to 7."}]}
execute if score max_lives max_lives matches 8 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax lives set to 8."}]}
execute if score max_lives max_lives matches 9 run execute positioned ~ ~ ~ run tellraw @a {"rawtext":[{"text":"§e[Setting Change] §aMax lives set to 9."}]}
#execute if score max_lives max_lives matches 9 run execute positioned ~ ~ ~ run clone 98 12 10 98 12 10 109 14 36
#execute if score max_lives max_lives matches 8 run execute positioned ~ ~ ~ run clone 98 13 10 98 13 10 109 14 36
#execute if score max_lives max_lives matches 7 run execute positioned ~ ~ ~ run clone 98 14 10 98 14 10 109 14 36
#execute if score max_lives max_lives matches 6 run execute positioned ~ ~ ~ run clone 98 15 10 98 15 10 109 14 36
#execute if score max_lives max_lives matches 5 run execute positioned ~ ~ ~ run clone 98 16 10 98 16 10 109 14 36 
#execute if score max_lives max_lives matches 4 run execute positioned ~ ~ ~ run clone 98 17 10 98 17 10 109 14 36
#execute if score max_lives max_lives matches 3 run execute positioned ~ ~ ~ run clone 98 18 10 98 18 10 109 14 36
#execute if score max_lives max_lives matches 2 run execute positioned ~ ~ ~ run clone 98 19 10 98 19 10 109 14 36
#execute if score max_lives max_lives matches 1 run execute positioned ~ ~ ~ run clone 98 20 10 98 20 10 109 14 36