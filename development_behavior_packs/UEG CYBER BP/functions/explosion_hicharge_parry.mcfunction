#bridge-file-version: #9
execute @s[tag=parry] ~ ~ ~ camerashake add @a[r=20] 0.8 0.3
execute @s[tag=parry] ~ ~ ~ /summon sm:explosion_display_parry ~ ~ ~
execute @s[tag=parry] ~ ~ ~ particle sm:explosionburst_parry
execute @s[tag=parry] ~ ~ ~ particle sm:explosion_ring ~ ~0.1 ~
execute @s[tag=parry] ~ ~ ~ particle sm:explosion_burst_blue
execute @s[tag=parry] ~ ~ ~ summon sm:explosion_parry