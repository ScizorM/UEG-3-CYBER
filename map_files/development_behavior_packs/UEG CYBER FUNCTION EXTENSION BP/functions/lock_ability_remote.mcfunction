#bridge-file-version: #19
tellraw @a {"rawtext":[{"text":"§e[Ability Unlock] §cRemote Trigger locked."}]}
scoreboard players set remote unlocked_abilities 0
setblock 166 20 9 structure_void
execute positioned 166 20 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item
setblock 95 29 28 sm:purchase_block