#bridge-file-version: #22
camera @s set minecraft:free pos -47 46 -5 facing -47 46 -4
tp @s -45 45 0 facing -45 45 -1
inputpermission set @s camera disabled
inputpermission set @s movement disabled
clear @s
tag @s add customRoom
tag @s add customRoom1
 
scoreboard players set customMenu1 customMenuActive 1
scoreboard players set MenuSelected customMenu1 1
scoreboard players set ScreenSelected customMenu1 1
scoreboard players set SlotSelected customMenu1 1
 
replaceitem entity @s slot.hotbar 0 sm:exit_menu 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
 
replaceitem entity @s slot.hotbar 2 sm:menu_left 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s slot.hotbar 3 sm:left 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s slot.hotbar 4 sm:select_skin 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s slot.hotbar 5 sm:right 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s slot.hotbar 6 sm:menu_right 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
 
replaceitem entity @s slot.hotbar 8 sm:rotate 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}