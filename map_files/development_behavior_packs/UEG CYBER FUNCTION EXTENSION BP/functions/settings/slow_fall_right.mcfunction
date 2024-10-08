#bridge-file-version: #3
scoreboard players add slow_fall_level slow_fall_level 1
execute if score slow_fall_level slow_fall_level matches 4.. run scoreboard players set slow_fall_level slow_fall_level 0
execute if score slow_fall_level slow_fall_level matches -10..-1 run scoreboard players set slow_fall_level slow_fall_level 3
execute if score slow_fall_level slow_fall_level matches 0 run event entity @s sm:add_0
execute if score slow_fall_level slow_fall_level matches 1 run event entity @s sm:add_1
execute if score slow_fall_level slow_fall_level matches 2 run event entity @s sm:add_2
execute if score slow_fall_level slow_fall_level matches 3 run event entity @s sm:add_3