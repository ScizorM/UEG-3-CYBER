import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { skinList, designerList, skinSet, effectSkins, skinPrices } from './skinList.js'
import {abilityList } from './loadoutList.js'

/*This script was created because the original "stores.js" at the time of writing is becoming very bloated and inefficient, 
* so I figured it would be faster to just rewrite it to be faster to use with the new system I have created.
*/


//////////////////////////////////////////////////////////////////


const ueg1ArenaSlot0010 = "§bSpace Sector: UEG\n§dSci§czorM §eMedium Normal\n"
const ueg1ArenaSlot0012 = "\n§bRetro Maze\n§dSci§czorM §eLarge Easy\n"
const ueg1ArenaSlot0013 = "\n§bChaos Void\n§dSci§czorM §eMedium Normal\n"
const ueg1ArenaSlot0014 = "\n§bAbstract\n§dGoal243 §cScizorM §eAbstract\n"
const ueg1ArenaSlot0018 = "\n§bSynthwave\n§dSci§czorM§e Large Easy\n"
const ueg1ArenaSlot0023 = "\n§bThe Tower\n§dPoizonArrow (Unreleased) §cScizorM (With references from PoizonArrow) §eLarge Normal§r"

const ueg2ArenaSlot0031 = "§bCircus\n§dBananaman §cScizorM §eLarge Normal\n"
const ueg2ArenaSlot0032 = "\n§bBeehive\n§dLittle_Cake §cScizorM §eMedium Hard\n"
const ueg2ArenaSlot0033 = "\n§bDark Forest\n§dSci§czorM §eMedium Normal\n"
const ueg2ArenaSlot0034 = "\n§bDigiglobe\n§dSci§czorM §eSmall Hard\n"
const ueg2ArenaSlot0037 = "\n§bCrystal Cave\n§dScizorM (Unreleased) §cScizorM, AubreyThePebble §eMedium Normal\n"
const ueg2ArenaSlot0038 = "\n§bPendual\n§dScizorM (Unreleased) §cScizorM §eSmall Hard§r"

const uegLegacyStoreItems = new Array(
    "TNT Crossbow ",
    "Gauge Gun ",
    skinList[73],
    skinList[74],
    skinList[75],
    "UEG 1 Arena Pack",
    "UEG PLUS Arena Pack",
    "Remote Trigger Ability"
)

const uegLegacyStoreCosts = new Array(
    20,
    20,
    20,
    20,
    20,
    50,
    50,
    10
)

const uegLegacyStoreIsGlobal = new Array( //Note: 1 = true, 0 = skin
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1
)

const uegLegacyStoreDescs = new Array(
    "Legacy Item, fires a weak explosive round (acts as a crossbow, has to be charged)\n\nOrigin: Unnamed Explosion Game (Pre-Release 2020), Unnamed Explosion Game PLUS (2021)\n\nWeapon Designer: ScizorM/Mojang (since it uses the regular crossbow texture)\n\nMechanic Designer: ScizorM",
    "Legacy Item, fires a weak explosive round (acts as a bow, has to be charged)\n\nOrigin: Unnamed Explosion Game (2020)\n\nWeapon Designer: ScizorM\n\nMechanic Designer: ScizorM",
    "\n\n§e" + skinList[73] + "§r\n\nDesigner: §d" + designerList[73] + "\n\n§rFrom the §b" + skinSet[73] + " §rCollection.\n\nNote: skins labeled with the  tag have their own dash effect.",
    "\n\n§e" + skinList[74] + "§r\n\nDesigner: §d" + designerList[74] + "\n\n§rFrom the §b" + skinSet[74] + " §rCollection.\n\nNote: skins labeled with the  tag have their own dash effect.",
    "\n\n§e" + skinList[75] + "§r\n\nDesigner: §d" + designerList[75] + "\n\n§rFrom the §b" + skinSet[75] + " §rCollection.\n\nNote: skins labeled with the  tag have their own dash effect.",
    "Unlocks the following arenas:\n(§eNote: §dOG Creator, §cRemaster§f)\n\n" + ueg1ArenaSlot0010 + ueg1ArenaSlot0012 + ueg1ArenaSlot0013 + ueg1ArenaSlot0014 + ueg1ArenaSlot0018 + ueg1ArenaSlot0023,
    "Unlocks the following arenas:\n(§eNote: §dOG Creator, §cRemaster§f)\n\n" + ueg2ArenaSlot0031 + ueg2ArenaSlot0032 + ueg2ArenaSlot0033 + ueg2ArenaSlot0034 + ueg2ArenaSlot0037 + ueg2ArenaSlot0038,
    "Upon triggering your ability, all landmines on your team will be detonated."
)

