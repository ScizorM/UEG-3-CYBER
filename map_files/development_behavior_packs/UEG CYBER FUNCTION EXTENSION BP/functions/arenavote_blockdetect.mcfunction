#bridge-file-version: #4
execute as @a run execute positioned as @s run execute if block ~ ~ ~ sm:vote_arena_slab_1 run function arenavote_slot1
execute as @a run execute positioned as @s run execute if block ~ ~ ~ sm:vote_arena_slab_2 run function arenavote_slot2
execute as @a run execute positioned as @s run execute if block ~ ~ ~ sm:vote_arena_slab_3 run function arenavote_slot3
 
execute if score arena_1 arena_vote matches 0 run event entity @e[tag=arena_slot_1] sm:zero
execute if score arena_1 arena_vote matches 1 run event entity @e[tag=arena_slot_1] sm:one
execute if score arena_1 arena_vote matches 2 run event entity @e[tag=arena_slot_1] sm:two
execute if score arena_1 arena_vote matches 3 run event entity @e[tag=arena_slot_1] sm:three
execute if score arena_1 arena_vote matches 4 run event entity @e[tag=arena_slot_1] sm:four
execute if score arena_1 arena_vote matches 5 run event entity @e[tag=arena_slot_1] sm:five
execute if score arena_1 arena_vote matches 6 run event entity @e[tag=arena_slot_1] sm:six
execute if score arena_1 arena_vote matches 7 run event entity @e[tag=arena_slot_1] sm:seven
execute if score arena_1 arena_vote matches 8 run event entity @e[tag=arena_slot_1] sm:eight
execute if score arena_1 arena_vote matches 9 run event entity @e[tag=arena_slot_1] sm:nine
execute if score arena_1 arena_vote matches 10.. run event entity @e[tag=arena_slot_1] sm:nineplus
 
execute if score arena_2 arena_vote matches 0 run event entity @e[tag=arena_slot_2] sm:zero
execute if score arena_2 arena_vote matches 1 run event entity @e[tag=arena_slot_2] sm:one
execute if score arena_2 arena_vote matches 2 run event entity @e[tag=arena_slot_2] sm:two
execute if score arena_2 arena_vote matches 3 run event entity @e[tag=arena_slot_2] sm:three
execute if score arena_2 arena_vote matches 4 run event entity @e[tag=arena_slot_2] sm:four
execute if score arena_2 arena_vote matches 5 run event entity @e[tag=arena_slot_2] sm:five
execute if score arena_2 arena_vote matches 6 run event entity @e[tag=arena_slot_2] sm:six
execute if score arena_2 arena_vote matches 7 run event entity @e[tag=arena_slot_2] sm:seven
execute if score arena_2 arena_vote matches 8 run event entity @e[tag=arena_slot_2] sm:eight
execute if score arena_2 arena_vote matches 9 run event entity @e[tag=arena_slot_2] sm:nine
execute if score arena_2 arena_vote matches 10.. run event entity @e[tag=arena_slot_2] sm:nineplus
 
execute if score arena_3 arena_vote matches 0 run event entity @e[tag=arena_slot_3] sm:zero
execute if score arena_3 arena_vote matches 1 run event entity @e[tag=arena_slot_3] sm:one
execute if score arena_3 arena_vote matches 2 run event entity @e[tag=arena_slot_3] sm:two
execute if score arena_3 arena_vote matches 3 run event entity @e[tag=arena_slot_3] sm:three
execute if score arena_3 arena_vote matches 4 run event entity @e[tag=arena_slot_3] sm:four
execute if score arena_3 arena_vote matches 5 run event entity @e[tag=arena_slot_3] sm:five
execute if score arena_3 arena_vote matches 6 run event entity @e[tag=arena_slot_3] sm:six
execute if score arena_3 arena_vote matches 7 run event entity @e[tag=arena_slot_3] sm:seven
execute if score arena_3 arena_vote matches 8 run event entity @e[tag=arena_slot_3] sm:eight
execute if score arena_3 arena_vote matches 9 run event entity @e[tag=arena_slot_3] sm:nine
execute if score arena_3 arena_vote matches 10.. run event entity @e[tag=arena_slot_3] sm:nineplus