#bridge-file-version: #15
tag @s add p_b
camera @s fade time 0 0.1 0.8 color 0 0 0
execute @e[name=teleporter_p_a,r=100] ~ ~ ~ tp @a[tag=p_b,r=100,tag=!teleport_cooldown] ~ ~ ~
title @s title -TELEPORTED-
tag @s remove p_b
tag @s add teleport_cooldown