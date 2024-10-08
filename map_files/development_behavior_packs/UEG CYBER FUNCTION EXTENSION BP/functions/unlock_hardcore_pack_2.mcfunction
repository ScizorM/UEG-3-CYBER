#bridge-file-version: #4
execute positioned 103 17 -19 run setblock ~ ~1 ~ air
execute positioned 103 17 -21 run setblock ~ ~1 ~ air
execute positioned 103 17 -23 run setblock ~ ~1 ~ air
scoreboard players add unlocked_music_count unlocked_music_count 3
setblock 105 16 -21 sm:purchase_block_disabled
tellraw @a {"rawtext":[{"text":"§e[Song Unlocks] §aHardcore Pack Vol.2 unlocked."}]}