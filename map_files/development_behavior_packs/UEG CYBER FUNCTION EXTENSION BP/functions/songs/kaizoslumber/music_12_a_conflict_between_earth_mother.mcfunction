#bridge-file-version: #12
tellraw @s {"rawtext":[{"text":" Kaizo Slumber - A Conflict Between Earth Mother and the Technogaia"}]}
execute positioned as @s if score volume music_volume matches 100.. run playsound music.a_conflict_between_earth_mother_and_the_technogaia @s ~ ~ ~ 1
execute positioned as @s if score volume music_volume matches 75..99 run playsound music.a_conflict_between_earth_mother_and_the_technogaia @s ~ ~ ~ 0.75
execute positioned as @s if score volume music_volume matches 50..74 run playsound music.a_conflict_between_earth_mother_and_the_technogaia @s ~ ~ ~ 0.5
execute positioned as @s if score volume music_volume matches 25..49 run playsound music.a_conflict_between_earth_mother_and_the_technogaia @s ~ ~ ~ 0.25