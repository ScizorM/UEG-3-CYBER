#bridge-file-version: #6
camera @s[tag=!spectateDebug] fade time 0 1 0.5
tellraw @s[tag=!spectateDebug] {"rawtext":[{"text":"§cGame ended - teleporting to spawn..."}]}
gamemode adventure @s[tag=!spectateDebug]
tp @s[tag=!spectateDebug] 140 13 15 facing 140 13 14