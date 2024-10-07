#bridge-file-version: #14
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aDaedalus & Icarus unlocked."}]}
scoreboard players set solis_cannon unlocked_weapons 1
setblock 176 14 20 air
execute positioned 176 14 20 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_solis_cannon