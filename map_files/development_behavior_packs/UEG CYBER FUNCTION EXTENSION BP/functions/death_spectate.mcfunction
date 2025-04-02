#bridge-file-version: #7
scoreboard players add @a[tag=death_timer_new,scores={death_timer_new=0..199}] death_timer_new 1
execute as @a[tag=death_timer_new,scores={death_timer_new=200}] run execute if score round_active round_active matches 1 run tp @s -135 68 255 facing -135 67 255
execute as @a[tag=death_timer_new,scores={death_timer_new=200}] run execute if score round_active round_active matches 1 run gamemode spectator @s
##execute as @a[tag=death_timer_new,scores={death_timer_new=200}] run execute if score round_active round_active matches 1 run ability @s mayfly false
##execute as @a[tag=death_timer_new,scores={death_timer_new=200}] run execute if score round_active round_active matches 0 run ability @s mayfly false
execute as @a[tag=death_timer_new,scores={death_timer_new=200}] run tag @s remove death_timer_new
execute as @a[scores={death_timer_new=200}] run scoreboard players set @s death_timer_new 0
scoreboard players add @a death_timer_new 0
##mayfly true tag set the topmost one to true