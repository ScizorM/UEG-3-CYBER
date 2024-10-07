#bridge-file-version: #2
scoreboard players add @a[tag=teleport_cooldown] teleport_cooldown 1
tag @a[tag=teleport_cooldown,scores={teleport_cooldown=5..}] remove teleport_cooldown
scoreboard players reset @a[tag=!teleport_cooldown,scores={teleport_cooldown=5..}] teleport_cooldown