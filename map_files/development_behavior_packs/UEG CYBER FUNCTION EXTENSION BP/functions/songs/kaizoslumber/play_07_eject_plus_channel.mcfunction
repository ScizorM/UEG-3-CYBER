#bridge-file-version: #17
execute as @a[tag=teamed,tag=music_enabled] if score song_7 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_07_eject_plus_channel
execute if score song_7 songs_enabled matches 0 run function randomize_music