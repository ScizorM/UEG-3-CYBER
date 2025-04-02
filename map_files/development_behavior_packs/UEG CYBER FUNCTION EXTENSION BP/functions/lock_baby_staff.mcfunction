#bridge-file-version: #13
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cBaby Staff locked."}]}
scoreboard players set baby_staff unlocked_weapons 0
setblock 190 5 11 structure_void
execute positioned 190 5 11 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item