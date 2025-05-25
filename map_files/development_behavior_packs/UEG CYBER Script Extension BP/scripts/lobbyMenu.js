import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { itemNameList, itemIconLocation, itemScoreboard, itemDescList } from './foodList.js'

system.runInterval(() => {

    world.getAllPlayers().forEach(player => {

        if (player.hasTag("lobby_menu_open")) {
            system.run(() => lobbyMenu(player))
            player.removeTag("lobby_menu_open")
        }


    })

})


function lobbyMenu(player) {

    const mainTitle = "Menu"
    const mainDesc = "Please select an option:\n\n"


    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    form.button("Quick Warp", "textures/ui/teleport");
    form.button("View Inventory", "textures/ui/consumable");
    form.button("Cancel", "textures/ui/button_close");

    form.show(player).then(r => {

        let responseValue = r.selection
        if (responseValue == 0) {
            system.run(() => Warps(player))
        }
        else if (responseValue == 1) {
            system.run(() => inventoryMenu(player))
        }

    })
}

function inventoryMenu(player) {

    const mainTitle = "Menu"
    var mainDesc = "Select an item to view its description.\n\n"

    var itemList = new Array("","")

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

    form.button("Back", "textures/ui/button_back");
    form.show(player).then(r => {

        let responseValue = r.selection
        if (responseValue >= buttonCount) {
            system.run(() => lobbyMenu(player))
        }
        else if(responseValue < buttonCount) {
            system.run(() => ItemDescriptions(itemList,responseValue,player))
        }

    })
}

function ItemDescriptions(itemList,selectedItem,player) {
    var itemIndex = itemScoreboard.indexOf(itemList[selectedItem])

    const mainTitle = itemNameList[itemIndex]
    var mainDesc = itemDescList[itemIndex]

    var itemList = new Array("", "")

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc)
    form.button("Back", "textures/ui/button_back");
    form.show(player).then(r => {
        if (r.selection != undefined) {

            system.run(() => inventoryMenu(player))

        }
    })

}


function Warps(player) {

    const mainTitle = "Quick Warp"
    var mainDesc = "Select a location to warp to:\n\n"

    const flTag = new Array(
        "1f",
        "2f",
        "3f"
    )

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc)
    form.button("1F - Metro", "textures/ui/teleport_0");
    form.button("2F - Central Plaza", "textures/ui/teleport_1");
    form.button("3F - Shopping District", "textures/ui/teleport_2");
    form.button("Back", "textures/ui/button_back");
    form.show(player).then(r => {


        
        if (r.selection == 0) {

            flTag.forEach(tag => {
                player.removeTag(tag)
            })
            player.addTag("1f")
            player.addTag("new_title_1f")
            player.addTag("new_title_init")
            player.runCommand("camera @s fade time 0 0.5 0.5 color 0 0 0")
            player.runCommand("tp @s 140 -4 43 facing 140 -4 45")

        }
        else if (r.selection == 1) {

            flTag.forEach(tag => {
                player.removeTag(tag)
            })
            player.addTag("2f")
            player.addTag("new_title_2f")
            player.addTag("new_title_init")
            player.runCommand("camera @s fade time 0 0.5 0.5 color 0 0 0")
            player.runCommand("tp @s 140 13 -20 facing 140 13 -20")

        }
        else if (r.selection == 2) {

            flTag.forEach(tag => {
                player.removeTag(tag)
            })
            player.addTag("3f")
            player.addTag("new_title_3f")
            player.addTag("new_title_init")
            player.runCommand("camera @s fade time 0 0.5 0.5 color 0 0 0")
            player.runCommand("tp @s 140 30 41 facing 140 30 39")

        }
        else if (r.selection == 3) {

            system.run(() => inventoryMenu(player))

        }
    })
}

