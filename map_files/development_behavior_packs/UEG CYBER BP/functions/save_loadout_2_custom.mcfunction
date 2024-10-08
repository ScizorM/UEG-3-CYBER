#bridge-file-version: #1
function save_loadout_2
scoreboard players set @s loadout2_type 0
tellraw @s {"rawtext":[{"text":"Saved to Loadout 2."}]}