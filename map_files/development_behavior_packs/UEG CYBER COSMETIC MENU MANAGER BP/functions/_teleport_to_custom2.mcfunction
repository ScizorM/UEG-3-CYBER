#bridge-file-version: #26
camera @s set minecraft:free pos -47 33 -5 facing -47 33 -4
tp @s -45 32 0 facing -45 32 -1
inputpermission set @s camera disabled
inputpermission set @s movement disabled
clear @s
tag @s add customRoom
tag @s add customRoom2
 
scoreboard players set customMenu2 customMenuActive 1
scoreboard players set MenuSelected customMenu2 1
scoreboard players set ScreenSelected customMenu2 1
scoreboard players set SlotSelected customMenu2 1
 
replaceitem entity @s slot.hotbar 0 sm:exit_menu 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
 
replaceitem entity @s slot.hotbar 2 sm:menu_left 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s slot.hotbar 3 sm:left 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s slot.hotbar 4 sm:select_skin 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s slot.hotbar 5 sm:right 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s slot.hotbar 6 sm:menu_right 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
 
replaceitem entity @s slot.hotbar 8 sm:rotate 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}