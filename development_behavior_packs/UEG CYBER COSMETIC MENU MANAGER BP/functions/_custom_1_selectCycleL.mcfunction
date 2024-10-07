#bridge-file-version: #13
execute if entity @s[tag=customRoom1] run execute if score SlotSelected customMenu1 matches 1 run scoreboard players set SlotSelected customMenu1 7
execute if entity @s[tag=customRoom1] run execute if score SlotSelected customMenu1 matches 2..7 run scoreboard players add SlotSelected customMenu1 -1
 
execute if entity @s[tag=customRoom2] run execute if score SlotSelected customMenu2 matches 1 run scoreboard players set SlotSelected customMenu2 7
execute if entity @s[tag=customRoom2] run execute if score SlotSelected customMenu2 matches 2..7 run scoreboard players add SlotSelected customMenu2 -1
 
execute if entity @s[tag=customRoom3] run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SlotSelected customMenu3 7
execute if entity @s[tag=customRoom3] run execute if score SlotSelected customMenu3 matches 2..7 run scoreboard players add SlotSelected customMenu3 -1