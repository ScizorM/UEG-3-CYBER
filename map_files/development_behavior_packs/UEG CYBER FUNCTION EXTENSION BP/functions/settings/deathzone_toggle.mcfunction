#bridge-file-version: #3
scoreboard players add deathzone_enabled deathzone_enabled 1
execute if score deathzone_enabled deathzone_enabled matches 2.. run scoreboard players set deathzone_enabled deathzone_enabled 0
execute if score deathzone_enabled deathzone_enabled matches -10..-1 run scoreboard players set deathzone_enabled deathzone_enabled 1
execute if score deathzone_enabled deathzone_enabled matches 0 run event entity @s sm:add_disabled
execute if score deathzone_enabled deathzone_enabled matches 1 run event entity @s sm:add_enabled