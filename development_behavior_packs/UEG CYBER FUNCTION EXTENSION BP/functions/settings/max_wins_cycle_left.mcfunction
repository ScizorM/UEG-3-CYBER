#bridge-file-version: #3
scoreboard players add max_wins max_wins -1
execute if score max_wins max_wins matches 10.. run scoreboard players set max_wins max_wins 1
execute if score max_wins max_wins matches -10..0 run scoreboard players set max_wins max_wins 9
execute if score max_wins max_wins matches 1 run event entity @s sm:add_1
execute if score max_wins max_wins matches 2 run event entity @s sm:add_2
execute if score max_wins max_wins matches 3 run event entity @s sm:add_3
execute if score max_wins max_wins matches 4 run event entity @s sm:add_4
execute if score max_wins max_wins matches 5 run event entity @s sm:add_5
execute if score max_wins max_wins matches 6 run event entity @s sm:add_6
execute if score max_wins max_wins matches 7 run event entity @s sm:add_7
execute if score max_wins max_wins matches 8 run event entity @s sm:add_8
execute if score max_wins max_wins matches 9 run event entity @s sm:add_9