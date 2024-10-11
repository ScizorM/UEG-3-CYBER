import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
export {clsM, bacM }
//
//
//COLOR CODES
//
//Bright:
//
//§a - Default
//§b - Unlock
//§c - Secret
//
//Dark:
//
//§2 - Default
//§3 - Unlock
//§4 - Secret
//
//arenaName = name of the arena
//arenaCred = original creators
//arenaRema = remaster creators (isn't used on new arenas)
//arenaVers = what version the map is from
//arenaDiff = what difficulty the map is
//arenaSize = what size the arena is
//arenaLoc = file location of the arena icon
//
//
//toggle message
const togM = "Toggle Arena"
const selM = "Select Arena"
const bacM = "Back"
const clsM = "Close"
//
const defaultUnlockColor = "§a"
const unlockableUnlockColor = "§b"
const secretUnlockColor = "§c"
//
const defaultUnlock = " "
const unlockableUnlock = " "
const secretUnlock = " "
const locked = " "
//
const lockedName = "LOCKED"
const lockedLoc = "textures/signs/arenas/locked_new"
//
const arenaName0000 = "Lost City"
const arenaCred0000 = "ScizorM, Eido750, DarthMacJr"
const arenaRema0000 = "ScizorM"
const arenaVers0000 = "UEG 1"
const arenaDiff0000 = "Normal"
const arenaSize0000 = "Medium"
const arenaLoc0000 = "textures/signs/arenas/ueg_1/0000_lostcity"
//
const arenaName0001 = "BlackWhite"
const arenaCred0001 = "DarthMacJr, ScizorM, PoizonArrow"
const arenaRema0001 = "ScizorM"
const arenaVers0001 = "UEG 1"
const arenaDiff0001 = "Easy"
const arenaSize0001 = "Medium"
const arenaLoc0001 = "textures/signs/arenas/ueg_1/0001_blackwhite"
//
const arenaName0002 = "Nether"
const arenaCred0002 = "PoizonArrow, ScizorM"
const arenaRema0002 = "ScizorM"
const arenaVers0002 = "UEG 1"
const arenaDiff0002 = "Normal"
const arenaSize0002 = "Large"
const arenaLoc0002 = "textures/signs/arenas/ueg_1/0002_nether"
//
const arenaName0003 = "Space"
const arenaCred0003 = "PoizonArrow"
const arenaRema0003 = "ScizorM"
const arenaVers0003 = "UEG 1"
const arenaDiff0003 = "Hard"
const arenaSize0003 = "Small"
const arenaLoc0003 = "textures/signs/arenas/ueg_1/0003_space"
//
const arenaName0004 = "Western"
const arenaCred0004 = "Bananaman, PoizonArrow, Teletubby"
const arenaRema0004 = "ScizorM"
const arenaVers0004 = "UEG 1"
const arenaDiff0004 = "Normal"
const arenaSize0004 = "Medium"
const arenaLoc0004 = "textures/signs/arenas/ueg_1/0004_western"
//
const arenaName0005 = "Stronghold"
const arenaCred0005 = "ScizorM"
const arenaRema0005 = "ScizorM"
const arenaVers0005 = "UEG 1"
const arenaDiff0005 = "Normal"
const arenaSize0005 = "Medium"
const arenaLoc0005 = "textures/signs/arenas/ueg_1/0005_stronghold"
//
const arenaName0010 = "Space Sector"
const arenaCred0010 = "ScizorM"
const arenaRema0010 = "ScizorM"
const arenaVers0010 = "UEG 1"
const arenaDiff0010 = "Normal"
const arenaSize0010 = "Medium"
const arenaLoc0010 = "textures/signs/arenas/ueg_1/0010_ss_ueg"
//
const arenaName0012 = "Retro Maze"
const arenaCred0012 = "ScizorM"
const arenaRema0012 = "ScizorM"
const arenaVers0012 = "UEG 1"
const arenaDiff0012 = "Easy"
const arenaSize0012 = "Large"
const arenaLoc0012 = "textures/signs/arenas/ueg_1/0012_retro_maze"
//
const arenaName0013 = "Chaos Void"
const arenaCred0013 = "ScizorM"
const arenaRema0013 = "ScizorM"
const arenaVers0013 = "UEG 1"
const arenaDiff0013 = "Normal"
const arenaSize0013 = "Medium"
const arenaLoc0013 = "textures/signs/arenas/ueg_1/0013_chaos_void"
//
const arenaName0014 = "Abstract"
const arenaCred0014 = "Goal243"
const arenaRema0014 = "ScizorM"
const arenaVers0014 = "UEG 1"
const arenaDiff0014 = "Abstract"
const arenaSize0014 = "Abstract"
const arenaLoc0014 = "textures/signs/arenas/ueg_1/0014_abstract"
//
const arenaName0018 = "Synthwave"
const arenaCred0018 = "ScizorM"
const arenaRema0018 = "ScizorM"
const arenaVers0018 = "UEG 1"
const arenaDiff0018 = "Easy"
const arenaSize0018 = "Large"
const arenaLoc0018 = "textures/signs/arenas/ueg_1/0018_synthwave"
//
const arenaName0023 = "The Tower"
const arenaCred0023 = "PoizonArrow (Unreleased)"
const arenaRema0023 = "ScizorM (With references from PoizonArrow)"
const arenaVers0023 = "UEG 1"
const arenaDiff0023 = "Normal"
const arenaSize0023 = "Large"
const arenaLoc0023 = "textures/signs/arenas/ueg_1/0023_the_tower"
////////////////////////////////////////////////////////////////////
//
const arenaName0025 = "Tundra"
const arenaCred0025 = "ScizorM, Eido750, DarthMacJr"
const arenaRema0025 = "ScizorM"
const arenaVers0025 = "UEG PLUS"
const arenaDiff0025 = "Normal"
const arenaSize0025 = "Medium"
const arenaLoc0025 = "textures/signs/arenas/ueg_2_plus/0025_tundra"
//
const arenaName0026 = "Aether"
const arenaCred0026 = "ScizorM"
const arenaRema0026 = "ScizorM"
const arenaVers0026 = "UEG PLUS"
const arenaDiff0026 = "Normal"
const arenaSize0026 = "Medium"
const arenaLoc0026 = "textures/signs/arenas/ueg_2_plus/0026_aether"
//
const arenaName0028 = "PLUS"
const arenaCred0028 = "PoizonArrow"
const arenaRema0028 = "ScizorM"
const arenaVers0028 = "UEG PLUS"
const arenaDiff0028 = "Normal"
const arenaSize0028 = "Medium"
const arenaLoc0028 = "textures/signs/arenas/ueg_2_plus/0028_plus"
//
const arenaName0030 = "End"
const arenaCred0030 = "PoizonArrow"
const arenaRema0030 = "ScizorM"
const arenaVers0030 = "UEG PLUS"
const arenaDiff0030 = "Normal"
const arenaSize0030 = "Medium"
const arenaLoc0030 = "textures/signs/arenas/ueg_2_plus/0030_end"
//
const arenaName0031 = "Circus"
const arenaCred0031 = "PoizonArrow"
const arenaRema0031 = "ScizorM"
const arenaVers0031 = "UEG PLUS"
const arenaDiff0031 = "Normal"
const arenaSize0031 = "Medium"
const arenaLoc0031 = "textures/signs/arenas/ueg_2_plus/0031_circus"
//
const arenaName0032 = "Beehive"
const arenaCred0032 = "PoizonArrow"
const arenaRema0032 = "ScizorM"
const arenaVers0032 = "UEG PLUS"
const arenaDiff0032 = "Normal"
const arenaSize0032 = "Medium"
const arenaLoc0032 = "textures/signs/arenas/ueg_2_plus/0032_beehive"
//
const arenaName0033 = "Dark Forest"
const arenaCred0033 = "PoizonArrow"
const arenaRema0033 = "ScizorM"
const arenaVers0033 = "UEG PLUS"
const arenaDiff0033 = "Normal"
const arenaSize0033 = "Medium"
const arenaLoc0033 = "textures/signs/arenas/ueg_2_plus/0033_dark_forest"
//
const arenaName0034 = "Digiglobe"
const arenaCred0034 = "PoizonArrow"
const arenaRema0034 = "ScizorM"
const arenaVers0034 = "UEG PLUS"
const arenaDiff0034 = "Normal"
const arenaSize0034 = "Medium"
const arenaLoc0034 = "textures/signs/arenas/ueg_2_plus/0034_digiglobe"
//
const arenaName0037 = "Crystal Cave"
const arenaCred0037 = "PoizonArrow"
const arenaRema0037 = "ScizorM"
const arenaVers0037 = "UEG PLUS"
const arenaDiff0037 = "Normal"
const arenaSize0037 = "Medium"
const arenaLoc0037 = "textures/signs/arenas/ueg_2_plus/0037_crystal_cave"
//
const arenaName0038 = "Pendual"
const arenaCred0038 = "PoizonArrow"
const arenaRema0038 = "ScizorM"
const arenaVers0038 = "UEG PLUS"
const arenaDiff0038 = "Normal"
const arenaSize0038 = "Medium"
const arenaLoc0038 = "textures/signs/arenas/ueg_2_plus/0038_pendual"
////////////////////////////////////////////////////////////////////
//
const arenaName0040 = "Murkopolis"
const arenaCred0040 = "ScizorM, Eido750, DarthMacJr"
const arenaRema0040 = "ScizorM"
const arenaVers0040 = "RPG Game"
const arenaDiff0040 = "Normal"
const arenaSize0040 = "Medium"
const arenaLoc0040 = "textures/signs/arenas/rpg_1/0040_murkopolis"
//
const arenaName0041 = "Aquatica"
const arenaCred0041 = "ScizorM"
const arenaRema0041 = "ScizorM"
const arenaVers0041 = "RPG Game"
const arenaDiff0041 = "Normal"
const arenaSize0041 = "Medium"
const arenaLoc0041 = "textures/signs/arenas/rpg_1/0041_aquatica"
//
const arenaName0042 = "Conflict"
const arenaCred0042 = "PoizonArrow"
const arenaRema0042 = "ScizorM"
const arenaVers0042 = "RPG Game"
const arenaDiff0042 = "Normal"
const arenaSize0042 = "Medium"
const arenaLoc0042 = "textures/signs/arenas/rpg_1/0042_neo_tokyo"
//
const arenaName0043 = "Shaparium"
const arenaCred0043 = "PoizonArrow"
const arenaRema0043 = "ScizorM"
const arenaVers0043 = "RPG Game"
const arenaDiff0043 = "Normal"
const arenaSize0043 = "Medium"
const arenaLoc0043 = "textures/signs/arenas/rpg_1/0043_shaparium"
//
const arenaName0044 = "Kyoto"
const arenaCred0044 = "PoizonArrow"
const arenaRema0044 = "ScizorM"
const arenaVers0044 = "RPG Game"
const arenaDiff0044 = "Normal"
const arenaSize0044 = "Medium"
const arenaLoc0044 = "textures/signs/arenas/rpg_1/0044_kyoto"
//
const arenaName0045 = "Overlord"
const arenaCred0045 = "PoizonArrow"
const arenaRema0045 = "ScizorM"
const arenaVers0045 = "RPG Game"
const arenaDiff0045 = "Normal"
const arenaSize0045 = "Medium"
const arenaLoc0045 = "textures/signs/arenas/rpg_1/0045_overlord"
////////////////////////////////////////////////////////////////////
//
const arenaName0050 = "Shadow Forest"
const arenaCred0050 = "zeerye, ScizorM, PoizonArrow"
const arenaRema0050 = "ScizorM (including structures by zeerye)"
const arenaVers0050 = "RPG Game 2"
const arenaDiff0050 = "Normal"
const arenaSize0050 = "Large"
const arenaLoc0050 = "textures/signs/arenas/rpg_2/0050_shadow_forest"
//
const arenaName0051 = "Magic Forest"
const arenaCred0051 = "ScizorM"
const arenaRema0051 = "ScizorM"
const arenaVers0051 = "RPG Game 2"
const arenaDiff0051 = "Normal"
const arenaSize0051 = "Medium"
const arenaLoc0051 = "textures/signs/arenas/rpg_2/0051_magic_forest"
////////////////////////////////////////////////////////////////////
//
const arenaName0059 = "Highway"
const arenaCred0059 = "zeerye"
const arenaVers0059 = "UEG CYBER"
const arenaDiff0059 = "Hard"
const arenaSize0059 = "Medium"
const arenaLoc0059 = "textures/signs/arenas/ueg_3_cyber/0059_highway"
//
const arenaName0060 = "Cheeseburger Freedom Warzone"
const arenaCred0060 = "TBD"
const arenaVers0060 = "UEG CYBER"
const arenaDiff0060 = "TBD"
const arenaSize0060 = "TBD"
const arenaLoc0060 = "textures/signs/arenas/ueg_3_cyber/0060_cheeseburger_warzone"
//
const arenaName0061 = "McRye's"
const arenaCred0061 = "TBD"
const arenaVers0061 = "UEG CYBER"
const arenaDiff0061 = "Hard"
const arenaSize0061 = "Large"
const arenaLoc0061 = "textures/signs/arenas/ueg_3_cyber/0061_mcryes"
//
const arenaName0062 = "Race Track"
const arenaCred0062 = "TBD"
const arenaVers0062 = "UEG CYBER"
const arenaDiff0062 = "TBD"
const arenaSize0062 = "TBD"
const arenaLoc0062 = "textures/signs/arenas/ueg_3_cyber/0062_race_track"
//
const arenaName0063 = "Gob Dimension"
const arenaCred0063 = "TBD"
const arenaVers0063 = "UEG CYBER"
const arenaDiff0063 = "TBD"
const arenaSize0063 = "TBD"
const arenaLoc0063 = "textures/signs/arenas/ueg_3_cyber/0063_gob_dimension"
//
const arenaName0064 = "Playground"
const arenaCred0064 = "TBD"
const arenaVers0064 = "UEG CYBER"
const arenaDiff0064 = "TBD"
const arenaSize0064 = "TBD"
const arenaLoc0064 = "textures/signs/arenas/ueg_3_cyber/0064_playground"
//
const arenaName0065 = "Jurassic"
const arenaCred0065 = "TBD"
const arenaVers0065 = "UEG CYBER"
const arenaDiff0065 = "TBD"
const arenaSize0065 = "TBD"
const arenaLoc0065 = "textures/signs/arenas/ueg_3_cyber/0065_jurassic"
//
const arenaName0066 = "Egypt"
const arenaCred0066 = "TBD"
const arenaVers0066 = "UEG CYBER"
const arenaDiff0066 = "TBD"
const arenaSize0066 = "TBD"
const arenaLoc0066 = "textures/signs/arenas/ueg_3_cyber/0066_egypt"
//
const arenaName0067 = "Cyberspace"
const arenaCred0067 = "TBD"
const arenaVers0067 = "UEG CYBER"
const arenaDiff0067 = "TBD"
const arenaSize0067 = "TBD"
const arenaLoc0067 = "textures/signs/arenas/ueg_3_cyber/0067_cyberspace"
//
const arenaName0068 = "Fire And Ice"
const arenaCred0068 = "TBD"
const arenaVers0068 = "UEG CYBER"
const arenaDiff0068 = "TBD"
const arenaSize0068 = "TBD"
const arenaLoc0068 = "textures/signs/arenas/ueg_3_cyber/0068_fire_and_ice"
//
const arenaName0070 = "Vaporwave"
const arenaCred0070 = "TBD"
const arenaVers0070 = "UEG CYBER"
const arenaDiff0070 = "TBD"
const arenaSize0070 = "TBD"
const arenaLoc0070 = "textures/signs/arenas/ueg_3_cyber/0070_vaporwave"
//
const arenaName0071 = "Chess"
const arenaCred0071 = "TBD"
const arenaVers0071 = "UEG CYBER"
const arenaDiff0071 = "TBD"
const arenaSize0071 = "TBD"
const arenaLoc0071 = "textures/signs/arenas/ueg_3_cyber/0071_chess"
//
const arenaName0073 = "Deep Dark"
const arenaCred0073 = "TBD"
const arenaVers0073 = "UEG CYBER"
const arenaDiff0073 = "TBD"
const arenaSize0073 = "TBD"
const arenaLoc0073 = "textures/signs/arenas/ueg_3_cyber/0073_deep_dark"
//
const arenaName0074 = "Demolition Derby"
const arenaCred0074 = "TBD"
const arenaVers0074 = "UEG CYBER"
const arenaDiff0074 = "TBD"
const arenaSize0074 = "TBD"
const arenaLoc0074 = "textures/signs/arenas/ueg_3_cyber/0074_demolition_derby"
//
const arenaName0076 = "Cargo Deck"
const arenaCred0076 = "TBD"
const arenaVers0076 = "UEG CYBER"
const arenaDiff0076 = "TBD"
const arenaSize0076 = "TBD"
const arenaLoc0076 = "textures/signs/arenas/ueg_3_cyber/0076_cargo_deck"
//
const arenaName0078 = "Computer Virus"
const arenaCred0078 = "TBD"
const arenaVers0078 = "UEG CYBER"
const arenaDiff0078 = "TBD"
const arenaSize0078 = "TBD"
const arenaLoc0078 = "textures/signs/arenas/ueg_3_cyber/0078_computer_virus"
//
const arenaName0079 = "Slot Machine"
const arenaCred0079 = "TBD"
const arenaVers0079 = "UEG CYBER"
const arenaDiff0079 = "TBD"
const arenaSize0079 = "TBD"
const arenaLoc0079 = "textures/signs/arenas/ueg_3_cyber/0079_slot_machine"
//
const arenaName0080 = "Divine Machinery"
const arenaCred0080 = "TBD"
const arenaVers0080 = "UEG CYBER"
const arenaDiff0080 = "TBD"
const arenaSize0080 = "TBD"
const arenaLoc0080 = "textures/signs/arenas/ueg_3_cyber/0080_divine_mach"
//
const arenaName0081 = "Arcade"
const arenaCred0081 = "TBD"
const arenaVers0081 = "UEG CYBER"
const arenaDiff0081 = "TBD"
const arenaSize0081 = "TBD"
const arenaLoc0081 = "textures/signs/arenas/ueg_3_cyber/0081_arcade"
//
const arenaName0082 = "Big Warehouse"
const arenaCred0082 = "TBD"
const arenaVers0082 = "UEG CYBER"
const arenaDiff0082 = "TBD"
const arenaSize0082 = "TBD"
const arenaLoc0082 = "textures/signs/arenas/ueg_3_cyber/0082_big_warehouse"
//
const arenaName0083 = "Clash Royale"
const arenaCred0083 = "TBD"
const arenaVers0083 = "UEG CYBER"
const arenaDiff0083 = "TBD"
const arenaSize0083 = "TBD"
const arenaLoc0083 = "textures/signs/arenas/ueg_3_cyber/0083_clash_royale"
//
const arenaName0084 = "Fruitiger Aero"
const arenaCred0084 = "TBD"
const arenaVers0084 = "UEG CYBER"
const arenaDiff0084 = "TBD"
const arenaSize0084 = "TBD"
const arenaLoc0084 = "textures/signs/arenas/ueg_3_cyber/0084_fruitiger_aero"
//
const arenaName0085 = "Doomspire"
const arenaCred0085 = "TBD"
const arenaVers0085 = "UEG CYBER"
const arenaDiff0085 = "TBD"
const arenaSize0085 = "TBD"
const arenaLoc0085 = "textures/signs/arenas/ueg_3_cyber/0085_doomspire"
//
const arenaName0086 = "Pondwater"
const arenaCred0086 = "TBD"
const arenaVers0086 = "UEG CYBER"
const arenaDiff0086 = "TBD"
const arenaSize0086 = "TBD"
const arenaLoc0086 = "textures/signs/arenas/ueg_3_cyber/0086_pondwater"
//
const arenaName0087 = "Spongebob?"
const arenaCred0087 = "TBD"
const arenaVers0087 = "UEG CYBER"
const arenaDiff0087 = "TBD"
const arenaSize0087 = "TBD"
const arenaLoc0087 = "textures/signs/arenas/ueg_3_cyber/0087_sponge"
//
const arenaName0088 = "TBD-88"
const arenaCred0088 = "TBD"
const arenaVers0088 = "UEG CYBER"
const arenaDiff0088 = "TBD"
const arenaSize0088 = "TBD"
const arenaLoc0088 = "textures/signs/arenas/ueg_3_cyber/0088_"
//
const arenaName0089 = "Amusement Park"
const arenaCred0089 = "AubreyThePebble, ScizorM"
const arenaVers0089 = "UEG CYBER"
const arenaDiff0089 = "Hard"
const arenaSize0089 = "Normal"
const arenaLoc0089 = "textures/signs/arenas/ueg_3_cyber/0089_amusement_park"
//
const arenaName0090 = "Candyland"
const arenaCred0090 = "evel"
const arenaVers0090 = "UEG CYBER"
const arenaDiff0090 = "TBD"
const arenaSize0090 = "TBD"
const arenaLoc0090 = "textures/signs/arenas/ueg_3_cyber/0090_"
//
const arenaName0091 = "Touch of Midas"
const arenaCred0091 = "TBD"
const arenaVers0091 = "UEG CYBER"
const arenaDiff0091 = "TBD"
const arenaSize0091 = "TBD"
const arenaLoc0091 = "textures/signs/arenas/ueg_3_cyber/0091_"
//
const arenaName0092 = "The Line"
const arenaCred0092 = "TBD"
const arenaVers0092 = "UEG CYBER"
const arenaDiff0092 = "TBD"
const arenaSize0092 = "TBD"
const arenaLoc0092 = "textures/signs/arenas/ueg_3_cyber/0092_"
//
const arenaName0093 = "Mole Life"
const arenaCred0093 = "TBD"
const arenaVers0093 = "UEG CYBER"
const arenaDiff0093 = "TBD"
const arenaSize0093 = "TBD"
const arenaLoc0093 = "textures/signs/arenas/ueg_3_cyber/0093_mole_life"
//
const arenaName0094 = "Spleef"
const arenaCred0094 = "TBD"
const arenaVers0094 = "UEG CYBER"
const arenaDiff0094 = "TBD"
const arenaSize0094 = "TBD"
const arenaLoc0094 = "textures/signs/arenas/ueg_3_cyber/0094_spleef"
//
const arenaName0095 = "0095a"
const arenaCred0095 = "TBD"
const arenaVers0095 = "UEG CYBER"
const arenaDiff0095 = "TBD"
const arenaSize0095 = "TBD"
const arenaLoc0095 = "textures/signs/arenas/ueg_3_cyber/0095_"
//
const arenaName0096 = "0096a"
const arenaCred0096 = "TBD"
const arenaVers0096 = "UEG CYBER"
const arenaDiff0096 = "TBD"
const arenaSize0096 = "TBD"
const arenaLoc0096 = "textures/signs/arenas/ueg_3_cyber/0096_"
//
const arenaName0057 = "ABS: -CYBER-"
const arenaCred0057 = "TBD"
const arenaVers0057 = "UEG CYBER"
const arenaDiff0057 = "TBD"
const arenaSize0057 = "TBD"
const arenaLoc0057 = "textures/signs/arenas/ueg_3_cyber_s/0057_abstract_cyber"
//
const arenaName0058 = "Mike's Way"
const arenaCred0058 = "TBD"
const arenaVers0058 = "UEG CYBER"
const arenaDiff0058 = "TBD"
const arenaSize0058 = "TBD"
const arenaLoc0058 = "textures/signs/arenas/ueg_3_cyber_s/0058_mikes_way"
//
const arenaName0069 = "shrek on crack"
const arenaCred0069 = "TBD"
const arenaVers0069 = "UEG CYBER"
const arenaDiff0069 = "TBD"
const arenaSize0069 = "TBD"
const arenaLoc0069 = "textures/signs/arenas/ueg_3_cyber_s/0069_shrek_on_crack"
//
const arenaName0075 = "Bananaland Bouncehouse"
const arenaCred0075 = "TBD"
const arenaVers0075 = "UEG CYBER"
const arenaDiff0075 = "TBD"
const arenaSize0075 = "TBD"
const arenaLoc0075 = "textures/signs/arenas/ueg_3_cyber_s/0075_bananaland_bouncehouse"
//
const arenaName0077 = "Flesh Prison"
const arenaCred0077 = "TBD"
const arenaVers0077 = "UEG CYBER"
const arenaDiff0077 = "TBD"
const arenaSize0077 = "TBD"
const arenaLoc0077 = "textures/signs/arenas/ueg_3_cyber_s/0077_flesh_prison"
//
const arenaName0097 = "Hog Metro HQ"
const arenaCred0097 = "TBD"
const arenaVers0097 = "UEG CYBER"
const arenaDiff0097 = "TBD"
const arenaSize0097 = "TBD"
const arenaLoc0097 = "textures/signs/arenas/ueg_3_cyber_s/0097_"
//
const arenaName0098 = "0098a"
const arenaCred0098 = "TBD"
const arenaVers0098 = "UEG CYBER"
const arenaDiff0098 = "TBD"
const arenaSize0098 = "TBD"
const arenaLoc0098 = "textures/signs/arenas/ueg_3_cyber_s/0098_"
//
const arenaName0105 = "0105a"
const arenaCred0105 = "TBD"
const arenaVers0105 = "UEG CYBER"
const arenaDiff0105 = "TBD"
const arenaSize0105 = "TBD"
const arenaLoc0105 = "textures/signs/arenas/ueg_3_cyber_s/0105_"
//


