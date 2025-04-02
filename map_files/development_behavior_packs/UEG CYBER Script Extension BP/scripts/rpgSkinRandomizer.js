import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { skinItemIds } from './skinList.js'
system.runInterval(() => {

    var randomizer = world.scoreboard.getObjective("rpg_store_randomizer")
    var randomizerActive = randomizer.getScore("active")
    var randomizerDelay = randomizer.getScore("delay")
    var randomizerSlot1 = randomizer.getScore("slot_1")
    var randomizerSlot2 = randomizer.getScore("slot_2")
    var randomizerSlot3 = randomizer.getScore("slot_3")

    if (randomizerDelay > 0) {
        randomizer.addScore("delay", -1)

        if (randomizerSlot1 == randomizerSlot2) {
            randomizer.setScore(`slot_2`, 58 + Math.floor(Math.random() * 14))
        }
        else if (randomizerSlot1 == randomizerSlot3) {
            randomizer.setScore(`slot_3`, 58 + Math.floor(Math.random() * 14))
        }
        else if (randomizerSlot2 == randomizerSlot3) {
            randomizer.setScore(`slot_3`, 58 + Math.floor(Math.random() * 14))
        }

        if (randomizerDelay == 1) {
            world.getDimension("overworld").runCommand(`execute positioned 103 35 16 run replaceitem entity @e[r=1,type=sm:skin_preview_npc] slot.armor.head 0 ${skinItemIds[randomizerSlot1]}`)
            world.getDimension("overworld").runCommand(`execute positioned 103 35 14 run replaceitem entity @e[r=1,type=sm:skin_preview_npc] slot.armor.head 0 ${skinItemIds[randomizerSlot2]}`)
            world.getDimension("overworld").runCommand(`execute positioned 103 35 12 run replaceitem entity @e[r=1,type=sm:skin_preview_npc] slot.armor.head 0 ${skinItemIds[randomizerSlot3]}`)
            world.sendMessage("randomizer complete")
        }
    }

    if (randomizerActive == 1) {
        randomizer.setScore(`slot_1`, 58 + Math.floor(Math.random() * 14))
        randomizer.setScore(`slot_2`, 58 + Math.floor(Math.random() * 14))
        randomizer.setScore(`slot_3`, 58 + Math.floor(Math.random() * 14))
        randomizer.setScore("delay",40)            
        randomizer.setScore("active",0)
    }
    
})