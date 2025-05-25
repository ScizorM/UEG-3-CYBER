#bridge-file-version: #3
tag @s add music_tutorial
tag @s add music_info
execute positioned as @s run tp @s ~ ~ ~ facing ~-1 ~0.5 ~
inputpermission set @s camera disabled
inputpermission set @s movement disabled
tellraw @s {"rawtext":[{"text":"§eUse the `Skip Cutscene` item to skip."}]}
replaceitem entity @s slot.hotbar 4 sm:skip_cutscene 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}