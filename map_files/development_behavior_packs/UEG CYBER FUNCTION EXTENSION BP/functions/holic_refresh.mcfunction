#bridge-file-version: #2
execute if score @s holic_hits matches 0..2 run scoreboard players set @s holic_hits 0
execute if score @s holic_hits matches 3.. run scoreboard players add @s holic_hits -3
execute if score @s holic_hits matches 0..3 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_0 ^ ^1 ^2
##level 1:
execute if score @s holic_hits matches 4..6 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_1 ^ ^1 ^2
##level 2:
execute if score @s holic_hits matches 7..9 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_2 ^ ^1 ^2
##level 3:
execute if score @s holic_hits matches 10..12 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_3 ^ ^1 ^2
##level 4: 
execute if score @s holic_hits matches 13..15 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_4 ^ ^1 ^2
##level 5:
execute if score @s holic_hits matches 16..18 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_5 ^ ^1 ^2
##level 6:
execute if score @s holic_hits matches 19..21 run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_6 ^ ^1 ^2
##level 7:
execute if score @s holic_hits matches 22.. run execute as @s positioned ~ ~1.5 ~ run particle sm:holic_number_7 ^ ^1 ^2