world.beforeEvents.itemUse.subscribe(data => {

    const player = data.source




    if (data.itemStack.typeId === "sm:settings" && player.hasTag("enter_splendid") == false) {

        system.run(() => arenaCategorySelect(player))

    }
})

function enabledOrDisableEmoji(player) {



}



//////////////////////////////////////////////////////////////////////////////////////// Select Arena Category (by series)
function arenaCategorySelect(player) {
    let form = new ActionFormData();
    form.title("Series Select");
    form.body("Select A Series:\n");
    form.button("UEG Series [2020-24]", "textures/ui/button_ueg1");
    form.button("RPG Game Series [2020-23]", "textures/ui/button_rpg1");
    form.button(clsM, "textures/ui/button_close");

    form.show(player).then(r => {

        let responseValue = r.selection

 

        if (responseValue == 0) {
            system.run(() => mainArenaPageUEG(player))
        }
        else if (responseValue == 1) {
            system.run(() => mainArenaPageRPG(player))
        }




    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}

//////////////////////////////////////////////////////////////////////////////////////// Select Arena Category (by UEG version)
function mainArenaPageUEG(player) {

    var aPacks = world.scoreboard.getObjective("arenapacks_unlocked")
    var secret_e = aPacks.getScore("secret")

    system.run(() => enabledOrDisableEmoji(player))

    let form = new ActionFormData();
    form.title("Series Select > UEG Series");
    form.body("Select A Category:\n");
    form.button("UEG CYBER [2024]", "textures/ui/button_cyber");
    if (secret_e == 1) {
        form.button("UEG CYBER -S- [2024]", "textures/ui/button_cyber_s");
    }
    form.button("UEG PLUS [2021]", "textures/ui/button_uegplus");
    form.button("UEG [2020]", "textures/ui/button_ueg1");
    form.button(bacM, "textures/ui/button_back");


    form.show(player).then(r => {

        let responseValue = r.selection

 
        if (secret_e == 1) {
            if (responseValue == 0) {
                system.run(() => categoryUEGCYBER(player))
            }
            else if (responseValue == 1) {
                system.run(() => categoryUEGCYBER_S(player))
            }
            else if (responseValue == 2) {
                system.run(() => categoryUEGPLUS(player))
            }
            else if (responseValue == 3) {
                system.run(() => categoryUEG1(player))
            }
            else if (responseValue == 4) {
                system.run(() => arenaCategorySelect(player))
            }
        }
        else {
            if (responseValue == 0) {
                system.run(() => categoryUEGCYBER(player))
            }
            else if (responseValue == 1) {
                system.run(() => categoryUEGPLUS(player))
            }
            else if (responseValue == 2) {
                system.run(() => categoryUEG1(player))
            }
            else if (responseValue == 3) {
                system.run(() => arenaCategorySelect(player))
            }
            else if (responseValue == 4) {
                system.run(() => categoryUEGCYBER_S(player))
            }
        }


    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}


//////////////////////////////////////////////////////////////////////////////////////// Select Arena Category (by RPG Game version)

function mainArenaPageRPG(player) {
    let form = new ActionFormData();
    form.title("Series Select > RPG Game Series");
    form.body("Select A Category:\n");
    form.button("RPG Game [2020-21]", "textures/ui/button_rpg1");
    form.button("RPG Game 2 [Unreleased, 2023]", "textures/ui/button_rpg2");
    form.button(bacM, "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

 

        if (responseValue == 0) {
            system.run(() => categoryRPG(player))
        }
        else if (responseValue == 1) {
            system.run(() => categoryRPG2(player))
        }
        else if (responseValue == 2) {
            system.run(() => arenaCategorySelect(player))
        }

    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}


//////////////////////////////////////////////////////////////////////////////////////// Category: UEG 1

function categoryUEG1(player) {

    var eArenaSB = world.scoreboard.getObjective("enabled_arenas")
    var arena0000e = eArenaSB.getScore("0000_")
    var arena0001e = eArenaSB.getScore("0001_")
    var arena0002e = eArenaSB.getScore("0002_")
    var arena0003e = eArenaSB.getScore("0003_")
    var arena0004e = eArenaSB.getScore("0004_")
    var arena0005e = eArenaSB.getScore("0005_")
    var arena0010e = eArenaSB.getScore("0010_")
    var arena0012e = eArenaSB.getScore("0012_")
    var arena0013e = eArenaSB.getScore("0013_")
    var arena0014e = eArenaSB.getScore("0014_")
    var arena0018e = eArenaSB.getScore("0018_")
    var arena0023e = eArenaSB.getScore("0023_")

    if (arena0000e == 1) {
        arena0000e = " "
    }
    else {
        arena0000e = " "
    }

    if (arena0001e == 1) {
        arena0001e = " "
    }
    else {
        arena0001e = " "
    }

    if (arena0002e == 1) {
        arena0002e = " "
    }
    else {
        arena0002e = " "
    }

    if (arena0003e == 1) {
        arena0003e = " "
    }
    else {
        arena0003e = " "
    }

    if (arena0004e == 1) {
        arena0004e = " "
    }
    else {
        arena0004e = " "
    }

    if (arena0005e == 1) {
        arena0005e = " "
    }
    else {
        arena0005e = " "
    }

    if (arena0010e == 1) {
        arena0010e = " "
    }
    else {
        arena0010e = " "
    }

    if (arena0012e == 1) {
        arena0012e = " "
    }
    else {
        arena0012e = " "
    }

    if (arena0013e == 1) {
        arena0013e = " "
    }
    else {
        arena0013e = " "
    }

    if (arena0014e == 1) {
        arena0014e = " "
    }
    else {
        arena0014e = " "
    }

    if (arena0018e == 1) {
        arena0018e = " "
    }
    else {
        arena0018e = " "
    }

    if (arena0023e == 1) {
        arena0023e = " "
    }
    else {
        arena0023e = " "
    }

    system.run(() => enabledOrDisableEmoji(player))

    const aPackSB = world.scoreboard.getObjective("arenapacks_unlocked")
    const ueg1_unlocked = aPackSB.getScore("ueg1")
    const uegplus_unlocked = aPackSB.getScore("uegplus")
    const rpg1_unlocked = aPackSB.getScore("rpg1")
    const rpg2_unlocked = aPackSB.getScore("rpg2")

    let form = new ActionFormData();
    form.title("... > UEG Series > UEG 1");
    form.body("Select An Arena:\n");
    form.button(defaultUnlock + arenaName0000 + arena0000e + "", arenaLoc0000);
    form.button(defaultUnlock + arenaName0001 + arena0001e + "", arenaLoc0001);
    form.button(defaultUnlock + arenaName0002 + arena0002e + "", arenaLoc0002);
    form.button(defaultUnlock + arenaName0003 + arena0003e + "", arenaLoc0003);
    form.button(defaultUnlock + arenaName0004 + arena0004e + "", arenaLoc0004);
    form.button(defaultUnlock + arenaName0005 + arena0005e + "", arenaLoc0005);
    if (ueg1_unlocked > 0) {
        form.button(unlockableUnlock + arenaName0010 + arena0010e + "", arenaLoc0010);
        form.button(unlockableUnlock + arenaName0012 + arena0012e + "", arenaLoc0012);
        form.button(unlockableUnlock + arenaName0013 + arena0013e + "", arenaLoc0013);
        form.button(unlockableUnlock + arenaName0014 + arena0014e + "", arenaLoc0014);
        form.button(unlockableUnlock + arenaName0018 + arena0018e + "", arenaLoc0018);
        form.button(unlockableUnlock + arenaName0023 + arena0023e + "", arenaLoc0023);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    form.button(bacM, "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

 


        if (responseValue == 0) {
            system.run(() => arena_0000_message(player))
        }
        else if (responseValue == 1) {
            system.run(() => arena_0001_message(player))
        }
        else if (responseValue == 2) {
            system.run(() => arena_0002_message(player))
        }
        else if (responseValue == 3) {
            system.run(() => arena_0003_message(player))
        }
        else if (responseValue == 4) {
            system.run(() => arena_0004_message(player))
        }
        else if (responseValue == 5) {
            system.run(() => arena_0005_message(player))
        }
        else if (responseValue == 6) {
            if (ueg1_unlocked > 0) {
                system.run(() => arena_0010_message(player))
            }
            else {
                system.run(() => categoryUEG1(player))
            }
        }
        else if (responseValue == 7) {
            if (ueg1_unlocked > 0) {
                system.run(() => arena_0012_message(player))
            }
            else {
                system.run(() => categoryUEG1(player))
            }
        }
        else if (responseValue == 8) {
            if (ueg1_unlocked > 0) {
                system.run(() => arena_0013_message(player))
            }
            else {
                system.run(() => categoryUEG1(player))
            }
        }
        else if (responseValue == 9) {
            if (ueg1_unlocked > 0) {
                system.run(() => arena_0014_message(player))
            }
            else {
                system.run(() => categoryUEG1(player))
            }
        }
        else if (responseValue == 10) {
            if (ueg1_unlocked > 0) {
                system.run(() => arena_0018_message(player))
            }
            else {
                system.run(() => categoryUEG1(player))
            }
        }
        else if (responseValue == 11) {
            if (ueg1_unlocked > 0) {
                system.run(() => arena_0023_message(player))
            }
            else {
                system.run(() => categoryUEG1(player))
            }
        }
        else if (responseValue == 12) {
            system.run(() => mainArenaPageUEG(player))
        }

    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}

//////////////////////////////////////////////////////////////////////////////////////// Category: UEG PLUS

function categoryUEGPLUS(player) {

    var eArenaSB = world.scoreboard.getObjective("enabled_arenas")
    var arena0025e = eArenaSB.getScore("0025_")
    var arena0026e = eArenaSB.getScore("0026_")
    var arena0028e = eArenaSB.getScore("0028_")
    var arena0030e = eArenaSB.getScore("0030_")
    var arena0031e = eArenaSB.getScore("0031_")
    var arena0032e = eArenaSB.getScore("0032_")
    var arena0033e = eArenaSB.getScore("0033_")
    var arena0034e = eArenaSB.getScore("0034_")
    var arena0037e = eArenaSB.getScore("0037_")
    var arena0038e = eArenaSB.getScore("0038_")


    if (arena0025e == 1) {
        arena0025e = " "
    }
    else {
        arena0025e = " "
    }

    if (arena0026e == 1) {
        arena0026e = " "
    }
    else {
        arena0026e = " "
    }

    if (arena0028e == 1) {
        arena0028e = " "
    }
    else {
        arena0028e = " "
    }

    if (arena0030e == 1) {
        arena0030e = " "
    }
    else {
        arena0030e = " "
    }

    if (arena0031e == 1) {
        arena0031e = " "
    }
    else {
        arena0031e = " "
    }

    if (arena0032e == 1) {
        arena0032e = " "
    }
    else {
        arena0032e = " "
    }

    if (arena0033e == 1) {
        arena0033e = " "
    }
    else {
        arena0033e = " "
    }

    if (arena0034e == 1) {
        arena0034e = " "
    }
    else {
        arena0034e = " "
    }

    if (arena0037e == 1) {
        arena0037e = " "
    }
    else {
        arena0037e = " "
    }

    if (arena0038e == 1) {
        arena0038e = " "
    }
    else {
        arena0038e = " "
    }

    const aPackSB = world.scoreboard.getObjective("arenapacks_unlocked")
    const ueg1_unlocked = aPackSB.getScore("ueg1")
    const uegplus_unlocked = aPackSB.getScore("uegplus")
    const rpg1_unlocked = aPackSB.getScore("rpg1")
    const rpg2_unlocked = aPackSB.getScore("rpg2")

    let form = new ActionFormData();
    form.title("... > UEG Series > UEG PLUS");
    form.body("Select An Arena:\n");
    form.button(defaultUnlock + arenaName0025 + arena0025e + "", arenaLoc0025);
    form.button(defaultUnlock + arenaName0026 + arena0026e + "", arenaLoc0026);
    form.button(defaultUnlock + arenaName0028 + arena0028e + "", arenaLoc0028);
    form.button(defaultUnlock + arenaName0030 + arena0030e + "", arenaLoc0030);
    if (uegplus_unlocked > 0) {
        form.button(unlockableUnlock + arenaName0031 + arena0031e + "", arenaLoc0031);
        form.button(unlockableUnlock + arenaName0032 + arena0032e + "", arenaLoc0032);
        form.button(unlockableUnlock + arenaName0033 + arena0033e + "", arenaLoc0033);
        form.button(unlockableUnlock + arenaName0034 + arena0034e + "", arenaLoc0034);
        form.button(unlockableUnlock + arenaName0037 + arena0037e + "", arenaLoc0037);
        form.button(unlockableUnlock + arenaName0038 + arena0038e + "", arenaLoc0038);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    form.button(bacM, "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

 
        if (responseValue == 0) {
            system.run(() => arena_0025_message(player))
        }
        else if (responseValue == 1) {
            system.run(() => arena_0026_message(player))
        }
        else if (responseValue == 2) {
            system.run(() => arena_0028_message(player))
        }
        else if (responseValue == 3) {
            system.run(() => arena_0030_message(player))
        }
        else if (responseValue == 4) {
            if (uegplus_unlocked > 0) {
                system.run(() => arena_0031_message(player))
            }
            else {
                system.run(() => categoryUEGPLUS(player))
            }
        }
        else if (responseValue == 5) {
            if (uegplus_unlocked > 0) {
                system.run(() => arena_0032_message(player))
            }
            else {
                system.run(() => categoryUEGPLUS(player))
            }
        }
        else if (responseValue == 6) {
            if (uegplus_unlocked > 0) {
                system.run(() => arena_0033_message(player))
            }
            else {
                system.run(() => categoryUEGPLUS(player))
            }
        }
        else if (responseValue == 7) {
            if (uegplus_unlocked > 0) {
                system.run(() => arena_0034_message(player))
            }
            else {
                system.run(() => categoryUEGPLUS(player))
            }
        }
        else if (responseValue == 8) {
            if (uegplus_unlocked > 0) {
                system.run(() => arena_0037_message(player))
            }
            else {
                system.run(() => categoryUEGPLUS(player))
            }
        }
        else if (responseValue == 9) {
            if (uegplus_unlocked > 0) {
                system.run(() => arena_0038_message(player))
            }
            else {
                system.run(() => categoryUEGPLUS(player))
            }
        }
        else if (responseValue == 10) {
            system.run(() => mainArenaPageUEG(player))
        }

    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}

//////////////////////////////////////////////////////////////////////////////////////// Category: UEG CYBER

function categoryUEGCYBER(player) {

    var eArenaSB = world.scoreboard.getObjective("enabled_arenas")
    var arena0057e = eArenaSB.getScore("0057_")
    var arena0058e = eArenaSB.getScore("0058_")
    var arena0059e = eArenaSB.getScore("0059_")
    var arena0060e = eArenaSB.getScore("0060_")
    var arena0061e = eArenaSB.getScore("0078_")
    //var arena0061e = eArenaSB.getScore("0061_amethyst_domain")
    var arena0062e = eArenaSB.getScore("0062_")
    var arena0063e = eArenaSB.getScore("0063_")
    var arena0064e = eArenaSB.getScore("0064_")
    var arena0065e = eArenaSB.getScore("0065_")
    var arena0066e = eArenaSB.getScore("0066_")
    var arena0067e = eArenaSB.getScore("0067_")
    var arena0068e = eArenaSB.getScore("0068_")
    var arena0069e = eArenaSB.getScore("0069_")
    var arena0070e = eArenaSB.getScore("0070_")
    var arena0071e = eArenaSB.getScore("0071_")
    var arena0073e = eArenaSB.getScore("0073_")
    var arena0074e = eArenaSB.getScore("0074_")
    var arena0075e = eArenaSB.getScore("0075_")
    var arena0076e = eArenaSB.getScore("0087_")
    //var arena0076e = eArenaSB.getScore("0076_obstacle_course")
    var arena0077e = eArenaSB.getScore("0077_")
    var arena0078e = eArenaSB.getScore("0078_")
    var arena0079e = eArenaSB.getScore("0079_")
    var arena0080e = eArenaSB.getScore("0080_")
    var arena0081e = eArenaSB.getScore("0081_")
    var arena0082e = eArenaSB.getScore("0082_")
    var arena0083e = eArenaSB.getScore("0083_")
    var arena0084e = eArenaSB.getScore("0084_")
    var arena0085e = eArenaSB.getScore("0085_")
    var arena0086e = eArenaSB.getScore("0086_")
    //var arena0087e = eArenaSB.getScore("0087_cargo_deck")
    var arena0087e = eArenaSB.getScore("0087_")
    var arena0088e = eArenaSB.getScore("0088_")
    //var arena0088e = eArenaSB.getScore("0088_spleef")
    var arena0089e = eArenaSB.getScore("0089_")
    var arena0090e = eArenaSB.getScore("0090_")
    var arena0091e = eArenaSB.getScore("0091_")
    var arena0092e = eArenaSB.getScore("0092_")
    var arena0093e = eArenaSB.getScore("0093_")
    var arena0094e = eArenaSB.getScore("0094_")
    //var arena0094e = eArenaSB.getScore("0094_")
    var arena0095e = eArenaSB.getScore("0095_")
    var arena0096e = eArenaSB.getScore("0096_")
    var arena0097e = eArenaSB.getScore("0097_")
    var arena0098e = eArenaSB.getScore("0098_")
    var arena0105e = eArenaSB.getScore("0105_")


    if (arena0057e == 1) {
        arena0057e = " "
    }
    else {
        arena0057e = " "
    }

    if (arena0058e == 1) {
        arena0058e = " "
    }
    else {
        arena0058e = " "
    }

    if (arena0059e == 1) {
        arena0059e = " "
    }
    else {
        arena0059e = " "
    }


    if (arena0060e == 1) {
        arena0060e = " "
    }
    else {
        arena0060e = " "
    }


    if (arena0061e == 1) {
        arena0061e = " "
    }
    else {
        arena0061e = " "
    }


    if (arena0062e == 1) {
        arena0062e = " "
    }
    else {
        arena0062e = " "
    }


    if (arena0063e == 1) {
        arena0063e = " "
    }
    else {
        arena0063e = " "
    }

    if (arena0064e == 1) {
        arena0064e = " "
    }
    else {
        arena0064e = " "
    }

    if (arena0065e == 1) {
        arena0065e = " "
    }
    else {
        arena0065e = " "
    }


    if (arena0066e == 1) {
        arena0066e = " "
    }
    else {
        arena0066e = " "
    }


    if (arena0067e == 1) {
        arena0067e = " "
    }
    else {
        arena0067e = " "
    }

    if (arena0068e == 1) {
        arena0068e = " "
    }
    else {
        arena0068e = " "
    }

    if (arena0069e == 1) {
        arena0069e = " "
    }
    else {
        arena0069e = " "
    }


    if (arena0070e == 1) {
        arena0070e = " "
    }
    else {
        arena0070e = " "
    }

    if (arena0071e == 1) {
        arena0071e = " "
    }
    else {
        arena0071e = " "
    }


    if (arena0073e == 1) {
        arena0073e = " "
    }
    else {
        arena0073e = " "
    }


    if (arena0076e == 1) {
        arena0076e = " "
    }
    else {
        arena0076e = " "
    }

    if (arena0082e == 1) {
        arena0082e = " "
    }
    else {
        arena0082e = " "
    }

    if (arena0084e == 1) {
        arena0084e = " "
    }
    else {
        arena0084e = " "
    }


    if (arena0074e == 1) {
        arena0074e = " "
    }
    else {
        arena0074e = " "
    }

    if (arena0078e == 1) {
        arena0078e = " "
    }
    else {
        arena0078e = " "
    }

    if (arena0079e == 1) {
        arena0079e = " "
    }
    else {
        arena0079e = " "
    }

    if (arena0080e == 1) {
        arena0080e = " "
    }
    else {
        arena0080e = " "
    }

    if (arena0081e == 1) {
        arena0081e = " "
    }
    else {
        arena0081e = " "
    }

    if (arena0083e == 1) {
        arena0083e = " "
    }
    else {
        arena0083e = " "
    }

    if (arena0085e == 1) {
        arena0085e = " "
    }
    else {
        arena0085e = " "
    }

    if (arena0086e == 1) {
        arena0086e = " "
    }
    else {
        arena0086e = " "
    }

    if (arena0087e == 1) {
        arena0087e = " "
    }
    else {
        arena0087e = " "
    }

    if (arena0088e == 1) {
        arena0088e = " "
    }
    else {
        arena0088e = " "
    }

    if (arena0089e == 1) {
        arena0089e = " "
    }
    else {
        arena0089e = " "
    }


    if (arena0090e == 1) {
        arena0090e = " "
    }
    else {
        arena0090e = " "
    }

    if (arena0091e == 1) {
        arena0091e = " "
    }
    else {
        arena0091e = " "
    }

    if (arena0092e == 1) {
        arena0092e = " "
    }
    else {
        arena0092e = " "
    }

    if (arena0093e == 1) {
        arena0093e = " "
    }
    else {
        arena0093e = " "
    }

    if (arena0094e == 1) {
        arena0094e = " "
    }
    else {
        arena0094e = " "
    }

    if (arena0095e == 1) {
        arena0095e = " "
    }
    else {
        arena0095e = " "
    }

    if (arena0096e == 1) {
        arena0096e = " "
    }
    else {
        arena0096e = " "
    }


    if (arena0075e == 1) {
        arena0075e = " "
    }
    else {
        arena0075e = " "
    }

    if (arena0077e == 1) {
        arena0077e = " "
    }
    else {
        arena0077e = " "
    }

    if (arena0097e == 1) {
        arena0097e = " "
    }
    else {
        arena0097e = " "
    }


    if (arena0098e == 1) {
        arena0098e = " "
    }
    else {
        arena0098e = " "
    }

    if (arena0105e == 1) {
        arena0105e = " "
    }
    else {
        arena0105e = " "
    }



    const aPackSB = world.scoreboard.getObjective("arenapacks_unlocked")
    const ueg1_unlocked = aPackSB.getScore("ueg1")
    const uegplus_unlocked = aPackSB.getScore("uegplus")
    const rpg1_unlocked = aPackSB.getScore("rpg1")
    const rpg2_unlocked = aPackSB.getScore("rpg2")
    const cyberpack_unlocked1 = aPackSB.getScore("cyberpack_1")
    const cyberpack_unlocked2 = aPackSB.getScore("cyberpack_2")
    const cyberpack_unlocked3 = aPackSB.getScore("cyberpack_3")
    const cyberpack_unlocked4 = aPackSB.getScore("cyberpack_4")
    const cyberpack_unlocked5 = aPackSB.getScore("cyberpack_5")
    const cyberpack_unlocked6 = aPackSB.getScore("cyberpack_6")
    //unlockable-individual
    const arena0060u = aPackSB.getScore("0060")
    const arena0062u = aPackSB.getScore("0062")
    const arena0063u = aPackSB.getScore("0063")
    const arena0079u = aPackSB.getScore("0079")
    const arena0095u = aPackSB.getScore("0095")
    const arena0096u = aPackSB.getScore("0096")
    //i-unlock-secret
    const arena0057u = aPackSB.getScore("0057")
    const arena0058u = aPackSB.getScore("0058")
    const arena0069u = aPackSB.getScore("0069")
    const arena0075u = aPackSB.getScore("0075")
    const arena0077u = aPackSB.getScore("0077")
    const arena0097u = aPackSB.getScore("0097")
    const arena0098u = aPackSB.getScore("0098")
    const arena0105u = aPackSB.getScore("0105")
    //

    let form = new ActionFormData();
    form.title("... > UEG Series > UEG CYBER");
    form.body("Select An Arena:\n");
    form.button(defaultUnlock + arenaName0064 + arena0064e + "", arenaLoc0064);
    form.button(defaultUnlock + arenaName0065 + arena0065e + "", arenaLoc0065);
    form.button(defaultUnlock + arenaName0066 + arena0066e + "", arenaLoc0066);
    form.button(defaultUnlock + arenaName0067 + arena0067e + "", arenaLoc0067);
    form.button(defaultUnlock + arenaName0068 + arena0068e + "", arenaLoc0068);
    form.button(defaultUnlock + arenaName0070 + arena0070e + "", arenaLoc0070);
    form.button(defaultUnlock + arenaName0071 + arena0071e + "", arenaLoc0071);
    form.button(defaultUnlock + arenaName0073 + arena0073e + "", arenaLoc0073);
    form.button(defaultUnlock + arenaName0082 + arena0082e + "", arenaLoc0082);
    form.button(defaultUnlock + arenaName0084 + arena0084e + "", arenaLoc0084);
    if (cyberpack_unlocked1 > 0) {
        form.button(unlockableUnlock + arenaName0059 + arena0059e + "", arenaLoc0059);
        form.button(unlockableUnlock + arenaName0061 + arena0061e + "", arenaLoc0061);
        form.button(unlockableUnlock + arenaName0074 + arena0074e + "", arenaLoc0074);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (cyberpack_unlocked2 > 0) {
        form.button(unlockableUnlock + arenaName0076 + arena0076e + "", arenaLoc0076);
        form.button(unlockableUnlock + arenaName0078 + arena0078e + "", arenaLoc0078);
        form.button(unlockableUnlock + arenaName0080 + arena0080e + "", arenaLoc0080);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (cyberpack_unlocked3 > 0) {
        form.button(unlockableUnlock + arenaName0081 + arena0081e + "", arenaLoc0081);
        form.button(unlockableUnlock + arenaName0083 + arena0083e + "", arenaLoc0083);
        form.button(unlockableUnlock + arenaName0085 + arena0085e + "", arenaLoc0085);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (cyberpack_unlocked4 > 0) {
        form.button(unlockableUnlock + arenaName0086 + arena0086e + "", arenaLoc0086);
        form.button(unlockableUnlock + arenaName0087 + arena0087e + "", arenaLoc0087);
        form.button(unlockableUnlock + arenaName0088 + arena0088e + "", arenaLoc0088);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (cyberpack_unlocked5 > 0) {
        form.button(unlockableUnlock + arenaName0089 + arena0089e + "", arenaLoc0089);
        form.button(unlockableUnlock + arenaName0090 + arena0090e + "", arenaLoc0090);
        form.button(unlockableUnlock + arenaName0091 + arena0091e + "", arenaLoc0091);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (cyberpack_unlocked6 > 0) {
        form.button(unlockableUnlock + arenaName0092 + arena0092e + "", arenaLoc0092);
        form.button(unlockableUnlock + arenaName0093 + arena0093e + "", arenaLoc0093);
        form.button(unlockableUnlock + arenaName0094 + arena0094e + "", arenaLoc0094);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (arena0060u > 0) {
        form.button(unlockableUnlock + arenaName0060 + arena0060e + "", arenaLoc0060);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (arena0062u > 0) {
        form.button(unlockableUnlock + arenaName0062 + arena0062e + "", arenaLoc0062);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (arena0063u > 0) {
        form.button(unlockableUnlock + arenaName0063 + arena0063e + "", arenaLoc0063);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (arena0079u > 0) {
        form.button(unlockableUnlock + arenaName0079 + arena0079e + "", arenaLoc0079);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (arena0095u > 0) {
        form.button(unlockableUnlock + arenaName0095 + arena0095e + "", arenaLoc0095);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }
    if (arena0096u > 0) {
        form.button(unlockableUnlock + arenaName0096 + arena0096e + "", arenaLoc0096);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);

    }




    form.button(bacM, "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

 

        if (responseValue == 0) {
            system.run(() => arena_0064_message(player))
        }
        else if (responseValue == 1) {
            system.run(() => arena_0065_message(player))
        }
        else if (responseValue == 2) {
            system.run(() => arena_0066_message(player))
        }
        else if (responseValue == 3) {
            system.run(() => arena_0067_message(player))
        }
        else if (responseValue == 4) {
            system.run(() => arena_0068_message(player))
        }
        else if (responseValue == 5) {
            system.run(() => arena_0070_message(player))
        }
        else if (responseValue == 6) {
            system.run(() => arena_0071_message(player))
        }
        else if (responseValue == 7) {
            system.run(() => arena_0073_message(player))
        }
        else if (responseValue == 8) {
            system.run(() => arena_0082_message(player))
        }
        else if (responseValue == 9) {
            system.run(() => arena_0084_message(player))
        }
        else if (responseValue == 10) {
            if (cyberpack_unlocked1 > 0) {
                system.run(() => arena_0059_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 11) {
            if (cyberpack_unlocked1 > 0) {
                system.run(() => arena_0061_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 12) {
            if (cyberpack_unlocked1 > 0) {
                system.run(() => arena_0074_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 13) {
            if (cyberpack_unlocked2 > 0) {
                system.run(() => arena_0076_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 14) {
            if (cyberpack_unlocked2 > 0) {
                system.run(() => arena_0078_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 15) {
            if (cyberpack_unlocked2 > 0) {
                system.run(() => arena_0080_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 16) {
            if (cyberpack_unlocked3 > 0) {
                system.run(() => arena_0081_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 17) {
            if (cyberpack_unlocked3 > 0) {
                system.run(() => arena_0083_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 18) {
            if (cyberpack_unlocked3 > 0) {
                system.run(() => arena_0085_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 19) {
            if (cyberpack_unlocked4 > 0) {
                system.run(() => arena_0086_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 20) {
            if (cyberpack_unlocked4 > 0) {
                system.run(() => arena_0087_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 21) {
            if (cyberpack_unlocked4 > 0) {
                system.run(() => arena_0088_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 22) {
            if (cyberpack_unlocked5 > 0) {
                system.run(() => arena_0089_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 23) {
            if (cyberpack_unlocked5 > 0) {
                system.run(() => arena_0090_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 24) {
            if (cyberpack_unlocked5 > 0) {
                system.run(() => arena_0091_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 25) {
            if (cyberpack_unlocked6 > 0) {
                system.run(() => arena_0092_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 26) {
            if (cyberpack_unlocked6 > 0) {
                system.run(() => arena_0093_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 27) {
            if (cyberpack_unlocked6 > 0) {
                system.run(() => arena_0094_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 28) {
            if (arena0060u > 0) {
                system.run(() => arena_0060_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 29) {
            if (arena0062u > 0) {
                system.run(() => arena_0062_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 30) {
            if (arena0063u > 0) {
                system.run(() => arena_0063_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 31) {
            if (arena0079u > 0) {
                system.run(() => arena_0079_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 32) {
            if (arena0095u > 0) {
                system.run(() => arena_0095_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 33) {
            if (arena0096u > 0) {
                system.run(() => arena_0096_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER(player))
            }
        }
        else if (responseValue == 34) {
            system.run(() => mainArenaPageUEG(player))
        }

    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}

//////////////////////////////////////////////////////////////////////////////////////// Category: UEG CYBER -S-

function categoryUEGCYBER_S(player) {

    var eArenaSB = world.scoreboard.getObjective("enabled_arenas")
    var arena0057e = eArenaSB.getScore("0057_")
    var arena0058e = eArenaSB.getScore("0058_")
    var arena0069e = eArenaSB.getScore("0069_")
    var arena0075e = eArenaSB.getScore("0075_")
    var arena0077e = eArenaSB.getScore("0077_")
    var arena0097e = eArenaSB.getScore("0097_")
    var arena0098e = eArenaSB.getScore("0098_")
    var arena0105e = eArenaSB.getScore("0105_")


    if (arena0057e == 1) {
        arena0057e = " "
    }
    else {
        arena0057e = " "
    }

    if (arena0058e == 1) {
        arena0058e = " "
    }
    else {
        arena0058e = " "
    }

 
    if (arena0069e == 1) {
        arena0069e = " "
    }
    else {
        arena0069e = " "
    }




    if (arena0075e == 1) {
        arena0075e = " "
    }
    else {
        arena0075e = " "
    }

    if (arena0077e == 1) {
        arena0077e = " "
    }
    else {
        arena0077e = " "
    }

    if (arena0097e == 1) {
        arena0097e = " "
    }
    else {
        arena0097e = " "
    }


    if (arena0098e == 1) {
        arena0098e = " "
    }
    else {
        arena0098e = " "
    }

    if (arena0105e == 1) {
        arena0105e = " "
    }
    else {
        arena0105e = " "
    }



    const aPackSB = world.scoreboard.getObjective("arenapacks_unlocked")
    //i-unlock-secret
    const arena0057u = aPackSB.getScore("0057")
    const arena0058u = aPackSB.getScore("0058")
    const arena0069u = aPackSB.getScore("0069")
    const arena0075u = aPackSB.getScore("0075")
    const arena0077u = aPackSB.getScore("0077")
    const arena0097u = aPackSB.getScore("0097")
    const arena0098u = aPackSB.getScore("0098")
    const arena0105u = aPackSB.getScore("0105")
    //

    let form = new ActionFormData();
    form.title("... > UEG Series > UEG CYBER -S-");
    form.body("Select An Arena:\n");

    if (arena0057u > 0) {
        form.button(secretUnlock + arenaName0057 + arena0057e + "", arenaLoc0057);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    if (arena0058u > 0) {
        form.button(secretUnlock + arenaName0058 + arena0058e + "", arenaLoc0058);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    if (arena0069u > 0) {
        form.button(secretUnlock + arenaName0069 + arena0069e + "", arenaLoc0069);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    if (arena0075u > 0) {
        form.button(secretUnlock + arenaName0075 + arena0075e + "", arenaLoc0075);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    if (arena0077u > 0) {
        form.button(secretUnlock + arenaName0077 + arena0077e + "", arenaLoc0077);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    if (arena0097u > 0) {
        form.button(secretUnlock + arenaName0097 + arena0097e + "", arenaLoc0097);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    if (arena0098u > 0) {
        form.button(secretUnlock + arenaName0098 + arena0098e + "", arenaLoc0098);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    if (arena0105u > 0) {
        form.button(secretUnlock + arenaName0105 + arena0105e + "", arenaLoc0105);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    form.button(bacM, "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

 

        if (responseValue == 0) {
            if (arena0057u > 0) {
                system.run(() => arena_0057_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER_S(player))
            }
        }
        else if (responseValue == 1) {
            if (arena0058u > 0) {
                system.run(() => arena_0058_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER_S(player))
            }
        }
        else if (responseValue == 2) {
            if (arena0069u > 0) {
                system.run(() => arena_0069_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER_S(player))
            }
        }
        else if (responseValue == 3) {
            if (arena0075u > 0) {
                system.run(() => arena_0075_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER_S(player))
            }
        }
        else if (responseValue == 4) {
            if (arena0077u > 0) {
                system.run(() => arena_0077_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER_S(player))
            }
        }
        else if (responseValue == 5) {
            if (arena0097u > 0) {
                system.run(() => arena_0097_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER_S(player))
            }
        }
        else if (responseValue == 6) {
            if (arena0098u > 0) {
                system.run(() => arena_0098_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER_S(player))
            }
        }
        else if (responseValue == 7) {
            if (arena0105u > 0) {
                system.run(() => arena_0105_message(player))
            }
            else {
                system.run(() => categoryUEGCYBER_S(player))
            }
        }
        else if (responseValue == 8) {
            system.run(() => mainArenaPageUEG(player))
        }

    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}

//////////////////////////////////////////////////////////////////////////////////////// Category: RPG 1

function categoryRPG(player) {

    var eArenaSB = world.scoreboard.getObjective("enabled_arenas")
    var arena0040e = eArenaSB.getScore("0040_")
    var arena0041e = eArenaSB.getScore("0041_")
    var arena0042e = eArenaSB.getScore("0042_")
    var arena0043e = eArenaSB.getScore("0043_")
    var arena0044e = eArenaSB.getScore("0044_")
    var arena0045e = eArenaSB.getScore("0045_")


    if (arena0040e == 1) {
        arena0040e = " "
    }
    else {
        arena0040e = " "
    }

    if (arena0041e == 1) {
        arena0041e = " "
    }
    else {
        arena0041e = " "
    }

    if (arena0042e == 1) {
        arena0042e = " "
    }
    else {
        arena0042e = " "
    }

    if (arena0043e == 1) {
        arena0043e = " "
    }
    else {
        arena0043e = " "
    }

    if (arena0044e == 1) {
        arena0044e = " "
    }
    else {
        arena0044e = " "
    }

    if (arena0045e == 1) {
        arena0045e = " "
    }
    else {
        arena0045e = " "
    }

    const aPackSB = world.scoreboard.getObjective("arenapacks_unlocked")
    const ueg1_unlocked = aPackSB.getScore("ueg1")
    const uegplus_unlocked = aPackSB.getScore("uegplus")
    const rpg1_unlocked = aPackSB.getScore("rpg1")
    const rpg2_unlocked = aPackSB.getScore("rpg2")

    let form = new ActionFormData();
    form.title("... > RPG Game Series > RPG Game");
    form.body("Select An Arena:\n");
    if (rpg1_unlocked > 0) {
        form.button(unlockableUnlock + arenaName0040 + arena0040e + "", arenaLoc0040);
        form.button(unlockableUnlock + arenaName0041 + arena0041e + "", arenaLoc0041);
        form.button(unlockableUnlock + arenaName0042 + arena0042e + "", arenaLoc0042);
        form.button(unlockableUnlock + arenaName0043 + arena0043e + "", arenaLoc0043);
        form.button(unlockableUnlock + arenaName0044 + arena0044e + "", arenaLoc0044);
        form.button(unlockableUnlock + arenaName0045 + arena0045e + "", arenaLoc0045);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    form.button(bacM, "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

 

        if (responseValue == 0) {
            if (rpg1_unlocked > 0) {
                system.run(() => arena_0040_message(player))
            }
            else {
                system.run(() => categoryRPG(player))
            }
        }
        else if (responseValue == 1) {
            if (rpg1_unlocked > 0) {
                system.run(() => arena_0041_message(player))
            }
            else {
                system.run(() => categoryRPG(player))
            }
        }
        else if (responseValue == 2) {
            if (rpg1_unlocked > 0) {
                system.run(() => arena_0042_message(player))
            }
            else {
                system.run(() => categoryRPG(player))
            }
        }
        else if (responseValue == 3) {
            if (rpg1_unlocked > 0) {
                system.run(() => arena_0043_message(player))
            }
            else {
                system.run(() => categoryRPG(player))
            }
        }
        else if (responseValue == 4) {
            if (rpg1_unlocked > 0) {
                system.run(() => arena_0044_message(player))
            }
            else {
                system.run(() => categoryRPG(player))
            }
        }
        else if (responseValue == 5) {
            if (rpg1_unlocked > 0) {
                system.run(() => arena_0045_message(player))
            }
            else {
                system.run(() => categoryRPG(player))
            }
        }
        else if (responseValue == 6) {
            system.run(() => mainArenaPageRPG(player))
        }

    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}

//////////////////////////////////////////////////////////////////////////////////////// Category: RPG 2

function categoryRPG2(player) {

    var eArenaSB = world.scoreboard.getObjective("enabled_arenas")
    var arena0050e = eArenaSB.getScore("0050_")
    var arena0051e = eArenaSB.getScore("0051_")


    if (arena0050e == 1) {
        arena0050e = " "
    }
    else {
        arena0050e = " "
    }

    if (arena0051e == 1) {
        arena0051e = " "
    }
    else {
        arena0051e = " "
    }





    const aPackSB = world.scoreboard.getObjective("arenapacks_unlocked")
    const ueg1_unlocked = aPackSB.getScore("ueg1")
    const uegplus_unlocked = aPackSB.getScore("uegplus")
    const rpg1_unlocked = aPackSB.getScore("rpg1")
    const rpg2_unlocked = aPackSB.getScore("rpg2")

    let form = new ActionFormData();
    form.title("... > RPG Game Series > RPG Game 2");
    form.body("Select An Arena:\n");
    if (rpg2_unlocked > 0) {
        form.button(unlockableUnlock + arenaName0050 + arena0050e + "", arenaLoc0050);
        form.button(unlockableUnlock + arenaName0051 + arena0051e + "", arenaLoc0051);
    }
    else {
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
        form.button(unlockableUnlock + lockedName + "", lockedLoc);
    }

    form.button(bacM, "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

 


        if (responseValue == 0) {
            if (rpg2_unlocked > 0) {
                system.run(() => arena_0050_message(player))
            }
            else {
                system.run(() => categoryRPG2(player))
            }
        }
        else if (responseValue == 1) {
            if (rpg2_unlocked > 0) {
                system.run(() => arena_0051_message(player))
            }
            else {
                system.run(() => categoryRPG2(player))
            }
        }
        else if (responseValue == 2) {
            system.run(() => mainArenaPageRPG(player))
        }





    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}
//////////////////////////////////////////////////UEG 1
////////////////////////////////////////////////////////////////////////////////////////////
/////////////DO NOT DO WHAT I DID!!!!!!!!!!!!!!
/////////////THIS IS QUITE POSSIBLY THE WORST WAY I COULD HAVE CODED THIS
/////////////I AM TOO LAZY TO GO BACK AND OPTIMIZE THIS BECAUSE I'VE SPENT FAR TOO LONG ON THIS PROJECT ALREADY!!!
/////////////A FASTER WAY I COULD HAVE DONE THIS WOULD HAVE BEEN TO JUST SET A VARIABLE TO REFERENCE AFTER EACH ARENA SELECTED
/////////////AND THEN JUST MAKE ONE FUNCTION FOR EVERY ARENA WITH CHANGING VARIABLES
/////////////-SCIZORM
////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
function arena_0000_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0000);
    form.body(defaultUnlockColor + arenaName0000 + "\n§eOriginal Creator(s): " + arenaCred0000 + "\nRemaster: " + arenaRema0000 + "\nDifficulty: " + arenaDiff0000 + "\nSize: " + arenaSize0000);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0000_lostcity")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0000_lostcity")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0001_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0001);
    form.body(defaultUnlockColor + arenaName0001 + "\n§eOriginal Creator(s): " + arenaCred0001 + "\nRemaster: " + arenaRema0001 + "\nDifficulty: " + arenaDiff0001 + "\nSize: " + arenaSize0001);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0001_blackwhite")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0001_blackwhite")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0002_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0002);
    form.body(defaultUnlockColor + arenaName0002 + "\n§eOriginal Creator(s): " + arenaCred0002 + "\nRemaster: " + arenaRema0002 + "\nDifficulty: " + arenaDiff0002 + "\nSize: " + arenaSize0002);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0002_nether")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0002_nether")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0003_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0003);
    form.body(defaultUnlockColor + arenaName0003 + "\n§eOriginal Creator(s): " + arenaCred0003 + "\nRemaster: " + arenaRema0003 + "\nDifficulty: " + arenaDiff0003 + "\nSize: " + arenaSize0003);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0003_space")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0003_space")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0004_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0004);
    form.body(defaultUnlockColor + arenaName0004 + "\n§eOriginal Creator(s): " + arenaCred0004 + "\nRemaster: " + arenaRema0004 + "\nDifficulty: " + arenaDiff0004 + "\nSize: " + arenaSize0004);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0004_western")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0004_western")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0005_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0005);
    form.body(defaultUnlockColor + arenaName0005 + "\n§eOriginal Creator(s): " + arenaCred0005 + "\nRemaster: " + arenaRema0005 + "\nDifficulty: " + arenaDiff0005 + "\nSize: " + arenaSize0005);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0005_stronghold")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0005_stronghold")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0010_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0010);
    form.body(unlockableUnlockColor + arenaName0010 + "\n§eOriginal Creator(s): " + arenaCred0010 + "\nRemaster: " + arenaRema0010 + "\nDifficulty: " + arenaDiff0010 + "\nSize: " + arenaSize0010);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0010_ss_ueg")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0010_ss_ueg")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0012_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0012);
    form.body(unlockableUnlockColor + arenaName0012 + "\n§eOriginal Creator(s): " + arenaCred0012 + "\nRemaster: " + arenaRema0012 + "\nDifficulty: " + arenaDiff0012 + "\nSize: " + arenaSize0012);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0012_retro_maze")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0012_retro_maze")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0013_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0013);
    form.body(unlockableUnlockColor + arenaName0013 + "\n§eOriginal Creator(s): " + arenaCred0013 + "\nRemaster: " + arenaRema0013 + "\nDifficulty: " + arenaDiff0013 + "\nSize: " + arenaSize0013);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0013_chaos_void")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0013_chaos_void")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0014_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0014);
    form.body(unlockableUnlockColor + arenaName0014 + "\n§eOriginal Creator(s): " + arenaCred0014 + "\nRemaster: " + arenaRema0014 + "\nDifficulty: " + arenaDiff0014 + "\nSize: " + arenaSize0014);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0014_abstract")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0014_abstract")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0018_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0018);
    form.body(unlockableUnlockColor + arenaName0018 + "\n§eOriginal Creator(s): " + arenaCred0018 + "\nRemaster: " + arenaRema0018 + "\nDifficulty: " + arenaDiff0018 + "\nSize: " + arenaSize0018);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0018_synthwave")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0018_synthwave")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
function arena_0023_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG 1 > " + arenaName0023);
    form.body(unlockableUnlockColor + arenaName0023 + "\n§eOriginal Creator(s): " + arenaCred0023 + "\nRemaster: " + arenaRema0023 + "\nDifficulty: " + arenaDiff0023 + "\nSize: " + arenaSize0023);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEG1(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0023_the_tower")
                system.run(() => categoryUEG1(player))
            }
            else {
                player.runCommand("function load_arenas/load_0023_the_tower")
                system.run(() => categoryUEG1(player))
            }
        }

    })
}
/////////////////////////////////////////////////////////UEG PLUS
function arena_0025_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0025);
    form.body(defaultUnlockColor + arenaName0025 + "\n§eOriginal Creator(s): " + arenaCred0025 + "\nRemaster: " + arenaRema0025 + "\nDifficulty: " + arenaDiff0025 + "\nSize: " + arenaSize0025);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0025_tundra")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0025_tundra")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}
function arena_0026_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0026);
    form.body(defaultUnlockColor + arenaName0026 + "\n§eOriginal Creator(s): " + arenaCred0026 + "\nRemaster: " + arenaRema0026 + "\nDifficulty: " + arenaDiff0026 + "\nSize: " + arenaSize0026);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0026_aether")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0026_aether")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}
function arena_0028_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0028);
    form.body(defaultUnlockColor + arenaName0028 + "\n§eOriginal Creator(s): " + arenaCred0028 + "\nRemaster: " + arenaRema0028 + "\nDifficulty: " + arenaDiff0028 + "\nSize: " + arenaSize0028);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0028_plus")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0028_plus")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}
function arena_0030_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0030);
    form.body(defaultUnlockColor + arenaName0030 + "\n§eOriginal Creator(s): " + arenaCred0030 + "\nRemaster: " + arenaRema0030 + "\nDifficulty: " + arenaDiff0030 + "\nSize: " + arenaSize0030);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0030_end")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0030_end")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}
function arena_0031_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0031);
    form.body(unlockableUnlockColor + arenaName0031 + "\n§eOriginal Creator(s): " + arenaCred0031 + "\nRemaster: " + arenaRema0031 + "\nDifficulty: " + arenaDiff0031 + "\nSize: " + arenaSize0031);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0031_circus")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0031_circus")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}
function arena_0032_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0032);
    form.body(unlockableUnlockColor + arenaName0032 + "\n§eOriginal Creator(s): " + arenaCred0032 + "\nRemaster: " + arenaRema0032 + "\nDifficulty: " + arenaDiff0032 + "\nSize: " + arenaSize0032);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0032_beehive")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0032_beehive")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}
function arena_0033_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0033);
    form.body(unlockableUnlockColor + arenaName0033 + "\n§eOriginal Creator(s): " + arenaCred0033 + "\nRemaster: " + arenaRema0033 + "\nDifficulty: " + arenaDiff0033 + "\nSize: " + arenaSize0033);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0033_dark_forest")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0033_dark_forest")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}
function arena_0034_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0034);
    form.body(unlockableUnlockColor + arenaName0034 + "\n§eOriginal Creator(s): " + arenaCred0034 + "\nRemaster: " + arenaRema0034 + "\nDifficulty: " + arenaDiff0034 + "\nSize: " + arenaSize0034);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0034_digiglobe")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0034_digiglobe")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}
function arena_0037_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0037);
    form.body(unlockableUnlockColor + arenaName0037 + "\n§eOriginal Creator(s): " + arenaCred0037 + "\nRemaster: " + arenaRema0037 + "\nDifficulty: " + arenaDiff0037 + "\nSize: " + arenaSize0037);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0037_crystal_cave")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0037_crystal_cave")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}
function arena_0038_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > UEG PLUS > " + arenaName0038);
    form.body(unlockableUnlockColor + arenaName0038 + "\n§eOriginal Creator(s): " + arenaCred0038 + "\nRemaster: " + arenaRema0038 + "\nDifficulty: " + arenaDiff0038 + "\nSize: " + arenaSize0038);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGPLUS(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0038_pendual")
                system.run(() => categoryUEGPLUS(player))
            }
            else {
                player.runCommand("function load_arenas/load_0038_pendual")
                system.run(() => categoryUEGPLUS(player))
            }
        }

    })
}

/////////////////////////////////////////RPG 1


function arena_0040_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > RPG Game > " + arenaName0040);
    form.body(unlockableUnlockColor + arenaName0040 + "\n§eOriginal Creator(s): " + arenaCred0040 + "\nRemaster: " + arenaRema0040 + "\nDifficulty: " + arenaDiff0040 + "\nSize: " + arenaSize0040);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryRPG(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0040_murkopolis")
                system.run(() => categoryRPG(player))
            }
            else {
                player.runCommand("function load_arenas/load_0040_murkopolis")
                system.run(() => categoryRPG(player))
            }
        }

    })
}
function arena_0041_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > RPG Game > " + arenaName0041);
    form.body(unlockableUnlockColor + arenaName0041 + "\n§eOriginal Creator(s): " + arenaCred0041 + "\nRemaster: " + arenaRema0041 + "\nDifficulty: " + arenaDiff0041 + "\nSize: " + arenaSize0041);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryRPG(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0041_aquatica")
                system.run(() => categoryRPG(player))
            }
            else {
                player.runCommand("function load_arenas/load_0041_aquatica")
                system.run(() => categoryRPG(player))
            }
        }

    })
}
function arena_0042_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > RPG Game > " + arenaName0042);
    form.body(unlockableUnlockColor + arenaName0042 + "\n§eOriginal Creator(s): " + arenaCred0042 + "\nRemaster: " + arenaRema0042 + "\nDifficulty: " + arenaDiff0042 + "\nSize: " + arenaSize0042);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryRPG(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0042_conflict")
                system.run(() => categoryRPG(player))
            }
            else {
                player.runCommand("function load_arenas/load_0042_neo_tokyo")
                system.run(() => categoryRPG(player))
            }
        }

    })
}
function arena_0043_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > RPG Game > " + arenaName0043);
    form.body(unlockableUnlockColor + arenaName0043 + "\n§eOriginal Creator(s): " + arenaCred0043 + "\nRemaster: " + arenaRema0043 + "\nDifficulty: " + arenaDiff0043 + "\nSize: " + arenaSize0043);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryRPG(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0043_shaparium")
                system.run(() => categoryRPG(player))
            }
            else {
                player.runCommand("function load_arenas/load_0043_shaparium")
                system.run(() => categoryRPG(player))
            }
        }

    })
}
function arena_0044_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > RPG Game > " + arenaName0044);
    form.body(unlockableUnlockColor + arenaName0044 + "\n§eOriginal Creator(s): " + arenaCred0044 + "\nRemaster: " + arenaRema0044 + "\nDifficulty: " + arenaDiff0044 + "\nSize: " + arenaSize0044);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryRPG(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0044_kyoto")
                system.run(() => categoryRPG(player))
            }
            else {
                player.runCommand("function load_arenas/load_0044_kyoto")
                system.run(() => categoryRPG(player))
            }
        }

    })
}
function arena_0045_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > RPG Game > " + arenaName0045);
    form.body(unlockableUnlockColor + arenaName0045 + "\n§eOriginal Creator(s): " + arenaCred0045 + "\nRemaster: " + arenaRema0045 + "\nDifficulty: " + arenaDiff0045 + "\nSize: " + arenaSize0045);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryRPG(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0045_overlord")
                system.run(() => categoryRPG(player))
            }
            else {
                player.runCommand("function load_arenas/load_0045_overlord")
                system.run(() => categoryRPG(player))
            }
        }

    })
}

