#bridge-file-version: #21
clear @s
replaceitem entity @s slot.hotbar 0 sm:loadout_gaugegun
replaceitem entity @s slot.hotbar 1 sm:loadout_gob_goo_cannon
replaceitem entity @s slot.hotbar 2 sm:loadout_prism
replaceitem entity @s slot.hotbar 3 sm:loadout_emp_drive
replaceitem entity @s slot.hotbar 4 sm:loadout_v_cannonv
function save_loadout_3
clear @s
scoreboard players set @s loadout3_type 8