import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { skinList, designerList, skinSet, skinSet_over, skinFileLoc, skinIconLoc, skinItemIds, effectSkins, skinPrices, effectNames } from './skinList.js'

world.beforeEvents.itemUse.subscribe(data => {



    const player = data.source




    if (data.itemStack.typeId === "sm:gamble" && player.hasTag("enter_gamblinzone")) {

        system.run(() => Gamble(player))

    }

    if (data.itemStack.typeId === "sm:token_redeem" && player.hasTag("enter_gamblinzone")) {

        system.run(() => Redeem(player))

    }
})
function Redeem(player) {
    var playerFunds = world.scoreboard.getObjective("credits")
    var playerTokens = world.scoreboard.getObjective("tokens")
    var playerTokensF = playerTokens.getScore(player)
    var playerFundsF = playerFunds.getScore(player)
    let form = new ActionFormData();
    form.title("Redeem Tokens");
    form.button(skinList[37] + " - 30", skinIconLoc[37])
    form.button(skinList[38] + " - 30", skinIconLoc[38])
    form.button(skinList[39] + " - 30", skinIconLoc[39])
    form.show(player).then(r => {

        let selection = r.selection

    })
}

function Gamble(player){
    var playerFunds = world.scoreboard.getObjective("credits")
    var playerTokens = world.scoreboard.getObjective("tokens")
    var playerFundsF = playerFunds.getScore(player)
    let form = new ActionFormData();
    form.title("Luck-Testing Machine");

    

    if (playerFundsF > 2) {
        form.body("§6TRY YOUR LUCK!\n\n§rCost: 3\n\nReward: Up to 20\n\n")
        form.button("Test Your Luck (3)", "textures/ui/button_gamble")
    }
    else {
        form.body("§6TRY YOUR LUCK!\n\n§rCost: 3\n\nReward: Up to 20\n\nInsufficient Funds.\n\n")
    }
    form.button("Cancel","textures/ui/button_close")

    form.show(player).then(r => {
        var selection = r.selection

        if (selection == 0 && playerFundsF > 2) {
            var randomNumber = Math.floor(Math.random() * 29)
            playerFunds.addScore(player, -3)
            if (randomNumber >= 0 && randomNumber <= 6 ) {
                var randomOutput = Math.floor(Math.random() * 19) + 1
                player.sendMessage(`§e[Luck-Testing Machine]§r YOU WON! (+${randomOutput.toString()})`)
                //playerTokens.addScore(player,randomOutput)
                playerFunds.addScore(player,randomOutput)

            }
            else {
                player.sendMessage("§e[Luck-Testing Machine]§r You lost... Better luck next time.")
            }
        }
    })
}