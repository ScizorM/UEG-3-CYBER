#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cNakaw's Heirloom locked."}]}
scoreboard players set heirloom unlocked_weapons 0
setblock 164 16 9 structure_void
execute positioned 164 16 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item