#bridge-file-version: #13
execute as @a[tag=teamed,tag=music_enabled] if score song_2 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_02_galaxy_torimoti
execute if score song_2 songs_enabled matches 0 run function randomize_music