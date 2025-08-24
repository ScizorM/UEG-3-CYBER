import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { skinList, designerList, skinSet, skinSet_over, skinFileLoc, skinIconLoc, skinItemIds, effectSkins, skinPrices, effectNames } from './skinList.js'
import { redeemCode, codeList } from './redeem_codes.js'


const buttonIconLoc = new Array(
    "textures/ui/button_global_currency", // Global Credits
    "textures/ui/button_transfer_funds", // Transfer Funds
    "textures/ui/button_redeem_code", // Redeem Code
    "textures/ui/button_redeem_code",
    "textures/ui/button_redeem_code"
)

const buttonNames = new Array(
    "Donate to Global Credits", // Global Credits
    "Transfer Credits", // Transfer Funds
    "Redeem Code", // Redeem Code
    "Redeem Save Code",
    "Generate Save Code"
)

const mainTitle = "CYBER ATM"
const mainDesc = "\n§eWelcome to the CYBER ATM!\nIn this menu, you can transfer money and redeem codes.\n\n§fSelect an option:\n\n"

world.beforeEvents.itemUse.subscribe(data => {



    const player = data.source




    if (data.itemStack.typeId === "sm:bank") {

        system.run(() => atmInitMenu(player))

    }


})





function ClearAllSkins(player) {
    for (let i = 0; i < skinList.length; i++) {
        player.removeTag(i.toString() + "_skin_unlocked")
    }
}

function ClearAllCodes(player) {
    for (let i = 0; i < codeList.length; i++) {
        player.removeTag("code_" + i.toString())
    }
}

function SendDebugMessage(string) {
    //world.sendMessage("[Debug] " + string)
}

function FullCodeGeneration(player) {
    let playerValueDecoded = GenerateAccountValue(player)

    let playerValueEncoded = GenerateCode(playerValueDecoded,player)



    player.sendMessage("§e[Code Generation]§r Your save code is: §d" + playerValueEncoded + "§r. \nAccount Value: " + playerValueDecoded.toString() +"\nThis code will allow you to transfer your personal account value (derived from skins) to other copies of UEG CYBER.\nIt does not transfer player records.\nTo redeem, access the Redeem Save Code menu.")

}

function GetSkinValue(id) {
    let skinString = skinList[id]

    let skinValue = 0;

    if (skinString.includes(""))//uncommon
    {
        skinValue = skinPrices[0]
    }
    else if (skinString.includes(""))//rare
    {
        skinValue = skinPrices[1]
    }
    else if (skinString.includes(""))//epic
    {
        skinValue = skinPrices[2]
    }
    else if (skinString.includes(""))//mythic
    {
        skinValue = skinPrices[3]
    }

    return skinValue;
}

function GenerateAccountValue(player) {
    let value = 0 + world.scoreboard.getObjective("credits").getScore(player);

    //get value from all non-secret skins
    for (var i = 0; i < skinList.length; i++) {
        if (player.hasTag(`${i}_skin_unlocked`)) {
            value += GetSkinValue(i)
            
        }
    }



    SendDebugMessage(value.toString() + " - player's value")


    return value;
}

function DecodePlayerCode(value) {
    let processedValue = value

    let preFinalValue = []

    let finalValue = ""

    for (var j = 0; j < processedValue.length; j++) {
        preFinalValue.push(processedValue.charAt(j))
    }

    SendDebugMessage("Processed Value before decoding: " + processedValue)

    //scramble values
    preFinalValue.reverse();


    if (preFinalValue.length > 2) {
        let temp = preFinalValue[0];

        preFinalValue[0] = preFinalValue[preFinalValue.length - 2]

        preFinalValue[preFinalValue.length - 2] = temp;


    }


    preFinalValue.forEach(char => {
        finalValue += char
    })

    let tempFinal = finalValue;


    finalValue.slice(0,-3)

    SendDebugMessage("Processed Value after decoding: " + finalValue)

    let verificationValues = {
        acctValue: parseInt(finalValue,20),
        acctFirstLetter: tempFinal.slice(tempFinal.length - 3, -2),
        acctLastLetter: tempFinal.slice(tempFinal.length - 2, -1),
        acctLength: tempFinal[tempFinal.length-1]
    }

    SendDebugMessage("Verification Values: \nValue: " + verificationValues.acctValue.toString() + "\nFirst Letter: " + verificationValues.acctFirstLetter + "\nLast Letter: " + verificationValues.acctLastLetter + "\nLength: " + verificationValues.acctLength)

    return verificationValues

}

