import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
export { skinList, designerList, skinSet, skinSet_over, skinFileLoc }

const skinList = new Array(
    // Default ////////////////////////
    "No Skin", // 00
    "Recruit", // 01
    "Acid Specialist", // 02
    "Amethyst Warrior", // 03
    "Sound Goddess", // 04
    "Starlight Unit", // 05
    "Red Oni", // 06
    "Conduit", // 07
    "08 - Unfinished", // 08
    "09 - Unfinished", // 09
    "10 - Unfinished", // 10
    "11 - Unfinished", // 11
    "12 - Unfinished", // 12
    // Hidden Valley ////////////////////////
    "Mirage", // 13
    "14 - Unfinished", // 14
    "15 - Unfinished", // 15
    // Overdrive ////////////////////////
    "Heavy Weapons System", // 16
    "Maxibooster", // 17
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
    "25 - Unfinished", // 25
    "26 - Unfinished", // 26
    "27 - Unfinished", // 27
    // Brutal ////////////////////////
    "28 - Unfinished", // 28
    "29 - Unfinished", // 29
    "30 - Unfinished", // 30
    // Intergalactic ////////////////////////
    "31 - Unfinished", // 31
    "32 - Unfinished", // 32
    "33 - Unfinished", // 33
    // Wonderland ////////////////////////
    "Gummy Contraption", // 34
    "Ringmaster", // 35
    "36 - Unfinished", // 36
    // Auric ////////////////////////
    "Golden Striker", // 37
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
    "Cheeseburger Freedom Man", // 46
    "Cheeseburger Freedom Man's Father", // 47
    "Cheeseburger Freedom Man's Mother", // 48
    // -S- ////////////////////////
    "Baby who has an extremely cigarette-looking rocket securely strapped to its back in an unsafe manner", // 49
    "Big Joe", // 50
    "Gundam Astray Red Frame", // 51
    // Dev ////////////////////////
    "ScizorM", // 52
    "zeerye", // 53
    "AubreyThePebble", // 54
    "evel", // 55
    // Special Thanks ////////////////////////
    "Torimoti Armor", // 56
    // Early Supporter ////////////////////////
    "57 - Incomplete", // 57
    // RPG Game 1 ////////////////////////
    "Robot (Cyberized)", // 58
    "Demon (Cyberized)", // 59
    "Spectral (Cyberized)", // 60
    "Elf (Cyberized)", // 61
    "Golem (Cyberized)", // 62
    "Shaparium Robot", // 63
    "64 - Unfinished", // 64
    "65 - Unfinished", // 65
    "66 - Unfinished", // 66
    // RPG Game 2 ////////////////////////
    "Shadow Elf", // 67
    "Shadow King", // 68
    "Poncho", // 69
    "Mushroom Person", // 70
    "Chrysan", // 71
    "Lilith", // 72
    // UEG Legacy ////////////////////////
    "Demolitionist", // 73
    "Demolition Knight", // 74
    "UEG Red Recruit", // 75
    // Weapons pt.2 ////////////////////////
    "Utility Class", // 76
    "Secret Class", // 77
    "Omni Class" // 78
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
    "08 - Unfinished", // 08
    "09 - Unfinished", // 09
    "10 - Unfinished", // 10
    "11 - Unfinished", // 11
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
    "25 - Unfinished", // 25
    "26 - Unfinished", // 26
    "27 - Unfinished", // 27
    // Brutal ////////////////////////
    "28 - Unfinished", // 28
    "29 - Unfinished", // 29
    "30 - Unfinished", // 30
    // Intergalactic ////////////////////////
    "31 - Unfinished", // 31
    "32 - Unfinished", // 32
    "33 - Unfinished", // 33
    // Wonderland ////////////////////////
    "AubreyThePebble", // 34
    "evel", // 35
    "36 - Unfinished", // 36
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
    "Reference: Vargskelethor Joel, ScizorM", // 46
    "ScizorM", // 47
    "ScizorM", // 48
    // -S- ////////////////////////
    "ScizorM", // 49
    "zeerye", // 50
    "Reference: Mobile Suit Gundam, ScizorM", // 51
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
    "Elf (Cyberized)", // 61
    "Golem (Cyberized)", // 62
    "ScizorM", // 63
    "64 - Unfinished", // 64
    "65 - Unfinished", // 65
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
    "Omni Class" // 78
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
    "UEG CYBER: Weapons" // 78
)

