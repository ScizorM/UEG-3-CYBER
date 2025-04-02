#bridge-file-version: #15
tellraw @a {"rawtext":[{"text":"§e[Ability Unlock] §aVelocity Cancel unlocked."}]}
scoreboard players set velocity_cancel unlocked_abilities 1
setblock 176 20 13 air
execute positioned 176 20 13 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:display_ability_vel_cancel