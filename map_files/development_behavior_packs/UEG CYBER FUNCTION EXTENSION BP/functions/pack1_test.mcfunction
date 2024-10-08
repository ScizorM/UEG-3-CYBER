#bridge-file-version: #1
execute as @a[r=3] run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block run function remove_all_purchase_tests
execute as @a[r=3] run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block run tag @s add music_pack1