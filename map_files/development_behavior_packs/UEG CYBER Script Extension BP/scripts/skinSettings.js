import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { skinList, designerList, skinSet, skinSet_over, skinFileLoc, skinIconLoc, effectNames } from './skinList.js'
import { clsM, bacM } from './arenaSelects.js'

world.beforeEvents.itemUse.subscribe(data => {

    const player = data.source




    if (data.itemStack.typeId === "sm:settings" && player.hasTag("enter_splendid") == true) {

        system.run(() => skinCategoryInit(player))

    }
})

function skinCategoryInit(player) {
    let form = new ActionFormData();
    form.title("Cosmetic Menu")
    form.body("Select an Option:\n")
    form.button("UEG CYBER Originals [2024]", "textures/ui/button_cyber");
    form.button("UEG (Legacy) [2020-22]", "textures/ui/button_ueg1");
    form.button("RPG Game Series [2020-23]", "textures/ui/button_rpg1");
    form.button("Coming Soon?", "textures/ui/skin_categories/category_");
    form.button("Close", "textures/ui/button_close");
    form.show(player).then(r => {

        let responseVal = r.selection


        if (responseVal == 0) {
            system.run(() => skinCategoryUEGC(player))
        }
        else if (responseVal == 1) {
            var selectedCPack = 20
            var skinCount = 3
            var series = 1
            var skinIDs = new Array(73, 74, 75)
            var collection = skinSet_over[20]
            system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
        }
        else if (responseVal == 2) {
            var selectedCPack = 18
            var skinCount = 15
            var series = 2
            var skinIDs = new Array(58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72)
            var collection = skinSet_over[18]
            system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
        }
        //else if (responseVal == 3) {
        //    system.run(() => effectList(player))
        //}

    })
}

