#bridge-file-version: #8
scoreboard players add non_music_op non_music_op 1
execute if score non_music_op non_music_op matches 2.. run scoreboard players set non_music_op non_music_op 0
execute if score non_music_op non_music_op matches -10..-1 run scoreboard players set non_music_op non_music_op 1
execute if score non_music_op non_music_op matches 0 run event entity @s sm:add_disabled
execute if score non_music_op non_music_op matches 1 run event entity @s sm:add_enabled