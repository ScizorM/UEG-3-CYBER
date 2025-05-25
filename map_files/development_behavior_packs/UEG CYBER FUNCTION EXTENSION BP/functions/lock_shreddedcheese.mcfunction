#bridge-file-version: #14
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cSC-QUANT[E] locked."}]}
scoreboard players set sc_quant_e unlocked_weapons 0
setblock 190 5 9 structure_void
execute positioned 190 5 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item