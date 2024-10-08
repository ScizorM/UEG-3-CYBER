#bridge-file-version: #8
scoreboard players add weaponBan weaponBan 1
execute if score weaponBan weaponBan matches 2.. run scoreboard players set weaponBan weaponBan 0
execute if score weaponBan weaponBan matches -10..-1 run scoreboard players set weaponBan weaponBan 1
execute if score weaponBan weaponBan matches 0 run event entity @s sm:add_disabled
execute if score weaponBan weaponBan matches 1 run event entity @s sm:add_enabled
execute if score weaponBan weaponBan matches 0 run /function un_unlock_bans
execute if score weaponBan weaponBan matches 1 run /function unlock_bans