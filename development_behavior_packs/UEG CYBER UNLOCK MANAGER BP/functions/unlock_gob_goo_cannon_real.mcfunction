#bridge-file-version: #13
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aGob Goo Cannon unlocked."}]}
scoreboard players set gob_goo_cannon unlocked_weapons 1
setblock 175 14 19 air
execute positioned 175 14 19 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_gob_goo_cannon