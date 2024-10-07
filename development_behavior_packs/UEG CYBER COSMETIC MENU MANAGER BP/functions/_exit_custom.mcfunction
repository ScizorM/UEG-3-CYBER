#bridge-file-version: #15
camera @s clear
tp @s 168 13 1 facing 167 13 1
inputpermission set @s camera enabled
inputpermission set @s movement enabled
execute as @s[tag=customRoom1] run scoreboard players set SkinSelected customMenu1 -1
execute as @s[tag=customRoom2] run scoreboard players set SkinSelected customMenu2 -1
execute as @s[tag=customRoom3] run scoreboard players set SkinSelected customMenu3 -1
execute as @s[tag=customRoom1] run scoreboard players set customMenu1 customMenuActive 0
execute as @s[tag=customRoom2] run scoreboard players set customMenu2 customMenuActive 0
execute as @s[tag=customRoom3] run scoreboard players set customMenu3 customMenuActive 0
tag @s remove customRoom1
tag @s remove customRoom2
tag @s remove customRoom3
tag @s remove customRoom
clear @s