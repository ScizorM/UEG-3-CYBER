#bridge-file-version: #23
tellraw @a {"rawtext":[{"text":"§e[Loadout Unlock] §aPre-UEG 1 unlocked."}]}
scoreboard players set pre_1 unlocked_loadouts 1
setblock 188 14 15 air
execute positioned 188 14 15 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_display_legacy_pre_uegone