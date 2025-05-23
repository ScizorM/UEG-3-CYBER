import { world, ItemCooldownComponent, system, Entity, EquipmentSlot, ItemStack, EntityComponentTypes } from '@minecraft/server'


system.runInterval(() => {
    const dimension = world.getDimension("Overworld")
    world.getAllPlayers().forEach(player => {
        var cooldownData = world.scoreboard.getObjective("weapon_cooldown")
        var item = player.getComponent("equippable").getEquipment("Mainhand")

        if (player.hasTag("deepstriker_kb")) {
            var source = player
            var deepTimer = world.scoreboard.getObjective("deepstriker_timer")
            var deepTimerP = deepTimer.getScore(source)
            deepTimer.setScore(source, 0)
            source.runCommand(`execute positioned ${source.location.x} ${source.location.y} ${source.location.z} run /function explosion_deepstriker`)
            source.runCommand(`execute positioned ${source.location.x} ${source.location.y} ${source.location.z} run /summon sm:explosion_deepstriker`)
            source.applyKnockback(source.getViewDirection().x, source.getViewDirection().z, -5, 0.5)
            world.sendMessage("invalid block, attack yourself")
            source.removeTag("deepstriker_kb")
        }


        if (item) {

            if (item.typeId == "sm:deep_striker") {

                var source = player
                var entityRay = false
                if (item.getComponent('cooldown').getCooldownTicksRemaining(player) == 0) {
                    source.setProperty("sm:deepstriker_anim", 0)
                    source.setProperty("sm:deepstriker_shooting_self", 0)
                }
                const dimension = world.getDimension("overworld")
                //source.setProperty("sm:deepstriker_shooting_self", 0)
                var rayLocation = { x: source.location.x, y: source.location.y + 1.5, z: source.location.z }
                var lookDir = { x: source.getViewDirection().x, y: source.getViewDirection().y, z: source.getViewDirection().z }
                var blockRC = source.dimension.getBlockFromRay(rayLocation, lookDir, { includeLiquidBlocks: false, includePassableBlocks: false })
                var entityRC = source.getEntitiesFromViewDirection()

                entityRC.forEach((hit) => {
                    entityRay = true
                })

                if (item.getComponent('cooldown').getCooldownTicksRemaining(player) == 0) {


                    if (!entityRay && !(blockRC && blockRC.block.typeId != "sm:arenaborder" && blockRC.block.typeId != "minecraft:bedrock" && blockRC.block.typeId != "sm:arenaborder_4" && blockRC.block.typeId != "sm:arenaborder_5")) {
                        source.setProperty("sm:deepstriker_shooting_self", 1)
                    }
                    else {
                        source.setProperty("sm:deepstriker_shooting_self", 0)
                    }

                }
            }

            if (item.typeId == "sm:kusarigama") {

                //if (player.hasTag("kusarigama_attack")) {
                    

                //    var source = player
                //    var entityRay = false
                //    if (item.getComponent('cooldown').getCooldownTicksRemaining(player) == 0) {

                //        var entityRay = false
                //        const dimension = world.getDimension("overworld")


                //        var rayLocation = { x: source.location.x, y: source.location.y + 1.5, z: source.location.z }
                //        var lookDir = { x: source.getViewDirection().x, y: source.getViewDirection().y, z: source.getViewDirection().z }
                //        var entityRC = source.getEntitiesFromViewDirection()
                //        var blockRC = source.dimension.getBlockFromRay(rayLocation, lookDir, { includeLiquidBlocks: false, includePassableBlocks: false, maxDistance: 20})




                //        var particleType = "sm:striker_sparkle"


                //        if (blockRC != undefined) {
                //            source.setProperty("sm:deepstriker_anim", 1)
                //            var rayDisplacementBlock = { x: source.location.x - blockRC.block.location.x, y: source.location.y - blockRC.block.location.y + .4, z: source.location.z - blockRC.block.location.z }

                //            source.runCommand(`tp @s ${blockRC.block.location.x} ${blockRC.block.location.y} ${blockRC.block.location.z}`)


                //            var totalDisplacement = Math.abs(rayDisplacementBlock.x) + Math.abs(rayDisplacementBlock.y) + Math.abs(rayDisplacementBlock.z)

                //            var loopTimes = 50

                //            for (let i = 1; i < loopTimes; i = i + .25) {
                //                var particleLocation = {
                //                    x: blockRC.block.location.x + (rayDisplacementBlock.x / i),
                //                    y: blockRC.block.location.y + (rayDisplacementBlock.y / i) + 0.5,
                //                    z: blockRC.block.location.z + (rayDisplacementBlock.z / i)
                //                }

                //                source.runCommand(`particle ${particleType} ${particleLocation.x} ${particleLocation.y} ${particleLocation.z}`)

                //                if (i >= loopTimes) {
                //                    break;
                //                }
                //            }
                //        }
                //    }

                    player.removeTag("kusarigama_attack")
                }


            }

            //if (item.typeId == "sm:vulcan_cannon") {

            //    if (player.hasTag("vulcan_attack")) {


            //        var source = player
            //        var entityRay = false
            //        if (item.getComponent('cooldown').getCooldownTicksRemaining(player) == 0) {

            //            const dimension = world.getDimension("overworld")
            //            const viewDir = source.getViewDirection()
            //            const vulcanBlast = source.dimension.spawnEntity("minecraft:arrow", source.getHeadLocation());
            //            const projectile = vulcanBlast.getComponent("projectile");
            //            projectile.owner = source;
            //            const power = 1
            //            const powerV3 = {
            //                x: source.getViewDirection().x * power,
            //                y: source.getViewDirection().y * power,
            //                z: source.getViewDirection().z * power
            //            }
            //            projectile.shoot(powerV3)
            //            source.runCommand("function vulcan")
            //            source.runCommand("function vulcan_extendedcmds")
            //        }

            //        player.removeTag("vulcan_attack")
            //    }


            //}
        if (item) {
            if (item.getComponent(ItemCooldownComponent.componentId)) {
                var cooldown = Math.round((item.getComponent(ItemCooldownComponent.componentId).getCooldownTicksRemaining(player)) / 20)
                const cooldownScore = world.scoreboard.getObjective("icarus_is_inactive")
                const cooldownScorePlayer = cooldownScore.getScore(player)
                cooldownData.setScore(player, cooldown)

                if (cooldownScorePlayer == 1 && item.typeId == "sm:icarus") {
                    const cooldownCompd = item.getComponent(ItemCooldownComponent.componentId)
                    cooldownCompd.startCooldown(player)

                }

            }
            else {
                cooldownData.setScore(player, 0)
            }
        }



    })
})


