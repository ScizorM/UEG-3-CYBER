#bridge-file-version: #0
function end_cmds
function stop_zone_timer
scoreboard players set new_pregame_timer_active new_pregame_timer_active 0
scoreboard players set new_pregame_timer new_pregame_timer_active 0
scoreboard players set new_pregame_timer new_pregame_timer 0
scoreboard players set timer pregame_timer 0 
scoreboard players set train_timer_started train_timer_started 0
scoreboard players set train_timer train_timer 0
setblock -56 10 -9 air
setblock -60 10 -9 air
setblock -64 10 -9 air
setblock -68 -13 -9 air