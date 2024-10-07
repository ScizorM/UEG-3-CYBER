scoreboard players reset count enforcer_player_count_current
execute as @a[tag=teamed] if score game_active game_active matches 1 run scoreboard players add count enforcer_player_count_current 1