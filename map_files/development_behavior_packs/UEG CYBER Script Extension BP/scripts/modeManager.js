import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { weaponIDList } from './loadoutList.js'
import { modeList, fullEventList } from './forceModeList.js'
import { laptopEvents, settingList } from './settingList.js'

///Event Type 0 = spawn entity, Event Type 1 = spawn particle, too lazy to try to get the main.js one to work here, don't flame me for having this here pleeassseeee
function RandomlySpawnEntities(entityType, entityCount, eventType, entityDisplayName) {
    const baseCoords = { x: -109, y: 75, z: 280 }
    const spawnCount = entityCount;
    const dimension = world.getDimension("Overworld")
    var randomPositions = {};
    if (entityDisplayName != "void") {
        SendEventMessage(entityDisplayName)
    }


    for (var i = 0; i < spawnCount; i++) {
        randomPositions = { x: baseCoords.x - Math.floor(Math.random() * 49), y: baseCoords.y, z: baseCoords.z - Math.floor(Math.random() * 49) }
        if (eventType == 0) {
            world.getDimension("Overworld").runCommand(`summon ${entityType} ${randomPositions.x} ${randomPositions.y} ${randomPositions.z}`)
        }
        else {
            world.getDimension("Overworld").runCommand(`particle ${entityType} ${randomPositions.x} ${randomPositions.y} ${randomPositions.z}`)
        }

    }
}

function RandomlyAssignPotionEffects(potionEffectArr,potionEffectDisplayName) {
    let randomValue = Math.floor(Math.random() * potionEffectArr.length)

    world.getDimension("Overworld").runCommand(`effect @a[tag=ingame] ${potionEffectArr[randomValue]} 10 2`)
    SendEventMessage(potionEffectDisplayName[randomValue] + " applied to all players.")
}

function SpawnEntityTrail(entityType, entityDisplayName) {
    world.getDimension("Overworld").runCommand(`execute as @a[tag=ingame] run execute positioned as @s run summon ${entityType}`)
    SendEventMessage(entityDisplayName)
}

function AssignLaptopSettings(selectedMode) {
    let basicSettings = selectedMode.basicSettings
    let potionEffects = selectedMode.potionEffects
    let movementSettings = selectedMode.movementSettings
    let zoneSettings = selectedMode.zoneSettings
    //let miscSettings = selectedMode.miscSettings - not needed for this, kept here if changed

    let fullListOfData = [basicSettings.maxWins, basicSettings.maxLives,
        potionEffects.speed, potionEffects.jumpBoost, potionEffects.slowFalling, potionEffects.darkness,
        movementSettings.maxDashes, movementSettings.dashPower, movementSettings.minDashReq, movementSettings.abilities,
        zoneSettings.zonePhases, zoneSettings.initZonePhase, zoneSettings.topDeathZone]

    for (let i = 0; i < fullListOfData.length; i++) {
        let currentSetting = settingList[i]
        let currentDataValue = fullListOfData[i]
        SendDebugMessage(currentDataValue.toString())
        if (currentDataValue != undefined && !(typeof currentDataValue == "boolean")) {
            if (currentSetting.numberRange.includes(currentDataValue)) {
                AssignLaptopSettingsPtII(currentSetting, currentDataValue, false)
            }
            else {
                SendDebugMessage(currentDataValue.toString() + " is an invalid number for this setting for " + currentSetting.settingName)
            }
        }
        else if (typeof currentDataValue == "boolean") {
            let boolVal = 0; //0 for false, 1 for true

            if (currentDataValue == true) {
                boolVal = 1
            }
            else {
                boolVal = 0
            }
            if (currentSetting.numberRange.includes(boolVal)) {
                AssignLaptopSettingsPtII(currentSetting, currentDataValue, true)
            }

        }
    }

}



