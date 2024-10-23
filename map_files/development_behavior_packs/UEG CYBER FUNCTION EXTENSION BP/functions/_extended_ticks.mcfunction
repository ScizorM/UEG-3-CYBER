#bridge-file-version: #168
execute if score game_active game_active matches 1 run function game_active_cmds
 
execute as @a[lm=0,l=0] run tag @s remove abilitySound
execute as @a[lm=1,tag=!abilitySound] run execute positioned as @s run function playAbilitySound
 
execute as @a[tag=!team_nu,tag=!team_lambda,tag=enter_reactor,tag=!reactor_tutorial] run function start_settings_info
 
execute as @a[tag=!team_nu,tag=!team_lambda,tag=enter_music,tag=!music_tutorial] run function start_music_info
 
execute as @e[type=sm:teleporter_object] run execute positioned as @s run execute if block ~ ~-0.5 ~ air run event entity @s sm:despawn

function settings_info_ticks
 
function check_arenapack_count

function music_info_ticks

function check_enabled_arena_count
 
execute if score total total_en_arenas matches ..2 run execute if score boolean arena_vote_enabled matches 1 run function disable_avote_few 

execute as @a[scores={teleport_cooldown_new=1..}] run scoreboard players remove @s teleport_cooldown_new 1
scoreboard players add @a teleport_cooldown_new 0

function train_timer_cmds
execute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:settings_block run replaceitem entity @s slot.hotbar 4 sm:settings 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:settings_block_2 run replaceitem entity @s slot.hotbar 4 sm:settings 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a run execute positioned as @s run execute unless block ~ ~-1 ~ sm:settings_block run execute unless block ~ ~-1 ~ sm:settings_block_2 run clear @s sm:settings
execute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block run replaceitem entity @s slot.hotbar 4 sm:purchase 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block_2 run replaceitem entity @s slot.hotbar 4 sm:purchase 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block_3 run replaceitem entity @s slot.hotbar 4 sm:purchase 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:purchase_block_4 run replaceitem entity @s slot.hotbar 4 sm:purchase 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a run execute positioned as @s run execute unless block ~ ~-1 ~ sm:purchase_block run execute unless block ~ ~-1 ~ sm:purchase_block_2 run execute unless block ~ ~-1 ~ sm:purchase_block_4 run execute unless block ~ ~-1 ~ sm:purchase_block_3 run clear @s sm:purchase

execute as @a run execute positioned as @s run execute if block ~ ~-1 ~ sm:bank_block_2 run replaceitem entity @s slot.hotbar 4 sm:bank 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute as @a run execute positioned as @s run execute unless block ~ ~-1 ~ sm:bank_block_2 run clear @s sm:bank
 
execute if score playMusic playMusic matches 1 run scoreboard players add playMusicTimer playMusicTimer 1
 
execute if score queueMusicTrigger queueMusicTrigger matches 1 run tag @a[tag=teamed] add ingamemusic
 
scoreboard players add @a music_enabled 0
 
kill @e[type=breeze_wind_charge_projectile]
 
execute as @a[tag=dash_timer] run scoreboard players add @s dash_timer 1
execute as @a[tag=dash_timer] run execute if score @s dash_timer matches 10.. run function remove_dash_timer
 
##execute as @a[tag=dash_timer] run execute positioned as @s run execute positioned ~ ~1.5 ~ run particle sm:dash_particle ^ ^ ^-0.5
 
function new_pregame_timer_ticks
 
execute as @a[tag=dashAnim] run scoreboard players add @s dash_effect_timer 1
execute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 1 run event entity @s sm:dash_frame1
execute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 2 run event entity @s sm:dash_frame2
execute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 3 run event entity @s sm:dash_frame3
execute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 4 run event entity @s sm:dash_frame4
execute as @a[tag=dashAnim] run execute if score @s dash_effect_timer matches 5.. run function reset_dash_effects

scoreboard players add dash_effect variant_timer 1
execute as @e[tag=dashDisplay] run execute if score dash_effect variant_timer matches 1 run event entity @s sm:variant_1
execute as @e[tag=dashDisplay] run execute if score dash_effect variant_timer matches 2 run event entity @s sm:variant_2
execute as @e[tag=dashDisplay] run execute if score dash_effect variant_timer matches 3 run event entity @s sm:variant_3
execute as @e[tag=dashDisplay] run execute if score dash_effect variant_timer matches 4 run event entity @s sm:variant_4
execute as @e[tag=dashDisplay] run execute if score dash_effect variant_timer matches 5.. run event entity @s sm:variant_0
execute if score dash_effect variant_timer matches 30.. run scoreboard players set dash_effect variant_timer 0
 
