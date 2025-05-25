#bridge-file-version: #14
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aKusarigama unlocked."}]}
scoreboard players set kusarigama unlocked_weapons 1
setblock 164 14 21 air
execute positioned 164 14 21 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_kusarigama