import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { quest0Currency, quest1Currency, quest2Currency, quest0Data, quest1Data, quest2Data, otherOptions, questCategories, quest0Requirement, quest1Requirement, quest3Currency, quest3Data, quest3Requirement } from './questData.js'



world.beforeEvents.itemUse.subscribe(data => {



    const player = data.source




    if (data.itemStack.typeId == "sm:advancements_menu") {

        system.run(() => AdvancementsInitMenu(player))

    }
})

function AdvancementsInitMenu(player) {
    let form = new ActionFormData();
    form.title("test");
    form.body("test")
    form.button("Player Advancements", "textures/ui/button_bg")
    otherOptions.forEach((object) => {
        form.button(object.name, object.icon)
    })
    form.button("Exit", "textures/ui/button_close")
    form.show(player).then(r => {
        var selection = r.selection
        if (selection == 0) {
            PlayerAdvancements(player)
        }
        else if (selection == 1) {
            PlayerStats(player)
            
        }
    })
}

function CheckSkinsUnlocked(player) {
    var skinCountSB = world.scoreboard.getObjective("player_skins_unlocked")
    skinCountSB.setScore(player, 0)
    for (var i = 0; i < 100; i++) {
        if (player.hasTag(i + "_skin_unlocked")) {
            skinCountSB.addScore(player, 1)
            
        }
        
    }
    world.sendMessage(skinCountSB.getScore(player).toString())

}

function PlayerAdvancements(player) {
    let form = new ActionFormData();
    form.title("test");
    form.body("test")
    questCategories.forEach((object) => {
        form.button(object.name, object.icon)
    })
    form.button("Exit", "textures/ui/button_close")
    form.show(player).then(r => {
        var selection = r.selection
        if (selection < questCategories.length) {
            ExactAdvancementsPartOne(player,selection)
        }
    })
}

function ExactAdvancementsPartOne(player, advancementType) {
    var isCompleted = true
    if (advancementType > 3) {
        isCompleted = false
    }
    var advancementCollection = [quest0Data, quest1Data, quest2Data, quest3Data]
    var advancementMoney = [quest0Currency, quest1Currency, quest2Currency, quest3Currency]
    var advancementCheckLength = [quest0Currency, quest1Currency, quest2Currency, quest3Currency]
    var scoreboardRequirement = [quest0Requirement, quest1Requirement, undefined, quest3Requirement]
    var scoreboardCheck = ["player_wins", "player_round_wins", undefined, "player_skins_unlocked"]
    var isDuplicate = [true, true, false, true]

    if (isCompleted) {
        
        let form = new ActionFormData();
        form.title(questCategories[advancementType].name)
        form.body("")


        if (isDuplicate[advancementType]) {
            var scoreboardToCheck = world.scoreboard.getObjective(scoreboardCheck[advancementType])
            var currentValue = scoreboardToCheck.getScore(player)

            var completedTest = "wow"


            for (var i = 0; i < advancementCheckLength[advancementType].length; i++) {

                if (currentValue >= scoreboardRequirement[advancementType][i]) {
                    completedTest = ""
                }
                else {
                    completedTest = ""
                }
                form.button(advancementCollection[advancementType].name + ` (Tier ${i + 1})\n${currentValue}/${scoreboardRequirement[advancementType][i]} ${completedTest}` + ` - ${advancementMoney[advancementType][i]}`)
            }

        }
        else {
            for (var j = 0; j < advancementCollection[advancementType].length; j++) {
                var completedTest = "wow"
                if (player.hasTag(`quest_${advancementType}_${j}`)) {
                    completedTest = "Yes "
                }
                else {
                    completedTest = "No "
                }
                form.button(advancementCollection[advancementType][j].name + "\nCompleted? " + completedTest + ` - ${advancementMoney[advancementType][j]}`)
            }
        }
        form.button("Back", "textures/ui/button_back")
        form.button("Exit", "textures/ui/button_close")
        form.show(player).then(r => {
            if (isDuplicate[advancementType]) {
                if (r.selection < advancementMoney[advancementType].length) {
                    var sbCheckSB = world.scoreboard.getObjective(scoreboardCheck[advancementType])
                    var sbCheck = sbCheckSB.getScore(player)
                    var sbReq = scoreboardRequirement[advancementType][r.selection]
                    var advancementSel = advancementCollection[advancementType]
                    var isCompleted = false
                    if (player.hasTag(`quest_${advancementType}_${r.selection}`)) {
                        isCompleted = true
                    }
                    world.sendMessage("condition met new")
                    AdvancementInfo(player, advancementSel.name + ` (Tier ${r.selection + 1})`, advancementSel.description + `\n\nGoal Status: ${sbCheck}/${sbReq}`, isCompleted, advancementMoney[advancementType][r.selection], advancementType)
                }
            }
            else {
                if (r.selection < advancementCollection[advancementType].length) {
                    var advancementSel = advancementCollection[advancementType]
                    var isCompleted = false
                    if (player.hasTag(`quest_${advancementType}_${r.selection}`)) {
                        isCompleted = true
                    }
                    AdvancementInfo(player, advancementSel[r.selection].name, advancementSel[r.selection].description, isCompleted, advancementMoney[advancementType][r.selection], advancementType)
                }
            }

        })
    }
    else {
        let form = new ActionFormData();
        form.title("incomplete");
        form.body("incomplete")
        form.button("Exit", "textures/ui/button_close")
        form.show(player)
    }
}

