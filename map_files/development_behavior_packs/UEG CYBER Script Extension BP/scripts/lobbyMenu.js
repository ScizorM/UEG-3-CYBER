import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { itemNameList, itemIconLocation, itemScoreboard, itemDescList } from './foodList.js'

system.runInterval(() => {

    world.getAllPlayers().forEach(player => {

        if (player.hasTag("lobby_menu_open")) {
            system.run(() => lobbyMenu(player))
            player.removeTag("lobby_menu_open")
        }

        if (player.hasTag("lobby_menu_team")) {
            system.run(() => JoinTeam(player))
            player.removeTag("lobby_menu_team")
        }

        if (player.hasTag("lobby_menu_spectate")) {
            system.run(() => lobbyMenu(player))
            player.removeTag("lobby_menu_spectate")
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


function GetTeamCounts(){
    let teamCounts = {nu:[],lambda:[]};

    world.getAllPlayers().forEach(player => {
        if(player.hasTag("team_nu")){
            teamCounts.nu.push(player)
        }
        if(player.hasTag("team_lambda")){
            teamCounts.lambda.push(player)
        }
    })

    return teamCounts;
}

function ConvertTeamCountsToText(teamCounts,currentTeamCount,nuTeamLimit,lambdaTeamLimit){
    let text = ""
    text += `Team Nu: (${currentTeamCount.nu.toString()}/${nuTeamLimit.toString()})\n\n`
    teamCounts.nu.forEach(player => {
        text += ("- " + player.name + "\n")
    })
    text += `Team Lambda: (${currentTeamCount.lambda.toString()}/${lambdaTeamLimit.toString()})\n\n`
    teamCounts.lambda.forEach(player => {
        text += ("- " + player.name + "\n")
    })
    text += "\n"
    return text;
}

function ConvertTeamCountsToNumber(teamCounts) {
    let counts = { nu: 0, lambda: 0 }
    teamCounts.nu.forEach(player => {
        counts.nu++
    })
    teamCounts.lambda.forEach(player => {
        counts.lambda++
    })
    return counts;
}


function JoinTeam(player) {
    let teamLimitsSB = world.scoreboard.getObjective("team_limits")
    let nuTeamLimit = teamLimitsSB.getScore("team_nu")
    let lambdaTeamLimit = teamLimitsSB.getScore('team_lambda')

    let teamCounts = GetTeamCounts()
    let currentTeamCount = ConvertTeamCountsToNumber(teamCounts)
    let playerListStr = ConvertTeamCountsToText(teamCounts,currentTeamCount,nuTeamLimit,lambdaTeamLimit)
    let mainDesc = "Players on teams (as of opening this menu):\n\n" + playerListStr;
    let mainTitle = "test"

    let restrictTeamJoinSB = world.scoreboard.getObjective("restrict_team_joins")
    let restrictTeamVal = restrictTeamJoinSB.getScore("value")



    let form = new ActionFormData();
    if (restrictTeamVal == 0) {
        form.title(mainTitle);
        form.body(mainDesc)
        form.button(`Join Team Nu (${currentTeamCount.nu}/${nuTeamLimit})`, "textures/ui/button_nu");
        form.button(`Join Team Lambda (${currentTeamCount.lambda}/${lambdaTeamLimit})`, "textures/ui/button_lambda");
        form.button("Leave Teams", "textures/ui/button_teamless");
        form.button("Cancel", "textures/ui/button_close");
        form.show(player).then(r => {
            let selection = r.selection
            nuTeamLimit = teamLimitsSB.getScore("team_nu")
            lambdaTeamLimit = teamLimitsSB.getScore('team_lambda')
            teamCounts = GetTeamCounts()
            currentTeamCount = ConvertTeamCountsToNumber(teamCounts)



            switch (selection) {
                case 0:
                    if (currentTeamCount.nu < nuTeamLimit || player.hasTag("team_nu")) {
                        if (player.hasTag("team_nu")) {
                            player.sendMessage("§e[Error]§c You are already on this team.")
                        }
                        else {
                            if (player.hasTag("team_lambda")) {
                                player.removeTag("team_lambda")
                                world.sendMessage(`§e[Team Join] §9${player.name} left Team Lambda and joined Team Nu.`)
                            }
                            else {
                                world.sendMessage(`§e[Team Join] §9${player.name} joined Team Nu.`)
                            }
                            player.addTag("team_nu")

                        }
                    }
                    else {
                        player.sendMessage("§e[Error]§c This team is now full.")
                    }


                    break;
                case 1:

                    if (currentTeamCount.lambda < lambdaTeamLimit || player.hasTag("team_lambda")) {
                        if (player.hasTag("team_lambda")) {
                            player.sendMessage("§e[Error]§c You are already on this team.")
                        }
                        else {
                            if (player.hasTag("team_nu")) {
                                player.removeTag("team_nu")
                                world.sendMessage(`§e[Team Join] §6${player.name} left Team Nu and joined Team Lambda.`)
                            }
                            else {
                                world.sendMessage(`§e[Team Join] §6${player.name} joined Team Lambda.`)
                            }

                            player.addTag("team_lambda")

                        }
                    }
                    else {
                        player.sendMessage("§e[Error]§c This team is now full.")
                    }

                    break;
                case 2:
                    if (!player.hasTag("team_nu") && !player.hasTag("team_lambda")) {
                        player.sendMessage("§e[Error]§c You are not on a team.")
                    }
                    else {
                        world.sendMessage(`§e[Team Leave] §c${player.name} left both teams.`)
                        player.removeTag("team_nu")
                        player.removeTag("team_lambda")
                    }
                    break;
            }
        })
    }
    

}