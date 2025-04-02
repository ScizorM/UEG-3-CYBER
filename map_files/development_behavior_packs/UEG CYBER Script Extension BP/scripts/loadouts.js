import { world, ItemCooldownComponent, system, Entity, EquipmentSlot, ItemStack, EntityComponentTypes } from "@minecraft/server";
import { weaponIDList, ingameWeaponIDList, loadoutTypeIDs, loadoutTypeIDLocs, loadoutIcons, loadoutNames, abilityList, abilityIconList, abilityFunctionList, abilitySBList } from './loadoutList.js'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'






system.runInterval(() => {

    for (const player of world.getPlayers()) {

        if (player.hasTag("open_loadoutmenu")) {
            system.run(() => loadoutMenu(player))
            player.removeTag("open_loadoutmenu")
        }

        const loadoutSaveSB = world.scoreboard.getObjective("triggerLoadoutSave")
        const loadoutSavePlayer = loadoutSaveSB.getScore(player)

        const selectedLoadoutSB = world.scoreboard.getObjective("selected_loadout")
        var selectedLoadoutPlayer = selectedLoadoutSB.getScore(player)

        const roundActiveSB = world.scoreboard.getObjective("round_active")
        var roundActivePlayer = selectedLoadoutSB.getScore("round_active")

        const loadout1SBStr = "loadout1_slot_"
        const loadout2SBStr = "loadout2_slot_"
        const loadout3SBStr = "loadout3_slot_"

        if (loadoutSavePlayer > 0) {

            if (loadoutSavePlayer == 1) {

            }
            else if (loadoutSavePlayer == 2) {

            }
            else if (loadoutSavePlayer == 3) {

            }


            loadoutSaveSB.setScore(player, 0)
        }

        if (player.hasTag("giveItems") && player.hasTag("ingame")) {
            if (selectedLoadoutPlayer == 0) {
                giveItems(loadout1SBStr, selectedLoadoutPlayer, player)
            }
            else if (selectedLoadoutPlayer == 1) {
                giveItems(loadout2SBStr, selectedLoadoutPlayer, player)
            }
            else if (selectedLoadoutPlayer == 2) {
                giveItems(loadout3SBStr, selectedLoadoutPlayer, player)
            }
            player.removeTag("giveItems")
        }

    }
})

