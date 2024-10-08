#bridge-file-version: #13
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cBig Joe locked."}]}
scoreboard players set big_joe unlocked_weapons 0
setblock 190 5 7 structure_void
execute positioned 190 5 7 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item