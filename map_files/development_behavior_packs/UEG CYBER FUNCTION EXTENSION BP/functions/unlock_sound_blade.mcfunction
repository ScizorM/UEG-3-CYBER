#bridge-file-version: #14
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §a440 Ver.Delta unlocked."}]}
scoreboard players set sound_blade unlocked_weapons 1
setblock 177 14 25 air
setblock 108 29 17 sm:purchase_block_disabled_2
execute positioned 177 14 25 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_sound_blade_1