function AdvancementInfo(player, advancementName, advancementDescription,  isCompleted, rewardMoney,advancementType) {
    let form = new ActionFormData();
    form.title(advancementName)
    if (isCompleted == true) {
        advancementDescription += "\n\nCompleted? Yes "
    }
    else {
        advancementDescription += "\n\nCompleted? No "
    }
    advancementDescription += `\n\nReward: ${rewardMoney}`
    form.body(advancementDescription)

    form.button("Back","textures/ui/button_back")
    form.button("Exit", "textures/ui/button_close")
    form.show(player).then(r => {
        var selection = r.selection
        if (selection == 0) {
            ExactAdvancementsPartOne(player,advancementType)
        }

    })
}

function PlayerStats(player) {
    var rLossesSB = world.scoreboard.getObjective("player_round_losses")
    var rWinsSB = world.scoreboard.getObjective("player_round_wins")
    var gLossesSB = world.scoreboard.getObjective("player_game_losses")
    var gWinsSB = world.scoreboard.getObjective("player_wins")
    var winStreakSB = world.scoreboard.getObjective("winStreak")
    var respawnsSB = world.scoreboard.getObjective("total_respawns")
    var deathsSB = world.scoreboard.getObjective("total_deaths")
    var creditsSB = world.scoreboard.getObjective("credits")

    rLossesSB.addScore(player, 0)
    rWinsSB.addScore(player, 0)
    gLossesSB.addScore(player, 0)
    gWinsSB.addScore(player, 0)
    winStreakSB.addScore(player, 0)
    respawnsSB.addScore(player, 0)
    deathsSB.addScore(player, 0)
    creditsSB.addScore(player, 0)

    var credits = creditsSB.getScore(player)
    var roundLosses = rLossesSB.getScore(player)
    var roundWins = rWinsSB.getScore(player)
    var gameLosses = gLossesSB.getScore(player)
    var gameWins = gWinsSB.getScore(player)
    var winStreak = winStreakSB.getScore(player)
    var totalRespawns = respawnsSB.getScore(player)
    var totalDeaths = deathsSB.getScore(player)

    var totalGames = gameLosses + gameWins
    var totalRounds = roundLosses + roundWins
    if (totalGames > 0) {
        var gameWinRate = Math.floor((gameWins / totalGames) * 1000) / 10
        var roundWinRate = Math.floor((roundWins / totalRounds) * 1000) / 10
    }
    else {
        var gameWinRate = 0;
        var roundWinRate = 0;
    }

    


    var description = `Name: ${player.name}\n\n` + `§lCurrency§r\n\nCredits: ${credits}\n\n` + `§lGame Stats§r\n\nGames Played: ${totalGames}\n\n` + `Games Won: ${gameWins}\n\n` + `Game Win Rate: ${gameWinRate}\n\n` + `Win Streak: ${winStreak}\n\n` + `§lRound Stats§r\n\nRounds Played: ${totalRounds}\n\nRounds Won: ${roundWins}\n\n` + `Round Win Rate: ${roundWinRate}\n\n` + `§lRespawns & Deaths§r\n\nTotal Respawns: ${totalRespawns}\n\n` + `Total Deaths: ${totalDeaths}`

    let form = new ActionFormData();
    form.title("test");
    form.body(description)
    form.button("Player Advancements", "textures/ui/button_bg")
    otherOptions.forEach((object) => {
        form.button(object.name, object.icon)
    })
    form.button("Exit", "textures/ui/button_close")
    form.show(player)

}

