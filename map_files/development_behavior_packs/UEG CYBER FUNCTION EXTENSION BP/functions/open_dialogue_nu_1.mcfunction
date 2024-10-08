#bridge-file-version: #9
execute if score game_active game_active matches 0 run execute as @s run dialogue open @s @p[r=1,tag=!team_nu,tag=!team_lambda] join_team_nu
execute if score game_active game_active matches 0 run execute as @s run dialogue open @s @p[r=1,tag=team_nu,tag=!team_lambda] leave_team
execute if score game_active game_active matches 0 run execute as @s run dialogue open @s @p[r=1,tag=!team_nu,tag=team_lambda] leave_team
execute if score game_active game_active matches 1 run execute as @s run dialogue open @s @p[r=1] game_active