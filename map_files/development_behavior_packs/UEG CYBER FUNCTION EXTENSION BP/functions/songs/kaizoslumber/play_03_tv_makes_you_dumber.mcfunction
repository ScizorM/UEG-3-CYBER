#bridge-file-version: #13
execute as @a[tag=teamed,tag=music_enabled] if score song_3 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_03_tv_makes_you_dumber
execute if score song_3 songs_enabled matches 0 run function randomize_music