#bridge-file-version: #2
function save_loadout_3
scoreboard players set @s loadout3_type 0
tellraw @s {"rawtext":[{"text":"Saved to Loadout 3."}]}