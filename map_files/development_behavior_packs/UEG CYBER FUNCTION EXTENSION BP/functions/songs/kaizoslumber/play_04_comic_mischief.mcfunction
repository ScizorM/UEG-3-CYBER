#bridge-file-version: #14
execute as @a[tag=teamed,tag=music_enabled] if score song_4 songs_enabled matches 1 run execute positioned as @s run function songs/kaizoslumber/music_04_comic_mischief
execute if score song_4 songs_enabled matches 0 run function randomize_music