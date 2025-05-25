#bridge-file-version: #26
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:parry_fist,location=slot.weapon.mainhand},r=3] run tag @s add parry
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:parry_fist,location=slot.weapon.mainhand},r=3] run event entity @s sm:add_normal
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:parry_fist,location=slot.weapon.mainhand},r=3] run tell @s parry
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:charged_bolt_rifle,location=slot.weapon.mainhand},r=3] run tag @s add default
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:charged_bolt_rifle,location=slot.weapon.mainhand},r=3] run event entity @s sm:add_normal
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:charged_bolt_rifle,location=slot.weapon.mainhand},r=3] run tell @s normal
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:icarus,location=slot.weapon.mainhand},r=3] run tag @s add icarus
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:icarus,location=slot.weapon.mainhand},r=3] run event entity @s sm:add_icarus
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:icarus,location=slot.weapon.mainhand},r=3] run tell @s icarus
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:archerfish,location=slot.weapon.mainhand},r=3] run tag @s add fish
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:archerfish,location=slot.weapon.mainhand},r=3] run event entity @s sm:add_archerfish
execute as @s[tag=!effected] run execute as @s positioned as @s run execute if entity @p[hasitem={item=sm:archerfish,location=slot.weapon.mainhand},r=3] run tell @s archerfish
tag @s add effected