const uegLegacyStoreFunctions = new Array(
    "function unlock_crossbow",
    "function unlock_gaugegun",
    "tag @s add 73_skin_unlocked",
    "tag @s add 74_skin_unlocked",
    "tag @s add 75_skin_unlocked",
    "function unlock_apack_ueg1",
    "function unlock_apack_uegplus",
    "function unlock_ability_remote"
)

const uegLegacyStoreSkinIDs = new Array(
    undefined,
    undefined,
    73,
    74,
    75,
    undefined,
    undefined,
    undefined
)

//////////////////////////////////////////////////////////////////


const hotTopicStoreItems = new Array(
    "TNT Crossbow ",
    skinList[31],
    skinList[32],
    skinList[33]
)

const hotTopicStoreCosts = new Array(
    20,
    25,
    45,
    25
)

const hotTopicStoreIsGlobal = new Array( //Note: 1 = true, 0 = skin
    1,
    0,
    0,
    0
)

const hotTopicStoreDescs = new Array(
    "Legacy Item, fires a weak explosive round (acts as a crossbow, has to be charged)\n\nOrigin: Unnamed Explosion Game (Pre-Release 2020), Unnamed Explosion Game PLUS (2021)\n\nWeapon Designer: ScizorM/Mojang (since it uses the regular crossbow texture)\n\nMechanic Designer: ScizorM",
    "\n\n§e" + skinList[31] + "§r\n\nDesigner: §d" + designerList[31] + "\n\n§rFrom the §b" + skinSet[31] + " §rCollection.\n\nNote: skins labeled with the  tag have their own dash effect.",
    "\n\n§e" + skinList[32] + "§r\n\nDesigner: §d" + designerList[32] + "\n\n§rFrom the §b" + skinSet[32] + " §rCollection.\n\nNote: skins labeled with the  tag have their own dash effect.",
    "\n\n§e" + skinList[33] + "§r\n\nDesigner: §d" + designerList[33] + "\n\n§rFrom the §b" + skinSet[33] + " §rCollection.\n\nNote: skins labeled with the  tag have their own dash effect."
)

const hotTopicStoreFunctions = new Array(
    "function unlock_crossbow",
    "tag @s add 73_skin_unlocked",
    "tag @s add 74_skin_unlocked",
    "tag @s add 75_skin_unlocked",
)

const hotTopicStoreSkinIDs = new Array(
    undefined,
    73,
    74,
    75
)


//////////////////////////////////////////////////////////////////

const rpgLegacyArenas = new Array(
    "§bMurkopolis\n§dPoizonArrow, ScizorM, HeliosTheGoatMan §cScizorM (Including structures by PoizonArrow)§eLarge Easy\n",
    "\n§bAquatica\n§dPoizonArrow, ScizorM §cScizorM (Including structures by PoizonArrow)§eLarge Easy\n",
    "\n§bConflict\n§dScizorM, PoizonArrow, Little_Cake §cScizorM (Including structures by PoizonArrow)§eLarge Easy\n",
    "\n§bShaparium\n§dPoizonArrow, ScizorM, GabyIsPepper §cScizorM (Including structures by PoizonArrow and GabyIsPepper)§eLarge Easy\n",
    "\n§bKyoto\n§dScizorM, Bananaman, PoizonArrow §cScizorM (Including structures by PoizonArrow and Bananaman)§eLarge Easy\n",
    "\n§bOverlord\n§dPoizonArrow §cStructures by PoizonArrow§eLarge Normal\n"
)

