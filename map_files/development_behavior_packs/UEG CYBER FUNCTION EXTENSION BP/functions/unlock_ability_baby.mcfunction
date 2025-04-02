#bridge-file-version: #22
tellraw @a {"rawtext":[{"text":"§a[Ability Unlock] §cBaby Storm unlocked."}]}
scoreboard players set baby unlocked_abilities 1
setblock 166 20 13 air
execute positioned 166 20 13 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:display_ability_baby