function GenerateCode(value, player) {

    let trueValue = value

    let processedValue = trueValue.toString(20)

    let playerName = player.name

    processedValue += playerName.charAt(0).toLowerCase()

    processedValue += playerName.charAt(playerName.length - 1).toLowerCase()

    processedValue += playerName.length.toString()

    let preFinalValue = []

    let finalValue = ""

    for (var j = 0; j < processedValue.length; j++) {
        preFinalValue.push(processedValue.charAt(j))
    }

    SendDebugMessage("Processed Value before scrambling: " + processedValue)

    //scramble values

    if (preFinalValue.length > 2) {
        let temp = preFinalValue[0];

        preFinalValue[0] = preFinalValue[preFinalValue.length - 2]

        preFinalValue[preFinalValue.length - 2] = temp;

    }

    preFinalValue.reverse();

    preFinalValue.forEach(char => {
        finalValue += char
    })



    SendDebugMessage("Processed Value after scrambling: " + finalValue)

    return finalValue;

}

function atmInitMenu(player) {

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
            donate(player)
        }
        else if (responseValue == 1) {
            transferFunds(player)
        }
        else if (responseValue == 2) {
            redeemCode(player)
        }
        else if (responseValue == 3) {
            redeemSaveCode(player)
        }
        else if (responseValue == 4) {
            system.run(() => FullCodeGeneration(player))
        }

    })
}

function redeemSaveCode(player) {
    let form = new ModalFormData();
    form.title("Redeem Save Code");
    form.textField("\nEnter Code\n\n§eThis system allows you to redeem a save code from another world to obtain the value of all of the unlocked skins and owned credits from that world. Player data outside of these two things will not be transferred.\n\n§cSave codes can only be redeemed once per world. Please ensure you want to make this change before you do this.\n\nAll skins and codes will be lost upon redeeming the code.\n\nPlease ensure you have the same username as you had when you generated the code.", "Enter code here")
    var creditsSC = world.scoreboard.getObjective("credits")

    form.show(player).then(r => {
        let codeRedeemedSB = world.scoreboard.getObjective("code_redeemed")
        codeRedeemedSB.addScore(player,0)
        let codeRedeemedPlayer = codeRedeemedSB.getScore(player)

        if (codeRedeemedPlayer == 0) {

            var response = r.formValues[0]
            let values = DecodePlayerCode(response)

            let parsedValue = parseInt(values.acctValue, 10)

            let checks = [false, false, false, false]

            if (!Number.isNaN(parsedValue)) {
                SendDebugMessage("number is valid")
                checks[0] = true
            }

            let processedName = player.name.toLowerCase()



            let firstLetter = values.acctFirstLetter
            let lastLetter = values.acctLastLetter
            let nameLength = values.acctLength

            if (firstLetter == processedName[0]) {
                SendDebugMessage("first letter is valid")
                checks[1] = true

            }

            if (lastLetter == processedName[processedName.length - 1]) {
                SendDebugMessage("last letter is valid")
                checks[2] = true
            }

            if (nameLength == processedName.length) {
                SendDebugMessage("length is valid")
                checks[3] = true
            }


            if (checks.includes(false)) {
                SendDebugMessage("check failed")
                player.sendMessage("§c[Error] §rInvalid code.")
            }
            else {
                codeRedeemedSB.setScore(player,1)
                ClearAllCodes(player)
                ClearAllSkins(player)
                player.runCommand("/scoreboard players set @s selected_skin 0 ")
                world.scoreboard.getObjective("credits").setScore(player, parsedValue)
                player.sendMessage("§e[Save Code] §rYour Save Code was redeemed:\n +" + parsedValue.toString() + "\n" + "All previously unlocked skins have been locked, and all codes have been unredeemed.")
            }
        }
        else {
            player.sendMessage("§c[Error] §rYou have already redeemed a code for this world.")
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
                            playerFunds.addScore(player, (-(amountMoney+3)))

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