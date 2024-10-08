#bridge-file-version: #4
##greater than
execute if score arena_1 arena_vote > arena_2 arena_vote run execute if score arena_1 arena_vote > arena_3 arena_vote run function load_voted_arena_slot1
execute if score arena_2 arena_vote > arena_1 arena_vote run execute if score arena_2 arena_vote > arena_3 arena_vote run function load_voted_arena_slot2
execute if score arena_3 arena_vote > arena_1 arena_vote run execute if score arena_3 arena_vote > arena_2 arena_vote run function load_voted_arena_slot3
 
##all are equal
execute if score arena_1 arena_vote = arena_2 arena_vote run execute if score arena_2 arena_vote = arena_3 arena_vote run function load_voted_arena_random
 
##1 is equal to 2 but 2 isn't equal to 3
execute if score arena_1 arena_vote = arena_2 arena_vote run execute unless score arena_2 arena_vote <= arena_3 arena_vote run function load_voted_arena_random
 
##2 is equal to 3 but 2 isn't equal to 1
execute unless score arena_1 arena_vote >= arena_2 arena_vote run execute if score arena_2 arena_vote = arena_3 arena_vote run function load_voted_arena_random
 
##1 is equal to 3 but 1 isn't equal to 2
execute unless score arena_1 arena_vote <= arena_2 arena_vote run execute if score arena_1 arena_vote = arena_3 arena_vote run function load_voted_arena_random