#bridge-file-version: #88
##Screen Selected:
##1 - Skins
##2 - Rockets
##3 - Effects
 
execute if entity @a[r=10] run execute if score customMenu2 customMenuActive matches 0 run execute as @a[tag=customRoom2] run function _exit_custom_forced
execute unless entity @a[r=10,tag=customRoom2] run scoreboard players set customMenu2 customMenuActive 0
 
function _custom_2_titles
 
particle sm:custom_bg ~ ~6 ~
##placeholder
##particle sm:template_character ~1 ~6.95 ~-0.05
##particle sm:template_character ~ ~6.95 ~-0.05
##particle sm:template_character ~-1 ~6.95 ~-0.05
##particle sm:template_character ~1 ~5.05 ~-0.05
##particle sm:template_character ~ ~5.05 ~-0.05
##particle sm:template_character ~-1 ~5.05 ~-0.05
 
##selected and not selected
function _customMenu_allSlots
 
execute if score SlotSelected customMenu2 matches 4 run particle sm:object_selected ~1 ~5.05 ~-0.07
execute if score SlotSelected customMenu2 matches 5 run particle sm:object_selected ~ ~5.05 ~-0.07
execute if score SlotSelected customMenu2 matches 6 run particle sm:object_selected ~-1 ~5.05 ~-0.07
execute if score SlotSelected customMenu2 matches 1 run particle sm:object_selected ~1 ~6.95 ~-0.07
execute if score SlotSelected customMenu2 matches 2 run particle sm:object_selected ~ ~6.95 ~-0.07
execute if score SlotSelected customMenu2 matches 3 run particle sm:object_selected ~-1 ~6.95 ~-0.07
##category 1: UEG skins
 
execute if score ScreenSelected customMenu2 matches 1 run execute if score MenuSelected customMenu2 matches 1 run function _custom_skins_page1
execute if score ScreenSelected customMenu2 matches 1 run execute if score MenuSelected customMenu2 matches 2 run function _custom_skins_page2
execute if score ScreenSelected customMenu2 matches 1 run execute if score MenuSelected customMenu2 matches 3 run function _custom_skins_page3
execute if score ScreenSelected customMenu2 matches 1 run execute if score MenuSelected customMenu2 matches 4 run function _custom_skins_page4
execute if score ScreenSelected customMenu2 matches 1 run execute if score MenuSelected customMenu2 matches 5 run function _custom_skins_page5
execute if score ScreenSelected customMenu2 matches 1 run execute if score MenuSelected customMenu2 matches 6 run function _custom_skins_page6
execute if score ScreenSelected customMenu2 matches 1 run execute if score MenuSelected customMenu2 matches 7 run function _custom_skins_page7
execute if score ScreenSelected customMenu2 matches 1 run execute if score MenuSelected customMenu2 matches 8 run function _custom_skins_page8
 
##category 2: RPG 1 Skins
 
##category 3: RPG 2 Skins
 
##category 4: mission skins
 
 
##other 
 
execute if score ScreenSelected customMenu2 matches 1 run particle sm:section_skin_selected ~.85 ~8.45 ~-0.07
execute if score ScreenSelected customMenu2 matches 2 run particle sm:section_thrusters_selected ~ ~8.45 ~-0.07
execute if score ScreenSelected customMenu2 matches 3 run particle sm:section_effect_selected ~-.85 ~8.45 ~-0.07
 
execute if score ScreenSelected customMenu2 matches !1 run particle sm:section_skin ~.85 ~8.45 ~
execute if score ScreenSelected customMenu2 matches !2 run particle sm:section_thrusters ~ ~8.45 ~
execute if score ScreenSelected customMenu2 matches !3 run particle sm:section_effect ~-.85 ~8.45 ~
 
 
 
execute if score ScreenSelected customMenu2 matches 1 run particle sm:skin_select ~ ~9.2 ~
execute if score ScreenSelected customMenu2 matches 2 run particle sm:rocket_select ~ ~9.2 ~
execute if score ScreenSelected customMenu2 matches 3 run particle sm:effect_select ~ ~9.2 ~
 
execute if score ScreenSelected customMenu2 matches 1..2 run execute if score MenuSelected customMenu2 matches 1 run particle sm:1_uegskins ~4 ~9.2 ~
execute if score ScreenSelected customMenu2 matches 1..2 run execute if score MenuSelected customMenu2 matches 2 run particle sm:2_uegcyberskins ~4 ~9.2 ~
execute if score ScreenSelected customMenu2 matches 1..2 run execute if score MenuSelected customMenu2 matches 3 run particle sm:3_missionskins ~4 ~9.2 ~
execute if score ScreenSelected customMenu2 matches 1..2 run execute if score MenuSelected customMenu2 matches 4 run particle sm:4_rpggame1pt1 ~4 ~9.2 ~
execute if score ScreenSelected customMenu2 matches 1..2 run execute if score MenuSelected customMenu2 matches 5 run particle sm:5_rpggame1pt2 ~4 ~9.2 ~
execute if score ScreenSelected customMenu2 matches 1..2 run execute if score MenuSelected customMenu2 matches 6 run particle sm:6_rpggame2 ~4 ~9.2 ~
execute if score ScreenSelected customMenu2 matches 1..2 run execute if score MenuSelected customMenu2 matches 7 run particle sm:7_miscunused ~4 ~9.2 ~
execute if score ScreenSelected customMenu2 matches 1..2 run execute if score MenuSelected customMenu2 matches 8 run particle sm:8_secret ~4 ~9.2 ~
 
 
 
 
 
 