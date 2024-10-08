#bridge-file-version: #0
execute if score new_pregame_timer_active new_pregame_timer_active matches 1 run scoreboard players add new_pregame_timer new_pregame_timer 1
execute if score new_pregame_timer new_pregame_timer matches 600.. run function end_new_pregame_timer