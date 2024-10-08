#bridge-file-version: #8
scoreboard players add rerolls_enabled rerolls_enabled 1
execute if score rerolls_enabled rerolls_enabled matches 2.. run scoreboard players set rerolls_enabled rerolls_enabled 0
execute if score rerolls_enabled rerolls_enabled matches -10..-1 run scoreboard players set rerolls_enabled rerolls_enabled 1
execute if score rerolls_enabled rerolls_enabled matches 0 run event entity @s sm:add_disabled
execute if score rerolls_enabled rerolls_enabled matches 1 run event entity @s sm:add_enabled