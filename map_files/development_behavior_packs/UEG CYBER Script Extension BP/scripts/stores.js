import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { skinList, designerList, skinSet, effectSkins } from './skinList.js'


world.beforeEvents.itemUse.subscribe(data => {



    const player = data.source




    if (data.itemStack.typeId === "sm:purchase") {

        if (!player.hasTag("enter_ueg") && (!player.hasTag("enter_j_mikes")) && (!player.hasTag("enter_rpg") && (!player.hasTag("enter_abilitystore")) && (!player.hasTag("enter_gamblinzone")) &&  (!player.hasTag("enter_hot_topic_clone")))) {
            system.run(() => purchase(player))
        }


    }
})


function purchase(player) {

    var skinRandomizer = world.scoreboard.getObjective("skin_randomizer")

    var skinRandActive = skinRandomizer.getScore("active")
    var skinRandCurrent = skinRandomizer.getScore("current")

    var skinRandNone = skinRandomizer.getScore("none")
    var skinRand1 = skinRandomizer.getScore("slot1")
    var skinRand2 = skinRandomizer.getScore("slot2")
    var skinRand3 = skinRandomizer.getScore("slot3")
    var skinRand4 = skinRandomizer.getScore("slot4")
    var skinRand5 = skinRandomizer.getScore("slot5")
    var skinRand6 = skinRandomizer.getScore("slot6")


    var skinNamesSF = new Array(
        "no name",
        skinList[skinRand1],
        skinList[skinRand2],
        skinList[skinRand3],
        skinList[skinRand4],
        skinList[skinRand5],
        skinList[skinRand6]
    )
    var skinDesignSF = new Array(
        "no name",
        designerList[skinRand1],
        designerList[skinRand2],
        designerList[skinRand3],
        designerList[skinRand4],
        designerList[skinRand5],
        designerList[skinRand6]
    )
    var skinSetSF = new Array(
        "no name",
        skinSet[skinRand1],
        skinSet[skinRand2],
        skinSet[skinRand3],
        skinSet[skinRand4],
        skinSet[skinRand5],
        skinSet[skinRand6]
    )
    var skinNumber = new Array(
        0,
        skinRand1,
        skinRand2,
        skinRand3,
        skinRand4,
        skinRand5,
        skinRand6
    )

    var currentSkin = 0

    if (player.hasTag("skin_slot_1")) {
        currentSkin = 1
    }
    else if (player.hasTag("skin_slot_2")) {
        currentSkin = 2
    }
    else if (player.hasTag("skin_slot_3")) {
        currentSkin = 3
    }
    else if (player.hasTag("skin_slot_4")) {
        currentSkin = 4
    }
    else if (player.hasTag("skin_slot_5")) {
        currentSkin = 5
    }
    else if (player.hasTag("skin_slot_6")) {
        currentSkin = 6
    }

    const currency = world.scoreboard.getObjective("credits")
    const currencyCount = currency.getScore(player)

    const gcurrency = world.scoreboard.getObjective("global_credits")
    const gcurrencyCount = gcurrency.getScore("global_credits")

    const packCost = world.scoreboard.getObjective("music_pack_cost")
    const packCost2 = packCost.getScore("music_pack_cost")

    const apackCost = world.scoreboard.getObjective("arenapack_price")
    const apackCost2 = apackCost.getScore("arenapack_price")

    var spackCost = world.scoreboard.getObjective("skin_cost")
    var spackCostDefault = spackCost.getScore("default")
    var spackCostPremium = spackCost.getScore("premium")

    const music_pack_1_title = "Purchase Hardcore Pack Vol.1"

    const music_pack_1_desc = "Unlocks the following songs:\n\nGengar Ecstasy §o§cCW§r\nBPM: 206§c§l!!!§r\n\nSPACE ANGELS FROM CYRENE! §o§cCW§r\nBPM: 206§c§l!!!§r\n\nMARIONETTE §o§cCW§r\nBPM: 190§6§l!!§r\n\n§c§lWARNING!§r These songs are very fast and/or aggressive.\n\nPrice: " + packCost2 + "\nChoose a payment option:\n\n"


    const music_pack_2_title = "Purchase Hardcore Pack Vol.2"

    const music_pack_2_desc = "Unlocks the following songs:\n\nGALAXY TORIMOTI §o§cCW§r\nBPM: 190 - 380 - 760§d§l!!!!§r\n\nTV MAKES YOU DUMBER §o§cCW§r\nBPM: 200§c§l!!!§r\n\nCOMIC MISCHIEF §o§cCW§r\nBPM: 180§6§l!!§r\n\n§c§lWARNING!§r These songs are very fast and/or aggressive.\n\nPrice: " + packCost2 + "\nChoose a payment option:\n\n"




    //Arena Pack Definitions


    //Arena Pack 1: America
    const aPack1_1_name = "§bHighway "
    const aPack1_1_creator = "§dzeerye "
    const aPack1_1_size = "§eMedium "
    const aPack1_1_difficulty = "§eHard §r"

    const aPack1_2_name = "§bMcRye's "
    const aPack1_2_creator = "§dzeerye "
    const aPack1_2_size = "§eLarge "
    const aPack1_2_difficulty = "Hard §r"

    const aPack1_3_name = "§bDemolition Derby "
    const aPack1_3_creator = "§dzeerye? "
    const aPack1_3_size = "§etbd "
    const aPack1_3_difficulty = "tbd §r"
    ///////////////////////////////////
    //Arena Pack 2: CYBER

    const aPack2_1_name = "§bCargo Deck "
    const aPack2_1_creator = "§dzeerye? "
    const aPack2_1_size = "§eTBD "
    const aPack2_1_difficulty = "§eTBD §r"

    const aPack2_2_name = "§bComputer Virus "
    const aPack2_2_creator = "§dTBD "
    const aPack2_2_size = "§eTBD "
    const aPack2_2_difficulty = "TBD §r"

    const aPack2_3_name = "§bDivine Machinery "
    const aPack2_3_creator = "§dTBD "
    const aPack2_3_size = "§etbd "
    const aPack2_3_difficulty = "tbd §r"

    ///////////////////////////////////
    //Arena Pack 3: Video Games

    const aPack3_1_name = "§bArcade "
    const aPack3_1_creator = "§dTBD "
    const aPack3_1_size = "§eTBD "
    const aPack3_1_difficulty = "§eTBD §r"

    const aPack3_2_name = "§bClash Royale "
    const aPack3_2_creator = "§dTBD "
    const aPack3_2_size = "§eTBD "
    const aPack3_2_difficulty = "TBD §r"

    const aPack3_3_name = "§bDoomspire "
    const aPack3_3_creator = "§dTBD "
    const aPack3_3_size = "§etbd "
    const aPack3_3_difficulty = "tbd §r"

    ///////////////////////////////////
    //Arena Pack 4: Random

    const aPack4_1_name = "§bPondwater "
    const aPack4_1_creator = "§dTBD "
    const aPack4_1_size = "§eTBD "
    const aPack4_1_difficulty = "§eTBD §r"

    const aPack4_2_name = "§bTBD "
    const aPack4_2_creator = "§dTBD "
    const aPack4_2_size = "§eTBD "
    const aPack4_2_difficulty = "TBD §r"

    const aPack4_3_name = "§bTBD "
    const aPack4_3_creator = "§dTBD "
    const aPack4_3_size = "§etbd "
    const aPack4_3_difficulty = "tbd §r"

    ///////////////////////////////////
    //Arena Pack 5: Wonderland

    const aPack5_1_name = "§bAmusement Park "
    const aPack5_1_creator = "§dAubreyThePebble, ScizorM "
    const aPack5_1_size = "§eMedium "
    const aPack5_1_difficulty = "§eHard §r"

    const aPack5_2_name = "§bCandyland "
    const aPack5_2_creator = "§devel "
    const aPack5_2_size = "§eNormal "
    const aPack5_2_difficulty = "TBD §r"

    const aPack5_3_name = "§bTouch of Midas "
    const aPack5_3_creator = "§dSpyrotikus "
    const aPack5_3_size = "§etbd "
    const aPack5_3_difficulty = "tbd §r"

    ///////////////////////////////////
    //Arena Pack 6: Low-Effort

    const aPack6_1_name = "§bThe Line "
    const aPack6_1_creator = "§dTBD "
    const aPack6_1_size = "§eTBD "
    const aPack6_1_difficulty = "§eTBD §r"

    const aPack6_2_name = "§bMole Life "
    const aPack6_2_creator = "§dTBD "
    const aPack6_2_size = "§eTBD "
    const aPack6_2_difficulty = "TBD §r"

    const aPack6_3_name = "§bSpleef "
    const aPack6_3_creator = "§dTBD "
    const aPack6_3_size = "§etbd "
    const aPack6_3_difficulty = "tbd §r"

    ///////////////////////////////////

    //Arenas:

    const arena_pack_1_title = "Purchase C.S.T. Phase-I: America"

    const arena_pack_1_desc = "Unlocks the following arenas:\n\n" + aPack1_1_name + "\n" + aPack1_1_creator + aPack1_1_size + aPack1_1_difficulty + "\n\n" + aPack1_2_name + "\n" + aPack1_2_creator + aPack1_2_size + aPack1_2_difficulty + "\n\n" + aPack1_3_name + "\n" + aPack1_3_creator + aPack1_3_size + aPack1_3_difficulty + "\n\nPrice: " + apackCost2 + "\nChoose a payment option:\n\n"
    /////
    const arena_pack_2_title = "Purchase C.S.T. Phase-II: CYBER"

    const arena_pack_2_desc = "Unlocks the following arenas:\n\n" + aPack2_1_name + "\n" + aPack2_1_creator + aPack2_1_size + aPack2_1_difficulty + "\n\n" + aPack2_2_name + "\n" + aPack2_2_creator + aPack2_2_size + aPack2_2_difficulty + "\n\n" + aPack2_3_name + "\n" + aPack2_3_creator + aPack2_3_size + aPack2_3_difficulty + "\n\nPrice: " + apackCost2 + "\nChoose a payment option:\n\n"
    /////
    const arena_pack_3_title = "Purchase C.S.T. Phase-III: Video Games"

    const arena_pack_3_desc = "Unlocks the following arenas:\n\n" + aPack3_1_name + "\n" + aPack3_1_creator + aPack3_1_size + aPack3_1_difficulty + "\n\n" + aPack3_2_name + "\n" + aPack3_2_creator + aPack3_2_size + aPack3_2_difficulty + "\n\n" + aPack3_3_name + "\n" + aPack3_3_creator + aPack3_3_size + aPack3_3_difficulty + "\n\nPrice: " + apackCost2 + "\nChoose a payment option:\n\n"
    /////
    const arena_pack_4_title = "Purchase C.S.T. Phase-IV: Random"

    const arena_pack_4_desc = "Unlocks the following arenas:\n\n" + aPack4_1_name + "\n" + aPack4_1_creator + aPack4_1_size + aPack4_1_difficulty + "\n\n" + aPack4_2_name + "\n" + aPack4_2_creator + aPack4_2_size + aPack4_2_difficulty + "\n\n" + aPack4_3_name + "\n" + aPack4_3_creator + aPack4_3_size + aPack4_3_difficulty + "\n\nPrice: " + apackCost2 + "\nChoose a payment option:\n\n"
    /////
    const arena_pack_5_title = "Purchase C.S.T. Phase-V: Wonderland"

    const arena_pack_5_desc = "Unlocks the following arenas:\n\n" + aPack5_1_name + "\n" + aPack5_1_creator + aPack5_1_size + aPack5_1_difficulty + "\n\n" + aPack5_2_name + "\n" + aPack5_2_creator + aPack5_2_size + aPack5_2_difficulty + "\n\n" + aPack5_3_name + "\n" + aPack5_3_creator + aPack5_3_size + aPack5_3_difficulty + "\n\nPrice: " + apackCost2 + "\nChoose a payment option:\n\n"
    /////
    const arena_pack_6_title = "Purchase C.S.T. Phase-VI: Low-Effort"

    const arena_pack_6_desc = "Unlocks the following arenas:\n\n" + aPack6_1_name + "\n" + aPack6_1_creator + aPack6_1_size + aPack6_1_difficulty + "\n\n" + aPack6_2_name + "\n" + aPack6_2_creator + aPack6_2_size + aPack6_2_difficulty + "\n\n" + aPack6_3_name + "\n" + aPack6_3_creator + aPack6_3_size + aPack6_3_difficulty + "\n\nPrice: " + apackCost2 + "\nChoose a payment option:\n\n"



    if (player.hasTag("enter_music")) {
        var cost = packCost2
    }
    //enter_credits is actually arenas now
    else if (player.hasTag("enter_credits")) {
        var cost = apackCost2
    }
    else if (currentSkin > 0) {
        if (effectSkins.includes(skinNumber[currentSkin])) {
            var cost = spackCostPremium
        }
        else {
            var cost = spackCostDefault
        }
        
    }
    else {
        var cost = 0
    }

    if (player.hasTag("music_pack1")) {
        var title = music_pack_1_title
    }
    else if (player.hasTag("music_pack2")) {
        var title = music_pack_2_title
    }
    else if (player.hasTag("arena_pack1")) {
        var title = arena_pack_1_title
    }
    else if (player.hasTag("arena_pack2")) {
        var title = arena_pack_2_title
    }
    else if (player.hasTag("arena_pack3")) {
        var title = arena_pack_3_title
    }
    else if (player.hasTag("arena_pack4")) {
        var title = arena_pack_4_title
    }
    else if (player.hasTag("arena_pack5")) {
        var title = arena_pack_5_title
    }
    else if (player.hasTag("arena_pack6")) {
        var title = arena_pack_6_title
    }
    else if (currentSkin > 0) {
        var title = "Purchase " + skinNamesSF[currentSkin]
    }
    else {
        var title = "no title"
    }

    if (player.hasTag("enter_music") && player.hasTag("music_pack1")) {
        var desc = music_pack_1_desc
    }
    else if (player.hasTag("enter_music") && player.hasTag("music_pack2")) {
        var desc = music_pack_2_desc
    }
    else if (player.hasTag("arena_pack1")) {
        var desc = arena_pack_1_desc
    }
    else if (player.hasTag("arena_pack2")) {
        var desc = arena_pack_2_desc
    }
    else if (player.hasTag("arena_pack3")) {
        var desc = arena_pack_3_desc
    }
    else if (player.hasTag("arena_pack4")) {
        var desc = arena_pack_4_desc
    }
    else if (player.hasTag("arena_pack5")) {
        var desc = arena_pack_5_desc
    }
    else if (player.hasTag("arena_pack6")) {
        var desc = arena_pack_6_desc
    }
    else if (currentSkin > 0 && player.hasTag(skinNumber[currentSkin] + "_skin_unlocked") == false) {
        var desc = "Unlocks the following skin(s):\n\n§e" + skinNamesSF[currentSkin] + "§r\n\nDesigner: §d" + skinDesignSF[currentSkin] + "\n\n§rFrom the §b" + skinSetSF[currentSkin] + " §rCollection. \n\nNote: skins labeled with the  tag have their own dash effect.\n\nPrice: " + cost + "\nChoose a payment option: \n\n"
    }
    else if (currentSkin > 0 && player.hasTag(skinNumber[currentSkin] + "_skin_unlocked") != false) {
        var desc = "You already own this skin!\n\n§e" + skinNamesSF[currentSkin] + "§r\n\nDesigner: §d" + skinDesignSF[currentSkin] + "\n\n§rFrom the §b" + skinSetSF[currentSkin] + " §rCollection.\n\nPrice: " + cost + "\n\n"
    }
    else {
        var desc = "no desc"
    }


    let form = new ActionFormData();
    form.title(title);
    form.body(desc);

    if (currencyCount >= cost && player.hasTag(skinNumber[currentSkin] + "_skin_unlocked") == false) {
        form.button("Use Personal Credits \n" + currencyCount + "", "textures/ui/button_currency");
    }
    else if (player.hasTag(skinNumber[currentSkin] + "_skin_unlocked") == false) {
        form.button("Insufficient Personal Credits!\n" + currencyCount + "", "textures/ui/button_currency");
    }
    if (gcurrencyCount >= cost && player.hasTag(skinNumber[currentSkin] + "_skin_unlocked") == false && player.hasTag("enter_splendid") == false) {
        form.button("Use Global Credits \n" + gcurrencyCount + "", "textures/ui/button_global_currency");
    }
    else if (player.hasTag(skinNumber[currentSkin] + "_skin_unlocked") == false && player.hasTag("enter_splendid") == false) {
        form.button("Insufficient Global Credits!\n" + gcurrencyCount + "", "textures/ui/button_global_currency");
    }
    form.button("Cancel", "textures/ui/button_close");

    form.show(player).then(r => {

        let responseValue = r.selection



        if (responseValue == 0 && currencyCount >= cost) {
            if (player.hasTag("enter_music")) {
                if (player.hasTag("music_pack1")) {
                    currency.addScore(player, -cost)
                    player.runCommand("function unlock_hardcore_pack_1")
                }
                else if (player.hasTag("music_pack2")) {
                    currency.addScore(player, -cost)
                    player.runCommand("function unlock_hardcore_pack_2")
                }
            }
            else if (player.hasTag("arena_pack1")) {
                currency.addScore(player, -cost)
                player.runCommand("function unlock_apack_1")
            }
            else if (player.hasTag("arena_pack2")) {
                currency.addScore(player, -cost)
                player.runCommand("function unlock_apack_2")
            }
            else if (player.hasTag("arena_pack3")) {
                currency.addScore(player, -cost)
                player.runCommand("function unlock_apack_3")
            }
            else if (player.hasTag("arena_pack4")) {
                currency.addScore(player, -cost)
                player.runCommand("function unlock_apack_4")
            }
            else if (player.hasTag("arena_pack5")) {
                currency.addScore(player, -cost)
                player.runCommand("function unlock_apack_5")
            }
            else if (player.hasTag("arena_pack6")) {
                currency.addScore(player, -cost)
                player.runCommand("function unlock_apack_6")
            }
            else if (currentSkin > 0) {
                currency.addScore(player, -cost)
                player.addTag(skinNumber[currentSkin] + "_skin_unlocked")
                player.addTag("checkSkinCount")
            }
        }
        else if (responseValue == 1 && gcurrencyCount >= cost && player.hasTag("enter_splendid") == false) {
            if (player.hasTag("enter_music")) {
                if (player.hasTag("music_pack1")) {
                    gcurrency.addScore("global_credits", -cost)
                    player.runCommand("function unlock_hardcore_pack_1")
                }
                else if (player.hasTag("music_pack2")) {
                    gcurrency.addScore("global_credits", -cost)
                    player.runCommand("function unlock_hardcore_pack_2")
                }
            }
            else if (player.hasTag("arena_pack1")) {
                gcurrency.addScore("global_credits", -cost)
                player.runCommand("function unlock_apack_1")
            }
            else if (player.hasTag("arena_pack2")) {
                gcurrency.addScore("global_credits", -cost)
                player.runCommand("function unlock_apack_2")
            }
            else if (player.hasTag("arena_pack3")) {
                gcurrency.addScore("global_credits", -cost)
                player.runCommand("function unlock_apack_3")
            }
            else if (player.hasTag("arena_pack4")) {
                gcurrency.addScore("global_credits", -cost)
                player.runCommand("function unlock_apack_4")
            }
            else if (player.hasTag("arena_pack5")) {
                gcurrency.addScore("global_credits", -cost)
                player.runCommand("function unlock_apack_5")
            }
            else if (player.hasTag("arena_pack6")) {
                gcurrency.addScore("global_credits", -cost)
                player.runCommand("function unlock_apack_6")
            }
            else if (currentSkin > 0) {
                currency.addScore("global_credits", -cost)
                player.addTag(skinNumber[currentSkin] + "_skin_unlocked")
                player.addTag("checkSkinCount")
            }
        }




    })//.catch((e) => {
    //world.sendMessage(e + "")
    //})
}
