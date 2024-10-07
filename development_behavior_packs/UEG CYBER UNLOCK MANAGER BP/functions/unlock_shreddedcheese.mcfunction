#bridge-file-version: #18
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aSC-QUANT[E] unlocked."}]}
scoreboard players set sc_quant_e unlocked_weapons 1
setblock 190 5 9 air
execute positioned 190 5 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_sc_quant-e
setblock 180 12 4 redstone_block