#bridge-file-version: #3
tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] "},{"text": "§aTeam Nu wins round "},{"score":{"name":"round","objective":"round"}},{"text": "!"}]}
tellraw @a {"rawtext": [{"text": "§eScore:"},{"text": "§c Team Nu: "},{"score":{"name":"team_nu","objective":"team_wins"}},{"text": ", §dTeam Lambda: "},{"score":{"name":"team_lambda","objective":"team_wins"}}]}
tag @a[tag=team_nu] add winRound
scoreboard players add @a[tag=team_lambda] player_round_losses 1