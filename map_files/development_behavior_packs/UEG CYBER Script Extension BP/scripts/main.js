import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes} from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { skinItemIds, effectSkins } from './skinList.js'
import { titleTags, storeTags } from './tagList.js'
import { weaponIDList } from './loadoutList.js'

import './newArenaLoading.js'
//import './arenaSelects.js' //keep disabled

import './skinSettings.js'
import './bank_menu.js'
import './loadouts.js'
import './emergencyReset.js'
import './weaponStore.js'
import './lobbyMenu.js'







import './foodAssign.js'
import './foodStore.js'
import './newerStores.js'
import './sList.js'
import './gamble.js'
import './trainingFunctions.js'
import './rpgSkinRandomizer.js'

import './questConditions.js'

import './abilities_and_dashes.js'

import './weapons.js'
import './playerNames.js'
import './train_randomizer.js'
import './music.js'
import './stores.js'
import './itemUse.js'

import './blockEvents.js'
import './entityInteract.js'
import './skinRandomizer.js'
import './trusted.js'




import { itemNameList, itemIconLocation, itemScoreboard, itemDescList } from './foodList.js'
world.sendMessage("[Scripts reloaded]");




world.afterEvents.playerSpawn.subscribe(({ player, InitialSpawn }) => {
    player.runCommandAsync('function join_commands')
    player.removeTag("seated")
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

///Event Type 0 = spawn entity, Event Type 1 = spawn particle
function RandomlySpawnEntities(entityType,entityCount,eventType){
    const baseCoords = {x:-109,y:75,z:280}
    const spawnCount = entityCount;
    const dimension = world.getDimension("Overworld")
    var randomPositions = {};

    for(var i = 0; i < spawnCount; i++){
        randomPositions = {x:baseCoords.x-Math.floor(Math.random()*49),y:baseCoords.y,z:baseCoords.z-Math.floor(Math.random()*49)}
        if(eventType == 0){
            world.getDimension("Overworld").runCommand(`summon ${entityType} ${randomPositions.x} ${randomPositions.y} ${randomPositions.z}`)
        }
        else{
            world.getDimension("Overworld").runCommand(`particle ${entityType} ${randomPositions.x} ${randomPositions.y} ${randomPositions.z}`)
        }

    }
}

function SendGambleMessage(eventType){
    world.sendMessage(`§e[Arena Event] §o§6${eventType}!!!`)
}

function ArenaEventTntRain(){
    SendGambleMessage("TNT Rain")
    RandomlySpawnEntities("tnt",50,0)
}

function ArenaEventSlowFall(){
    SendGambleMessage("Slow Falling")
    world.getDimension("Overworld").runCommand("effect @a[tag=ingame] slow_falling 10 3")
}

function ArenaEventBigJoeMode(){
    SendGambleMessage("Big Joe Rain")
    RandomlySpawnEntities("sm:big_joe",2,0)
}

function ArenaEventBabyStorm(){
    SendGambleMessage("Baby Storm")
    RandomlySpawnEntities("sm:robot_babies",2,1)
}

function ArenaEventEmp(){
    SendGambleMessage("EMP")
    world.getDimension("Overworld").runCommand("execute as @a[tag=ingame] run function emp_other")
}

function ArenaEventScale(){
    SendGambleMessage("Scaler Explosion")
    world.getDimension("Overworld").runCommand("execute as @a[tag=ingame] run execute positioned as @s run function explosion_scaler")
}

function RandomGambleEvent() {

    var randomNumber = Math.floor(Math.random() * 6)

    switch(randomNumber){
        case 0:
            system.run((tntrain)=>ArenaEventTntRain())
            break;
        case 1:
            system.run((slowFall)=>ArenaEventSlowFall())
            break;
        case 2:
            system.run((bigJoe)=>ArenaEventBigJoeMode())
            break;
        case 3:
            system.run((babyStorm)=>ArenaEventBabyStorm())
            break;
        case 4:
            system.run((emp)=>ArenaEventEmp())
            break;
        case 5:
            system.run((scale)=>ArenaEventScale())
            break;
    }

}

function NewTitleSystem(player){
    
        const belowPos = {
            x: 0,
            y: -1,
            z: 0
        }

        var blockBelow = dimension.getBlockFromRay(player.location, belowPos, {includeTypes:["sm:enter_store_new","sm:exit_store_new"],maxDistance:5})

        if (blockBelow && !player.hasTag("ingame")) {
            if (blockBelow.block.typeId == "sm:exit_store_new") {

                if (player.hasTag("exit_stores") == false) {
                    var enterStoreIndexSB = world.scoreboard.getObjective("title_index")
                    var enterStoreIndexPlayer = enterStoreIndexSB.getScore(player)
                    player.removeTag(storeTags[enterStoreIndexPlayer])
                    player.runCommand("title @s subtitle update")
                    player.addTag("new_title_init")
                    player.addTag("exit_stores")
                    player.removeTag("music_playing")
                    if (player.hasTag("1f")) {
                        player.addTag("new_title_1f")
                    }
                    else if (player.hasTag("2f")) {
                        player.addTag("new_title_2f")
                    }
                    else if (player.hasTag("3f")) {
                        player.addTag("new_title_3f")
                    }
                    weaponIDList.forEach(item => {
                        player.runCommand(`clear @s ${item}`)
                    })
                }

            }
            else if (blockBelow.block.typeId == "sm:enter_store_new") {
                var enterStoreIndexSB = world.scoreboard.getObjective("title_index")
                var enterStoreIndexPlayer = enterStoreIndexSB.getScore(player)
                if (player.hasTag(storeTags[enterStoreIndexPlayer]) == false) {

                    titleTags.forEach(tag => {
                        player.runCommand(`tag @s remove ${tag}`)
                    })

                    player.addTag(storeTags[enterStoreIndexPlayer])
                    player.removeTag("exit_stores")
                    player.removeTag("music_playing")
                    player.addTag("new_title_init")
                }

            }
            else {
            }
        }

        var newTitleSystemSB = world.scoreboard.getObjective("new_title_system")
        var newTitleSystemPlayer = newTitleSystemSB.getScore(player)

        var titleText;
        var processedText;
        var innerColor;   //Misc. text
        var outerColor; //Brackets
        var maxTitleTime;

        var subtitle = ""


        if (player.hasTag("new_title_respawned")) {
            titleText = "RESPAWNED"
            innerColor = "§b"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_death")) {
            titleText = "SYSTEM FAILURE."
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 10

        }
        else if (player.hasTag("new_title_3f")) {
            titleText = "3F:SHOPPING DISTRICT"
            innerColor = "§e"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_2f")) {
            titleText = "2F:CENTRAL PLAZA"
            innerColor = "§e"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_riftzone")) {
            titleText = "RIFT_ZONE"
            innerColor = "§f"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_j_mikes")) {
            titleText = "JERSEY_MICHAELS"
            innerColor = "§b"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_1f")) {
            titleText = "1F:METRO"
            innerColor = "§e"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_3")) {
            titleText = "3"
            innerColor = "§a"
            outerColor = "§l§f"
            maxTitleTime = 10

        }
        else if (player.hasTag("new_title_2")) {
            titleText = "2"
            innerColor = "§e"
            outerColor = "§l§f"
            maxTitleTime = 10

        }
        else if (player.hasTag("new_title_1")) {
            titleText = "1"
            innerColor = "§6"
            outerColor = "§l§f"
            maxTitleTime = 10

        }
        else if (player.hasTag("new_title_engage")) {
            titleText = "ENGAGE"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_round_end")) {
            titleText = "ZONE CLEAR"
            innerColor = "§a"
            outerColor = "§l§f"
            maxTitleTime = 10

        }
        else if (player.hasTag("new_title_team_nu_win")) {
            titleText = "TEAM NU WINS."
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_team_lambda_win")) {
            titleText = "TEAM LAMBDA WINS."
            innerColor = "§d"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_overheat")) {
            titleText = "SYSTEM OVERHEAT."
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 10

        }
        else if (player.hasTag("new_title_cooldown")) {
            titleText = "TEMP. RECOVERED"
            innerColor = "§a"
            outerColor = "§l§f"
            maxTitleTime = 10

        }
        else if (player.hasTag("new_title_stunned")) {
            titleText = "STUNNED"
            innerColor = "§a"
            outerColor = "§l§f"
            maxTitleTime = 10

        }
        else if (player.hasTag("new_title_scaled")) {
            titleText = "SCALED."
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 10

        }
        else if (player.hasTag("enter_marque")) {
            titleText = "MARQUE'S WEAPON CENTER"
            innerColor = "§6"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_music")) {
            titleText = "TORIMOTI MUSIC"
            innerColor = "§d"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_credits")) {
            titleText = "CYBER-SPACE TRAVEL"
            innerColor = "§b"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_reactor")) {
            titleText = "REACTOR SETTINGS CENTER"
            innerColor = "§g"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_splendid")) {
            titleText = "SPLENDID SUITS"
            innerColor = "§a"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_credits_new")) {
            titleText = "CREDITS"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_ueg")) {
            titleText = "UEG LEGACY STORE"
            innerColor = "§d"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_rpg")) {
            titleText = "RPG GAME STORE"
            innerColor = "§a"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_questMaster")) {
            titleText = "QUEST STORE"
            innerColor = "§a"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_bank")) {
            titleText = "CYBER BANK"
            innerColor = "§b"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_freedom")) {
            titleText = "FREEDOM BURGER DINER"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_abilitystore")) {
            titleText = "WIP ABILITY STORE"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_train_ready")) {
            titleText = "ENTER THE TRAIN"
            innerColor = "§a"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_to_azure")) {
            titleText = "TO: AZURE STADIUM"
            innerColor = "§b"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_welcome_azure")) {
            titleText = "ARENA VOTE"
            innerColor = "§e"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_arena_vote")) {
            titleText = "ARENA VOTE"
            innerColor = "§e"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_start_train")) {
            titleText = "START THE TRAIN"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_abilitystore")) {
            titleText = "ABILITY STORE"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_enter_training_center")) {
            titleText = "TRAINING CENTER"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_hot_topic_clone")) {
            titleText = "NAME TBD"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_perfume_store")) {
            titleText = "PERFUME STORE"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("enter_gamblinzone")) {
            titleText = "GAMBLINZONE"
            innerColor = "§6"
            outerColor = "§l§f"
            maxTitleTime = 20

        }
        else if (player.hasTag("new_title_training_try_again")) {
            titleText = "TRY AGAIN"
            innerColor = "§C"
            outerColor = "§l§f"
            maxTitleTime = 20
        }
        else if (player.hasTag("new_title_training_checkpoint")) {
            titleText = "CHECKPOINT"
            innerColor = "§6"
            outerColor = "§l§f"
            maxTitleTime = 20
        }
        else if (player.hasTag("new_title_training_clear")) {
            titleText = "TRAINING CLEAR"
            innerColor = "§a"
            outerColor = "§l§f"
            maxTitleTime = 20
        }

        else {
            titleText = "void"
            innerColor = "§c"
            outerColor = "§l§f"
            maxTitleTime = 10
        }

        if (player.hasTag("new_title_init")) {
            newTitleSystemSB.setScore(player, maxTitleTime)
            player.removeTag("new_title_init")
        }

        if (newTitleSystemPlayer > 0) {




            var titleTextLength = titleText.length
            var loopTimes;

            if (titleText != "void") {
                if (newTitleSystemPlayer == maxTitleTime) {
                    var processedText = ""
                    for (var char of titleText) {

                        processedText += char + "  "

                    }

                    player.runCommand(`title @s subtitle update${outerColor}[§r${innerColor}${processedText.trim()}§r${outerColor}]`)
                }
                else if (newTitleSystemPlayer == Math.round(maxTitleTime - (maxTitleTime * .05))) {
                    player.runCommand(`title @s subtitle update`)
                }
                else if (newTitleSystemPlayer == Math.round(maxTitleTime - (maxTitleTime * .1))) {
                    var processedText = ""
                    for (var char of titleText) {

                        processedText += char + " "

                    }

                    player.runCommand(`title @s subtitle update${outerColor}[§r${innerColor}${processedText.trim()}§r${outerColor}]`)
                }
                else if (newTitleSystemPlayer == Math.round(maxTitleTime - (maxTitleTime * .15))) {
                    player.runCommand(`title @s subtitle update`)
                }
                else if (newTitleSystemPlayer == Math.round(maxTitleTime - (maxTitleTime * .2))) {
                    player.runCommand(`title @s subtitle update${outerColor}[§r${innerColor}${titleText}§r${outerColor}]§r${subtitle}`)
                }

                else if (newTitleSystemPlayer == Math.round(maxTitleTime - (maxTitleTime * .95))) {
                    var byeText = "";
                    var preProcessedText = "[" + titleText + "]"
                    for (var char in preProcessedText) {

                        byeText += "-"

                    }

                    player.runCommand(`title @s subtitle update${outerColor}[§r${innerColor}${byeText.trim()}§r${outerColor}]`)
                }
            }


            newTitleSystemSB.addScore(player, -1)
            if (newTitleSystemPlayer == 1) {
                titleTags.forEach(tagName => {

                    player.removeTag(tagName)

                })
            }
        }
        else {

            player.runCommand(`title @s subtitle update`)
            player.removeTag("new_title_active")

        }


}




function ItemTitles(player){

    if(player.hasTag("ingame")){
        var assignedItemSB = world.scoreboard.getObjective("assigned_food")
        var assignedItemSBPlayer = assignedItemSB.getScore(player)

        var assignedItemName;

        var icarusTempSB = world.scoreboard.getObjective("icarus_temperature")
        var icarusTempPlayer = icarusTempSB.getScore(player)

        var icarusTempDisplayName = "0°F"

        if (icarusTempPlayer != undefined) {
            if (icarusTempPlayer < 30) {
                icarusTempDisplayName = "§a" + (icarusTempPlayer * 10) + "°F"
            }
            else if (icarusTempPlayer < 50) {
                icarusTempDisplayName = "§e" + (icarusTempPlayer * 10) + "°F"
            }
            else if (icarusTempPlayer < 70) {
                icarusTempDisplayName = "§6" + (icarusTempPlayer * 10) + "°F"
            }
            else if (icarusTempPlayer < 100){
                icarusTempDisplayName = "§c" + (icarusTempPlayer * 10) + "°F"
            }
            else {
                icarusTempDisplayName = "§b" + (icarusTempPlayer * 10) + "°F"
            }

        }

        if (assignedItemSBPlayer != undefined) {
            assignedItemName = itemNameList[assignedItemSBPlayer]
            var assignedItemCountSB = world.scoreboard.getObjective(itemScoreboard[assignedItemSBPlayer])
            var assignedItemCountPlayer = assignedItemCountSB.getScore(player)
        }
        else {
            assignedItemName = "No Item"
            var assignedItemCountPlayer = 0
        }
        player.runCommand(`execute unless entity @s[hasitem={location=slot.weapon.mainhand,item=sm:use_stored_item}] run execute unless entity @s[hasitem={location=slot.weapon.mainhand,item=sm:icarus}] run execute as @s[tag=ingame] run titleraw @s actionbar {"rawtext":[{"text":"Azure Stadium\n\nRemaining Players:\n"},{"score":{"name":"team_nu","objective":"player_alive_count"}},{"text":" - "},{"score":{"name":"team_lambda","objective":"player_alive_count"}},{"text":"\n\nLives:\n"},{"score":{"name":"@s","objective":"lives"}},{"text":"\n\nWeapon Cooldown:\n"},{"score":{"name":"@s","objective":"weapon_cooldown"}}]}`)
        player.runCommand(`execute if entity @s[hasitem={location=slot.weapon.mainhand,item=sm:use_stored_item}] run execute unless entity @s[hasitem={location=slot.weapon.mainhand,item=sm:icarus}] run execute as @s[tag=ingame] run titleraw @s actionbar {"rawtext":[{"text":"Azure Stadium\n\nRemaining Players:\n"},{"score":{"name":"team_nu","objective":"player_alive_count"}},{"text":" - "},{"score":{"name":"team_lambda","objective":"player_alive_count"}},{"text":"\n\nLives:\n"},{"score":{"name":"@s","objective":"lives"}},{"text":"\n\nStored Item:\n${assignedItemName} (${assignedItemCountPlayer})"}]}`)
        player.runCommand(`execute if entity @s[hasitem={location=slot.weapon.mainhand,item=sm:icarus}] run execute unless entity @s[hasitem={location=slot.weapon.mainhand,item=sm:use_stored_item}] run execute as @s[tag=ingame] run titleraw @s actionbar {"rawtext":[{"text":"Azure Stadium\n\nRemaining Players:\n"},{"score":{"name":"team_nu","objective":"player_alive_count"}},{"text":" - "},{"score":{"name":"team_lambda","objective":"player_alive_count"}},{"text":"\n\nLives:\n"},{"score":{"name":"@s","objective":"lives"}},{"text":"\n\nTemperature:\n${icarusTempDisplayName}"}]}`)
    }
        
}

function FoodEffectManager(player){
    var foodEffectTimerSB = world.scoreboard.getObjective("food_effect_timer")
        var foodEffectTimerPlayer = foodEffectTimerSB.getScore(player)




        if (foodEffectTimerPlayer != undefined) {
            if (foodEffectTimerPlayer > 0) {
                if (player.hasTag("gob_effects")) {
                    player.runCommand("particle sm:gob_goo_trail ~ ~0.5 ~")
                }
                
                foodEffectTimerSB.addScore(player, -1)
            }
            else {
                player.removeTag("gob_effects")
                player.runCommand("scoreboard players reset @s food_effect_timer")
            }
        }
}

function MenuItemManager(player){
        if (player.hasTag("exit_stores") && !player.hasTag("team_nu") && !player.hasTag("team_lambda")) {
            player.runCommand(`replaceitem entity @s slot.hotbar 0 sm:lobby_menu 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`)
        }
        else {
            player.runCommand(`clear @s sm:lobby_menu `)
        }

        if (player.hasTag("enter_tc")) {
            player.runCommand(`execute if score @s curTrainRoom matches -1 run replaceitem entity @s slot.hotbar 4 sm:training_menu 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}`)
        }
        else {
            player.runCommand("clear @s sm:training_menu")
        }

}

system.runInterval((runInt) => {

    var gamblingArenaTimer = world.scoreboard.getObjective("gambling_arena_timer")

    var gamblingArenaTimerT = gamblingArenaTimer.getScore("timer")


    var roundActiveSB = world.scoreboard.getObjective("round_active")
    var roundActive = roundActiveSB.getScore("round_active")


    if (roundActive == 1) {
        if (gamblingArenaTimerT > 0) {
            gamblingArenaTimer.addScore("timer", -1)
        }
        else {
            gamblingArenaTimer.setScore("timer", 200)
        }
    }
    else {
        gamblingArenaTimer.setScore("timer",200)
    }

    

    var skinRerollTimer = world.scoreboard.getObjective("skin_reroll_timer")
    var skinRerollRealtime = skinRerollTimer.getScore("skin_reroll_real")
    var skinRerollMinutes = skinRerollTimer.getScore("skin_reroll_timer")


    if (skinRerollRealtime > 0) {
        skinRerollTimer.addScore("skin_reroll_real", -1)
    }
    else {
        skinRerollTimer.setScore("skin_reroll_real", 48000)
        world.sendMessage("§e[Skin Stores]§a Skin stores are now restocking their inventory!")
        world.getDimension("overworld").runCommand("function trigger_skin_randomizer")
        world.getDimension("overworld").runCommand("scoreboard players set active rpg_store_randomizer 1")
    }

    skinRerollTimer.setScore("skin_reroll_timer",Math.round(skinRerollRealtime/2000))

    var allEntities = world.getDimension("overworld").getEntities().forEach(entity => {


        if (entity.typeId == "sm:scaler_bomb") {
            if (entity.getComponent(EntityComponentTypes.Health).currentValue == 1) {

                entity.runCommand("function explosion_scaler")
                entity.triggerEvent("sm:explode")

            }
        }
        else if(entity.typeId == "sm:gamblinmachine_static"){
            if(entity.hasTag("debug_randomEffect")){
            system.run((randGamble)=>RandomGambleEvent())
            entity.removeTag("debug_randomEffect")
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


        //ms diff below is tested with two online players

        MeleeSystem(player)

        NewTitleSystem(player) //1ms diff

        MenuItemManager(player) //1ms diff

        FoodEffectManager(player) //minimal diff

        ItemTitles(player) //1.5ms diff per ingame player
        
        IcarusEffects(player) //0.5ms diff

        ScoreBoardMenu(player) //1ms diff

        HeavenPiercerEvents(player)

        if(player.hasTag("changeSkin")){
            system.run(() => renderSkins(player))
            player.removeTag("changeSkin")
        }





        



        
    })
});

function HeavenPiercerEvents(player){
    if(player.hasTag("heavenpiercer_slam_event")){
        if(player.isOnGround){
            player.runCommand("summon sm:explosion_440_2")
            player.removeTag("heavenpiercer_slam_event")
        }
    }

    
}

function MeleeSystem(player){

    if(player.hasTag("immuneToCurrentAttack")){
    var allEntities = world.getDimension("overworld").getEntities({maxDistance: 4, location: player.location,tags: ["hit"], excludeFamilies:["npc","creeper"]}).forEach(entity => {


        if(entity.hasTag("hit_repulsion")){
            if(!entity.hasTag("kbApplied")){
                entity.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, 5, 0.3)
                entity.addTag("kbApplied")
            }
            

            entity.runCommand("damage @s 1")
            entity.removeTag("hit")
            entity.removeTag("hit_repulsion")
            entity.removeTag("kbApplied")
        }

        if(entity.hasTag("hit_kusarigama")){
            if(!entity.hasTag("kbApplied")){
                entity.applyKnockback(-player.getViewDirection().x, -player.getViewDirection().z, 1, 0.35)
                entity.addTag("kbApplied")
            }
            let hitEntity = entity;
            hitEntity.runCommand(`particle sm:blood_splatter ${hitEntity.location.x} ${hitEntity.location.y + 1} ${hitEntity.location.z}`)
            player.runCommand("playsound kusarigama_swing @s ~ ~ ~")
            entity.runCommand(`playsound kusarigama_swing_global @a[name=!"${player.name}"] ~ ~ ~`)
            entity.runCommand("damage @s 1")
            entity.removeTag("hit")
            entity.removeTag("hit_kusarigama")
            entity.removeTag("kbApplied")
        }

        if(entity.hasTag("hit_heavenpiercer")){
            if(!entity.hasTag("kbApplied")){
                entity.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, 2, 0.3)
                entity.addTag("kbApplied")
                player.runCommand("function heavenpiercerL_cmds")
            }
            

            entity.runCommand("damage @s 1")
            entity.removeTag("hit")
            entity.removeTag("hit_heavenpiercer")
            entity.removeTag("kbApplied")
        }

        if(entity.hasTag("hit_holic")){
            if(!entity.hasTag("kbApplied")){
                entity.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, 1, 0.3)
                entity.addTag("kbApplied")
                player.runCommand("function holic_attack")
            }
            

            entity.runCommand("damage @s 1")
            entity.removeTag("hit")
            entity.removeTag("hit_holic")
            entity.removeTag("kbApplied")
        }

        if(entity.hasTag("hit_gobbler")){
            if(!entity.hasTag("kbApplied")){
                var hitEntity = entity;
                var attackingEntity = player;
                hitEntity.applyKnockback(attackingEntity.getViewDirection().x, attackingEntity.getViewDirection().z, 2, -1)
                hitEntity.runCommand(`particle sm:gobbler_hit ${hitEntity.location.x} ${hitEntity.location.y + 1} ${hitEntity.location.z}`)
                if (hitEntity.typeId == "minecraft:player") {
                    hitEntity.playSound("cannon_bludgeon")
                }
                attackingEntity.playSound("cannon_bludgeon")
                entity.addTag("kbApplied")
            }
            

            entity.runCommand("damage @s 1")
            entity.removeTag("hit")
            entity.removeTag("hit_gobbler")
            entity.removeTag("kbApplied")
        }

        player.removeTag("immuneToCurrentAttack")
    })
    }
}

function ScoreBoardMenu(player){
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

        const marqueStanding = world.scoreboard.getObjective("marque_standing_time")

        if (player.hasTag("purchase_marque")) {
            if (!player.hasTag("in_menu2")) {
                marqueStanding.addScore(player, 1)
                statusIcons = statusIcons + "§eStand here for 3 seconds to open the menu."
            }
            else if (player.hasTag("in_menu2")) {
                marqueStanding.setScore(player, 0)
                statusIcons = statusIcons + "§ePlease step off the settings block to open the menu."
            }
            if (marqueStanding.getScore(player) > 60) {
                marqueStanding.setScore(player, 0)
                player.addTag("in_menu2")
                player.addTag("open_loadoutmenu2")
            }
        }
        else if (player.hasTag("settings_marque")) {

            if (!player.hasTag("in_menu")) {
                marqueStanding.addScore(player, 1)
                statusIcons = statusIcons + "§eStand here for 3 seconds to open the menu."
            }
            else if (player.hasTag("in_menu")){
                marqueStanding.setScore(player, 0)
                statusIcons = statusIcons + "§ePlease step off the settings block to open the menu."
            }
            if (marqueStanding.getScore(player) > 60) {
                marqueStanding.setScore(player, 0)
                player.addTag("in_menu")
                player.addTag("open_loadoutmenu")
            }
        }
        else {
            marqueStanding.setScore(player, 0)
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
}

function IcarusEffects(player){
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
}

function renderSkins(player) {

    const dashEffectSB = world.scoreboard.getObjective("dash_effect_timer")



    const currentVariantSB = world.scoreboard.getObjective("skin_variant_timer")

    var currentVariantNPC = currentVariantSB.getScore("npc")
    if (player != undefined) {
        var dashEffectPlayer = dashEffectSB.getScore(player)
        var currentVariantPlayer = currentVariantSB.getScore(player)
        currentVariantSB.addScore(player, 1)
    }

    currentVariantSB.addScore("npc", 1)
    if (player != undefined) {
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





    


}
