#bridge-file-version: #3
execute as @s[tag=team_nu] if score game_active game_active matches 0 run tellraw @a {"rawtext": [{"text": "§e[Leave Team] §c"}, {"selector": "@s"},{"text": " has left all teams."}]}
execute as @s[tag=team_lambda] if score game_active game_active matches 0 run tellraw @a {"rawtext": [{"text": "§e[Leave Team] §c"}, {"selector": "@s"},{"text": " has left all teams."}]}
execute as @s[tag=team_lambda] if score game_active game_active matches 0 run tag @s remove team_lambda
execute as @s[tag=team_nu] if score game_active game_active matches 0 run tag @s remove team_nu