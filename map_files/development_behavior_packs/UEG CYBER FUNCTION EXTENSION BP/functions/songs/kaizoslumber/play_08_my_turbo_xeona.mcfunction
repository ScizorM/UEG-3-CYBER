#bridge-file-version: #18
execute as @a[tag=teamed,tag=music_enabled] if score song_8 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_08_my_turbo_xeona
execute if score song_8 songs_enabled matches 0 run function randomize_music