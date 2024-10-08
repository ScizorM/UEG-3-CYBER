#bridge-file-version: #1
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run particle sm:deathzone_warning -134 83.1 255
particle sm:deathzone_warning -134 25.1 255
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run particle sm:deathzone_top_warning -134 83.1 255
particle sm:deathzone_top_warning -134 25.1 255
tellraw @a[tag=ingame] {"rawtext": [{"text": "§e[PVP Announcements] §c"},{"text": "WARNING! Death Zone progressing to PHASE 3. Stay between the lit areas."}]}
execute as @a[tag=ingame] run execute positioned as @s run playsound zone_warning @s ~ ~ ~ 0.5
setblock -60 21 2 redstone_block