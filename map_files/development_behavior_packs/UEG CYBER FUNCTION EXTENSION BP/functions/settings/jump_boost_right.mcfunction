#bridge-file-version: #3
scoreboard players add jump_boost_level jump_boost_level 1
execute if score jump_boost_level jump_boost_level matches 5.. run scoreboard players set jump_boost_level jump_boost_level 0
execute if score jump_boost_level jump_boost_level matches -10..-1 run scoreboard players set jump_boost_level jump_boost_level 4
execute if score jump_boost_level jump_boost_level matches 0 run event entity @s sm:add_0
execute if score jump_boost_level jump_boost_level matches 1 run event entity @s sm:add_1
execute if score jump_boost_level jump_boost_level matches 2 run event entity @s sm:add_2
execute if score jump_boost_level jump_boost_level matches 3 run event entity @s sm:add_3
execute if score jump_boost_level jump_boost_level matches 4 run event entity @s sm:add_4
