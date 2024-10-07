#bridge-file-version: #15
execute as @s run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run kill @e[tag=projectile,r=4,type=!sm:landmine_ver_nu,type=!sm:landmine_ver_lambda]
execute as @s run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run kill @e[type=arrow,r=4,type=!sm:landmine_ver_nu,type=!sm:landmine_ver_lambda]
execute as @s run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run /event entity @e[r=4,tag=projectile,type=sm:landmine_ver_nu] sm:despawn
execute as @s run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run /event entity @e[r=4,tag=projectile,type=sm:landmine_ver_lambda] sm:despawn
execute positioned ~ ~1.5 ~ run particle sm:blast_parry ^-0.4 ^ ^0.5
playsound parry @a[r=30] ~ ~ ~