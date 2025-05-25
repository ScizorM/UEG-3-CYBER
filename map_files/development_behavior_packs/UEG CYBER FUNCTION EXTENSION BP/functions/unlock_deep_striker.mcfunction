#bridge-file-version: #14
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aThe Deep Striker unlocked."}]}
scoreboard players set deep_striker unlocked_weapons 1
setblock 175 14 9 air
execute positioned 175 14 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_deep_striker