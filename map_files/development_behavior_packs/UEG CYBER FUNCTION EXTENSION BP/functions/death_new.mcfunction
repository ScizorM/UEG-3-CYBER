#bridge-file-version: #20
execute as @s[tag=team_nu] run tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] §c "}, {"selector": "@s"},{"text": "§c has been eliminated."}]}
execute as @s[tag=team_lambda] run tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] §c "}, {"selector": "@s"},{"text": "§c has been eliminated."}]}
playsound death @s
playsound death @a[tag=teamed] ~ ~ ~ 0.6
tag @s add death_timer
function title_sysfailure
tag @s remove ingame
camera @s fade time 0 4 0.2
clear @s
function disable_movement_controls
tag @s add death_timer_new
 