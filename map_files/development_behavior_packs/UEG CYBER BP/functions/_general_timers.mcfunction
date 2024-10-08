#bridge-file-version: #27
##scoreboard players add @a[tag=gob_gooed] gob_goo_timer 1
##execute @a[scores={gob_goo_timer=100..}] ~ ~ ~ function gob_goo_anim_out
 
##above is an example command, gonna put a filler cmd here so it doesn't break the addon
tell @s test
##from here on are actual commands
 
##food boosts
scoreboard players add @a[tag=large_boost] large_food_boost_timer 1
tellraw @a[scores={large_food_boost_timer=6000}] {"rawtext":[{"text":"§e[Large Boost Status]§a 10 Minutes Left."}]}
tellraw @a[scores={large_food_boost_timer=12000}] {"rawtext":[{"text":"§e[Large Boost Status]§6 5 Minutes Left."}]}
tellraw @a[scores={large_food_boost_timer=18000}] {"rawtext":[{"text":"§e[Large Boost Status]§c 0 Minutes Left."}]}
execute @a[scores={large_food_boost_timer=18000..}] ~ ~ ~ tag @s remove large_boost
execute @a[scores={large_food_boost_timer=18000..}] ~ ~ ~ tag @s remove gob_food
execute @a[scores={large_food_boost_timer=18000..}] ~ ~ ~ scoreboard players reset @s large_food_boost_timer
##
scoreboard players add @a[tag=small_boost] small_food_boost_timer 1
tellraw @a[scores={small_food_boost_timer=6000}] {"rawtext":[{"text":"§e[Small Boost Status]§a 10 Minutes Left."}]}
tellraw @a[scores={small_food_boost_timer=12000}] {"rawtext":[{"text":"§e[Small Boost Status]§6 5 Minutes Left."}]}
tellraw @a[scores={small_food_boost_timer=18000}] {"rawtext":[{"text":"§e[Small Boost Status]§c 0 Minutes Left."}]}
execute @a[scores={small_food_boost_timer=18000..}] ~ ~ ~ tag @s remove small_boost
execute @a[scores={small_food_boost_timer=18000..}] ~ ~ ~ tag @s remove gob_food
execute @a[scores={small_food_boost_timer=18000..}] ~ ~ ~ scoreboard players reset @s small_food_boost_timer
##
execute @a[tag=gob_food] ~ ~ ~ execute @s ~ ~ ~ particle sm:gob_goo_trail ~ ~ ~
execute @a[tag=gob_food] ~ ~ ~ effect @s slowness 2 0 true
 
 
 
 
 