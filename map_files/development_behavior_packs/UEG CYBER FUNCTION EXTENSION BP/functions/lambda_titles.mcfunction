#bridge-file-version: #2
execute if score team_lambda team_wins < max_wins max_wins run execute as @a[tag=teamed] run function title_lambdawin1
execute if score team_lambda team_wins >= max_wins max_wins run execute as @a[tag=teamed] run function title_lambdawin2