function loadoutMenu(player) {
    const loadoutSaveSB = world.scoreboard.getObjective("triggerLoadoutSave")
    const loadoutSavePlayer = loadoutSaveSB.getScore(player)

    const selectedLoadoutSB = world.scoreboard.getObjective("selected_loadout")
    var selectedLoadoutPlayer = selectedLoadoutSB.getScore(player)

    const roundActiveSB = world.scoreboard.getObjective("round_active")
    var roundActivePlayer = selectedLoadoutSB.getScore("round_active")

    const loadout1SBStr = "loadout1_slot_"
    const loadout2SBStr = "loadout2_slot_"
    const loadout3SBStr = "loadout3_slot_"

    const mainTitle = "Loadout Menu"
    const mainDesc = "Select an option:"

    const buttonNames = new Array("Load Loadout/Preset","Save Loadout","Clear Inventory","Reset Loadout","Select Ability")
    const buttonIconLoc = new Array("textures/ui/load_loadout","textures/ui/save_loadout","textures/ui/clear_inventory","textures/ui/reset_loadout","textures/ui/ability")

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    form.button(buttonNames[0], buttonIconLoc[0])
    form.button(buttonNames[1], buttonIconLoc[1])
    form.button(buttonNames[2], buttonIconLoc[2])
    form.button(buttonNames[3], buttonIconLoc[3])
    form.button(buttonNames[4], buttonIconLoc[4])
    form.button("Cancel", "textures/ui/button_close");

    form.show(player).then(r => {

        let responseValue = r.selection
        if (responseValue == 0) {
            system.run(() => LoadoutSlotSelect(player, loadout1SBStr, loadout2SBStr, loadout3SBStr));
        }
        else if (responseValue == 1) {
            system.run(() => SaveLoadoutSlotSel(player, loadout1SBStr, loadout2SBStr, loadout3SBStr));
        }
        else if (responseValue == 2) {
            system.run(() => AreYouSure(player));
        }
        else if (responseValue == 3) {
            system.run(() => ResetLoadoutSlot(player, loadout1SBStr, loadout2SBStr, loadout3SBStr));
        }
        else if (responseValue == 4) {
            system.run(() => SelectAbility(player))
        }

    })
    
}
function saveLoadout(slotString, selectedSlot,player) {
    const inventory = player.getComponent("inventory")
    const pHItem = "minecraft:air"
    var itemSlots = new Array(0, 0) // There is probably a better way to do this but this works
    for (var i = 0; i < 9; i++) {
        if (inventory.container.getItem(i)) {
            itemSlots[i] = weaponIDList.indexOf(inventory.container.getItem(i).typeId)
        }
        else {
            itemSlots[i] = 0
        }
    }

    for (var i = 0; i < 9; i++) {
            var loadoutSlot = slotString + (i + 1).toString() //slotString is equal to one of the three slots
            var currentLoadoutSB = world.scoreboard.getObjective(loadoutSlot)
            currentLoadoutSB.setScore(player, itemSlots[i])
    }

    var slotNumber = selectedSlot + 1
    player.sendMessage("§e[Loadouts] §aSaved changes to slot " + (selectedSlot + 1) + ".")
    player.runCommand(`scoreboard players set @s loadout${selectedSlot}_type 0`)
}

function giveItems(slotString, selectedSlot,player) {
    for (var i = 0; i < 9; i++) {
        var loadoutSlot = slotString + (i + 1).toString() //slotString is equal to one of the three slots: loadout1SBStr, etc (selectedLoadoutPlayer ranges from 0-2)
        var currentLoadoutSB = world.scoreboard.getObjective(loadoutSlot)
        var currentLoSlPlayer = currentLoadoutSB.getScore(player)
        var itemName = ingameWeaponIDList[currentLoSlPlayer]
        if (itemName != "checkforteam_landmine" && itemName != "checkforteam_remote") {
            player.runCommand(`replaceitem entity @s slot.hotbar ${i} ${itemName}`)
        }
        else {
            if (player.hasTag("team_nu") && itemName == "checkforteam_landmine") {
                player.runCommand(`replaceitem entity @s slot.hotbar ${i} sm:landmine_ver_nu`)
            }
            else if (player.hasTag("team_nu") && itemName == "checkforteam_remote") {
                player.runCommand(`replaceitem entity @s slot.hotbar ${i} sm:remote_activator_ver_nu`)
            }
            else if (player.hasTag("team_lambda") && itemName == "checkforteam_landmine") {
                player.runCommand(`replaceitem entity @s slot.hotbar ${i} sm:landmine_ver_lambda`)
            }
            else if (player.hasTag("team_lambda") && itemName == "checkforteam_remote") {
                player.runCommand(`replaceitem entity @s slot.hotbar ${i} sm:remote_activator_ver_lambda`)
            }
        }

    }
}