scoreboard players add @a selected_effect 0


function open_dialogues
 
function titleMessageCmds
 
## re-enable eventually function song_select_particles
 
execute as @a[m=!c] run /execute if score @s dashes < minimum_dash_requirement minimum_dash_requirement run ability @s mayfly false
 
execute as @a run execute as @s positioned as @s run execute unless block ~ ~-0.5 ~ air run tag @s add grounded
execute as @a run execute as @s positioned as @s run execute if block ~ ~-0.5 ~ air run tag @s remove grounded
 

replaceitem entity @a[scores={selected_effect=0..1}] slot.armor.legs 0 sm:dash_effect 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @a[scores={selected_effect=2}] slot.armor.legs 0 sm:dash_effect_fire 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
replaceitem entity @a[scores={selected_effect=3}] slot.armor.legs 0 sm:dash_effect_digi 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}

execute as @a[tag=ingame,tag=grounded,scores={selected_effect=0..1}] run execute if score @s dashes < max_dashes max_dashes run execute positioned as @s run particle sm:charging_dashes ~ ~0.2 ~
execute as @a[tag=ingame,tag=grounded,scores={selected_effect=2}] run execute if score @s dashes < max_dashes max_dashes run execute positioned as @s run particle sm:charging_dashes_fire ~ ~0.2 ~
execute as @a[tag=ingame,tag=grounded,scores={selected_effect=3}] run execute if score @s dashes < max_dashes max_dashes run execute positioned as @s run particle sm:charging_dashes_digi ~ ~0.2 ~


 
function train_checks
 
function autoride_minecart
 
execute as @a run execute if score @s dashes >= minimum_dash_requirement minimum_dash_requirement run tag @s add can_dash
execute as @a run execute if score @s dashes < minimum_dash_requirement minimum_dash_requirement run tag @s remove can_dash
 
execute if score max_dashes max_dashes matches 0 run ability @a[m=!c] mayfly false
execute as @a[tag=ingame] run /execute if score @s dashes >= minimum_dash_requirement minimum_dash_requirement run /execute as @a run /function debug_resetflight
execute as @a[tag=tutorialwall] run /execute if score @s dashes >= minimum_dash_requirement minimum_dash_requirement run /execute as @a run /function debug_resetflight
execute as @a[tag=tutorial] run /execute if score @s dashes >= minimum_dash_requirement minimum_dash_requirement run /execute as @a run /function debug_resetflight
 
function alive_player_count_check
 
function death_spectate
 
function arenavote_blockdetect
 
 
 
function holic_ticks
 
function weapon_unlock_checks
 
function ability_unlock_checks
 
function skin_unlock_checks
 
execute as @e[type=sm:smog_blinder] run execute positioned as @s run /camera @a[r=5] fade time 0.1 0 5 color 50 120 100
execute as @e[type=sm:smog_blinder] run execute positioned as @s run tp @s ~ ~ ~
 
execute as @e[type=minecraft:egg,tag=!effected] run function explosion_effect_test
 
function icarus_ticks
 
function landmine_ticks
 
function arena_randomizer/randomize_arenas_denied
 
execute as @a[hasitem={item=sm:heavenpiercer}] run effect @s fire_resistance 1 0 true
 
execute as @a[tag=ingame] run execute positioned as @s[tag=ingame] run /execute as @s positioned as @s run execute if block ^ ^ ^1 allow run function wallJumpTicker
execute as @a[tag=ingame] run execute positioned as @s[tag=ingame] run /execute as @s positioned as @s run execute if block ^ ^ ^1 bedrock run function wallJumpTicker
execute as @a[tag=ingame] run execute positioned as @s run execute unless block ~ ~-1 ~ air run tag @s remove walljumpmessage
execute as @a[tag=ingame] run execute positioned as @s run execute unless block ~ ~-1 ~ air run scoreboard players operation @s wallJumps = max_wallJumps max_wallJumps
 
execute as @a[tag=tutorialwall] run execute positioned as @s run execute if block ~ ~-1 ~ sm:death_block run function respawn_training
execute as @e[type=snowball] run execute positioned as @s run execute if block ~ ~ ~ sm:arenaborder run event entity @s sm:despawn
execute as @e[type=arrow] run execute positioned as @s run execute if block ~ ~ ~ sm:arenaborder run event entity @s sm:despawn
execute as @e[type=egg] run execute positioned as @s run execute if block ~ ~ ~ sm:arenaborder run event entity @s sm:despawn
function lobby_enter_exit_ticks
 
function land_slam_effects
 
