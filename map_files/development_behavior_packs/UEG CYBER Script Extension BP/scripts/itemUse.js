import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'



world.beforeEvents.worldInitialize.subscribe((initEvent) => {
    const dimension = world.getDimension("overworld")
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
    initEvent.itemComponentRegistry.registerCustomComponent("sm:heavenpiercer", {
        onUse(event) {
            const { itemStack, source } = event;
            const heavenP = world.scoreboard.getObjective("heavenpiercer_meter")
            const heavenPlayer = heavenP.getScore(source)
            if (heavenPlayer > 5) {

    
                source.runCommand("execute if score @s heavenpiercer_meter matches 6.. run function heavenpiercer_triggergroundslam")
            }

        },
        onHitEntity(event) {
            const { itemStack, attackingEntity } = event;
            attackingEntity.runCommand("function heavenpiercerL_cmds")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:true_holic", {
        onUse(event) {
            const { itemStack, source } = event;

            source.runCommand("function holic_refresh")
        },
        onHitEntity(event) {
            const { itemStack, attackingEntity } = event;
            attackingEntity.runCommand("function holic_attack")
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

            source.runCommand("function baby_storm")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:big_joe", {
        onUse(event) {
            const { itemStack, source } = event;

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

            source.runCommand("summon sm:landmine_ver_lambda")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:landminenu", {
        onUse(event) {
            const { itemStack, source } = event;

            source.runCommand("summon sm:landmine_ver_nu")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:rlambda", {
        onUse(event) {
            const { itemStack, source } = event;

            source.runCommand("function explode_lambda_landmines")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:rnu", {
        onUse(event) {
            const { itemStack, source } = event;

            source.runCommand("function explode_nu_landmines")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:antigrav", {
        onUse(event) {
            const { itemStack, source } = event;

            source.runCommand("function antigrav_prism")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:emp_drive", {
        onUse(event) {
            const { itemStack, source } = event;

            source.runCommand("execute positioned ~ ~1 ~ run function emp")
        }
    });
    initEvent.itemComponentRegistry.registerCustomComponent("sm:platform_fabricator", {
        onUse(event) {
            const { itemStack, source } = event;

            source.runCommand("function spawn_platform")
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
                const power = 2
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