//////////////////////////////////////RPG 2

function arena_0050_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")

    let form = new MessageFormData();
    form.title("... > RPG Game 2 > " + arenaName0050);
    form.body(unlockableUnlockColor + arenaName0050 + "\n§eOriginal Creator(s): " + arenaCred0050 + "\nRemaster: " + arenaRema0050 + "\nDifficulty: " + arenaDiff0050 + "\nSize: " + arenaSize0050);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryRPG2(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0050_shadow_forest")
                system.run(() => categoryRPG2(player))
            }
            else {
                player.runCommand("function load_arenas/load_0050_shadow_forest")
                system.run(() => categoryRPG2(player))
            }
        }

    })
}
function arena_0051_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > RPG Game 2 > " + arenaName0051);
    form.body(unlockableUnlockColor + arenaName0051 + "\n§eOriginal Creator(s): " + arenaCred0051 + "\nRemaster: " + arenaRema0051 + "\nDifficulty: " + arenaDiff0051 + "\nSize: " + arenaSize0051);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryRPG2(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0051_magic_forest")
                system.run(() => categoryRPG2(player))
            }
            else {
                player.runCommand("function load_arenas/load_0051_magic_forest")
                system.run(() => categoryRPG2(player))
            }
        }

    })
}

//////////////////////////////////////UEG CYBER (default)

