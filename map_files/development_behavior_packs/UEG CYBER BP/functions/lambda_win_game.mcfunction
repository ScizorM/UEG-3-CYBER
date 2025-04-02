#bridge-file-version: #5
tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] "},{"text": "§aTeam Lambda wins the game!"}]}
scoreboard players add @a[tag=team_lambda] player_wins 1
scoreboard players add @a[tag=team_lambda] winSteak 1
scoreboard players set @a[tag=team_nu] winStreak 0
scoreboard players add @a[tag=team_nu] player_game_losses 1