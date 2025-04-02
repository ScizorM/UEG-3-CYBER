#bridge-file-version: #14
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aImplosion Grenade unlocked."}]}
scoreboard players set implosion_grenade unlocked_weapons 1
setblock 164 14 13 air
execute positioned 164 14 13 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_implosion_grenade