system.runInterval(() => {


    var winStreakSB = world.scoreboard.getObjective("winStreak")

    var gameWinsSB = world.scoreboard.getObjective("player_wins")
    var roundWinsSB = world.scoreboard.getObjective("player_round_wins")
    var creditsSB = world.scoreboard.getObjective("credits")

    var nearDeathCountSB = world.scoreboard.getObjective("nearDeathCount")
    var skinCountSB = world.scoreboard.getObjective("player_skins_unlocked")
    var yLevelQuestSB = world.scoreboard.getObjective("yLevelQuest")

    var teamSizesSB = world.scoreboard.getObjective("teamSizes")
    teamSizesSB.setScore("teamNu", 0)
    teamSizesSB.setScore("teamLambda", 0)

    world.getAllPlayers().forEach(player => {

        if (player.hasTag("checkSkinCount")) {
            CheckSkinsUnlocked(player)
            player.removeTag("checkSkinCount")
        }



        winStreakSB.addScore(player, 0)
        var winStreakPlayer = winStreakSB.getScore(player)
        yLevelQuestSB.addScore(player, 0)
        var yLevelQuestPlayer = yLevelQuestSB.getScore(player)
        nearDeathCountSB.addScore(player, 0)
        var nearDeathCountPlayer = nearDeathCountSB.getScore(player)

        //Tier 0: Game Wins
        system.run(() => QuestTier0Check(player, gameWinsSB, creditsSB))
        //Tier 1: Round Wins
        system.run(() => QuestTier1Check(player, roundWinsSB, creditsSB))
        //Tier 2: Gameplay Advancements
        system.run(() => QuestTier2Check(player, creditsSB))
        //Tier 3: Skins Unlocked
        QuestTier3Check(player, creditsSB)

        //check win streak for quest 2_2
        if (winStreakPlayer >= 5) {
            player.addTag("quest_2_2_add")
        }

        //check team sizes (scrapped)
        if (player.hasTag("team_nu")) {
            teamSizesSB.addScore("teamNu", 1)
        }
        if (player.hasTag("team_lambda")) {
            teamSizesSB.addScore("teamLambda", 1)
        }


        if (player.hasTag("winRound")) {
            player.removeTag("winRound")
        }

        //Tick down timer for quest 2_0
        if (yLevelQuestPlayer > 0) {
            yLevelQuestSB.addScore(player,-1)
        }

        //Check for y level for quests 2_0 and 2_1
        if (player.location.y < 20 && player.hasTag("ingame")) {
            if (!player.hasTag("lowestYLevel")) {
                nearDeathCountSB.addScore(player, 1)
                if (nearDeathCountPlayer >= 9) {
                    player.addTag("quest_2_1_add")
                }
            }
            player.addTag("lowestYLevel")
            yLevelQuestSB.setScore(player,100)
        }
        else {
            player.removeTag("lowestYLevel")
        }

        //check for y level for quests 2_0 and 2_1
        if (player.location.y > 60 && player.hasTag("ingame")) {
            player.addTag("highestYLevel")
            if (yLevelQuestPlayer > 0) {
                player.addTag("quest_2_0_add")
            }
        }
        else {
            player.removeTag("highestYLevel")
        }

        if (!player.hasTag("ingame")) {
            nearDeathCountSB.setScore(player, 0)
        }



    })
})

