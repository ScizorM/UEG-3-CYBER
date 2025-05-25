#bridge-file-version: #24
execute as @a[tag=teamed,tag=music_enabled] if score song_14 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_14_purple_is_the_new_green
execute if score song_14 songs_enabled matches 0 run function randomize_music