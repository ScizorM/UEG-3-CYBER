#bridge-file-version: #1
setblock -60 21 2 air
setblock -62 21 2 air
scoreboard players set deathzone_phase deathzone_phase 0
event entity @e[type=sm:zone_timer] sm:stop_timer