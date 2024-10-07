#bridge-file-version: #89
execute if score repulsion_blade bannedItems matches 1 run clear @a sm:repulsion_blade
execute if score repulsion_blade bannedItems matches 1 run clear @a sm:loadout_blade
 
execute if score rifle bannedItems matches 1 run clear @a sm:charged_bolt_rifle
execute if score rifle bannedItems matches 1 run clear @a sm:loadout_rifle
 
 
execute if score block bannedItems matches 1 run clear @a sm:block_fabricator
execute if score block bannedItems matches 1 run clear @a sm:loadout_block
 
 
execute if score landmine bannedItems matches 1 run clear @a sm:landmine_ver_lambda
execute if score landmine bannedItems matches 1 run clear @a sm:landmine_ver_nu
execute if score landmine bannedItems matches 1 run clear @a sm:loadout_mine
 
 
execute if score platform bannedItems matches 1 run clear @a sm:platform_fabricator
execute if score platform bannedItems matches 1 run clear @a sm:loadout_platform
 
 
execute if score pickaxe bannedItems matches 1 run clear @a sm:energy_pickaxe
execute if score pickaxe bannedItems matches 1 run clear @a sm:loadout_pickaxe
 
 
execute if score remote bannedItems matches 1 run clear @a sm:remote_activator_ver_lambda
execute if score remote bannedItems matches 1 run clear @a sm:remote_activator_ver_nu
execute if score remote bannedItems matches 1 run clear @a sm:loadout_remote
 
 
execute if score vulcan_cannon bannedItems matches 1 run clear @a sm:vulcan_cannon
execute if score vulcan_cannon bannedItems matches 1 run clear @a sm:loadout_cannon
####################
 
execute if score og_cannon bannedItems matches 1 run clear @a bow
execute if score crossbow bannedItems matches 1 run clear @a sm:loadout_gaugegun
 
execute if score crossbow bannedItems matches 1 run clear @a crossbow
execute if score crossbow bannedItems matches 1 run clear @a sm:loadout_v_cannonv
#####################
 
execute if score emp_drive bannedItems matches 1 run clear @a sm:emp_drive
execute if score emp_drive bannedItems matches 1 run clear @a sm:loadout_emp_drive
 
 
execute if score prism bannedItems matches 1 run clear @a sm:antigravity_prism
execute if score prism bannedItems matches 1 run clear @a sm:loadout_prism
 
 
execute if score parry_fist bannedItems matches 1 run clear @a sm:parry_fist
execute if score parry_fist bannedItems matches 1 run clear @a sm:loadout_parry_fist
 
 
 
execute if score emp_trap bannedItems matches 1 run clear @a sm:emp_trap
execute if score emp_trap bannedItems matches 1 run clear @a sm:loadout_emp_trap
 
 
execute if score sight_blade bannedItems matches 1 run clear @a sm:sight_blade
execute if score sight_blade bannedItems matches 1 run clear @a sm:loadout_sight_blade
 
execute if score solis_cannon bannedItems matches 1 run clear @a sm:solis_cannon
execute if score solis_cannon bannedItems matches 1 run clear @a sm:loadout_solis_cannon
 
execute if score frigidus_cannon bannedItems matches 1 run clear @a sm:frigidus_cannon
execute if score frigidus_cannon bannedItems matches 1 run clear @a sm:loadout_frigidus_cannon
 
 
execute if score gob_goo_cannon bannedItems matches 1 run clear @a sm:gob_goo_cannon
execute if score gob_goo_cannon bannedItems matches 1 run clear @a sm:loadout_gob_goo_cannon
 
 
execute if score sound_blade bannedItems matches 1 run clear @a sm:sound_blade_1
execute if score sound_blade bannedItems matches 1 run clear @a sm:loadout_sound_blade_1
 
 
 
 
execute if score baby_staff bannedItems matches 1 run clear @a sm:baby_stick
execute if score baby_staff bannedItems matches 1 run clear @a sm:loadout_baby_stick
 
 
execute if score big_joe bannedItems matches 1 run clear @a sm:big_joe_weapon
execute if score big_joe bannedItems matches 1 run clear @a sm:loadout_big_joe_weapon
 
 
execute if score sc_quant_e bannedItems matches 1 run clear @a sm:sc_quant-e
execute if score sc_quant_e bannedItems matches 1 run clear @a sm:loadout_sc_quant-e
 
 
execute if score salmon_bomb bannedItems matches 1 run clear @a sm:salmon_bomb
execute if score salmon_bomb bannedItems matches 1 run clear @a sm:loadout_salmon_bomb
execute if score bans_enabled bans_enabled matches 0 run execute as @e[tag=banned] run execute positioned as @s run particle sm:banneditem ^.5 ^.5 ^
execute if score bans_enabled bans_enabled matches 1 run execute as @e[tag=banned] run execute positioned as @s run particle sm:perma_banneditem ^.5 ^.5 ^