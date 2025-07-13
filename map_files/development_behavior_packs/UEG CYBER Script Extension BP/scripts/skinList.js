
import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
export { skinList, designerList, skinSet, skinSet_over, skinFileLoc, skinIconLoc, skinItemIds, effectSkins, skinPrices, effectNames }

//Common: Uncommon: Rare: Epic: Mythic: Secret: Dev:

const skinList = new Array(
    // Default ////////////////////////
    "No Skin", // 00
    "Recruit", // 01
    "Acid Specialist", // 02
    "Amethyst Warrior", // 03
    "Sound Goddess", // 04
    "Starlight Unit", // 05
    "Red Oni", // 06
    "Conduit", // 07
    "The Regulator", // 08
    "Violet Machine", // 09
    "Finite", // 10
    "Dark Frame", // 11
    "12 - Unfinished", // 12
    // Hidden Valley ////////////////////////
    "Mirage", // 13################################
    "14 - Unfinished", // 14#######################
    "15 - Unfinished", // 15############################
    // Overdrive ////////////////////////
    "Recruit: HWS", // 16
    "Maxibooster", // 17
    "18 - Unfinished", // 18
    // Crystallized ////////////////////////
    "19 - Unfinished", // 19###########################
    "20 - Unfinished", // 20#########################
    "21 - Unfinished", // 21#########################
    // Abstract ////////////////////////
    "Supporter of Bilfred", // 22#######################
    "Harold", // 23##############################
    "24 - Unfinished", // 24#########################
    // Steampunk ////////////////////////
    "Steampunk Navigator", // 25
    "Amber Crusader", // 26
    "27 - Unfinished", // 27
    // Brutal ////////////////////////
    "The Iron Maiden", // 28
    "NATASHA", // 29
    "The Fallen", // 30
    // Intergalactic ////////////////////////
    "Devorans Spatium", // 31
    "Sol Invictus", // 32
    "Shapeshifter (Changes Forms)", // 33
    // Wonderland ////////////////////////
    "Gummy Contraption", // 34
    "Ringmaster", // 35
    "Monarch of Hearts", // 36
    // Auric ////////////////////////
    "Golden Striker", // 37
    "38 - Unfinished", // 38
    "39 - Unfinished", // 39
    // Seasons ////////////////////////
    "40 - Unfinished", // 40#######################
    "41 - Unfinished", // 41##################
    "42 - Unfinished", // 42#####################
    // Weapons (pt.1) ////////////////////////
    "Melee Class", // 43#######################
    "Ranger Class", // 44#######################
    "Trapper Class", // 45#######################
    // Freedom -S- ////////////////////////
    "Cheeseburger Freedom Man", // 46
    "Cheeseburger Freedom Man's Father", // 47
    "Cheeseburger Freedom Man's Mother", // 48
    // -S- ////////////////////////
    "Baby who has an extremely cigarette-looking rocket securely strapped to its back in an unsafe manner", // 49
    "Big Joe", // 50
    "Gundam Astray Red Frame", // 51
    // Dev ////////////////////////
    "ScizorM", // 52
    "zeerye", // 53
    "AubreyThePebble", // 54
    "evel", // 55
    // Special Thanks ////////////////////////
    "Torimoti Armor", // 56
    // Early Supporter ////////////////////////
    "57 - Incomplete", // 57
    // RPG Game 1 ////////////////////////
    "Robot (Cyberized)", // 58
    "Demon (Cyberized)", // 59
    "Spectral (Cyberized)", // 60
    "Elf (Cyberized)", // 61
    "Golem (Cyberized)", // 62
    "Cat (Cyberized)", // 63
    "Shaparium Robot", // 64
    "Shaparium Robot (Purified)", // 65
    "The Overlord", // 66
    // RPG Game 2 ////////////////////////
    "Shadow Elf", // 67
    "Shadow King", // 68
    "Poncho", // 69
    "Mushroom Person", // 70
    "Chrysan", // 71
    "Lilith", // 72
    // UEG Legacy ////////////////////////
    "Demolitionist", // 73
    "Demolition Knight", // 74
    "UEG Red Recruit", // 75
    // Weapons pt.2 ////////////////////////
    "Utility Class", // 76#################################
    "Secret Class", // 77####################################
    "Omni Class", // 78###########
    // Angenicidal Pack //////////////////////
    "79 - Incomplete", // 79
    "80 - Incomplete", // 80
    "81 - Incomplete" // 81
)

