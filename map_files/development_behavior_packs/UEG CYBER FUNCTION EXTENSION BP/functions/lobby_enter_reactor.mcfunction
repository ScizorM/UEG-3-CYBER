#bridge-file-version: #15
execute as @s[tag=!enter_reactor] run function title_lobby_2f_settings
tag @s[tag=!enter_reactor] remove music_playing
tag @s add enter_reactor
tag @s remove exit_stores