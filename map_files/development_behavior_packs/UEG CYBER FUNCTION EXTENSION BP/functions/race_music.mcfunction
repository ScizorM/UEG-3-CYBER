#bridge-file-version: #5
execute as @s[tag=!race_music_active] run playsound music.boatride @s
tag @s add race_music_active