const effectSkins = new Array(
    3,
    4,
    7,
    8,
    9,
    10,
    11,
    28,
    29,
    30,
    35,
    36,
    59,
    61,
    63,
    66,
    67,
    73
)

//Common: Uncommon: Rare: Epic: Mythic: Secret: Dev:

var skinPrices = new Array(
    10, //Uncommon
    15, //Rare
    25, //Epic
    35  //Mythic
)

const incoSk = "sm:skin_incomplete"

//This system will be in place until every skin is finished (I made the 'sm:skin_number' format so I don't have to do this in final)
const skinItemIds = new Array(
    // Default ////////////////////////
    "sm:skin_1", // 00
    "sm:skin_1", // 01
    "sm:skin_2", // 02
    "sm:skin_3", // 03
    "sm:skin_4", // 04
    "sm:skin_5", // 05
    "sm:skin_6", // 06
    "sm:skin_7", // 07
    "sm:skin_8", // 08
    "sm:skin_9", // 09
    "sm:skin_10", // 10
    "sm:skin_11", // 11
    incoSk, // 12
    // Hidden Valley ////////////////////////
    incoSk, // 13
    incoSk, // 14
    incoSk, // 15
    // Overdrive ////////////////////////
    "sm:skin_16", // 16
    "sm:skin_17", // 17
    incoSk, // 18
    // Crystallized ////////////////////////
    incoSk, // 19
    incoSk, // 20
    incoSk, // 21
    // Abstract ////////////////////////
    incoSk, // 22
    incoSk, // 23
    incoSk, // 24
    // Steampunk ////////////////////////
    "sm:skin_25", // 25
    "sm:skin_26", // 26
    incoSk, // 27
    // Brutal ////////////////////////
    "sm:skin_28", // 28
    "sm:skin_29", // 29
    "sm:skin_30", // 30
    // Intergalactic ////////////////////////
    "sm:skin_31", // 31
    "sm:skin_32", // 32
    "sm:skin_33_recovery", // 33
    // Wonderland ////////////////////////
    "sm:skin_34", // 34
    "sm:skin_35", // 35
    "sm:skin_36", // 36
    // Auric ////////////////////////
    "sm:skin_37", // 37
    incoSk, // 38
    incoSk, // 39
    // Seasons ////////////////////////
    incoSk, // 40
    incoSk, // 41
    incoSk, // 42
    // Weapons (pt.1) ////////////////////////
    incoSk, // 43
    incoSk, // 44
    incoSk, // 45
    // Freedom -S- ////////////////////////
    "sm:skin_46", // 46
    "sm:skin_47", // 47
    "sm:skin_48", // 48
    // -S- ////////////////////////
    "sm:skin_49", // 49
    incoSk, // 50
    incoSk, // 51
    // Dev ////////////////////////
    "sm:skin_52", // 52
    incoSk, // 53
    incoSk, // 54
    incoSk, // 55
    // Special Thanks ////////////////////////
    incoSk, // 56
    // Early Supporter ////////////////////////
    incoSk, // 57
    // RPG Game 1 ////////////////////////
    "sm:skin_58", // 58
    "sm:skin_59", // 59
    "sm:skin_60", // 60
    "sm:skin_61", // 61
    "sm:skin_62", // 62
    "sm:skin_63", // 63
    "sm:skin_64", // 64
    "sm:skin_65", // 65
    "sm:skin_66", // 66
    // RPG Game 2 ////////////////////////
    "sm:skin_67", // 67
    "sm:skin_68", // 68
    "sm:skin_69", // 69
    "sm:skin_70", // 70
    incoSk, // 71
    incoSk, // 72
    // UEG Legacy ////////////////////////
    "sm:skin_73", // 73
    "sm:skin_74", // 74
    "sm:skin_75", // 75
    // Weapons pt.2 ////////////////////////
    incoSk, // 76
    incoSk, // 77
    incoSk, // 78
    // Angenicidal Pack //////////////////////
    incoSk, // 79
    incoSk, // 80
    incoSk // 81
)

