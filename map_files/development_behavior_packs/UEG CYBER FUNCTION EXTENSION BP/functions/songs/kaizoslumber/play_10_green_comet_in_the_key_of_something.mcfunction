#bridge-file-version: #20
execute as @a[tag=teamed,tag=music_enabled] if score song_10 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_10_green_comet_in_the_key_of_something
execute if score song_10 songs_enabled matches 0 run function randomize_music