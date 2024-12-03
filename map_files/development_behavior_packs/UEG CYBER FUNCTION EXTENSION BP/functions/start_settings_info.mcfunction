#bridge-file-version: #2
tag @s add reactor_tutorial
tag @s add settings_info
inputpermission set @s camera disabled
inputpermission set @s movement disabled
tellraw @s {"rawtext":[{"text":"§eUse the `Skip Cutscene` item to skip."}]}
replaceitem entity @s slot.hotbar 4 sm:skip_cutscene 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}