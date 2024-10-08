#bridge-file-version: #22
execute if score round_active round_active matches 0 run execute if score boolean arena_vote_enabled matches 1 run function arena_randomizer/set_arenaindicator_1
execute if score round_active round_active matches 0 run execute if score boolean arena_vote_enabled matches 1 run function arena_randomizer/set_arenaindicator_2
execute if score round_active round_active matches 0 run execute if score boolean arena_vote_enabled matches 1 run function arena_randomizer/set_arenaindicator_3
execute if score round_active round_active matches 0 run execute if score boolean arena_vote_enabled matches 1 run function enable_voting
##
execute if score boolean arena_vote_enabled matches 0 run /execute positioned -50 1 133 run execute as @e[r=1,type=sm:arenainfo] run event entity @s sm:unknown
execute if score boolean arena_vote_enabled matches 0 run /execute positioned -50 1 140 run execute as @e[r=1,type=sm:arenainfo] run event entity @s sm:unknown
execute if score boolean arena_vote_enabled matches 0 run /execute positioned -50 1 147 run execute as @e[r=1,type=sm:arenainfo] run event entity @s sm:unknown
execute if score boolean arena_vote_enabled matches 0 run function disable_voting
 
execute if score round_active round_active matches 1 run execute if score boolean arena_vote_enabled matches 1 run /execute positioned -50 1 133 run execute as @e[r=1,type=sm:arenainfo] run event entity @s sm:unknown
execute if score round_active round_active matches 1 run execute if score boolean arena_vote_enabled matches 1 run /execute positioned -50 1 140 run execute as @e[r=1,type=sm:arenainfo] run event entity @s sm:unknown
execute if score round_active round_active matches 1 run execute if score boolean arena_vote_enabled matches 1 run /execute positioned -50 1 147 run execute as @e[r=1,type=sm:arenainfo] run event entity @s sm:unknown
execute if score round_active round_active matches 1 run execute if score boolean arena_vote_enabled matches 1 run function disable_voting