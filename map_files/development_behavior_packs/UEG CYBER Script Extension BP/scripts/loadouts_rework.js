import { world, system } from "@minecraft/server";
import { weaponIDList, ingameWeaponIDList, loadoutTypeIDs, loadoutTypeIDLocs } from './loadoutList.js'
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

    const buttonNames = new Array("Load Loadout/Preset","Save Loadout","Clear Inventory")
    const buttonIconLoc = new Array("textures/ui/load_loadout","textures/ui/save_loadout","textures/ui/clear_inventory")

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    form.button(buttonNames[0], buttonIconLoc[0])
    form.button(buttonNames[1], buttonIconLoc[1])
    form.button(buttonNames[2], buttonIconLoc[2])
    form.button("Cancel", "textures/ui/button_close");

    form.show(player).then(r => {

        let responseValue = r.selection
        if (responseValue == 0) {
            system.run(() => LoadoutSlotSelect(player));
        }
        if (responseValue == 2) {
            system.run(() => AreYouSure(player));
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
            player.sendMessage(itemSlots[i].toString())
            var currentLoadoutSB = world.scoreboard.getObjective(loadoutSlot)
            currentLoadoutSB.setScore(player, itemSlots[i])
    }

    var slotNumber = selectedSlot + 1
    player.sendMessage(`placeholder message, saved to slot ${selectedSlot}`)
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

function LoadoutSlotSelect(player) {

    var loadoutTypes = new Array(0,0,0)

    var loadout1TypeSB = world.scoreboard.getObjective("loadout1_type")
    loadoutTypes[0] = loadout1TypeSB.getScore(player)
    var loadout2TypeSB = world.scoreboard.getObjective("loadout2_type")
    loadoutTypes[1] = loadout2TypeSB.getScore(player)
    var loadout3TypeSB = world.scoreboard.getObjective("loadout3_type")
    loadoutTypes[2] = loadout3TypeSB.getScore(player)

    const mainTitle = "Load Loadout"
    const mainDesc = "Select an option:"

    const buttonNames = new Array(loadoutTypeIDs[loadoutTypes[0]], loadoutTypeIDs[loadoutTypes[1]], loadoutTypeIDs[loadoutTypes[2]])
    const buttonIconLoc = new Array(loadoutTypeIDLocs[loadoutTypes[0]], loadoutTypeIDLocs[loadoutTypes[1]], loadoutTypeIDLocs[loadoutTypes[2]])

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    form.button(buttonNames[0], buttonIconLoc[0])
    form.button(buttonNames[1], buttonIconLoc[1])
    form.button(buttonNames[2], buttonIconLoc[2])
    form.button("Cancel", "textures/ui/button_close");

    form.show(player).then(r => {

        let responseValue = r.selection
        if (responseValue == 2) {
            system.run(() => AreYouSure(player));
        }

    })
}