function arena_0059_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0059);
    form.body(unlockableUnlockColor + arenaName0059 + "\n§eOriginal Creator(s): " + arenaCred0059 + "\nDifficulty: " + arenaDiff0059 + "\nSize: " + arenaSize0059);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0059_highway")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0059_highway")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0060_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0060);
    form.body(unlockableUnlockColor + arenaName0060 + "\n§eOriginal Creator(s): " + arenaCred0060 + "\nDifficulty: " + arenaDiff0060 + "\nSize: " + arenaSize0060);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0060_cheeseburger")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0060_cheeseburger_warzone")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0061_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0061);
    form.body(unlockableUnlockColor + arenaName0061 + "\n§eOriginal Creator(s): " + arenaCred0061 + "\nDifficulty: " + arenaDiff0061 + "\nSize: " + arenaSize0061);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0061_mcryes")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0078_mcryes")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0062_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0062);
    form.body(unlockableUnlockColor + arenaName0062 + "\n§eOriginal Creator(s): " + arenaCred0062 + "\nDifficulty: " + arenaDiff0062 + "\nSize: " + arenaSize0062);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0062_race_track")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0062_race_track")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0063_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0063);
    form.body(unlockableUnlockColor + arenaName0063 + "\n§eOriginal Creator(s): " + arenaCred0063 + "\nDifficulty: " + arenaDiff0063 + "\nSize: " + arenaSize0063);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0063_gob_dimension")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0063_gob_dimension")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0064_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0064);
    form.body(defaultUnlockColor + arenaName0064 + "\n§eOriginal Creator(s): " + arenaCred0064 + "\nDifficulty: " + arenaDiff0064 + "\nSize: " + arenaSize0064);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0064_playground")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0064_playground")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0065_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0065);
    form.body(defaultUnlockColor + arenaName0065 + "\n§eOriginal Creator(s): " + arenaCred0065 + "\nDifficulty: " + arenaDiff0065 + "\nSize: " + arenaSize0065);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0065_jurassic")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0065_jurassic")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0066_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0066);
    form.body(defaultUnlockColor + arenaName0066 + "\n§eOriginal Creator(s): " + arenaCred0066 + "\nDifficulty: " + arenaDiff0066 + "\nSize: " + arenaSize0066);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0066_egypt")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0066_egypt")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0067_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0067);
    form.body(defaultUnlockColor + arenaName0067 + "\n§eOriginal Creator(s): " + arenaCred0067 + "\nDifficulty: " + arenaDiff0067 + "\nSize: " + arenaSize0067);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0067_cyberspace")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0067_cyberspace")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0068_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0068);
    form.body(defaultUnlockColor + arenaName0068 + "\n§eOriginal Creator(s): " + arenaCred0068 + "\nDifficulty: " + arenaDiff0068 + "\nSize: " + arenaSize0068);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0068_fire_and_ice")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0068_fire_and_ice")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0070_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0070);
    form.body(defaultUnlockColor + arenaName0070 + "\n§eOriginal Creator(s): " + arenaCred0070 + "\nDifficulty: " + arenaDiff0070 + "\nSize: " + arenaSize0070);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0070_vaporwave")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0070_vaporwave")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0071_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0071);
    form.body(defaultUnlockColor + arenaName0071 + "\n§eOriginal Creator(s): " + arenaCred0071 + "\nDifficulty: " + arenaDiff0071 + "\nSize: " + arenaSize0071);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0071_chess")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0071_chess")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0073_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0073);
    form.body(defaultUnlockColor + arenaName0073 + "\n§eOriginal Creator(s): " + arenaCred0073 + "\nDifficulty: " + arenaDiff0073 + "\nSize: " + arenaSize0073);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0073_deep_dark")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0073_deep_dark")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0074_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0074);
    form.body(unlockableUnlockColor + arenaName0074 + "\n§eOriginal Creator(s): " + arenaCred0074 + "\nDifficulty: " + arenaDiff0074 + "\nSize: " + arenaSize0074);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0074_demolition_derby")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0074_demolition_derby")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0076_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0076);
    form.body(unlockableUnlockColor + arenaName0076 + "\n§eOriginal Creator(s): " + arenaCred0076 + "\nDifficulty: " + arenaDiff0076 + "\nSize: " + arenaSize0076);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0076_cargo_deck")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0087_cargo_deck")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0078_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0078);
    form.body(unlockableUnlockColor + arenaName0078 + "\n§eOriginal Creator(s): " + arenaCred0078 + "\nDifficulty: " + arenaDiff0078 + "\nSize: " + arenaSize0078);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0078_computer_virus")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0078_computer_virus")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0079_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0079);
    form.body(unlockableUnlockColor + arenaName0079 + "\n§eOriginal Creator(s): " + arenaCred0079 + "\nDifficulty: " + arenaDiff0079 + "\nSize: " + arenaSize0079);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0079_slot_machine")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0079_slot_machine")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0080_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0080);
    form.body(unlockableUnlockColor + arenaName0080 + "\n§eOriginal Creator(s): " + arenaCred0080 + "\nDifficulty: " + arenaDiff0080 + "\nSize: " + arenaSize0080);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0080_divine_machinery")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0080_pondwater")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0081_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0081);
    form.body(unlockableUnlockColor + arenaName0081 + "\n§eOriginal Creator(s): " + arenaCred0081 + "\nDifficulty: " + arenaDiff0081 + "\nSize: " + arenaSize0081);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0081_arcade")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0086_arcade")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0082_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0082);
    form.body(defaultUnlockColor + arenaName0082 + "\n§eOriginal Creator(s): " + arenaCred0082 + "\nDifficulty: " + arenaDiff0082 + "\nSize: " + arenaSize0082);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0082_big_warehouse")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0082_big_warehouse")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0083_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0083);
    form.body(unlockableUnlockColor + arenaName0083 + "\n§eOriginal Creator(s): " + arenaCred0083 + "\nDifficulty: " + arenaDiff0083 + "\nSize: " + arenaSize0083);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0083_clash_royale")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0083_clash_royale")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0084_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0084);
    form.body(defaultUnlockColor + arenaName0084 + "\n§eOriginal Creator(s): " + arenaCred0084 + "\nDifficulty: " + arenaDiff0084 + "\nSize: " + arenaSize0084);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0084_fruitiger_aero")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0084_fruitiger_aero")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0085_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0085);
    form.body(unlockableUnlockColor + arenaName0085 + "\n§eOriginal Creator(s): " + arenaCred0085 + "\nDifficulty: " + arenaDiff0085 + "\nSize: " + arenaSize0085);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0085_doomspire")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0085_amusement_park")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0086_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0086);
    form.body(unlockableUnlockColor + arenaName0086 + "\n§eOriginal Creator(s): " + arenaCred0086 + "\nDifficulty: " + arenaDiff0086 + "\nSize: " + arenaSize0086);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0086_pondwater")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0080_pondwater")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0087_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0087);
    form.body(unlockableUnlockColor + arenaName0087 + "\n§eOriginal Creator(s): " + arenaCred0087 + "\nDifficulty: " + arenaDiff0087 + "\nSize: " + arenaSize0087);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0087_spongebob")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0087_spongebob")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0088_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0088);
    form.body(unlockableUnlockColor + arenaName0088 + "\n§eOriginal Creator(s): " + arenaCred0088 + "\nDifficulty: " + arenaDiff0088 + "\nSize: " + arenaSize0088);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0088_")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0088_")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0089_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0089);
    form.body(unlockableUnlockColor + arenaName0089 + "\n§eOriginal Creator(s): " + arenaCred0089 + "\nDifficulty: " + arenaDiff0089 + "\nSize: " + arenaSize0089);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0089_amusement_park")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0085_amusement_park")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0090_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0090);
    form.body(unlockableUnlockColor + arenaName0090 + "\n§eOriginal Creator(s): " + arenaCred0090 + "\nDifficulty: " + arenaDiff0090 + "\nSize: " + arenaSize0090);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0090_candyland")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0090_candyland")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0091_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0091);
    form.body(unlockableUnlockColor + arenaName0091 + "\n§eOriginal Creator(s): " + arenaCred0091 + "\nDifficulty: " + arenaDiff0091 + "\nSize: " + arenaSize0091);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0091_")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0091_")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0092_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0092);
    form.body(unlockableUnlockColor + arenaName0092 + "\n§eOriginal Creator(s): " + arenaCred0092 + "\nDifficulty: " + arenaDiff0092 + "\nSize: " + arenaSize0092);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0092_")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0092_")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0093_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0093);
    form.body(unlockableUnlockColor + arenaName0093 + "\n§eOriginal Creator(s): " + arenaCred0093 + "\nDifficulty: " + arenaDiff0093 + "\nSize: " + arenaSize0093);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0093_")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0081_mole_life")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0094_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0094);
    form.body(unlockableUnlockColor + arenaName0094 + "\n§eOriginal Creator(s): " + arenaCred0094 + "\nDifficulty: " + arenaDiff0094 + "\nSize: " + arenaSize0094);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0094_spleef")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0088_spleef")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0095_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0095);
    form.body(unlockableUnlockColor + arenaName0095 + "\n§eOriginal Creator(s): " + arenaCred0095 + "\nDifficulty: " + arenaDiff0095 + "\nSize: " + arenaSize0095);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0095_")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0095_")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}
