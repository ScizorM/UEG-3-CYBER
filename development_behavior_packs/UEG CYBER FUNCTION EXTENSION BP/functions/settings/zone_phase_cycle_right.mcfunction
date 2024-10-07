#bridge-file-version: #3
scoreboard players add deathzone_initial deathzone_initial 1
execute if score deathzone_initial deathzone_initial matches 3.. run scoreboard players set deathzone_initial deathzone_initial 0
execute if score deathzone_initial deathzone_initial matches -10..-1 run scoreboard players set deathzone_initial deathzone_initial 2
execute if score deathzone_initial deathzone_initial matches 0 run event entity @s sm:add_1
execute if score deathzone_initial deathzone_initial matches 1 run event entity @s sm:add_2
execute if score deathzone_initial deathzone_initial matches 2 run event entity @s sm:add_3