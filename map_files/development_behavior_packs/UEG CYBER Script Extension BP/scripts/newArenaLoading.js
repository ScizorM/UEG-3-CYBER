import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes, StructureManager } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'


/*

Difficulties:

0 - Easy
1 - Normal
2 - Hard
3 - Abstract

Sizes:

0 - Small
1 - Medium
2 - Large
3 - Abstract

*/

system.runInterval(() => {
    var randomizerEnableSB = world.scoreboard.getObjective("arena_randomizer_new")
    var randomizerEnableScore = randomizerEnableSB.getScore("value")
    if (randomizerEnableScore > 0) {
        system.run(() => RandomizeArenaVoteSlots(versionCollection))
        randomizerEnableSB.setScore("value",0)
    }

    var newArenaLoadTriggerSB = world.scoreboard.getObjective("new_arena_load_trigger")
    var newArenaLoadValue = newArenaLoadTriggerSB.getScore("value")
    if (newArenaLoadValue > 0) {
        system.run(() => LoadSelectedArena())
        newArenaLoadTriggerSB.setScore("value",0)
    }

    var processArenaVoteSB = world.scoreboard.getObjective("new_vote_process")
    var processArenaVote = processArenaVoteSB.getScore("value")
    if (processArenaVote > 0) {
        system.run(() => SetVotedArena())
        processArenaVoteSB.setScore("value", 0)
    }
})

class Arena {
    constructor(displayName, creators, remasters, difficulty, size, isDefault, categoryArr, structureName, includeEntitiesPrint, categoryIndexPrint, arenaIndexPrint) {
        this.displayName = displayName;
        this.creators = creators;
        this.remasters = remasters;
        this.difficulty = difficulty;
        this.size = size;
        this.isDefault = isDefault;
        this.includeEntities = includeEntitiesPrint;
        this.category = categoryArr[1];
        this.enabledName = categoryArr[0] + "_" + structureName
        this.filePath = "textures/signs/arenas/" + categoryArr[0] + "/" + structureName
        this.structure = "mystructure:" + categoryArr[0] + "/" + structureName;
        this.categoryIndex = categoryIndexPrint
        this.arenaIndex = arenaIndexPrint
    }

    GetCreators() {
        let output;
        for (var i = 0; i < this.creators.length; i++) {
            if (i == this.creators.length - 1) {
                output += this.creators[i]
            }
            else {
                output += this.creators[i] + ", "
            }
        }
        return output;
    }

    GetRemasters() {
        let output;
        for (var i = 0; i < remasters.length; i++) {
            if (i == remasters.length - 1) {
                output += remasters[i]
            }
            else {
                output += remasters[i] + ", "
            }
        }
        return output;
    }

    DisableArena() {
        let currentScoreboard = world.scoreboard.getObjective("enabled_arenas_new")
        currentScoreboard.setScore(this.enabledName, 0)
    }

    EnableArena() {
        let currentScoreboard = world.scoreboard.getObjective("enabled_arenas_new")
        currentScoreboard.setScore(this.enabledName, 1)
    }

    IsUnlocked() {
        let isUnlocked;
        if (this.isDefault) {
            isUnlocked = true;
        }
        else {

        }
        return isUnlocked;
    }

}

var structureLoadLocation = { x: -159, y: 0, z: 230 }



var creator = {
    scizor:"ScizorM", //0
    eido:"Eido750", //1
    darthmac:"DarthMacJr", //2
    poizon:"PoizonArrow", //3
    teletubby:"Teletubby", //4
    banana:"Bananaman", //5
    aubrey:"AubreyThePebble", //6
    rye:"zeerye", //7
    evel: "evel", //8
    goal: "Goal243", //9
    godly: "Godly_HV",//10
    littlecake: "Little_Cake", //11
    helios: "HeliosTheGoatMan", //12
    gaby: "GabyIsPepper", //13
    spyro: "Spyrotikus", //14
    unknown: "To be determined",
    harbinger: "HARBINGER OF DEATH"
}

var difficulties = [
    "Easy",
    "Normal",
    "Hard",
    "Abstract",
    "12 - MW",
    "HELL"
]

var size = [
    "Small",
    "Medium",
    "Large",
    "Abstract",
    "12 - MW",
    "HELL"
]

