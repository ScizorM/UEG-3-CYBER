#bridge-file-version: #1
tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] "},{"text": "§aTeam Lambda wins round "},{"score":{"name":"round","objective":"round"}},{"text": "!"}]}
tellraw @a {"rawtext": [{"text": "§aScore:"},{"text": "§c Team Nu: "},{"score":{"name":"team_nu","objective":"team_wins"}},{"text": ", §dTeam Lambda: "},{"score":{"name":"team_lambda","objective":"team_wins"}}]}
function winRound
scoreboard players add @a[tag=team_nu] player_round_losses 1