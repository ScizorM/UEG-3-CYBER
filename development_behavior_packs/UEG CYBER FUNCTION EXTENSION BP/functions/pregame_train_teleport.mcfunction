#bridge-file-version: #10
setblock -64 -13 -7 redstone_block
scoreboard players set game_active game_active 1
tag @a[tag=team_lambda] add teamed
tag @a[tag=team_nu] add teamed
camera @a[tag=teamed] fade time 0 0.5 0.5
execute as @a[tag=team_nu,tag=on_train] run execute positioned as @s run tp @s[tag=team_nu,tag=on_train] ~182 ~ ~
execute as @a[tag=team_lambda,tag=on_train] positioned as @s run tp @s[tag=team_lambda,tag=on_train] ~182 ~ ~
tellraw @a[tag=teamed] {"rawtext": [{"text": "§e<Conductor> §aPlease wait, the train will arrive at Azure Stadium shortly. In the meantime, feel free to explore the cabs."}]}
execute as @a[tag=teamed] run function title_toazure