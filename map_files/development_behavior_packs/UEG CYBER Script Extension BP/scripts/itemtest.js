//tutorial written by scizorm for someone else

import { world, system, Entity } from '@minecraft/server'
//this allows the script to reference these libraries
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
//these are used for UIs if you wanna do that

world.beforeEvents.itemUse.subscribe(data => {
    //before an item is used, run the following:


    var player = data.source
    //.source is who triggered the event, that's why it's set to the variable "player"



    const dashCooldown = world.scoreboard.getObjective("dashCooldown")
    //gets the dashCooldown scoreboard
    const dashCooldownPlayer = dashCooldown.getScore(player)
    //gets the score of the player who is currently using an item



    const dashStrength = world.scoreboard.getObjective("dashStrength")
    //gets the dashStrength scoreboard
    const dashStrengthScore = dashStrength.getScore("dashStrength")
    //gets the dashStrength score, basically checks what number it is


    const dashCooldownTime = world.scoreboard.getObjective("dashCooldownTime")
    //gets the dashCooldownTime scoreboard
    const dashCooldownTimeScore = dashCooldownTime.getScore("dashCooldownTime")
    //gets the dashCooldownTime score, this will determine how long you have to wait before dashing again, set to 0 if not needed


    if (data.itemStack.typeId == "ms:dash" && dashCooldownPlayer <= 0) {
        //data is all of the information provided by the itemUse event
        //itemStack is a section of the data, basically getting the item from the data
        //typeId is what the identifier of the itemStack is


        dashCooldown.setScore(player, dashCooldownTimeScore)
        //sets the player's cooldown time to however long the cooldown is set to


        player.applyKnockback(player.getViewDirection().x / 5, player.getViewDirection().z / 5, Math.sqrt(player.getViewDirection().x ** 2 + player.getViewDirection().z ** 2) * dashStrengthScore, 0.35)

        //(directionX, directionZ, horizontalStrength, verticalStrength)

    }
})
