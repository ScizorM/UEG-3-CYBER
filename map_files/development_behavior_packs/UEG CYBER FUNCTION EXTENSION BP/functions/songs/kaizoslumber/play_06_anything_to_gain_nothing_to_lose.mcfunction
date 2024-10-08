#bridge-file-version: #16
execute as @a[tag=teamed,tag=music_enabled] if score song_6 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_06_anything_to_gain_nothing_to_lose
execute if score song_6 songs_enabled matches 0 run function randomize_music