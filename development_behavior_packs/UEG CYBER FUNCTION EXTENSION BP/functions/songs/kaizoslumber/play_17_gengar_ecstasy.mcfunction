#bridge-file-version: #27
execute as @a[tag=teamed,tag=music_enabled] if score song_17 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_17_gengar_ecstasy
execute if score song_17 songs_enabled matches 0 run function randomize_music