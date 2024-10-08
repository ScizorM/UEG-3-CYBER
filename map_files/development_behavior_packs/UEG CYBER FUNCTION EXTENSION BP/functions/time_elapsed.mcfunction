#bridge-file-version: #5
execute as @a run execute if score @s time_elap_sec matches 0..59 run /scoreboard players add @s time_elap_sec 1
execute as @a run execute if score @s time_elap_sec matches 60.. run function time_elapsed_min
scoreboard players add @a time_elap_sec 0
scoreboard players add @a time_elap_min 0
scoreboard players add @a time_elap_hr 0