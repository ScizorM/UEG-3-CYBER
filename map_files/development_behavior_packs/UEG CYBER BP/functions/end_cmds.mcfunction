#bridge-file-version: #20
ability @a[tag=teamed] mayfly false
scoreboard players set game_active game_active 0
function round_inactive
function reset_gamerules
function reset_scores
inputpermission set @a[tag=teamed] camera enabled
inputpermission set @a[tag=teamed] movement enabled
tag @a remove ingameMusic
tag @a[tag=teamed] add 1f
tag @a[tag=teamed] add exit_stores
clear @a[tag=teamed]
tp @a[tag=teamed] 140 -4 62 facing 140 -4 63
tag @a remove team_nu
tag @a remove team_lambda
tag @a remove number_1
tag @a remove number_2
tag @a remove number_3
tag @a remove number_4
effect @a[tag=teamed] clear
execute @a[tag=teamed] ~ ~ ~ function remove_teamed
tag @a remove teamed
tag @a remove ingame
function disable_movement_controls
scoreboard players set round round 0
function open_settings_area