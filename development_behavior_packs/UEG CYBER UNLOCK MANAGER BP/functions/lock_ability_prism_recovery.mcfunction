#bridge-file-version: #21
tellraw @a {"rawtext":[{"text":"§e[Ability Unlock] §cPrism Recovery locked."}]}
scoreboard players set prism unlocked_abilities 0
setblock 171 20 13 structure_void
execute positioned 171 20 13 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item