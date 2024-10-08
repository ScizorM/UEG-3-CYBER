#bridge-file-version: #12
execute as @s[tag=teamed] if block ~ ~ ~ bedrock run function spectator_teleportOut_teamed
execute as @s[tag=teamed] if block ~ ~1 ~ bedrock run function spectator_teleportOut_teamed
execute as @s[tag=teamed] if block ~ ~ ~ barrier run function spectator_teleportOut_teamed
execute as @s[tag=teamed] if block ~ ~1 ~ barrier run function spectator_teleportOut_teamed
execute as @s[tag=teamed] if block ~ ~ ~ sm:death_block run function spectator_teleportOut_teamed
execute as @s[tag=teamed] if block ~ ~1 ~ sm:death_block run function spectator_teleportOut_teamed
execute as @s[tag=teamed] if block ~ ~ ~ sm:arenaborder run function spectator_teleportOut_teamed
execute as @s[tag=teamed] if block ~ ~1 ~ sm:arenaborder run function spectator_teleportOut_teamed
 
execute as @s[tag=!teamed] run execute as @s if block ~ ~ ~ bedrock run function spectator_teleportOut
execute as @s[tag=!teamed] run execute as @s if block ~ ~1 ~ bedrock run function spectator_teleportOut
execute as @s[tag=!teamed] run execute as @s if block ~ ~ ~ barrier run function spectator_teleportOut
execute as @s[tag=!teamed] run execute as @s if block ~ ~1 ~ barrier run function spectator_teleportOut
execute as @s[tag=!teamed] run execute as @s if block ~ ~ ~ sm:death_block run function spectator_teleportOut
execute as @s[tag=!teamed] run execute as @s if block ~ ~1 ~ sm:death_block run function spectator_teleportOut
execute as @s[tag=!teamed] run execute as @s if block ~ ~ ~ sm:arenaborder run function spectator_teleportOut
execute as @s[tag=!teamed] run execute as @s if block ~ ~1 ~ sm:arenaborder run function spectator_teleportOut
 
execute as @s[tag=!teamed] run execute if score game_active game_active matches 0 run function spectator_teleportOut_gameEnd