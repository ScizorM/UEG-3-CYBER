#bridge-file-version: #11
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cDaedalus & Icarus locked."}]}
scoreboard players set solis_cannon unlocked_weapons 0
setblock 176 14 20 structure_void
execute positioned 176 14 20 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item