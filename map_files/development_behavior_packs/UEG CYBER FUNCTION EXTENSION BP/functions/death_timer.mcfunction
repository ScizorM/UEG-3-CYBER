#bridge-file-version: #2
scoreboard players add @a[tag=death_timer] death_timer 1
execute as @a[scores={death_timer=50..},tag=death_timer] run function end_death_timer