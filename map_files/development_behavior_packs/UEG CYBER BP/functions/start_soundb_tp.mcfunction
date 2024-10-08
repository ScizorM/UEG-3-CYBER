#bridge-file-version: #5
event entity @s sm:teleported
tag @s add tped
scoreboard players set @s tp_timer 0
effect @s bad_omen 25 0 true
say cooldown start triggered