var category = {
    ueg1: ["ueg1","UEG 1"],
    uegplus: ["uegplus","UEG PLUS"],
    rpg1: ["rpg1","RPG Game 1"],
    rpg2: ["rpg2","RPG Game 2"],
    uegcyber: ["uegcyber","UEG CYBER"],
    uegcybers: ["uegcybers","UEG CYBER -S-"]
}

var hasRemaster = [
    true,
    true,
    true,
    true,
    false,
    false
]



var ueg1Collection = [
    //Default
    new Arena("Lost City", [creator.scizor, creator.eido, creator.darthmac], [creator.scizor], 1, 1, true, category.ueg1, "lost_city", false, 0, 0),
    new Arena("BlackWhite", [creator.darthmac, creator.scizorm, creator.poizon], [creator.scizor], 0, 1, true, category.ueg1, "blackwhite", false, 0, 1),
    new Arena("Nether", [creator.poizon, creator.scizor], [creator.scizor], 1, 2, true, category.ueg1, "nether", false, 0, 2),
    new Arena("Space", [creator.poizon], [creator.scizor], 1, 2, true, category.ueg1, "space", false, 0, 3),
    new Arena("Western", [creator.banana, creator.poizon, creator.scizor], [creator.scizor], 1, 1, true, category.ueg1, "western", false, 0, 4),
    new Arena("Stronghold", [creator.scizor], [creator.scizor], 1, 1, true, category.ueg1, "stronghold",false, 0, 5),
    //Unlockables
    new Arena("Space Sector", [creator.scizor], [creator.scizor], 1, 1, false, category.ueg1, "space_sector",false, 0, 6),
    new Arena("Retro Maze", [creator.scizor], [creator.scizor], 0, 2, false, category.ueg1, "retro_maze",false, 0,7),
    new Arena("Chaos Void", [creator.scizor], [creator.scizor], 1, 1, false, category.ueg1, "chaos_void",false,0,8),
    new Arena("Abstract", [creator.goal], [creator.scizor], 3, 3, false, category.ueg1, "abstract",false,0,9),
    new Arena("Synthwave", [creator.scizor], [creator.scizor], 0, 2, false, category.ueg1, "synthwave",false,0,10),
    new Arena("The Tower", [creator.poizon], [creator.scizor, creator.poizon], 1, 2, false, category.ueg1, "the_tower",false,0,11)
]

var uegPlusCollection = [
    //Default
    new Arena("Tundra", [creator.banana], [creator.scizor], 1, 1, true, category.uegplus, "tundra", false,1,0),
    new Arena("Aether", [creator.scizor], [creator.scizor], 2, 2, true, category.uegplus, "aether", false,1,1),
    new Arena("PLUS", [creator.poizon], [creator.scizor], 0, 1, true, category.uegplus, "plus", false,1,2),
    new Arena("End", [creator.scizor], [creator.scizor, creator.godly], 2, 1, true, category.uegplus, "end", false,1,3),
    //Unlockables
    new Arena("Circus", [creator.banana], [creator.scizor], 1, 2, false, category.uegplus, "circus", false,1,4),
    new Arena("Beehive", [creator.littlecake], [creator.scizor], 2, 1, false, category.uegplus, "beehive", false,1,5),
    new Arena("Dark Forest", [creator.scizor], [creator.scizor], 1, 1, false, category.uegplus, "dark_forest", false,1,6),
    new Arena("DigiGlobe", [creator.scizor], [creator.scizor], 2, 0, false, category.uegplus, "digiglobe", false,1,7),
    new Arena("Crystal Cave", [creator.scizor], [creator.scizor, creator.aubrey], 1, 1, false, category.uegplus, "crystal_cave", false,1,8),
    new Arena("Pendual", [creator.scizor], [creator.scizor], 2, 0, false, category.uegplus, "pendual", false,1,9)
]

