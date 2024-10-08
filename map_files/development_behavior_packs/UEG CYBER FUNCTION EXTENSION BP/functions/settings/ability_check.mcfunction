#bridge-file-version: #0
execute if score abilities_enabled abilities_enabled matches 0 run event entity @s sm:add_disabled
execute if score abilities_enabled abilities_enabled matches 1 run event entity @s sm:add_enabled