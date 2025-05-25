#bridge-file-version: #17
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aBig Joe unlocked."}]}
scoreboard players set big_joe unlocked_weapons 1
setblock 190 5 7 air
execute positioned 190 5 7 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_big_joe_weapon
setblock 180 12 4 redstone_block