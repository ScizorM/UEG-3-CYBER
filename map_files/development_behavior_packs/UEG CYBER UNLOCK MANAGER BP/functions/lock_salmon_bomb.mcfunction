#bridge-file-version: #13
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cSalmon Bomb locked."}]}
scoreboard players set salmon_bomb unlocked_weapons 0
setblock 187 5 7 structure_void
execute positioned 187 5 7 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item