#bridge-file-version: #15
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~ ~-0.1 ~ air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~-.1 ~-0.1 ~-.1 air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~.1 ~-0.1 ~.1 air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~.1 ~-0.1 ~ air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~ ~-0.1 ~.1 air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~-.1 ~-0.1 ~ air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~ ~-0.1 ~-.1 air run function heavenpiercer_run_groundslam
 
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~ ~ ~ air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~-.1 ~ ~-.1 air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~.1 ~ ~.1 air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~.1 ~ ~ air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~ ~ ~.1 air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~-.1 ~ ~ air run function heavenpiercer_run_groundslam
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run execute if score @s heavenpiercer_timer matches 12.. run execute unless block ~ ~ ~-.1 air run function heavenpiercer_run_groundslam
scoreboard players add @a[tag=in_air_heavenpiercer] heavenpiercer_timer 1
execute as @a[tag=in_air_heavenpiercer] run execute positioned as @s run fill ~10 ~10 ~10 ~-10 ~-10 ~-10 air replace light_block