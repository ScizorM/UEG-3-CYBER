import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes, StructureManager } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'

var cabStart = "mystructure:cab_"
var cabCoords = [{ x: 346, y: -7, z: 73 }, { x: 362, y: -7, z: 73 }, { x: 378, y: -7, z: 73 }, { x:394, y:-7, z:73 }]


system.runInterval(() => {

    var activeScoreboard = world.scoreboard.getObjective("train_randomizer_new")
    var systemActive = activeScoreboard.getScore("active")
    var systemTimer = activeScoreboard.getScore("timer")

    if (systemActive == 1) {
        activeScoreboard.addScore("timer", 1)
        if (systemTimer == 10) {
            ClearCabs()
        }
        else if (systemTimer == 50) {
            ClearCabs()
        }
        else if (systemTimer > 100) {
            LoadCabs()
            activeScoreboard.setScore("active", 0)
            activeScoreboard.setScore("timer",0)
        }
    }
})
function ClearCabs() {
    world.getDimension("overworld").runCommand("/fill 346 -10 71 410 14 83 air")
}

function LoadCabs() {
    let randomCabList = new Array()
    for (var i = 0; i < cabCoords.length; i++) {
        let randomGeneratedCab = Math.floor(Math.random() * 10)
        for (var x = 0; randomCabList.includes(randomGeneratedCab);) {
            randomGeneratedCab = Math.floor(Math.random() * 10)
        }
        let cabName = cabStart + randomGeneratedCab
        world.sendMessage(randomGeneratedCab.toString())
        if (!randomCabList.includes(randomGeneratedCab)) {
            world.structureManager.place(cabName, world.getDimension("overworld"), cabCoords[i], {includeEntities: true})
        }
        if (randomCabList != undefined) {
            randomCabList.push(randomGeneratedCab)
        }
        else {
            randomCabList = [randomGeneratedCab]
        }
    }
    world.getDimension("overworld").runCommand("setblock 410 -4 77 black_concrete")
    world.getDimension("overworld").runCommand("setblock 410 -3 77 black_concrete")
    world.getDimension("overworld").runCommand("execute as @e[type=sm:homeless_robot] run execute positioned as @s run execute if block ~ ~-1 ~ black_stained_glass run kill @s")
    world.getDimension("overworld").runCommand("execute as @e[type=sm:oak_stool] run execute positioned as @s run execute if block ~ ~-1 ~ black_stained_glass run kill @s")
    world.getDimension("overworld").runCommand("execute as @e[type=sm:robot_bartender] run execute positioned as @s run execute if block ~ ~-1 ~ black_stained_glass run kill @s")
    world.getDimension("overworld").runCommand("execute as @e[type=sm:gob_dog_goblin] run execute positioned as @s run execute if block ~ ~-1 ~ black_stained_glass run kill @s")

}

