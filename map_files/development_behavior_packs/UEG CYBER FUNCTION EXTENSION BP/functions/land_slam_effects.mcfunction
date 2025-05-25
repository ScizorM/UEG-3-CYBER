#bridge-file-version: #23
##execute as @a[scores={since_touched_land=30..}] run execute positioned as @s run execute unless block ~ ~-1 ~ air run particle sm:explosion_ring_small ~ ~0.05 ~
execute as @a run execute as @s positioned as @s run execute if block ~ ~-1 ~ air run execute if block ~ ~-2 ~ air run scoreboard players add @s since_touched_land 1
execute as @a run execute as @s positioned as @s run execute unless block ~ ~-1 ~ air run scoreboard players set @s since_touched_land 0