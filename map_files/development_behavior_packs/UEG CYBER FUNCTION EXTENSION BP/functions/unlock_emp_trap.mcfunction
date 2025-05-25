#bridge-file-version: #15
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aArcherfish unlocked."}]}
scoreboard players set emp_trap unlocked_weapons 1
setblock 171 14 9 air
execute positioned 171 14 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_emp_trap