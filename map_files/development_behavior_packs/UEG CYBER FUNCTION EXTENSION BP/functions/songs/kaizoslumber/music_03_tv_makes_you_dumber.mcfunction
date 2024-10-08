#bridge-file-version: #9
tellraw @s {"rawtext":[{"text":" Kaizo Slumber - TV MAKES YOU DUMBER"}]}
execute positioned as @s if score volume music_volume matches 100.. run playsound music.tv_makes_you_dumber @s ~ ~ ~ 1
execute positioned as @s if score volume music_volume matches 75..99 run playsound music.tv_makes_you_dumber @s ~ ~ ~ 0.75
execute positioned as @s if score volume music_volume matches 50..74 run playsound music.tv_makes_you_dumber @s ~ ~ ~ 0.5
execute positioned as @s if score volume music_volume matches 25..49 run playsound music.tv_makes_you_dumber @s ~ ~ ~ 0.25