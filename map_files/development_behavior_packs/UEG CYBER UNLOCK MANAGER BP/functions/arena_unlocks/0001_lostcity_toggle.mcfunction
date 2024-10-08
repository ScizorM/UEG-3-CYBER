#bridge-file-version: #16
tellraw @a {"rawtext":[{"text":"§e[Arena Unlock] §aUnnamed Explosion Game Arena Pack unlocked."}]}
execute positioned 169 13 -57 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:0010_ss_ueg
execute positioned 169 13 -65 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:0013_chaos_void
execute positioned 169 13 -73 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:0018_synthwave
execute positioned 177 13 -57 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:0012_retro_maze
execute positioned 177 13 -65 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:0014_abstract
execute positioned 177 13 -73 run execute as @e[type=sm:arenainfo,r=2] run event entity @s sm:0013_the_tower
scoreboard players set 0010_ss_ueg enabled_arenas 0
scoreboard players set 0012_retro_maze enabled_arenas 0
scoreboard players set 0013_chaos_void enabled_arenas 0
scoreboard players set 0014_abstract enabled_arenas 0
scoreboard players set 0018_synthwave enabled_arenas 0
scoreboard players set 0023_the_tower enabled_arenas 0
event entity @e[tag=ueg1_unlockable] sm:add_disabled
fill 171 13 -56 170 15 -58 air replace structure_void
fill 171 13 -64 170 15 -66 air replace structure_void
fill 171 13 -72 170 15 -74 air replace structure_void
fill 175 13 -74 176 15 -72 air replace structure_void
fill 175 13 -66 176 15 -64 air replace structure_void
fill 175 13 -58 176 15 -56 air replace structure_void