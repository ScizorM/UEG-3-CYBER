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

    var skinWait = skinRandomizer.getScore("wait_period")

    var skinToRand = new Array("none", "slot1", "slot2", "slot3", "slot4", "slot5", "slot6")

    var skinValues = new Array(0, skinRand1, skinRand2, skinRand3, skinRand4, skinRand5, skinRand6)

    var randomNumberTest



    if (skinRandActive == 1) {


        randomNumberTest = Math.floor(Math.random() * 76)
        if (randomNumberTest > 45 && randomNumberTest < 75 || randomNumberTest < 2) {
            randomNumberTest = Math.floor(Math.random() * 76)
        }
        else if (skinValues.includes(randomNumberTest)) {
            randomNumberTest = Math.floor(Math.random() * 76)
            world.sendMessage(skinRandCurrent + " is a duplicate. rerolling...")
        }

        skinRandomizer.addScore("wait_period", 1)

        if (skinRandCurrent != 0 && skinRandCurrent < 7 && skinWait > 10 && (randomNumberTest < 46 || randomNumberTest > 74) && randomNumberTest > 1 && skinValues.includes(randomNumberTest) == false) {
            skinRandomizer.setScore(skinToRand[skinRandCurrent].toString(), randomNumberTest)
            skinRandomizer.addScore("current", 1)
            skinRandomizer.setScore("wait_period", 0)
        }


        if (skinRandCurrent > 6) {
            world.sendMessage("skin randomizer complete!")
            skinRandomizer.setScore("active", 0)
            skinRandomizer.setScore("current", 0)
            skinRandomizer.setScore("none", 0)
            skinRandomizer.setScore("wait_period", 0)
        }


    }

});