var rpg1Collection = [
    //Unlockables
    new Arena("Murkopolis", [creator.poizon, creator.scizor, creator.helios], [creator.scizor, creator.poizon], 0, 2, false, category.rpg1, "murkopolis",false,2,0),
    new Arena("Aquatica", [creator.poizon, creator.scizor], [creator.scizor, creator.poizon], 0, 2, false, category.rpg1, "aquatica",false,2,1),
    new Arena("Conflict", [creator.scizor, creator.poizon, creator.littlecake], [creator.scizor], 0, 2, false, category.rpg1, "conflict",false,2,2),
    new Arena("Shaparium", [creator.poizon, creator.scizor, creator.gaby], [creator.scizor, creator.poizon, creator.gaby], 0, 2, false, category.rpg1, "shaparium",false,2,3),
    new Arena("Kyoto", [creator.scizor, creator.banana, creator.poizon], [creator.scizor, creator.banana, creator.poizon], 0, 2, false, category.rpg1, "kyoto",false,2,4),
    new Arena("Overlord", [creator.poizon], [creator.poizon], 1, 2, false, category.rpg1, "overlord",false,2,5)
]

var rpg2Collection = [
    //Unlockables
    new Arena("Shadow Forest", [creator.rye, creator.scizor, creator.poizon], [creator.scizor, creator.rye], 1, 2, false, category.rpg2, "shadow_forest",false,3,0),
    new Arena("Magic Forest", [creator.rye, creator.scizor, creator.littlecake], [creator.scizor, creator.rye, creator.littlecake], 0, 2, false, category.rpg2, "magic_forest",false,3,1)
]

var uegCyberCollection = [
    //Default
    new Arena("Playground", [creator.aubrey, creator.scizor], undefined, 1, 1, true, category.uegcyber, "playground",false,4,0),
    new Arena("Jurassic", [creator.aubrey, creator.scizor], undefined, 1, 1, true, category.uegcyber, "jurassic",false,4,1),
    new Arena("Egypt", [creator.aubrey, creator.scizor], undefined, 0, 2, true, category.uegcyber, "egypt",false,4,2),
    new Arena("Cyberspace", [creator.scizor], undefined, 1, 2, true, category.uegcyber, "cyberspace",false,4,3),
    new Arena("Vaporwave", [creator.scizor], undefined, 0, 2, true, category.uegcyber, "vaporwave",false,4,4),
    new Arena("Chess", [creator.aubrey, creator.scizor], undefined, 0, 1, true, category.uegcyber, "chess",false,4,5),
    new Arena("Deep Dark", [creator.scizor], undefined, 2, 1, true, category.uegcyber, "deep_dark",false,4,6),
    //Unlockables
    new Arena("Amusement Park", [creator.scizor, creator.aubrey], undefined, 2, 1, false, category.uegcyber, "amusement_park",true,4,7),
    new Arena("Candyland", [creator.evel], undefined, 2, 0, false, category.uegcyber, "candyland",false,4,8),
    new Arena("Battlefield", [creator.unknown], undefined, 3, 3, false, category.uegcyber, "battlefield",false,4,9),
    new Arena("Not Gambling", [creator.scizor], undefined, 3, 3, false, category.uegcyber, "not_gambling",true,4,10),
    new Arena("Arcade", [creator.scizor], undefined, 2, 2, false, category.uegcyber, "arcade",false,4,11),
    new Arena("Computer Virus", [creator.unknown], undefined, 3, 3, false, category.uegcyber, "computer_virus",false,4,12),
    new Arena("The Line", [creator.scizor], undefined, 2, 0, false, category.uegcyber, "the_line",false,4,13),
    new Arena("McRye's", [creator.rye], undefined, 1, 1, false, category.uegcyber, "mcryes",false,4,14),
    new Arena("Mole Life", [creator.scizor], undefined, 2, 2, false, category.uegcyber, "mole_life",false,4,15),
    new Arena("Race Track", [creator.aubrey], undefined, 1, 1, false, category.uegcyber, "race_track",false,4,16),
    new Arena("Touch of Midas", [creator.spyro], undefined, 1, 1, false, category.uegcyber, "touch_of_midas",false,4,17),
    new Arena("Amethyst Domain", [creator.unknown], undefined, 3, 3, false, category.uegcyber, "amethyst_domain",false,4,18)
]

