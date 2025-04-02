#bridge-file-version: #11
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aAntigravity prism unlocked."}]}
scoreboard players set prism unlocked_weapons 1
setblock 177 14 20 air
execute positioned 177 14 20 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_prism