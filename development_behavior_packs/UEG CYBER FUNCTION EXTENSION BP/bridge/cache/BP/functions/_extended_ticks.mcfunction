{
	"file_path": "C:\\Users\\scizo\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\UEG CYBER FUNCTION EXTENSION BP\\functions\\_extended_ticks.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "b90063b6_d0be_4317_bc25_e077d7b38265",
	"file_version": 168,
	"cache_content": "execute if score game_active game_active matches 1 run function game_active_cmds\n \nexecute as @a[lm=0,l=0] run tag @s remove abilitySound\nexecute as @a[lm=1,tag=!abilitySound] run execute positioned as @s run function playAbilitySound\n \nexecute as @a[tag=!team_nu,tag=!team_lambda,tag=enter_reactor,tag=!reactor_tutorial] run function start_settings_info\n\nexecute as @a[tag=!team_nu,tag=!team_lambda,tag=enter_music,tag=!music_tutorial] run function start_music_info\n\nfunction settings_info_ticks\n\nfunction music_info_ticks\n \nfunction train_timer_cmds\n\nexecute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block run replaceitem entity @s slot.hotbar 4 sm:purchase 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\nexecute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block_2 run replaceitem entity @s slot.hotbar 4 sm:purchase 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\nexecute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block_3 run replaceitem entity @s slot.hotbar 4 sm:purchase 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\nexecute as @a run execute positioned as @s run execute unless block ~ ~-1 ~ sm:purchase_block run execute unless block ~ ~-1 ~ sm:purchase_block_2 run execute unless block ~ ~-1 ~ sm:purchase_block_3 run clear @s sm:purchase\n\nexecute if score playMusic playMusic matches 1 run scoreboard players add playMusicTimer playMusicTimer 1\n \nexecute if score queueMusicTrigger queueMusicTrigger matches 1 run tag @a[tag=teamed] add ingamemusic\n \nscoreboard players add @a music_enabled 0\n \nkill @e[type=breeze_wind_charge_projectile]\n \nexecute as @a[tag=dash_timer] run scoreboard players add @s dash_timer 1\nexecute as @a[tag=dash_timer] run execute if score @s dash_timer matches 10.. run function remove_dash_timer\n \n##execute as @a[tag=dash_timer] run execute positioned as @s run execute positioned ~ ~1.5 ~ run particle sm:dash_particle ^ ^ ^-0.5\n \nfunction new_pregame_timer_ticks\n \nexecute as @a[tag=dashAnim] run scoreboard players add @s dash_effect_timer 1\nexecute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 1 run event entity @s sm:dash_frame1\nexecute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 2 run event entity @s sm:dash_frame2\nexecute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 3 run event entity @s sm:dash_frame3\nexecute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 4 run event entity @s sm:dash_frame4\nexecute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 5.. run function reset_dash_effects\n \nreplaceitem entity @a slot.armor.legs 0 sm:dash_effect 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\n \nfunction open_dialogues\n \nfunction titleMessageCmds\n \n## re-enable eventually function song_select_particles\n \nexecute as @a[m=!c] run /execute if score @s dashes < minimum_dash_requirement minimum_dash_requirement run ability @s mayfly false\n \nexecute as @a run execute as @s positioned as @s run execute unless block ~ ~-0.5 ~ air run tag @s add grounded\nexecute as @a run execute as @s positioned as @s run execute if block ~ ~-0.5 ~ air run tag @s remove grounded\n \nexecute as @a[tag=ingame,tag=grounded] run execute if score @s dashes < max_dashes max_dashes run execute positioned as @s run particle sm:charging_dashes ~ ~0.2 ~\n \nfunction train_checks\n \nfunction autoride_minecart\n \nexecute as @a run execute if score @s dashes >= minimum_dash_requirement minimum_dash_requirement run tag @s add can_dash\nexecute as @a run execute if score @s dashes < minimum_dash_requirement minimum_dash_requirement run tag @s remove can_dash\n \nexecute if score max_dashes max_dashes matches 0 run ability @a[m=!c] mayfly false\nexecute as @a[tag=ingame] run /execute if score @s dashes >= minimum_dash_requirement minimum_dash_requirement run /execute as @a run /function debug_resetflight\nexecute as @a[tag=tutorialwall] run /execute if score @s dashes >= minimum_dash_requirement minimum_dash_requirement run /execute as @a run /function debug_resetflight\nexecute as @a[tag=tutorial] run /execute if score @s dashes >= minimum_dash_requirement minimum_dash_requirement run /execute as @a run /function debug_resetflight\n \nfunction alive_player_count_check\n \nfunction death_spectate\n \nfunction arenavote_blockdetect\n \n \n \nfunction holic_ticks\n \nfunction weapon_unlock_checks\n \nfunction ability_unlock_checks\n \nfunction skin_unlock_checks\n \nexecute as @e[type=sm:smog_blinder] run execute positioned as @s run /camera @a[r=5] fade time 0.1 0 5 color 50 120 100\nexecute as @e[type=sm:smog_blinder] run execute positioned as @s run tp @s ~ ~ ~\n \nexecute as @e[type=minecraft:egg,tag=!effected] run function explosion_effect_test\n \nfunction icarus_ticks\n \nfunction landmine_ticks\n \nfunction arena_randomizer/randomize_arenas_denied\n \nexecute as @a[hasitem={item=sm:heavenpiercer}] run effect @s fire_resistance 1 0 true\n \nexecute as @a[tag=ingame] run execute positioned as @s[tag=ingame] run /execute as @s positioned as @s run execute if block ^ ^ ^1 allow run function wallJumpTicker\nexecute as @a[tag=ingame] run execute positioned as @s[tag=ingame] run /execute as @s positioned as @s run execute if block ^ ^ ^1 bedrock run function wallJumpTicker\nexecute as @a[tag=ingame] run execute positioned as @s run execute unless block ~ ~-1 ~ air run tag @s remove walljumpmessage\nexecute as @a[tag=ingame] run execute positioned as @s run execute unless block ~ ~-1 ~ air run scoreboard players operation @s wallJumps = max_wallJumps max_wallJumps\n \nexecute as @a[tag=tutorialwall] run execute positioned as @s run execute if block ~ ~-1 ~ sm:death_block run function respawn_training\nexecute as @e[type=snowball] run execute positioned as @s run execute if block ~ ~ ~ sm:arenaborder run event entity @s sm:despawn\nexecute as @e[type=arrow] run execute positioned as @s run execute if block ~ ~ ~ sm:arenaborder run event entity @s sm:despawn\nexecute as @e[type=egg] run execute positioned as @s run execute if block ~ ~ ~ sm:arenaborder run event entity @s sm:despawn\nfunction lobby_enter_exit_ticks\n \nfunction land_slam_effects\n \nexecute as @a[tag=teamed,tag=exit_stores,tag=!ingame] if score round_active round_active matches 0 run execute if score in_lobby in_lobby matches 1 run function items_pregame\n \n \nexecute as @e[type=sm:big_joe] run execute positioned as @s run summon sm:explosion\n \n \nexecute if score timer pregame_timer matches !1.. run scoreboard players set timer pregame_timer 0\n \n \n#execute as @a[tag=team_lambda] run execute positioned as @s run particle minecraft:soul_particle ~ ~ ~\n#execute as @a[tag=team_nu] run execute positioned as @s run particle minecraft:basic_flame_particle ~ ~ ~\n \nkill @e[type=item]\n \nfunction death_timer\n \n#execute if score active lobby_pregameitems matches 1 run execute as @a[tag=team_nu,tag=exit_stores,tag=!ingame] run function items_pregame\n#execute if score active lobby_pregameitems matches 1 run execute as @a[tag=team_lambda,tag=exit_stores,tag=!ingame] run function items_pregame\n \nexecute as @a[tag=tutorialwall] run execute positioned as @s[tag=tutorialwall] run /execute as @s positioned as @s run execute if block ^ ^ ^1 allow run function wallJumpTicker\nexecute as @a[tag=tutorialwall] run execute positioned as @s[tag=tutorialwall] run /execute as @s positioned as @s run execute if block ^ ^ ^1 bedrock run function wallJumpTicker\nexecute as @a[tag=tutorialwall] run execute positioned as @s run execute unless block ~ ~-1 ~ air run tag @s remove walljumpmessage\nexecute as @a[tag=tutorialwall] run execute positioned as @s run execute unless block ~ ~-1 ~ air run scoreboard players operation @s wallJumps = max_wallJumps max_wallJumps\n \nexecute as @a run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run execute if entity @e[r=5,tag=projectile] run event entity @s sm:fist_trigger\n \nexecute as @a run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run execute unless entity @e[r=5,tag=projectile] run event entity @s sm:no_fist_trigger\n \nfunction ___custom_menu_ticks\nfunction closed_store_commands\nfunction zoom_zoom_race_ticks\n \ntag @e[type=arrow] add projectile\ntag @e[type=snowball] add projectile\ntag @e[type=fireball] add projectile\ntag @e[type=egg] add projectile\n \nfill -159 72 230 -109 80 280 air\nfill -159 81 230 -109 92 280 air\nfill -159 93 230 -109 94 280 air\n \nexecute if score team_lambda team_wins matches 0 run scoreboard players set \"§dTeam Lambda\" points 0\nexecute if score team_lambda team_wins matches 1 run scoreboard players set \"§dTeam Lambda\" points 1\nexecute if score team_lambda team_wins matches 2 run scoreboard players set \"§dTeam Lambda\" points 2\nexecute if score team_lambda team_wins matches 3 run scoreboard players set \"§dTeam Lambda\" points 3\nexecute if score team_lambda team_wins matches 4 run scoreboard players set \"§dTeam Lambda\" points 4\nexecute if score team_lambda team_wins matches 5 run scoreboard players set \"§dTeam Lambda\" points 5\nexecute if score team_lambda team_wins matches 6 run scoreboard players set \"§dTeam Lambda\" points 6\nexecute if score team_lambda team_wins matches 7 run scoreboard players set \"§dTeam Lambda\" points 7\nexecute if score team_lambda team_wins matches 8 run scoreboard players set \"§dTeam Lambda\" points 8\nexecute if score team_lambda team_wins matches 9 run scoreboard players set \"§dTeam Lambda\" points 9\n \nexecute if score team_nu team_wins matches 0 run scoreboard players set \"§cTeam Nu\" points 0\nexecute if score team_nu team_wins matches 1 run scoreboard players set \"§cTeam Nu\" points 1\nexecute if score team_nu team_wins matches 2 run scoreboard players set \"§cTeam Nu\" points 2\nexecute if score team_nu team_wins matches 3 run scoreboard players set \"§cTeam Nu\" points 3\nexecute if score team_nu team_wins matches 4 run scoreboard players set \"§cTeam Nu\" points 4\nexecute if score team_nu team_wins matches 5 run scoreboard players set \"§cTeam Nu\" points 5\nexecute if score team_nu team_wins matches 6 run scoreboard players set \"§cTeam Nu\" points 6\nexecute if score team_nu team_wins matches 7 run scoreboard players set \"§cTeam Nu\" points 7\nexecute if score team_nu team_wins matches 8 run scoreboard players set \"§cTeam Nu\" points 8\nexecute if score team_nu team_wins matches 9 run scoreboard players set \"§cTeam Nu\" points 9\n \n \neffect @a[tag=tutorialwall] speed 9999 1 true\neffect @a[tag=tutorialwall] jump_boost 9999 2 true\n \nexecute if score jump_boost_level jump_boost_level matches 1 run effect @a[tag=teamed,tag=ingame] jump_boost 9999 0 true\nexecute if score jump_boost_level jump_boost_level matches 2 run effect @a[tag=teamed,tag=ingame] jump_boost 9999 1 true\nexecute if score jump_boost_level jump_boost_level matches 3 run effect @a[tag=teamed,tag=ingame] jump_boost 9999 2 true\nexecute if score jump_boost_level jump_boost_level matches 4 run effect @a[tag=teamed,tag=ingame] jump_boost 9999 3 true\nexecute if score jump_boost_level jump_boost_level matches 1 run effect @a[tag=tutorialwall] jump_boost 9999 0 true\nexecute if score jump_boost_level jump_boost_level matches 2 run effect @a[tag=tutorialwall] jump_boost 9999 1 true\nexecute if score jump_boost_level jump_boost_level matches 3 run effect @a[tag=tutorialwall] jump_boost 9999 2 true\nexecute if score jump_boost_level jump_boost_level matches 4 run effect @a[tag=tutorialwall] jump_boost 9999 3 true\n \nexecute if score speed_level speed_level matches 1 run effect @a speed 9999 0 true\nexecute if score speed_level speed_level matches 2 run effect @a speed 9999 1 true\nexecute if score speed_level speed_level matches 3 run effect @a speed 9999 2 true\nexecute if score speed_level speed_level matches 4 run effect @a speed 9999 3 true\n \nexecute if score slow_fall_level slow_fall_level matches 1 run effect @a[tag=teamed,tag=ingame] slow_falling 9999 0 true\nexecute if score slow_fall_level slow_fall_level matches 2 run effect @a[tag=teamed,tag=ingame] slow_falling 9999 1 true\nexecute if score slow_fall_level slow_fall_level matches 1 run effect @a[tag=tutorialwall] slow_falling 9999 0 true\nexecute if score slow_fall_level slow_fall_level matches 2 run effect @a[tag=tutorialwall] slow_falling 9999 1 true\n \n \nscoreboard players add @a[tag=enter_marque_message_ticks] marque_center_info 1\ncamera @a[scores={marque_center_info=1}] set minecraft:free ease 2 in_out_sine pos 166 15 19 facing 169 14 17\ntellraw @a[scores={marque_center_info=1}] {\"rawtext\":[{\"text\":\"§e[Information] §fWelcome to the weapon center! In this area, you can arrange a selection of weapons in your hotbar to create a loadout to use in battle, select a preset loadout, and choose from your unlocked abilities.\"}]}\ntellraw @a[scores={marque_center_info=200}] {\"rawtext\":[{\"text\":\"§fIn the first part of the store, you can arrange a selection of weapons in your hotbar to create a loadout to use in battle.\"}]}\ncamera @a[scores={marque_center_info=200}] set minecraft:free ease 2 in_out_sine pos 170 15 16 facing 171 14 20\ntellraw @a[scores={marque_center_info=400}] {\"rawtext\":[{\"text\":\"§fTo create a custom loadout, select some of the weapons from an unlocked display case nearby, and arrange the items in your hotbar the way you want it to be saved.\"}]}\ncamera @a[scores={marque_center_info=400}] set minecraft:free ease 2 in_out_sine pos 171 14 20 facing 169 14 25\ntellraw @a[scores={marque_center_info=600}] {\"rawtext\":[{\"text\":\"§fOnce you're ready to save the loadout, go to the §eSave Custom Loadout Terminal§f and select which loadout to save your loadout to.\"}]}\ncamera @a[scores={marque_center_info=600}] set minecraft:free ease 2 in_out_sine pos 166.5 15 20 facing 164 13 20\ntellraw @a[scores={marque_center_info=800}] {\"rawtext\":[{\"text\":\"§fIf you are unsure of which weapons you want to experiment with yet, you can select one of the preset loadouts further back into the store.\"}]}\ncamera @a[scores={marque_center_info=800}] set minecraft:free ease 2 in_out_sine pos 166.5 15 20 facing 164 13 20\ntellraw @a[scores={marque_center_info=1000}] {\"rawtext\":[{\"text\":\"§fOther than this, to select an ability, enter the abilities section of the shop and select the ability that you would like to try.\"}]}\ntellraw @a[scores={marque_center_info=1200}] {\"rawtext\":[{\"text\":\"§fOne more thing, it may appear that some items and abilities are locked. To unlock these, you must visit other stores and complete objectives around the game to unlock them.\"}]}\ncamera @a[scores={marque_center_info=1200}] clear\ntellraw @a[scores={marque_center_info=1500}] {\"rawtext\":[{\"text\":\"§e[Tip] §fWant to try out your new loadouts? Check out the §dS.P.A.D.A. Training Center§e in the lobby.\"}]}\n \nexecute as @e[type=boat] run execute positioned as @s run execute if block ~ ~-1 ~ sm:death_block run kill @s"
}