import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { weaponIDList, ingameWeaponIDList, ingameWeaponNames } from './loadoutList.js'



world.beforeEvents.worldInitialize.subscribe((initEvent) => {
    const dimension = world.getDimension("overworld")
    var selectedLoadoutSlot = 0;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// weapons

    initEvent.itemComponentRegistry.registerCustomComponent("custom:item", {
        onUse(event) {
            const { itemStack, source } = event;

            //code obtained from Minato from the Bedrock Addons Discord, I hate mojang so much for removing holiday creator features and ruining so much for me
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

    
                source.runCommand("execute if score @s heavenpiercer_meter matches 6.. run function heavenpiercer_triggergroundslam")
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
            hitEntity.playSound("cannon_bludgeon")
            attackingEntity.playSound("cannon_bludgeon")
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
    initEvent.itemComponentRegistry.registerCustomComponent("sm:deep_striker", {
        onUse(event) {
            var entityRay = false
            const dimension = world.getDimension("overworld")

            const { itemStack, source } = event;

            world.sendMessage("Deepstriker animation active: " + source.getProperty("sm:deepstriker_anim").toString())
            world.sendMessage("Deepstriker shooting self active: " + source.getProperty("sm:deepstriker_shooting_self").toString())
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
                entityRay = true
            })

            if (entityRay) {
                
            }
            else if (blockRC.block.typeId != "sm:arenaborder" && blockRC.block.typeId != "minecraft:bedrock" && blockRC.block.typeId != "sm:arenaborder_4" && blockRC.block.typeId != "sm:arenaborder_5") {
                source.setProperty("sm:deepstriker_anim", 1)
                var rayDisplacementBlock = { x: source.location.x - blockRC.block.location.x, y: source.location.y - blockRC.block.location.y + .4, z: source.location.z - blockRC.block.location.z }



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

function loadoutSelectUI(source, selectedLoadoutSlot) {

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
    var itemList = `Loadout ${selectedLoadoutSlot}:\n`
    itemSlots.forEach(string => {
        if (string != undefined) {
            itemList = `${itemList}\n${string}\n`
        }
        else {
            itemList = `${itemList}\n"§cUnsupported Item§r"`
        }
    })
    form.title(`Loadout ${selectedLoadoutSlot}§r`);
    form.body(itemList);
    form.button1("Cancel");
    form.button2("Select");
    form.show(source).then(r => {
        var response = r.selection
        if (response == 1) {
            source.runCommand(loadoutNumber)
        }
        else {
            
        }
    })

}