function effectList(player) {

    if (player.hasTag("add_all_effects")) {
        var indexx = 0;
        effectNames.forEach(effect => {
            player.addTag("unl_effect_" + indexx)
            
            indexx++
        })
        player.sendMessage("unlocked effects")
        player.removeTag("add_all_effects")
    }

    var index = 0;
    let form = new ActionFormData();
    form.title("... > Effect Select")
    form.body("Select an Effect:\n\n§cPlease Note: §rsome skins may not support dash effects as they have their own custom effect already.\n\n")
    effectNames.forEach(buttonName => {

        if (player.hasTag("unl_effect_" + index) || index == 0) {
            form.button(buttonName, "textures/items/effects/effect_" + index.toString());
        }
        else {
            form.button("LOCKED", "textures/ui/button_lock");
        }

        index++


    })

    form.button("Back", "textures/ui/button_back")

    form.show(player).then(r => {

        var responseVal = r.selection
        world.sendMessage(responseVal.toString())

        if (responseVal < effectNames.length - 1) {
            if (responseVal == 0) {
                player.runCommand(`scoreboard players set @s selected_effect ${responseVal + 1}`)
                player.sendMessage(`§e[Effect Select] §a${effectNames[responseVal]} selected.`)
            }
            else if (player.hasTag("unl_effect_" + responseVal.toString())) {
                player.runCommand(`scoreboard players set @s selected_effect ${responseVal + 1}`)
                player.sendMessage(`§e[Effect Select] §a${effectNames[responseVal]} selected.`)
            }
            else {
                system.run(() => effectList(player))
            }
        }
        else {
            system.run(() => skinCategoryInit[player])
        }

    })
}
function skinCategoryUEGC(player) {

    var selectedCPack = 0

    var secretsUnlocked = 0

    var skinCount = 0

    var series = 0

    var collection;
    var skinIDs = new Array(0, 0, 0, 0)
    var skinIDsString = new Array("00", "00", "00", "00")

    let form = new ActionFormData();
    form.title("... > UEG CYBER Originals")
    form.body("Select a Collection:\n")//13-17 are secret, remove from list, goes up to 20 but they are legacy
    form.button(skinSet_over[1], skinFileLoc[1]);
    //form.button(skinSet_over[2], skinFileLoc[2]);
    form.button(skinSet_over[3], skinFileLoc[3]);
    //form.button(skinSet_over[4], skinFileLoc[4]);
    //form.button(skinSet_over[5], skinFileLoc[5]);
    form.button(skinSet_over[6], skinFileLoc[6]);
    form.button(skinSet_over[7], skinFileLoc[7]);
    form.button(skinSet_over[8], skinFileLoc[8]);
    form.button(skinSet_over[9], skinFileLoc[9]);
    form.button(skinSet_over[10], skinFileLoc[10]);
    //form.button(skinSet_over[11], skinFileLoc[11]);
    //form.button(skinSet_over[12], skinFileLoc[12]);
    if (player.hasTag("spack_secret_freedom")) {
        secretsUnlocked += 1
        form.button(skinSet_over[13], skinFileLoc[13]);
    }
    if (player.hasTag("spack_secret_s")) {
        secretsUnlocked += 1
        form.button(skinSet_over[14], skinFileLoc[14]);
    }
    if (player.hasTag("spack_secret_dev")) {
        secretsUnlocked += 1
        form.button(skinSet_over[15], skinFileLoc[15]);
    }
    if (player.hasTag("spack_secret_specialThanks")) {
        secretsUnlocked += 1
        form.button(skinSet_over[16], skinFileLoc[16]);
    }
    if (player.hasTag("spack_secret_earlyS")) {
        secretsUnlocked += 1
        form.button(skinSet_over[17], skinFileLoc[17]);
    }
    if (player.hasTag("spack_secret_angenicidal")) {
        secretsUnlocked += 1
        form.button(skinSet_over[21], skinFileLoc[21]);
    }
    form.button("Back", "textures/ui/button_back");
    form.button("Close", "textures/ui/button_close");
    form.show(player).then(r => {

        let responseVal = r.selection



        if (responseVal > 6) {
            responseVal++
            responseVal++
        }
        if (responseVal > 1) {
            responseVal++
            responseVal++
        }
        if (responseVal > 0) {
            responseVal++
        }


        switch (responseVal) {
            case 0:
                selectedCPack = 1
                skinCount = 12
                skinIDs = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
                collection = skinSet_over[1]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 1:
                selectedCPack = 2
                skinCount = 3
                skinIDs = new Array(13, 14, 15)
                collection = skinSet_over[2]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 2:
                selectedCPack = 3
                skinCount = 3
                skinIDs = new Array(16, 17, 18)
                collection = skinSet_over[3]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 3:
                selectedCPack = 4
                skinCount = 3
                skinIDs = new Array(19, 20, 21)
                collection = skinSet_over[4]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 4:
                selectedCPack = 5
                skinCount = 3
                skinIDs = new Array(22, 23, 24)
                collection = skinSet_over[5]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 5:
                selectedCPack = 6
                skinCount = 3
                skinIDs = new Array(25, 26, 27)
                collection = skinSet_over[6]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 6:
                selectedCPack = 7
                skinCount = 3
                skinIDs = new Array(28, 29, 30)
                collection = skinSet_over[7]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 7:
                selectedCPack = 8
                skinCount = 3
                skinIDs = new Array(31,32,33)
                collection = skinSet_over[8]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 8:
                selectedCPack = 9
                skinCount = 3
                skinIDs = new Array(34, 35, 36)
                collection = skinSet_over[9]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 9:
                selectedCPack = 10
                skinCount = 3
                skinIDs = new Array(37,38,39)
                collection = skinSet_over[10]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 10:
                selectedCPack = 11
                skinCount = 3
                skinIDs = new Array(40,41,42)
                collection = skinSet_over[11]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 11:
                selectedCPack = 12
                skinCount = 6
                skinIDs = new Array(43,44,45,76,77,78)
                collection = skinSet_over[12]
                system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                break;
            case 12:
                if (secretsUnlocked == 0) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_freedom")) {
                    selectedCPack = 13
                    skinCount = 3
                    skinIDs = new Array(46,47,48)
                    collection = skinSet_over[13]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_freedom") == false && player.hasTag("spack_secret_s")) {
                    selectedCPack = 14
                    skinCount = 3
                    skinIDs = new Array(49, 50, 51)
                    collection = skinSet_over[14]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_freedom") == false && player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev")) {
                    selectedCPack = 15
                    skinCount = 4
                    skinIDs = new Array(52, 53, 54, 55)
                    collection = skinSet_over[15]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_freedom") == false && player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks")) {
                    selectedCPack = 16
                    skinCount = 1
                    skinIDs = new Array(56, "wow")
                    collection = skinSet_over[16]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_freedom") == false && player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS")) {
                    selectedCPack = 17
                    skinCount = 1
                    skinIDs = new Array(57, "wow")
                    collection = skinSet_over[17]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_freedom") == false && player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS") == false && player.hasTag("spack_secret_angenicidal")){
                    selectedCPack = 21
                    skinCount = 3
                    skinIDs = new Array(79,80,81)
                    collection = skinSet_over[21]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                break;
            case 13:

                if (secretsUnlocked == 1) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_s")) {
                    selectedCPack = 14
                    skinCount = 3
                    skinIDs = new Array(49, 50, 51)
                    collection = skinSet_over[14]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev")) {
                    selectedCPack = 15
                    skinCount = 4
                    skinIDs = new Array(52, 53, 54, 55)
                    collection = skinSet_over[15]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks")) {
                    selectedCPack = 16
                    skinCount = 1
                    skinIDs = new Array(56, "wow")
                    collection = skinSet_over[16]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS")) {
                    selectedCPack = 17
                    skinCount = 1
                    skinIDs = new Array(57, "wow")
                    collection = skinSet_over[17]
                }
                else if (player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS") == false && player.hasTag("spack_secret_angenicidal")) {
                    selectedCPack = 21
                    skinCount = 3
                    skinIDs = new Array(79, 80, 81)
                    collection = skinSet_over[21]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                break;
            case 14:
                if (secretsUnlocked == 2) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_dev")) {
                    selectedCPack = 15
                    skinCount = 4
                    skinIDs = new Array(52, 53, 54, 55)
                    collection = skinSet_over[15]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks")) {
                    selectedCPack = 16
                    skinCount = 1
                    skinIDs = new Array(56, "wow")
                    collection = skinSet_over[16]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS")) {
                    selectedCPack = 17
                    skinCount = 1
                    skinIDs = new Array(57, "wow")
                    collection = skinSet_over[17]
                }
                else if (player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS") == false && player.hasTag("spack_secret_angenicidal")) {
                    selectedCPack = 21
                    skinCount = 3
                    skinIDs = new Array(79, 80, 81)
                    collection = skinSet_over[21]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                break;
            case 15:
                if (secretsUnlocked == 3) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_specialThanks")) {
                    selectedCPack = 16
                    skinCount = 1
                    skinIDs = new Array(56, "wow")
                    collection = skinSet_over[16]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS")) {
                    selectedCPack = 17
                    skinCount = 1
                    skinIDs = new Array(57, "wow")
                    collection = skinSet_over[17]
                }
                else if (player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS") == false && player.hasTag("spack_secret_angenicidal")) {
                    selectedCPack = 21
                    skinCount = 3
                    skinIDs = new Array(79, 80, 81)
                    collection = skinSet_over[21]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                break;
            case 16:
                if (secretsUnlocked == 4) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_earlyS")) {
                    selectedCPack = 17
                    skinCount = 1
                    skinIDs = new Array(57, "wow")
                    collection = skinSet_over[17]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                else if (player.hasTag("spack_secret_earlyS") == false && player.hasTag("spack_secret_angenicidal")) {
                    selectedCPack = 21
                    skinCount = 3
                    skinIDs = new Array(79, 80, 81)
                    collection = skinSet_over[21]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                break;
            case 17:
                if (secretsUnlocked == 5) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_angenicidal")) {
                    selectedCPack = 21
                    skinCount = 3
                    skinIDs = new Array(79, 80, 81)
                    collection = skinSet_over[21]
                    system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
                }
                break;
            case 18:
                if (secretsUnlocked == 6) {
                    system.run(() => skinCategoryInit(player))
                }
                break;

        }

    })
}
/*
const defaultUnlock = " "
const unlockableUnlock = " "
const secretUnlock = " "
const locked = " "
*/
function skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection) {
    let form = new ActionFormData();
    form.title("... > " + skinSet_over[selectedCPack])
    form.body("Select a Skin:\n")
    var skinNumber = 0
    if (skinCount > 1) {
        skinIDs.forEach(int => {
            var buttonIcon = "textures/ui/skin_categories/button"
            var buttonTitle = skinList[skinIDs[skinNumber]]
            var skinTag = skinIDs[skinNumber].toString() + "_skin_unlocked"
            if (skinIDs[skinNumber] == 1) {
                buttonTitle = " " + buttonTitle
                buttonIcon = skinIconLoc[skinIDs[skinNumber]]
            }
            else if (player.hasTag(skinTag)) {
                buttonTitle = " " + buttonTitle
                buttonIcon = skinIconLoc[skinIDs[skinNumber]]
            }
            else {
                buttonTitle = " LOCKED"
                buttonIcon = "textures/ui/button_lock"
            }
            form.button(buttonTitle, buttonIcon);
            skinNumber += 1
        })
    }
    else {
        var buttonIcon = "textures/ui/skin_categories/button"
        var buttonTitle = skinList[skinIDs[skinNumber]]
        var skinTag = skinIDs[skinNumber].toString() + "_skin_unlocked"
        if (skinIDs[skinNumber] == 1) {
            buttonTitle = " " + buttonTitle
            buttonIcon = skinIconLoc[skinIDs[skinNumber]]
        }
        else if (player.hasTag(skinTag)) {
            buttonTitle = " " + buttonTitle
            buttonIcon = skinIconLoc[skinIDs[skinNumber]]
        }
        else {
            buttonTitle = " LOCKED"
            buttonIcon = "textures/ui/button_lock"
        }
        form.button(buttonTitle, buttonIcon);
    }

    form.button("Back", "textures/ui/button_back");
    form.button("Close", "textures/ui/button_close");
    form.show(player).then(r => {

        var response = r.selection
        if (response < skinCount && player.hasTag(skinIDs[response].toString() + "_skin_unlocked") == false) {
            skinNumber = 0
            system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection))
        }
        else if (response < skinCount) {
            skinNumber = response
            system.run(() => skinSelectUIPhase2(player, skinCount, selectedCPack, skinIDs, series, collection, skinNumber))
        }
        if (series == 0 && response == skinCount) {
            system.run(() => skinCategoryUEGC(player))
        }
        if (series > 0 && response == skinCount) {
            system.run(() => skinCategoryInit(player))
        }
    })
}

function skinSelectUIPhase2(player, skinCount, selectedCPack, skinIDs, series, collection, skinNumber) {
    let form = new MessageFormData();
    var skinSelectedSB = world.scoreboard.getObjective("selected_skin")
    var skinName = skinList[skinIDs[skinNumber]]
    form.title("... > " + skinSet_over[selectedCPack] +  " > " + skinName);
    form.body("§e" + skinName + "\n\n§fDesigner(s): §d" + designerList[skinIDs[skinNumber]] + "\n\n§fFrom the §b" + collection + "§r Collection.\n\nNote: skins labeled with the  tag have their own dash effect.");
    form.button1(bacM);
    form.button2("Select");
    form.show(player).then(r => {
        var response = r.selection
        if (response == 1) {
            skinSelectedSB.setScore(player, skinIDs[skinNumber])
            player.sendMessage("§e[Skin Select] §b" + skinName + " §eselected.")
            player.addTag("changeSkin")
        }
        else {
            skinNumber = 0
            system.run(() => skinSelectUI(player, skinCount, selectedCPack, skinIDs, series, collection, skinNumber))
        }
    })
}