#bridge-file-version: #25
execute as @a[tag=teamed,tag=music_enabled] if score song_15 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_15_schlierberg
execute if score song_15 songs_enabled matches 0 run function randomize_music