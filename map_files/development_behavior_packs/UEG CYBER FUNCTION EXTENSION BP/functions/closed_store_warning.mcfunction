#bridge-file-version: #4
execute as @s[tag=!team_nu,tag=!team_lambda] run function lobby_exit
tellraw @s[tag=!team_nu,tag=!team_lambda] {"rawtext":[{"text":"§e[Warning] §cThis store is closed for the time being while a match is active/an operator has disabled access. Come back later!"}]}
tp @s[tag=!team_nu,tag=!team_lambda] 140 13 12 facing 140 13 11
camera @s[tag=!team_nu,tag=!team_lambda] fade time 0 2 1 color 0 0 0