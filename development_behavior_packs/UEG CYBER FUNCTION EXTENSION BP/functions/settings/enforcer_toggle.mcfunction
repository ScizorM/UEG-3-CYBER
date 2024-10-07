#bridge-file-version: #3
scoreboard players add enforcer_creditR enforcer_creditR 1
execute if score enforcer_creditR enforcer_creditR matches 2.. run scoreboard players set enforcer_creditR enforcer_creditR 0
execute if score enforcer_creditR enforcer_creditR matches -10..-1 run scoreboard players set enforcer_creditR enforcer_creditR 1
execute if score enforcer_creditR enforcer_creditR matches 0 run event entity @s sm:add_disabled
execute if score enforcer_creditR enforcer_creditR matches 1 run event entity @s sm:add_enabled