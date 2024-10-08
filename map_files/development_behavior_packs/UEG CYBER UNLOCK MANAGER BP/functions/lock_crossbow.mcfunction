#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cTNT Crossbow locked."}]}
scoreboard players set crossbow unlocked_weapons 0
setblock 178 14 19 structure_void
execute positioned 178 14 19 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item