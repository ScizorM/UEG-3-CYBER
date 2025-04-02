export { weaponIDList, ingameWeaponIDList, ingameWeaponNames, loadoutTypeIDs, loadoutTypeIDLocs, loadoutIcons, loadoutNames,abilityList, abilityIconList, abilityFunctionList, abilitySBList }

const abilityList = new Array(
    "Rocket Jump",
    "Remote Activator",
    "Bungee Anchor",
    "Ground Slam",
    "Judgement",
    "No Ability"
)

const abilityIconList = new Array(
    "textures/items/ability_rocket",
    "textures/items/ability_remote",
    "textures/items/ability_baby",
    "textures/items/ability_vel_cancel",
    "textures/items/ability_prism",
    "textures/items/ability_none"
)

const abilityFunctionList = new Array(
    "function select_ability_rocket",
    "function select_ability_remote",
    "function select_ability_baby",
    "function select_ability_vel_cancel",
    "function select_ability_prism",
    "function remove_abilities"
)

const abilitySBList = new Array(
    undefined,
    "remote",
    "baby",
    "velocity_cancel",
    "prism",
    undefined
)

var weaponIDList = new Array(
    "minecraft:air", //ID 00
    "sm:loadout_cannon",
    "sm:loadout_rifle",
    "sm:loadout_blade",
    "sm:loadout_pickaxe",
    "sm:loadout_platform",
    "sm:loadout_block",
    "sm:loadout_mine",
    "sm:loadout_remote",
    "sm:loadout_gaugegun",
    "sm:loadout_v_cannonv",
    "sm:loadout_baby_stick",
    "sm:loadout_gob_goo_cannon",
    "sm:loadout_prism",
    "sm:loadout_sc_quant-e",
    "sm:loadout_sound_blade_1",
    "sm:loadout_big_joe_weapon",
    "sm:loadout_emp_drive",
    "sm:loadout_salmon_bomb",
    "sm:loadout_scaler_bomb",
    "sm:loadout_implosion_grenade",
    "sm:loadout_green_gobbler_cannon",
    "sm:loadout_sight_blade",
    "sm:loadout_parry_fist",
    "sm:loadout_solis_cannon",
    "sm:loadout_frigidus_cannon",
    "sm:loadout_emp_trap",
    "sm:loadout_deep_striker",
    "sm:loadout_mb85_crimson_hws",
    "sm:loadout_gilded_marksman",
    "sm:loadout_kusarigama",
    "sm:loadout_use_stored_item"
)

var ingameWeaponIDList = new Array(
    "minecraft:air", //ID 00
    "sm:vulcan_cannon",
    "sm:charged_bolt_rifle",
    "sm:repulsion_blade",
    "sm:energy_pickaxe",
    "sm:platform_fabricator",
    "sm:block_fabricator",
    "checkforteam_landmine",
    "checkforteam_remote",
    "minecraft:bow",
    "minecraft:crossbow",
    "sm:baby_stick",
    "sm:gob_goo_cannon",
    "sm:antigravity_prism",
    "sm:sc_quant-e",
    "sm:heavenpiercer",
    "sm:big_joe_weapon",
    "sm:emp_drive",
    "sm:salmon_bomb",
    "sm:scaler_bomb",
    "sm:implosion_grenade",
    "sm:green_gobbler_cannon",
    "sm:true_holic",
    "sm:parry_fist",
    "sm:icarus",
    "sm:smorgler",
    "sm:archerfish",
    "sm:deep_striker",
    "sm:mb85_crimson_hws",
    "sm:gilded_marksman",
    "sm:kusarigama",
    "sm:use_stored_item"
)
//Ranged: 
//Utils:
//Traps:
//Melee:
//Secret:
//Dev: 

var ingameWeaponNames = new Array(
    "§7No Weapon", //ID 00
    "Vulcan Cannon ",
    "Charged Bolt Rifle ",
    "Repulsion Blade ",
    "Energy Pickaxe ",
    "Platform Fabricator ",
    "Block Fabricator ",
    "Landmine ",
    "Remote Activator ",
    "Gauge Gun ",
    "TNT Crossbow ",
    "Robot Baby Wand ",
    "Gob Goo Cannon ",
    "Antigravity Prism ",
    "SC-QUANT[E] ",
    "440 Ver.Delta ",
    "Big Joe ",
    "Disruptor Array ",
    "Salmon Bomb ",
    "Scaler Bomb ",
    "Implosion Grenade /",
    "Green Gobbler's Signature Bludgeoning Cannon ",
    "True Holic ",
    "Parry Fist /",
    "Daedalus & Icarus ",
    "Datura L17 ",
    "Archerfish ",
    "The Deep Striker ",
    "The Deep Striker REBORN + Missile Heavy Weapons System ",
    "Gilded Marksman ",
    "Kusarigama /",
    "Utility Lunchbox "
)

const loadoutTypeIDs = new Array(
    "Custom",//00
    "Default",//01
    "Ranged",//02
    "Melee",//03
    "Spleef",//04
    "Legacy: Pre-UEG 1",//05
    "Legacy: UEG 1",//06
    "Legacy: UEG PLUS",//07
)

const loadoutIcons = new Array(
    "Wrench (Default)",//00
    "Vulcan Cannon",//01
    "Charged Bolt Rifle",//02
    "Repulsion Blade",//03
    "Destruction Unit V3",//04
    "TNT Crossbow",//05
    "Gauge Gun",//06
    "UEG PLUS Vulcan Cannon"//07
)


const loadoutTypeIDLocs = new Array(
    "textures/items/pregame_menu/loadout_custom",//00
    "textures/items/pregame_menu/loadout_default",//01
    "textures/items/pregame_menu/loadout_ranged",//02
    "textures/items/pregame_menu/loadout_melee",//03
    "textures/items/pregame_menu/loadout_spleef",//04
    "textures/items/pregame_menu/loadout_legacy_pre_uegone",//05
    "textures/items/pregame_menu/loadout_legacy_uegone",//06
    "textures/items/pregame_menu/loadout_legacy_uegplus"//07
)

const loadoutNames = new Array(
    "Custom (Default)", //00
    "All-Rounded", // 01
    "Offensive", // 02
    "Defensive", // 03
    "Recovery-Oriented", // 04
    "Movement-Oriented", // 05
    "Most Destructive", // 06
    "Reckless", // 07
    "Crazy Mode", // 08
    "Oops! All Melee!", // 09
    "Green Gobbler", // 10
    "Last Stand", // 11
    "Big Joe", // 12
    "Trolling", // 13
    "Pain", // 14
    "DO NOT USE!", // 15
    "One Weapon", // 16
    "Bare Minimum", // 17
    "Knee Surgery", // 18
    "THOSE WHO KNOW", // 19
    "Default", // 20
    "Foods"

)