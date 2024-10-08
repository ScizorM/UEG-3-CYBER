#bridge-file-version: #39
scoreboard players add found_heads found_heads 1
particle sm:respawn_beam ~ ~ ~
tellraw @a {"rawtext": [{"text": "§e[Piglin Heads] §6"}, {"selector": "@p"},{"text": " has found a Piglin head!"}]}
setblock ~ ~ ~ air