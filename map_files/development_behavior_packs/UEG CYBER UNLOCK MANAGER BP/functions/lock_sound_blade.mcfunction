#bridge-file-version: #12
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §c440 Ver.Delta locked."}]}
scoreboard players set sound_blade unlocked_weapons 0
setblock 177 14 25 structure_void
execute positioned 177 14 25 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item