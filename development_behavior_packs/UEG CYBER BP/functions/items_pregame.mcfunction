#bridge-file-version: #6
inputpermission set @a camera enabled
inputpermission set @s movement enabled
##custom
replaceitem entity @s[scores={loadout1_type=0}] slot.hotbar 3 sm:loadout_1_custom 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=0}] slot.hotbar 4 sm:loadout_2_custom 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=0}] slot.hotbar 5 sm:loadout_3_custom 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##default
replaceitem entity @s[scores={loadout1_type=1}] slot.hotbar 3 sm:loadout_1_default 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=1}] slot.hotbar 4 sm:loadout_2_default 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=1}] slot.hotbar 5 sm:loadout_3_default 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##ranged
replaceitem entity @s[scores={loadout1_type=2}] slot.hotbar 3 sm:loadout_1_ranged 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=2}] slot.hotbar 4 sm:loadout_2_ranged 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=2}] slot.hotbar 5 sm:loadout_3_ranged 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##melee
replaceitem entity @s[scores={loadout1_type=3}] slot.hotbar 3 sm:loadout_1_melee 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=3}] slot.hotbar 4 sm:loadout_2_melee 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=3}] slot.hotbar 5 sm:loadout_3_melee 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##spleef
replaceitem entity @s[scores={loadout1_type=4}] slot.hotbar 3 sm:loadout_1_spleef 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=4}] slot.hotbar 4 sm:loadout_2_spleef 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=4}] slot.hotbar 5 sm:loadout_3_spleef 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##pre-ueg
replaceitem entity @s[scores={loadout1_type=5}] slot.hotbar 3 sm:loadout_1_legacy_pre_uegone 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=5}] slot.hotbar 4 sm:loadout_2_legacy_pre_uegone 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=5}] slot.hotbar 5 sm:loadout_3_legacy_pre_uegone 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##ueg 1
replaceitem entity @s[scores={loadout1_type=6}] slot.hotbar 3 sm:loadout_1_legacy_uegone 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=6}] slot.hotbar 4 sm:loadout_2_legacy_uegone 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=6}] slot.hotbar 5 sm:loadout_3_legacy_uegone 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##ueg plus
replaceitem entity @s[scores={loadout1_type=7}] slot.hotbar 3 sm:loadout_1_legacy_uegplus 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=7}] slot.hotbar 4 sm:loadout_2_legacy_uegplus 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=7}] slot.hotbar 5 sm:loadout_3_legacy_uegplus 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##purchasable
replaceitem entity @s[scores={loadout1_type=8}] slot.hotbar 3 sm:loadout_1_purchasables 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=8}] slot.hotbar 4 sm:loadout_2_purchasables 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=8}] slot.hotbar 5 sm:loadout_3_purchasables 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##mission
replaceitem entity @s[scores={loadout1_type=9}] slot.hotbar 3 sm:loadout_1_mission 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=9}] slot.hotbar 4 sm:loadout_2_mission 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=9}] slot.hotbar 5 sm:loadout_3_mission 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
##secret
replaceitem entity @s[scores={loadout1_type=10}] slot.hotbar 3 sm:loadout_1_secrets 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout2_type=10}] slot.hotbar 4 sm:loadout_2_secrets 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @s[scores={loadout3_type=10}] slot.hotbar 5 sm:loadout_3_secrets 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}