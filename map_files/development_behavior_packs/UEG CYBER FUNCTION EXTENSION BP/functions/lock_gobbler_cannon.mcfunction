#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cGreen Gobbler's Signature Bludegoning Cannon locked."}]}
scoreboard players set gobbler_cannon unlocked_weapons 0
setblock 177 14 9 structure_void
execute positioned 177 14 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item