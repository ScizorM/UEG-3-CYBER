#bridge-file-version: #3
###page 1
 
##slot 1 
execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:page1_1_0000_recruit ~4 ~8.6 ~
execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 0
 
##slot 2
execute if entity @p[tag=001_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:page1_2_0001_demolitionist ~4 ~8.6 ~
execute if entity @p[tag=001_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 1
execute if entity @p[tag=!001_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 -1

execute if entity @p[tag=!001_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:unlock_0001 ~4 ~8.6 ~
 
##slot 3
execute if entity @p[tag=003_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:page1_3_0003_plus_knight ~4 ~8.6 ~
execute if entity @p[tag=003_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 3
execute if entity @p[tag=!003_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 -1
 
execute if entity @p[tag=!003_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:unlock_0003 ~4 ~8.6 ~
 
##slot 4
execute if entity @p[tag=056_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:page1_4_0056_pipe_skin ~4 ~8.6 ~
execute if entity @p[tag=056_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 56
execute if entity @p[tag=!056_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 -1

execute if entity @p[tag=!056_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:unlock_stores_generic ~4 ~8.6 ~
 
##slot 5
execute if entity @p[tag=048_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:page1_5_0048_acid ~4 ~8.6 ~
execute if entity @p[tag=048_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 48
execute if entity @p[tag=!048_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 -1

execute if entity @p[tag=!048_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:unlock_stores_generic ~4 ~8.6 ~
 
##slot 6
execute if entity @p[tag=061_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:page1_6_0061 ~4 ~8.6 ~
execute if entity @p[tag=061_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 61
execute if entity @p[tag=!061_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 -1


execute if entity @p[tag=!061_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 1 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:unlock_stores_generic ~4 ~8.6 ~
 
 
 
###p2
 
##slot 1 
execute if entity @p[tag=062_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:page2_1_0062 ~4 ~8.6 ~
execute if entity @p[tag=062_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 62
execute if entity @p[tag=!062_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!062_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:unlock_stores_generic ~4 ~8.6 ~
 
##slot 2
execute if entity @p[tag=050_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:page2_2_0050_black_jackal ~4 ~8.6 ~
execute if entity @p[tag=050_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 50
execute if entity @p[tag=!050_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!050_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:unlock_stores_generic ~4 ~8.6 ~
 
##slot 3
execute if entity @p[tag=063_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:page2_3_0063 ~4 ~8.6 ~
execute if entity @p[tag=063_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 63
execute if entity @p[tag=!063_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!063_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:unlock_stores_generic ~4 ~8.6 ~
 
##slot 4
execute if entity @p[tag=064_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:page2_4_0064 ~4 ~8.6 ~
execute if entity @p[tag=064_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 64
execute if entity @p[tag=!064_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!064_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:unlock_stores_generic ~4 ~8.6 ~
 
##slot 5
execute if entity @p[tag=065_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:page2_5_0065 ~4 ~8.6 ~
execute if entity @p[tag=065_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 65
execute if entity @p[tag=!065_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!065_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:unlock_stores_generic ~4 ~8.6 ~
 
##slot 6
execute if entity @p[tag=066_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:page2_6_0066 ~4 ~8.6 ~
execute if entity @p[tag=066_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 66
execute if entity @p[tag=!066_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!066_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 2 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:unlock_stores_generic ~4 ~8.6 ~
 
 
 
 
###selectedNames
 
##slot 1 
execute if entity @p[tag=058_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:page3_1_0058 ~4 ~8.6 ~
execute if entity @p[tag=058_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 58
execute if entity @p[tag=!058_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!058_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:locked_title ~4 ~8.6 ~
 
##slot 2
execute if entity @p[tag=059_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:page3_2_0059 ~4 ~8.6 ~
execute if entity @p[tag=059_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 59
execute if entity @p[tag=!059_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!059_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:locked_title ~4 ~8.6 ~
 
##slot 3
execute if entity @p[tag=060_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:page3_3_0060 ~4 ~8.6 ~
execute if entity @p[tag=060_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 60
execute if entity @p[tag=!060_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!060_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:locked_title ~4 ~8.6 ~
 
##slot 4
execute if entity @p[tag=037_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:page3_4_0037_sound_goddess ~4 ~8.6 ~
execute if entity @p[tag=037_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 37
execute if entity @p[tag=!037_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!037_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:locked_title ~4 ~8.6 ~
 
##slot 5
execute if entity @p[tag=039_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:page3_5_0039_sight_goddess ~4 ~8.6 ~
execute if entity @p[tag=039_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 39
execute if entity @p[tag=!039_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!039_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:locked_title ~4 ~8.6 ~
 
##slot 6
execute if entity @p[tag=049_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:page3_6_0049_golden_striker ~4 ~8.6 ~
execute if entity @p[tag=049_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 49
execute if entity @p[tag=!049_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!049_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 3 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:locked_title ~4 ~8.6 ~
 
 
 
 
###selectedNames
 
##slot 1 
execute if entity @p[tag=004_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:page4_1_0004_robot ~4 ~8.6 ~
execute if entity @p[tag=004_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 4
execute if entity @p[tag=!004_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!004_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:locked_rpg_game ~4 ~8.6 ~
 
##slot 2
execute if entity @p[tag=005_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:page4_2_0005_elf ~4 ~8.6 ~
execute if entity @p[tag=005_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 5
execute if entity @p[tag=!005_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!005_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:locked_rpg_game ~4 ~8.6 ~
 
##slot 3
execute if entity @p[tag=006_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:page4_3_0006_demon ~4 ~8.6 ~
execute if entity @p[tag=006_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 6
execute if entity @p[tag=!006_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!006_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:locked_rpg_game ~4 ~8.6 ~
 
##slot 4
execute if entity @p[tag=007_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:page4_4_0007_spectral ~4 ~8.6 ~
execute if entity @p[tag=007_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 7
execute if entity @p[tag=!007_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!007_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:locked_rpg_game ~4 ~8.6 ~
 
##slot 5
execute if entity @p[tag=008_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:page4_5_0008_golem ~4 ~8.6 ~
execute if entity @p[tag=008_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 8
execute if entity @p[tag=!008_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!008_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:locked_rpg_game ~4 ~8.6 ~
 
##slot 6
execute if entity @p[tag=009_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:page4_6_0009_cat ~4 ~8.6 ~
execute if entity @p[tag=009_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 9
execute if entity @p[tag=!009_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!009_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 4 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:locked_rpg_game ~4 ~8.6 ~
 
 
 
###selectedNames
 
##slot 1 
execute if entity @p[tag=023_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:page5_1_0023_shadow_elf ~4 ~8.6 ~
execute if entity @p[tag=023_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 23
execute if entity @p[tag=!023_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!023_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:locked_rpg2_generic ~4 ~8.6 ~
 
##slot 2
execute if entity @p[tag=024_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:page5_2_0024_shadow_king ~4 ~8.6 ~
execute if entity @p[tag=024_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 24
execute if entity @p[tag=!024_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!024_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:locked_rpg2_generic ~4 ~8.6 ~
 
##slot 3
execute if entity @p[tag=030_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:page5_3_0030_chrysan ~4 ~8.6 ~
execute if entity @p[tag=030_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 30
execute if entity @p[tag=!030_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!030_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:locked_rpg2_generic ~4 ~8.6 ~
 
##slot 4
execute if entity @p[tag=031_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:page5_4_0031_lilith ~4 ~8.6 ~
execute if entity @p[tag=031_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 31
execute if entity @p[tag=!031_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!031_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:locked_rpg2_generic ~4 ~8.6 ~
 
##slot 5
execute if entity @p[tag=036_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:page5_5_0036_big_joe ~4 ~8.6 ~
execute if entity @p[tag=036_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 36
execute if entity @p[tag=!036_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!036_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:locked_rpg2_generic ~4 ~8.6 ~
 
##slot 6
execute if entity @p[tag=057_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:page5_6_0057_shaparium ~4 ~8.6 ~
execute if entity @p[tag=057_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 57
execute if entity @p[tag=!057_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!057_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 5 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:locked_rpg2_generic ~4 ~8.6 ~
 
 
###selectedNames
 
##slot 1 
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:page5_1_0023_shadow_elf ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 2
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:page5_2_0024_shadow_king ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 3
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:page5_3_0030_chrysan ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 4
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:page5_4_0031_lilith ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 5
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:page5_5_0036_big_joe ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 6
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:page5_6_0057_shaparium ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 6 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
 
 
###selectedNames
 
##slot 1 
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:page5_1_0023_shadow_elf ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 2
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:page5_2_0024_shadow_king ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 3
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:page5_3_0030_chrysan ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 4
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:page5_4_0031_lilith ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 5
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:page5_5_0036_big_joe ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
##slot 6
execute if entity @p[tag=unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:page5_6_0057_shaparium ~4 ~8.6 ~
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!unknown_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 7 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:locked_coming_soon ~4 ~8.6 ~
 
 
 
###selectedNames
 
##slot 1 
execute if entity @p[tag=055_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:page8_1_0055_cheeseburger ~4 ~8.6 ~
execute if entity @p[tag=055_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 55
execute if entity @p[tag=!055_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!055_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 1 run particle sm:locked_secret_generic ~4 ~8.6 ~
 
##slot 2
execute if entity @p[tag=054_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:page8_2_0054_astray ~4 ~8.6 ~
execute if entity @p[tag=054_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 54
execute if entity @p[tag=!054_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!054_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 2 run particle sm:locked_secret_generic ~4 ~8.6 ~
 
##slot 3
execute if entity @p[tag=053_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:page8_3_0053_baby ~4 ~8.6 ~
execute if entity @p[tag=053_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 53
execute if entity @p[tag=!053_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!053_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 3 run particle sm:locked_secret_generic ~4 ~8.6 ~
 
##slot 4
execute if entity @p[tag=051_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:page8_4_0051_aubrey ~4 ~8.6 ~
execute if entity @p[tag=051_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 51
execute if entity @p[tag=!051_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!051_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 4 run particle sm:locked_secret_generic ~4 ~8.6 ~
 
##slot 5
execute if entity @p[tag=052_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:page8_5_0052_rye ~4 ~8.6 ~
execute if entity @p[tag=052_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 52
execute if entity @p[tag=!052_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!052_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 5 run particle sm:locked_secret_generic ~4 ~8.6 ~
 
##slot 6
execute if entity @p[tag=047_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:page8_6_0047_scizorm ~4 ~8.6 ~
execute if entity @p[tag=047_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 47
execute if entity @p[tag=!047_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SkinSelected customMenu3 -1
execute if entity @p[tag=!047_skin_unlocked,r=10] run execute if score MenuSelected customMenu3 matches 8 run execute if score ScreenSelected customMenu3 matches 1 run execute if score SlotSelected customMenu3 matches 6 run particle sm:locked_secret_generic ~4 ~8.6 ~ 
