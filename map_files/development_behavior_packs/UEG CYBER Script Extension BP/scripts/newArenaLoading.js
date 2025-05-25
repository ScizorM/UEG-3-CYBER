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

world.beforeEvents.itemUse.subscribe(data => {

    const player = data.source




    if (data.itemStack.typeId === "sm:settings" && player.hasTag("enter_splendid") == false && player.hasTag("enter_marque") == false && !player.hasTag("debug_randomize")) {

        system.run(() => GetArenasCount(versionCollection, 0))
        system.run(() => GetArenasCount(versionCollection, 1))
        system.run(() => GetArenasCount(versionCollection, 2))
        system.run(() => GetArenasCount(versionCollection, 3))
        system.run(() => GetArenasCount(versionCollection, 4))
        system.run(() => GetArenasCount(versionCollection, 5))

        //system.run(() => LoadArenaInterface(player))
        system.run(() => ArenaStoreMenu(player))

    }
    else if (player.hasTag("arenaDebugMenu")) {
        system.run(() => DebugArenaInterface(player))
        player.sendMessage("don't forget to remove the debug tag.")
    }
    else if (player.hasTag("debug_randomize")) {

        system.run(() => RandomizeArenaVoteSlots(versionCollection))
        player.sendMessage("don't forget to remove the debug tag.")
    }
    else if (player.hasTag("debug_enableAll")) {
        versionCollection.forEach(category => {
            system.run(() => MassToggleCategory(category, 1))

        })
        player.sendMessage("don't forget to remove the debug tag.")

    }
    else if (player.hasTag("debug_unlockAll")) {
        versionCollection.forEach(category => {
            system.run(() => DebugUnlockAllArenas(1))

        })
        player.sendMessage("don't forget to remove the debug tag.")

    }
    else if (player.hasTag("debug_loadVoted")) {
        system.run(() => {
            SetVotedArena()
        })
        player.sendMessage("don't forget to remove the debug tag.")
    }



})

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

    var processArenaVoteSB = world.scoreboard.getObjective("new_arena_vote_process")
    var processArenaVote = processArenaVoteSB.getScore("value")
    if (processArenaVote > 0) {
        system.run(() => SetVotedArena())
        processArenaVoteSB.setScore("value", 0)
    }
})

class Arena {
    constructor(displayName, creatorsList, remastersList, difficulty, size, isDefault, categoryArr, structureName, includeEntitiesPrint, categoryIndexPrint, arenaIndexPrint) {
        this.displayName = displayName;
        this.creators = []
        this.creators.push(creatorsList)
        this.remasters = []
        this.remasters.push(remastersList)
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
        if (this.creators.length == 1) {
            output = this.creators[0]
        }
        else {
            for (var i = 0; i < this.creators.length; i++) {
                if (i == this.creators.length - 1) {
                    output += this.creators[i]
                }
                else {
                    output += this.creators[i] + ", "
                }
            }
        }

        return output;
    }

