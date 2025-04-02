import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'




world.beforeEvents.itemUse.subscribe(data => {



    const player = data.source




    if (data.itemStack.typeId === "sm:purchase") {

        if (player.hasTag("enter_j_mikes")) {
            system.run(() => redeemCode(player))
        }



    }
})

const fail_redeem = "§f<§kScizorM§r> That's not the answer I'm looking for."
const success_redeem = "§f<§kScizorM§r> That was the right answer."
export function redeemCode(player) {
    let form = new ModalFormData();
    form.title("Select Sandwich");
    form.textField("\nWhat sandwich do you want? Our grill isn't working right now, so we can only do cold subs.\n", "Type your sub:")
    var creditsSC = world.scoreboard.getObjective("credits")

    form.show(player).then(r => {
        var response = r.formValues[0]
        if (response != undefined) {
            if (codeList.includes(response.trim())) {
                system.run(() => redeemCode2(player))
            }
            else {
                player.sendMessage(fail_redeem)
            }
        }

    })
}
const codeList = new Array(
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14"
)

export function redeemCode2(player) {
    let form = new ModalFormData();
    form.title("Customize Sandwich");
    form.textField("What do you want on your sandwich?\n", "Enter ingredient here")
    var creditsSC = world.scoreboard.getObjective("credits")

    form.show(player).then(r => {
        var response = r.formValues[0]
        if (response.toLowerCase().trim() == "mike's way") {
            player.sendMessage("<ScizorM§r> DID SOMEBODY SAY MIKE'S WAY????")
            player.runCommand("function unlock_0058")
        }
        else {
            player.sendMessage("<§kScizorM§r> Okay.")
        }

    })
}