function QuestTier0Check(player, gameWinsSB, creditsSB) {
    var playerGameWins = gameWinsSB.getScore(player)
    //var playerCredits = creditsSB.getScore(player) Don't need this for now, leaving it here just in case

    var completeQuestMsg = `§e[Advancements]§a Advancement Completed: §dGame Winner (Tier`

    if (playerGameWins >= 100 && !player.hasTag("quest_0_7")) {
        player.addTag("quest_0_7")
        player.sendMessage(completeQuestMsg + ` 8)§r\n+${quest0Currency[7].toString()}`)
        creditsSB.addScore(player,quest0Currency[7])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerGameWins >= 50 && !player.hasTag("quest_0_6")) {
        player.addTag("quest_0_6")
        player.sendMessage(completeQuestMsg + ` 7)§r\n+${quest0Currency[6].toString()}`)
        creditsSB.addScore(player, quest0Currency[6])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerGameWins >= 40 && !player.hasTag("quest_0_5")) {
        player.addTag("quest_0_5")
        player.sendMessage(completeQuestMsg + ` 6)§r\n+${quest0Currency[5].toString()}`)
        creditsSB.addScore(player, quest0Currency[5])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerGameWins >= 30 && !player.hasTag("quest_0_4")) {
        player.addTag("quest_0_4")
        player.sendMessage(completeQuestMsg + ` 5)§r\n+${quest0Currency[4].toString()}`)
        creditsSB.addScore(player, quest0Currency[4])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerGameWins >= 20 && !player.hasTag("quest_0_3")) {
        player.addTag("quest_0_3")
        player.sendMessage(completeQuestMsg + ` 4)§r\n+${quest0Currency[3].toString()}`)
        creditsSB.addScore(player, quest0Currency[3])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerGameWins >= 10 && !player.hasTag("quest_0_2")) {
        player.addTag("quest_0_2")
        player.sendMessage(completeQuestMsg + ` 3)§r\n+${quest0Currency[3].toString()}`)
        creditsSB.addScore(player, quest0Currency[2])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerGameWins >= 5 && !player.hasTag("quest_0_1")) {
        player.addTag("quest_0_1")
        player.sendMessage(completeQuestMsg + ` 2)§r\n+${quest0Currency[1].toString()}`)
        creditsSB.addScore(player, quest0Currency[1])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerGameWins >= 1 && !player.hasTag("quest_0_0")) {
        player.addTag("quest_0_0")
        player.sendMessage(completeQuestMsg + ` 1)§r\n+${quest0Currency[0].toString()}`)
        creditsSB.addScore(player, quest0Currency[0])
        system.run(() => PlayAdvancementSound(player))
    }

}

