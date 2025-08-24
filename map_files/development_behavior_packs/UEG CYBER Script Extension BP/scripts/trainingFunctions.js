import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { itemList, beginner0, beginner1, intermediate0, intermediate1, advanced0, intermediateTips, beginnerTips, advancedTips} from './trainingArr.js'


var beginnerTrainingCoords = [beginner0]
var intermediateTrainingCoords = [intermediate0, intermediate1]
var advancedTrainingCoords = [advanced0]

var allCoords = [beginnerTrainingCoords, intermediateTrainingCoords, advancedTrainingCoords]

var difficulties = ["§aBeginner", "§6Intermediate", "§cAdvanced"]
var clearedDif = ["§cNo", "§aYes"]

var roomOneList = []
var roomTwoList = []
var roomThreeList = []

var trainingTips = [beginnerTips, intermediateTips, advancedTips]


var roomDisplacements = [0, 72, 146]

world.beforeEvents.itemUse.subscribe(data => {



    const player = data.source


    

    if (data.itemStack.typeId === "sm:training_menu") {

        system.run(() => trainingNavMenu(player))

    }
})
function trainingNavMenu(player) {

    var currentRoomSB = world.scoreboard.getObjective("curTrainRoom")
    var currentRoomPlayer = currentRoomSB.getScore(player)

    var trainingDifIndexSB = world.scoreboard.getObjective("trainingDifIndex")
    var trainingLevelID = world.scoreboard.getObjective("trainingLevelID")

    var mainTitle = ""
    var mainDesc = ""

    var roomLists = [roomOneList, roomTwoList, roomThreeList]

    //for (var k = 0; k < roomOneList.length; k++) {
    //    player.sendMessage("Room 1: " + k.toString() + roomOneList[k])
    //}
    //for (var k = 0; k < roomTwoList.length; k++) {
    //    player.sendMessage("Room 2: " + k.toString() + roomTwoList[k])
    //}
    //for (var k = 0; k < roomThreeList.length; k++) {
    //    player.sendMessage("Room 3: " + k.toString() + roomThreeList[k])
    //}
    var rooms = ["roomOne", "roomTwo", "roomThree"]


    if (currentRoomPlayer > -1) {
        var difficultyR = trainingDifIndexSB.getScore(rooms[currentRoomPlayer])
        var currentLevel = trainingLevelID.getScore(rooms[currentRoomPlayer])
        if (roomLists[currentRoomPlayer][0] == player.name) {
            let form = new ActionFormData();
            form.title(mainTitle);
            var playerList
            switch (currentRoomPlayer) {
                case 0:
                    playerList = roomOneList
                    break;
                case 1:
                    playerList = roomTwoList
                    break;
                case 2:
                    playerList = roomThreeList
                    break;
            }
            
            form.body(`Training Room: Room ${currentRoomPlayer + 1}\n\nRoom Leader: ${playerList[0]}\n\nCurrent Level: ${allCoords[difficultyR][currentLevel][6][0]}\n\nLevel Tip: ${trainingTips[difficultyR][currentLevel]}\n\n`)
            form.button("Beginner Training", "textures/ui/button_easy")
            form.button("Intermediate Training", "textures/ui/button_normal")
            form.button("Advanced Training", "textures/ui/button_hard");
            form.button("Exit", "textures/ui/teleport");
            form.button("Cancel", "textures/ui/button_close");

            form.show(player).then(r => {
                switch (r.selection) {
                    case 0:
                        trainingList(player, 0)
                        break;
                    case 1:
                        trainingList(player, 1)
                        break;
                    case 2:
                        trainingList(player, 2)
                        break;
                    case 3:
                        system.run(() => ExitTraining(player, currentRoomSB, currentRoomPlayer))
                        break;

                }
            })
        }
        else {
            var difficultyR = trainingDifIndexSB.getScore(rooms[currentRoomPlayer])
            var currentLevel = trainingLevelID.getScore(rooms[currentRoomPlayer])
            let form = new ActionFormData();
            form.title("Training Menu");
            var playerList
            switch (currentRoomPlayer) {
                case 0:
                    playerList = roomOneList
                    break;
                case 1:
                    playerList = roomTwoList
                    break;
                case 2:
                    playerList = roomThreeList
                    break;
            }
            form.body(`Training Room: Room ${currentRoomPlayer}\n\nRoom Leader: ${playerList[0]}\n\nCurrent Level: ${allCoords[difficultyR][currentLevel][6][0]}\n\nLevel Tip: ${trainingTips[difficultyR][currentLevel]}\n\n`);
            
            form.button("Exit")
            form.button("Cancel", "textures/ui/button_close");
            form.show(player).then(r => {
                switch (r.selection) {
                    case 0:
                        system.run(() => ExitTraining(player,currentRoomSB,currentRoomPlayer))
                        break;
                }
            })
        }
    }
    else {
        var lengths = [0, 0, 0]
        if (roomOneList.length != undefined) {
            lengths[0] = roomOneList.length
        }
        else {
            lengths[0] = undefined;
        }
        if (roomTwoList.length != undefined) {
            lengths[1] = roomTwoList.length
        }
        else {
            lengths[1] = undefined;
        }
        if (roomThreeList.length != undefined) {
            lengths[2] = roomThreeList.length
        }
        else {
            lengths[2] = undefined;
        }
        let form = new ActionFormData();
        form.title("Training Menu");
        form.body(`Test`);
        form.button(`Room 1 (${lengths[0]} Players)`, "textures/ui/teleport_0");
        form.button(`Room 2 (${lengths[1]} Players)`, "textures/ui/teleport_1");
        form.button(`Room 3 (${lengths[2]} Players)`, "textures/ui/teleport_2");
        form.button("Cancel", "textures/ui/button_close");
        form.show(player).then(r => {
            var trainingDifIndexSB = world.scoreboard.getObjective("trainingDifIndex")
            var trainingLevelID = world.scoreboard.getObjective("trainingLevelID")

            var coordIndexF = [beginnerTrainingCoords, intermediateTrainingCoords, advancedTrainingCoords]
            switch (r.selection) {
                case 0:
                    if (lengths[0] == 0) {
                        currentRoomSB.setScore(player, 0)
                        player.addTag("roomLeader_0")
                        var difficulty = trainingDifIndexSB.getScore("roomOne")
                        var currentDifficulty = coordIndexF[difficulty]
                        var currentLevel = currentDifficulty[trainingLevelID.getScore("roomOne")]

                        var startCoords = `${currentLevel[0]} ${currentLevel[1]} ${parseInt(currentLevel[2])} facing ${currentLevel[3]} ${currentLevel[4]} ${currentLevel[5]}`
                        //world.sendMessage(startCoords)
                        system.run(() => InitPlayerTrainingPersonal(player, currentLevel, 0, startCoords))
                    }
                    else {
                        player.sendMessage("§e[Error]§c Unfortunately, as of now there can only be one player per training area for the time being due to a restriction the developer (ScizorM) is too lazy to look into. This might be fixed in the future. Let him know in the Discord if it is big enough of a problem to fix.")
                    }

                    break;
                case 1:
                    if (lengths[1] == 0) {
                        currentRoomSB.setScore(player, 1)
                        player.addTag("roomLeader_1")
                        var difficulty = trainingDifIndexSB.getScore("roomTwo")
                        var currentDifficulty = coordIndexF[difficulty]
                        var currentLevel = currentDifficulty[trainingLevelID.getScore("roomTwo")]

                        var roomDisplacements = [0, 72, 146]


                        var startCoords = `${currentLevel[0]} ${currentLevel[1]} ${(currentLevel[2] + roomDisplacements[1])} facing ${currentLevel[3]} ${currentLevel[4]} ${currentLevel[5] + roomDisplacements[1]}`
                        //world.sendMessage(startCoords)
                        system.run(() => InitPlayerTrainingPersonal(player, currentLevel, 1, startCoords))
                    }
                    else {
                        player.sendMessage("§e[Error]§c Unfortunately, as of now there can only be one player per training area for the time being due to a restriction the developer (ScizorM) is too lazy to look into. This might be fixed in the future. Let him know in the Discord if it is big enough of a problem to fix.")
                    }

                    break;
                case 2:
                    if (lengths[2] == 0) {
                        currentRoomSB.setScore(player, 2)
                        player.addTag("roomLeader_2")
                        var difficulty = trainingDifIndexSB.getScore("roomThree")
                        var currentDifficulty = coordIndexF[difficulty]
                        var currentLevel = currentDifficulty[trainingLevelID.getScore("roomThree")]

                        var roomDisplacements = [0, 72, 146]


                        var startCoords = `${currentLevel[0]} ${currentLevel[1]} ${(currentLevel[2] + roomDisplacements[2])} facing ${currentLevel[3]} ${currentLevel[4]} ${currentLevel[5] + roomDisplacements[2]}`
                        //world.sendMessage(startCoords)
                        system.run(() => InitPlayerTrainingPersonal(player, currentLevel, 2, startCoords))
                    }
                    else {
                        player.sendMessage("§e[Error]§c Unfortunately, as of now there can only be one player per training area for the time being due to a restriction the developer (ScizorM) is too lazy to look into. This might be fixed in the future. Let him know in the Discord if it is big enough of a problem to fix.")

                    }

                    break;

            }
        })
    }


}

