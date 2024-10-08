#bridge-file-version: #26
tellraw @a {"rawtext":[{"text":"§e[Loadout Unlock] §cUEG PLUS locked."}]}
scoreboard players set uegplus unlocked_loadouts 0
setblock 188 14 17 structure_void
execute positioned 188 14 17 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item