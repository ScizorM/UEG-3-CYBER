#bridge-file-version: #12
tellraw @s {"rawtext":[{"text":" Kaizo Slumber - EJECT PLUS Channel"}]}
execute positioned as @s if score volume music_volume matches 100.. run playsound music.eject_plus_channel @s ~ ~ ~ 1
execute positioned as @s if score volume music_volume matches 75..99 run playsound music.eject_plus_channel @s ~ ~ ~ 0.75
execute positioned as @s if score volume music_volume matches 50..74 run playsound music.eject_plus_channel @s ~ ~ ~ 0.5
execute positioned as @s if score volume music_volume matches 25..49 run playsound music.eject_plus_channel @s ~ ~ ~ 0.25