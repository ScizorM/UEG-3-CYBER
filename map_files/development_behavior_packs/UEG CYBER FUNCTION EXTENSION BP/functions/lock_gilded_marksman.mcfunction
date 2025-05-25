#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cGilded Marksman locked."}]}
scoreboard players set gilded_marksman unlocked_weapons 0
setblock 164 14 19 structure_void
execute positioned 164 14 19 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item