execute as @a[tag=teamed,tag=exit_stores,tag=!ingame] if score round_active round_active matches 0 run execute if score in_lobby in_lobby matches 1 run function items_pregame
 
 
execute as @e[type=sm:big_joe] run execute positioned as @s run summon sm:explosion
 
 
execute if score timer pregame_timer matches !1.. run scoreboard players set timer pregame_timer 0
 
 
#execute as @a[tag=team_lambda] run execute positioned as @s run particle minecraft:soul_particle ~ ~ ~
#execute as @a[tag=team_nu] run execute positioned as @s run particle minecraft:basic_flame_particle ~ ~ ~
 
kill @e[type=item]
 
function death_timer
 
#execute if score active lobby_pregameitems matches 1 run execute as @a[tag=team_nu,tag=exit_stores,tag=!ingame] run function items_pregame
#execute if score active lobby_pregameitems matches 1 run execute as @a[tag=team_lambda,tag=exit_stores,tag=!ingame] run function items_pregame
 
execute as @a[tag=tutorialwall] run execute positioned as @s[tag=tutorialwall] run /execute as @s positioned as @s run execute if block ^ ^ ^1 allow run function wallJumpTicker
execute as @a[tag=tutorialwall] run execute positioned as @s[tag=tutorialwall] run /execute as @s positioned as @s run execute if block ^ ^ ^1 bedrock run function wallJumpTicker
execute as @a[tag=tutorialwall] run execute positioned as @s run execute unless block ~ ~-1 ~ air run tag @s remove walljumpmessage
execute as @a[tag=tutorialwall] run execute positioned as @s run execute unless block ~ ~-1 ~ air run scoreboard players operation @s wallJumps = max_wallJumps max_wallJumps
 
execute as @a run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run execute if entity @e[r=5,tag=projectile] run event entity @s sm:fist_trigger

execute as @a run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run execute if entity @e[r=5,tag=projectile] run tag @s add parry_capable
 
execute as @a run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run execute unless entity @e[r=6,tag=projectile] run event entity @s sm:no_fist_trigger

execute as @a run execute positioned as @s run execute as @s positioned ~ ~1.7 ~ run execute positioned ^ ^ ^4 run execute unless entity @e[r=6,tag=projectile] run tag @s remove parry_capable
 
function ___custom_menu_ticks
function closed_store_commands
function zoom_zoom_race_ticks
 
tag @e[type=arrow] add projectile
tag @e[type=snowball] add projectile
tag @e[type=fireball] add projectile
tag @e[type=egg] add projectile
 
fill -159 72 230 -109 80 280 air
fill -159 81 230 -109 92 280 air
fill -159 93 230 -109 94 280 air
 
execute if score team_lambda team_wins matches 0 run scoreboard players set "§dTeam Lambda" points 0
execute if score team_lambda team_wins matches 1 run scoreboard players set "§dTeam Lambda" points 1
execute if score team_lambda team_wins matches 2 run scoreboard players set "§dTeam Lambda" points 2
execute if score team_lambda team_wins matches 3 run scoreboard players set "§dTeam Lambda" points 3
execute if score team_lambda team_wins matches 4 run scoreboard players set "§dTeam Lambda" points 4
execute if score team_lambda team_wins matches 5 run scoreboard players set "§dTeam Lambda" points 5
execute if score team_lambda team_wins matches 6 run scoreboard players set "§dTeam Lambda" points 6
execute if score team_lambda team_wins matches 7 run scoreboard players set "§dTeam Lambda" points 7
execute if score team_lambda team_wins matches 8 run scoreboard players set "§dTeam Lambda" points 8
execute if score team_lambda team_wins matches 9 run scoreboard players set "§dTeam Lambda" points 9
 
execute if score team_nu team_wins matches 0 run scoreboard players set "§cTeam Nu" points 0
execute if score team_nu team_wins matches 1 run scoreboard players set "§cTeam Nu" points 1
execute if score team_nu team_wins matches 2 run scoreboard players set "§cTeam Nu" points 2
execute if score team_nu team_wins matches 3 run scoreboard players set "§cTeam Nu" points 3
execute if score team_nu team_wins matches 4 run scoreboard players set "§cTeam Nu" points 4
execute if score team_nu team_wins matches 5 run scoreboard players set "§cTeam Nu" points 5
execute if score team_nu team_wins matches 6 run scoreboard players set "§cTeam Nu" points 6
execute if score team_nu team_wins matches 7 run scoreboard players set "§cTeam Nu" points 7
execute if score team_nu team_wins matches 8 run scoreboard players set "§cTeam Nu" points 8
execute if score team_nu team_wins matches 9 run scoreboard players set "§cTeam Nu" points 9
 
 
effect @a[tag=tutorialwall] speed 9999 1 true
effect @a[tag=tutorialwall] jump_boost 9999 2 true
 
