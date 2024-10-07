#bridge-file-version: #26
tellraw @a {"rawtext":[{"text":"§e[Loadout Unlock] §aUEG PLUS unlocked."}]}
scoreboard players set uegplus unlocked_loadouts 1
setblock 188 14 17 air
execute positioned 188 14 17 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_display_legacy_uegplus