#bridge-file-version: #19
tellraw @a {"rawtext":[{"text":"§e[Arena Unlock] §cUnnamed Explosion Game Arena Pack locked."}]}
execute positioned 169 13 -57 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:locked
execute positioned 169 13 -65 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:locked
execute positioned 169 13 -73 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:locked
execute positioned 177 13 -57 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:locked
execute positioned 177 13 -65 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:locked
execute positioned 177 13 -73 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:locked
scoreboard players set 0010_ss_ueg enabled_arenas -1
scoreboard players set 0012_retro_maze enabled_arenas -1
scoreboard players set 0013_chaos_void enabled_arenas -1
scoreboard players set 0014_abstract enabled_arenas -1
scoreboard players set 0018_synthwave enabled_arenas -1
scoreboard players set 0023_the_tower enabled_arenas -1
event entity @e[tag=ueg1_unlockable] sm:add_locked
fill 171 13 -56 170 15 -58 structure_void keep
fill 171 13 -64 170 15 -66 structure_void keep
fill 171 13 -72 170 15 -74 structure_void keep
fill 175 13 -74 176 15 -72 structure_void keep
fill 175 13 -66 176 15 -64 structure_void keep
fill 175 13 -58 176 15 -56 structure_void keep