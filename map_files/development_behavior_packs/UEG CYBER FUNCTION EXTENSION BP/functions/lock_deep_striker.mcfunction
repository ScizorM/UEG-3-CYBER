#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cThe Deep Striker locked."}]}
scoreboard players set deep_striker unlocked_weapons 0
setblock 175 14 9 structure_void
execute positioned 175 14 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item