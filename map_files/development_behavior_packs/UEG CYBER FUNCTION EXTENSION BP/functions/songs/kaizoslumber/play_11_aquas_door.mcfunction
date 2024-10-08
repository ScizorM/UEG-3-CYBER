#bridge-file-version: #21
execute as @a[tag=teamed,tag=music_enabled] if score song_11 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_11_aquas_door
execute if score song_11 songs_enabled matches 0 run function randomize_music