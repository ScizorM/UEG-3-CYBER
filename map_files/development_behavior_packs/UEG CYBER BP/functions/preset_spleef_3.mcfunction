#bridge-file-version: #18
clear @s
replaceitem entity @s slot.hotbar 0 sm:loadout_pickaxe
replaceitem entity @s slot.hotbar 1 sm:loadout_platform
function save_loadout_3
clear @s
scoreboard players set @s loadout3_type 4