function QuestTier1Check(player, roundWinsSB, creditsSB) {
    var playerRoundWins = roundWinsSB.getScore(player)

    var completeQuestMsg = `§e[Advancements]§a Advancement Completed: §dRound Winner (Tier`

    if (playerRoundWins >= 500 && !player.hasTag("quest_1_5")) {
        player.addTag("quest_1_5")
        player.sendMessage(completeQuestMsg + ` 6)§r\n+${quest1Currency[5].toString()}`)
        creditsSB.addScore(player, quest1Currency[5])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerRoundWins >= 100 && !player.hasTag("quest_1_4")) {
        player.addTag("quest_1_4")
        player.sendMessage(completeQuestMsg + ` 5)§r\n+${quest1Currency[4].toString()}`)
        creditsSB.addScore(player, quest1Currency[4])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerRoundWins >= 50 && !player.hasTag("quest_1_3")) {
        player.addTag("quest_1_3")
        player.sendMessage(completeQuestMsg + ` 4)§r\n+${quest1Currency[3].toString()}`)
        creditsSB.addScore(player, quest1Currency[3])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerRoundWins >= 10 && !player.hasTag("quest_1_2")) {
        player.addTag("quest_1_2")
        player.sendMessage(completeQuestMsg + ` 3)§r\n+${quest1Currency[2].toString()}`)
        creditsSB.addScore(player, quest1Currency[2])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerRoundWins >= 5 && !player.hasTag("quest_1_1")) {
        player.addTag("quest_1_1")
        player.sendMessage(completeQuestMsg + ` 2)§r\n+${quest1Currency[1].toString()}`)
        creditsSB.addScore(player, quest1Currency[1])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (playerRoundWins >= 1 && !player.hasTag("quest_1_0")) {
        player.addTag("quest_1_0")
        player.sendMessage(completeQuestMsg + ` 1)§r\n+${quest1Currency[0].toString()}`)
        creditsSB.addScore(player, quest1Currency[0])
        system.run(() => PlayAdvancementSound(player))
    }
}

function QuestTier2Check(player, creditsSB) {

    var completeQuestMsg = `§e[Advancements]§a Advancement Completed:`

    if (player.hasTag("quest_2_0_add") && !player.hasTag("quest_2_0")) {
        player.addTag("quest_2_0")
        player.sendMessage(completeQuestMsg + ` ${quest2Data[0].name}§r\n+${quest2Currency[0].toString()}`)
        creditsSB.addScore(player, quest2Currency[0])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (player.hasTag("quest_2_1_add") && !player.hasTag("quest_2_1")) {
        player.addTag("quest_2_1")
        player.sendMessage(completeQuestMsg + ` ${quest2Data[1].name}§r\n+${quest2Currency[1].toString()}`)
        creditsSB.addScore(player, quest2Currency[1])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (player.hasTag("quest_2_2_add") && !player.hasTag("quest_2_2")) {
        player.addTag("quest_2_2")
        player.sendMessage(completeQuestMsg + ` ${quest2Data[2].name}§r\n+${quest2Currency[2].toString()}`)
        creditsSB.addScore(player, quest2Currency[2])
        system.run(() => PlayAdvancementSound(player))
    }
}

function QuestTier3Check(player, creditsSB) {

    var totalSkinsSB = world.scoreboard.getObjective("player_skins_unlocked")

    var skins = totalSkinsSB.getScore(player)

    var completeQuestMsg = `§e[Advancements]§a Advancement Completed: §dSkin Collector (Tier` 
    if (skins >= quest3Requirement[3] && !player.hasTag("quest_3_3")) {
        player.addTag("quest_3_3")
        player.sendMessage(completeQuestMsg + ` 4)§r\n+${quest3Currency[3].toString()}`)
        creditsSB.addScore(player, quest3Currency[3])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (skins >= quest3Requirement[2] && !player.hasTag("quest_3_2")) {
        player.addTag("quest_3_2")
        player.sendMessage(completeQuestMsg + ` 3)§r\n+${quest3Currency[2].toString()}`)
        creditsSB.addScore(player, quest3Currency[2])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (skins >= quest3Requirement[1] && !player.hasTag("quest_3_1")) {
        player.addTag("quest_3_1")
        player.sendMessage(completeQuestMsg + ` 2)§r\n+${quest3Currency[1].toString()}`)
        creditsSB.addScore(player, quest3Currency[1])
        system.run(() => PlayAdvancementSound(player))
    }
    else if (skins >= quest3Requirement[0] && !player.hasTag("quest_3_0")) {
        player.addTag("quest_3_0")
        player.sendMessage(completeQuestMsg + ` 1)§r\n+${quest3Currency[0].toString()}`)
        creditsSB.addScore(player, quest3Currency[0])
        system.run(() => PlayAdvancementSound(player))
    }
}
function PlayAdvancementSound(player) {

}