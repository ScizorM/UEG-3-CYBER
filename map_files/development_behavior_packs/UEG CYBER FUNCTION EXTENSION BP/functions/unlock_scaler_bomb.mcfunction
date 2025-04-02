#bridge-file-version: #14
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aScaler Bomb unlocked."}]}
scoreboard players set scaler_bomb unlocked_weapons 1
setblock 164 14 11 air
execute positioned 164 14 11 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_scaler_bomb