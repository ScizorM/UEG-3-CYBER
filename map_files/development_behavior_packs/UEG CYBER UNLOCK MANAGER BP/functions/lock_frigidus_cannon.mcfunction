#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cDatura L17 locked."}]}
scoreboard players set frigidus_cannon unlocked_weapons 0
setblock 175 14 18 structure_void
execute positioned 175 14 18 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item