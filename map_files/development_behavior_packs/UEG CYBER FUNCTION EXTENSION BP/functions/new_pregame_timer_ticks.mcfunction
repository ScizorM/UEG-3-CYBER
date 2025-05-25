#bridge-file-version: #0
execute if score new_pregame_timer_active new_pregame_timer_active matches 1 run scoreboard players add new_pregame_timer new_pregame_timer 1
execute if score new_pregame_timer new_pregame_timer matches 300.. run function end_new_pregame_timer
execute if score new_pregame_timer new_pregame_timer matches 299 run execute as @a[tag=teamed] run execute positioned as @s run /playsound clock_bell @s ~ ~ ~ 0.5
execute if score new_pregame_timer new_pregame_timer matches 280 run execute as @a[tag=teamed] run execute positioned as @s run /playsound clock_tick @s
execute if score new_pregame_timer new_pregame_timer matches 260 run execute as @a[tag=teamed] run execute positioned as @s run /playsound clock_tick @s
execute if score new_pregame_timer new_pregame_timer matches 240 run execute as @a[tag=teamed] run execute positioned as @s run /playsound clock_tick @s
execute if score new_pregame_timer new_pregame_timer matches 220 run execute as @a[tag=teamed] run execute positioned as @s run /playsound clock_tick @s
execute if score new_pregame_timer new_pregame_timer matches 200 run execute as @a[tag=teamed] run execute positioned as @s run /playsound clock_tick @s
execute if score new_pregame_timer new_pregame_timer matches 180 run execute as @a[tag=teamed] run execute positioned as @s run /playsound clock_tick @s