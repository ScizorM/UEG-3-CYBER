##execute if entity @s[hasitem={item=sm:kusarigama,location=slot.weapon.mainhand}] run tag @s add kusarigama_attack
##execute if entity @s[hasitem={item=sm:vulcan_cannon,location=slot.weapon.mainhand}] run tag @s add vulcan_attack
tag @s add immuneToCurrentAttack
tag @a[r=3,rm=0.2] remove immuneToCurrentAttack
##repulsion blade
execute if entity @s[hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit_repulsion
execute if entity @s[hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit_repulsion
execute if entity @s[hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit_repulsion
##440
execute if entity @s[hasitem={item=sm:heavenpiercer,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:heavenpiercer,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit_heavenpiercer
execute if entity @s[hasitem={item=sm:heavenpiercer,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:heavenpiercer,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit_heavenpiercer
execute if entity @s[hasitem={item=sm:heavenpiercer,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:heavenpiercer,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit_heavenpiercer
execute if entity @s[hasitem={item=sm:heavenpiercer,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^4 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:heavenpiercer,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^4 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit_heavenpiercer
##green gobbler
execute if entity @s[hasitem={item=sm:green_gobbler_cannon,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2.1,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:green_gobbler_cannon,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2.1,tag=!immuneToCurrentAttack] run tag @s add hit_gobbler
execute if entity @s[hasitem={item=sm:green_gobbler_cannon,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2.5 run execute as @e[r=2.1,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:green_gobbler_cannon,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2.5 run execute as @e[r=2.1,tag=!immuneToCurrentAttack] run tag @s add hit_gobbler
##true holic
execute if entity @s[hasitem={item=sm:true_holic,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:true_holic,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit_holic
execute if entity @s[hasitem={item=sm:true_holic,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:true_holic,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit_holic
execute if entity @s[hasitem={item=sm:true_holic,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:true_holic,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit_holic

execute if entity @s[hasitem={item=sm:kusarigama,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:kusarigama,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit_kusarigama
execute if entity @s[hasitem={item=sm:kusarigama,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:kusarigama,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit_kusarigama
execute if entity @s[hasitem={item=sm:kusarigama,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:kusarigama,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit_kusarigama
execute if entity @s[hasitem={item=sm:kusarigama,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^4 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:kusarigama,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^4 run execute as @e[r=2.5,tag=!immuneToCurrentAttack] run tag @s add hit_kusarigama
#say swing

execute if entity @s[hasitem={item=sm:blushing_bloomfan,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:blushing_bloomfan,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit_bloomfan

execute if entity @s[hasitem={item=sm:blushing_bloomfan,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:blushing_bloomfan,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit_bloomfan

execute if entity @s[hasitem={item=sm:blushing_bloomfan,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:blushing_bloomfan,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^3 run execute as @e[r=2,tag=!immuneToCurrentAttack] run tag @s add hit_bloomfan



execute if entity @s[hasitem={item=sm:mb85_greatsword,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=3,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:mb85_greatsword,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=3,tag=!immuneToCurrentAttack] run tag @s add hit_greatsword
execute if entity @s[hasitem={item=sm:mb85_greatsword,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~2.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=3,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:mb85_greatsword,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~2.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=3,tag=!immuneToCurrentAttack] run tag @s add hit_greatsword
execute if entity @s[hasitem={item=sm:mb85_greatsword,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~3.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=3,tag=!immuneToCurrentAttack] run tag @s add hit
execute if entity @s[hasitem={item=sm:mb85_greatsword,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~3.5 ~ run execute positioned ^ ^ ^1 run execute as @e[r=3,tag=!immuneToCurrentAttack] run tag @s add hit_greatsword
#execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^1 run particle minecraft:basic_flame_particle ~ ~ ~
#execute if entity @s[hasitem={item=sm:repulsion_blade,location=slot.weapon.mainhand}] run execute positioned as @s run execute positioned ~ ~1.5 ~ run execute positioned ^ ^ ^2 run particle minecraft:basic_flame_particle ~ ~ ~