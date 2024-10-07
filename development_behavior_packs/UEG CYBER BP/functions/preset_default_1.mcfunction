#bridge-file-version: #12
clear @s
replaceitem entity @s slot.hotbar 0 sm:loadout_cannon
replaceitem entity @s slot.hotbar 1 sm:loadout_platform
replaceitem entity @s slot.hotbar 2 sm:loadout_blade
replaceitem entity @s slot.hotbar 3 sm:loadout_mine
replaceitem entity @s slot.hotbar 4 sm:loadout_remote
replaceitem entity @s slot.hotbar 5 sm:loadout_rifle
replaceitem entity @s slot.hotbar 6 sm:loadout_pickaxe
replaceitem entity @s slot.hotbar 7 sm:loadout_block
function save_loadout_1
clear @s
scoreboard players set @s loadout1_type 1