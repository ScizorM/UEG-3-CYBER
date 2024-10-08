#bridge-file-version: #16
tellraw @a {"rawtext": [{"text": "§e§l-----[Arena Select]-----\n\n§r§a> [UEG 1] BlackWhite Selected.§e\n> Difficulty: Easy \n> Size: Medium\n> Original Creators: DarthMacJr, ScizorM, PoizonArrow\n> Remaster: ScizorM\n\n§e§l-----------------------"}]}
clone -242 10 -21 -242 10 -21 -161 0 229
execute if block -242 10 -21 element_0 run tellraw @a {"rawtext": [{"text": "§cArena is not complete, randomly selecting until a complete one is selected..."}]}
execute if block -242 10 -21 element_0 run function _re_randomize_arenas
scoreboard players set selected_arena selected_arena 1
##small: 
##med: 
##large: 
##xl: 
##diff1: 
##diff2: 
##diff3: 
##diff4: 
##blankdiff: 
 
##§d = UEG 1, 
##§6 = UEG PLUS, 
##§2 = RPG 1, 
##§c = RPG 2, 
##§a = CYBER