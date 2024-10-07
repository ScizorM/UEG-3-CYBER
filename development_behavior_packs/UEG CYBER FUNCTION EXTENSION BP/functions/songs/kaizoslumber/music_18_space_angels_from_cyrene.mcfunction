#bridge-file-version: #11
tellraw @s {"rawtext":[{"text":" Kaizo Slumber - SPACE ANGELS FROM CYRENE!"}]}
execute positioned as @s if score volume music_volume matches 100.. run playsound music.space_angels_from_cyrene @s ~ ~ ~ 1
execute positioned as @s if score volume music_volume matches 75..99 run playsound music.space_angels_from_cyrene @s ~ ~ ~ 0.75
execute positioned as @s if score volume music_volume matches 50..74 run playsound music.space_angels_from_cyrene @s ~ ~ ~ 0.5
execute positioned as @s if score volume music_volume matches 25..49 run playsound music.space_angels_from_cyrene @s ~ ~ ~ 0.25