#bridge-file-version: #3
scoreboard players add abilities_enabled abilities_enabled 1
execute if score abilities_enabled abilities_enabled matches 2.. run scoreboard players set abilities_enabled abilities_enabled 0
execute if score abilities_enabled abilities_enabled matches -10..-1 run scoreboard players set abilities_enabled abilities_enabled 1
execute if score abilities_enabled abilities_enabled matches 0 run event entity @s sm:add_disabled
execute if score abilities_enabled abilities_enabled matches 1 run event entity @s sm:add_enabled