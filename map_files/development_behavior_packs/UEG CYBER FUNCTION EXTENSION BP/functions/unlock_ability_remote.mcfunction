#bridge-file-version: #20
tellraw @a {"rawtext":[{"text":"§e[Ability Unlock] §aRemote Trigger unlocked."}]}
scoreboard players set remote unlocked_abilities 1
setblock 166 20 9 air
execute positioned 166 20 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:display_ability_remote
setblock 95 29 28 sm:purchase_block_disabled