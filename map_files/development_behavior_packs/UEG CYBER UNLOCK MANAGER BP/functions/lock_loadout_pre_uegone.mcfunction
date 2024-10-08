#bridge-file-version: #22
tellraw @a {"rawtext":[{"text":"§e[Loadout Unlock] §cPre-UEG 1 locked."}]}
scoreboard players set pre_1 unlocked_loadouts 0
setblock 188 14 15 structure_void
execute positioned 188 14 15 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item