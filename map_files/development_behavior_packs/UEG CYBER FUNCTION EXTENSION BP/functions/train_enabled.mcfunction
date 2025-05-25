execute unless score game_active game_active matches 1 run /tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] §aThere are now enough players to start a match. Enter the train to start."}]}
execute unless score game_active game_active matches 1 run /function unlock_train_door
tag @a[tag=team_lambda] add new_title_train_ready
tag @a[tag=team_nu] add new_title_train_ready
tag @a[tag=team_lambda] add new_title_init
tag @a[tag=team_nu] add new_title_init