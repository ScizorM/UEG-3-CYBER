#bridge-file-version: #1
execute if score game_active game_active matches 1 run function spectator_teleportIn
execute if score game_active game_active matches 0 run tellraw @s {"rawtext":[{"text":"§cNo game is currently active."}]}