const skinIconLoc = new Array(
    // Default ////////////////////////
    "textures/ui/skin_categories/button", // 00
    "textures/ui/skin_icons/skin_1", // 01
    "textures/ui/skin_icons/skin_2", // 02
    "textures/ui/skin_icons/skin_3", // 03
    "textures/ui/skin_icons/skin_4", // 04
    "textures/ui/skin_icons/skin_5", // 05
    "textures/ui/skin_icons/skin_6", // 06
    "textures/ui/skin_icons/skin_7", // 07
    "textures/ui/skin_icons/skin_8", // 08
    "textures/ui/skin_icons/skin_9", // 09
    "textures/ui/skin_icons/skin_10", // 10
    "textures/ui/skin_icons/skin_11", // 11
    "textures/ui/skin_categories/button", // 12
    // Hidden Valley ////////////////////////
    "textures/ui/skin_categories/button", // 13
    "textures/ui/skin_categories/button", // 14
    "textures/ui/skin_categories/button", // 15
    // Overdrive ////////////////////////
    "textures/ui/skin_icons/skin_16", // 16
    "textures/ui/skin_icons/skin_17", // 17
    "textures/ui/skin_categories/button", // 18
    // Crystallized ////////////////////////
    "textures/ui/skin_categories/button", // 19
    "textures/ui/skin_categories/button", // 20
    "textures/ui/skin_categories/button", // 21
    // Abstract ////////////////////////
    "textures/ui/skin_categories/button", // 22
    "textures/ui/skin_categories/button", // 23
    "textures/ui/skin_categories/button", // 24
    // Steampunk ////////////////////////
    "textures/ui/skin_icons/skin_25", // 25
    "textures/ui/skin_icons/skin_26", // 26
    "textures/ui/skin_categories/button", // 27
    // Brutal ////////////////////////
    "textures/ui/skin_icons/skin_28", // 28
    "textures/ui/skin_icons/skin_29", // 29
    "textures/ui/skin_icons/skin_30", // 30
    // Intergalactic ////////////////////////
    "textures/ui/skin_icons/skin_31", // 31
    "textures/ui/skin_icons/skin_32", // 32
    "textures/ui/skin_categories/button", // 33
    // Wonderland ////////////////////////
    "textures/ui/skin_icons/skin_34", // 34
    "textures/ui/skin_icons/skin_35", // 35
    "textures/ui/skin_icons/skin_36", // 36
    // Auric ////////////////////////
    "textures/ui/skin_icons/skin_37", // 37
    "textures/ui/skin_categories/button", // 38
    "textures/ui/skin_categories/button", // 39
    // Seasons ////////////////////////
    "textures/ui/skin_categories/button", // 40
    "textures/ui/skin_categories/button", // 41
    "textures/ui/skin_categories/button", // 42
    // Weapons (pt.1) ////////////////////////
    "textures/ui/skin_categories/button", // 43
    "textures/ui/skin_categories/button", // 44
    "textures/ui/skin_categories/button", // 45
    // Freedom -S- ////////////////////////
    "textures/ui/skin_icons/skin_46", // 46
    "textures/ui/skin_icons/skin_47", // 47
    "textures/ui/skin_icons/skin_48", // 48
    // -S- ////////////////////////
    "textures/ui/skin_icons/skin_49", // 49
    "textures/ui/skin_categories/button", // 50
    "textures/ui/skin_categories/button", // 51
    // Dev ////////////////////////
    "textures/ui/skin_categories/button", // 52
    "textures/ui/skin_categories/button", // 53
    "textures/ui/skin_categories/button", // 54
    "textures/ui/skin_categories/button", // 55
    // Special Thanks ////////////////////////
    "textures/ui/skin_categories/button", // 56
    // Early Supporter ////////////////////////
    "textures/ui/skin_categories/button", // 57
    // RPG Game 1 ////////////////////////
    "textures/ui/skin_icons/skin_58", // 58
    "textures/ui/skin_icons/skin_59", // 59
    "textures/ui/skin_icons/skin_60", // 60
    "textures/ui/skin_icons/skin_61", // 61
    "textures/ui/skin_icons/skin_62", // 62
    "textures/ui/skin_icons/skin_63", // 63
    "textures/ui/skin_icons/skin_64", // 64
    "textures/ui/skin_icons/skin_65", // 65
    "textures/ui/skin_icons/skin_66", // 66
    // RPG Game 2 ////////////////////////
    "textures/ui/skin_icons/skin_67", // 67
    "textures/ui/skin_icons/skin_68", // 68
    "textures/ui/skin_icons/skin_69", // 69
    "textures/ui/skin_icons/skin_70", // 70
    "textures/ui/skin_categories/button", // 71
    "textures/ui/skin_categories/button", // 72
    // UEG Legacy ////////////////////////
    "textures/ui/skin_icons/skin_73", // 73
    "textures/ui/skin_categories/button", // 74
    "textures/ui/skin_icons/skin_75", // 75
    // Weapons pt.2 ////////////////////////
    "textures/ui/skin_categories/button", // 76
    "textures/ui/skin_categories/button", // 77
    "textures/ui/skin_categories/button", // 78
    // Angenicidal ////////////////////////
    "textures/ui/skin_categories/button", // 79
    "textures/ui/skin_categories/button", // 80
    "textures/ui/skin_categories/button" // 81
)

