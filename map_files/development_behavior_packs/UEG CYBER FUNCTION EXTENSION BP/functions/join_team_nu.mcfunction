#bridge-file-version: #5
execute as @s[tag=!team_nu,tag=!team_lambda] if score game_active game_active matches 0 run tellraw @a {"rawtext": [{"text": "§e[Join Team] §a"}, {"selector": "@s"},{"text": " has joined Team Nu."}]}
execute as @s[tag=!team_nu,tag=!team_lambda] if score game_active game_active matches 0 run tag @s add team_nu