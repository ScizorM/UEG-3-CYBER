#bridge-file-version: #14
execute as @s positioned ~ ~ ~ run setblock ~ ~ ~ slime
execute as @s positioned ~ ~ ~-1 run setblock ~ ~ ~ slime
execute as @s positioned ~-1 ~ ~ run setblock ~ ~ ~ slime
execute as @s positioned ~-1 ~ ~-1 run setblock ~ ~ ~ slime
execute as @s positioned ~1 ~ ~-1 run setblock ~ ~ ~ slime
execute as @s positioned ~-1 ~ ~1 run setblock ~ ~ ~ slime
execute as @s positioned ~ ~ ~1 run setblock ~ ~ ~ slime
execute as @s positioned ~1 ~ ~ run setblock ~ ~ ~ slime
execute as @s positioned ~1 ~ ~1 run setblock ~ ~ ~ slime
##
execute as @s positioned ~ ~1 ~ run setblock ~ ~ ~ slime
execute as @s positioned ~ ~1 ~-1 run setblock ~ ~ ~ slime
execute as @s positioned ~-1 ~1 ~ run setblock ~ ~ ~ slime
execute as @s positioned ~-1 ~1 ~-1 run setblock ~ ~ ~ slime
execute as @s positioned ~1 ~1 ~-1 run setblock ~ ~ ~ slime
execute as @s positioned ~-1 ~1 ~1 run setblock ~ ~ ~ slime
execute as @s positioned ~ ~1 ~1 run setblock ~ ~ ~ slime
execute as @s positioned ~1 ~1 ~ run setblock ~ ~ ~ slime
execute as @s positioned ~1 ~1 ~1 run setblock ~ ~ ~ slime
##
execute as @s positioned ~ ~-1 ~ run setblock ~ ~ ~ slime
execute as @s positioned ~ ~-1 ~-1 run setblock ~ ~ ~ slime
execute as @s positioned ~-1 ~-1 ~ run setblock ~ ~ ~ slime
execute as @s positioned ~-1 ~-1 ~-1 run setblock ~ ~ ~ slime
execute as @s positioned ~1 ~-1 ~-1 run setblock ~ ~ ~ slime
execute as @s positioned ~-1 ~-1 ~1 run setblock ~ ~ ~ slime
execute as @s positioned ~ ~-1 ~1 run setblock ~ ~ ~ slime
execute as @s positioned ~1 ~-1 ~ run setblock ~ ~ ~ slime
execute as @s positioned ~1 ~-1 ~1 run setblock ~ ~ ~ slime
execute unless block ~ ~ ~ air run event entity @ sm:despawn