function givePlaceholderItems(slotString, selectedSlot,player) {
    for (var i = 0; i < 9; i++) {
        var loadoutSlot = slotString + (i + 1).toString() //slotString is equal to one of the three slots: loadout1SBStr, etc (selectedLoadoutPlayer ranges from 0-2)
        var currentLoadoutSB = world.scoreboard.getObjective(loadoutSlot)
        var currentLoSlPlayer = currentLoadoutSB.getScore(player)
        var itemName = weaponIDList[currentLoSlPlayer]
        if (itemName != "checkforteam_landmine" && itemName != "checkforteam_remote") {
            player.runCommand(`replaceitem entity @s slot.hotbar ${i} ${itemName}`)
        }
        else {
            if (player.hasTag("team_nu") && itemName == "checkforteam_landmine") {
                player.runCommand(`replaceitem entity @s slot.hotbar ${i} sm:landmine_ver_nu`)
            }
            else if (player.hasTag("team_nu") && itemName == "checkforteam_remote") {
                player.runCommand(`replaceitem entity @s slot.hotbar ${i} sm:remote_activator_ver_nu`)
            }
            else if (player.hasTag("team_lambda") && itemName == "checkforteam_landmine") {
                player.runCommand(`replaceitem entity @s slot.hotbar ${i} sm:landmine_ver_lambda`)
            }
            else if (player.hasTag("team_lambda") && itemName == "checkforteam_remote") {
                player.runCommand(`replaceitem entity @s slot.hotbar ${i} sm:remote_activator_ver_lambda`)
            }
        }

    }
}

function AreYouSure(player) {

    let form = new MessageFormData();
    form.title("Clear Inventory");
    form.body('Are you sure?\n\nThis cannot be undone!');
    form.button1("Back");
    form.button2("Clear");
    
    form.show(player).then(r => {

        let responseVal = r.selection
        if (responseVal == 1) {
            player.runCommand("clear @s")
        }

    })
}

function LoadoutSlotSelect(player, loadout1SBStr, loadout2SBStr, loadout3SBStr) {

    var nickNameSB1 = world.scoreboard.getObjective("loadout1Nick")
    var nickNameSB2 = world.scoreboard.getObjective("loadout2Nick")
    var nickNameSB3 = world.scoreboard.getObjective("loadout3Nick")
    var playerNickName1 = nickNameSB1.getScore(player)
    var playerNickName2 = nickNameSB2.getScore(player)
    var playerNickName3 = nickNameSB3.getScore(player)
    var iconSB1 = world.scoreboard.getObjective("loadout1Icon")
    var iconSB2 = world.scoreboard.getObjective("loadout2Icon")
    var iconSB3 = world.scoreboard.getObjective("loadout3Icon")
    var playerIcon1 = iconSB1.getScore(player)
    var playerIcon2 = iconSB2.getScore(player)
    var playerIcon3 = iconSB3.getScore(player)

    var loadoutTypes = new Array(playerIcon1,playerIcon2,playerIcon3)
    var loadoutNamesInit = loadoutNames
    loadoutNamesInit[0] = "Custom"

    const mainTitle = "Load Loadout"
    const mainDesc = "Select an option:\n\nWARNING: This will overwrite your hotbar."

    const buttonNames = new Array(loadoutNamesInit[playerNickName1], loadoutNamesInit[playerNickName2], loadoutNamesInit[playerNickName3])
    const buttonIconLoc = new Array(loadoutTypeIDLocs[loadoutTypes[0]], loadoutTypeIDLocs[loadoutTypes[1]], loadoutTypeIDLocs[loadoutTypes[2]])

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    form.button("Slot 1: " + buttonNames[0], buttonIconLoc[0])
    form.button("Slot 2: " + buttonNames[1], buttonIconLoc[1])
    form.button("Slot 3: " + buttonNames[2], buttonIconLoc[2])
    form.button("Back", "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

        if (responseValue == 0) {
            var selectedSlot = 0
            var slotString = loadout1SBStr
            player.sendMessage("§e[Loadouts] §aLoaded slot 1.")
            system.run(() => givePlaceholderItems(slotString, selectedSlot, player));
        }
        if (responseValue == 1) {
            var selectedSlot = 1
            var slotString = loadout2SBStr
            player.sendMessage("§e[Loadouts] §aLoaded slot 2.")
            system.run(() => givePlaceholderItems(slotString, selectedSlot, player));
        }
        if (responseValue == 2) {
            var selectedSlot = 2
            var slotString = loadout3SBStr
            player.sendMessage("§e[Loadouts] §aLoaded slot 3.")
            system.run(() => givePlaceholderItems(slotString, selectedSlot, player));
        }
        if (responseValue == 3) {
            system.run(() => loadoutMenu(player));
        }

    })
}

