#bridge-file-version: #0
function save_loadout_1
scoreboard players set @s loadout1_type 0
tellraw @s {"rawtext":[{"text":"Saved to Loadout 1."}]}