#bridge-file-version: #8
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cParry Fist locked."}]}
scoreboard players set parry_fist unlocked_weapons 0
setblock 176 14 17 structure_void
execute positioned 176 14 17 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item