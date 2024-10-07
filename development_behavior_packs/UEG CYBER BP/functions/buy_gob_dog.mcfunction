#bridge-file-version: #5
tellraw @s {"rawtext":[{"text":"<Gob Dog Salesman> THANK YOU!!!"}]}
scoreboard players remove @s credits 3
scoreboard players add @s purchased_gob_dogs 1
execute @s[scores={purchased_gob_dogs=10}] ~ ~ ~ function unlock_gob_goo_cannon
give @s sm:gob_dog