execute if score jump_boost_level jump_boost_level matches 1 run effect @a[tag=teamed,tag=ingame] jump_boost 9999 0 true
execute if score jump_boost_level jump_boost_level matches 2 run effect @a[tag=teamed,tag=ingame] jump_boost 9999 1 true
execute if score jump_boost_level jump_boost_level matches 3 run effect @a[tag=teamed,tag=ingame] jump_boost 9999 2 true
execute if score jump_boost_level jump_boost_level matches 4 run effect @a[tag=teamed,tag=ingame] jump_boost 9999 3 true
execute if score jump_boost_level jump_boost_level matches 1 run effect @a[tag=tutorialwall] jump_boost 9999 0 true
execute if score jump_boost_level jump_boost_level matches 2 run effect @a[tag=tutorialwall] jump_boost 9999 1 true
execute if score jump_boost_level jump_boost_level matches 3 run effect @a[tag=tutorialwall] jump_boost 9999 2 true
execute if score jump_boost_level jump_boost_level matches 4 run effect @a[tag=tutorialwall] jump_boost 9999 3 true
 
execute if score speed_level speed_level matches 1 run effect @a speed 9999 0 true
execute if score speed_level speed_level matches 2 run effect @a speed 9999 1 true
execute if score speed_level speed_level matches 3 run effect @a speed 9999 2 true
execute if score speed_level speed_level matches 4 run effect @a speed 9999 3 true
 
execute if score slow_fall_level slow_fall_level matches 1 run effect @a[tag=teamed,tag=ingame] slow_falling 9999 0 true
execute if score slow_fall_level slow_fall_level matches 2 run effect @a[tag=teamed,tag=ingame] slow_falling 9999 1 true
execute if score slow_fall_level slow_fall_level matches 1 run effect @a[tag=tutorialwall] slow_falling 9999 0 true
execute if score slow_fall_level slow_fall_level matches 2 run effect @a[tag=tutorialwall] slow_falling 9999 1 true
 
 
scoreboard players add @a[tag=enter_marque_message_ticks] marque_center_info 1
camera @a[scores={marque_center_info=1}] set minecraft:free ease 2 in_out_sine pos 166 15 19 facing 169 14 17
tellraw @a[scores={marque_center_info=1}] {"rawtext":[{"text":"§e[Information] §fWelcome to the weapon center! In this area, you can arrange a selection of weapons in your hotbar to create a loadout to use in battle, select a preset loadout, and choose from your unlocked abilities."}]}
tellraw @a[scores={marque_center_info=200}] {"rawtext":[{"text":"§fIn the first part of the store, you can arrange a selection of weapons in your hotbar to create a loadout to use in battle."}]}
camera @a[scores={marque_center_info=200}] set minecraft:free ease 2 in_out_sine pos 170 15 16 facing 171 14 20
tellraw @a[scores={marque_center_info=400}] {"rawtext":[{"text":"§fTo create a custom loadout, select some of the weapons from an unlocked display case nearby, and arrange the items in your hotbar the way you want it to be saved."}]}
camera @a[scores={marque_center_info=400}] set minecraft:free ease 2 in_out_sine pos 171 14 20 facing 169 14 25
tellraw @a[scores={marque_center_info=600}] {"rawtext":[{"text":"§fOnce you're ready to save the loadout, go to the §eSave Custom Loadout Terminal§f and select which loadout to save your loadout to."}]}
camera @a[scores={marque_center_info=600}] set minecraft:free ease 2 in_out_sine pos 166.5 15 20 facing 164 13 20
tellraw @a[scores={marque_center_info=800}] {"rawtext":[{"text":"§fIf you are unsure of which weapons you want to experiment with yet, you can select one of the preset loadouts further back into the store."}]}
camera @a[scores={marque_center_info=800}] set minecraft:free ease 2 in_out_sine pos 166.5 15 20 facing 164 13 20
tellraw @a[scores={marque_center_info=1000}] {"rawtext":[{"text":"§fOther than this, to select an ability, enter the abilities section of the shop and select the ability that you would like to try."}]}
tellraw @a[scores={marque_center_info=1200}] {"rawtext":[{"text":"§fOne more thing, it may appear that some items and abilities are locked. To unlock these, you must visit other stores and complete objectives around the game to unlock them."}]}
camera @a[scores={marque_center_info=1200}] clear
tellraw @a[scores={marque_center_info=1500}] {"rawtext":[{"text":"§e[Tip] §fWant to try out your new loadouts? Check out the §dS.P.A.D.A. Training Center§e in the lobby."}]}
 
execute as @e[type=boat] run execute positioned as @s run execute if block ~ ~-1 ~ sm:death_block run kill @s