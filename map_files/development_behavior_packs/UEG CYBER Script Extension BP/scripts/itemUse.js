﻿import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes, EquipmentSlot } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { weaponIDList, ingameWeaponIDList, loadoutTypeIDs, loadoutTypeIDLocs, loadoutIcons, loadoutNames, ingameWeaponNames } from './loadoutList.js'
import { itemNameList, itemIconLocation, itemScoreboard, itemDescList } from './foodList.js'


world.beforeEvents.worldInitialize.subscribe((initEvent) => {
    const dimension = world.getDimension("overworld")
    var selectedLoadoutSlot = 0;
    var lobbyMenuState = 0;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// weapons

    initEvent.itemComponentRegistry.registerCustomComponent("custom:item", {
        onUse(event) {
            const { itemStack, source } = event;

            //code obtained from Minato from the Bedrock Addons Discord, I hate mojang so much for removing holiday creator features and ruining everything
            const dimension = world.getDimension("overworld")
            const viewDir = source.getViewDirection()
            const vulcanBlast = source.dimension.spawnEntity("minecraft:arrow", source.getHeadLocation());
            const projectile = vulcanBlast.getComponent("projectile");
            projectile.owner = source;
            const power = 1
            const powerV3 = {
                x: source.getViewDirection().x * power,
                y: source.getViewDirection().y * power,
                z: source.getViewDirection().z * power
            }
            projectile.shoot(powerV3)
            source.runCommand("function vulcan")
            source.runCommand("function vulcan_extendedcmds")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:fish_car", {
        onUse(event) {
            const { itemStack, source } = event;
            const fishCarTime = world.scoreboard.getObjective("fish_car_time")
            fishCarTime.setScore(source,10)
            //code obtained from Minato from the Bedrock Addons Discord, I hate mojang so much for removing holiday creator features and ruining everything
            const dimension = world.getDimension("overworld")
            const viewDir = source.getViewDirection()
            source.applyKnockback(source.getViewDirection().x, source.getViewDirection().z, 4, 0)
            PlayWeaponSounds("fish_car","fish_car_global",source,0.5,0.5)
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:marksman", {
        onUse(event) {
            var randomNumber = Math.floor(Math.random() * 10)
            world.sendMessage(randomNumber.toString())

            const { itemStack, source } = event;
            const dimension = world.getDimension("overworld")
            const viewDir = source.getViewDirection()

            var entityType;
            var otherAttack = "none"

            switch (randomNumber) {
                case 0:
                    entityType = "minecraft:arrow"
                    break;
                case 1:
                    entityType = "minecraft:snowball"
                    break;
                case 2:
                    entityType = "minecraft:egg<sm:add_normal>"
                    otherAttack = "implosion"
                    break;
                case 3:
                    entityType = "none"
                    otherAttack = "charged_bolt"
                    break;
                case 4:
                    entityType = "minecraft:egg<sm:add_icarus>"
                    otherAttack = "icarus"
                    break;
                case 5:
                    entityType = "minecraft:egg<sm:add_normal>"
                    otherAttack = "fish"
                    break;
                case 6:
                    entityType = "none"
                    otherAttack = "deep_striker"
                    break;
                case 7:
                    entityType = "none"
                    otherAttack = "levitation"
                    break;
                case 8:
                    entityType = "none"
                    otherAttack = "emp"
                    break;
                case 9:
                    entityType = "none"
                    otherAttack = "misfire"
                    break;
            }

            //code obtained from Minato from the Bedrock Addons Discord, I hate mojang so much for removing holiday creator features and ruining everything

            if (entityType != "none") {
                const vulcanBlast = source.dimension.spawnEntity(entityType, source.getHeadLocation());
                const projectile = vulcanBlast.getComponent("projectile");
                if (otherAttack == "implosion") {
                    vulcanBlast.addTag("implosion")
                }
                else if (otherAttack == "icarus") {
                    vulcanBlast.addTag("icarus")
                }
                else if (otherAttack == "fish") {
                    vulcanBlast.addTag("fish")
                }
                projectile.owner = source;
                const power = 1
                const powerV3 = {
                    x: source.getViewDirection().x * power,
                    y: source.getViewDirection().y * power,
                    z: source.getViewDirection().z * power
                }
                projectile.shoot(powerV3)
                source.runCommand("function vulcan")
                source.runCommand("function vulcan_extendedcmds")
            }
            else if (otherAttack == "charged_bolt") {
                source.runCommand("function summon_laser")
                source.runCommand("function vulcan_extendedcmds")
            }
            else if (otherAttack == "deep_striker") {
                var entityRay = false
                const dimension = world.getDimension("overworld")

                const { itemStack, source } = event;

                var missileCountSB = world.scoreboard.getObjective("missile_fires")
                var missileCountPlayer = missileCountSB.getScore(source)

                var rayLocation = { x: source.location.x, y: source.location.y + 1.5, z: source.location.z }
                var lookDir = { x: source.getViewDirection().x, y: source.getViewDirection().y, z: source.getViewDirection().z }
                var blockRC = source.dimension.getBlockFromRay(rayLocation, lookDir, { includeLiquidBlocks: false, includePassableBlocks: false })
                var entityRC = source.getEntitiesFromViewDirection()




                var particleType = "sm:crimson_hexa"
                var particleWarningType = "sm:big_joe_warning"

                entityRC.forEach((hit) => {

                    source.setProperty("sm:deepstriker_anim", 1)

                    var hitEntity = hit.entity

                    var rayDisplacement = { x: source.location.x - hitEntity.location.x, y: source.location.y - hitEntity.location.y + .4, z: source.location.z - hitEntity.location.z }
                    var totalDisplacement = Math.abs(rayDisplacement.x) + Math.abs(rayDisplacement.y) + Math.abs(rayDisplacement.z)
                    var loopTimes = 50
                    for (let i = 1; i < loopTimes; i = i + .25) {
                        var particleLocation = {
                            x: hitEntity.location.x + (rayDisplacement.x / i),
                            y: hitEntity.location.y + (rayDisplacement.y / i) + 1,
                            z: hitEntity.location.z + (rayDisplacement.z / i)
                        }
                        source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                        if (i >= loopTimes) {
                            break;
                        }
                    }



                    hitEntity.applyKnockback(source.getViewDirection().x, source.getViewDirection().z, 4, 1)
                    hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /function explosion_crimson_weak`)
                    hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /summon sm:explosion_crimson`)
                    entityRay = true
                })

                if (entityRay) {

                }
                else {
                    source.setProperty("sm:deepstriker_anim", 1)
                    var rayDisplacementBlock = { x: source.location.x - blockRC.block.location.x, y: source.location.y - blockRC.block.location.y + .4, z: source.location.z - blockRC.block.location.z }





                    if (missileCountPlayer < 5) {
                        missileCountSB.addScore(source, 1)
                        source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /function explosion_crimson_weak`)
                        source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /summon sm:explosion_crimson`)
                        var totalDisplacement = Math.abs(rayDisplacementBlock.x) + Math.abs(rayDisplacementBlock.y) + Math.abs(rayDisplacementBlock.z)

                        var loopTimes = 50

                        for (let i = 1; i < loopTimes; i = i + .25) {
                            var particleLocation = {
                                x: blockRC.block.location.x + (rayDisplacementBlock.x / i),
                                y: blockRC.block.location.y + (rayDisplacementBlock.y / i) + 0.5,
                                z: blockRC.block.location.z + (rayDisplacementBlock.z / i)
                            }

                            source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                            if (i >= loopTimes) {
                                break;
                            }
                        }
                    }
                    else {
                        source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y + 2} ${blockRC.block.location.z} run function explosion_crimson`)
                        missileCountSB.setScore(source, 0)
                    }
                }
            }
            else if (otherAttack == "levitation") {
                source.runCommand("function antigrav_prism")
            }
            else if (otherAttack == "emp") {
                source.runCommand("execute positioned ~ ~1 ~ run function emp")
            }
            else if (otherAttack == "misfire") {

            }
            var cooldownComp1 = itemStack.getComponent(ItemCooldownComponent.componentId)
            cooldownComp1.startCooldown(source)

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:loadout_1", {
        onUse(event) {
            const { itemStack, source } = event;
            selectedLoadoutSlot = 1
            var cooldownComp1 = itemStack.getComponent(ItemCooldownComponent.componentId)
            cooldownComp1.startCooldown(source)
            source.playAnimation("animation.player.swing")
            system.run(() => loadoutSelectUI(source, selectedLoadoutSlot))
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:lobby_menu", {
        onUse(event) {
            const { itemStack, source } = event;
            var cooldownComp1 = itemStack.getComponent(ItemCooldownComponent.componentId)
            cooldownComp1.startCooldown(source)
            source.playAnimation("animation.player.swing")
            source.addTag("lobby_menu_open")

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:assign_item", {
        onUse(event) {
            const { itemStack, source } = event;
            var cooldownComp1 = itemStack.getComponent(ItemCooldownComponent.componentId)
            cooldownComp1.startCooldown(source)
            source.playAnimation("animation.player.swing")
            source.addTag("assign_food_items")

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:loadout_select", {
        onUse(event) {
            const { itemStack, source } = event;
            var cooldownComp1 = itemStack.getComponent(ItemCooldownComponent.componentId)
            cooldownComp1.startCooldown(source)
            LoadoutDecide(source)
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:loadout_2", {
        onUse(event) {
            const { itemStack, source } = event;
            selectedLoadoutSlot = 2
            var cooldownComp1 = itemStack.getComponent(ItemCooldownComponent.componentId)
            cooldownComp1.startCooldown(source)
            source.playAnimation("animation.player.swing")
            system.run(() => loadoutSelectUI(source, selectedLoadoutSlot))
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:loadout_3", {
        onUse(event) {
            const { itemStack, source } = event;
            selectedLoadoutSlot = 3
            var cooldownComp1 = itemStack.getComponent(ItemCooldownComponent.componentId)
            cooldownComp1.startCooldown(source)
            source.playAnimation("animation.player.swing")
            system.run(() => loadoutSelectUI(source, selectedLoadoutSlot))
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:use_stored_item", {
        onUse(event) {
            const { itemStack, source } = event;
            var player = source
            var cooldownComp1 = itemStack.getComponent(ItemCooldownComponent.componentId)
            cooldownComp1.startCooldown(source)
            source.runCommand("playsound random.eat @a ~ ~ ~")
            source.playSound("random.eat")
            var assignedItemSB = world.scoreboard.getObjective("assigned_food")
            var assignedItemSBPlayer = assignedItemSB.getScore(player)


            if (assignedItemSBPlayer != undefined) {
                var itemCountSB = world.scoreboard.getObjective(itemScoreboard[assignedItemSBPlayer])
                itemCountSB.addScore(player, -1)
                var itemCount = itemCountSB.getScore(player)

                if (assignedItemSBPlayer == 0) { //Gob Dog
                    player.addTag("gob_effects")
                    player.runCommand("scoreboard players set @s food_effect_timer 100")
                    player.runCommand("effect @s jump_boost 5 8")
                    player.runCommand("effect @s nausea 10 8")
                }
                else if (assignedItemSBPlayer == 1) { //Gob Fries
                    player.addTag("gob_effects")
                    player.runCommand("scoreboard players set @s food_effect_timer 100")
                    player.runCommand("effect @s speed 5 8")
                    player.runCommand("effect @s nausea 10 8")
                }
                else if (assignedItemSBPlayer == 2) { //Freedom Burger
                    player.runCommand("scoreboard players set @s food_effect_uses 3")
                }
                else if (assignedItemSBPlayer == 3) { //Hog Ramen
                    player.runCommand("scoreboard players set @s food_effect_uses 3")
                }

                if (itemCount == 0) {
                    player.sendMessage(`§e[Utility Lunchbox]§d Used ${itemNameList[assignedItemSBPlayer]}. ${itemCount} remaining.\n§cOut of items!`)
                    player.runCommand(`scoreboard players reset @s assigned_food`)
                    player.runCommand(`scoreboard players reset @s ${itemScoreboard[assignedItemSBPlayer]}`)
                } 
                else {
                    player.sendMessage(`§e[Utility Lunchbox]§d Used ${itemNameList[assignedItemSBPlayer]}. ${itemCount} remaining.`)
                }




            }
            else {
                player.sendMessage("§e[Utility Lunchbox]§c You have no item linked to the lunchbox.")
            }
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:skip_cutscene", {
        onUse(event) {
            const { itemStack, source } = event;
            source.runCommand("function start_cancel_cutscenes")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:heavenpiercer", {
        onUse(event) {
            const { itemStack, source } = event;
            const heavenP = world.scoreboard.getObjective("heavenpiercer_meter")
            const heavenPlayer = heavenP.getScore(source)
            if (heavenPlayer > 5) {

                var player = source;
                source.runCommand("execute if score @s heavenpiercer_meter matches 6.. run function heavenpiercer_triggergroundslam")
                player.applyKnockback(player.getViewDirection().x / 5, player.getViewDirection().z / 5, Math.sqrt(player.getViewDirection().x ** 2 + player.getViewDirection().z ** 2) * 1, 2)
                heavenP.setScore(source,0)
            }
            source.playAnimation("animation.player.swing")
        },
        onHitEntity(event) {
            const { itemStack, attackingEntity } = event;
            attackingEntity.runCommand("function heavenpiercerL_cmds")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:true_holic", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("function holic_refresh")
        },
        onHitEntity(event) {
            const { itemStack, attackingEntity } = event;
            attackingEntity.runCommand("function holic_attack")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:green_gobbler_cannon", {
        onHitEntity(event) {
            const { itemStack, attackingEntity, hitEntity } = event;
            hitEntity.applyKnockback(attackingEntity.getViewDirection().x, attackingEntity.getViewDirection().z, 2, -1)
            hitEntity.runCommand(`particle sm:gobbler_hit ${hitEntity.location.x} ${hitEntity.location.y + 1} ${hitEntity.location.z}`)
            hitEntity.runCommand(`effect @s nausea 10 2 true`)
            if (hitEntity.typeId == "minecraft:player") {
                hitEntity.playSound("cannon_bludgeon")
            }
            attackingEntity.playSound("cannon_bludgeon")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:crappy_dodgeball", {
        onHitEntity(event) {
            const { itemStack, attackingEntity, hitEntity } = event;
            hitEntity.applyKnockback(attackingEntity.getViewDirection().x, attackingEntity.getViewDirection().z, 10, 5)
            hitEntity.runCommand(`particle sm:you_play_too_much ${hitEntity.location.x} ${hitEntity.location.y + 1} ${hitEntity.location.z}`)
            hitEntity.runCommand(`effect @s nausea 10 2 true`)
            if (hitEntity.typeId == "minecraft:player") {
                hitEntity.playSound("cannon_bludgeon")
            }
            attackingEntity.playSound("cannon_bludgeon")
        },
        onUse(event) {
            const { itemStack, source } = event;
            var entityRC = source.getEntitiesFromViewDirection()





            entityRC.forEach((hit) => {


                var hitEntity = hit.entity

                var rayDisplacement = { x: source.location.x - hitEntity.location.x, y: source.location.y - hitEntity.location.y + .4, z: source.location.z - hitEntity.location.z }
                var totalDisplacement = Math.abs(rayDisplacement.x) + Math.abs(rayDisplacement.y) + Math.abs(rayDisplacement.z)



                hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run particle sm:you_play_too_much ~ ~1 ~`)
                hitEntity.applyKnockback(source.getViewDirection().x, source.getViewDirection().z, 10, 5)
                source.runCommand("/clear @s sm:crappy_dodgeball 0 1")
            })
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:kusarigama", {
        onHitEntity(event) {
            const { itemStack, attackingEntity, hitEntity } = event;
            var yDisplacement = attackingEntity.location.y - hitEntity.location.y

            hitEntity.applyKnockback(attackingEntity.getViewDirection().x, attackingEntity.getViewDirection().z, -2, Math.min(Math.max(yDisplacement, -1), 1))
            hitEntity.runCommand(`particle sm:gobbler_hit ${hitEntity.location.x} ${hitEntity.location.y + 1} ${hitEntity.location.z}`)
            if (hitEntity.typeId == "minecraft:player") {
                hitEntity.playSound("cannon_bludgeon")
            }

            attackingEntity.playSound("cannon_bludgeon")
        },
        onUse(event) {
            var entityRay = false
            const dimension = world.getDimension("overworld")

            const { itemStack, source } = event;

            var rayLocation = [{ x: source.location.x, y: source.location.y + 1.5, z: source.location.z }]
            
            var lookDir = { x: source.getViewDirection().x, y: source.getViewDirection().y, z: source.getViewDirection().z }
            var entityRC = [];
            for(var i = 0; i < 5; i++){
                var lookDirRefined = { x: source.getViewDirection().x, y: source.getViewDirection().y + i/5, z: source.getViewDirection().z }
                var spawnPos = {x:(source.getViewDirection().x + source.location.x), y:source.getViewDirection().y + source.location.y + 1, z:source.getViewDirection().z + source.location.z}
                var tempRay = entityRC.push(world.getDimension("overworld").getEntitiesFromRay(spawnPos,lookDirRefined))
                if(tempRay != undefined){
                    entityRC.push(tempRay)
                }

            }

            RaySpreadData(source)
            // var blockRC = source.dimension.getBlockFromRay(rayLocation, lookDir, { includeLiquidBlocks: false, includePassableBlocks: false, maxDistance: 25 })

            // const rotation = source.getRotation();
            // source.sendMessage(`${lookDir.x} ${lookDir.y} ${lookDir.z}`)


            // var particleType = "sm:striker_sparkle"

            // //for(var j = 0; j < entityRC.length; j++){
            //     hits.forEach((hit) => {

            //     source.setProperty("sm:deepstriker_anim", 1)

            //     var hitEntity = hit.entity

            //     var rayDisplacement = { x: source.location.x - hitEntity.location.x, y: source.location.y - hitEntity.location.y + .4, z: source.location.z - hitEntity.location.z }
            //     var totalDisplacement = Math.abs(rayDisplacement.x) + Math.abs(rayDisplacement.y) + Math.abs(rayDisplacement.z)
            //     var loopTimes = 50
            //     for (let i = 1; i < loopTimes; i = i + .25) {
            //         var particleLocation = {
            //             x: hitEntity.location.x + (rayDisplacement.x / i),
            //             y: hitEntity.location.y + (rayDisplacement.y / i) + 1,
            //             z: hitEntity.location.z + (rayDisplacement.z / i)
            //         }
            //         source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

            //         if (i >= loopTimes) {
            //             break;
            //         }
            //     }
            //     // hitEntity.applyKnockback(source.getViewDirection().x, source.getViewDirection().z, 0, 2)
            //     // hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /function explosion_deepstriker`)
            //     // hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /summon sm:explosion_deepstriker`)
            //     source.runCommand(`playsound deep_striker @a ~ ~ ~`)
            //     entityRay = true
            // })
            //}


            // if (blockRC != undefined) {
            //     source.setProperty("sm:deepstriker_anim", 1)
            //     var rayDisplacementBlock = { x: source.location.x - blockRC.block.location.x, y: source.location.y - blockRC.block.location.y + .4, z: source.location.z - blockRC.block.location.z }

            //     source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run tp @e[r=3] ${source.location.x} ${source.location.y} ${source.location.z}`)
                

            //     var totalDisplacement = Math.abs(rayDisplacementBlock.x) + Math.abs(rayDisplacementBlock.y) + Math.abs(rayDisplacementBlock.z)

            //     var loopTimes = 50

            //     for (let i = 1; i < loopTimes; i = i + .25) {
            //         var particleLocation = {
            //             x: blockRC.block.location.x + (rayDisplacementBlock.x / i),
            //             y: blockRC.block.location.y + (rayDisplacementBlock.y / i) + 0.5,
            //             z: blockRC.block.location.z + (rayDisplacementBlock.z / i)
            //         }

            //         source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

            //         if (i >= loopTimes) {
            //             break;
            //         }
            //     }
            // }

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:repulsion_blade", {
        //onUse(event) {
        //    const { itemStack, source } = event;
        //    world.sendMessage("test")
        //    source.runCommand("execute if score @s heavenpiercer_meter matches 6.. run function heavenpiercer_triggergroundslam")
        //},
        //onHitEntity(event) {
        //    const { itemStack, attackingEntity } = event;
        //    attackingEntity.runCommand("function heavenpiercerL_cmds")
        //}
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:parry_fist", {
        onUse(event) {
            const { itemStack, source } = event;
            if (source.hasTag("parry_capable")) {
    
                const dimension = world.getDimension("overworld")
                const viewDir = source.getViewDirection()
                const vulcanBlast = source.dimension.spawnEntity("minecraft:egg<sm:add_normal>", source.getHeadLocation());
                const projectile = vulcanBlast.getComponent("projectile");
                projectile.owner = source;
                const power = 2
                const powerV0 = {
                    x: source.getViewDirection().x * power,
                    y: source.getViewDirection().y * power,
                    z: source.getViewDirection().z * power
                }
                projectile.shoot(powerV0)
                source.runCommand("function parry_fist_new")
            }

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:destruction_unit", {
        onMineBlock(event) {
            const { itemStack, source, block } = event;
            var offsetX = 1
            var offsetY = 0
            var offsetZ = 0
            var locationBlock = `${block.location.x + offsetX} ${block.location.y + offsetY} ${block.location.z + offsetZ}`
            source.runCommand(`execute positioned ${locationBlock} run /execute unless block ~ ~ ~ sm:arenaborder unless block ~ ~ ~ bedrock unless block ~ ~ ~ sm:ceiling_bedrock unless block ~ ~ ~ sm:arenaborder_4 run setblock ~ ~ ~ air destroy`)
            var offsetX = 0
            var offsetY = 1
            var offsetZ = 0
            var locationBlock = `${block.location.x + offsetX} ${block.location.y + offsetY} ${block.location.z + offsetZ}`
            source.runCommand(`execute positioned ${locationBlock} run /execute unless block ~ ~ ~ sm:arenaborder unless block ~ ~ ~ bedrock unless block ~ ~ ~ sm:ceiling_bedrock unless block ~ ~ ~ sm:arenaborder_4 run setblock ~ ~ ~ air destroy`)
            var offsetX = 0
            var offsetY = 0
            var offsetZ = 1
            var locationBlock = `${block.location.x + offsetX} ${block.location.y + offsetY} ${block.location.z + offsetZ}`
            source.runCommand(`execute positioned ${locationBlock} run /execute unless block ~ ~ ~ sm:arenaborder unless block ~ ~ ~ bedrock unless block ~ ~ ~ sm:ceiling_bedrock unless block ~ ~ ~ sm:arenaborder_4 run setblock ~ ~ ~ air destroy`)
            var offsetX = -1
            var offsetY = 0
            var offsetZ = 0
            var locationBlock = `${block.location.x + offsetX} ${block.location.y + offsetY} ${block.location.z + offsetZ}`
            source.runCommand(`execute positioned ${locationBlock} run /execute unless block ~ ~ ~ sm:arenaborder unless block ~ ~ ~ bedrock unless block ~ ~ ~ sm:ceiling_bedrock unless block ~ ~ ~ sm:arenaborder_4 run setblock ~ ~ ~ air destroy`)
            var offsetX = 0
            var offsetY = -1
            var offsetZ = 0
            var locationBlock = `${block.location.x + offsetX} ${block.location.y + offsetY} ${block.location.z + offsetZ}`
            source.runCommand(`execute positioned ${locationBlock} run /execute unless block ~ ~ ~ sm:arenaborder unless block ~ ~ ~ bedrock unless block ~ ~ ~ sm:ceiling_bedrock unless block ~ ~ ~ sm:arenaborder_4 run setblock ~ ~ ~ air destroy`)
            var offsetX = 0
            var offsetY = 0
            var offsetZ = -1
            var locationBlock = `${block.location.x + offsetX} ${block.location.y + offsetY} ${block.location.z + offsetZ}`
            source.runCommand(`execute positioned ${locationBlock} run /execute unless block ~ ~ ~ sm:arenaborder unless block ~ ~ ~ bedrock unless block ~ ~ ~ sm:ceiling_bedrock unless block ~ ~ ~ sm:arenaborder_4 run setblock ~ ~ ~ air destroy`)


        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:implosion_grenade", {
        onUse(event) {
            const { itemStack, source } = event;

                const dimension = world.getDimension("overworld")
                const viewDir = source.getViewDirection()
            const vulcanBlast = source.dimension.spawnEntity("minecraft:egg<sm:add_normal>", source.getHeadLocation());
            if (source.hasTag("team_nu")) {
                vulcanBlast.addTag("team_nu")
            }
            else if (source.hasTag("team_lambda")) {
                vulcanBlast.addTag("team_lambda")
            }
                vulcanBlast.addTag("implosion")
                const projectile = vulcanBlast.getComponent("projectile");
                projectile.owner = source;
                const power = 1
                const powerV0 = {
                    x: source.getViewDirection().x * power,
                    y: source.getViewDirection().y * power,
                    z: source.getViewDirection().z * power
                }
                projectile.shoot(powerV0)
                source.runCommand("function parry_fist_new")

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:charged_bolt_rifle", {
        onUse(event) {
            const { itemStack, source } = event;

            source.runCommand("function summon_laser")
            source.runCommand("function vulcan_extendedcmds")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:baby_stick", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("function baby_storm")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:big_joe", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("function summon_joe")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:gob_goo_cannon", {
        onUse(event) {
            const { itemStack, source } = event;

            const dimension = world.getDimension("overworld")
            const viewDir = source.getViewDirection() 
            const vulcanBlast = source.dimension.spawnEntity("minecraft:snowball<gob_goo>", source.getHeadLocation());
            const projectile = vulcanBlast.getComponent("projectile");
            projectile.owner = source;
            const power = 1
            const power2 = 2
            const powerV3 = {
                x: source.getViewDirection().x * power2,
                y: source.getViewDirection().y * power2,
                z: source.getViewDirection().z * power2
            }
            const powerV4 = {
                x: source.getViewDirection().x * power,
                y: source.getViewDirection().y * power,
                z: source.getViewDirection().z * power
            }
            projectile.shoot(powerV4)
            //
            const projectilePos2 = {
                x: source.getHeadLocation().x,
                y: source.getHeadLocation().y + 1,
                z: source.getHeadLocation().z
            }
            const vulcanBlast2 = source.dimension.spawnEntity("minecraft:snowball<gob_goo>", projectilePos2);
            const projectile2 = vulcanBlast2.getComponent("projectile");
            projectile2.owner = source;
            projectile2.shoot(powerV4)
            //
            const projectilePos3 = {
                x: source.getHeadLocation().x,
                y: source.getHeadLocation().y + 0.5,
                z: source.getHeadLocation().z
            }
            const vulcanBlast3 = source.dimension.spawnEntity("minecraft:snowball<gob_goo>", projectilePos3);
            const projectile3 = vulcanBlast3.getComponent("projectile");
            projectile3.owner = source;
            projectile3.shoot(powerV3)
            //
            source.runCommand("function gob_effects")
        }
    });

    initEvent.itemComponentRegistry.registerCustomComponent("sm:salmon_bomb", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            const dimension = world.getDimension("overworld")
            const viewDir = source.getViewDirection()
            const vulcanBlast = source.dimension.spawnEntity("minecraft:salmon", source.getHeadLocation());
            const projectile = vulcanBlast.getComponent("projectile");
            projectile.owner = source;
            const power = 1
            const powerV3 = {
                x: source.getViewDirection().x * power,
                y: source.getViewDirection().y * power,
                z: source.getViewDirection().z * power
            }
            projectile.shoot(powerV3)
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:sc_quant-e", {
        onUse(event) {
            const { itemStack, source } = event;

            source.runCommand("function neutron_bomb")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:landminelambda", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("summon sm:landmine_ver_lambda")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:teamless_landmine", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("summon sm:teamless_landmine")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:landminenu", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("summon sm:landmine_ver_nu")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:rlambda", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("function explode_lambda_landmines")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:rnu", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("function explode_nu_landmines")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:antigrav", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("function antigrav_prism")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:emp_drive", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("execute positioned ~ ~1 ~ run function emp")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:heirloom", {
        onUse(event) {
            const { itemStack, source } = event;
            let spawnLocation = {x:source.location.x,y:source.location.y+1.5,z:source.location.z}
            source.playAnimation("animation.player.swing")
            source.spawnParticle("sm:heirloom_shards",spawnLocation)
            source.runCommand("clear @s sm:heirloom 0 1")
            source.runCommand("playsound random.glass @a ~ ~ ~")
            let nearestPlayer = world.getDimension("Overworld").getPlayers({closest:true,maxDistance:3,location:source.location,excludeNames:[source.name]})
            nearestPlayer.forEach(tgtPlayer =>{
                let item = tgtPlayer.getComponent("equippable").getEquipment(EquipmentSlot.Mainhand);
                if(item){
                    tgtPlayer.runCommand(`clear @s ${item.typeId} 0 1`)
                    source.runCommand(`replaceitem entity @s slot.weapon.mainhand 0 ${item.typeId} 1 0 { "minecraft:item_lock": { "mode": "lock_in_inventory" } }`)
                    world.sendMessage(item.typeId.toString())
                }
                tgtPlayer.runCommand("summon sm:heirloom_effect")
            })

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:platform_fabricator", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("function spawn_platform")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:scaler_bomb", {
        onUse(event) {
            const { itemStack, source } = event;
            source.playAnimation("animation.player.swing")
            source.runCommand("execute positioned ~ ~1 ~ run summon sm:scaler_bomb ^ ^ ^1 ")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:blushing_bloomfan", {
        onUse(event) {
            const { itemStack, source } = event;
            var entityRay = false
            const dimension = world.getDimension("overworld")



            var rayLocation = {x: source.location.x, y: source.location.y + 1.5, z: source.location.z}
            var lookDir = {x: source.getViewDirection().x, y: source.getViewDirection().y , z: source.getViewDirection().z }
            var blockRC = source.dimension.getBlockFromRay(rayLocation, lookDir, { includeLiquidBlocks: false, includePassableBlocks: false })

            if (blockRC.block.typeId != "sm:arenaborder" && blockRC.block.typeId != "minecraft:bedrock" && blockRC.block.typeId != "sm:arenaborder_4" && blockRC.block.typeId != "sm:arenaborder_5") {
                var rayDisplacementBlock = { x: source.location.x - blockRC.block.location.x, y: source.location.y - blockRC.block.location.y + .4, z: source.location.z - blockRC.block.location.z }

                let spawnPos = {x: blockRC.block.location.x,y: blockRC.block.location.y+1,z: blockRC.block.location.z}
                PlayWeaponSounds("blossom_fan","blossom_fan_global",source,1,1)
                // source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /function explosion_deepstriker`)
                // source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /summon sm:explosion_deepstriker`)
                source.spawnParticle("sm:petal_ring",spawnPos)
                source.spawnParticle("sm:petal_warning",spawnPos)
                source.spawnParticle("sm:heart_burst",spawnPos)
                source.dimension.spawnEntity("sm:petal_emitter",spawnPos)
                let particleType = "sm:heart"
                var loopTimes = 50

                for (let i = 1; i < loopTimes; i = i + .25) {
                    var particleLocation = {
                        x: blockRC.block.location.x + (rayDisplacementBlock.x / i),
                        y: blockRC.block.location.y + (rayDisplacementBlock.y / i) + 1,
                        z: blockRC.block.location.z + (rayDisplacementBlock.z / i)
                    }

                    source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                    if (i >= loopTimes) {
                        break;
                    }
                }
            }
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:deep_striker", {
        onUse(event) {
            var entityRay = false
            const dimension = world.getDimension("overworld")

            const { itemStack, source } = event;

            //world.sendMessage("Deepstriker animation active: " + source.getProperty("sm:deepstriker_anim").toString())
            //world.sendMessage("Deepstriker shooting self active: " + source.getProperty("sm:deepstriker_shooting_self").toString())
            var rayLocation = {x: source.location.x, y: source.location.y + 1.5, z: source.location.z}
            var lookDir = {x: source.getViewDirection().x, y: source.getViewDirection().y , z: source.getViewDirection().z }
            var blockRC = source.dimension.getBlockFromRay(rayLocation, lookDir, { includeLiquidBlocks: false, includePassableBlocks: false })
            var entityRC = source.getEntitiesFromViewDirection()

            
            

            var particleType = "sm:striker_sparkle"

            entityRC.forEach((hit) => {

                source.setProperty("sm:deepstriker_anim", 1)

                var hitEntity = hit.entity

                var rayDisplacement = { x: source.location.x - hitEntity.location.x, y: source.location.y - hitEntity.location.y + .4, z: source.location.z - hitEntity.location.z }
                var totalDisplacement = Math.abs(rayDisplacement.x) + Math.abs(rayDisplacement.y) + Math.abs(rayDisplacement.z)
                var loopTimes = 50
                for (let i = 1; i < loopTimes; i = i + .25) {
                    var particleLocation = {
                        x: hitEntity.location.x + (rayDisplacement.x / i),
                        y: hitEntity.location.y + (rayDisplacement.y / i) + 1,
                        z: hitEntity.location.z + (rayDisplacement.z / i)
                    }
                    source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                    if (i >= loopTimes) {
                        break;
                    }
                }
                hitEntity.applyKnockback(source.getViewDirection().x, source.getViewDirection().z, 0, 2)
                hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /function explosion_deepstriker`)
                hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /summon sm:explosion_deepstriker`)
                source.runCommand(`playsound deep_striker @a ~ ~ ~`)
                entityRay = true
            })

            if (entityRay) {
                
            }
            else if (blockRC.block.typeId != "sm:arenaborder" && blockRC.block.typeId != "minecraft:bedrock" && blockRC.block.typeId != "sm:arenaborder_4" && blockRC.block.typeId != "sm:arenaborder_5") {
                source.setProperty("sm:deepstriker_anim", 1)
                var rayDisplacementBlock = { x: source.location.x - blockRC.block.location.x, y: source.location.y - blockRC.block.location.y + .4, z: source.location.z - blockRC.block.location.z }


                source.runCommand(`playsound deep_striker @a ~ ~ ~`)
                source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /function explosion_deepstriker`)
                source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /summon sm:explosion_deepstriker`)
                
                var totalDisplacement = Math.abs(rayDisplacementBlock.x) + Math.abs(rayDisplacementBlock.y) + Math.abs(rayDisplacementBlock.z)

                var loopTimes = 50

                for (let i = 1; i < loopTimes; i = i + .25) {
                    var particleLocation = {
                        x: blockRC.block.location.x + (rayDisplacementBlock.x / i),
                        y: blockRC.block.location.y + (rayDisplacementBlock.y / i) + 0.5,
                        z: blockRC.block.location.z + (rayDisplacementBlock.z / i)
                    }

                    source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                    if (i >= loopTimes) {
                        break;
                    }
                }
            }
            else {
                source.setProperty("sm:deepstriker_anim", 1)
                var deepTimer = world.scoreboard.getObjective("deepstriker_timer")
                var deepTimerP = deepTimer.getScore(source)
                deepTimer.setScore(source,12)
            }

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:mb85_crimson_hws", {
        onUse(event) {
            var entityRay = false
            const dimension = world.getDimension("overworld")

            const { itemStack, source } = event;

            var missileCountSB = world.scoreboard.getObjective("missile_fires")
            var missileCountPlayer = missileCountSB.getScore(source)

            var rayLocation = { x: source.location.x, y: source.location.y + 1.5, z: source.location.z }
            var lookDir = { x: source.getViewDirection().x, y: source.getViewDirection().y, z: source.getViewDirection().z }
            var blockRC = source.dimension.getBlockFromRay(rayLocation, lookDir, { includeLiquidBlocks: false, includePassableBlocks: false })
            var entityRC = source.getEntitiesFromViewDirection()




            var particleType = "sm:crimson_hexa"
            var particleWarningType = "sm:big_joe_warning"

            entityRC.forEach((hit) => {

                source.setProperty("sm:deepstriker_anim", 1)

                var hitEntity = hit.entity

                var rayDisplacement = { x: source.location.x - hitEntity.location.x, y: source.location.y - hitEntity.location.y + .4, z: source.location.z - hitEntity.location.z }
                var totalDisplacement = Math.abs(rayDisplacement.x) + Math.abs(rayDisplacement.y) + Math.abs(rayDisplacement.z)
                var loopTimes = 50
                for (let i = 1; i < loopTimes; i = i + .25) {
                    var particleLocation = {
                        x: hitEntity.location.x + (rayDisplacement.x / i),
                        y: hitEntity.location.y + (rayDisplacement.y / i) + 1,
                        z: hitEntity.location.z + (rayDisplacement.z / i)
                    }
                    source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                    if (i >= loopTimes) {
                        break;
                    }
                }

                

                hitEntity.applyKnockback(source.getViewDirection().x, source.getViewDirection().z, 4, 1)
                hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /function explosion_crimson_weak`)
                hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /summon sm:explosion_crimson`)
                entityRay = true
            })

            if (entityRay) {

            }
            else {
                source.setProperty("sm:deepstriker_anim", 1)
                var rayDisplacementBlock = { x: source.location.x - blockRC.block.location.x, y: source.location.y - blockRC.block.location.y + .4, z: source.location.z - blockRC.block.location.z }

                



                if (missileCountPlayer < 5) {
                    missileCountSB.addScore(source, 1)
                    source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /function explosion_crimson_weak`)
                    source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /summon sm:explosion_crimson`)
                    var totalDisplacement = Math.abs(rayDisplacementBlock.x) + Math.abs(rayDisplacementBlock.y) + Math.abs(rayDisplacementBlock.z)

                    var loopTimes = 50

                    for (let i = 1; i < loopTimes; i = i + .25) {
                        var particleLocation = {
                            x: blockRC.block.location.x + (rayDisplacementBlock.x / i),
                            y: blockRC.block.location.y + (rayDisplacementBlock.y / i) + 0.5,
                            z: blockRC.block.location.z + (rayDisplacementBlock.z / i)
                        }

                        source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                        if (i >= loopTimes) {
                            break;
                        }
                    }
                }
                else {
                    source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y + 2} ${blockRC.block.location.z} run function explosion_crimson`)
                    missileCountSB.setScore(source, 0)
                }
                
                source.runCommand("function mb85_cmds")

            }

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:mb85_greatsword", {
        onUse(event) {
            const { itemStack, source } = event;

            // source.runCommand("particle sm:parry ~ ~3 ~")
            // let mb85ParryTimer = world.scoreboard.getObjective("mb85_parry_timer")
            // let mb85Player = mb85ParryTimer.getScore(source)

            // mb85ParryTimer.setScore(source,40)

                        var entityRay = false
            const dimension = world.getDimension("overworld")



            var missileCountSB = world.scoreboard.getObjective("missile_fires")
            var missileCountPlayer = missileCountSB.getScore(source)

            var rayLocation = { x: source.location.x, y: source.location.y + 1.5, z: source.location.z }
            var lookDir = { x: source.getViewDirection().x, y: source.getViewDirection().y, z: source.getViewDirection().z }
            var blockRC = source.dimension.getBlockFromRay(rayLocation, lookDir, { includeLiquidBlocks: false, includePassableBlocks: false })
            var entityRC = source.getEntitiesFromViewDirection()




            var particleType = "sm:crimson_hexa"
            var particleWarningType = "sm:big_joe_warning"

            entityRC.forEach((hit) => {

                source.setProperty("sm:deepstriker_anim", 1)

                var hitEntity = hit.entity

                var rayDisplacement = { x: source.location.x - hitEntity.location.x, y: source.location.y - hitEntity.location.y + .4, z: source.location.z - hitEntity.location.z }
                var totalDisplacement = Math.abs(rayDisplacement.x) + Math.abs(rayDisplacement.y) + Math.abs(rayDisplacement.z)
                var loopTimes = 50
                for (let i = 1; i < loopTimes; i = i + .25) {
                    var particleLocation = {
                        x: hitEntity.location.x + (rayDisplacement.x / i),
                        y: hitEntity.location.y + (rayDisplacement.y / i) + 1,
                        z: hitEntity.location.z + (rayDisplacement.z / i)
                    }
                    source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                    if (i >= loopTimes) {
                        break;
                    }
                }

                

                hitEntity.applyKnockback(source.getViewDirection().x, source.getViewDirection().z, 4, 1)
                hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /function explosion_crimson_weak`)
                hitEntity.runCommand(`execute positioned ${hitEntity.location.x} ${hitEntity.location.y} ${hitEntity.location.z} run /summon sm:explosion_crimson`)
                entityRay = true
            })

            if (entityRay) {

            }
            else {
                source.setProperty("sm:deepstriker_anim", 1)
                var rayDisplacementBlock = { x: source.location.x - blockRC.block.location.x, y: source.location.y - blockRC.block.location.y + .4, z: source.location.z - blockRC.block.location.z }

                




                    missileCountSB.addScore(source, 1)
                    source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /function explosion_crimson_weak`)
                    source.runCommand(`execute positioned ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z} run /summon sm:explosion_crimson_laser`)
                    var totalDisplacement = Math.abs(rayDisplacementBlock.x) + Math.abs(rayDisplacementBlock.y) + Math.abs(rayDisplacementBlock.z)

                    var loopTimes = 50

                    for (let i = 1; i < loopTimes; i = i + .25) {
                        var particleLocation = {
                            x: blockRC.block.location.x + (rayDisplacementBlock.x / i),
                            y: blockRC.block.location.y + (rayDisplacementBlock.y / i) + 0.5,
                            z: blockRC.block.location.z + (rayDisplacementBlock.z / i)
                        }

                        source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                        if (i >= loopTimes) {
                            break;
                        }
                    }


                
                //source.runCommand("function mb85_cmds")

            }
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:archerfish", {
        onUse(event) {
            const { itemStack, source } = event;

            const dimension = world.getDimension("overworld")
            const viewDir = source.getViewDirection()
            const vulcanBlast = source.dimension.spawnEntity("minecraft:egg", source.getHeadLocation());
            const projectile = vulcanBlast.getComponent("projectile");
            projectile.owner = source;
            const power = 1
            const powerV3 = {
                x: source.getViewDirection().x * power,
                y: source.getViewDirection().y * power,
                z: source.getViewDirection().z * power
            }
            projectile.shoot(powerV3)
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:daedalus", {
        onUse(event) {
            const { itemStack, source } = event;
            const cooldownScore = world.scoreboard.getObjective("icarus_is_inactive")
            const cooldownScorePlayer = cooldownScore.getScore(source)

            if (cooldownScorePlayer != 1) {
                const dimension = world.getDimension("overworld")
                const viewDir = source.getViewDirection()
                const vulcanBlast = source.dimension.spawnEntity("minecraft:egg", source.getHeadLocation());
                const projectile = vulcanBlast.getComponent("projectile");
                projectile.owner = source;
                const power = 1
                const powerV3 = {
                    x: source.getViewDirection().x * power,
                    y: source.getViewDirection().y * power,
                    z: source.getViewDirection().z * power
                }
                projectile.shoot(powerV3)
                source.runCommand("function icarus_cmds")
            }


            

        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:selectLoadout", {
        onUse(event) {
            const { itemStack, source } = event;
            world.sendMessage(itemStack.getTags() + "")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:smorgler", {
        onUse(event) {
            const { itemStack, source } = event;

            const dimension = world.getDimension("overworld")
            const viewDir = source.getViewDirection()
            const vulcanBlast = source.dimension.spawnEntity("sm:smorgler_blast", source.getHeadLocation());
            const projectile = vulcanBlast.getComponent("projectile");
            projectile.owner = source;
            const power = 1
            const powerV3 = {
                x: source.getViewDirection().x * power,
                y: source.getViewDirection().y * power,
                z: source.getViewDirection().z * power
            }
            projectile.shoot(powerV3)
            source.runCommand("function gob_effects")
        }
    });
});

function loadoutSelectUI(source, selectedLoadoutSlot, buttonNames) {
    selectedLoadoutSlot += 1
    let form = new MessageFormData();
    var loadoutNumber = "function select_loadout_" + selectedLoadoutSlot.toString()
    var itemSlots = new Array("", "")
    const loadout1SBStr = "loadout1_slot_"
    const loadout2SBStr = "loadout2_slot_"
    const loadout3SBStr = "loadout3_slot_"
    for (var i = 1; i < 10; i++) {
        switch (selectedLoadoutSlot) {
            case 1:
                var currentSlot = loadout1SBStr + i.toString()

                break;
            case 2:
                var currentSlot = loadout2SBStr + i.toString()
                break;
            case 3:
                var currentSlot = loadout3SBStr + i.toString()
                break;
        }
        var loadoutSB = world.scoreboard.getObjective(currentSlot)
        var loadoutSBPlayer = loadoutSB.getScore(source)
        itemSlots[i - 1] = `§eSlot ${i}:§r ` + ingameWeaponNames[loadoutSBPlayer]
    }
    var itemList = `Slot ${selectedLoadoutSlot}: ${buttonNames[selectedLoadoutSlot - 1]}\n`
    itemSlots.forEach(string => {
        if (string != undefined) {
            itemList = `${itemList}\n${string}\n`
        }
        else {
            itemList = `${itemList}\n"§cUnsupported Item§r"`
        }
    })
    form.title(`Slot ${selectedLoadoutSlot}: ${buttonNames[selectedLoadoutSlot - 1]}§r`);
    form.body(itemList);
    form.button1("Cancel");
    form.button2("Select");
    form.show(source).then(r => {
        var response = r.selection
        if (response == 1) {
            source.runCommand(loadoutNumber)
            source.sendMessage(`§e[Loadouts] §aSelected slot ${selectedLoadoutSlot}.`)
        }
        else {
            
        }
    })

}







function LoadoutDecide(player) {

    var nickNameSB1 = world.scoreboard.getObjective("loadout1Nick")
    var nickNameSB2 = world.scoreboard.getObjective("loadout2Nick")
    var nickNameSB3 = world.scoreboard.getObjective("loadout3Nick")
    var playerNickName1 = nickNameSB1.getScore(player)
    var playerNickName2 = nickNameSB2.getScore(player)
    var playerNickName3 = nickNameSB3.getScore(player)
    var iconSB1 = world.scoreboard.getObjective("loadout1Icon")
    var iconSB2 = world.scoreboard.getObjective("loadout2Icon")
    var iconSB3 = world.scoreboard.getObjective("loadout3Icon")
    var playerIcon1 = iconSB1.getScore(player)
    var playerIcon2 = iconSB2.getScore(player)
    var playerIcon3 = iconSB3.getScore(player)

    var loadoutTypes = new Array(playerIcon1, playerIcon2, playerIcon3)
    var loadoutNamesInit = loadoutNames
    loadoutNamesInit[0] = "Custom"

    const mainTitle = "Select Loadout"
    const mainDesc = "Select an option:\n\n"

    const buttonNames = new Array(loadoutNamesInit[playerNickName1], loadoutNamesInit[playerNickName2], loadoutNamesInit[playerNickName3])
    const buttonIconLoc = new Array(loadoutTypeIDLocs[loadoutTypes[0]], loadoutTypeIDLocs[loadoutTypes[1]], loadoutTypeIDLocs[loadoutTypes[2]])

    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    form.button("Slot 1: " + buttonNames[0], buttonIconLoc[0])
    form.button("Slot 2: " + buttonNames[1], buttonIconLoc[1])
    form.button("Slot 3: " + buttonNames[2], buttonIconLoc[2])
    form.button("Cancel", "textures/ui/button_close");

    form.show(player).then(r => {

        let responseValue = r.selection

        if (responseValue == 0) {
            
            loadoutSelectUI(player, responseValue, buttonNames)
        }
        if (responseValue == 1) {
            
            loadoutSelectUI(player, responseValue, buttonNames)
        }
        if (responseValue == 2) {
            loadoutSelectUI(player, responseValue, buttonNames)
        }

    })
}

//grabbed via chatgpt, I was completely lost on how to do this - I have a better understanding now but I need to go back and renew my knowledge of trigonometry and calculus
function GetRightAndUpVectors(forward) {
  // Get the right vector as cross product of forward and up (world up = Y+)
  const worldUp = { x: 0, y: 1, z: 0 };

  let right = {
    x: forward.y * worldUp.z - forward.z * worldUp.y,
    y: forward.z * worldUp.x - forward.x * worldUp.z,
    z: forward.x * worldUp.y - forward.y * worldUp.x,
  };

  // Normalize right
  let len = Math.sqrt(right.x ** 2 + right.y ** 2 + right.z ** 2);
  right = { x: right.x / len, y: right.y / len, z: right.z / len };

  // Up vector is perpendicular to both forward and right
  const up = {
    x: right.y * forward.z - right.z * forward.y,
    y: right.z * forward.x - right.x * forward.z,
    z: right.x * forward.y - right.y * forward.x,
  };

  return { right, up };
}

function Build3DSpreadDirections(forward, spreadAngleDeg, countX, countY) {
    const { right, up } = GetRightAndUpVectors(forward);
    const spread = [];

    const angleRad = (spreadAngleDeg * Math.PI) / 180;
    const halfX = Math.floor(countX / 2);
    const halfY = Math.floor(countY / 2);

    for (let i = -halfX; i <= halfX; i++) {
        for (let j = -halfY; j <= halfY; j++) {
            const offsetX = i * (angleRad / countX);
            const offsetY = j * (angleRad / countY);

            const dir = {
                x: forward.x + right.x * Math.sin(offsetX) + up.x * Math.sin(offsetY),
                y: forward.y + right.y * Math.sin(offsetX) + up.y * Math.sin(offsetY),
                z: forward.z + right.z * Math.sin(offsetX) + up.z * Math.sin(offsetY),
            };

            const mag = Math.sqrt(dir.x ** 2 + dir.y ** 2 + dir.z ** 2);
            spread.push({
                x: dir.x / mag,
                y: dir.y / mag,
                z: dir.z / mag,
            });
        }
    }

    return spread;
}

//wrote this part myself, I don't use it now lol
// function RaySpreadDataTest(source){
//     var baseLookDir = source.getViewDirection()
//     var forward = source.getViewDirection();
//     var output = [];
//     var spreads = [];
//     var spreadOptions = []
//     for(let h = -0.5; h < 1; h+=0.5){
//         spreadOptions.push(h)
//     }

//     for(let i = 0; i < spreadOptions.length; i++){

//             for(let k = 0; k < spreadOptions.length; k++){
//                 // spreads.push({x:spreadOptions[i],y:spreadOptions[j],z:spreadOptions[k]})
//                 let lookDirectionRefinedMkII = {
//                     x:source.location.x * spreadOptions[i],
//                     y:source.location.y + 1.5,
//                     z:source.location.z * spreadOptions[k]
//                 }
//                 let spawnPos = {x:(source.getViewDirection().x + source.location.x), y:source.getViewDirection().y + source.location.y + 1, z:source.getViewDirection().z + source.location.z}
//                 let ray = world.getDimension("overworld").getEntitiesFromRay(spawnPos,lookDirectionRefinedMkII)
//                 if(ray != undefined){
//                     output = ray;
//                     return output;
//                 }
//                 world.sendMessage(world.getDimension("overworld").getEntitiesFromRay(spawnPos,lookDirectionRefinedMkII).toString())
//                 //world.sendMessage(`${spreadOptions[i]} ${spreadOptions[j]} ${spreadOptions[k]}`)
//             }


//     }
// }

//modified from chatgpt
function RaySpreadData(source) {
    var finished = false;
    const forward = source.getViewDirection();  //the direction the player is looking in relative on each axis from -1 to 1 (ex: 1,0.5,-0.6)
    const origin = source.getHeadLocation();  //head coordinates (x,y,z)  
    const spreadDirs = Build3DSpreadDirections(forward, 30, 5, 5); //parameters: the direction the player is looking in, angle of spread to create the spread at, number of horizontal rays, number of vertical rays
    const dimension = world.getDimension("overworld"); //gets what dimension to run all of this in (always overworld since I don't use the nether or end)

    for (const dir of spreadDirs) { //for each direction in the spread of directions
        const hits = dimension.getEntitiesFromRay(origin, dir, { maxDistance: 20 }); //get all entities from each raycast that hits something within a distance of 20 blocks

        for (const hit of hits) { //for each entity hit within each ray
            if (hit.entity.id === source.id) continue; //if the player is hit in the ray who fired the ray, ignore and continue until the loop is no longer targeting them
            
            const entity = hit.entity; // just doing this so I don't have to type hit.entity over and over
            let spawnCoords = {x:entity.location.x,y:entity.location.y+1,z:entity.location.z} //spawn all visual effects one block above the feet of the targeted entity
            dimension.spawnEntity("sm:chain_effect",spawnCoords) //spawn the chain visual effect that spawns on the entity that is hit by the chain attack
            //world.sendMessage(`Hit: ${entity.nameTag ?? entity.typeId}`);
            let hitEntity = hit.entity //redundancy of entity
            let particleType = "sm:chain" //no longer used, saved just in case I need it
            let loopTimes = 25 //how many times the chain spawns between the user and the targeted entity (spaghetti code but if it ain't broke don't fix it)
            PullPlayerToSpot(hitEntity,source.location) //pull targeted entity to the user's location
            let rayDisplacement = { x: source.location.x - hitEntity.location.x, y: source.location.y - hitEntity.location.y + .4, z: source.location.z - hitEntity.location.z }
            let totalDisplacement = Math.abs(rayDisplacement.x) + Math.abs(rayDisplacement.y) + Math.abs(rayDisplacement.z)
            for (let i = 1; i < loopTimes; i = i + .25) {
                var particleLocation = {
                    x: hitEntity.location.x + (rayDisplacement.x / i),
                    y: hitEntity.location.y + (rayDisplacement.y / i) + 1,
                    z: hitEntity.location.z + (rayDisplacement.z / i)
                }
               source.runCommand(`summon sm:chain ${particleLocation.x} ${particleLocation.y} ${particleLocation.z} facing ${source.location.x} ${source.location.y} ${source.location.z}`)

                 if (i >= loopTimes) {
                     break;
                }
            }
            finished = true;
            break; // only first hit per ray
        }
        if(finished){
            break;
        }
    }
}

function PullPlayerToSpot(player,destination){

    let displacement = {
        x:destination.x-player.location.x,
        y:destination.y-player.location.y,
        z:destination.z-player.location.z
    }

    player.addTag("pulling")


    let verticalStrength;


    if(displacement.y > 3){
        verticalStrength = 1;
    }
    else if(displacement.y > 0){
        verticalStrength = 0.8;
    }
    else if(displacement.y > -3){
        verticalStrength = -0.8
    }
    else{
        verticalStrength = -1
    }

    let processedDisplacement = Math.abs(displacement.x) + Math.abs(displacement.y) + Math.abs(displacement.z)
    if(processedDisplacement < 52 && processedDisplacement > 1 && player.hasTag("pulling")){
        player.clearVelocity()
        player.applyKnockback(displacement.x,displacement.z,3,verticalStrength)
    }

    player.removeTag("pulling")

    

}


function PlayWeaponSounds(personalSound,globalSound,source,personalVolume,globalVolume){
    world.playSound(globalSound,source.location,{volume:globalVolume})
    source.playSound(personalSound,{volume:personalVolume})
}