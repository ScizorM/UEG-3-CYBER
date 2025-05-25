import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'



world.beforeEvents.worldInitialize.subscribe((initEvent) => {
    const dimension = world.getDimension("overworld")
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// weapons
    initEvent.blockComponentRegistry.registerCustomComponent("sm:stepontest", {
        onStepOn(event) {
            const { entity, block } = event;
            const dimension = world.getDimension("overworld")
            entity.runCommand("function explosion_fire")
            entity.runCommand("summon sm:explosion_boom")
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:booster_1", {
        onStepOn(event) {
            const { entity, block } = event;
            entity.applyKnockback(0, 0, 0, 1)
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:booster_2", {
        onStepOn(event) {
            const { entity, block } = event;
            entity.applyKnockback(0, 0, 0, 1.25)
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:booster_3", {
        onStepOn(event) {
            const { entity, block } = event;
            entity.applyKnockback(0, 0, 0, 2)
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:cloud_booster", {
        onStepOn(event) {
            const { entity, block } = event;
            entity.runCommand("effect @s slow_falling 5 1 true")
            entity.applyKnockback(0, 0, 0, 1.3)
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:piglin_head", {
        onPlayerInteract(event) {
            const { entity, block } = event;
            const dimension = world.getDimension("overworld")
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            block.dimension.runCommand("particle sm:respawn_beam " + blockx + " " + blocky + " " + blockz)
            block.dimension.runCommand("setblock " + blockx + " " + blocky + " " + blockz + " air")
            block.dimension.runCommand("function find_piglin_head")

        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:blockfab1", {
        onTick(event) {
            const { block } = event;
            const dimension = world.getDimension("overworld")
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            if (block.typeId == "sm:fabricated_block") {
                block.dimension.runCommand("setblock " + blockx + " " + blocky + " " + blockz + " sm:fabricated_block_2")
            }
            if (block.typeId == "sm:gob_goo_block") {
                block.dimension.runCommand("setblock " + blockx + " " + blocky + " " + blockz + " sm:gob_goo_block_2")
            }
        },
        onPlace(event) {
            const { block } = event;
            const dimension = world.getDimension("overworld")
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            if (block.typeId == "sm:fabricated_block") {
                block.dimension.runCommand("setblock " + blockx + " " + blocky + " " + blockz + " sm:fabricated_block")
            }
            if (block.typeId == "sm:gob_goo_block") {
                block.dimension.runCommand("setblock " + blockx + " " + blocky + " " + blockz + " sm:gob_goo_block")
            }
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:blockfab2", {
        onTick(event) {
            const dimension = world.getDimension("overworld")
            const { block } = event;
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            if (block.typeId == "sm:fabricated_block_2") {
                block.dimension.runCommand("setblock " + blockx + " " + blocky + " " + blockz + " sm:fabricated_block_3")
            }
            else if (block.typeId == "sm:gob_goo_block_2") {
                block.dimension.runCommand("setblock " + blockx + " " + blocky + " " + blockz + " sm:gob_goo_block_3")
            }

        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:blockfab3", {
        onTick(event) {
            const dimension = world.getDimension("overworld")
            const { block } = event;
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            block.dimension.runCommand("setblock " + blockx + " " + blocky + " " + blockz + " air")
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:blockfabemp", {
        onTick(event) {
            const dimension = world.getDimension("overworld")
            const { block } = event;
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            block.dimension.runCommand("particle sm:stun_effect " + blockx + " " + blocky + " " + blockz)
            block.dimension.runCommand("setblock " + blockx + " " + blocky + " " + blockz + " air")
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:fall_generator", {
        onTick(event) {
            const dimension = world.getDimension("overworld")
            const { block } = event;
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run effect @a[r=41] slow_falling 5 0 true")
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:blind_generator", {
        onTick(event) {
            const dimension = world.getDimension("overworld")
            const { block } = event;
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run effect @a[r=41,tag=ingame] blindness 5 0 true")
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:pendual_generator", {
        onTick(event) {
            const dimension = world.getDimension("overworld")
            const { block } = event;
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run particle sm:pendual_glitter")
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:pitfallTests", {
        onStepOn(event) {
            const { entity, block } = event;
            const dimension = world.getDimension("overworld")
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            if (block.typeId == "sm:pitfall_1") {
                block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run setblock ~ ~ ~ sm:pitfall_2")
            }
            else if (block.typeId == "sm:pitfall_2") {
                block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run setblock ~ ~ ~ sm:pitfall_3")
            }
            else if (block.typeId == "sm:pitfall_3") {
                block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run setblock ~ ~ ~ air")
            }
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:dash_0", {
        onStepOn(event) {
            const { entity, block } = event;
            var player = entity;
            const dimension = world.getDimension("overworld")
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            var dash_strength = 3;
            player.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, dash_strength - Math.abs(player.getViewDirection().y / 1.5), (dash_strength / 3))

        }
    });
        initEvent.blockComponentRegistry.registerCustomComponent("sm:banana_peel", {
        onStepOn(event) {
            const { entity, block } = event;
            var player = entity;
            const dimension = world.getDimension("overworld")
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            var dash_strength = 10;
            player.playSound("banan_slip")
            player.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, dash_strength - Math.abs(player.getViewDirection().y / 1.5), (dash_strength / 3))

        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:tickingParticles", {
        onTick(event) {
            const dimension = world.getDimension("overworld")
            const { block } = event;
            var blockx = block.location.x
            var blocky = block.location.y
            var blockz = block.location.z
            if (block.typeId == "sm:rocket_emitter") {
                block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run function optimizep_rocketemitter")
            }
        }
    });
    initEvent.blockComponentRegistry.registerCustomComponent("sm:teleporters", {
        // onTick(event) {
        //     const dimension = world.getDimension("overworld")
        //     const { block } = event;
        //     var blockx = block.location.x
        //     var blocky = block.location.y + 0.5
        //     var blockz = block.location.z
        //     if (block.typeId == "sm:teleporter_p_a") {
        //         block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run function optimizep_teleporterPA")
        //     }
        //     else if (block.typeId == "sm:teleporter_p_b") {
        //         block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run function optimizep_teleporterPB")
        //     }
        //     else if (block.typeId == "sm:teleporter_y_a") {
        //         block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run function optimizep_teleporterYA")
        //     }
        //     else if (block.typeId == "sm:teleporter_y_b") {
        //         block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run function optimizep_teleporterYB")
        //     }
        // },
        onPlace(event) {
            const dimension = world.getDimension("overworld")
            const { block } = event;
            var blockx = block.location.x
            var blocky = block.location.y + 0.5
            var blockz = block.location.z
            if (block.typeId == "sm:teleporter_p_a") {
                block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run function spawn_teleporter_p_a")
                world.sendMessage("test")
            }
            else if (block.typeId == "sm:teleporter_p_b") {
                block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run function spawn_teleporter_p_b")
            }
            else if (block.typeId == "sm:teleporter_y_a") {
                block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run function spawn_teleporter_y_a")
            }
            else if (block.typeId == "sm:teleporter_y_b") {
                block.dimension.runCommand("execute positioned " + blockx + " " + blocky + " " + blockz + " run function spawn_teleporter_y_b")
            }
        },
        onStepOn(event) {
            const teleportCooldownScore = world.scoreboard.getObjective("teleport_cooldown_new")
            const dimension = world.getDimension("overworld")
            const { entity, block } = event;
            const teleportCooldownPlayer = teleportCooldownScore.getScore(entity)

            if (teleportCooldownPlayer == 0) {
                var blockx = block.location.x
                var blocky = block.location.y
                var blockz = block.location.z
                if (block.typeId == "sm:teleporter_p_a") {
                    entity.runCommand("execute if score @s teleport_cooldown_new matches 0 run function p_a_to_p_b")
                    entity.runCommand("execute if score @s teleport_cooldown_new matches 0 run function init_teleport_cooldown")
                    world.sendMessage("teleported through purple A")
                }
                if (block.typeId == "sm:teleporter_p_b") {
                    entity.runCommand("execute if score @s teleport_cooldown_new matches 0 run function p_b_to_p_a")
                    entity.runCommand("execute if score @s teleport_cooldown_new matches 0 run function init_teleport_cooldown")
                    world.sendMessage("teleported through purple B")
                }
                if (block.typeId == "sm:teleporter_y_a") {
                    entity.runCommand("execute if score @s teleport_cooldown_new matches 0 run function y_a_to_y_b")
                    entity.runCommand("execute if score @s teleport_cooldown_new matches 0 run function init_teleport_cooldown")
                    world.sendMessage("teleported through yellow A")
                }
                if (block.typeId == "sm:teleporter_y_b") {
                    entity.runCommand("execute if score @s teleport_cooldown_new matches 0 run function y_b_to_y_a")
                    entity.runCommand("execute if score @s teleport_cooldown_new matches 0 run function init_teleport_cooldown")
                    world.sendMessage("teleported through yellow B")
                }
            }


        },
        onStepOff(event) {
            const { entity, block } = event;
            entity.runCommand("execute unless block ~ ~-0.5 ~ sm:teleporter_p_a run execute unless block ~ ~-0.5 ~ sm:teleporter_p_b run execute unless block ~ ~-0.5 ~ sm:teleporter_y_a run execute unless block ~ ~-1 ~ sm:teleporter_y_b run tag @s remove teleport_cooldown")
        }

    });
});
