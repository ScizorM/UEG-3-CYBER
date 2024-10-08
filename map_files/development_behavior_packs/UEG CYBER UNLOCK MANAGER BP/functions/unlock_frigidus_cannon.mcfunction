#bridge-file-version: #11
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aDatura L17 unlocked."}]}
scoreboard players set frigidus_cannon unlocked_weapons 1
setblock 175 14 18 air
execute positioned 175 14 18 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_frigidus_cannon