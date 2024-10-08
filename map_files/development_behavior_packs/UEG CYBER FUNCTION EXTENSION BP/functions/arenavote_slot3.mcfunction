#bridge-file-version: #8
execute if score @s arena_vote_playercount matches 1 run scoreboard players remove arena_1 arena_vote 1
execute if score @s arena_vote_playercount matches 2 run scoreboard players remove arena_2 arena_vote 1
execute unless score @s arena_vote_playercount matches 3 run scoreboard players add arena_3 arena_vote 1
execute unless score @s arena_vote_playercount matches 3 run particle sm:vote_square_3 -52 0.5 147
execute unless score @s arena_vote_playercount matches 3 run tag @s add voted
execute unless score @s arena_vote_playercount matches 3 run scoreboard players set @s arena_vote_playercount 3