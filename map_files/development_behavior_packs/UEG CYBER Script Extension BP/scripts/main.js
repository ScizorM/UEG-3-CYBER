import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { skinItemIds, effectSkins } from './skinList.js'
import './arenaSelects.js'
import './abilities_and_dashes.js'
import './weapons.js'
import './playerNames.js'
import './music.js'
import './stores.js'
import './itemUse.js'
import './blockEvents.js'
import './entityInteract.js'
import './skinRandomizer.js'
import './skinSettings.js'
import './bank_menu.js'
import './loadouts.js'
import './emergencyReset.js'

world.sendMessage("[Scripts reloaded]");




world.afterEvents.playerSpawn.subscribe(({ player, InitialSpawn }) => {
    player.runCommandAsync('function join_commands')
    player.removeTag("music_playing")
})



world.afterEvents.entityHurt.subscribe((data) => {
    const damager = data.damageSource.damagingEntity
    const hurtPlayer = data.hurtEntity

    if (damager) {
        if (hurtPlayer.typeId == 'minecraft:player') {
            if (hurtPlayer.hasTag("ingame") && damager.hasTag("shrek")) {
                hurtPlayer.runCommand("function death_new")
            }
        }

    }

})

const dimension = world.getDimension("Overworld")





system.runInterval(() => {




    var allEntities = world.getDimension("overworld").getEntities().forEach(entity => {


        if (entity.typeId == "sm:scaler_bomb") {
            if (entity.getComponent(EntityComponentTypes.Health).currentValue == 1) {

                entity.runCommand("function explosion_scaler")
                entity.triggerEvent("sm:explode")

            }
        }


    })


    const trainTimer = world.scoreboard.getObjective("train_timer")

    const trainTimerTime = trainTimer.getScore("train_timer")


    const trainTimerVisual = world.scoreboard.getObjective("train_visual_timer")

    const trainTimerTimeVisual = trainTimerVisual.getScore("train_visual_timer")


    if (trainTimerTime > 0) {
        trainTimerVisual.setScore("train_visual_timer", 30 - (Math.round(trainTimerTime)) / 20)
    }
    else {
        trainTimerVisual.setScore("train_visual_timer", 0)
    }


    const pregameTimer = world.scoreboard.getObjective("new_pregame_timer")

    const pregameTimerTime = pregameTimer.getScore("new_pregame_timer")

    const pregameTimerVisual = world.scoreboard.getObjective("new_pregame_timer_visual")

    const pregameTimerTimeVisual = pregameTimerVisual.getScore("new_pregame_timer_visual")


    if (pregameTimerTime > 0) {
        pregameTimerVisual.setScore("new_pregame_timer_visual", 15 - (Math.round(pregameTimerTime)) / 20)
    }
    else {
        pregameTimerVisual.setScore("new_pregame_timer_visual", 0)
    }

    var allBomb = world.getDimension("overworld").getEntities({type:"sm:black_hole"}).forEach(entity => {


        entity.dimension.getEntities({ maxDistance: 7, location: entity.location, type:"minecraft:player" }).forEach(entity2 => {
            var playerDisplacement = { x: entity.location.x - entity2.location.x, y: entity.location.y - entity2.location.y, z: entity.location.z - entity2.location.z }
            var verticality = 0;
            if (playerDisplacement.y > 0) {
                verticality = 0.5;
            }
            else if (playerDisplacement.y < 0) {
                verticality = -0.5;
            }
            else {
                verticality = 0;
            }
            if (Math.abs(playerDisplacement.x) > 0.5 || Math.abs(playerDisplacement.y) > 2 || Math.abs(playerDisplacement.z) > 0.5) {
                    entity2.applyKnockback(playerDisplacement.x, playerDisplacement.z, 1, verticality)
                
            }

        })


    })

    world.getAllPlayers().forEach(player => {

        var gameActive = world.scoreboard.getObjective("game_active")
        var gameActiveNum = gameActive.getScore("game_active")

        var emergencyPhase = world.scoreboard.getObjective("emergencyphase")

        if (gameActiveNum == 0) {
            emergencyPhase.setScore(player,0)
        }

        var maxWins = world.scoreboard.getObjective("max_wins")
        var maxWinsNum = maxWins.getScore("max_wins")

        var teamWins = world.scoreboard.getObjective("team_wins")
        var nuWins = teamWins.getScore("team_nu")
        var lambdaWins = teamWins.getScore("team_lambda")

        var team = "No Team"
        var statusEffect = ""
        var statusCount = 0
        var statusIcons = "\n\n"
        var scoreboardIngame = ` ${nuWins}      Points to Win: ${maxWinsNum}       ${lambdaWins}`

        if (player.hasTag("team_nu")) {
            team = "Team: "
        }
        else if (player.hasTag("team_lambda")) {
            team = "Team: "
        }
        else {
            team = "No Team"
        }

        if (player.hasTag("status_scaled")) {
            statusCount++
            if (statusCount == 1) {
                statusIcons = statusIcons + "Status Effects: "
            }
            statusIcons = statusIcons + ""
        }
        if (player.hasTag("status_stunned")) {
            statusCount++
            if (statusCount == 1) {
                statusIcons = statusIcons + "Status Effects: "
            }
            statusIcons = statusIcons + ""
        }
        if (player.hasTag("status_overheat")) {
            statusCount++
            if (statusCount == 1) {
                statusIcons = statusIcons + "Status Effects: "
            }
            statusIcons = statusIcons + ""
        }

        if (player.hasTag("status_scaled") && statusCount == 1) {
            statusEffect = "\n\n§cStatus Effect: Scaled"
        }
        else if (player.hasTag("status_stunned") && statusCount == 1) {
            statusEffect = "\n\n§aStatus Effect: Stunned"
        }
        else if (player.hasTag("status_overheat") && statusCount == 1) {
            statusEffect = "\n\n§eStatus Effect: Overheat"
        }
        else {
            statusEffect = statusIcons
        }

        if (gameActiveNum == 0) {
            player.runCommand(`titleraw @s title {"rawtext":[{"text":"Scoreboard\nNo matches are active.\n\n${team}${statusEffect}"}]}`)
        }
        else if (gameActiveNum == 1) {
            player.runCommand(`titleraw @s title {"rawtext":[{"text":"Scoreboard\n${scoreboardIngame}\n\n${team}${statusEffect}"}]}`)
        }

        system.run(() => renderSkins(player))

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

function renderSkins(player) {

    const dashEffectSB = world.scoreboard.getObjective("dash_effect_timer")
    var dashEffectPlayer = dashEffectSB.getScore(player)

    const currentVariantSB = world.scoreboard.getObjective("skin_variant_timer")
    var currentVariantPlayer = currentVariantSB.getScore(player)
    var currentVariantNPC = currentVariantSB.getScore("npc")

    currentVariantSB.addScore(player, 1)
    currentVariantSB.addScore("npc", 1)

    if (currentVariantNPC < 5) {
        player.runCommand("event entity @e[type=sm:skin_preview_npc] sm:skin_variant_0")
    }
    else if (currentVariantNPC < 7) {
        player.runCommand("event entity @e[type=sm:skin_preview_npc] sm:skin_variant_1")
    }
    else if (currentVariantNPC < 9) {
        player.runCommand("event entity @e[type=sm:skin_preview_npc] sm:skin_variant_2")
    }
    else if (currentVariantNPC < 11) {
        player.runCommand("event entity @e[type=sm:skin_preview_npc] sm:skin_variant_3")
    }
    else if (currentVariantNPC < 13) {
        player.runCommand("event entity @e[type=sm:skin_preview_npc] sm:skin_variant_4")
    }
    else if (currentVariantNPC < 15) {
        player.runCommand("event entity @e[type=sm:skin_preview_npc] sm:skin_variant_5")
    }
    else if (currentVariantNPC < 17) {
        player.runCommand("event entity @e[type=sm:skin_preview_npc] sm:skin_variant_6")
    }
    else if (currentVariantNPC < 19) {
        player.runCommand("event entity @e[type=sm:skin_preview_npc] sm:skin_variant_7")
    }
    else if (currentVariantNPC > 80) {
        currentVariantSB.setScore("npc", 0)
    }

    if (dashEffectPlayer == undefined) {
        if (currentVariantPlayer < 5) {
            player.runCommand("event entity @s sm:variant_0")
        }
        else if (currentVariantPlayer < 7) {
            player.runCommand("event entity @s sm:variant_1")
        }
        else if (currentVariantPlayer < 9) {
            player.runCommand("event entity @s sm:variant_2")
        }
        else if (currentVariantPlayer < 11) {
            player.runCommand("event entity @s sm:variant_3")
        }
        else if (currentVariantPlayer < 13) {
            player.runCommand("event entity @s sm:variant_4")
        }
        else if (currentVariantPlayer < 15) {
            player.runCommand("event entity @s sm:variant_5")
        }
        else if (currentVariantPlayer < 17) {
            player.runCommand("event entity @s sm:variant_6")
        }
        else if (currentVariantPlayer < 19) {
            player.runCommand("event entity @s sm:variant_7")
        }
        else if (currentVariantPlayer > 80) {
            currentVariantSB.setScore(player, 0)
        }
    }


    const selectedSkinSB = world.scoreboard.getObjective("selected_skin")
    var selectedSkinPlayer = selectedSkinSB.getScore(player)

    const selectedEffectSB = world.scoreboard.getObjective("selected_effect")
    var selectedEffectPlayer = selectedEffectSB.getScore(player)

    var item = player.getComponent("equippable")

    var identifier = skinItemIds[selectedSkinPlayer]

    player.runCommand(`replaceitem entity @s slot.armor.head 0 ${identifier} 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`)


    if (effectSkins.includes(selectedSkinPlayer) == false) {
        if (selectedEffectPlayer < 2) {
            player.runCommand('function render_rocket_default')
        }
        else if (selectedEffectPlayer == 2) {
            player.runCommand('function render_rocket_fire')
        }
        else if (selectedEffectPlayer == 3) {
            player.runCommand('function render_rocket_digi')
        }
    }

    


}
