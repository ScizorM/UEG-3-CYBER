#bridge-file-version: #6
scoreboard players set max_wins max_wins 1
scoreboard players set max_lives max_lives 1
scoreboard players set speed_level speed_level 0
scoreboard players set jump_boost_level jump_boost_level 0
scoreboard players set slow_fall_level slow_fall_level 0
scoreboard players set darkness_level darkness_level 0
scoreboard players set max_dashes max_dashes 0
scoreboard players set abilities_enabled abilities_enabled 0
scoreboard players set deathzone_enabled deathzone_enabled 0
scoreboard players set deathzone_initial deathzone_initial 1
scoreboard players set deathzone_top_enabled deathzone_top_enabled 0
tellraw @a {"rawtext": [{"text": "§e[Settings] §aPreset Selected: Barebones"}]}
function settings/check_all