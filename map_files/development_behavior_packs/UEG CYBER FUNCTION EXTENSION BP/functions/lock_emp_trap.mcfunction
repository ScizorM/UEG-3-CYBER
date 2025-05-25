#bridge-file-version: #12
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cArcherfish locked."}]}
scoreboard players set emp_trap unlocked_weapons 0
setblock 171 14 9 structure_void
execute positioned 171 14 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item