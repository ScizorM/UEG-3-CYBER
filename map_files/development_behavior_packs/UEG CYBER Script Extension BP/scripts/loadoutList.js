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
    "sm:loadout_cannon", //1
    "sm:loadout_rifle", //2
    "sm:loadout_blade", //3
    "sm:loadout_pickaxe", //4
    "sm:loadout_platform", //5
    "sm:loadout_block", //6
    "sm:loadout_mine", //7
    "sm:loadout_remote", //8
    "sm:loadout_gaugegun", //9
    "sm:loadout_v_cannonv", //10
    "sm:loadout_baby_stick", //11
    "sm:loadout_gob_goo_cannon", //12
    "sm:loadout_prism", //13
    "sm:loadout_sc_quant-e", //14
    "sm:loadout_sound_blade_1", //15
    "sm:loadout_big_joe_weapon", //16
    "sm:loadout_emp_drive", //17
    "sm:loadout_salmon_bomb", //18
    "sm:loadout_scaler_bomb", //19
    "sm:loadout_implosion_grenade", //20
    "sm:loadout_green_gobbler_cannon", //21
    "sm:loadout_sight_blade", //22
    "sm:loadout_parry_fist", //23
    "sm:loadout_solis_cannon", //24
    "sm:loadout_frigidus_cannon", //25
    "sm:loadout_emp_trap", //26
    "sm:loadout_deep_striker", //27
    "sm:loadout_mb85_crimson_hws", //28
    "sm:loadout_gilded_marksman", //29 
    "sm:loadout_kusarigama", //30
    "sm:loadout_use_stored_item", //31
    "sm:loadout_heirloom", //32
    "sm:loadout_fish_car", //33
    "sm:loadout_mb85_greatsword" //34
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
    "sm:use_stored_item",
    "sm:heirloom",
    "sm:fish_car",
    "sm:mb85_greatsword"
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
    "Utility Lunchbox ",
    "Nakaw's Heirloom ",
    "Fish Car ",
    "MB85 Greatsword "
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