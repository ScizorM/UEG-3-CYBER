#bridge-file-version: #4
execute if entity @s[tag=customRoom1] run execute if score SkinSelected customMenu1 matches 0.. run scoreboard players operation @s selected_skin = SkinSelected customMenu1
execute if entity @s[tag=customRoom1] run execute if score SkinSelected customMenu1 matches -1 run tellraw @s {"rawtext":[{"text":"§cSorry! You do not own this skin."}]}
 
execute if entity @s[tag=customRoom2] run execute if score SkinSelected customMenu2 matches 0.. run scoreboard players operation @s selected_skin = SkinSelected customMenu2
execute if entity @s[tag=customRoom2] run execute if score SkinSelected customMenu2 matches -1 run tellraw @s {"rawtext":[{"text":"§cSorry! You do not own this skin."}]}
 
execute if entity @s[tag=customRoom3] run execute if score SkinSelected customMenu3 matches 0.. run scoreboard players operation @s selected_skin = SkinSelected customMenu3
execute if entity @s[tag=customRoom3] run execute if score SkinSelected customMenu3 matches -1 run tellraw @s {"rawtext":[{"text":"§cSorry! You do not own this skin."}]}