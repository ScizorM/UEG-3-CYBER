#bridge-file-version: #7
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cTrue Holic locked."}]}
scoreboard players set sight_blade unlocked_weapons 0
setblock 177 14 17 structure_void
execute positioned 177 14 17 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item
setblock 110 29 17 sm:purchase_block_2