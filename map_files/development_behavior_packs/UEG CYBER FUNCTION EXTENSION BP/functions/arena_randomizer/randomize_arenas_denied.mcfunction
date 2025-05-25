#bridge-file-version: #17
execute if score arena_slot_1 arena_randomizer matches 6..9 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 11 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 15..17 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 19..22 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 24 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 27 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 29 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 35..36 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 39 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 46..49 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 52..56 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 72 run function arena_randomizer/randomize_arenas_phase1
execute if score arena_slot_1 arena_randomizer matches 76 run function arena_randomizer/randomize_arenas_phase1
 
execute if score arena_slot_2 arena_randomizer matches 6..9 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 11 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 15..17 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 19..22 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 24 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 27 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 29 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 35..36 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 39 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 46..49 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 52..56 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 72 run function arena_randomizer/randomize_arenas_phase3
execute if score arena_slot_2 arena_randomizer matches 76 run function arena_randomizer/randomize_arenas_phase3
 
execute if score arena_slot_2 arena_randomizer = arena_slot_1 arena_randomizer run function arena_randomizer/randomize_arenas_phase3
 
execute if score arena_slot_3 arena_randomizer matches 6..9 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 11 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 15..17 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 19..22 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 24 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 27 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 29 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 35..36 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 39 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 46..49 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 52..56 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 72 run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer matches 76 run function arena_randomizer/randomize_arenas_phase5
 
execute if score arena_slot_3 arena_randomizer = arena_slot_1 arena_randomizer run function arena_randomizer/randomize_arenas_phase5
execute if score arena_slot_3 arena_randomizer = arena_slot_2 arena_randomizer run function arena_randomizer/randomize_arenas_phase5
 
execute unless score 0000_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 0 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0001_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 1 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0002_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 2 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0003_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 3 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0004_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 4 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0005_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 5 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0010_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 10 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0012_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 12 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0013_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 13 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0014_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 14 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0018_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 18 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0023_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 23 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0025_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 25 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0026_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 26 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0028_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 28 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0030_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 30 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0031_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 31 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0032_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 32 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0033_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 33 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0034_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 34 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0037_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 37 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0038_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 38 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0040_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 40 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0041_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 41 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0042_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 42 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0043_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 43 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0044_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 44 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0045_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 45 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0050_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 50 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0051_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 51 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0057_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 57 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0058_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 58 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0059_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 59 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0060_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 60 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0061_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 61 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0062_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 62 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0063_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 63 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0064_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 64 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0065_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 65 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0066_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 66 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0067_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 67 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0068_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 68 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0069_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 69 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0070_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 70 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0071_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 71 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0073_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 73 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0074_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 74 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0075_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 75 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0076_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 76 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0077_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 77 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0078_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 78 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0079_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 79 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0080_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 80 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0081_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 81 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0082_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 82 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0083_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 83 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0084_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 84 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0085_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 85 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0086_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 86 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0087_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 87 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0088_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 88 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0089_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 89 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0090_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 90 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0091_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 91 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0092_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 92 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0093_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 93 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0094_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 94 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0095_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 95 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0096_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 96 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0097_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 97 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0098_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 98 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0099_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 99 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0100_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 100 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0101_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 101 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0102_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 102 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0103_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 103 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0104_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 104 run function arena_randomizer/randomize_arenas_phase1
execute unless score 0105_ enabled_arenas matches 1 run execute if score arena_slot_1 arena_randomizer matches 105 run function arena_randomizer/randomize_arenas_phase1
 
execute unless score 0000_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 0 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0001_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 1 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0002_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 2 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0003_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 3 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0004_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 4 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0005_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 5 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0010_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 10 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0012_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 12 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0013_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 13 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0014_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 14 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0018_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 18 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0023_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 23 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0025_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 25 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0026_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 26 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0028_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 28 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0030_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 30 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0031_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 31 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0032_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 32 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0033_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 33 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0034_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 34 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0037_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 37 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0038_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 38 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0040_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 40 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0041_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 41 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0042_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 42 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0043_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 43 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0044_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 44 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0045_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 45 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0050_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 50 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0051_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 51 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0057_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 57 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0058_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 58 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0059_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 59 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0060_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 60 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0061_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 61 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0062_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 62 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0063_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 63 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0064_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 64 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0065_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 65 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0066_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 66 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0067_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 67 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0068_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 68 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0069_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 69 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0070_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 70 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0071_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 71 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0073_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 73 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0074_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 74 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0075_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 75 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0076_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 76 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0077_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 77 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0078_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 78 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0079_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 79 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0080_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 80 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0081_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 81 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0082_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 82 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0083_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 83 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0084_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 84 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0085_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 85 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0086_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 86 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0087_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 87 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0088_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 88 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0089_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 89 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0090_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 90 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0091_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 91 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0092_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 92 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0093_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 93 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0094_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 94 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0095_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 95 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0096_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 96 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0097_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 97 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0098_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 98 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0099_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 99 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0100_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 100 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0101_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 101 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0102_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 102 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0103_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 103 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0104_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 104 run function arena_randomizer/randomize_arenas_phase3
execute unless score 0105_ enabled_arenas matches 1 run execute if score arena_slot_2 arena_randomizer matches 105 run function arena_randomizer/randomize_arenas_phase3
 
execute unless score 0000_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 0 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0001_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 1 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0002_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 2 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0003_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 3 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0004_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 4 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0005_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 5 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0010_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 10 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0012_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 12 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0013_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 13 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0014_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 14 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0018_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 18 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0023_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 23 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0025_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 25 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0026_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 26 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0028_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 28 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0030_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 30 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0031_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 31 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0032_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 32 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0033_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 33 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0034_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 34 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0037_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 37 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0038_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 38 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0040_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 40 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0041_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 41 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0042_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 42 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0043_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 43 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0044_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 44 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0045_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 45 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0050_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 50 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0051_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 51 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0057_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 57 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0058_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 58 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0059_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 59 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0060_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 60 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0061_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 61 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0062_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 62 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0063_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 63 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0064_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 64 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0065_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 65 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0066_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 66 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0067_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 67 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0068_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 68 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0069_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 69 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0070_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 70 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0071_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 71 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0073_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 73 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0074_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 74 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0075_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 75 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0076_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 76 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0077_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 77 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0078_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 78 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0079_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 79 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0080_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 80 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0081_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 81 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0082_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 82 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0083_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 83 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0084_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 84 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0085_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 85 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0086_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 86 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0087_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 87 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0088_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 88 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0089_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 89 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0090_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 90 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0091_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 91 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0092_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 92 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0093_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 93 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0094_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 94 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0095_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 95 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0096_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 96 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0097_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 97 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0098_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 98 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0099_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 99 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0100_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 100 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0101_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 101 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0102_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 102 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0103_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 103 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0104_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 104 run function arena_randomizer/randomize_arenas_phase5
execute unless score 0105_ enabled_arenas matches 1 run execute if score arena_slot_3 arena_randomizer matches 105 run function arena_randomizer/randomize_arenas_phase5