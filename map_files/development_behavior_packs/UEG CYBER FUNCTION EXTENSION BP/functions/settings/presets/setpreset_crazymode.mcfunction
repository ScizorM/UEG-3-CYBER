#bridge-file-version: #5
scoreboard players set max_wins max_wins 1
scoreboard players set max_lives max_lives 9
scoreboard players set speed_level speed_level 4
scoreboard players set jump_boost_level jump_boost_level 4
scoreboard players set slow_fall_level slow_fall_level 3
scoreboard players set darkness_level darkness_level 1
scoreboard players set max_dashes max_dashes 10
scoreboard players set abilities_enabled abilities_enabled 1
scoreboard players set deathzone_enabled deathzone_enabled 1
scoreboard players set deathzone_initial deathzone_initial 3
scoreboard players set deathzone_top_enabled deathzone_top_enabled 1
scoreboard players set minimum_dash_requirement minimum_dash_requirement 1
scoreboard players set dash_strength dash_strength 10
scoreboard players set dash_verticality dash_verticality 1
tellraw @a {"rawtext": [{"text": "§e[Settings] §aPreset Selected: Crazy Mode"}]}
function settings/check_all