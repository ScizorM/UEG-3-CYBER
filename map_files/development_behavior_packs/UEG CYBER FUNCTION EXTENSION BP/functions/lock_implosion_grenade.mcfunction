#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §cImplosion Grenade locked."}]}
scoreboard players set implosion_grenade unlocked_weapons 0
setblock 164 14 13 structure_void
execute positioned 164 14 13 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item