const skinSet_over = new Array(
    // Default ////////////////////////
    "No Set", // 00
    "UEG CYBER: Default", // 01
    // Hidden Valley ////////////////////////
    "UEG CYBER: Hidden Valley", // 02
    // Overdrive ////////////////////////
    "UEG CYBER: Overdrive", // 03
    // Crystallized ////////////////////////
    "UEG CYBER: Crystallized", // 04
    // Abstract ////////////////////////
    "UEG CYBER: Abstract", // 05
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
    "UEG CYBER: Seasons", // 11
    // Weapons (pt.1) ////////////////////////
    "UEG CYBER: Weapons", // 12
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
    "RPG Game: RPG Game Cyberized", // 18
    // RPG Game 2 ////////////////////////
    "RPG Game: RPG Game 2", // 19
    // UEG Legacy ////////////////////////
    "UEG: UEG Legacy", // 20
)

const skinFileLoc = new Array(
    // Default ////////////////////////
    "textures/ui/skin_categories/category_", // 00
    "textures/ui/skin_categories/category_default", // 01
    // Hidden Valley ////////////////////////
    "textures/ui/skin_categories/category_hidden_valley", // 02
    // Overdrive ////////////////////////
    "textures/ui/skin_categories/category_overdrive", // 03
    // Crystallized ////////////////////////
    "textures/ui/skin_categories/category_crystallized", // 04
    // Abstract ////////////////////////
    "textures/ui/skin_categories/category_", // 05
    // Steampunk ////////////////////////
    "textures/ui/skin_categories/category_", // 06
    // Brutal ////////////////////////
    "textures/ui/skin_categories/category_", // 07
    // Intergalactic ////////////////////////
    "textures/ui/skin_categories/category_", // 08
    // Wonderland ////////////////////////
    "textures/ui/skin_categories/category_", // 09
    // Auric ////////////////////////
    "textures/ui/skin_categories/category_", // 10
    // Seasons ////////////////////////
    "textures/ui/skin_categories/category_", // 11
    // Weapons (pt.1) ////////////////////////
    "textures/ui/skin_categories/category_", // 12
    // Freedom -S- ////////////////////////
    "textures/ui/skin_categories/category_", // 13/////////////////////////////////////
    // -S- ////////////////////////
    "textures/ui/skin_categories/category_secret", // 14/////////////////////////////
    // Dev ////////////////////////
    "textures/ui/skin_categories/category_", // 15//////////////////////////////////
    // Special Thanks ////////////////////////
    "textures/ui/skin_categories/category_", // 16/////////////////////////////////
    // Early Supporter ////////////////////////
    "textures/ui/skin_categories/category_", // 17////////////////////////////////
    // RPG Game 1 ////////////////////////
    "textures/ui/skin_categories/category_", // 18
    // RPG Game 2 ////////////////////////
    "textures/ui/skin_categories/category_", // 19
    // UEG Legacy ////////////////////////
    "textures/ui/skin_categories/category_", // 20
)

const effectNames = new Array(
    "No Effect", // 00
    "Default", // 01
    "Incinerate", // 02
    "Digi-Bit", // 03
    "Auric", // 04
    "Shadow", // 05
    "Electric", // 06
    "Confetti", // 07
    "Nature", // 08
    "Chromatic", // 09
    "Smoke Burst", // 10
    "Baby Storm", // 11
    "Pure Freedom", // 12
    "Crimson Thunderbolt", // 13
    "evel's effect", // 14
    "rye's effect", // 15
    "Hopping Trail" // 16
)
const sm = "ScizorM"

const effectDesigners = new Array(
    "No Designer", // 00
    sm, // 01
    sm, // 02
    sm, // 03
    sm, // 04
    sm, // 05
    sm, // 06
    sm, // 07
    sm, // 08
    sm, // 09
    sm, // 10
    sm, // 11
    sm, // 12
    sm, // 13
    "evel, " + sm, // 14
    "zeerye, " + sm, // 15
    "AubreyThePebble, " + sm // 16
)

