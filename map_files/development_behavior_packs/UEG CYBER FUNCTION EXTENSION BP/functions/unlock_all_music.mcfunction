#bridge-file-version: #3
execute positioned 108 13 -18 run setblock ~ ~1 ~ air
execute positioned 108 13 -20 run setblock ~ ~1 ~ air
execute positioned 108 13 -22 run setblock ~ ~1 ~ air
execute positioned 103 17 -19 run setblock ~ ~1 ~ air
execute positioned 103 17 -21 run setblock ~ ~1 ~ air
execute positioned 103 17 -23 run setblock ~ ~1 ~ air
scoreboard players set unlocked_music_count unlocked_music_count 18
tellraw @a {"rawtext":[{"text":"§e[Song Unlocks] §aHardcore Packs unlocked."}]}