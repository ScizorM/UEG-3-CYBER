#bridge-file-version: #4
scoreboard players operation team_lambda team_wins_1_lower = team_lambda team_wins
execute if score team_lambda team_wins_1_lower matches 1.. run scoreboard players remove team_lambda team_wins_1_lower 1
scoreboard players operation team_nu team_wins_1_lower = team_nu team_wins
execute if score team_nu team_wins_1_lower matches 1.. run scoreboard players remove team_nu team_wins_1_lower 1
 