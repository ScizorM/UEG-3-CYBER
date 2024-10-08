#bridge-file-version: #20
execute if score game_active game_active matches 1 run setblock 118 -2 77 air
execute if score game_active game_active matches 0 run execute unless entity @a[tag=team_nu,tag=!on_train] run execute unless entity @a[tag=team_lambda,tag=!on_train] run scoreboard players set is_everyone_in_train is_everyone_in_train 1
execute if score game_active game_active matches 0 run execute if entity @a[tag=team_nu,tag=!on_train] run setblock 118 -2 77 air
execute if score game_active game_active matches 0 run execute if entity @a[tag=team_lambda,tag=!on_train] run setblock 118 -2 77 air
execute if score game_active game_active matches 0 run execute as @a[tag=team_nu,tag=!teamed] run execute positioned as @s run execute if block ~ -10 ~ sm:enter_train_ready_trigger run tag @s add on_train
execute if score game_active game_active matches 0 run execute as @a[tag=team_lambda,tag=!teamed] run execute positioned as @s run execute if block ~ -10 ~ sm:enter_train_ready_trigger run tag @s add on_train
execute if score game_active game_active matches 0 run execute as @a[tag=!team_lambda,tag=!team_nu] run execute positioned as @s run execute if block ~ -10 ~ sm:enter_train_ready_trigger run function ensure_no_train_lock
execute as @a run execute positioned as @s run execute unless block ~ -10 ~ sm:enter_train_ready_trigger run tag @s remove on_train