const rpg2LegacyArenas = new Array(
    "§bShadow Forest\n§dzeerye, ScizorM, PoizonArrow §cScizorM (Including structures by zeerye) §eLarge Normal\n",
    "\n§bMagic Forest\n§dzeerye, ScizorM, Little_Cake §cScizorM (Including structures by zeerye and Little_Cake) §eLarge Easy\n"
)



const rpgLegacyStoreIsGlobal = new Array( //Note: 1 = true, 0 = skin
    1,
    1,
    1,
    1,
    0,
    0,
    0
)






//////////////////////////////////////////////////////////////////

const storeIds = new Array(
    "UEG Legacy Store",
    "RPG Game Store"
)

world.beforeEvents.itemUse.subscribe(data => {



    const player = data.source




    if (data.itemStack.typeId === "sm:purchase") {

        if (player.hasTag("enter_ueg")) {
            var uegLegacySB = world.scoreboard.getObjective("ueg_store_index")
            var uegLegacyPlayer = uegLegacySB.getScore(player)
            system.run(() => Purchase(player, 0, uegLegacyPlayer))
        }
        else if (player.hasTag("enter_rpg")) {
            var uegLegacySB = world.scoreboard.getObjective("rpg_store_index")
            var uegLegacyPlayer = uegLegacySB.getScore(player)
            system.run(() => Purchase(player, 1, uegLegacyPlayer))
        }
        else if (player.hasTag("enter_abilitystore")) {
            var uegLegacySB = world.scoreboard.getObjective("ability_store_index")
            var uegLegacyPlayer = uegLegacySB.getScore(player)
            system.run(() => Purchase(player, 2, uegLegacyPlayer))
        }
        else if (player.hasTag("enter_hot_topic_clone")) {
            var uegLegacySB = world.scoreboard.getObjective("hot_topic_clone_index")
            var uegLegacyPlayer = uegLegacySB.getScore(player)
            system.run(() => Purchase(player, 3, uegLegacyPlayer))
        }

    }
})

