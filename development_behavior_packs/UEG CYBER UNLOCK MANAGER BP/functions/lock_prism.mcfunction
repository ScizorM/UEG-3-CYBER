#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cAntigravity prism locked."}]}
scoreboard players set prism unlocked_weapons 0
setblock 177 14 20 structure_void
execute positioned 177 14 20 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item