#bridge-file-version: #5
scoreboard players add @s holic_hits 1
execute as @s positioned ~ ~1.5 ~ run particle sm:holic_hit ^ ^1 ^2
#execute if score @s holic_hits matches 0..3 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_  ^ ^1 ^2
##level 1:
execute if score @s holic_hits matches 4 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_1 ^ ^1 ^2
##level 2:
execute if score @s holic_hits matches 7 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_2 ^ ^1 ^2
##level 3:
execute if score @s holic_hits matches 10 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_3 ^ ^1 ^2
##level 4: 
execute if score @s holic_hits matches 13 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_4 ^ ^1 ^2
##level 5:
execute if score @s holic_hits matches 16 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_5 ^ ^1 ^2
##level 6:
execute if score @s holic_hits matches 19 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_6 ^ ^1 ^2
##level 7:
execute if score @s holic_hits matches 22 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_7 ^ ^1 ^2