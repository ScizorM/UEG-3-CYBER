#bridge-file-version: #5
execute if score total total_en_arenas matches 0 run execute if score boolean arena_vote_enabled matches 0 run function ensure_avote
scoreboard players add boolean arena_vote_enabled 1
execute if score boolean arena_vote_enabled matches 2.. run scoreboard players set boolean arena_vote_enabled 0
execute if score boolean arena_vote_enabled matches 2.. run function disable_voting
execute if score boolean arena_vote_enabled matches -10..-1 run scoreboard players set boolean arena_vote_enabled 1
execute if score boolean arena_vote_enabled matches -10..-1 run function enable_voting
execute if score boolean arena_vote_enabled matches 0 run event entity @s sm:add_disabled
execute if score boolean arena_vote_enabled matches 1 run event entity @s sm:add_enabled