function ResetLoadoutSlot(player, loadout1SBStr, loadout2SBStr, loadout3SBStr) {

    var nickNameSB1 = world.scoreboard.getObjective("loadout1Nick")
    var nickNameSB2 = world.scoreboard.getObjective("loadout2Nick")
    var nickNameSB3 = world.scoreboard.getObjective("loadout3Nick")
    var playerNickName1 = nickNameSB1.getScore(player)
    var playerNickName2 = nickNameSB2.getScore(player)
    var playerNickName3 = nickNameSB3.getScore(player)
    var iconSB1 = world.scoreboard.getObjective("loadout1Icon")
    var iconSB2 = world.scoreboard.getObjective("loadout2Icon")
    var iconSB3 = world.scoreboard.getObjective("loadout3Icon")
    var playerIcon1 = iconSB1.getScore(player)
    var playerIcon2 = iconSB2.getScore(player)
    var playerIcon3 = iconSB3.getScore(player)

    var loadoutTypes = new Array(playerIcon1, playerIcon2, playerIcon3)
    var loadoutNamesInit = loadoutNames
    loadoutNamesInit[0] = "Custom"

    const mainTitle = "Reset Loadout"
    const mainDesc = "Select an option:\n\nWARNING: After you reset a loadout, it cannot be recovered.\n\nAlso, this clears your inventory."

    const buttonNames = new Array(loadoutNamesInit[playerNickName1], loadoutNamesInit[playerNickName2], loadoutNamesInit[playerNickName3])
    const buttonIconLoc = new Array(loadoutTypeIDLocs[loadoutTypes[0]], loadoutTypeIDLocs[loadoutTypes[1]], loadoutTypeIDLocs[loadoutTypes[2]])

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    form.button("Slot 1: " + buttonNames[0], buttonIconLoc[0])
    form.button("Slot 2: " + buttonNames[1], buttonIconLoc[1])
    form.button("Slot 3: " + buttonNames[2], buttonIconLoc[2])
    form.button("Reset All", "textures/ui/reset_loadout")
    form.button("Back", "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

        if (responseValue == 0) {
            player.sendMessage("§e[Loadouts] §aReset loadout 1.")
            player.runCommand("function preset_default_1")
        }
        if (responseValue == 1) {
            player.sendMessage("§e[Loadouts] §aReset loadout 2.")
            player.runCommand("function preset_default_2")
        }
        if (responseValue == 2) {
            player.sendMessage("§e[Loadouts] §aReset loadout 3.")
            player.runCommand("function preset_default_3")
        }
        if (responseValue == 3) {
            player.sendMessage("§e[Loadouts] §aReset all loadouts.")
            player.runCommand("function preset_default_1")
            player.runCommand("function preset_default_2")
            player.runCommand("function preset_default_3")
        }
        if (responseValue == 4) {
            system.run(() => loadoutMenu(player));
        }

    })
}

