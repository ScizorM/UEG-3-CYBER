#bridge-file-version: #9
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aParry Fist unlocked."}]}
scoreboard players set parry_fist unlocked_weapons 1
setblock 176 14 17 air
execute positioned 176 14 17 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_parry_fist