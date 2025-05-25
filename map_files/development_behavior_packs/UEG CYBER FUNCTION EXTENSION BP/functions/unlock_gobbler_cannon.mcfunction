#bridge-file-version: #0
execute if score gobbler_cannon unlocked_weapons matches 1 run tellraw @s {"rawtext":[{"text":"<Gob Dog Salesman> YOU ALREADY HAVE A GREEN GOBBLER'S SIGNATURE BLUDGEONING CANNON!!! NO MORE FOR YOU!!!! I AM KEEPING THE MONEY THOUGH!!!"}]}
execute if score gobbler_cannon unlocked_weapons matches 0 run tellraw @s {"rawtext":[{"text":"<Gob Dog Salesman> FREE PRIZE FOR YOU FOR BUYING §lTEN§r FRIES!!!!"}]}
execute if score gobbler_cannon unlocked_weapons matches 0 run function unlock_gobbler_cannon_real