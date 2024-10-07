#bridge-file-version: #0
execute as @a[hasitem={location=slot.weapon.mainhand,item=sm:heavenpiercer}] run enchant @s knockback 2
execute as @a[hasitem={location=slot.weapon.mainhand,item=sm:true_holic}] run enchant @s knockback 2
execute as @a[hasitem={item=sm:true_holic}] run /execute if score @s holic_hits matches 0..3 run effect @s speed 1 2 true
execute as @a[hasitem={item=sm:true_holic}] run /execute if score @s holic_hits matches 4..6 run effect @s speed 1 3 true
execute as @a[hasitem={item=sm:true_holic}] run /execute if score @s holic_hits matches 7..9 run effect @s speed 1 4 true
execute as @a[hasitem={item=sm:true_holic}] run /execute if score @s holic_hits matches 10..12 run effect @s speed 1 5 true
execute as @a[hasitem={item=sm:true_holic}] run /execute if score @s holic_hits matches 13..15 run effect @s speed 1 6 true
execute as @a[hasitem={item=sm:true_holic}] run /execute if score @s holic_hits matches 16..18 run effect @s speed 1 7 true
execute as @a[hasitem={item=sm:true_holic}] run /execute if score @s holic_hits matches 19..21 run effect @s speed 1 8 true
execute as @a[hasitem={item=sm:true_holic}] run /execute if score @s holic_hits matches 22.. run effect @s speed 1 9 true