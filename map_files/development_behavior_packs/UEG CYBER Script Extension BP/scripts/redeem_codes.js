import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
const fail_redeem = "§e[Redeem Code] §cSorry, that code is invalid, or has already been redeemed."
const success_redeem = "§e[Redeem Code] §aSuccess! The code has been redeemed. You have unlocked the following items:"
export function redeemCode(player) {
    let form = new ModalFormData();
    form.title("Redeem Code");
    form.textField("\nEnter Code\n", "Enter code here")
    var creditsSC = world.scoreboard.getObjective("credits")

    form.show(player).then(r => {
        var response = r.formValues[0]
        if (response == codeList[0] && !player.hasTag("code_00")) {
            player.sendMessage(success_redeem)
            player.sendMessage(codeInfo.kaizo)
            player.addTag("code_00")
        }
        else if (response == codeList[1] && !player.hasTag("code_01")) {
            player.sendMessage(success_redeem)
            player.sendMessage(codeInfo.angen1)
            player.addTag("code_01")
        }
        else if (response == codeList[2] && !player.hasTag("code_02")) {
            player.sendMessage(success_redeem)
            player.sendMessage(codeInfo.angen2)
            player.addTag("code_02")
        }
        else if (response == codeList[3] && !player.hasTag("code_03")) {
            player.sendMessage(success_redeem)
            player.sendMessage(codeInfo.angen3)
            player.addTag("code_03")
        }
        else if (response == codeList[4] && !player.hasTag("code_04")) {
            player.sendMessage(success_redeem)
            player.sendMessage(codeInfo.early)
            player.addTag("code_04")
            player.runCommand("tag @s add spack_secret_earlyS")
            player.runCommand("tag @s add 57_skin_unlocked")
            creditsSC.addScore(player, 50)
        }
        else if (response == codeList[5] && !player.hasTag("code_05")) {
            player.sendMessage(success_redeem)
            player.sendMessage(codeInfo.freebie_code)
            player.addTag("code_05")
            creditsSC.addScore(player, 10)
        }
        else if (response == "reset") {
            player.runCommand("function rs")
        }
        else {
            player.sendMessage(fail_redeem)
        }

    })
}
const codeList = new Array(
    "COMINGSOON1",
    "COMINGSOON2",
    "COMINGSOON3",
    "COMINGSOON4",
    "earlys_pport3r",
    "freebie"
)

const codeInfo = {
    "kaizo": [       // 00
        "§d "],
    "angen1": [      // 01
        "§c "],
    "angen2": [      // 02
        "§c "],
    "angen3": [      // 03
        "§c "],
    "early": [       // 04
        "§eEarly Supporter Bundle\n§a- Early Supporter Skin §e[Early Supporter]\n§a- 50"],
    "freebie_code": [// 05
        "§eFreebie Set\n§a- 10"
    ]
}
