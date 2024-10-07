#bridge-file-version: #4
scoreboard players add max_lives max_lives 1
execute if score max_lives max_lives matches 10.. run scoreboard players set max_lives max_lives 1
execute if score max_lives max_lives matches -10..0 run scoreboard players set max_lives max_lives 9
execute if score max_lives max_lives matches 1 run event entity @s sm:add_1
execute if score max_lives max_lives matches 2 run event entity @s sm:add_2
execute if score max_lives max_lives matches 3 run event entity @s sm:add_3
execute if score max_lives max_lives matches 4 run event entity @s sm:add_4
execute if score max_lives max_lives matches 5 run event entity @s sm:add_5
execute if score max_lives max_lives matches 6 run event entity @s sm:add_6
execute if score max_lives max_lives matches 7 run event entity @s sm:add_7
execute if score max_lives max_lives matches 8 run event entity @s sm:add_8
execute if score max_lives max_lives matches 9 run event entity @s sm:add_9