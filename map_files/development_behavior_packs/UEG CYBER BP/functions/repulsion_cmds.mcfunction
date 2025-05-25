#bridge-file-version: #15
scoreboard players add @a[tag=parrying,hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] shieldFrame 1
scoreboard players add @a[tag=!parrying,hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] shieldFrame -1
execute @a[scores={shieldFrame=!0..}] ~ ~ ~ scoreboard players set @s shieldFrame 0
execute @a[scores={shieldFrame=0},hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] ~ ~ ~ replaceitem entity @s slot.weapon.offhand 0 sm:shield_idle 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute @a[scores={shieldFrame=1..4},hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] ~ ~ ~ replaceitem entity @s slot.weapon.offhand 0 sm:shield_frame1 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute @a[scores={shieldFrame=5..},hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] ~ ~ ~ replaceitem entity @s slot.weapon.offhand 0 sm:shield_frame2 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}