function EditRandomEvents(player) {

    /*

    - Select Particular Random Event
    OR:
    - All Events

    - Event trigger interval (min: 1 second)

        
    customRandomEvents player info: 

    -1: all events

    the rest are +1 since 0 is none

    */

    let modeSB = world.scoreboard.getObjective("currentGamemode")
    let customRandEventVal = modeSB.getScore("customRandomEvents")
    let customTimerVal = world.scoreboard.getObjective("customTimer")
    let form = new ModalFormData()
    let eventList = ["No Event","TNT Rain","Random Potion Effects","Big Joe Rain","EMP Trigger", "Scaler Explosion", "Dash Replenishing", "Baby Storm", "TNT Trail", "Random Event"]
    form.title("Random Event Select");
    form.dropdown("Note: if you would like to cancel any changes, close this window.\n\nEvent Type:", eventList)
    form.slider("Event Trigger Interval (Seconds)", 1, 50, 1)
    form.show(player).then(r => {
        if (r.canceled) {

        }
        else {
            let [dropdown, slider] = r.formValues



            if (dropdown < 9) {
                modeSB.setScore("customRandomEvents", dropdown)
            }
            else {
                modeSB.setScore("customRandomEvents", -1)
            }


            modeSB.setScore("customTimer", slider)

            modeSB.setScore("modeValue", -1)

            world.sendMessage(`\u00A7e[Settings Change] \u00A7aRandom Events have been changed to:\n${eventList[dropdown]}\nEvery ${slider} second(s).`)
        }
    })
    player.removeTag("editRandomEvents")


}
function EditPlayerLimit(player) {


    let modeSB = world.scoreboard.getObjective("currentGamemode")
    let teamLimitSB = world.scoreboard.getObjective("team_limits")
    let nuLimit = teamLimitSB.getScore("team_nu")
    let lambdaLimit = teamLimitSB.getScore("team_lambda")

    let form = new ModalFormData()
    let eventList = ["No Event", "TNT Rain", "Random Potion Effects", "Big Joe Rain", "EMP Trigger", "Scaler Explosion", "Dash Replenishing", "Baby Storm", "TNT Trail", "Random Event"]
    form.title("Player Limits");
    form.textField("To cancel, close this window.\n\nTeam Nu Player Limit", `Current: ${nuLimit.toString()} - Limit: 30`)
    form.textField("Team Lambda Player Limit", `Current: ${lambdaLimit.toString()} - Limit: 30`)
    form.show(player).then(r => {
        if (r.canceled) {

        }
        else { 
            let [textFieldNu,textFieldLambda] = r.formValues

            let parsedNu = parseInt(textFieldNu)
            let parsedLambda = parseInt(textFieldLambda)

            if (parsedNu > 0 && parsedNu != NaN && parsedLambda > 0 && parsedLambda != NaN) {
                let nuVal;
                let lambdaVal;
                if (parsedNu > 30) {
                    teamLimitSB.setScore("team_nu", 30)
                    nuVal = 30;
                }
                else {
                    teamLimitSB.setScore("team_nu", parsedNu)
                    nuVal = parsedNu;
                }
                if (parsedLambda > 30) {
                    teamLimitSB.setScore("team_lambda", 30)
                    lambdaVal = 30;
                }
                else {
                    teamLimitSB.setScore("team_lambda", parsedLambda)
                    lambdaVal = parsedLambda;
                }

                world.sendMessage(`\u00A7e[Settings Change] \u00A7aTeam Limits have been changed to:\nTeam Nu: ${nuVal.toString()}\nTeam Lambda: ${lambdaVal.toString()}`)

                modeSB.setScore("modeValue",-1)
            }
            else {
                player.sendMessage("\u00A7e[Error]\u00A7c Invalid inputs detected.\nPlease select a number range from 1-30 for each team.")
            }
        }
    })
    player.removeTag("editPlayerLimit")


}

