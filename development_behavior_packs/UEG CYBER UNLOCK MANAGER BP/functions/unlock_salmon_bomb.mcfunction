#bridge-file-version: #16
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aSalmon Bomb unlocked."}]}
scoreboard players set salmon_bomb unlocked_weapons 1
setblock 187 5 7 air
execute positioned 187 5 7 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_salmon_bomb
setblock 180 12 4 redstone_block