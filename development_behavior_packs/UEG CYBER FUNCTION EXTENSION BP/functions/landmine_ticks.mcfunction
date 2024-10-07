#bridge-file-version: #1
execute as @e[type=sm:landmine_ver_nu] run execute as @s positioned as @s if entity @a[tag=team_lambda,r=2] run function landmine_explode_commands
execute as @e[type=sm:landmine_ver_lambda] run execute as @s positioned as @s if entity @a[tag=team_nu,r=2] run function landmine_explode_commands
 