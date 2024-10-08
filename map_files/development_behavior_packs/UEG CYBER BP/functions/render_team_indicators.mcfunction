#bridge-file-version: #15
scoreboard players add @a selected_skin 0
##
 
replaceitem entity @a[tag=!team_nu,tag=!team_lambda] slot.armor.legs 0 sm:team_indicator_none 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @a[tag=team_nu] slot.armor.legs 0 sm:team_indicator_nu 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @a[tag=team_lambda] slot.armor.legs 0 sm:team_indicator_lambda 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}