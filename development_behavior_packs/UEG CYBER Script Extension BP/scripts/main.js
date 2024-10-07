import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import './arenaSelects.js'
import './abilities_and_dashes.js'
import './weapons.js'
import './playerNames.js'
import './music.js'
import './stores.js'
import './itemUse.js'
import './blockEvents.js'
import './loadoutSelect.js'
import './entityInteract.js'

world.sendMessage("[Scripts reloaded]");



world.afterEvents.playerSpawn.subscribe(({ player, InitialSpawn }) => {
    player.runCommandAsync('function join_commands')
    player.removeTag("music_playing")
})



world.afterEvents.entityHurt.subscribe((data) => {
    const damager = data.damageSource.damagingEntity
    const hurtPlayer = data.hurtEntity

    if (damager != undefined) {
        if (hurtPlayer.hasTag("ingame") && damager.hasTag("shrek")) {
            hurtPlayer.runCommand("function death_new")
        }
    }

})

const dimension = world.getDimension("Overworld")



system.runInterval(() => {

    var allRobots = world.getDimension("overworld").getEntities().forEach(entity => {



        if (entity.typeId == 'sm:settings_robot') {

        }

    })


    const trainTimer = world.scoreboard.getObjective("train_timer")

    const trainTimerTime = trainTimer.getScore("train_timer")


    const trainTimerVisual = world.scoreboard.getObjective("train_visual_timer")

    const trainTimerTimeVisual = trainTimerVisual.getScore("train_visual_timer")


    if (trainTimerTime > 0) {
        trainTimerVisual.setScore("train_visual_timer", 60 - (Math.round(trainTimerTime)) / 20)
    }
    else {
        trainTimerVisual.setScore("train_visual_timer", 0)
    }


    const pregameTimer = world.scoreboard.getObjective("new_pregame_timer")

    const pregameTimerTime = pregameTimer.getScore("new_pregame_timer")

    const pregameTimerVisual = world.scoreboard.getObjective("new_pregame_timer_visual")

    const pregameTimerTimeVisual = pregameTimerVisual.getScore("new_pregame_timer_visual")


    if (pregameTimerTime > 0) {
        pregameTimerVisual.setScore("new_pregame_timer_visual", 30 - (Math.round(pregameTimerTime)) / 20)
    }
    else {
        pregameTimerVisual.setScore("new_pregame_timer_visual", 0)
    }

    world.getAllPlayers().forEach(player => {


        if (player.hasTag("usingBone")) {
            world.sendMessage("hasbone")
        }



        

        const icarus_detect = world.scoreboard.getObjective("icarus_gun_fire")

        if (icarus_detect.getScore(player) == "1") {
            player.triggerEvent("sm:icarus_alternate_1")
        }
        else if (icarus_detect.getScore(player) == "0") {
            player.triggerEvent("sm:icarus_alternate_2")
        }

        if (player.getViewDirection.y > 0) {
            world.sendMessage("above 0")
        }

        
    })
});


function repeater() {
    system.run(repeater);

}
system.run(repeater);


