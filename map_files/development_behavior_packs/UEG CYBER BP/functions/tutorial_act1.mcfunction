#bridge-file-version: #6
tp @s -66 75 0 facing -65 75 0
camera @s fade time 0 1 0.5
title @s title Tutorial
ability @s mayfly false
title @s subtitle Part 1: Dash Meter / Dashing
tag @s add tutorial
scoreboard players set @s dashes 10
tag @s remove tutorial_pt0
tag @s add tutorial_pt1
scoreboard players set @s tutorial_dialogue_timer 0