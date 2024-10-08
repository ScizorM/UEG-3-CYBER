#bridge-file-version: #14
execute if entity @s[tag=customRoom1] run execute if score SlotSelected customMenu1 matches 6 run scoreboard players set SlotSelected customMenu1 0
execute if entity @s[tag=customRoom1] run execute if score SlotSelected customMenu1 matches 0..6 run scoreboard players add SlotSelected customMenu1 1
 
execute if entity @s[tag=customRoom2] run execute if score SlotSelected customMenu2 matches 6 run scoreboard players set SlotSelected customMenu2 0
execute if entity @s[tag=customRoom2] run execute if score SlotSelected customMenu2 matches 0..6 run scoreboard players add SlotSelected customMenu2 1
 
execute if entity @s[tag=customRoom3] run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SlotSelected customMenu3 0
execute if entity @s[tag=customRoom3] run execute if score SlotSelected customMenu3 matches 0..6 run scoreboard players add SlotSelected customMenu3 1