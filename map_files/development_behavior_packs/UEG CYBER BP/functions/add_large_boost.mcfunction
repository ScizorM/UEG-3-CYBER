#bridge-file-version: #3
tag @s remove small_boost
tag @s add large_boost
scoreboard players reset @s large_food_boost_timer
scoreboard players reset @s small_food_boost_timer
tellraw @s {"rawtext":[{"text":"Large Boost Activated. 15 Minutes Remaining."}]}