#bridge-file-version: #9
tellraw @s {"rawtext":[{"text":" Kaizo Slumber - MARIONETTE"}]}
execute if score volume music_volume matches 100.. run playsound music.marionette @s ~ ~ ~ 1
execute if score volume music_volume matches 75..99 run playsound music.marionette @s ~ ~ ~ 0.75
execute if score volume music_volume matches 50..74 run playsound music.marionette @s ~ ~ ~ 0.5
execute if score volume music_volume matches 25..49 run playsound music.marionette @s ~ ~ ~ 0.25