//difficulty: 0 = beginner, 1 = intermediate, 2 = advanced

function ExitTraining(player, currentRoomSB, currentRoomPlayer) {
    player.runCommand("clear @s")
    player.runCommand("gamemode a")
    if (player.hasTag(`roomLeader_${currentRoomPlayer}`)) {
        player.removeTag(`roomLeader_${currentRoomPlayer}`)
    }
    currentRoomSB.setScore(player, -1)
    player.removeTag("tutorial")
    player.removeTag("dash_disabled")
    player.removeTag("ability_disabled")
    player.runCommand("tp @s 111 30 42 facing 112 30 42")
}
function trainingList(player, difficulty) {

    var currentRoomSB = world.scoreboard.getObjective("curTrainRoom")
    var currentRoomPlayer = currentRoomSB.getScore(player)

    var roomStr

    switch (currentRoomPlayer) {
        case 0:
            roomStr = "One"
            break;
        case 1:
            roomStr = "Two"
            break;
        case 2:
            roomStr = "Three"
            break;
    }

    var trainingDifIndexSB = world.scoreboard.getObjective("trainingDifIndex")
    var trainingLevelID = world.scoreboard.getObjective("trainingLevelID")

    var coordIndexF = [beginnerTrainingCoords, intermediateTrainingCoords, advancedTrainingCoords]
    var currentDifficulty = coordIndexF[difficulty]

    var mainTitle = ""
    var mainDesc = ""

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    for (var i = 0; i < currentDifficulty.length; i++) {
        var title;
        if (player.hasTag(`clear_tr_${difficulty}_${i}`)) {
            title = currentDifficulty[i][6][0] + ""
        }
        else {
            title = currentDifficulty[i][6][0] + ""
        }

        form.button(title, "textures/ui/teleport");
    }

    form.button("Back", "textures/ui/button_back");
    form.button("Cancel", "textures/ui/button_close");

    

    form.show(player).then(r => {
        for (var j = 0; j < currentDifficulty.length; j++) {
            //world.sendMessage("j = " + j)
            //world.sendMessage("selection = " + r.selection)
            //world.sendMessage("current difficulty length: " + currentDifficulty.length)
            if (j == r.selection) {
                trainingDifIndexSB.setScore("room" + roomStr, difficulty)
                trainingLevelID.setScore("room" + roomStr, j)
                var currentLevel = currentDifficulty[j]
                var startCoords = `${currentLevel[0]} ${currentLevel[1]} ${(currentLevel[2] + roomDisplacements[currentRoomPlayer])} facing ${currentLevel[3]} ${currentLevel[4]} ${currentLevel[5] + roomDisplacements[currentRoomPlayer]}`

                player.runCommand(`structure load training_${difficulty}_${j} -159 0 ${412 + roomDisplacements[currentRoomPlayer]}`)
                system.run(() => clearItems(player))
                player.runCommand(`execute as @a run execute as @s if score @s curTrainRoom matches ${currentRoomPlayer} run camera @s fade time 0 1 0.5`)
                player.removeTag("ability_disabled")
                player.removeTag("dash_disabled")
                if (currentLevel[6][3] == true || currentLevel[6][2] == true) {
                    player.runCommand(`execute as @a run execute as @s if score @s curTrainRoom matches ${currentRoomPlayer} run tag @s add tutorial`)
                    player.runCommand(`execute as @a run execute as @s if score @s curTrainRoom matches ${currentRoomPlayer} run function ${currentLevel[6][4]}`)
                    //world.sendMessage("test")
                    if (currentLevel[6][3] == false) {
                        player.addTag("ability_disabled")
                    }
                    else if (currentLevel[6][2] == false) {
                        player.addTag("dash_disabled")
                    }
                }
                else {
                    player.runCommand(`execute as @a run execute as @s if score @s curTrainRoom matches ${currentRoomPlayer} run tag @s remove tutorial`)
                }



                player.runCommand(`execute as @a run execute as @s if score @s curTrainRoom matches ${currentRoomPlayer} run tp @s ${startCoords}`)
                system.run(() => giveItems(player, currentLevel))
            }
        }
        if (r.selection == currentDifficulty.length) {
            system.run(() => trainingNavMenu(player))
        }
    })
}





