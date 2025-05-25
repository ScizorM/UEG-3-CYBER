#bridge-file-version: #29
execute as @a[tag=teamed,tag=music_enabled] if score song_18 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_18_space_angels_from_cyrene
execute if score song_18 songs_enabled matches 0 run function randomize_music