#bridge-file-version: #7
execute @s[tag=default] ~ ~ ~ camerashake add @a[r=20] 0.8 0.3
execute @s[tag=default] ~ ~ ~ /summon sm:explosion_display ~ ~ ~
execute @s[tag=default] ~ ~ ~ particle sm:explosionburst_normal
execute @s[tag=default] ~ ~ ~ particle sm:explosion_ring ~ ~0.1 ~
execute @s[tag=default] ~ ~ ~ particle sm:explosion_burst_pink