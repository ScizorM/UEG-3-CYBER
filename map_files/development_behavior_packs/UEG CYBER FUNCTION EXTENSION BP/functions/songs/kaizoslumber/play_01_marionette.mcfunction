#bridge-file-version: #11
execute as @a[tag=teamed,tag=music_enabled] if score song_1 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_01_marionette
execute if score song_1 songs_enabled matches 0 run function randomize_music