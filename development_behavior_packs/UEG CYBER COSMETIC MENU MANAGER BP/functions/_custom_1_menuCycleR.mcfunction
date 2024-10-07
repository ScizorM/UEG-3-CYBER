#bridge-file-version: #10
execute if entity @s[tag=customRoom1] run execute if score MenuSelected customMenu1 matches 1..7 run scoreboard players add MenuSelected customMenu1 1
execute if entity @s[tag=customRoom1] run scoreboard players set SlotSelected customMenu1 1
 
execute if entity @s[tag=customRoom2] run execute if score MenuSelected customMenu2 matches 1..7 run scoreboard players add MenuSelected customMenu2 1
execute if entity @s[tag=customRoom2] run scoreboard players set SlotSelected customMenu2 1
 
execute if entity @s[tag=customRoom3] run execute if score MenuSelected customMenu3 matches 1..7 run scoreboard players add MenuSelected customMenu3 1
execute if entity @s[tag=customRoom3] run scoreboard players set SlotSelected customMenu3 1