function ForceLoadouts(player) {
    let modeSB = world.scoreboard.getObjective("currentGamemode")


    let forcedLOSB = world.scoreboard.getObjective("forced_loadouts")
    let nuEnabled = forcedLOSB.getScore("nu_enabled")
    let lambdaEnabled = forcedLOSB.getScore("lambda_enabled")
    let bothEnabled = forcedLOSB.getScore("both_enabled")


    let customRandEventVal = modeSB.getScore("customRandomEvents")
    let customTimerVal = world.scoreboard.getObjective("customTimer")
    let form = new ModalFormData()
    let eventList = ["No Forced Loadout", "Loadout 1", "Loadout 2", "Loadout 3"]
    form.title("Force Team Loadouts");
    form.dropdown("Note: if you would like to cancel any changes, close this window.\n\nPlease use your saved loadout slots to overwrite a particular team. If you only want to alter one, leave the one you do not want to change blank.\n\nTeam Nu Loadout:", eventList)
    form.dropdown("Team Lambda Loadout:", eventList)
    form.show(player).then(r => {
        if (r.canceled) {

        }
        else {
            let forceLoadoutSBs = ["nu_slot","lambda_slot"] //counts from 0-8, I programmed this after I learned the fundamentals of coding lol

            let [dropdown, dropdown2] = r.formValues
            let value = 0
            let settingData = ""
            if (dropdown > 0) {
                forcedLOSB.setScore("nu_enabled", 1)
                value++
                settingData += `\nTeam Nu set to: Forced Loadout`
                let scoreboardName = ""
                switch (dropdown) {
                    case 1:
                        scoreboardName = "loadout1_slot_" //DOES NOT COUNT FROM 0! COUNTS FROM 1-9
                        break;
                    case 2:
                        scoreboardName = "loadout2_slot_"
                        break;
                    case 3:
                        scoreboardName = "loadout3_slot_"
                        break;
                }


                for (let i = 0; i < 9; i++) {
                    let processedI = i + 1
                    let currentLoadoutSlotVal = world.scoreboard.getObjective(scoreboardName + processedI.toString())
                    forcedLOSB.setScore(forceLoadoutSBs[0] + i.toString(), currentLoadoutSlotVal.getScore(player))
                    SendDebugMessage(weaponIDList[currentLoadoutSlotVal.getScore(player)] + " For Nu")

                    
                }
            }
            else {
                forcedLOSB.setScore("nu_enabled", 0)
                settingData += "\nTeam Nu set to: No forced loadout"
            }

            if (dropdown2 > 0) {
                forcedLOSB.setScore("lambda_enabled", 1)
                value++
                settingData += `\nTeam Lambda set to: Forced Loadout`

                let scoreboardName2 = ""
                switch (dropdown) {
                    case 1:
                        scoreboardName2 = "loadout1_slot_" //DOES NOT COUNT FROM 0! COUNTS FROM 1-9
                        break;
                    case 2:
                        scoreboardName2 = "loadout2_slot_"
                        break;
                    case 3:
                        scoreboardName2 = "loadout3_slot_"
                        break;
                }


                for (let j = 0; j < 9; j++) {
                    let processedI2 = j + 1
                    let currentLoadoutSlotVal2 = world.scoreboard.getObjective(scoreboardName2 + processedI2.toString())
                    forcedLOSB.setScore(forceLoadoutSBs[1] + j.toString(), currentLoadoutSlotVal2.getScore(player))
                    SendDebugMessage(weaponIDList[currentLoadoutSlotVal2.getScore(player)] + " For Lambda")


                }
            }
            else {
                forcedLOSB.setScore("lambda_enabled", 0)
                settingData += "\nTeam Lambda set to: No forced loadout"
            }

            if (value > 1) {
                forcedLOSB.setScore("both_enabled", 1)
            }
            else {
                forcedLOSB.setScore("both_enabled", 0)
            }

            modeSB.setScore("modeValue", -1)

            

            world.sendMessage(`\u00A7e[Settings Change] \u00A7aForced Loadouts Changed.` + settingData)
        }
    })
    player.removeTag("forceLoadoutsMenu")
}

