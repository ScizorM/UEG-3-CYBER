execute unless score game_active game_active matches 1 run /tellraw @a[tag=on_train] {"rawtext": [{"text": "§e[PVP Announcements] §aEvery member of both teams is now on the train. Activate the lever in the conductor cab to start the game."}]}
execute if score game_active game_active matches 0 run execute unless entity @a[tag=team_nu,tag=!on_train] run execute unless entity @a[tag=team_lambda,tag=!on_train] run clone 127 9 22 127 9 22 118 -2 77
tag @a[tag=team_lambda] add new_title_start_train
tag @a[tag=team_nu] add new_title_start_train
tag @a[tag=team_lambda] add new_title_init
tag @a[tag=team_nu] add new_title_init