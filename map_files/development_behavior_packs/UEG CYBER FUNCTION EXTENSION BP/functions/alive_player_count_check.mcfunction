#bridge-file-version: #1
scoreboard players reset team_nu player_alive_count
scoreboard players reset team_lambda player_alive_count
execute as @a[tag=teamed,tag=team_nu] run scoreboard players add team_nu player_alive_count 1
execute as @a[tag=teamed,tag=team_lambda] run scoreboard players add team_lambda player_alive_count 1