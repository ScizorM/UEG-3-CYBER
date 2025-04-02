#bridge-file-version: #14
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aGreen Gobbler's Signature Bludgeoning Cannon unlocked."}]}
scoreboard players set gobbler_cannon unlocked_weapons 1
setblock 177 14 9 air
execute positioned 177 14 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_green_gobbler_cannon