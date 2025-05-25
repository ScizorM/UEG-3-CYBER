#bridge-file-version: #20
clear @s
replaceitem entity @s slot.hotbar 0 sm:loadout_sc_quant-e
replaceitem entity @s slot.hotbar 1 sm:loadout_baby_stick
replaceitem entity @s slot.hotbar 2 sm:loadout_salmon_bomb
replaceitem entity @s slot.hotbar 3 sm:loadout_big_joe_weapon
function save_loadout_1
clear @s
scoreboard players set @s loadout1_type 10