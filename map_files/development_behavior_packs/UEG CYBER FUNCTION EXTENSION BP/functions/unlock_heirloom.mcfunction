#bridge-file-version: #10
tellraw @a {"rawtext":[{"text":"§e[Weapon Unlock] §aNakaw's Heirloom unlocked."}]}
scoreboard players set heirloom unlocked_weapons 1
setblock 164 16 9 air
#setblock 110 29 17 sm:purchase_block_disabled_2
execute positioned 164 16 9 run replaceitem entity @e[r=0.5] slot.weapon.mainhand 0 sm:loadout_heirloom