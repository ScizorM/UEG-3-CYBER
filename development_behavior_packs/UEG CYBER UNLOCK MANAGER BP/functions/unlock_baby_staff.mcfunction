#bridge-file-version: #15
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aBaby Staff unlocked."}]}
scoreboard players set baby_staff unlocked_weapons 1
setblock 190 5 11 air
execute positioned 190 5 11 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_baby_stick
setblock 180 12 4 redstone_block