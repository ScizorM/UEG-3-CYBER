#bridge-file-version: #22
tellraw @a {"rawtext":[{"text":"§e[Ability Unlock] §aPrism Recovery unlocked."}]}
scoreboard players set prism unlocked_abilities 1
setblock 171 20 13 air
execute positioned 171 20 13 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:display_ability_prism