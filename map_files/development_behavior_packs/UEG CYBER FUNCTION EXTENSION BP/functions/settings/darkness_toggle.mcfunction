#bridge-file-version: #3
scoreboard players add darkness_level darkness_level 1
execute if score darkness_level darkness_level matches 2.. run scoreboard players set darkness_level darkness_level 0
execute if score darkness_level darkness_level matches -10..-1 run scoreboard players set darkness_level darkness_level 1
execute if score darkness_level darkness_level matches 0 run event entity @s sm:add_0
execute if score darkness_level darkness_level matches 1 run event entity @s sm:add_1