const designerList = new Array(
    // Default ////////////////////////
    "No Designer", // 00
    "ScizorM", // 01
    "AubreyThePebble", // 02
    "AubreyThePebble", // 03
    "AubreyThePebble", // 04
    "AubreyThePebble", // 05
    "AubreyThePebble", // 06
    "ScizorM", // 07
    "ScizorM", // 08
    "evel", // 09
    "ScizorM", // 10
    "ScizorM", // 11
    "12 - Unfinished", // 12
    // Hidden Valley ////////////////////////
    "ScizorM", // 13
    "14 - Unfinished", // 14
    "15 - Unfinished", // 15
    // Overdrive ////////////////////////
    "ScizorM", // 16
    "ScizorM", // 17
    "18 - Unfinished", // 18
    // Crystallized ////////////////////////
    "19 - Unfinished", // 19
    "20 - Unfinished", // 20
    "21 - Unfinished", // 21
    // Abstract ////////////////////////
    "22 - Unfinished", // 22
    "23 - Unfinished", // 23
    "24 - Unfinished", // 24
    // Steampunk ////////////////////////
    "evel", // 25
    "Ripped from Warhammer (for Cameron) (please don't sue me games workshop)", // 26
    "27 - Unfinished", // 27
    // Brutal ////////////////////////
    "zeerye", // 28
    "Fopull", // 29
    "evel", // 30
    // Intergalactic ////////////////////////
    "evel", // 31
    "evel", // 32
    "evel", // 33
    // Wonderland ////////////////////////
    "AubreyThePebble", // 34
    "evel", // 35
    "evel", // 36
    // Auric ////////////////////////
    "AubreyThePebble, ScizorM", // 37
    "38 - Unfinished", // 38
    "39 - Unfinished", // 39
    // Seasons ////////////////////////
    "40 - Unfinished", // 40
    "41 - Unfinished", // 41
    "42 - Unfinished", // 42
    // Weapons (pt.1) ////////////////////////
    "Melee Class", // 43
    "Ranger Class", // 44
    "Trapper Class", // 45
    // Freedom -S- ////////////////////////
    "(Reference: Vargskelethor Joel) ScizorM", // 46
    "ScizorM", // 47
    "ScizorM", // 48
    // -S- ////////////////////////
    "ScizorM", // 49
    "zeerye", // 50
    "(Reference: Mobile Suit Gundam) ScizorM", // 51
    // Dev ////////////////////////
    "ScizorM", // 52
    "zeerye", // 53
    "AubreyThePebble", // 54
    "evel", // 55
    // Special Thanks ////////////////////////
    "ScizorM (with references from Kaizo Slumber and Super Mario Galaxy)", // 56
    // Early Supporter ////////////////////////
    "57 - Incomplete", // 57
    // RPG Game 1 ////////////////////////
    "ScizorM", // 58
    "ScizorM", // 59
    "ScizorM", // 60
    "ScizorM", // 61
    "ScizorM", // 62
    "ScizorM", // 63
    "ScizorM", // 64
    "ScizorM", // 65
    "66 - Unfinished", // 66
    // RPG Game 2 ////////////////////////
    "evel", // 67
    "zeerye", // 68
    "zeerye", // 69
    "ScizorM", // 70
    "evel", // 71
    "evel", // 72
    // UEG Legacy ////////////////////////
    "ScizorM", // 73
    "ScizorM", // 74
    "ScizorM", // 75
    // Weapons pt.2 ////////////////////////
    "Utility Class", // 76
    "Secret Class", // 77
    "Omni Class", // 78
    // Angenicidal Pack //////////////////////
    "SmashedEGG", // 79
    "SmashedEGG", // 80
    "SmashedEGG" // 81
)