function arena_0096_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER > " + arenaName0096);
    form.body(unlockableUnlockColor + arenaName0096 + "\n§eOriginal Creator(s): " + arenaCred0096 + "\nDifficulty: " + arenaDiff0096 + "\nSize: " + arenaSize0096);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0096")
                system.run(() => categoryUEGCYBER(player))
            }
            else {
                player.runCommand("function load_arenas/load_0096_")
                system.run(() => categoryUEGCYBER(player))
            }
        }

    })
}

//////////////////////////////////////UEG CYBER -S-

function arena_0057_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER -S- > " + arenaName0057);
    form.body(secretUnlockColor + arenaName0057 + "\n§eOriginal Creator(s): " + arenaCred0057 + "\nDifficulty: " + arenaDiff0057 + "\nSize: " + arenaSize0057);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER_S(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0057_abstract_cyber")
                system.run(() => categoryUEGCYBER_S(player))
            }
            else {
                player.runCommand("function load_arenas/load_0057_abstract_cyber")
                system.run(() => categoryUEGCYBER_S(player))
            }
        }

    })
}
function arena_0058_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER -S- > " + arenaName0058);
    form.body(secretUnlockColor + arenaName0058 + "\n§eOriginal Creator(s): " + arenaCred0058 + "\nDifficulty: " + arenaDiff0058 + "\nSize: " + arenaSize0058);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER_S(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0058_mikes_way")
                system.run(() => categoryUEGCYBER_S(player))
            }
            else {
                player.runCommand("function load_arenas/load_0058_mikes_way")
                system.run(() => categoryUEGCYBER_S(player))
            }
        }

    })
}
function arena_0069_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER -S- > " + arenaName0069);
    form.body(secretUnlockColor + arenaName0069 + "\n§eOriginal Creator(s): " + arenaCred0069 + "\nDifficulty: " + arenaDiff0069 + "\nSize: " + arenaSize0069);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER_S(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0069_shrek_on_crack")
                system.run(() => categoryUEGCYBER_S(player))
            }
            else {
                player.runCommand("function load_arenas/load_0069_shrek_on_crack")
                system.run(() => categoryUEGCYBER_S(player))
            }
        }

    })
}
function arena_0075_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER -S- > " + arenaName0075);
    form.body(secretUnlockColor + arenaName0075 + "\n§eOriginal Creator(s): " + arenaCred0075 + "\nDifficulty: " + arenaDiff0075 + "\nSize: " + arenaSize0075);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER_S(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0075_bananaland_bouncehouse")
                system.run(() => categoryUEGCYBER_S(player))
            }
            else {
                player.runCommand("function load_arenas/load_0075_bananaland_bouncehouse")
                system.run(() => categoryUEGCYBER_S(player))
            }
        }

    })
}
function arena_0077_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER -S- > " + arenaName0077);
    form.body(secretUnlockColor + arenaName0077 + "\n§eOriginal Creator(s): " + arenaCred0077 + "\nDifficulty: " + arenaDiff0077 + "\nSize: " + arenaSize0077);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER_S(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0077_flesh_prison")
                system.run(() => categoryUEGCYBER_S(player))
            }
            else {
                player.runCommand("function load_arenas/load_0077_flesh_prison")
                system.run(() => categoryUEGCYBER_S(player))
            }
        }

    })
}
function arena_0097_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER -S- > " + arenaName0097);
    form.body(secretUnlockColor + arenaName0097 + "\n§eOriginal Creator(s): " + arenaCred0097 + "\nDifficulty: " + arenaDiff0097 + "\nSize: " + arenaSize0097);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER_S(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0097_")
                system.run(() => categoryUEGCYBER_S(player))
            }
            else {
                player.runCommand("function load_arenas/load_0097_")
                system.run(() => categoryUEGCYBER_S(player))
            }
        }

    })
}
function arena_0098_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER -S- > " + arenaName0098);
    form.body(secretUnlockColor + arenaName0098 + "\n§eOriginal Creator(s): " + arenaCred0098 + "\nDifficulty: " + arenaDiff0098 + "\nSize: " + arenaSize0098);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER_S(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0098_")
                system.run(() => categoryUEGCYBER_S(player))
            }
            else {
                player.runCommand("function load_arenas/load_0098_")
                system.run(() => categoryUEGCYBER_S(player))
            }
        }

    })
}
function arena_0105_message(player) {
    const aVoteEnabled = world.scoreboard.getObjective("arena_vote_enabled")
    const aVoteBool = aVoteEnabled.getScore("boolean")


    let form = new MessageFormData();
    form.title("... > UEG CYBER -S- > " + arenaName0105);
    form.body(secretUnlockColor + arenaName0105 + "\n§eOriginal Creator(s): " + arenaCred0105 + "\nDifficulty: " + arenaDiff0105 + "\nSize: " + arenaSize0105);
    form.button1(bacM);
    if (aVoteBool == 1) {
        form.button2(togM);
    }
    else {
        form.button2(selM);
    }

    form.show(player).then(r => {

        let responseVal = r.selection

        if (responseVal == 0) {
            system.run(() => categoryUEGCYBER_S(player))
        }
        else if (responseVal == 1) {
            if (aVoteBool == 1) {
                player.runCommand("function arena_toggles/toggle_0105_")
                system.run(() => categoryUEGCYBER_S(player))
            }
            else {
                player.runCommand("function load_arenas/load_00105_")
                system.run(() => categoryUEGCYBER_S(player))
            }
        }

    })
}