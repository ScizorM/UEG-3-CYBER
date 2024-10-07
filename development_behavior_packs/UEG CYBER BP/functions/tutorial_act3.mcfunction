#bridge-file-version: #12
tp @s -61 95 2 facing -61 95 1
camera @s fade time 0 1 0.5
title @s title Tutorial
title @s subtitle Part 3: Abilities
xp -100L @s
tag @s remove tutorial_pt2
tag @s add tutorial_pt3
function remove_abilities
function select_ability_rocket
scoreboard players set @s tutorial_dialogue_timer 0