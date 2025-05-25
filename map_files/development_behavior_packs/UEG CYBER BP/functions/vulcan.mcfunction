#bridge-file-version: #9
playsound vulcan_cannon @s
playsound vulcan_cannon @a[r=30] ~ ~ ~ 0.5
function vulcan_extendedcmds
camerashake add @s 0.05 0.1 rotational
scoreboard players set @s vulcan_cannon_cooldown 7