function AssignLaptopSettingsPtII(currentSetting, currentDataValue, isBool) {
    SendDebugMessage(currentSetting.settingName + " " + isBool.toString())
    let currentScoreboard = world.scoreboard.getObjective(currentSetting.scoreboardName)
    currentScoreboard.setScore(currentSetting.scoreboardPlrName, currentDataValue)
    let eventName = "sm:add_";
    if (isBool == true) {
        if (currentDataValue == 1) {
            eventName += "enabled"
        }
        else {
            eventName += "disabled"
        }
    }
    else {
        eventName += currentDataValue.toString()
    }
    world.getDimension("Overworld").runCommand(`execute positioned ${currentSetting.coordinates.x} ${currentSetting.coordinates.y} ${currentSetting.coordinates.z} run event entity @e[r=1,type=sm:laptop] ${eventName}`)
}

system.runInterval(() => {


    world.getAllPlayers().forEach(player => {

        if (player.hasTag("editRandomEvents")) {
            EditRandomEvents(player)
        }
        if (player.hasTag("editPlayerLimit")) {
            EditPlayerLimit(player)
        }
        if (player.hasTag("forceLoadoutsMenu")) {
            ForceLoadouts(player)
        }
    })



    let modeSB = world.scoreboard.getObjective("currentGamemode")
    let randEventsCustId = modeSB.getScore("customRandomEvents") + 1
    let randEventsCustTimer = modeSB.getScore("customTimer")
    let modeEnabled = modeSB.getScore("enabled")
    let loadTrigger = modeSB.getScore("loadTrigger")
    let modeValue = modeSB.getScore("modeValue")
    let modeTimer = modeSB.getScore("modeTimer")

    let teamLimitSB = world.scoreboard.getObjective("team_limits")
    let nuLimit = teamLimitSB.getScore("team_nu")
    let lambdaLimit = teamLimitSB.getScore("team_lambda")


    let forceLoadoutSB = world.scoreboard.getObjective("forced_loadouts")
    let forceLoadoutBoth = forceLoadoutSB.getScore("both_enabled")
    let forceLoadoutNu = forceLoadoutSB.getScore("nu_enabled")
    let forceLoadoutLambda = forceLoadoutSB.getScore("lambda_enabled")

    world.getDimension("Overworld").getEntities({ location: { x: 113, y: 16, z: 14 }, maxDistance: 2, families: ["floating_text"] }).forEach(entity => {

        let extraInfo = ""

        if (forceLoadoutBoth == 1) {
            extraInfo = "\nFORCED LOADOUTS ENABLED! (Both Teams)"
        }
        else if (forceLoadoutLambda == 1) {
            extraInfo = "\nFORCED LOADOUTS ENABLED! (Team Lambda)"
        }
        else if (forceLoadoutNu == 1) {
            extraInfo = "\nFORCED LOADOUTS ENABLED! (Team Nu)"
        }
        else {
            extraInfo = "\nForced Loadouts Disabled"
        }

        extraInfo += "\nEvent: "

        extraInfo += fullEventList[randEventsCustId]

        extraInfo += " (every "

        extraInfo += randEventsCustTimer.toString()
        extraInfo += " second(s))"

        extraInfo += "\nTeam Nu Limit: "
        extraInfo += nuLimit.toString()
        extraInfo += " - Team Lambda Limit: "
        extraInfo += lambdaLimit.toString()

        if (modeValue > -1) {
            entity.nameTag = "Current Game Mode:\n" + modeList[modeValue].displayName + extraInfo
        }
        else {
            entity.nameTag = "Current Game Mode:\n" + "Custom" + extraInfo
        }

    })

    let roundActiveSB = world.scoreboard.getObjective("round_active")
    let roundActive = roundActiveSB.getScore("round_active")


    if (loadTrigger == 1) {
        SendDebugMessage("enabled value active, selecting mode defined")
        SelectMode(modeList[modeValue])
        modeSB.setScore("loadTrigger", 0)
    }

    if (modeValue > -1) {
        let currentMode = modeList[modeValue].miscSettings
        if (roundActive == 1) {
            if (currentMode.randomEvents) {

                let eventTriggerTime = currentMode.eventTime * 20
                modeSB.addScore("modeTimer", 1)
                if (modeTimer >= eventTriggerTime) {
                    modeSB.setScore("modeTimer", 0)
                    //if there's more than one event that can occur (randomize all events depending on how many there are)
                    if (currentMode.randomEventData != undefined && currentMode.randomEventData.length > 1) {
                        let maxDashesCount = world.scoreboard.getObjective("max_dashes").getScore("max_dashes")

                        let randomEvent = (Math.floor(Math.random() * 7))
                        SendDebugMessage(randomEvent.toString())
                        let currentEvent = randomEvent

                        if (currentEvent == 0) {
                            RandomlySpawnEntities("minecraft:tnt", 20, 0, "TNT Rain!!!")
                        }
                        else if (currentEvent == 1) {
                            RandomlyAssignPotionEffects(["night_vision", "haste", "fire_resistance", "blindness", "invisibility", "levitation", "slow_falling", "darkness"], ["Night Vision", "Haste", "Fire Resistance", "Blindness", "Invisibility", "Levitation", "Slow Falling", "Darkness"])
                        }
                        else if (currentEvent == 2) {
                            RandomlySpawnEntities("sm:big_joe", 3, 0, "Big Joe Rain")
                        }
                        else if (currentEvent == 3) {
                            SendEventMessage("EMP")
                            world.getDimension("Overworld").runCommand("execute as @a[tag=ingame] run function emp_other")
                        }
                        else if (currentEvent == 4) {
                            SendEventMessage("Scaler Explosion")
                            world.getDimension("Overworld").runCommand("execute as @a[tag=ingame] run execute positioned as @s run function explosion_scaler")
                        }
                        else if (currentEvent == 5) {
                            SendEventMessage("Dashes Replenished")
                            world.getDimension("Overworld").runCommand(`execute as @a[tag=ingame] run /scoreboard players set @s dashes ${maxDashesCount}`)
                        }
                        else if (currentEvent == 6) {
                            RandomlySpawnEntities("sm:robot_babies", 3, 1, "Baby Storm")
                        }
                    }
                    else if (currentMode.randomEventData != undefined && currentMode.randomEventData.length == 1) {

                        let currentEvent = currentMode.randomEventData[0]
                        SendDebugMessage(currentMode.randomEventData[0].toString())

                        switch (currentEvent) {
                            case 0:
                                RandomlySpawnEntities("minecraft:tnt", 10, 0, "void")
                                break;
                            case 1:
                                RandomlyAssignPotionEffects(["night_vision", "haste", "fire_resistance", "blindness", "invisibility", "levitation", "slow_falling", "darkness"], ["Night Vision", "Haste", "Fire Resistance", "Blindness", "Invisibility", "Levitation", "Slow Falling", "Darkness"])
                                break;
                            case 2:
                                SpawnEntityTrail("tnt", "TNT Trail")
                                break;
                        }
                    }
                }

            }
            else {
                modeSB.setScore("modeTimer", 0)
            }
        }
        else {
            modeSB.setScore("modeTimer", 0)
        }
    }
    else if (modeValue == -1) {

        let customEventVal = modeSB.getScore("customRandomEvents") - 1
        let customTimerVal = modeSB.getScore("customTimer")

        
        if (roundActive == 1) {
            if (customEventVal != 0) {

                let eventTriggerTime = customTimerVal * 20
                modeSB.addScore("modeTimer", 1)
                if (modeTimer >= eventTriggerTime) {
                    modeSB.setScore("modeTimer", 0)
                    //if there's more than one event that can occur (randomize all events depending on how many there are)
                    if (customEventVal == -2) {
                        let maxDashesCount = world.scoreboard.getObjective("max_dashes").getScore("max_dashes")

                        let randomEvent = (Math.floor(Math.random() * 7))
                        SendDebugMessage(randomEvent.toString())
                        let currentEvent = randomEvent

                        if (currentEvent == 0) {
                            RandomlySpawnEntities("minecraft:tnt", 20, 0, "TNT Rain!!!")
                        }
                        else if (currentEvent == 1) {
                            RandomlyAssignPotionEffects(["night_vision", "haste", "fire_resistance", "blindness", "invisibility", "levitation", "slow_falling", "darkness"], ["Night Vision", "Haste", "Fire Resistance", "Blindness", "Invisibility", "Levitation", "Slow Falling", "Darkness"])
                        }
                        else if (currentEvent == 2) {
                            RandomlySpawnEntities("sm:big_joe", 3, 0, "Big Joe Rain")
                        }
                        else if (currentEvent == 3) {
                            SendEventMessage("EMP")
                            world.getDimension("Overworld").runCommand("execute as @a[tag=ingame] run function emp_other")
                        }
                        else if (currentEvent == 4) {
                            SendEventMessage("Scaler Explosion")
                            world.getDimension("Overworld").runCommand("execute as @a[tag=ingame] run execute positioned as @s run function explosion_scaler")
                        }
                        else if (currentEvent == 5) {
                            SendEventMessage("Dashes Replenished")
                            world.getDimension("Overworld").runCommand(`execute as @a[tag=ingame] run /scoreboard players set @s dashes ${maxDashesCount}`)
                        }
                        else if (currentEvent == 6) {
                            RandomlySpawnEntities("sm:robot_babies", 3, 1, "Baby Storm")
                        }
                    }
                    else if(customEventVal > -1) {
                        let currentEvent = customEventVal
                        
                        SendDebugMessage(customEventVal.toString())

                        if (currentEvent == 0) {
                            RandomlySpawnEntities("minecraft:tnt", 20, 0, "TNT Rain!!!")
                        }
                        else if (currentEvent == 1) {
                            RandomlyAssignPotionEffects(["night_vision", "haste", "fire_resistance", "blindness", "invisibility", "levitation", "slow_falling", "darkness"], ["Night Vision", "Haste", "Fire Resistance", "Blindness", "Invisibility", "Levitation", "Slow Falling", "Darkness"])
                        }
                        else if (currentEvent == 2) {
                            RandomlySpawnEntities("sm:big_joe", 3, 0, "Big Joe Rain")
                        }
                        else if (currentEvent == 3) {
                            SendEventMessage("EMP")
                            world.getDimension("Overworld").runCommand("execute as @a[tag=ingame] run function emp_other")
                        }
                        else if (currentEvent == 4) {
                            SendEventMessage("Scaler Explosion")
                            world.getDimension("Overworld").runCommand("execute as @a[tag=ingame] run execute positioned as @s run function explosion_scaler")
                        }
                        else if (currentEvent == 5) {
                            SendEventMessage("Dashes Replenished")
                            world.getDimension("Overworld").runCommand(`execute as @a[tag=ingame] run /scoreboard players set @s dashes ${maxDashesCount}`)
                        }
                        else if (currentEvent == 6) {
                            RandomlySpawnEntities("sm:robot_babies", 3, 1, "Baby Storm")
                        }
                        else if (currentEvent == 7) {
                            SpawnEntityTrail("tnt", "TNT Trail")
                        }
                    }
                }

            }
            else {
                modeSB.setScore("modeTimer", 0)
            }
        }
        else {
            modeSB.setScore("modeTimer", 0)
        }
    }





})

