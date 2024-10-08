#bridge-file-version: #3
execute if score team_nu team_wins < max_wins max_wins run execute as @a[tag=teamed] run function title_nuwin1
execute if score team_nu team_wins >= max_wins max_wins run execute as @a[tag=teamed] run function title_nuwin2