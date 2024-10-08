#bridge-file-version: #13
tag @s add y_b
camera @s fade time 0 0.1 0.8 color 0 0 0
execute @e[name=teleporter_y_a,r=100] ~ ~ ~ tp @a[r=100,tag=y_b,tag=!teleport_cooldown] ~ ~ ~
title @s title -TELEPORTED-
tag @s remove y_b
tag @s add teleport_cooldown