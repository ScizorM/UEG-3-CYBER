#bridge-file-version: #36
clear @s
playsound respawn @s ~ ~ ~ 0.7
execute @s ~ ~ ~ execute @s ~ ~ ~ particle sm:respawn_beam ~ ~10 ~
camera @s fade time 0 0.1 0.5 color 40 40 150
tellraw @s {"rawtext": [{"text": "§e[PVP Announcements] §c"}, {"selector": "@s"},{"text": " has been recovered. §cRemaining Lives: Inf."}]}
effect @s slow_falling 5 0 true
tp @s -62 122 -6
function title_respawned
tag @a add changeSkin