var uegCyberSCollection = [
    //Unlockables
    new Arena("Mike's Way", [creator.rye], undefined, 5, 5, false, category.uegcybers, "mikes_way",false,5,0),
    new Arena("Bananaland Bouncehouse", [creator.rye], undefined, 6, 0, false, category.uegcybers, "bananaland_bouncehou",false,5,1),
    new Arena("ABS:CYBER", [creator.scizor], undefined, 3, 3, false, category.uegcybers, "abstract_cyber",true,5,2),
    new Arena("shrek on crack", [creator.harbinger], undefined, 6, 6, false, category.uegcybers, "shrek_on",true,5,3),
    new Arena("hog_metro_hq", [creator.unknown], undefined, 4, 4, false, category.uegcybers, "hog_metro_hq",false,5,4)

]

var versionCollection = [
    ueg1Collection, uegPlusCollection, rpg1Collection, rpg2Collection, uegCyberCollection, uegCyberSCollection
]

world.beforeEvents.itemUse.subscribe(data => {

    const player = data.source




    if (data.itemStack.typeId === "sm:settings" && player.hasTag("enter_splendid") == false && player.hasTag("enter_marque") == false && !player.hasTag("debug_randomize")) {

        world.sendMessage(ueg1Collection.length.toString())

        system.run(() => LoadArenaInterface(player))

    }
    else if (player.hasTag("debug_randomize")) {

        system.run(() => RandomizeArenaVoteSlots(versionCollection))

    }
    else if (player.hasTag("debug_enableAll")) {
        versionCollection.forEach(category => {
            system.run(() => MassToggleCategory(category, 1))

        })
        player.sendMessage("don't forget to remove the debug tag.")
        
    }



})

function LoadArenaInterface(player) {
    let form = new ModalFormData()
    let categories = [ category.ueg1[1], category.uegplus[1], category.rpg1[1], category.rpg2[1], category.uegcyber[1], category.uegcybers[1]]
    form.title("Effect Generator");
    form.dropdown("Category", categories)
    form.textField("Arena ID", "Arena ID (Please type a number)")
    form.toggle("Hide Effect Particle", true)
    form.show(player).then(r => {

        let [dropdown, textField] = r.formValues;

        let parsedTextField = parseInt(textField.trim())

        if (!isNaN(parsedTextField)) {
            LoadSelectedArena(r.formValues[0],parsedTextField)
        }
        else {

        }

        

    })
}



function GetArenasCount(versionCollection, unlockOrEnable) { //0 if check for unlock, 1 for check for enable
    let arenaCount = 0;
    var arenaArr = [];
    world.sendMessage("pre-arena count: " + arenaCount.toString())
    world.sendMessage(versionCollection.length.toString() + " <- version collection length")
    for (let j = 0; j < versionCollection.length - 1; j++) { //someone once tried correcting me about doing this, I do not feel like finding an alternative right now, this goes out to you if you know who you are (it isn't moore, you're fine)
        for (let i = 0; i < versionCollection[j].length - 1; i++) {
            let arena = versionCollection[j][i]
            var currentScoreboard;
            if (unlockOrEnable == 0) {
                currentScoreboard = world.scoreboard.getObjective("enabled_arenas_new")
            }
            else {
                currentScoreboard = world.scoreboard.getObjective("unlocked_arenas_new")
                if (arena.isDefault) {
                    currentScoreboard.setScore(arena.enabledName, 1)
                }
            }
            currentScoreboard.addScore(arena.enabledName, 0)
            let currentArena = currentScoreboard.getScore(arena.enabledName)
            if (currentArena > 0) {
                arenaCount++;
                arenaArr.push(arena)
            }
        }
    }
    world.sendMessage("arena count total: " + arenaCount.toString())
    return arenaArr;
}


function MassToggleCategory(category,toggleVal) { //send 0 through toggleVal if disable, 1 if enable
    for (let i = 0; i < category.length - 1; i++) {
        let arena = category[i]
        let currentScoreboard = world.scoreboard.getObjective("enabled_arenas_new")
        currentScoreboard.setScore(arena.enabledName, toggleVal)
    }
}



function LoadSelectedArena() {
    let storedArenaSB = world.scoreboard.getObjective("arena_to_load")
    let storedArenaID = storedArenaSB.getScore("arena_id")
    let storedArenaCategory = storedArenaSB.getScore("arena_category")
    world.sendMessage(versionCollection[storedArenaCategory][storedArenaID].structure)
    world.structureManager.place(versionCollection[storedArenaCategory][storedArenaID].structure, world.getDimension("overworld"), structureLoadLocation, { includeEntities: versionCollection[storedArenaCategory][storedArenaID].includeEntities })
}

