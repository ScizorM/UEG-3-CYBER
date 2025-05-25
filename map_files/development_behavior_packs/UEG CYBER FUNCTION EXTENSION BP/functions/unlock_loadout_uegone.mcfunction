#bridge-file-version: #25
tellraw @a {"rawtext":[{"text":"§e[Loadout Unlock] §aUEG 1 unlocked."}]}
scoreboard players set ueg unlocked_loadouts 1
setblock 189 14 16 air
execute positioned 189 14 16 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_display_legacy_uegone