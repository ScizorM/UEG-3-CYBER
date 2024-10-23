#bridge-file-version: #1
##UEG 1 - Default
scoreboard players set 0000_ enabled_arenas 0
scoreboard players set 0001_ enabled_arenas 0
scoreboard players set 0002_ enabled_arenas 0
scoreboard players set 0003_ enabled_arenas 0
scoreboard players set 0004_ enabled_arenas 0
scoreboard players set 0005_ enabled_arenas 0
##UEG 1 - Unlockable
execute if score "ueg1" arenapacks_unlocked matches 1 run scoreboard players set 0010_ enabled_arenas 0
execute if score "ueg1" arenapacks_unlocked matches 1 run scoreboard players set 0012_ enabled_arenas 0
execute if score "ueg1" arenapacks_unlocked matches 1 run scoreboard players set 0013_ enabled_arenas 0
execute if score "ueg1" arenapacks_unlocked matches 1 run scoreboard players set 0014_ enabled_arenas 0
execute if score "ueg1" arenapacks_unlocked matches 1 run scoreboard players set 0018_ enabled_arenas 0
execute if score "ueg1" arenapacks_unlocked matches 1 run scoreboard players set 0023_ enabled_arenas 0