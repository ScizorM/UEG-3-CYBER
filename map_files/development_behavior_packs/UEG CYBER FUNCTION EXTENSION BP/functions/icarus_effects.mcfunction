#bridge-file-version: #4
execute as @s[scores={icarus_gun_fire=0}] run execute positioned ~ ~1.5 ~ run particle sm:blast_magma ^1 ^ ^0.7
execute as @s[scores={icarus_gun_fire=1}] run execute positioned ~ ~1.5 ~ run particle sm:blast_magma ^-1 ^ ^0.7