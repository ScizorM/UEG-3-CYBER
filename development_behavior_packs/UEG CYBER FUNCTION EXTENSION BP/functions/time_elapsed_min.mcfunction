#bridge-file-version: #5
execute as @s run execute if score @s time_elap_min matches 0..59 run /scoreboard players add @s time_elap_min 1
scoreboard players set @s time_elap_sec 0
execute as @s run execute if score @s time_elap_min matches 60.. run function time_elapsed_h