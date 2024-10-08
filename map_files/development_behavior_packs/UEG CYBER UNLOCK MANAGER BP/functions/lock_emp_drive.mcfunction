#bridge-file-version: #11
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cDisruptor Array locked."}]}
scoreboard players set emp_drive unlocked_weapons 0
setblock 169 14 9 structure_void
execute positioned 169 14 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item