function RandomizeArenaVoteSlots(versionCollection) {
    let enabledArenas = [];
    let random1 = 0;
    let random2 = 0;
    let random3 = 0;
    enabledArenas = GetArenasCount(versionCollection, 0)
    world.sendMessage("current number of enabled arenas: " + enabledArenas.length)
    enabledArenas.forEach(arena => {
        world.sendMessage(arena.displayName)
    })
    random1 = Math.floor(Math.random() * enabledArenas.length)
    world.sendMessage(random1.toString())
    world.sendMessage("random slot 1: " + enabledArenas[random1].displayName.toString())
    if (enabledArenas.length >= 3) {
        random2 = Math.floor(Math.random() * enabledArenas.length)
        for (var i = 0; random1 == random2; i++) {
            random2 = Math.floor(Math.random() * enabledArenas.length)
        }
        world.sendMessage("random slot 2: " + enabledArenas[random2].displayName.toString())
        random3 = Math.floor(Math.random() * enabledArenas.length)
        while (random1 == random3 || random2 == random3) {
            random3 = Math.floor(Math.random() * enabledArenas.length)
            if (random1 != random3 && random2 != random3) {
                break;
            }
        }
        world.sendMessage("random slot 3: " + enabledArenas[random3].displayName.toString())
    }
    else {
        random2 = random1;
        random3 = random1
    }
    var randomArr = [random1, random2, random3]
    let storedArenasSB = world.scoreboard.getObjective("new_stored_arenas_vote")
    let sbStoredNames = ["arena_1_id","arena_2_id","arena_3_id","arena_1_category","arena_2_category","arena_3_category"]
    let sbStored = [storedArenasSB.getScore("arena_1_id"), storedArenasSB.getScore("arena_2_id"), storedArenasSB.getScore("arena_3_id"), storedArenasSB.getScore("arena_1_category"), storedArenasSB.getScore("arena_2_category"), storedArenasSB.getScore("arena_3_category")]
    let coordCmds = ["execute positioned -50 1 133 run event entity @e[r=1] ", "execute positioned -50 1 140 run event entity @e[r=1] ","execute positioned -50 1 147 run event entity @e[r=1] "]
    for (var i = 0; i < 3; i++) {
        world.getDimension("overworld").runCommand(coordCmds[i] + "remove_all")
        world.sendMessage(coordCmds[i] + enabledArenas[randomArr[i]].enabledName)
        world.getDimension("overworld").runCommand(coordCmds[i] + enabledArenas[randomArr[i]].enabledName)
        storedArenasSB.setScore(sbStoredNames[i], enabledArenas[randomArr[i]].arenaIndex)
        storedArenasSB.setScore(sbStoredNames[i + 3], enabledArenas[randomArr[i]].categoryIndex)
    }

}

