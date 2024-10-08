#bridge-file-version: #0
execute if score gob_goo_cannon unlocked_weapons matches 1 run tellraw @s {"rawtext":[{"text":"<Gob Dog Salesman> YOU ALREADY HAVE A GOB GOO CANNON!!! NO MORE FOR YOU!!!! I AM KEEPING THE MONEY THOUGH!!!"}]}
execute if score gob_goo_cannon unlocked_weapons matches 0 run tellraw @s {"rawtext":[{"text":"<Gob Dog Salesman> FREE PRIZE FOR YOU FOR BUYING §lTEN§r DOGS!!!!"}]}
execute if score gob_goo_cannon unlocked_weapons matches 0 run function unlock_gob_goo_cannon_real