function SaveLoadoutSlotSel(player, loadout1SBStr, loadout2SBStr, loadout3SBStr) {

    var nickNameSB1 = world.scoreboard.getObjective("loadout1Nick")
    var nickNameSB2 = world.scoreboard.getObjective("loadout2Nick")
    var nickNameSB3 = world.scoreboard.getObjective("loadout3Nick")
    var playerNickName1 = nickNameSB1.getScore(player)
    var playerNickName2 = nickNameSB2.getScore(player)
    var playerNickName3 = nickNameSB3.getScore(player)
    var iconSB1 = world.scoreboard.getObjective("loadout1Icon")
    var iconSB2 = world.scoreboard.getObjective("loadout2Icon")
    var iconSB3 = world.scoreboard.getObjective("loadout3Icon")
    var playerIcon1 = iconSB1.getScore(player)
    var playerIcon2 = iconSB2.getScore(player)
    var playerIcon3 = iconSB3.getScore(player)

    var loadoutTypes = new Array(playerIcon1, playerIcon2, playerIcon3)
    var loadoutNamesInit = loadoutNames
    loadoutNamesInit[0] = "Custom"

    const mainTitle = "Load Loadout"
    const mainDesc = "Select an option:\n\nWARNING: This will overwrite your hotbar."

    const buttonNames = new Array(loadoutNamesInit[playerNickName1], loadoutNamesInit[playerNickName2], loadoutNamesInit[playerNickName3])
    const buttonIconLoc = new Array(loadoutTypeIDLocs[loadoutTypes[0]], loadoutTypeIDLocs[loadoutTypes[1]], loadoutTypeIDLocs[loadoutTypes[2]])

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    form.button("Slot 1: " + buttonNames[0], buttonIconLoc[0])
    form.button("Slot 2: " + buttonNames[1], buttonIconLoc[1])
    form.button("Slot 3: " + buttonNames[2], buttonIconLoc[2])
    form.button("Back", "textures/ui/button_back");

    form.show(player).then(r => {

        let responseValue = r.selection

        if (responseValue == 0) {
            var selectedSlot = 0
            var slotString = loadout1SBStr
            system.run(() => LoadoutInfoPreSave(slotString, selectedSlot, player));
        }
        if (responseValue == 1) {
            var selectedSlot = 1
            var slotString = loadout2SBStr
            system.run(() => LoadoutInfoPreSave(slotString, selectedSlot, player));
        }
        if (responseValue == 2) {
            var selectedSlot = 2
            var slotString = loadout3SBStr
            system.run(() => LoadoutInfoPreSave(slotString, selectedSlot, player));
        }
        if (responseValue == 3) {
            system.run(() => loadoutMenu(player));
        }

    })
}



function LoadoutInfoPreSave(slotString, selectedSlot, player) {

    var nickNameSB = world.scoreboard.getObjective("loadout" + (selectedSlot + 1) + "Nick")
    var iconSB = world.scoreboard.getObjective("loadout" + (selectedSlot + 1) + "Icon")

    let form = new ModalFormData();
    form.title("Loadout Settings");
    form.dropdown("Loadout Nickname", loadoutNames, 0)
    form.dropdown("Icon", loadoutIcons, 0)



    form.show(player).then(r => {

        if (r.formValues != undefined) {

                nickNameSB.setScore(player, r.formValues[0])
                iconSB.setScore(player, r.formValues[1])
                system.run(() => saveLoadout(slotString, selectedSlot, player))

        }

    })
}

function SelectAbility(player) {
    let form = new ActionFormData();
    form.title("Ability Select")
    form.body("Select an ability:\n\n")
    var currentSlot = 0;

    const scoreboard = world.scoreboard.getObjective("unlocked_abilities")


    abilityList.forEach(string => {
        if (abilitySBList[currentSlot] != undefined) {

            var currentScore = scoreboard.getScore(abilitySBList[currentSlot])

            if (currentScore == 1) {
                form.button(string, abilityIconList[currentSlot])
            }
            else {
                form.button("LOCKED", "textures/ui/button_lock")
            }

            
        }
        else {
            form.button(string, abilityIconList[currentSlot])
        }

        currentSlot++
    })

    form.button("Back", "textures/ui/button_back")


    form.show(player).then(r => {



        if (r.selection < 6) {
            if (abilitySBList[r.selection] != undefined) {
                var scoreCheck = scoreboard.getScore(abilitySBList[r.selection])
                if (scoreCheck == 1) {
                    player.runCommand(abilityFunctionList[r.selection])
                }
            }

            else {
                system.run(() => SelectAbility(player))
            }

        }
        else if (r.selection == 6) {
            system.run(() => loadoutMenu(player));
        }

    })
}