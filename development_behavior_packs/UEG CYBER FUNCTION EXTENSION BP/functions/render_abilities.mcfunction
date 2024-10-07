#bridge-file-version: #3
execute as @a[tag=rocketjump] run replaceitem entity @s slot.armor.legs 0 sm:ability_rocket 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[scores={selected_ability=1}] run replaceitem entity @s slot.armor.legs 0 sm:ability_none 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[tag=prism] run replaceitem entity @s slot.armor.legs 0 sm:ability_prism 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[tag=baby] run replaceitem entity @s slot.armor.legs 0 sm:ability_baby 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[tag=remote] run replaceitem entity @s slot.armor.legs 0 sm:ability_remote 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a[tag=vel_cancel] run replaceitem entity @s slot.armor.legs 0 sm:ability_vel_cancel 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}