function Purchase(player, storeID, itemIndexID) {

    var randomizer = world.scoreboard.getObjective("rpg_store_randomizer")
    var slotOne = randomizer.getScore(`slot_1`)
    var slotTwo = randomizer.getScore(`slot_2`)
    var slotThree = randomizer.getScore(`slot_3`)

    const rpgLegacyStoreFunctions = new Array(
        "function unlock_sight_blade",
        "function unlock_sound_blade",
        "function unlock_apack_rpg1",
        "function unlock_apack_rpg2",
        `tag @s add ${slotOne}_skin_unlocked`,
        `tag @s add ${slotTwo}_skin_unlocked`,
        `tag @s add ${slotThree}_skin_unlocked`
    )

    const rpgLegacyStoreItems = new Array(
        "True Holic ",
        "440 Ver.Delta ",
        "RPG Game 1 Arena Pack",
        "RPG Game 2 Arena Pack",
        skinList[slotOne],
        skinList[slotTwo],
        skinList[slotThree]
    )

    const abilityStoreItems = new Array(
        abilityList[2],
        abilityList[3]
    )

    const abilityStoreFunctions = new Array(
        "function unlock_ground_slam",
        "function unlock_bungee_anchor"

    )

    var rpgLegacyStoreDescs = new Array(
        " - Knocks back hit enemies, increases the player's speed the more hits (resets on respawn)\n\n - Removes a speed level\n\nWeapon Designer: ScizorM\n\nMechanic Designer: ScizorM",
        " - Knocks back hit entities, charges weapon alt attack after 6 hits (resets on respawn)\n\n - Launches the player into the air, causing an explosion and lightning strikes upon landing (requires to be charged)\n\nWeapon Designer: ScizorM\n\nMechanic Designer: zeerye",
        "Unlocks the following arenas:\n(§eNote: §dOG Creator, §cRemaster§f)\n\n" + rpgLegacyArenas[0] + rpgLegacyArenas[1] + rpgLegacyArenas[2] + rpgLegacyArenas[3] + rpgLegacyArenas[4] + rpgLegacyArenas[5],
        "Unlocks the following arenas:\n(§eNote: §dOG Creator, §cRemaster§f)\n\n" + rpg2LegacyArenas[0] + rpg2LegacyArenas[1],
        "\n\n§e" + skinList[slotOne] + "§r\n\nDesigner: §d" + designerList[slotOne] + "\n\n§rFrom the §b" + skinSet[slotOne] + " §rCollection.\n\nNote: skins labeled with the  tag have their own dash effect.",
        "\n\n§e" + skinList[slotTwo] + "§r\n\nDesigner: §d" + designerList[slotTwo] + "\n\n§rFrom the §b" + skinSet[slotTwo] + " §rCollection.\n\nNote: skins labeled with the  tag have their own dash effect.",
        "\n\n§e" + skinList[slotThree] + "§r\n\nDesigner: §d" + designerList[slotThree] + "\n\n§rFrom the §b" + skinSet[slotThree] + " §rCollection.\n\nNote: skins labeled with the  tag have their own dash effect."

    )

    var rpgLegacyStoreSkinIDs = new Array(
        undefined,
        undefined,
        undefined,
        undefined,
        slotOne,
        slotTwo,
        slotThree
    )

    //Common: Uncommon: Rare: Epic: Mythic: Secret: Dev:

    var rpgSkinCosts = new Array(
        0,
        0,
        0
    )

    for (var i = 4; i < 7; i++) {
        if (rpgLegacyStoreItems[i].includes("")) {
            rpgSkinCosts[i - 4] = skinPrices[0]
        }
        else if (rpgLegacyStoreItems[i].includes("")) {
            rpgSkinCosts[i - 4] = skinPrices[1]
        }
        else if (rpgLegacyStoreItems[i].includes("")) {
            rpgSkinCosts[i - 4] = skinPrices[2]
        }
        else if (rpgLegacyStoreItems[i].includes("")) {
            rpgSkinCosts[i - 4] = skinPrices[3]
        }
    }



    var rpgLegacyStoreCosts = new Array(
        20,
        20,
        50,
        20,
        rpgSkinCosts[0],
        rpgSkinCosts[1],
        rpgSkinCosts[2]
    )

    var itemCosts = new Array(
        uegLegacyStoreCosts[itemIndexID], //UEG Legacy Store
        rpgLegacyStoreCosts[itemIndexID],  //Include more after this
        25,
        hotTopicStoreCosts[itemIndexID]
    )

    var itemNames = new Array(
        uegLegacyStoreItems[itemIndexID], //UEG Legacy Store
        rpgLegacyStoreItems[itemIndexID],  //Include more after this
        abilityStoreItems[itemIndexID],
        hotTopicStoreItems[itemIndexID]
    )

    var itemGlobal = new Array(
        uegLegacyStoreIsGlobal[itemIndexID],
        rpgLegacyStoreIsGlobal[itemIndexID],
        1,
        hotTopicStoreIsGlobal[itemIndexID]
    )

    var itemDesc = new Array(
        uegLegacyStoreDescs[itemIndexID],
        rpgLegacyStoreDescs[itemIndexID],
        "placeholder",
        hotTopicStoreDescs[itemIndexID]
    )

    var isGlobal = itemGlobal[storeID]

    const currency = world.scoreboard.getObjective("credits")
    const currencyCount = currency.getScore(player)

    const gcurrency = world.scoreboard.getObjective("global_credits")
    const gcurrencyCount = gcurrency.getScore("global_credits")

    var itemCost = itemCosts[storeID]

    const unlockedWeaponSB = world.scoreboard.getObjective("unlocked_weapons")
    //var unlockedWeapon = unlockedWeaponSB.getScore(marqueUnlockTests[selectedItem])

    var title = `Purchase ${itemNames[storeID]}`;


    var unlockedSkin;

    unlockedSkin = 0;

    let form = new ActionFormData();
    form.title(title);
    var desc = `${itemDesc[storeID] }`

    if (storeID == 0 && itemIndexID > 1 && itemIndexID < 5) {
        if (player.hasTag(uegLegacyStoreSkinIDs[itemIndexID].toString() + "_skin_unlocked")) {
            unlockedSkin = 1
        }
    }

    if (storeID == 1 && itemIndexID > 3 && itemIndexID < 7) {
        if (player.hasTag(rpgLegacyStoreSkinIDs[itemIndexID].toString() + "_skin_unlocked")) {
            unlockedSkin = 1
        }
    }

    if (storeID == 3 && itemIndexID > 0) {
        if (player.hasTag(hotTopicStoreSkinIDs[itemIndexID].toString() + "_skin_unlocked")) {
            unlockedSkin = 1
        }
    }

    if (unlockedSkin != 1) {
        if (currencyCount < itemCost) {
            form.button("Insufficient Personal Credits!\n" + currencyCount + "", "textures/ui/button_currency");
        }
        else {
            form.button("Use Personal Credits \n" + currencyCount + "", "textures/ui/button_currency");
        }


        if (isGlobal == 1) {
            if (gcurrencyCount < itemCost) {
                form.button("Insufficient Global Credits!\n" + gcurrencyCount + "", "textures/ui/button_global_currency");
            }
            else {
                form.button("Use Global Credits \n" + gcurrencyCount + "", "textures/ui/button_global_currency");
            }
        }

        if (isGlobal == 0) {
            desc = "Unlocks the following skin(s):" + desc
        }
        desc = desc + `\n\nPrice: ${itemCost}\n\nPlease select a payment method:\n\n`
    }
    else {
        desc = "You already own this skin!" + desc
    }



    form.body(desc);








    form.button("Cancel", "textures/ui/button_close");


    form.show(player).then(r => {

        let responseValue = r.selection
        if (unlockedSkin != 1) {
            if (responseValue == 0) {
                if (currencyCount >= itemCost) {
                    currency.addScore(player, -itemCost)
                    if (storeID == 0) {
                        if (uegLegacyStoreSkinIDs[itemIndexID] != undefined) {
                            player.sendMessage(`§e[Skin Unlocks] §a${itemNames[storeID]} Unlocked.`)
                            player.addTag("checkSkinCount")
                        }
                        else {
                            player.runCommand(uegLegacyStoreFunctions[itemIndexID])
                        }

                    }
                    else if (storeID == 1) {
                        if (rpgLegacyStoreSkinIDs[itemIndexID] != undefined) {
                            player.sendMessage(`§e[Skin Unlocks] §a${itemNames[storeID]} Unlocked.`)
                            player.addTag("checkSkinCount")
                        }
                        else {
                            player.runCommand(rpgLegacyStoreFunctions[itemIndexID])
                        }

                    }
                    else if (storeID == 2) {
                        player.runCommand(abilityStoreFunctions[itemIndexID])
                    }
                    else if (storeID == 3) {
                        if (hotTopicStoreSkinIDs[itemIndexID] != undefined) {
                            player.sendMessage(`§e[Skin Unlocks] §a${itemNames[storeID]} Unlocked.`)
                            player.addTag("checkSkinCount")
                        }
                        else {
                            player.runCommand(hotTopicStoreFunctions[itemIndexID])
                        }
                    }

                }
                else {
                    player.sendMessage("§cInsufficient Funds.")
                }
            }
            else if (responseValue == 1) {
                if (gcurrencyCount >= itemCost) {
                    gcurrency.addScore("global_credits", -itemCost)
                    if (storeID == 0) {
                        player.runCommand(uegLegacyStoreFunctions[itemIndexID])
                    }
                    else if (storeID == 1) {
                        player.runCommand(rpgLegacyStoreFunctions[itemIndexID])
                    }
                    else if (storeID == 2) {
                        player.runCommand(abilityStoreFunctions[itemIndexID])
                    }
                    else if (storeID == 3) {
                        player.runCommand(hotTopicStoreFunctions[itemIndexID])
                    }
                    
                }
                else {
                    player.sendMessage("§cInsufficient Funds.")
                }
            }
        }
    })

}