const skinSet = new Array(
    // Default ////////////////////////
    "No Set", // 00
    "UEG CYBER: Default", // 01
    "UEG CYBER: Default", // 02
    "UEG CYBER: Default", // 03
    "UEG CYBER: Default", // 04
    "UEG CYBER: Default", // 05
    "UEG CYBER: Default", // 06
    "UEG CYBER: Default", // 07
    "UEG CYBER: Default", // 08
    "UEG CYBER: Default", // 09
    "UEG CYBER: Default", // 10
    "UEG CYBER: Default", // 11
    "UEG CYBER: Default", // 12
    // Hidden Valley ////////////////////////
    "UEG CYBER: Hidden Valley", // 13
    "UEG CYBER: Hidden Valley", // 14
    "UEG CYBER: Hidden Valley", // 15
    // Overdrive ////////////////////////
    "UEG CYBER: Overdrive", // 16
    "UEG CYBER: Overdrive", // 17
    "UEG CYBER: Overdrive", // 18
    // Crystallized ////////////////////////
    "UEG CYBER: Crystallized", // 19
    "UEG CYBER: Crystallized", // 20
    "UEG CYBER: Crystallized", // 21
    // Abstract ////////////////////////
    "UEG CYBER: Abstract", // 22
    "UEG CYBER: Abstract", // 23
    "UEG CYBER: Abstract", // 24
    // Steampunk ////////////////////////
    "UEG CYBER: Steampunk", // 25
    "UEG CYBER: Steampunk", // 26
    "UEG CYBER: Steampunk", // 27
    // Brutal ////////////////////////
    "UEG CYBER: Brutal", // 28
    "UEG CYBER: Brutal", // 29
    "UEG CYBER: Brutal", // 30
    // Intergalactic ////////////////////////
    "UEG CYBER: Intergalactic", // 31
    "UEG CYBER: Intergalactic", // 32
    "UEG CYBER: Intergalactic", // 33
    // Wonderland ////////////////////////
    "UEG CYBER: Wonderland", // 34
    "UEG CYBER: Wonderland", // 35
    "UEG CYBER: Wonderland", // 36
    // Auric ////////////////////////
    "UEG CYBER: Auric", // 37
    "UEG CYBER: Auric", // 38
    "UEG CYBER: Auric", // 39
    // Seasons ////////////////////////
    "UEG CYBER: Seasons", // 40
    "UEG CYBER: Seasons", // 41
    "UEG CYBER: Seasons", // 42
    // Weapons (pt.1) ////////////////////////
    "UEG CYBER: Weapons", // 43
    "UEG CYBER: Weapons", // 44
    "UEG CYBER: Weapons", // 45
    // Freedom -S- ////////////////////////
    "UEG CYBER -S-: Freedom", // 46
    "UEG CYBER -S-: Freedom", // 47
    "UEG CYBER -S-: Freedom", // 48
    // -S- ////////////////////////
    "UEG CYBER -S-: Secret", // 49
    "UEG CYBER -S-: Secret", // 50
    "UEG CYBER -S-: Secret", // 51
    // Dev ////////////////////////
    "UEG CYBER -S-: Developers", // 52
    "UEG CYBER -S-: Developers", // 53
    "UEG CYBER -S-: Developers", // 54
    "UEG CYBER -S-: Developers", // 55
    // Special Thanks ////////////////////////
    "UEG CYBER -S-: Special Thanks", // 56
    // Early Supporter ////////////////////////
    "UEG CYBER -S-: Early Supporter", // 57
    // RPG Game 1 ////////////////////////
    "RPG Game: RPG Game Cyberized", // 58
    "RPG Game: RPG Game Cyberized", // 59
    "RPG Game: RPG Game Cyberized", // 60
    "RPG Game: RPG Game Cyberized", // 61
    "RPG Game: RPG Game Cyberized", // 62
    "RPG Game: RPG Game Cyberized", // 63
    "RPG Game: RPG Game Cyberized", // 64
    "RPG Game: RPG Game Cyberized", // 65
    "RPG Game: RPG Game Cyberized", // 66
    // RPG Game 2 ////////////////////////
    "RPG Game: RPG Game 2", // 67
    "RPG Game: RPG Game 2", // 68
    "RPG Game: RPG Game 2", // 69
    "RPG Game: RPG Game 2", // 70
    "RPG Game: RPG Game 2", // 71
    "RPG Game: RPG Game 2", // 72
    // UEG Legacy ////////////////////////
    "UEG: UEG Legacy", // 73
    "UEG: UEG Legacy", // 74
    "UEG: UEG Legacy", // 75
    // Weapons pt.2 ////////////////////////
    "UEG CYBER: Weapons", // 76
    "UEG CYBER: Weapons", // 77
    "UEG CYBER: Weapons", // 78
    // Angenicidal Pack //////////////////////
    "UEG CYBER -S-: Angenicidal Pack", // 79
    "UEG CYBER -S-: Angenicidal Pack", // 80
    "UEG CYBER -S-: Angenicidal Pack" // 81
)

