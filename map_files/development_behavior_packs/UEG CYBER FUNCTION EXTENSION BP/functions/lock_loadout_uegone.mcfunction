#bridge-file-version: #24
tellraw @a {"rawtext":[{"text":"§e[Loadout Unlock] §cUEG 1 locked."}]}
scoreboard players set ueg unlocked_loadouts 0
setblock 189 14 16 structure_void
execute positioned 189 14 16 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item