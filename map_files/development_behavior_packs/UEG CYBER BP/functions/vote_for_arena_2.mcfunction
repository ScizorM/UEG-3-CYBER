#bridge-file-version: #8
execute @s[tag=voted_1] ~ ~ ~ scoreboard players remove arena_1 arena_vote 1
execute @s[tag=voted_3] ~ ~ ~ scoreboard players remove arena_3 arena_vote 1
tellraw @s {"rawtext":[{"text":"Arena 2 Selected."}]}
execute @s[tag=!voted_2] ~ ~ ~ scoreboard players add arena_2 arena_vote 1
tag @s add voted_2
tag @s remove voted_1
tag @s remove voted_3