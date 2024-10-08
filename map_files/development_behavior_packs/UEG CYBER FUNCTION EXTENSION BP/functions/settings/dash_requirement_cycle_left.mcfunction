#bridge-file-version: #4
scoreboard players add minimum_dash_requirement minimum_dash_requirement -1
execute if score minimum_dash_requirement minimum_dash_requirement matches 11.. run scoreboard players set minimum_dash_requirement minimum_dash_requirement 1
execute if score minimum_dash_requirement minimum_dash_requirement matches -10..0 run scoreboard players set minimum_dash_requirement minimum_dash_requirement 10
execute if score minimum_dash_requirement minimum_dash_requirement matches 1 run event entity @s sm:add_1
execute if score minimum_dash_requirement minimum_dash_requirement matches 2 run event entity @s sm:add_2
execute if score minimum_dash_requirement minimum_dash_requirement matches 3 run event entity @s sm:add_3
execute if score minimum_dash_requirement minimum_dash_requirement matches 4 run event entity @s sm:add_4
execute if score minimum_dash_requirement minimum_dash_requirement matches 5 run event entity @s sm:add_5
execute if score minimum_dash_requirement minimum_dash_requirement matches 6 run event entity @s sm:add_6
execute if score minimum_dash_requirement minimum_dash_requirement matches 7 run event entity @s sm:add_7
execute if score minimum_dash_requirement minimum_dash_requirement matches 8 run event entity @s sm:add_8
execute if score minimum_dash_requirement minimum_dash_requirement matches 9 run event entity @s sm:add_9
execute if score minimum_dash_requirement minimum_dash_requirement matches 10 run event entity @s sm:add_10