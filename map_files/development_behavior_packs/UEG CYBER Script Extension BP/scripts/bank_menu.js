import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { redeemCode } from './redeem_codes.js'


const buttonIconLoc = new Array(
    "textures/ui/button_global_currency", // Global Credits
    "textures/ui/button_transfer_funds", // Transfer Funds
    "textures/ui/button_redeem_code" // Redeem Code
)

const buttonNames = new Array(
    "Donate to Global Credits", // Global Credits
    "Transfer Credits", // Transfer Funds
    "Redeem Code" // Redeem Code
)

const mainTitle = "CYBER ATM"
const mainDesc = "\n§eWelcome to the CYBER ATM!\nIn this menu, you can transfer money and redeem codes.\n\n§fSelect an option:\n\n"

world.beforeEvents.itemUse.subscribe(data => {



    const player = data.source




    if (data.itemStack.typeId === "sm:bank") {

        system.run(() => atmInitMenu(player))

    }
})

function atmInitMenu(player) {

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
            donate(player)
        }
        else if (responseValue == 1) {
            transferFunds(player)
        }
        else if (responseValue == 2) {
            redeemCode(player)
        }

    })
}


function donate(player) {
    var playerFunds = world.scoreboard.getObjective("credits")
    var playerFundsF = playerFunds.getScore(player)
    let form = new ModalFormData();
    form.title("Donate to Global Credits");


    if (playerFundsF > 0) {
        form.textField("\n§eWhat are §bGlobal Credits?\n\n§bGlobal Credits§a are a form of currency that allow any player in the world to purchase items that are unlocked for everyone, such as arenas or weapons.\n\nTo get §bGlobal Credits,§a players must donate their §fPersonal Credits§a to the fund.\n\n§cThis transaction is non-refundable.§r\n\nAmount\n", "Amount of  to transfer, Max: " + playerFundsF + "")
    }
    else {
        form.textField("\nAmount\n", 'Insufficient funds!')
    }

    form.show(player).then(r => {



        if (isNaN(parseInt(r.formValues[0])) == false) {


            if (parseInt(r.formValues[0]) > playerFundsF || parseInt(r.formValues[0]) < 1) {
                player.sendMessage("§e[Donations] §cError: The amount entered is either invalid or too high.")
            }
            else {
                player.sendMessage("§e[Donations] §aThank you for your donation! Amount donated:§f " + parseInt(r.formValues[0]) + "")
                playerFunds.addScore(player,-parseInt(r.formValues[0]))
                player.runCommand("scoreboard players add global_credits global_credits " + parseInt(r.formValues[0]))
            }

        }
        else {
            player.sendMessage("§e[Donations] §cError: Invalid amount entered.")
        }

    })
}


function transferFunds(player) {
    var playerFunds = world.scoreboard.getObjective("credits")
    var playerFundsF = playerFunds.getScore(player)

    //this code was taken from gegacraft from the Bedrock Add-Ons Discord, you're a life saver if you see this, thank you

    var allPlayers = world.getAllPlayers().filter(plr => player.name != plr.name).map(player => player.name)
    allPlayers.unshift("No Player")

    var maxFunds

    if (playerFundsF > 3) {
        maxFunds = playerFundsF - 3
    }
    else {
        maxFunds = 0
    }

    let form = new ModalFormData();
    form.title("Transfer Credits");
    form.dropdown("\n§eThis system allows for players to send §fCredits§e to one another without the restriction that §bGlobal Credits§e bring at the cost of a small convenience fee§r\n\nPlayer to transfer to", allPlayers, 0)
    if (maxFunds > 0) {
        form.textField("\nAmount\n" + '3 Convenience Fee', "Amount of  to transfer, Max: " + maxFunds + "")
    }
    else {
        form.textField("\nAmount\n", 'Insufficient funds!')
    }


    form.show(player).then(r => {

        if (r.formValues != undefined) {

            if (r.formValues[0] > 0) {

                if (isNaN(parseInt(r.formValues[1])) == false) {

                    var amountMoney = parseInt(r.formValues[1])
                    if (amountMoney <= playerFundsF && playerFundsF > 3) {
                        var allPlayersNew = world.getAllPlayers().filter(plr => player.name != plr.name).map(player => player.name)
                        if (allPlayersNew.includes(allPlayers[r.formValues[0]])) {
                            world.sendMessage("§e[Money Transfer] §a" + player.name + " §asent §f" + (amountMoney).toString() + "§a to " + allPlayers[r.formValues[0]].toString())
                            playerFunds.addScore(player, (-amountMoney-3))

                            player.runCommand("scoreboard players add " + allPlayers[r.formValues[0]] + " credits " + amountMoney)
                            
                        }
                        else {
                            player.sendMessage("§e[Money Transfer] §cError: Player is not online.\nNo money has been transferred.")
                        }
                    }
                    else {
                        player.sendMessage("§e[Money Transfer] §cError: You cannot afford the amount of money entered, or it is an invalid number.")
                    }

                }
                else {
                    world.sendMessage("§e[Money Transfer] §cError: Invalid value entered.")
                }
            }
            else {
                world.sendMessage("§e[Money Transfer] §cError: No player selected.")
            }
        }



    })
}