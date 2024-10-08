#bridge-file-version: #8
tellraw @s {"rawtext":[{"text":" Kaizo Slumber - Green Comet in the Key of Something"}]}
execute positioned as @s if score volume music_volume matches 100.. run playsound music.green_comet_in_the_key_of_something @s ~ ~ ~ 1
execute positioned as @s if score volume music_volume matches 75..99 run playsound music.green_comet_in_the_key_of_something @s ~ ~ ~ 0.75
execute positioned as @s if score volume music_volume matches 50..74 run playsound music.green_comet_in_the_key_of_something @s ~ ~ ~ 0.5
execute positioned as @s if score volume music_volume matches 25..49 run playsound music.green_comet_in_the_key_of_something @s ~ ~ ~ 0.25