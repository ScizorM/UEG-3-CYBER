#bridge-file-version: #14
tag @s add y_a
camera @s fade time 0 0.1 0.8 color 0 0 0
execute @e[name=teleporter_y_b,r=100] ~ ~ ~ tp @a[r=100,tag=y_a,tag=!teleport_cooldown] ~ ~ ~
title @s title -TELEPORTED-
tag @s remove y_a
tag @s add teleport_cooldown