function InitPlayerTrainingPersonal(player, currentLevel, currentRoomPlayer, startCoords) {
    system.run(() => clearItems(player))
    player.runCommand("camera @s fade time 0 1 0.5")
    player.removeTag("ability_disabled")
    player.removeTag("dash_disabled")
    if (currentLevel[6][3] == true || currentLevel[6][2] == true) {
        player.runCommand(`execute as @s run execute as @s if score @s curTrainRoom matches ${currentRoomPlayer} run tag @s add tutorial`)
        player.runCommand(`execute as @s run execute as @s if score @s curTrainRoom matches ${currentRoomPlayer} run function ${currentLevel[6][4]}`)
        //world.sendMessage("test")
        if (currentLevel[6][3] == false) {
            player.addTag("ability_disabled")
        }
        else if (currentLevel[6][2] == false) {
            player.addTag("dash_disabled")
        }
    }
    else {
        player.runCommand(`execute as @s run execute as @s if score @s curTrainRoom matches ${currentRoomPlayer} run tag @s remove tutorial`)
    }



    player.runCommand(`execute as @s run execute as @s if score @s curTrainRoom matches ${currentRoomPlayer} run tp @s ${startCoords}`)
    system.run(() => giveItems(player, currentLevel))
}


function clearItems(player) {
    itemList.forEach((item) => {
        player.runCommand(`clear @s ${item}`)
    })
}

