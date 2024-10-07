#bridge-file-version: #12
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aTNT Crossbow unlocked."}]}
scoreboard players set crossbow unlocked_weapons 1
setblock 178 14 19 air
execute positioned 178 14 19 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_v_cannonv