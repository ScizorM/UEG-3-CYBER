#bridge-file-version: #3
execute as @a[r=2] run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block_3 run function remove_all_purchase_tests
execute as @a[r=2] run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block_3 run tag @s add skin_slot_1