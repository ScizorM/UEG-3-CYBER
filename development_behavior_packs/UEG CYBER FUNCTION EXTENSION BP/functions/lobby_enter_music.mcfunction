#bridge-file-version: #15
tag @s[tag=!enter_music] remove music_playing
execute as @s[tag=!enter_music] run function title_music
tag @s add enter_music
tag @s remove exit_stores