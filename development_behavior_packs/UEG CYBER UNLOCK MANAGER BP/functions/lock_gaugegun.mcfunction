#bridge-file-version: #12
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cGauge Gun locked."}]}
scoreboard players set v_cannon unlocked_weapons 0
setblock 178 14 18 structure_void
execute positioned 178 14 18 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item