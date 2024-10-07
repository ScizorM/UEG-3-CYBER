#bridge-file-version: #13
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aGauge Gun unlocked."}]}
scoreboard players set v_cannon unlocked_weapons 1
setblock 178 14 18 air
execute positioned 178 14 18 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_gaugegun