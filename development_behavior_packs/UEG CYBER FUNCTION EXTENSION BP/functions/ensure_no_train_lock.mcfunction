#bridge-file-version: #6
tp @s 140 -4 64 facing 140 -4 65
tag @s remove on_train
tellraw @s[tag=team_nu] {"rawtext": [{"text": "§e[Warning] §cYou were removed from the train because there are no players on one of the teams"}]}
tellraw @s[tag=team_lambda] {"rawtext": [{"text": "§e[Warning] §cYou were removed from the train because there are no players on one of the teams."}]}
tellraw @s[tag=!team_lambda,tag=!team_nu] {"rawtext": [{"text": "§e[Warning] §cYou were removed from the train because you are not on a team and the match is not able to be spectated yet."}]}