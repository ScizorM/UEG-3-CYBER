#bridge-file-version: #47
function round_inactive
function reset_gamerules
function disable_movement_controls
camera @a[tag=ingame] fade time 0 4 2 color 0 0 0
tp @a[tag=ingame] -57 0 140 facing -56 0 140
clear @a[tag=ingame]
effect @a[tag=team_nu] clear
effect @a[tag=team_lambda] clear
kill @e[type=sm:teleporter_object]
gamemode a @a[tag=teamed]
scoreboard players reset @a[tag=teamed] heavenpiercer_meter
scoreboard players reset @a[tag=teamed] holic_hits
function postround_extended
execute @a[tag=ingame] ~ ~ ~ function disable_movement_controls
event entity @e[type=sm:landmine_ver_lambda] sm:explode
event entity @e[type=sm:landmine_ver_nu] sm:explode
kill @e[type=tnt_minecart]
function songs/kaizoslumber/stop_music
scoreboard players set playMusic playMusic 0
function postround_clear_entities
function deathzone_reset
kill @e[type=minecart]
kill @e[type=tnt_minecart]
scoreboard players reset @a[tag=teamed] icarus_is_inactive
scoreboard players reset @a[tag=teamed] icarus_temperature
scoreboard players reset @a[tag=teamed] icarus_cooldown
function reset_ingame_timer