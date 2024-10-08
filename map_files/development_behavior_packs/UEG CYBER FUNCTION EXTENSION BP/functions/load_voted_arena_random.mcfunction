#bridge-file-version: #2
tellraw @a[tag=teamed] {"rawtext": [{"text": "§e[PVP Announcements] "},{"text": "§cInconclusive arena vote. Selecting a random arena..."}]}
scoreboard players random choice arena_vote_random 1 3
execute if score choice arena_vote_random matches 1 run function load_voted_arena_slot1
execute if score choice arena_vote_random matches 2 run function load_voted_arena_slot2
execute if score choice arena_vote_random matches 3 run function load_voted_arena_slot3