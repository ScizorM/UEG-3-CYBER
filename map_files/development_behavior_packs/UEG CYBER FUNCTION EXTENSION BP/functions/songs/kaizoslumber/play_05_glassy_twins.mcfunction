#bridge-file-version: #15
execute as @a[tag=teamed,tag=music_enabled] if score song_5 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_05_glassy_twins
execute if score song_5 songs_enabled matches 0 run function randomize_music