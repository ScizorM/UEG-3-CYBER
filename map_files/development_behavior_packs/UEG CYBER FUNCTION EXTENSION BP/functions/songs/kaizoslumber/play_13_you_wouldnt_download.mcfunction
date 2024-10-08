#bridge-file-version: #23
execute as @a[tag=teamed,tag=music_enabled] if score song_13 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_13_you_wouldnt_download
execute if score song_13 songs_enabled matches 0 run function randomize_music