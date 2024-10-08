#bridge-file-version: #19
execute as @a[tag=teamed,tag=music_enabled] if score song_9 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_09_tinydeath
execute if score song_9 songs_enabled matches 0 run function randomize_music