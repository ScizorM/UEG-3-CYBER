#bridge-file-version: #9
scoreboard players add @s heavenpiercer_meter 1
execute if score @s heavenpiercer_meter matches 7.. run scoreboard players set @s heavenpiercer_meter 6
execute as @s positioned ~ ~1.5 ~ run particle sm:blood_splatter ^ ^ ^2
execute as @s positioned ~ ~1.5 ~ run execute if score @s heavenpiercer_meter matches 1 run particle sm:440_number_1 ^ ^1 ^2
execute as @s positioned ~ ~1.5 ~ run execute if score @s heavenpiercer_meter matches 2 run particle sm:440_number_2 ^ ^1 ^2
execute as @s positioned ~ ~1.5 ~ run execute if score @s heavenpiercer_meter matches 3 run particle sm:440_number_3 ^ ^1 ^2
execute as @s positioned ~ ~1.5 ~ run execute if score @s heavenpiercer_meter matches 4 run particle sm:440_number_4 ^ ^1 ^2
execute as @s positioned ~ ~1.5 ~ run execute if score @s heavenpiercer_meter matches 5 run particle sm:440_number_5 ^ ^1 ^2
execute as @s positioned ~ ~1.5 ~ run execute if score @s heavenpiercer_meter matches 6 run particle sm:440_number_6 ^ ^1 ^2