const skinSet_over = new Array(
    // Default ////////////////////////
    "No Set", // 00
    "UEG CYBER: Default", // 01
    // Hidden Valley ////////////////////////
    "COMING SOON", // 02 ## UEG CYBER: HIDDEN VALLEY
    // Overdrive ////////////////////////
    "UEG CYBER: Overdrive", // 03
    // Crystallized ////////////////////////
    "COMING SOON", // 04 UEG CYBER: CRYSTALLIZED
    // Abstract ////////////////////////
    "COMING SOON", // 05 UEG CYBER: ABSTRACT
    // Steampunk ////////////////////////
    "UEG CYBER: Steampunk", // 06
    // Brutal ////////////////////////
    "UEG CYBER: Brutal", // 07
    // Intergalactic ////////////////////////
    "UEG CYBER: Intergalactic", // 08
    // Wonderland ////////////////////////
    "UEG CYBER: Wonderland", // 09
    // Auric ////////////////////////
    "UEG CYBER: Auric", // 10
    // Seasons ////////////////////////
    "COMING SOON", // 11 UEG CYBER: SEASONS
    // Weapons (pt.1) ////////////////////////
    "COMING SOON", // 12 UEG CYBER: WEAPONS
    // Freedom -S- ////////////////////////
    "UEG CYBER -S-: Freedom", // 13
    // -S- ////////////////////////
    "UEG CYBER -S-: Secret", // 14
    // Dev ////////////////////////
    "UEG CYBER -S-: Developers", // 15
    // Special Thanks ////////////////////////
    "UEG CYBER -S-: Special Thanks", // 16
    // Early Supporter ////////////////////////
    "UEG CYBER -S-: Early Supporter", // 17
    // RPG Game 1 ////////////////////////
    "RPG Game: RPG Game 1[C] + 2", // 18
    // RPG Game 2 ////////////////////////
    "RPG Game: RPG Game 2", // 19
    // UEG Legacy ////////////////////////
    "UEG: UEG Legacy", // 20
    // Angenicidal Pack ////////////////////////
    "UEG CYBER -S-: Angenicidal Pack", // 21
)

