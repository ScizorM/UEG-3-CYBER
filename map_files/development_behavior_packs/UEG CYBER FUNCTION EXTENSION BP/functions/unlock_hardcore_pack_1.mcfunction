#bridge-file-version: #4
execute positioned 108 13 -18 run setblock ~ ~1 ~ air
execute positioned 108 13 -20 run setblock ~ ~1 ~ air
execute positioned 108 13 -22 run setblock ~ ~1 ~ air
scoreboard players add unlocked_music_count unlocked_music_count 3
setblock 110 12 -20 sm:purchase_block_disabled
tellraw @a {"rawtext":[{"text":"§e[Song Unlocks] §aHardcore Pack Vol.1 unlocked."}]}