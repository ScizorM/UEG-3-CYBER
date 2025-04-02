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

class Arena {
    constructor(displayName, creators, remasters, difficulty, size, isDefault, categoryArr, structureName) {
        this.displayName = displayName;
        this.creators = creators;
        this.remasters = remasters;
        this.difficulty = difficulty;
        this.size = size;
        this.isDefault = isDefault;
        this.category = categoryArr[1];
        this.enabledName = categoryArr[0] + "_" + structureName
        this.filePath = "textures/signs/arenas/" + categoryArr[0] + "/" + structureName
        this.structure = "mystructure:" + categoryArr[0] + "/" + structureName;
    }

    GetCreators() {
        let output;
        for (var i = 0; i < creators.length; i++) {
            if (i == creators.length - 1) {
                output += creators[i]
            }
            else {
                output += creators[i] + ", "
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
    new Arena("Lost City", [creator.scizor, creator.eido, creator.darthmac], [creator.scizor], 1, 1, true, category.ueg1, "lost_city"),
    new Arena("BlackWhite", [creator.darthmac, creator.scizorm, creator.poizon], [creator.scizor], 0, 1, true, category.ueg1, "blackwhite"),
    new Arena("Nether", [creator.poizon, creator.scizor], [creator.scizor], 1, 2, true, category.ueg1, "nether"),
    new Arena("Space", [creator.poizon], [creator.scizor], 1, 2, true, category.ueg1, "space"),
    new Arena("Western", [creator.banana, creator.poizon, creator.scizor], [creator.scizor], 1, 1, true, category.ueg1, "western"),
    new Arena("Stronghold", [creator.scizor], [creator.scizor], 1, 1, true, category.ueg1, "stronghold"),
    //Unlockables
    new Arena("Space Sector", [creator.scizor], [creator.scizor], 1, 1, false, category.ueg1, "space_sector"),
    new Arena("Retro Maze", [creator.scizor], [creator.scizor], 0, 2, false, category.ueg1, "retro_maze"),
    new Arena("Chaos Void", [creator.scizor], [creator.scizor], 1, 1, false, category.ueg1, "chaos_void"),
    new Arena("Abstract", [creator.goal], [creator.scizor], 3, 3, false, category.ueg1, "abstract"),
    new Arena("Synthwave", [creator.scizor], [creator.scizor], 0, 2, false, category.ueg1, "synthwave"),
    new Arena("The Tower", [creator.poizon], [creator.scizor, creator.poizon], 1, 2, false, category.ueg1, "the_tower")
]

var uegPlusCollection = [
    //Default
    new Arena("Tundra", [creator.banana], [creator.scizor], 1, 1, true, category.uegplus, "tundra"),
    new Arena("Aether", [creator.scizor], [creator.scizor], 2, 2, true, category.uegplus, "aether"),
    new Arena("PLUS", [creator.poizon], [creator.scizor], 0, 1, true, category.uegplus, "plus"),
    new Arena("End", [creator.scizor], [creator.scizor, creator.godly], 2, 1, true, category.uegplus, "end"),
    //Unlockables
    new Arena("Circus", [creator.banana], [creator.scizor], 1, 2, false, category.uegplus, "circus"),
    new Arena("Beehive", [creator.littlecake], [creator.scizor], 2, 1, false, category.uegplus, "beehive"),
    new Arena("Dark Forest", [creator.scizor], [creator.scizor], 1, 1, false, category.uegplus, "dark_forest"),
    new Arena("DigiGlobe", [creator.scizor], [creator.scizor], 2, 0, false, category.uegplus, "digiglobe"),
    new Arena("Crystal Cave", [creator.scizor], [creator.scizor, creator.aubrey], 1, 1, false, category.uegplus, "crystal_cave"),
    new Arena("Pendual", [creator.scizor], [creator.scizor], 2, 0, false, category.uegplus, "pendual")
]

var rpg1Collection = [
    //Unlockables
    new Arena("Murkopolis", [creator.poizon, creator.scizor, creator.helios], [creator.scizor, creator.poizon], 0, 2, false, category.rpg1, "murkopolis"),
    new Arena("Aquatica", [creator.poizon, creator.scizor], [creator.scizor, creator.poizon], 0, 2, false, category.rpg1, "aquatica"),
    new Arena("Conflict", [creator.scizor, creator.poizon, creator.littlecake], [creator.scizor], 0, 2, false, category.rpg1, "conflict"),
    new Arena("Shaparium", [creator.poizon, creator.scizor, creator.gaby], [creator.scizor, creator.poizon, creator.gaby], 0, 2, false, category.rpg1, "shaparium"),
    new Arena("Kyoto", [creator.scizor, creator.banana, creator.poizon], [creator.scizor, creator.banana, creator.poizon], 0, 2, false, category.rpg1, "kyoto"),
    new Arena("Overlord", [creator.poizon], [creator.poizon], 1, 2, false, category.rpg1, "overlord")
]

var rpg2Collection = [
    //Unlockables
    new Arena("Shadow Forest", [creator.rye, creator.scizor, creator.poizon], [creator.scizor, creator.rye], 1, 2, false, category.rpg2, "shadow_forest"),
    new Arena("Magic Forest", [creator.rye, creator.scizor, creator.littlecake], [creator.scizor, creator.rye, creator.littlecake], 0, 2, false, category.rpg2, "magic_forest")
]

var uegCyberCollection = [
    //Default
    new Arena("Playground", [creator.aubrey, creator.scizor], undefined, 1, 1, true, category.uegcyber, "playground"),
    new Arena("Jurassic", [creator.aubrey, creator.scizor], undefined, 1, 1, true, category.uegcyber, "jurassic"),
    new Arena("Egypt", [creator.aubrey, creator.scizor], undefined, 0, 2, true, category.uegcyber, "egypt"),
    new Arena("Cyberspace", [creator.scizor], undefined, 1, 2, true, category.uegcyber, "cyberspace"),
    new Arena("Vaporwave", [creator.scizor], undefined, 0, 2, true, category.uegcyber, "vaporwave"),
    new Arena("Chess", [creator.aubrey, creator.scizor], undefined, 0, 1, true, category.uegcyber, "chess"),
    new Arena("Deep Dark", [creator.scizor], undefined, 2, 1, true, category.uegcyber, "deep_dark"),
    //Unlockables
    new Arena("Amusement Park", [creator.scizor, creator.aubrey], undefined, 2, 1, false, category.uegcyber, "amusement_park"),
    new Arena("Candyland", [creator.evel], undefined, 2, 0, false, category.uegcyber, "candyland"),
    new Arena("Battlefield", [creator.unknown], undefined, 3, 3, false, category.uegcyber, "battlefield"),
    new Arena("Not Gambling", [creator.scizor], undefined, 3, 3, false, category.uegcyber, "not_gambling"),
    new Arena("Arcade", [creator.scizor], undefined, 2, 2, false, category.uegcyber, "arcade"),
    new Arena("Computer Virus", [creator.unknown], undefined, 3, 3, false, category.uegcyber, "computer_virus"),
    new Arena("The Line", [creator.scizor], undefined, 2, 0, false, category.uegcyber, "the_line"),
    new Arena("McRye's", [creator.rye], undefined, 1, 1, false, category.uegcyber, "mcryes"),
    new Arena("Mole Life", [creator.scizor], undefined, 2, 2, false, category.uegcyber, "mole_life"),
    new Arena("Race Track", [creator.aubrey], undefined, 1, 1, false, category.uegcyber, "race_track"),
    new Arena("Touch of Midas", [creator.spyro], undefined, 1, 1, false, category.uegcyber, "touch_of_midas"),
    new Arena("Amethyst Domain", [creator.unknown], undefined, 3, 3, false, category.uegcyber, "amethyst_domain")
]

var uegCyberSCollection = [
    //Unlockables
    new Arena("Mike's Way", [creator.rye], undefined, 5, 5, false, category.uegcybers, "mikes_way"),
    new Arena("Bananaland Bouncehouse", [creator.rye], undefined, 6, 0, false, category.uegcybers, "bananaland_bouncehouse"),
    new Arena("ABS:CYBER", [creator.scizor], undefined, 3, 3, false, category.uegcybers, "abstract_cyber"),
    new Arena("shrek on crack", [creator.harbinger], undefined, 6, 6, false, category.uegcybers, "shrek_on_crack"),
    new Arena("hog_metro_hq", [creator.unknown], undefined, 4, 4, false, category.uegcybers, "hog_metro_hq")

]

var versionCollection = [
    ueg1Collection, uegPlusCollection, rpg1Collection, rpg2Collection, uegCyberCollection
]

world.beforeEvents.itemUse.subscribe(data => {

    const player = data.source




    if (data.itemStack.typeId === "sm:settings" && player.hasTag("enter_splendid") == false && player.hasTag("enter_marque") == false) {

        world.sendMessage(ueg1Collection.length.toString())

        system.run(() => LoadArenaInterface(player))

    }

    if (data.itemStack.typeId === "minecraft:stick" && player.hasTag("debug_checkCounts") && player.name == "ScizorM") {

        system.run(() => GetEnabledArenasCount(versionCollection))
        player.removeTag("debug_checkCounts")

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

function ArenaSelectRandomizer() {

}

function GetArenasCount(versionCollection, unlockOrEnable) { //0 if check for unlock, 1 for check for enable
    let count = 0;
    for (let j = 0; j < versionCollection.length - 1; j++) { //someone once tried correcting me about doing this, I do not feel like finding an alternative right now, this goes out to you if you know who you are (it isn't moore, you're fine)
        for (let i = 0; i < versionCollection[j].length - 1; i++) {
            let arena = versionCollection[j][i]
            if (unlockOrEnable == 0) {
                let currentScoreboard = world.scoreboard.getObjective("enabled_arenas_new")
            }
            else {
                let currentScoreboard = world.scoreboard.getObjective("unlocked_arenas_new")
                if (arena.isDefault) {
                    currentScoreboard.setScore(arena.enabledName, 1)
                }
            }
            currentScoreboard.addScore(arena.enabledName, 0)
            let currentArena = currentScoreboard.getScore(arena.enabledName)
            if (currentArena > 0) {
                count++;
            }
        }
    }

    return count;
}

function MassToggleCategory(category,toggleVal) { //send 0 through toggleVal if disable, 1 if enable
    for (let i = 0; i < category.length - 1; i++) {
        let arena = category[i]
        let currentScoreboard = world.scoreboard.getObjective("enabled_arenas_new")
        currentScoreboard.setScore(arena.enabledName, toggleVal)
    }
}



function LoadSelectedArena(category, arenaID) {
    world.sendMessage(versionCollection[category][arenaID].structure)
    world.structureManager.place(versionCollection[category][arenaID].structure, world.getDimension("overworld"), structureLoadLocation)
}