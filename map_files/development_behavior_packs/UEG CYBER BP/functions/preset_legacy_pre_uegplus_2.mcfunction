#bridge-file-version: #19
clear @s
replaceitem entity @s slot.hotbar 0 sm:loadout_v_cannonv
replaceitem entity @s slot.hotbar 1 sm:loadout_platform
replaceitem entity @s slot.hotbar 2 sm:loadout_mine
replaceitem entity @s slot.hotbar 3 sm:loadout_remote
replaceitem entity @s slot.hotbar 4 sm:loadout_pickaxe
function save_loadout_2
clear @s
scoreboard players set @s loadout2_type 7