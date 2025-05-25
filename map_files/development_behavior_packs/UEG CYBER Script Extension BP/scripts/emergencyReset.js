import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes, ItemStack } from '@minecraft/server'

system.runInterval(() => {

    var gameActiveSB = world.scoreboard.getObjective("game_active")
    var gameActiveSBNum = gameActiveSB.getScore("game_active")

    world.getAllPlayers().forEach(player => {
        if (gameActiveSBNum == 1 && player.hasTag("operator")) {
            var emergency = world.scoreboard.getObjective("emergencyphase")
            var playerEmergPh = emergency.getScore(player)
            if (playerEmergPh == 0) {
                const item1 = new ItemStack("sm:emergency_3", 1)
                const inventory = player.getComponent('minecraft:inventory');
                inventory.container.setItem(9, item1);
                var cursor = player.getComponent("minecraft:cursor_inventory")
                var cursorItem = cursor.item
                if (cursorItem) {
                    var itemType = cursorItem.typeId
                    if (itemType == "sm:emergency_3") {
                        cursor.clear()
                        emergency.addScore(player, 1)
                    }
                }

            }
            else if (playerEmergPh == 1) {
                const item1 = new ItemStack("sm:emergency_2", 1)
                const inventory = player.getComponent('minecraft:inventory');
                inventory.container.setItem(9, item1);
                var cursor = player.getComponent("minecraft:cursor_inventory")
                var cursorItem = cursor.item
                if (cursorItem) {
                    var itemType = cursorItem.typeId
                    if (itemType == "sm:emergency_2") {
                        cursor.clear()
                        emergency.addScore(player, 1)
                    }
                }
            }
            else if (playerEmergPh == 2) {
                const item1 = new ItemStack("sm:emergency_1", 1)
                const inventory = player.getComponent('minecraft:inventory');
                inventory.container.setItem(9, item1);
                var cursor = player.getComponent("minecraft:cursor_inventory")
                var cursorItem = cursor.item
                if (cursorItem) {
                    var itemType = cursorItem.typeId
                    if (itemType == "sm:emergency_1") {
                        cursor.clear()
                        emergency.addScore(player, 1)
                    }
                }
            }
            else {
                player.runCommand("function _emergency_reset")
                emergency.setScore(player, 0)
            }
        }
        else {
            player.runCommand("clear @s sm:emergency_1")
            player.runCommand("clear @s sm:emergency_2")
            player.runCommand("clear @s sm:emergency_3")
        }
    })



})