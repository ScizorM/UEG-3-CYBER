import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'

system.runInterval(() => {

    var skinRandomizer = world.scoreboard.getObjective("skin_randomizer")

    var skinRandActive = skinRandomizer.getScore("active")
    var skinRandCurrent = skinRandomizer.getScore("current")

    var skinRandNone = skinRandomizer.getScore("none")
    var skinRand1 = skinRandomizer.getScore("slot1")
    var skinRand2 = skinRandomizer.getScore("slot2")
    var skinRand3 = skinRandomizer.getScore("slot3")
    var skinRand4 = skinRandomizer.getScore("slot4")
    var skinRand5 = skinRandomizer.getScore("slot5")
    var skinRand6 = skinRandomizer.getScore("slot6")

    var skinToRand = new Array("none","slot1","slot2","slot3","slot4","slot5","slot6")

    var randomNumberTest

    if (skinRandActive = 1) {
        skinRandActive.setScore(0) //get rid of this later on

        randomNumberTest = Math.floor(Math.random() * 76)
        if (randomNumberTest >= 46) {
            randomNumberTest = Math.floor(Math.random() * 76)
        }
        else if (randomNumberTest < 46) {
            
            skinRandCurrent += 1
        }
        
        skinRandActive.setScore(0)
    }

});
