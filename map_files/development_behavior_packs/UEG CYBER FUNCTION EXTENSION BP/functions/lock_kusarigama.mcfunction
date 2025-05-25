#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cKusarigama locked."}]}
scoreboard players set kusarigama unlocked_weapons 0
setblock 164 14 21 structure_void
execute positioned 164 14 21 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item