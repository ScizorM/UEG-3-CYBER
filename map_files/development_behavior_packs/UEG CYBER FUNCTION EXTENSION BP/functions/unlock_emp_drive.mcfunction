#bridge-file-version: #12
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aDisruptor Array locked."}]}
scoreboard players set emp_drive unlocked_weapons 1
setblock 169 14 9 air
execute positioned 169 14 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_emp_drive