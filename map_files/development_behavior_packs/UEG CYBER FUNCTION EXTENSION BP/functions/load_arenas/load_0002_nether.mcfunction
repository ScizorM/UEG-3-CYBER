#bridge-file-version: #19
tellraw @a {"rawtext": [{"text": "§e§l-----[Arena Select]-----\n\n§r§a> [UEG 1] Nether Selected.§e\n> Difficulty: Normal \n> Size: Large\n> Original Creators: PoizonArrow, ScizorM\n> Remaster: ScizorM\n\n§e§l-----------------------"}]}
clone -242 10 -19 -242 10 -19 -161 0 229
execute if block -242 10 -19 element_0 run tellraw @a {"rawtext": [{"text": "§cArena is not complete, randomly selecting until a complete one is selected..."}]}
execute if block -242 10 -19 element_0 run function _re_randomize_arenas
scoreboard players set selected_arena selected_arena 2
 
##§d = UEG 1, 
##§6 = UEG PLUS, 
##§2 = RPG 1, 
##§c = RPG 2, 
##§a = CYBER