    GetRemasters() {
        let output;
        if (this.remasters.length == 1) {
            output = this.remasters[0]
        }
        else {
            for (var i = 0; i < this.remasters.length; i++) {
                if (i == this.remasters.length - 1) {
                    output += this.remasters[i]

                }
                else {
                    output += this.remasters[i] + ", "
                }
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
    ueg1: ["ueg1","UEG 1","textures/ui/button_ueg1"],
    uegplus: ["uegplus","UEG PLUS","textures/ui/button_uegplus"],
    rpg1: ["rpg1","RPG Game 1","textures/ui/button_rpg1"],
    rpg2: ["rpg2","RPG Game 2","textures/ui/button_rpg2"],
    uegcyber: ["uegcyber","UEG CYBER", "textures/ui/button_cyber"],
    uegcybers: ["uegcybers","UEG CYBER -S-", "textures/ui/button_cyber_s"]
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
    new Arena("BlackWhite", [creator.darthmac, creator.scizor, creator.poizon], [creator.scizor], 0, 1, true, category.ueg1, "blackwhite", false, 0, 1),
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
    new Arena("Battlefield", [creator.scizor], undefined, 2, 1, false, category.uegcyber, "battlefield",false,4,9),
    new Arena("Not Gambling", [creator.scizor], undefined, 1, 2, false, category.uegcyber, "not_gambling",true,4,10),
    new Arena("Arcade", [creator.scizor], undefined, 2, 2, false, category.uegcyber, "arcade",false,4,11),
    new Arena("Computer Virus", [creator.scizor], undefined, 2, 1, false, category.uegcyber, "computer_virus",false,4,12),
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

var allArenas = [...ueg1Collection, ...uegPlusCollection, ...rpg1Collection, ...rpg2Collection, ...uegCyberCollection, ...uegCyberSCollection]

function GetArenaFromID(id, category) {
    let arenaReturn;
    allArenas.forEach(arena => {
        if (arena.arenaIndex == id && arena.categoryIndex == category) {
            arenaReturn = arena;
            world.sendMessage(arenaReturn.displayName + " = " + arena.displayName)
        }
    })
    return arenaReturn;
}
function ArenaStoreMenu(player) {
    var playerArenaSortSB = world.scoreboard.getObjective("player_arena_sort")
    playerArenaSortSB.addScore(player, 0)
    var playerArenaSortPlayer = playerArenaSortSB.getScore(player)
    /*
    *   0 - version
    *   1 - size
    *   2 - difficulty
    *   3 - all unlocked
    */

    let form = new ActionFormData();
    if (playerArenaSortPlayer == 0) {
        form.title("Arena Select");
        form.body("");
        form.button("Sort By: Series", "textures/ui/button_sort");
        //world.sendMessage(Object.keys(category).length.toString())
        for (var i = 0; i < (Object.keys(category).length - 1); i++) {
            form.button(Object.values(category)[i][1], Object.values(category)[i][2]);
        }

        form.button("Cancel", "textures/ui/button_close");

        form.show(player).then(r => {

            let responseValue = r.selection

            switch (responseValue) {
                case 0:
                    playerArenaSortSB.setScore(player, 1)
                    system.run(() => ArenaStoreMenu(player))
                    break;
                case 1:
                    system.run(() => ArenaMenu(player, ueg1Collection))
                    break;
                case 2:
                    system.run(() => ArenaMenu(player, uegPlusCollection))
                    break;
                case 3:
                    system.run(() => ArenaMenu(player,rpg1Collection))
                    break;
                case 4:
                    system.run(() => ArenaMenu(player,rpg2Collection))
                    break;
                case 5:
                    system.run(() => ArenaMenu(player,uegCyberCollection))
                    break;

            }

            //if (responseValue == 0) {
            //    system.run(() => mainArenaPageUEG(player))
            //}
            //else if (responseValue == 1) {
            //    system.run(() => mainArenaPageRPG(player))
            //}




        })
    }
    if (playerArenaSortPlayer == 2) {
        form.title("Arena Select");
        form.body("");
        form.button("Sort By: Size", "textures/ui/button_sort");
        form.button("Small", "textures/ui/button_small");
        form.button("Medium", "textures/ui/button_medium");
        form.button("Large", "textures/ui/button_large");
        form.button("Other", "textures/ui/button_size_unknown");

        form.button("Cancel", "textures/ui/button_close");

        form.show(player).then(r => {

            let responseValue = r.selection

            switch (responseValue) {
                case 0:
                    playerArenaSortSB.setScore(player, 0)
                    system.run(() => ArenaStoreMenu(player))
                    break;
                case 1:
                    system.run(() => PreProcessArenaList(player,1,0))
                    break;
                case 2:
                    system.run(() => PreProcessArenaList(player, 1,1))
                    break;
                case 3:
                    system.run(() => PreProcessArenaList(player, 1, 2))
                    break;
                case 4:
                    system.run(() => PreProcessArenaList(player, 1, 3, 4, 5))
                    break;
            }

            //if (responseValue == 0) {
            //    system.run(() => mainArenaPageUEG(player))
            //}
            //else if (responseValue == 1) {
            //    system.run(() => mainArenaPageRPG(player))
            //}




        })
    }
    if (playerArenaSortPlayer == 1) {
        form.title("Arena Select");
        form.body("");

        form.button("Sort By: Difficulty", "textures/ui/button_sort");
        form.button("Easy", "textures/ui/button_easy");
        form.button("Normal", "textures/ui/button_normal");
        form.button("Hard", "textures/ui/button_hard");
        form.button("Other", "textures/ui/button_difficulty_unknown");


        form.button("Cancel", "textures/ui/button_close");

        form.show(player).then(r => {

            let responseValue = r.selection

            switch (responseValue) {
                case 0:
                    playerArenaSortSB.setScore(player, 2)
                    system.run(() => ArenaStoreMenu(player))
                    break;
                case 1:
                    system.run(() => PreProcessArenaList(player, 0, 0))
                    break;
                case 2:
                    system.run(() => PreProcessArenaList(player, 0, 1))
                    break;
                case 3:
                    system.run(() => PreProcessArenaList(player, 0, 2))
                    break;
                case 4:
                    system.run(() => PreProcessArenaList(player, 0, 3, 4, 5))
                    break;

            }


            //if (responseValue == 0) {
            //    system.run(() => mainArenaPageUEG(player))
            //}
            //else if (responseValue == 1) {
            //    system.run(() => mainArenaPageRPG(player))
            //}




        })
    }

}

function PreProcessArenaList(player, isDifficultyOrSize, criteria, criteria2, criteria3, criteria4) { //0 = difficulty, 1 = size
    var unlockedArenaSB = world.scoreboard.getObjective("unlocked_arenas_new")
    var arenaCollection = [];
    if (isDifficultyOrSize == 0) {
        allArenas.forEach(arena => {

            if (arena.difficulty == criteria) {
                arenaCollection.push(arena)
            }
            else if (criteria2 != undefined) {
                if (arena.difficulty == criteria2) {
                    arenaCollection.push(arena)
                }
            }
            else if (criteria3 != undefined) {
                if (arena.difficulty == criteria3) {
                    arenaCollection.push(arena)
                }
            }
            else if (criteria4 != undefined) {
                if (arena.difficulty == criteria4) {
                    arenaCollection.push(arena)
                }
            }
        })
    }
    else {
        allArenas.forEach(arena => {
            if (arena.size == criteria) {
                arenaCollection.push(arena)
                //world.sendMessage(arena.displayName)
            }
            else if (criteria2 != undefined) {
                if (arena.difficulty == criteria2) {
                    arenaCollection.push(arena)
                }
            }
            else if (criteria3 != undefined) {
                if (arena.difficulty == criteria3) {
                    arenaCollection.push(arena)
                }
            }
            else if (criteria4 != undefined) {
                if (arena.difficulty == criteria4) {
                    arenaCollection.push(arena)
                }
            }
        })
    }
    system.run(() => ArenaMenu(player,arenaCollection))
}

function ArenaInfo(player, arena, arenaCategory) {
    var arenaVoteEnabledSB = world.scoreboard.getObjective("arena_vote_enabled")
    var arenaVoteEnabledScore = arenaVoteEnabledSB.getScore("boolean")
    var enabledArenasNewSB = world.scoreboard.getObjective("enabled_arenas_new")
    var arenaEnabled = enabledArenasNewSB.getScore(arena.enabledName)
    var arenaToLoadSB = world.scoreboard.getObjective("arena_to_load_new")
    var arenaToLoadID = arenaToLoadSB.getScore("arena_id")
    var arenaToLoadCategory = arenaToLoadSB.getScore("arena_category")
    let form = new MessageFormData();
    form.title(arena.displayName);
    let message = "";
    let buttonMessage = "";
    if (arena.GetRemasters() != undefined) {
        message += `Original Creator(s): ${arena.GetCreators()}\nRemaster: ${arena.GetRemasters()}\nDifficulty: ${difficulties[arena.difficulty]}\nSize: ${size[arena.size]}`
    }
    else {
        message += `Creator(s): ${arena.GetCreators()}\nDifficulty: ${difficulties[arena.difficulty]}\nSize: ${size[arena.size]}`
    }

    if (arenaVoteEnabledScore == 1) {
        message += `\nEnabled? `

        if (arenaEnabled > 0) {
            message += "Yes"
        }
        else {
            message += "No"
        }
        buttonMessage += "Toggle Arena"
    }
    else {
        message += `\nSelected? `
        if (arenaToLoadID == arena.arenaIndex && arenaToLoadCategory == arena.arenaCategory) {
            message += "Yes"
        }
        else {
            message += "No"
        }
        buttonMessage += "Select Arena"
    }
    form.body(message)
    form.button2(buttonMessage);
    form.button1("Back");
    form.show(player).then(r => {
        let responseVal = r.selection;
        if (responseVal == 1) {
            if (arenaVoteEnabledScore == 1) {

                if (arenaEnabled > 0) {
                    world.sendMessage("Disabled " + arena.displayName)
                    enabledArenasNewSB.setScore(arena.enabledName,0)
                }
                else {
                    world.sendMessage("Enabled " + arena.displayName)
                    enabledArenasNewSB.setScore(arena.enabledName,1)
                }
            }
            else {
                system.run(() => SendLoadedArenaMessage(arena))
                system.run(() => ArmArena(arena.arenaIndex,arena.arenaCategory))
            }
            system.run(() => ArenaMenu(player, arenaCategory))
        }
        else {
            system.run(() => ArenaMenu(player, arenaCategory))
        }
    })
}

function CheckEnabledCount(arenaCategory) {
    var enabledArenasNewSB = world.scoreboard.getObjective("enabled_arenas_new")
    let count = 0;
    arenaCategory.forEach(arena => {
        var currentScore = enabledArenasNewSB.getScore(arena.enabledName)
        if (currentScore > 0) {
            count++;
        }
    })
    return count;
}

function ArenaMenu(player, arenaCategory) {
    var unlockedArenasNewSB = world.scoreboard.getObjective("unlocked_arenas_new")
    var enabledArenasNewSB = world.scoreboard.getObjective("enabled_arenas_new")
    var arenaVoteEnabledSB = world.scoreboard.getObjective("arena_vote_enabled")
    var arenaVoteEnabledScore = arenaVoteEnabledSB.getScore("boolean")
    var arenaToLoadSB = world.scoreboard.getObjective("arena_to_load_new")
    var arenaToLoadID = arenaToLoadSB.getScore("arena_id")
    var arenaToLoadCategory = arenaToLoadSB.getScore("arena_category")
    let form = new ActionFormData();
    form.title("Arena Select")
    form.body("Select an arena:\n")
    let arenaCount = CheckEnabledCount(arenaCategory)
    let toggleArenasEnable = 0;
    if (arenaCount > Math.floor(arenaCategory.length / 2)) {
        form.button("Mass-Toggle Arena Category", "textures/ui/button_disable_all")
        toggleArenasEnable = 0
    }
    else {
        form.button("Mass-Toggle Arena Category", "textures/ui/button_enable_all")
        toggleArenasEnable = 1
    }

    arenaCategory.forEach(arena => {
        var arenaScore = unlockedArenasNewSB.getScore(arena.enabledName)
        var arenaEnabled = enabledArenasNewSB.getScore(arena.enabledName)
        var name = ""
        var filePath = ""
        if (arenaScore > 0) {
            if (arena.isDefault) {
                name += "§2"
            }
            else {
                name += "§3"
            }
            name += "§l" + arena.displayName + "§r"
            if (arenaVoteEnabledScore > 0) {
                if (arenaEnabled > 0) {
                    name += " "
                }
                else {
                    name += " "
                }
            }
            else {
                if (arenaToLoadCategory == arena.categoryIndex && arenaToLoadID == arena.arenaIndex) {
                    name += " (Selected)"
                }
            }

            name += "§r\n" + difficulties[arena.difficulty] + ", " + size[arena.size]

            filePath = arena.filePath
        }
        else {
            name = "§lLocked§r"
            filePath = "textures/ui/button_lock"
        }
        form.button(name, filePath)
    })
    form.button("Back", "textures/ui/button_back")
    form.button("Cancel", "textures/ui/button_close")
    form.show(player).then(r => {
        let responseValue = r.selection
        if (responseValue == 0) {
            system.run(() => MassToggleCategory(arenaCategory, toggleArenasEnable, true, player))
        }
        if (responseValue < arenaCategory.length + 1 && responseValue != 0) {
            system.run(() => ArenaInfo(player,arenaCategory[responseValue - 1], arenaCategory))
        }
        if (responseValue == arenaCategory.length + 1) {
            system.run(() => ArenaStoreMenu(player))
        }
    })
}

function SortMenu(player) {
    let form = new ActionFormData();
    form.title("Sort Arenas");
    form.body("Select a Sorting Method:\n");
    form.button("Sort by Version", "textures/ui/button_sort")
    form.button("Sort by Difficulty", "textures/ui/button_sort")
    form.button("Sort by Size", "textures/ui/button_sort")
    form.button("Back", "textures/ui/button_back");
    form.button("Cancel", "textures/ui/button_close");

    form.show(player).then(r => {

        let responseValue = r.selection
        var playerArenaSortSB = world.scoreboard.getObjective("player_arena_sort")
        switch (responseValue) {
            case 0:
                playerArenaSortSB.setScore(player, 0)
                system.run(() => ArenaStoreMenu(player))
                break;
            case 1:
                playerArenaSortSB.setScore(player, 1)
                system.run(() => ArenaStoreMenu(player))
                break;
            case 2:
                playerArenaSortSB.setScore(player, 2)
                system.run(() => ArenaStoreMenu(player))
                break;
            case 3:
                system.run(() => ArenaStoreMenu(player))
                break;
            case 4:
                break;

        }

        //if (responseValue == 0) {
        //    system.run(() => mainArenaPageUEG(player))
        //}
        //else if (responseValue == 1) {
        //    system.run(() => mainArenaPageRPG(player))
        //}




    })
}

function DebugArenaInterface(player) {
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
            ArmArena(parsedTextField, r.formValues[0])
            LoadSelectedArena()
        }
        else {

        }

        

    })
}



function GetArenasCount(versionCollection, unlockOrEnable) { //0 if check for unlock, 1 for check for enable
    let arenaCount = 0;
    var arenaArr = [];
    //world.sendMessage("pre-arena count: " + arenaCount.toString())
    //world.sendMessage(versionCollection.length.toString() + " <- version collection length")
    for (let j = 0; j < versionCollection.length; j++) { //someone once tried correcting me about doing this, I do not feel like finding an alternative right now, this goes out to you if you know who you are (it isn't moore, you're fine)
        for (let i = 0; i < versionCollection[j].length; i++) {
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
    //world.sendMessage("arena count total: " + arenaCount.toString())
    return arenaArr;
}


function MassToggleCategory(category, toggleVal, returnTo, player) { //send 0 through toggleVal if disable, 1 if enable
    var unlockedArenasNewSB = world.scoreboard.getObjective("unlocked_arenas_new")
    for (let i = 0; i < category.length; i++) {
        let arena = category[i]
        let currentScoreboard = world.scoreboard.getObjective("enabled_arenas_new")
        let currentArenaE = unlockedArenasNewSB.getScore(arena.enabledName)
        if (currentArenaE > 0) {
            currentScoreboard.setScore(arena.enabledName, toggleVal)
        }
        else {
            currentScoreboard.setScore(arena.enabledName, 0)
        }

    }
    if (returnTo == true) {
        system.run(() => ArenaMenu(player,category))
    }
}

function DebugUnlockAllArenas(unlockOrLock) { //0 = lock, 1 = unlock
    allArenas.forEach(arena => {
        var currentScoreboard = world.scoreboard.getObjective("unlocked_arenas_new")
        if (!arena.isDefault) {
            currentScoreboard.setScore(arena.enabledName, unlockOrLock)
        }

    })
}

function LoadSelectedArena() {
    let storedArenaSB = world.scoreboard.getObjective("arena_to_load_new")
    let storedArenaID = storedArenaSB.getScore("arena_id")
    let storedArenaCategory = storedArenaSB.getScore("arena_category")
    world.sendMessage("arena id: " + storedArenaID.toString())
    world.sendMessage("arena Category: " + storedArenaCategory.toString())
    let arena = GetArenaFromID(storedArenaID, storedArenaCategory)
    world.structureManager.place(arena.structure, world.getDimension("overworld"), structureLoadLocation, { includeEntities: arena.includeEntities })
}

function RandomizeArenaVoteSlots(versionCollection) {
    let enabledArenas = [];
    let random1 = 0;
    let random2 = 0;
    let random3 = 0;
    enabledArenas = GetArenasCount(versionCollection, 0)
    //world.sendMessage("current number of enabled arenas: " + enabledArenas.length)
    enabledArenas.forEach(arena => {
        //world.sendMessage(arena.displayName)
    })
    random1 = Math.floor(Math.random() * enabledArenas.length)
    //world.sendMessage(random1.toString())
    //world.sendMessage("random slot 1: " + enabledArenas[random1].displayName.toString())
    if (enabledArenas.length >= 3) {
        random2 = Math.floor(Math.random() * enabledArenas.length)
        for (var i = 0; random1 == random2; i++) {
            random2 = Math.floor(Math.random() * enabledArenas.length)
        }
        //world.sendMessage("random slot 2: " + enabledArenas[random2].displayName.toString())
        random3 = Math.floor(Math.random() * enabledArenas.length)
        while (random1 == random3 || random2 == random3) {
            random3 = Math.floor(Math.random() * enabledArenas.length)
            if (random1 != random3 && random2 != random3) {
                break;
            }
        }
        //world.sendMessage("random slot 3: " + enabledArenas[random3].displayName.toString())
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
        //world.sendMessage(coordCmds[i] + enabledArenas[randomArr[i]].enabledName)
        world.getDimension("overworld").runCommand(coordCmds[i] + enabledArenas[randomArr[i]].enabledName)
        storedArenasSB.setScore(sbStoredNames[i], enabledArenas[randomArr[i]].arenaIndex)
        storedArenasSB.setScore(sbStoredNames[i + 3], enabledArenas[randomArr[i]].categoryIndex)
    }

}

function ArmArena(id, category) {
    //world.sendMessage("ID: " + id.toString())
    //world.sendMessage("Category: " + category.toString())
    let storedArenaSB = world.scoreboard.getObjective("arena_to_load_new")
    let storedArenaID = storedArenaSB.getScore("arena_id")
    let storedArenaCategory = storedArenaSB.getScore("arena_category")
    storedArenaSB.setScore("arena_id", id)
    storedArenaSB.setScore("arena_category",category)
}

function SetVotedArena() {
    //world.sendMessage("loadvotedarena")
    let arenaVoteSB = world.scoreboard.getObjective("arena_vote")
    let arenaOne = arenaVoteSB.getScore("arena_1")
    let arenaTwo = arenaVoteSB.getScore("arena_2")
    let arenaThree = arenaVoteSB.getScore("arena_3")

    let storedArenasSB = world.scoreboard.getObjective("new_stored_arenas_vote")
    let storedArenaIndexes = [storedArenasSB.getScore("arena_1_id"), storedArenasSB.getScore("arena_2_id"), storedArenasSB.getScore("arena_3_id")]
    let storedCategoryIndexes = [storedArenasSB.getScore("arena_1_category"), storedArenasSB.getScore("arena_2_category"), storedArenasSB.getScore("arena_3_category")]

    let storedArenaSB = world.scoreboard.getObjective("arena_to_load_new")
    let storedArenaID = storedArenaSB.getScore("arena_id")
    let storedArenaCategory = storedArenaSB.getScore("arena_category")



    let arenas = [versionCollection[storedCategoryIndexes[0]][storedArenaIndexes[0]], versionCollection[storedCategoryIndexes[1]][storedArenaIndexes[1]], versionCollection[storedCategoryIndexes[2]][storedArenaIndexes[2]]]

    if (arenaOne > arenaTwo && arenaOne > arenaThree) {

        SendLoadedArenaMessage(arenas[0])
        ArmArena(storedArenaIndexes[0], storedCategoryIndexes[0])
    }
    else if (arenaTwo > arenaOne && arenaTwo > arenaThree) {
        ArmArena(storedArenaIndexes[1], storedCategoryIndexes[1])
    }
    else if (arenaThree > arenaOne && arenaThree > arenaTwo) {
        SendLoadedArenaMessage(arenas[2])
        ArmArena(storedArenaIndexes[2], storedCategoryIndexes[2])
    }
    else if (arenaOne == arenaTwo && arenaOne > arenaThree) {
        let randomSelector = Math.floor(Math.random() * 9)
        if (randomSelector > 4) {
            SendLoadedArenaMessage(arenas[1])
            ArmArena(storedArenaIndexes[1], storedCategoryIndexes[1])
        }
        else {
            SendLoadedArenaMessage(arenas[0])
            ArmArena(storedArenaIndexes[0], storedCategoryIndexes[0])
        }
    }
    else if (arenaOne == arenaThree && arenaOne > arenaTwo) {
        let randomSelector = Math.floor(Math.random() * 9)
        if (randomSelector > 4) {
            SendLoadedArenaMessage(arenas[2])
            ArmArena(storedArenaIndexes[2], storedCategoryIndexes[2])
        }
        else {
            SendLoadedArenaMessage(arenas[0])
            ArmArena(storedArenaIndexes[0], storedCategoryIndexes[0])
        }
    }
    else if (arenaTwo == arenaThree && arenaTwo > arenaOne) {
        let randomSelector = Math.floor(Math.random() * 9)
        if (randomSelector > 4) {
            SendLoadedArenaMessage(arenas[1])
            ArmArena(storedArenaIndexes[1], storedCategoryIndexes[1])
        }
        else {
            SendLoadedArenaMessage(arenas[2])
            ArmArena(storedArenaIndexes[2], storedCategoryIndexes[2])
        }
    }
    else if (arenaOne == arenaTwo == arenaThree) {
        let randomSelector = Math.floor(Math.random() * 12)
        if (randomSelector > 8) {
            SendLoadedArenaMessage(arenas[2])
            ArmArena(storedArenaIndexes[2], storedCategoryIndexes[2])
        }
        else if (randomSelector > 4) {
            SendLoadedArenaMessage(arenas[1])
            ArmArena(storedArenaIndexes[1], storedCategoryIndexes[1])
        }
        else {
            SendLoadedArenaMessage(arenas[0])
            ArmArena(storedArenaIndexes[0], storedCategoryIndexes[0])
        }
    }
    else {
        let randomSelector = Math.floor(Math.random() * 12)
        if (randomSelector > 8) {
            SendLoadedArenaMessage(arenas[2])
            ArmArena(storedArenaIndexes[2], storedCategoryIndexes[2])
        }
        else if (randomSelector > 4) {
            SendLoadedArenaMessage(arenas[1])
            ArmArena(storedArenaIndexes[1], storedCategoryIndexes[1])
        }
        else {
            SendLoadedArenaMessage(arenas[0])
            ArmArena(storedArenaIndexes[0], storedCategoryIndexes[0])
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