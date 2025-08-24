#bridge-file-version: #38
clear @s
playsound respawn @s ~ ~ ~ 0.7
execute @a[tag=teamed] ~ ~ ~ playsound respawn @s[tag=teamed] ~ ~ ~ 0.4
execute @s ~ ~ ~ execute @s ~ ~ ~ particle sm:respawn_beam ~ ~10 ~
tag @s remove in_air_heavenpiercer
scoreboard players reset @s holic_hits
camera @s fade time 0 0.1 0.5 color 40 40 150
scoreboard players remove @s lives 1
execute @s[tag=team_nu] ~ ~ ~ tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] §c "}, {"selector": "@s"},{"text": " has been recovered. §cRemaining Lives: "},{"score":{"name":"@s","objective":"lives"}}]}
execute @s[tag=team_lambda] ~ ~ ~ tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] §c "}, {"selector": "@s"},{"text": " has been recovered. §cRemaining Lives: "},{"score":{"name":"@s","objective":"lives"}}]}
effect @s slow_falling 1 0 true
tp @s -134 76 255
function stoned_ability_clear
function title_respawned
scoreboard players set @s respawn_item_regen 40
scoreboard players reset @s icarus_is_inactive
scoreboard players reset @s icarus_temperature
scoreboard players reset @s icarus_cooldown
tag @s add respawning
scoreboard players set @s scaletimer 1
scoreboard players add @s total_respawns 1
tag @a add changeSkin
scoreboard players set @s horse_charges 0