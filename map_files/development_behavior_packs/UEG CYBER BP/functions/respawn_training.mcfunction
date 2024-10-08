#bridge-file-version: #39
clear @s
function load_loadouts/give_items
playsound respawn @s ~ ~ ~ 0.7
execute @s ~ ~ ~ execute @s ~ ~ ~ particle sm:respawn_beam ~ ~10 ~
camera @s fade time 0 0.1 0.5 color 40 40 150
tellraw @s {"rawtext": [{"text": "§e[PVP Announcements] §c"}, {"selector": "@s"},{"text": " has been recovered. §cRemaining Lives: Inf."}]}
effect @s slow_falling 5 0 true
tp @s -301 73 165
function title_respawned