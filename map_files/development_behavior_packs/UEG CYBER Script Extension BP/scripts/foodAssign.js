import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { itemNameList, itemIconLocation, itemScoreboard, itemDescList } from './foodList.js'
system.runInterval(() => {

    world.getAllPlayers().forEach(player => {


        if (player.hasTag("assign_food_items")) {
            system.run(() => AssignItem(player))
            player.removeTag("assign_food_items")
        }

    })

})

function AssignItem(player) {

    var assignedItemSB = world.scoreboard.getObjective("assigned_food")
    var assignedItemSBPlayer = assignedItemSB.getScore(player)

    var assignedItemName;

    if (assignedItemSBPlayer != undefined) {
        assignedItemName = itemNameList[assignedItemSBPlayer]
    }
    else {
        assignedItemName = "No Item"
    }

    const mainTitle = "Assign Food Item"
    var mainDesc = `Select an item to view its description and then assign it to your lunchbox.\n\n§eCurrent assigned item: ${assignedItemName}\n\n`

    var itemList = new Array("", "")

    let form = new ActionFormData();
    form.title(mainTitle);



    var buttonCount = 0;

    for (var i = 0; i < itemIconLocation.length; i++) {

        var scoreboardString = itemScoreboard[i]
        player.runCommand(`scoreboard players add @s ${scoreboardString} 0`)
        player.runCommand(`execute if score @s ${scoreboardString} matches 1.. run tag @s add menuchecker`)
        var itemCountSB = world.scoreboard.getObjective(itemScoreboard[i])
        var itemCount = itemCountSB.getScore(player)

        if (itemCount > 0) {
            var name = `${itemNameList[i]} (${scoreboardString})`
            form.button(itemNameList[i] + ` (${itemCount})`, itemIconLocation[i]);
            itemList[buttonCount] = itemScoreboard[i]
            buttonCount = buttonCount + 1
        }
        player.removeTag("menuchecker")

    }

    if (buttonCount == 0) {
        mainDesc = "You have no items in your inventory!\n\n"
    }

    form.body(mainDesc);
    form.button("Cancel", "textures/ui/button_close");
    form.show(player).then(r => {

        let responseValue = r.selection
        if (responseValue != undefined) {
            system.run(() => AssignItemDesc(itemList, responseValue, player))
        }

    })
}

function AssignItemDesc(itemList, selectedItem, player) {
    var itemIndex = itemScoreboard.indexOf(itemList[selectedItem])

    const mainTitle = itemNameList[itemIndex]
    var mainDesc = itemDescList[itemIndex]

    var itemList = new Array("", "")

    var assignedItemSB = world.scoreboard.getObjective("assigned_food")

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc)
    form.button("Assign to Lunchbox", "textures/ui/consumable_old");
    form.button("Back", "textures/ui/button_back");
    form.show(player).then(r => {
        if (r.selection == 0) {
            player.sendMessage(`§e[Lunchbox]§a ${itemNameList[itemIndex]} assigned to the lunchbox.`)
            assignedItemSB.setScore(player, itemIndex)
        }
        else if (r.selection == 1) {
            system.run(() => AssignItem(player))
        }
    })
}