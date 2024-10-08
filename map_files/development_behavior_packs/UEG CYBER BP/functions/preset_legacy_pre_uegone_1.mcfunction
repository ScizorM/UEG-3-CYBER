#bridge-file-version: #16
clear @s
replaceitem entity @s slot.hotbar 0 sm:loadout_v_cannonv
replaceitem entity @s slot.hotbar 1 sm:loadout_platform
function save_loadout_1
clear @s
scoreboard players set @s loadout1_type 5