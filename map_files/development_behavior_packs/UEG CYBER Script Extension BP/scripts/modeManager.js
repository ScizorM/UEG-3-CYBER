import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { weaponIDList } from './loadoutList.js'
import { modeList } from './forceModeList.js'

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


system.runInterval(() => {






    let modeSB = world.scoreboard.getObjective("currentGamemode")
    let modeEnabled = modeSB.getScore("enabled")
    let loadTrigger = modeSB.getScore("loadTrigger")
    let modeValue = modeSB.getScore("modeValue")
    let modeTimer = modeSB.getScore("modeTimer")

    let forceLoadoutSB = world.scoreboard.getObjective("forced_loadouts")
    let forceLoadoutBoth = forceLoadoutSB.getScore("both_enabled")
    let forceLoadoutNu = forceLoadoutSB.getScore("nu_enabled")
    let forceLoadoutLambda = forceLoadoutSB.getScore("lambda_enabled")

    world.getDimension("Overworld").getEntities({ location: { x: 113, y: 16, z: 14 }, maxDistance: 2, families: ["floating_text"] }).forEach(entity => {

        let extraInfo = ""

        if (forceLoadoutBoth == 1 || forceLoadoutLambda == 1 || forceLoadoutNu == 1) {
            extraInfo = "\nFORCED LOADOUTS ENABLED!"
        }

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
                                SpawnEntityTrail("tnt","TNT Trail")
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






})

function SendDebugMessage(string) {
    world.sendMessage(string)
}

function SendEventMessage(string) {
    world.sendMessage("\u00A7e[Game Event] \u00A7r" + string)
}

function SelectMode(mode) {

    let modeMiscSettings = mode.miscSettings
    let forcedLoadoutsSB = world.scoreboard.getObjective("forced_loadouts")

    world.sendMessage("\u00A7e[Gamemode Select]\u00A7r " + mode.displayName + " selected.")
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

    SendDebugMessage("completed SelectMode method")
}