#bridge-file-version: #14
execute as @a[tag=music_info] run scoreboard players add @s music_info_timer 1
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 10 run camera @s set minecraft:free ease 2 in_out_sine pos 118 19 -12 facing 115 16 -16
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 10 run /tellraw @s {"rawtext":[{"text":"§e<Torimoti> §fWelcome to Torimoti Music!"}]}
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 100 run /tellraw @s {"rawtext":[{"text":"§e<Torimoti> §fIn this store, you can see your collection of music, select what music will play in-game, and even unlock more songs."}]}
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 300 run camera @s set minecraft:free ease 2 in_out_sine pos 117 15 -13 facing 117 15 -10
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 300 run /tellraw @s {"rawtext":[{"text":"§e<Torimoti> §fTo toggle specific songs and listen to their previews, interact with one of the song jackets."}]}
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 500 run /tellraw @s {"rawtext":[{"text":"§e<Torimoti> §fIf a song is enabled, it will have a green circle above the song's jacket, otherwise, it will be a red X."}]}
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 700 run camera @s set minecraft:free ease 2 in_out_sine pos 112 15 -18 facing 107 14 -20
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 700 run /tellraw @s {"rawtext":[{"text":"§e<Torimoti> §fTo purchase song packs, step on the dollar sign block in front of the set of songs, and use the 'purchase' button that shows up."}]}
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 900 run /tellraw @s {"rawtext":[{"text":"§e<Torimoti> §fThat's everything you need to know! Speak to me to see this again if you need to."}]}
execute as @a[tag=music_info] run execute if score @s music_info_timer matches 925 run function clear_music_info