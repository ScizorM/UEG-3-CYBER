#bridge-file-version: #1
execute if entity @s[tag=customRoom1] run execute if score ScreenSelected customMenu1 matches 1 run function select_custom_skin
execute if entity @s[tag=customRoom1] run execute if score ScreenSelected customMenu1 matches 2 run function select_custom_rocket
execute if entity @s[tag=customRoom1] run execute if score ScreenSelected customMenu1 matches 3 run function select_custom_effect
 
execute if entity @s[tag=customRoom2] run execute if score ScreenSelected customMenu2 matches 1 run function select_custom_skin
execute if entity @s[tag=customRoom2] run execute if score ScreenSelected customMenu2 matches 2 run function select_custom_rocket
execute if entity @s[tag=customRoom2] run execute if score ScreenSelected customMenu2 matches 3 run function select_custom_effect
 
execute if entity @s[tag=customRoom3] run execute if score ScreenSelected customMenu3 matches 1 run function select_custom_skin
execute if entity @s[tag=customRoom3] run execute if score ScreenSelected customMenu3 matches 2 run function select_custom_rocket
execute if entity @s[tag=customRoom3] run execute if score ScreenSelected customMenu3 matches 3 run function select_custom_effect