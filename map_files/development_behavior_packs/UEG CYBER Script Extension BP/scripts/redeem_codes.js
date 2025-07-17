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
        else if (response == codeList[6] && !player.hasTag("code_06")) {
            player.sendMessage(success_redeem)
            player.sendMessage(codeInfo.rella1)
            player.addTag("code_06")
            player.addTag("46_skin_unlocked")
            player.addTag("47_skin_unlocked")
            player.addTag("48_skin_unlocked")
            player.addTag("spack_secret_freedom")
            creditsSC.addScore(player, 39)
        }
        else if (response == codeList[7] && !player.hasTag("code_07")) {
            player.sendMessage(success_redeem)
            player.sendMessage(codeInfo.rella2)
            player.addTag("code_07")
            player.addTag("49_skin_unlocked")
            player.addTag("spack_secret_s")
            player.runCommand("/function unlock_baby_staff")
            creditsSC.addScore(player, 16)
        }
        else if (response == codeList[8] && !player.hasTag("code_07")) {
            player.sendMessage(success_redeem)
            player.sendMessage(codeInfo.rella3)
            player.addTag("code_08")
            player.runCommand("/function unlock_big_joe")
            creditsSC.addScore(player, 20)
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
    "freebie",
    "r3llaCh22z1!",
    "Il03vePizAA!!!",
    "Burger"
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
    ],
    "rella1": [// 05
        "§eMaster Rella Secret Code I\n§a- Freedom Skin Pack\n§a- 39"
    ],
    "rella2": [// 05
        "§eMaster Rella Secret Code II\n§a- Robot Baby Wand (Item)\n- Robot Baby Skin\n§a- 16"
    ],
    "rella3": [// 05
        "§eMaster Rella Secret Code III\n§a- Big Joe (Item)\n§a- 20"
    ]
}
