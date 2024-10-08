#bridge-file-version: #26
execute as @a[tag=teamed,tag=music_enabled] if score song_16 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_16_a_nu_earth
execute if score song_16 songs_enabled matches 0 run function randomize_music