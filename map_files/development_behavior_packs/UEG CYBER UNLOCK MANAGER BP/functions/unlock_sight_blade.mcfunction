#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aTrue Holic unlocked."}]}
scoreboard players set sight_blade unlocked_weapons 1
setblock 177 14 17 air
execute positioned 177 14 17 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_sight_blade