#bridge-file-version: #4
execute as @s[tag=!operator] run tp @s 106 19 30 facing 106 19 33
execute as @s[tag=!operator] run /tellraw @s {"rawtext":[{"text":"§e[Error] §cSorry, you cannot access this area."}]}