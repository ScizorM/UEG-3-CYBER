#bridge-file-version: #3
tag @s add small_boost
tag @s remove large_boost
scoreboard players reset @s large_food_boost_timer
scoreboard players reset @s small_food_boost_timer
tellraw @s {"rawtext":[{"text":"Small Boost Activated. 15 Minutes Remaining."}]}