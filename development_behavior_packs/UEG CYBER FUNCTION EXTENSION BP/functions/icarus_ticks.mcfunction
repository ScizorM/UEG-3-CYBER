#bridge-file-version: #19
scoreboard players add @a[scores={icarus_cooldown=1..}] icarus_cooldown -1
execute as @a[scores={icarus_temperature=1..}] run execute as @s positioned as @s run scoreboard players add @s[scores={icarus_cooldown=0}] icarus_temperature -1
execute as @a[scores={icarus_is_inactive=1}] run execute as @s[scores={icarus_temperature=0}] run function title_temprecover
execute as @a[scores={icarus_is_inactive=1}] run execute as @s[scores={icarus_temperature=0}] run scoreboard players set @s icarus_is_inactive 0
##execute as @a[scores={icarus_is_inactive=1}] run execute positioned as @s run /setblock ~ ~ ~ fire keep
scoreboard players add @a icarus_gun_fire 0
execute as @e[tag=icarus] run event entity @s sm:icarus_variant
 
execute as @a run execute if score @s icarus_temperature matches 0 run function clear_icarus
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 1..10 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp1 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 11..20 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp2 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 21..30 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp3 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 31..40 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp4 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 41..50 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp5 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 51..60 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp6 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 61..70 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp7 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 71..80 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp8 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 81..90 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp9 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[hasitem={item=sm:icarus,location=slot.weapon.mainhand}] run execute if score @s icarus_temperature matches 91..100 run /replaceitem entity @s slot.weapon.offhand 0 sm:icarus_temp10 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
 
execute as @a run execute if score @s icarus_gun_fire matches 0 run event entity @s sm:not_firing_offhand
execute as @a run execute if score @s icarus_gun_fire matches 1 run event entity @s sm:firing_offhand
execute as @a[hasitem={item=sm:icarus,quantity=!1,location=slot.weapon.mainhand}] run function clear_icarus