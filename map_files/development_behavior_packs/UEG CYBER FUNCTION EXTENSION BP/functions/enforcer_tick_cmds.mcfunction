#bridge-file-version: #2
execute if score enabled enforcer_enabled matches 1 run execute if score count enforcer_player_count_current < count enforcer_player_count_saved run function enforcer_player_leave_commands
execute if score enabled enforcer_enabled matches 1 run function enforcer_player_count_current
execute as @a[tag=teamed] run execute as @s if score @s enforcer_round_verifier < verify enforcer_round_verifier run function enforcer_resetplayer
execute if score game_active game_active matches 0 run scoreboard players operation @a enforcer_round_verifier = verify enforcer_round_verifier
execute as @a[tag=teamed] if score game_active game_active matches 0 run function enforcer_resetplayer
scoreboard players add count enforcer_player_count_saved 0
execute if score game_active game_active matches 0 run scoreboard players set count enforcer_player_count_saved 0