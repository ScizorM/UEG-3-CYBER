#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cGob Goo Cannon locked."}]}
scoreboard players set gob_goo_cannon unlocked_weapons 0
setblock 175 14 19 structure_void
execute positioned 175 14 19 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item