//some code originates from Alien Edds from the bridge discord, I asked them for help specifically but my mom taught me how to use case statements because they're more efficient than ifs lol :skull:
world.afterEvents.itemUse.subscribe((data) => {
    const item = data.itemStack
    const player = data.source


    switch (item.typeId) {
        case 'sm:vulcan_cannon':
            const cooldownComp1 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Vulcan Cannon Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (cooldownComp1.getCooldownTicksRemaining(player) > 18) {
                cooldownComp1.startCooldown(player)
            }
            break
        case 'sm:platform_fabricator':
            const cooldownComp2 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Platform Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 298) {
                cooldownComp2.startCooldown(player)
            }
            break
        case 'sm:remote_activator_ver_nu':
            const cooldownComp3 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Remote Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 58) {
                cooldownComp3.startCooldown(player)
            }
            break
        case 'sm:remote_activator_ver_lambda':
            const cooldownComp4 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Remote Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 58) {
                cooldownComp4.startCooldown(player)
            }
            break
        case 'sm:emp_drive':
            const cooldownComp6 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[EMP Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 298) {
                cooldownComp6.startCooldown(player)
            }
            break
        case 'sm:heirloom':
            const cooldownComp93 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[EMP Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 298) {
                cooldownComp93.startCooldown(player)
            }
            break
        case 'sm:landmine_ver_nu':
            const cooldownComp = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Landmine Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 37) {
                cooldownComp.startCooldown(player)
            }
            break
        case 'sm:landmine_ver_lambda':
            const cooldownComp7 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Landmine Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 37) {
                cooldownComp7.startCooldown(player)
            }
        case 'sm:teamless_landmine':
            const cooldownCompasd = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Landmine Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 37) {
                cooldownCompasd.startCooldown(player)
            }
        case 'sm:enhanced_charged_bolt_rifle':
            const cooldownCompcds = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Landmine Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 37) {
                cooldownCompcds.startCooldown(player)
            }
        case 'sm:deep_striker':
            const cooldownCompz = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Landmine Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 197) {
                cooldownCompz.startCooldown(player)
            }
            break
        case 'sm:enhanced_deep_striker':
            const cooldownCompdd = item.getComponent(ItemCooldownComponent.componentId)
            world.sendMessage("[Landmine Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 37) {
                cooldownCompdd.startCooldown(player)
            }
            break
        case 'sm:scaler_bomb':
            const cooldownCompb = item.getComponent(ItemCooldownComponent.componentId)
            world.sendMessage("[Landmine Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 197) {
                cooldownCompb.startCooldown(player)
            }
            break
        case 'sm:implosion_grenade':
            const cooldownCompy = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Landmine Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 297) {
                cooldownCompy.startCooldown(player)
            }
            break
        case 'sm:antigravity_prism':
            const cooldownComp8 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Prism Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 197) {
                cooldownComp8.startCooldown(player)
            }
            break
        case 'sm:smorgler':
            const cooldownComp9 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Datura Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 197) {
                cooldownComp9.startCooldown(player)
            }
            break
        case 'sm:charged_bolt_rifle':
            const cooldownComp10 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Charged Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 97) {
                cooldownComp10.startCooldown(player)
            }
            break
        case 'sm:enhanced_platform_fabricator':
            const cooldownComp10a = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Charged Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 97) {
                cooldownComp10a.startCooldown(player)
            }
            break
        case 'sm:repulsion_blade':
            const cooldownComp11 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Blade Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 97) {
                cooldownComp11.startCooldown(player)
            }
            break
        case 'sm:sc_quant-e':
            const cooldownComp12 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[SC_Quant Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 2397) {
                cooldownComp12.startCooldown(player)
            }
            break
        case 'sm:blushing_bloomfan':
            const cooldownComp133 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[SC_Quant Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 7) {
                cooldownComp133.startCooldown(player)
            }
            break
        case 'sm:fish_car':
            const cooldownComp1222 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[SC_Quant Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 17) {
                cooldownComp1222.startCooldown(player)
            }
            break
        case 'sm:parry_fist':
            const cooldownComp13 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Parry Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 17) {
                cooldownComp13.startCooldown(player)
            }
            break
        case 'sm:icarus':
            const cooldownComp14 = item.getComponent(ItemCooldownComponent.componentId)
            const cooldownScore = world.scoreboard.getObjective("icarus_is_inactive")
            const cooldownScorePlayer = cooldownScore.getScore(player)
            //world.sendMessage("[Icarus Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 4) {
                cooldownComp14.startCooldown(player)
            }
            break
        case 'sm:mb85_crimson_hws':
            const cooldownComp2000 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Icarus Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 8) {
                cooldownComp2000.startCooldown(player)
            }
            break
        case 'sm:mb85_greatsword':
            const cooldownComp20002 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Icarus Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 24) {
                cooldownComp20002.startCooldown(player)
            }
            break
        case 'sm:heavenpiercer':
            const cooldownComp15 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[HeavenPiercer Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 97) {
                cooldownComp15.startCooldown(player)
                
            }
            break
        case 'sm:true_holic':
            const cooldownComp16 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[True Holic Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 7) {
                cooldownComp16.startCooldown(player)
            }
            break
        case 'sm:gob_goo_cannon':
            const cooldownComp17 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Gob Goo Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 12) {
                cooldownComp17.startCooldown(player)
            }
            break
        case 'sm:archerfish':
            const cooldownComp18 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Archerfish Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 57) {
                cooldownComp18.startCooldown(player)
            }
            break
        case 'sm:salmon_bomb':
            const cooldownComp19 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Salmon Bomb Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 17) {
                cooldownComp19.startCooldown(player)
            }
            break
        case 'sm:big_joe_weapon':
            const cooldownComp20 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Big Joe Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 797) {
                cooldownComp20.startCooldown(player)
            }
            break
        case 'sm:kusarigama':
            const cooldownComp22 = item.getComponent(ItemCooldownComponent.componentId)
            world.sendMessage("[Kusarigama Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 17) {
                cooldownComp22.startCooldown(player)
            }
            break
        case 'sm:baby_stick':
            const cooldownComp21 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Baby Staff Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 197) {
                cooldownComp21.startCooldown(player)
            }
            break
    }
})