#bridge-file-version: #30
tp @s 140 13 -41 facing 140 13 -39
camera @s fade time 0 1 0.5
clear @s
tag @s add 2f
tag @s remove 1f
tag @s remove 3f
tag @s add exit_stores
tag @s remove tutorial_pt5
tag @s remove tutorial_pt6
scoreboard players set @s tutorial_dialogue_timer 0
tag @s remove lives_tutorial
tag @s remove tutorial
tag @s add tutorial_completed
gamemode a @s