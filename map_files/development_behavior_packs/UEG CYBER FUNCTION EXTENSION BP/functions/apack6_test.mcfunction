#bridge-file-version: #7
execute as @a[r=3] run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block_2 run function remove_all_purchase_tests
execute as @a[r=3] run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block_2 run tag @s add arena_pack6