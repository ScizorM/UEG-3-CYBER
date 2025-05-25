#bridge-file-version: #8
tellraw @s {"rawtext":[{"text":" Kaizo Slumber - COMIC MISCHIEF"}]}
execute positioned as @s if score volume music_volume matches 100.. run playsound music.comic_mischief @s ~ ~ ~ 1
execute positioned as @s if score volume music_volume matches 75..99 run playsound music.comic_mischief @s ~ ~ ~ 0.75
execute positioned as @s if score volume music_volume matches 50..74 run playsound music.comic_mischief @s ~ ~ ~ 0.5
execute positioned as @s if score volume music_volume matches 25..49 run playsound music.comic_mischief @s ~ ~ ~ 0.25