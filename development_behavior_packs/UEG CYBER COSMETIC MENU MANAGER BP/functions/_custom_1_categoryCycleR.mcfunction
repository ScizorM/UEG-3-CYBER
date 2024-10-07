#bridge-file-version: #7
execute if entity @s[tag=customRoom1] run execute if score ScreenSelected customMenu1 matches 3 run scoreboard players set ScreenSelected customMenu1 0
execute if entity @s[tag=customRoom1] run execute if score ScreenSelected customMenu1 matches 0..2 run scoreboard players add ScreenSelected customMenu1 1
execute if entity @s[tag=customRoom1] run scoreboard players set SlotSelected customMenu1 1
 
execute if entity @s[tag=customRoom2] run execute if score ScreenSelected customMenu2 matches 3 run scoreboard players set ScreenSelected customMenu2 0
execute if entity @s[tag=customRoom2] run execute if score ScreenSelected customMenu2 matches 0..2 run scoreboard players add ScreenSelected customMenu2 1
execute if entity @s[tag=customRoom2] run scoreboard players set SlotSelected customMenu2 1
 
execute if entity @s[tag=customRoom3] run execute if score ScreenSelected customMenu3 matches 3 run scoreboard players set ScreenSelected customMenu3 0
execute if entity @s[tag=customRoom3] run execute if score ScreenSelected customMenu3 matches 0..2 run scoreboard players add ScreenSelected customMenu3 1
execute if entity @s[tag=customRoom3] run scoreboard players set SlotSelected customMenu3 1