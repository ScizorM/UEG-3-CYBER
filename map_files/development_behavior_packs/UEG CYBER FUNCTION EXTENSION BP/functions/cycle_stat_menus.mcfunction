#bridge-file-version: #18
scoreboard players add cycle_stat_menus cycle_stat_menus 0
execute if score cycle_stat_menus cycle_stat_menus matches 1 run scoreboard players set cycle_stat_menus cycle_stat_menus -1
scoreboard players add cycle_stat_menus cycle_stat_menus 1