import { world, system } from "@minecraft/server";
import { weaponIDList, ingameWeaponIDList } from './loadoutList.js'

system.runInterval(() => {

    for (const player of world.getPlayers()) {


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

            if (loadoutSavePlayer == 1) {
                for (var i = 0; i < 9; i++) {
                    var loadoutSlot = loadout1SBStr + (i + 1).toString()
                    player.sendMessage(itemSlots[i].toString())
                    var currentLoadoutSB = world.scoreboard.getObjective(loadoutSlot)
                    currentLoadoutSB.setScore(player, itemSlots[i])
                }
                player.sendMessage("placeholder message, saved to slot 1")
                player.runCommand("scoreboard players set @s loadout1_type 0")
            }
            else if (loadoutSavePlayer == 2) {
                for (var i = 0; i < 9; i++) {
                    var loadoutSlot = loadout2SBStr + (i + 1).toString()
                    var currentLoadoutSB = world.scoreboard.getObjective(loadoutSlot)
                    currentLoadoutSB.setScore(player, itemSlots[i])
                }
                player.sendMessage("placeholder message, saved to slot 2")
                player.runCommand("scoreboard players set @s loadout2_type 0")
            }
            else if (loadoutSavePlayer == 3) {
                for (var i = 0; i < 9; i++) {
                    var loadoutSlot = loadout3SBStr + (i + 1).toString()
                    var currentLoadoutSB = world.scoreboard.getObjective(loadoutSlot)
                    currentLoadoutSB.setScore(player, itemSlots[i])
                }
                player.sendMessage("placeholder message, saved to slot 3")
                player.runCommand("scoreboard players set @s loadout3_type 0")
            }


            loadoutSaveSB.setScore(player, 0)
        }

        if (player.hasTag("giveItems") && player.hasTag("teamed")) {
            if (selectedLoadoutPlayer == 0) {
                for (var i = 0; i < 9; i++) {
                    var loadoutSlot = loadout1SBStr + (i + 1).toString()
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
            else if (selectedLoadoutPlayer == 1) {
                for (var i = 0; i < 9; i++) {
                    var loadoutSlot = loadout2SBStr + (i + 1).toString()
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
            else if (selectedLoadoutPlayer == 2) {
                for (var i = 0; i < 9; i++) {
                    var loadoutSlot = loadout3SBStr + (i + 1).toString()
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
            player.removeTag("giveItems")
        }

    }
})


function saveLoadout(slotString, selectedSlot) {
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

function giveItems(slotString, selectedSlot) {
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

function givePlaceholderItems(slotString, selectedSlot) {
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