function SetVotedArena() {
    let arenaVoteSB = world.scoreboard.getObjective("arena_vote")
    let arenaOne = arenaVoteSB.getScore("arena_1")
    let arenaTwo = arenaVoteSB.getScore("arena_2")
    let arenaThree = arenaVoteSB.getScore("arena_3")

    let storedArenasSB = world.scoreboard.getObjective("new_stored_arenas_vote")
    let storedArenaIndexes = [storedArenasSB.getScore("arena_1_id"), storedArenasSB.getScore("arena_2_id"), storedArenasSB.getScore("arena_3_id")]
    let storedCategoryIndexes = [storedArenasSB.getScore("arena_1_category"), storedArenasSB.getScore("arena_2_category"), storedArenasSB.getScore("arena_3_category")]

    let storedArenaSB = world.scoreboard.getObjective("arena_to_load")
    let storedArenaID = storedArenaSB.getScore("arena_id")
    let storedArenaCategory = storedArenaSB.getScore("arena_category")

    let arenas = [versionCollection[storedCategoryIndexes[0]][storedArenaIndexes[0]], versionCollection[storedCategoryIndexes[1]][storedArenaIndexes[1]], versionCollection[storedCategoryIndexes[2]][storedArenaIndexes[2]]]

    if (arenaOne > arenaTwo && arenaOne > arenaThree) {

        SendLoadedArenaMessage(arenas[0])
        storedArenaSB.SetScore("arena_id", storedArenaIndexes[0])
        storedArenaSB.SetScore("arena_category", storedCategoryIndexes[0])
    }
    else if (arenaTwo > arenaOne && arenaTwo > arenaThree) {
        SendLoadedArenaMessage(arenas[1])
        storedArenaSB.SetScore("arena_id", storedArenaIndexes[1])
        storedArenaSB.SetScore("arena_category", storedCategoryIndexes[1])
    }
    else if (arenaThree > arenaOne && arenaThree > arenaTwo) {
        SendLoadedArenaMessage(arenas[2])
        storedArenaSB.SetScore("arena_id", storedArenaIndexes[2])
        storedArenaSB.SetScore("arena_category", storedCategoryIndexes[2])
    }
    else if (arenaOne == arenaTwo && arenaOne > arenaThree) {
        let randomSelector = Math.floor(Math.random() * 9)
        if (randomSelector > 4) {
            SendLoadedArenaMessage(arenas[1])
            storedArenaSB.SetScore("arena_id", storedArenaIndexes[1])
            storedArenaSB.SetScore("arena_category", storedCategoryIndexes[1])
        }
        else {
            SendLoadedArenaMessage(arenas[0])
            storedArenaSB.SetScore("arena_id", storedArenaIndexes[0])
            storedArenaSB.SetScore("arena_category", storedCategoryIndexes[0])
        }
    }
    else if (arenaOne == arenaThree && arenaOne > arenaTwo) {
        let randomSelector = Math.floor(Math.random() * 9)
        if (randomSelector > 4) {
            SendLoadedArenaMessage(arenas[2])
            storedArenaSB.SetScore("arena_id", storedArenaIndexes[2])
            storedArenaSB.SetScore("arena_category", storedCategoryIndexes[2])
        }
        else {
            SendLoadedArenaMessage(arenas[0])
            storedArenaSB.SetScore("arena_id", storedArenaIndexes[0])
            storedArenaSB.SetScore("arena_category", storedCategoryIndexes[0])
        }
    }
    else if (arenaTwo == arenaThree && arenaTwo > arenaOne) {
        let randomSelector = Math.floor(Math.random() * 9)
        if (randomSelector > 4) {
            SendLoadedArenaMessage(arenas[1])
            storedArenaSB.SetScore("arena_id", storedArenaIndexes[1])
            storedArenaSB.SetScore("arena_category", storedCategoryIndexes[1])
        }
        else {
            SendLoadedArenaMessage(arenas[2])
            storedArenaSB.SetScore("arena_id", storedArenaIndexes[2])
            storedArenaSB.SetScore("arena_category", storedCategoryIndexes[2])
        }
    }
    else if (arenaOne == arenaTwo == arenaThree) {
        let randomSelector = Math.floor(Math.random() * 12)
        if (randomSelector > 8) {
            SendLoadedArenaMessage(arenas[2])
            storedArenaSB.SetScore("arena_id", storedArenaIndexes[2])
            storedArenaSB.SetScore("arena_category", storedCategoryIndexes[2])
        }
        else if (randomSelector > 4) {
            SendLoadedArenaMessage(arenas[1])
            storedArenaSB.SetScore("arena_id", storedArenaIndexes[1])
            storedArenaSB.SetScore("arena_category", storedCategoryIndexes[1])
        }
        else {
            SendLoadedArenaMessage(arenas[0])
            storedArenaSB.SetScore("arena_id", storedArenaIndexes[0])
            storedArenaSB.SetScore("arena_category", storedCategoryIndexes[0])
        }
    }
}

function SendLoadedArenaMessage(arenaObj) {
    let arenaStr = "Selected Arena: " + arenaObj.displayName
    if (arenaObj.hasRemaster) {
        arenaStr += "\nOriginal Creator(s): " + arenaObj.GetCreators()
        arenaStr += "\nRemaster: " + arenaObj.GetRemasters()
    }
    else {
        arenaStr += "\nCreator(s): " + arenaObj.GetCreators()
    }
    arenaStr += "\nDifficulty: " + difficulties[arenaObj.difficulty]
    arenaStr += "\nSize: " + size[arenaObj.size]

    world.sendMessage(arenaStr)
}