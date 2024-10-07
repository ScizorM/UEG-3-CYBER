#bridge-file-version: #13
tellraw @s {"rawtext":[{"text":" Kaizo Slumber, Murrumur - Tinydeath (Kaizo Slumber Mix)"}]}
execute if score volume music_volume matches 100.. run playsound music.tinydeath_kaizo_slumber_mix @s ~ ~ ~ 1
execute if score volume music_volume matches 75..99 run playsound music.tinydeath_kaizo_slumber_mix @s ~ ~ ~ 0.75
execute if score volume music_volume matches 50..74 run playsound music.tinydeath_kaizo_slumber_mix @s ~ ~ ~ 0.5
execute if score volume music_volume matches 25..49 run playsound music.tinydeath_kaizo_slumber_mix @s ~ ~ ~ 0.25