#bridge-file-version: #8
scoreboard players add arena_vote_op arena_vote_op 1
execute if score arena_vote_op arena_vote_op matches 2.. run scoreboard players set arena_vote_op arena_vote_op 0
execute if score arena_vote_op arena_vote_op matches -10..-1 run scoreboard players set arena_vote_op arena_vote_op 1
execute if score arena_vote_op arena_vote_op matches 0 run event entity @s sm:add_disabled
execute if score arena_vote_op arena_vote_op matches 1 run event entity @s sm:add_enabled