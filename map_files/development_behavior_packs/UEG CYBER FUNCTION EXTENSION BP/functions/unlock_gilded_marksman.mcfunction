#bridge-file-version: #14
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aGilded Marksman unlocked."}]}
scoreboard players set gilded_marksman unlocked_weapons 1
setblock 164 14 19 air
execute positioned 164 14 19 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_gilded_marksman