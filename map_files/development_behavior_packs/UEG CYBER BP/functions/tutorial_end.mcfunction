#bridge-file-version: #30
tp @s 140 -4 53 facing 140 -4 52
camera @s fade time 0 1 0.5
clear @s
tag @s remove tutorial_pt5
tag @s remove tutorial_pt6
scoreboard players set @s tutorial_dialogue_timer 0
tag @s remove lives_tutorial
tag @s remove tutorial
tag @s add tutorial_completed
title @s title -1F: Metro-
gamemode a @s