const skinFileLoc = new Array(
    // Default ////////////////////////
    "textures/ui/skin_categories/category_", // 00
    "textures/ui/skin_categories/category_default", // 01
    // Hidden Valley ////////////////////////
    "textures/ui/skin_categories/category_", // 02 hidden valley
    // Overdrive ////////////////////////
    "textures/ui/skin_categories/category_overdrive", // 03
    // Crystallized ////////////////////////
    "textures/ui/skin_categories/category_", // 04 crystallized
    // Abstract ////////////////////////
    "textures/ui/skin_categories/category_", // 05 abstract
    // Steampunk ////////////////////////
    "textures/ui/skin_categories/category_steampunk", // 06
    // Brutal ////////////////////////
    "textures/ui/skin_categories/category_brutal", // 07
    // Intergalactic ////////////////////////
    "textures/ui/skin_categories/category_intergalactic", // 08
    // Wonderland ////////////////////////
    "textures/ui/skin_categories/category_wonderland", // 09
    // Auric ////////////////////////
    "textures/ui/skin_categories/category_auric", // 10
    // Seasons ////////////////////////
    "textures/ui/skin_categories/category_", // 11 seasons
    // Weapons (pt.1) ////////////////////////
    "textures/ui/skin_categories/category_", // 12 weapons
    // Freedom -S- ////////////////////////
    "textures/ui/skin_categories/category_freedom", // 13/////////////////////////////////////
    // -S- ////////////////////////
    "textures/ui/skin_categories/category_secret", // 14/////////////////////////////
    // Dev ////////////////////////
    "textures/ui/skin_categories/category_developer", // 15//////////////////////////////////
    // Special Thanks ////////////////////////
    "textures/ui/skin_categories/category_special_thanks", // 16/////////////////////////////////
    // Early Supporter ////////////////////////
    "textures/ui/skin_categories/category_early_supporter", // 17////////////////////////////////
    // RPG Game 1 ////////////////////////
    "textures/ui/skin_categories/category_", // 18
    // RPG Game 2 ////////////////////////
    "textures/ui/skin_categories/category_", // 19
    // UEG Legacy ////////////////////////
    "textures/ui/skin_categories/category_", // 20
    // Angenicidal ////////////////////////
    "textures/ui/skin_categories/category_angenicidal", // 21
)

const effectNames = new Array(
    "Default", // 01 (actually 00 and beyond, whoops)
    "Incinerate", // 02
    "Digi-Bit", // 03
    "Auric", // 04
    "Shadow", // 05
    "Electric", // 06
    "Confetti", // 07
    "Nature", // 08
    //"Chromatic" // 09
    //"Smoke Burst", // 10
    //"Baby Storm", // 11
    //"Pure Freedom", // 12
    //"Crimson Thunderbolt", // 13
    //"evel's effect", // 14
    //"rye's effect", // 15
    //"Hopping Trail" // 16
)
const sm = "ScizorM"

const effectDesigners = new Array(
    sm, // 01
    sm, // 02
    sm, // 03
    sm, // 04
    sm, // 05
    sm, // 06
    sm, // 07
    sm, // 08
    sm // 09
    //sm, // 10
    //sm, // 11
    //sm, // 12
    //sm, // 13
    //"evel, " + sm, // 14
    //"zeerye, " + sm, // 15
    //"AubreyThePebble, " + sm // 16
)

