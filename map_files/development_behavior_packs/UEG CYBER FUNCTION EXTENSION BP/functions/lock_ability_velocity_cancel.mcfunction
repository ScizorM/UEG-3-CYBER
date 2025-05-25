#bridge-file-version: #18
tellraw @a {"rawtext":[{"text":"§e[Ability Unlock] §cVelocity Cancel locked."}]}
scoreboard players set velocity_cancel unlocked_abilities 0
setblock 176 20 13 structure_void
execute positioned 176 20 13 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:locked_item