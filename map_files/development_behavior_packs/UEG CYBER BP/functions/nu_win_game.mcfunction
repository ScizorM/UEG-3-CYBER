#bridge-file-version: #4
tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] "},{"text": "§aTeam Nu wins the game!"}]}
scoreboard players add @a[tag=team_nu] player_wins 1
scoreboard players add @a[tag=team_nu] winSteak 1
scoreboard players set @a[tag=team_lambda] winStreak 0
scoreboard players add @a[tag=team_lambda] player_game_losses 1