function giveItems(player, currentLevel) {
    for (var i = 6; i < currentLevel.length - 1;) {
        player.runCommand(`/replaceitem entity @s slot.hotbar ${i - 6} ${currentLevel[i + 1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}`)
        //player.sendMessage("test message")
        i++
    }
}

function LeaveRooms(player) {
    var trainingLevelIDSB = world.scoreboard.getObjective("trainingLevelID")
    var trainingDifIndexSB = world.scoreboard.getObjective("trainingDifIndex")
    var currentTrainingRoomSB = world.scoreboard.getObjective("curTrainRoom")

    currentTrainingRoomSB.setScore(player, -1)
    player.removeTag("tutorial")
    player.removeTag("dash_disabled")
    player.removeTag("ability_disabled)")
}

function ReassignRoomLeader(roomArr, id,player) {
    if (roomArr[0] != undefined) {
        player.runCommand(`execute as "${roomArr[0]}" run tag @s add roomLeader_${id}`)
    }
//    world.sendMessage("leader reassigned to " + roomArr[0])
}

system.runInterval(() => {

    world.getDimension("Overworld").runCommand("/scoreboard players add @a curTrainRoom 0")
    var trainingLevelIDSB = world.scoreboard.getObjective("trainingLevelID")
    var trainingDifIndexSB = world.scoreboard.getObjective("trainingDifIndex")
    var currentTrainingRoomSB = world.scoreboard.getObjective("curTrainRoom")

    var setTrainingLeaderSB = world.scoreboard.getObjective("setTrainingLeader")

    var checkForActiveLeaderSB = world.scoreboard.getObjective("checkLeaderActive")
    var trainingDifIndexes = [trainingDifIndexSB.getScore("roomOne"), trainingDifIndexSB.getScore("roomTwo"), trainingDifIndexSB.getScore("roomThree")]
    var trainingLevelIDs = [trainingLevelIDSB.getScore("roomOne"), trainingLevelIDSB.getScore("roomTwo"), trainingLevelIDSB.getScore("roomThree")]

    checkForActiveLeaderSB.setScore("room0", 0)
    checkForActiveLeaderSB.setScore("room1", 0)
    checkForActiveLeaderSB.setScore("room2", 0)

    roomOneList = []
    roomTwoList = []
    roomThreeList = []

    world.getAllPlayers().forEach(player => {

        if (player.hasTag("exit_tutorialRoom")) {
            system.run(() => LeaveRooms(player))
        }

        if (player.hasTag("ability_disabled")) {
            player.runCommand("xp -20L @s")
        }
        if (player.hasTag("dash_disabled")) {
            player.runCommand("scoreboard players set @s dashes 0")
        }
        if (!player.hasTag("scoreAddedTrainingL")) {
            setTrainingLeaderSB.addScore(player, 0)
            player.addTag("scoreAddedtrainingL");
        }

        var checkForLeader = setTrainingLeaderSB.getScore(player)




        var plrCurrentRoom = currentTrainingRoomSB.getScore(player)

        /*
        if (checkForLeader == 1) {
            setTrainingLeaderSB.setScore(player, 0)
            player.addTag("roomLeader_0")
        }
        else if (checkForLeader == 2) {
            setTrainingLeaderSB.setScore(player, 0)
            player.addTag("roomLeader_1")
        }
        else if (checkForLeader == 3) {
            setTrainingLeaderSB.setScore(player, 0)
            player.addTag("roomLeader_2")
        }
        */
        var playerDifficultyIndex = trainingDifIndexes[plrCurrentRoom]
        var playerLevelID = trainingLevelIDs[plrCurrentRoom]
        var currentLevel;
        var cleared;


        if (player.hasTag(`roomLeader_${plrCurrentRoom}`)) {
            checkForActiveLeaderSB.setScore(`room${plrCurrentRoom}`,1)
        }

        if (checkForActiveLeaderSB.getScore("room0") == 0 && roomOneList[0] != undefined) {
            ReassignRoomLeader(roomOneList, 0,player)
        }

        if (checkForActiveLeaderSB.getScore("room1") == 0 && roomTwoList[0] != undefined) {
            ReassignRoomLeader(roomTwoList, 1,player)
        }

        if (checkForActiveLeaderSB.getScore("room2") == 0 && roomThreeList[0] != undefined) {
            ReassignRoomLeader(roomThreeList, 2,player)
        }

        if (player.hasTag(`roomLeader_0`) && plrCurrentRoom != 0) {
            player.removeTag("roomLeader_0")
            ReassignRoomLeader(roomOneList,0,player)

            player.sendMessage("§e[Training] §cYou are no longer the room leader of training room 1.")
        }

        else if ((player.hasTag(`roomLeader_1`) && plrCurrentRoom != 1) || (player.hasTag(`roomLeader_2`) && plrCurrentRoom != 2)) {
            player.removeTag("roomLeader_1")
            ReassignRoomLeader(roomTwoList,1,player)

            player.sendMessage("§e[Training] §cYou are no longer the room leader of training room 2.")
        }

        else if ((player.hasTag(`roomLeader_2`) && plrCurrentRoom != 2)) {
            player.removeTag("roomLeader_2")
            ReassignRoomLeader(roomThreeList,2)

            player.sendMessage("§e[Training] §cYou are no longer the room leader of training room 3.")
        }

        if (player.hasTag(`roomLeader_` + plrCurrentRoom.toString())) {
            switch (plrCurrentRoom) {
                case 0:
                    roomOneList.unshift(player.name)
                    break;
                case 1:
                    roomTwoList.unshift(player.name)
                    break;
                case 2:
                    roomThreeList.unshift(player.name)
                    break;
            }
        }
        else {
            switch (plrCurrentRoom) {
                case 0:
                    roomOneList.push(player.name)
                    break;
                case 1:
                    roomTwoList.push(player.name)
                    break;
                case 2:
                    roomThreeList.push(player.name)
                    break;
            }
        }



        switch (playerDifficultyIndex) {
            case 0:
                currentLevel = beginnerTrainingCoords
                break;
            case 1:
                currentLevel = intermediateTrainingCoords
                break;
            case 2:
                currentLevel = advancedTrainingCoords
                break;
        }
        switch (player.hasTag(`clear_tr_${playerDifficultyIndex}_${playerLevelID}`)){
            case true:
                cleared = 1;
                break;
            case false:
                cleared = 0;
                break;
        }
        //starts from 0, -1 is not in a room and should be programmed to teleport player back to spawn eventually, not really my problem rn though

        if (player.hasTag("enter_tc")) {
            if (plrCurrentRoom > -1) {
                player.runCommand(`execute as @s run titleraw @s actionbar {"rawtext":[{"text":"Training Center\n\nActive:\n${currentLevel[playerLevelID][6][1]}\n\nDifficulty:\n${difficulties[playerDifficultyIndex]}\n\n§rCleared?\n${clearedDif[cleared]}"}]}`)
            }
            else {
                player.runCommand(`execute as @s run titleraw @s actionbar {"rawtext":[{"text":"Training Center\n\nWelcome! Use the\nTraining Item\n\nTo begin training.\nItem to start.\n\n§rCleared?\ntest"}]}`)

            }

        }
        if (player.hasTag("training_goal")) {
            var trainingSB = world.scoreboard.getObjective("player_training_cleared")
            if (!player.hasTag(`clear_tr${playerDifficultyIndex}_${playerLevelID}`)) {
                trainingSB.addScore(player,1)
            }
            player.addTag("new_title_training_clear")
            player.addTag("new_title_init")
            player.addTag(`clear_tr_${playerDifficultyIndex}_${playerLevelID}`)
            player.runCommand(`tp @s ${currentLevel[playerLevelID][0]} ${currentLevel[playerLevelID][1]} ${currentLevel[playerLevelID][2] + roomDisplacements[plrCurrentRoom]} facing ${currentLevel[playerLevelID][3]} ${currentLevel[playerLevelID][4]} ${currentLevel[playerLevelID][5] + roomDisplacements[plrCurrentRoom]}`)
            player.removeTag("training_goal")
        }

        if (player.hasTag("training_death")) {
            player.addTag("new_title_training_try_again")
            player.addTag("new_title_init")
            //player.sendMessage(currentLevel[playerLevelID].length.toString())
            //player.sendMessage(currentLevel[playerLevelID][6][0])
            for (var i = 6; i < currentLevel[playerLevelID].length - 1;) {
                player.runCommand(`/clear @s ${currentLevel[playerLevelID][i + 1]}`)
                player.runCommand(`/replaceitem entity @s slot.hotbar ${i - 6} ${currentLevel[playerLevelID][i + 1]} 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}`)
                //player.sendMessage("test message")
                i++
            }

            //player.sendMessage("difficulty: " + playerDifficultyIndex.toString() + "\nlevel ID: " + playerLevelID.toString() + "\nlength: " + currentLevel[playerLevelID].length.toString())
            player.runCommand(`tp @s ${currentLevel[playerLevelID][0]} ${currentLevel[playerLevelID][1]} ${(currentLevel[playerLevelID][2] + roomDisplacements[plrCurrentRoom])} facing ${currentLevel[playerLevelID][3]} ${currentLevel[playerLevelID][4]} ${currentLevel[playerLevelID][5] + roomDisplacements[plrCurrentRoom]}`)
            player.removeTag("training_death")
        }
    })
})