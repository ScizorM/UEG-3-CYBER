#bridge-file-version: #14
clear @s
replaceitem entity @s slot.hotbar 0 sm:loadout_cannon
replaceitem entity @s slot.hotbar 1 sm:loadout_rifle
replaceitem entity @s slot.hotbar 2 sm:loadout_platform
replaceitem entity @s slot.hotbar 3 sm:loadout_block
function save_loadout_2
clear @s
scoreboard players set @s loadout2_type 2