#bridge-file-version: #5
execute if score 0080_ enabled_arenas matches 0..1 run scoreboard players add 0080_ enabled_arenas 1
execute if score 0080_ enabled_arenas matches 2 run scoreboard players set 0080_ enabled_arenas 0
execute if score 0080_ enabled_arenas matches 0 run function arena_toggles/off_general
execute if score 0080_ enabled_arenas matches 1 run function arena_toggles/on_general
 
execute if score 0080_ enabled_arenas matches 1 run tellraw @a {"rawtext": [{"text": "§e§l-----[Arena Toggles]-----\n§r§b> [UEG CYBER] Pondwater §eEnabled.§e\n§e§l-----------------------"}]}
execute if score 0080_ enabled_arenas matches 0 run tellraw @a {"rawtext": [{"text": "§e§l-----[Arena Toggles]-----\n§r§b> [UEG CYBER] Pondwater §eDisabled.§e\n§e§l-----------------------"}]}