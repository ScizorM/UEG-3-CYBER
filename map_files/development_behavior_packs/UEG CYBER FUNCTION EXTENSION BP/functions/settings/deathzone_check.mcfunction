#bridge-file-version: #4
execute if score deathzone_enabled deathzone_enabled matches 0 run event entity @s sm:add_disabled
execute if score deathzone_enabled deathzone_enabled matches 1 run event entity @s sm:add_enabled