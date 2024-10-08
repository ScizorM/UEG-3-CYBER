#bridge-file-version: #2
scoreboard players add max_dashes max_dashes -1
execute if score max_dashes max_dashes matches 11.. run scoreboard players set max_dashes max_dashes 1
execute if score max_dashes max_dashes matches -10..0 run scoreboard players set max_dashes max_dashes 10
execute if score max_dashes max_dashes matches 1 run event entity @s sm:add_1
execute if score max_dashes max_dashes matches 2 run event entity @s sm:add_2
execute if score max_dashes max_dashes matches 3 run event entity @s sm:add_3
execute if score max_dashes max_dashes matches 4 run event entity @s sm:add_4
execute if score max_dashes max_dashes matches 5 run event entity @s sm:add_5
execute if score max_dashes max_dashes matches 6 run event entity @s sm:add_6
execute if score max_dashes max_dashes matches 7 run event entity @s sm:add_7
execute if score max_dashes max_dashes matches 8 run event entity @s sm:add_8
execute if score max_dashes max_dashes matches 9 run event entity @s sm:add_9
execute if score max_dashes max_dashes matches 10 run event entity @s sm:add_10