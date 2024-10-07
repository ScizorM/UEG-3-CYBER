#bridge-file-version: #9
execute @s[tag=voted_1] ~ ~ ~ scoreboard players remove arena_1 arena_vote 1
execute @s[tag=voted_2] ~ ~ ~ scoreboard players remove arena_2 arena_vote 1
tellraw @s {"rawtext":[{"text":"Arena 3 Selected."}]}
execute @s[tag=!voted_3] ~ ~ ~ scoreboard players add arena_3 arena_vote 1
tag @s add voted_3
tag @s remove voted_1
tag @s remove voted_2