function SendDebugMessage(string) {
    world.sendMessage(string)
}

function SendEventMessage(string) {
    world.sendMessage("\u00A7e[Game Event] \u00A7r" + string)
}

function SelectMode(mode) {

    AssignLaptopSettings(mode)

    let modeSB = world.scoreboard.getObjective("currentGamemode")

    let modeMiscSettings = mode.miscSettings
    let forcedLoadoutsSB = world.scoreboard.getObjective("forced_loadouts")

    world.sendMessage("\u00A7e[Gamemode Select]\u00A7r " + mode.displayName + " selected.")

    if (modeMiscSettings.nuLimit != undefined) {
        world.scoreboard.getObjective("team_limits").setScore("team_nu",modeMiscSettings.nuLimit)
    }
    if (modeMiscSettings.lambdaLimit != undefined) {
        world.scoreboard.getObjective("team_limits").setScore("team_lambda", modeMiscSettings.lambdaLimit)
    }

    if (modeMiscSettings.forceLoadout) {
        SendDebugMessage("forced loadout")
        let loadout = modeMiscSettings.loadoutData

        if (loadout.applyToTeams.nu && loadout.applyToTeams.lambda) {
            SendDebugMessage("applies to both teams")
            for (let i = 0; i < loadout.loadoutIDCollection.length; i++) {

                SendDebugMessage("nu: " + weaponIDList[i])
                forcedLoadoutsSB.setScore(`nu_slot${i.toString()}`, loadout.loadoutIDCollection[i])
            }
            for (let j = 0; j < loadout.loadoutIDCollection.length; j++) {
                SendDebugMessage("lambda: " + weaponIDList[j])
                forcedLoadoutsSB.setScore(`lambda_slot${j.toString()}`, loadout.loadoutIDCollection[j])
            }
            forcedLoadoutsSB.setScore("both_enabled", 1)
            forcedLoadoutsSB.setScore("lambda_enabled", 1)
            forcedLoadoutsSB.setScore("nu_enabled", 1)

        }
        else if (loadout.applyToTeams.nu) {
            SendDebugMessage("applies to nu only")
            for (let i = 0; i < loadout.loadoutIDCollection.length; i++) {

                SendDebugMessage("nu: " + weaponIDList[i])
                forcedLoadoutsSB.setScore(`nu_slot${i.toString()}`, loadout.loadoutIDCollection[i])
            }
            forcedLoadoutsSB.setScore("both_enabled", 0)
            forcedLoadoutsSB.setScore("lambda_enabled", 0)
            forcedLoadoutsSB.setScore("nu_enabled", 1)
        }
        else if (loadout.applyToTeams.lambda) {
            SendDebugMessage("applies to lambda only")
            for (let j = 0; j < loadout.loadoutIDCollection.length; j++) {
                SendDebugMessage("lambda: " + weaponIDList[j])
                forcedLoadoutsSB.setScore(`lambda_slot${j.toString()}`, loadout.loadoutIDCollection[j])
            }
            forcedLoadoutsSB.setScore("both_enabled", 0)
            forcedLoadoutsSB.setScore("lambda_enabled", 1)
            forcedLoadoutsSB.setScore("nu_enabled", 0)
        }

    }
    else {
        SendDebugMessage("no forced loadouts for this mode")
        forcedLoadoutsSB.setScore("both_enabled", 0)
        forcedLoadoutsSB.setScore("lambda_enabled", 0)
        forcedLoadoutsSB.setScore("nu_enabled", 0)
    }

    if (modeMiscSettings.randomEvents == true) {
        if (modeMiscSettings.randomEventData.length > 1) {
            modeSB.setScore("customRandomEvents", -1)
        }
        else {
            modeSB.setScore("customRandomEvents", modeMiscSettings.randomEventData)
        }
    }
    else {
        modeSB.setScore("customRandomEvents", 0)
    }

    if (modeMiscSettings.eventTime != undefined) {
        modeSB.setScore("customTimer", modeMiscSettings.eventTime)

    }
    else {
        modeSB.setScore("customTimer", 1)
    }

    SendDebugMessage("completed SelectMode method")
}