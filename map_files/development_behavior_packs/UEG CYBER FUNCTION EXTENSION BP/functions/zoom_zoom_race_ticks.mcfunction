#bridge-file-version: #33
execute as @a[tag=enter_race,tag=!race_music_active] run execute as @s positioned as @s run execute if block ~ 7 ~ sm:death_block run function race_music
execute as @a run execute if score @s race_songloop_timer matches 988 run playsound music.boatride @s
execute as @a run execute if score @s race_songloop_timer matches 988 run scoreboard players set @s race_songloop_timer 0
scoreboard players add @a[tag=enter_race,scores={race_songloop_timer=!988..}] race_songloop_timer 1
scoreboard players set @a[tag=!enter_race] race_songloop_timer 0
execute as @a[tag=enter_race] run execute as @s positioned as @s run execute unless block ~ 7 ~ sm:death_block run function race_no_music