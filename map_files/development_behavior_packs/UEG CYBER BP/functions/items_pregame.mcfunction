#bridge-file-version: #6
inputpermission set @a camera enabled
inputpermission set @s movement enabled
##custom
##replaceitem entity @s[scores={loadout1_type=0}] slot.hotbar 3 sm:loadout_1_custom 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##replaceitem entity @s[scores={loadout2_type=0}] slot.hotbar 4 sm:loadout_2_custom 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##replaceitem entity @s[scores={loadout3_type=0}] slot.hotbar 5 sm:loadout_3_custom 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##default
##replaceitem entity @s[scores={loadout1_type=1}] slot.hotbar 3 sm:loadout_1_default 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##replaceitem entity @s[scores={loadout2_type=1}] slot.hotbar 4 sm:loadout_2_default 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##replaceitem entity @s[scores={loadout3_type=1}] slot.hotbar 5 sm:loadout_3_default 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##ranged
##replaceitem entity @s[scores={loadout1_type=2}] slot.hotbar 3 sm:loadout_1_ranged 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##replaceitem entity @s[scores={loadout2_type=2}] slot.hotbar 4 sm:loadout_2_ranged 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##replaceitem entity @s[scores={loadout3_type=2}] slot.hotbar 5 sm:loadout_3_ranged 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}

##just load a backup if you really need any of this

replaceitem entity @s slot.hotbar 4 sm:loadout_select_new 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
