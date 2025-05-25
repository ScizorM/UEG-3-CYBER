import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'

const dimension = world.getDimension("Overworld")

function tether(player) {
    player.runCommand("xp -1L")
    var tx_o = Math.floor(player.location.x)
    var ty_o = Math.floor(player.location.y)
    var tz_o = Math.floor(player.location.z)

    var pre_bungie_x = Math.round(player.location.x * 1000)/1000
    var pre_bungie_y = Math.round(player.location.y * 1000)/1000
    var pre_bungie_z = Math.round(player.location.z * 1000)/1000
    player.addTag("tethered")
    system.run(() => tether2(player))
    function tether2(player) {

        var cx_o = Math.floor(player.location.x) - tx_o
        var cy_o = Math.floor(player.location.y) - ty_o
        var cz_o = Math.floor(player.location.z) - tz_o


        var particle_bungie_x = Math.round(player.location.x * 1000)/1000 - tx_o
        var particle_bungie_y = Math.round(player.location.y * 1000)/1000 - ty_o
        var particle_bungie_z = Math.round(player.location.z * 1000)/1000 - tz_o

        var launchDirection = 1

        //player.runCommand("particle sm:gob_goo_hit " + tx_o + " " + ty_o + " " + tz_o)

        if (cx_o > 7 || cx_o < -7) {
            var anchorTex = "sm:anchor_4"
            system.run(() => tether3(player))
            launchDirection = 1
        }
        else if (cy_o > 7 || cy_o < -7) {
            var anchorTex = "sm:anchor_4"
            system.run(() => tether3(player))
            launchDirection = 1
        }
        else if (cz_o > 7 || cz_o < -7) {
            var anchorTex = "sm:anchor_4"
            system.run(() => tether3(player))
            launchDirection = 1
        }
        else if (cx_o > 5 || cx_o < -5) {
            var anchorTex = "sm:anchor_3"
            launchDirection = 1
        }
        else if (cy_o > 5 || cy_o < -5) {
            var anchorTex = "sm:anchor_3"
            launchDirection = 1
        }
        else if (cz_o > 5 || cz_o < -5) {
            var anchorTex = "sm:anchor_3"
            launchDirection = 1
        }
        else if (cx_o > 3 || cx_o < -3) {
            var anchorTex = "sm:anchor_2"
        }
        else if (cy_o > 3 || cy_o < -3) {
            var anchorTex = "sm:anchor_2"
        }
        else if (cz_o > 3 || cz_o < -3) {
            var anchorTex = "sm:anchor_2"
        }
        else {
            var anchorTex = "sm:anchor"
            launchDirection = 0
        }

        player.runCommand("particle " + anchorTex + " " + (tx_o) + " " + (ty_o + 1) + " " + (tz_o))


        var launchY = 0










        if (player.hasTag("tethered")) {
            system.run(() => tether2(player))
        }

        function tether3(player) {
            player.runCommand("inputpermission set @s movement disabled")
            player.applyKnockback(-cx_o, -cz_o, 2, Math.min(Math.max(-cy_o + 0.1,-0.2) * launchDirection,1.3))
            if (cx_o < 5 || cx_o > -5) {
                player.removeTag("tethered")
                player.removeTag("tetherActive")
                player.runCommand("inputpermission set @s movement enabled")
            }
            else if (cy_o < 5 || cy_o > -5) {
                player.removeTag("tethered")
                player.removeTag("tetherActive")
                player.runCommand("inputpermission set @s movement enabled")
            }
            else if (cz_o < 5 || cz_o > -5) {
                player.removeTag("tethered")
                player.removeTag("tetherActive")
                player.runCommand("inputpermission set @s movement enabled")
            }
            else {
                //system.run(() => tether3(player))
            }
            return
        }
        return
    }
    return
}



system.runInterval(() => {
    world.getAllPlayers().forEach(player => {

        var holicHitsSB = world.scoreboard.getObjective("holic_hits")
        var holicLevel = holicHitsSB.getScore(player)/12

        if(holicLevel > 22/12){
            holicLevel = 22/12
        }

        const minDashesRequired = world.scoreboard.getObjective("minimum_dash_requirement")
        const minDashesRequiredVar = minDashesRequired.getScore("minimum_dash_requirement")

        const dash_verticality = world.scoreboard.getObjective("dash_verticality")
        const dash_verticalityp = dash_verticality.getScore("dash_verticality") * 35

        const dashes = world.scoreboard.getObjective("dashes")

        const dashesMessage = dashes.getScore(player)

        const dash_usage = -minDashesRequiredVar


        const dash_strength_score = world.scoreboard.getObjective("dash_strength")

        const dash_strength_variable = dash_strength_score.getScore("dash_strength")

        const dash_strength = dash_strength_variable + 0.5
        //weaker : 1
        //default : 1.5
        //stronger : 2
        //stronger - er : 3
        //insane : 5

        const min_dashes = world.scoreboard.getObjective("minimum_dash_requirement")



        if (player.hasTag("levitating")) {
            player.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, 0.2, 0.4)
        }


        const fallDetectDir = { x: 0, y: -1, z: 0 };

        var blockBelowPlayerTest = player.dimension.getBlockFromRay(player.location, fallDetectDir, { includeLiquidBlocks: false, maxDistance: 5, includePassableBlocks: false })?.block
        var blockBelowPlayerParticle = player.dimension.getBlockFromRay(player.location, fallDetectDir, { includeLiquidBlocks: false, maxDistance: 100, includePassableBlocks: false })?.block
        var blockBelowPlayer = player.dimension.getBlockFromRay(player.location, fallDetectDir, { includeLiquidBlocks: false, maxDistance: 1, includePassableBlocks: false })?.block



        if (player.isSneaking && player.level > 0) {
            if (player.hasTag("rocketjump")) {
                player.applyKnockback(0, 0, 0, 1.25)
                player.runCommand("function explosion_rocketjump")
                player.runCommand("camerashake add @s 0.5 0.2 positional")
            }
            if (player.hasTag("vel_cancel") && blockBelowPlayerTest == undefined) {
                player.runCommand("teleport @s " + Math.floor(player.location.x) + " " + Math.floor(player.location.y) + " " + Math.floor(player.location.z))
                player.applyKnockback(0, 0, 0, -1)
                player.runCommand("execute as @s[tag=!stoned] run function stone_ability")
            }
            if (player.hasTag("baby") && player.hasTag("tetherActive") == false) {
                system.run(() => tether(player))
                player.addTag("tetherActive")
            }
            if (player.hasTag("prism")) {

                system.run(() => judgement(player))

                

            }
            if (player.hasTag("remote")) {

            }

            player.runCommand("xp -100L @s")
        }

        if (player.hasTag("vel_cancel") && blockBelowPlayerTest == undefined) {
            if (blockBelowPlayerParticle != undefined) {
                var blockX = blockBelowPlayerParticle.location.x
                var blockY = blockBelowPlayerParticle.location.y
                var blockZ = blockBelowPlayerParticle.location.z
                player.runCommand("particle sm:groundslam_target " + blockX + " " + (blockY + 1.1) + " " + blockZ)
            }
        }


        if (player.hasTag("stoned")) {
            player.applyKnockback(0, 0, 0, -1)
            const targets = player.dimension.getEntities({ location: player.location, maxDistance: 5 });
            if (player.getVelocity().y > -0.000000001 && blockBelowPlayer != undefined) {
                for (const target of targets) {
                    if (target != player) {
                        target.applyKnockback(target.location.x - player.location.x, target.location.z - player.location.z, 4, 1);
                    }
                }
                player.runCommand("function stoned_ability_explode")
            }





        }



        player.runCommand("/scoreboard players add @s dashCooldown 0 ")
        player.runCommand("/scoreboard players add @s airTime 0 ")

        var maxDashesSB = world.scoreboard.getObjective("max_dashes")
        var maxDashesPL = maxDashesSB.getScore("max_dashes")

        var dashCooldownSB = world.scoreboard.getObjective("dashCooldown")
        var dashCooldownPlayer = dashCooldownSB.getScore(player)

        var airTimeSB = world.scoreboard.getObjective("airTime")
        var airTimePlayer = airTimeSB.getScore(player)

        if (dashCooldownPlayer > 0) {
            dashCooldownSB.addScore(player, -1)
        }

        if (Math.abs(player.getVelocity().y) > 0) {
            airTimeSB.addScore(player, 1)
        }
        else {
            airTimeSB.setScore(player,0)
        }

        if (player.getVelocity().y != 0 && player.hasTag("onGround")) {
            player.removeTag("onGround")
            player.addTag("hasJumped")
        }

        if (!player.isJumping && player.hasTag("hasJumped")) {
            player.removeTag("hasJumped")
        }

        if (player.isOnGround && !player.hasTag("onGround")) {
            player.addTag("onGround")
        }


        if (player.isJumping == true && !player.hasTag("hasJumped") && !player.hasTag("onGround") && dashes.getScore(player) >= minDashesRequiredVar) {
            player.addTag("hasJumped")
            if (player.getGameMode() == `creative`) {

            }
            else if (dashes.getScore(player) >= minDashesRequiredVar && !player.hasTag("mb85_greatsword")) {
                dashCooldownSB.setScore(player,5)
                //player.sendMessage(`NOT CREATIVE`)
                const scoreboard = world.scoreboard.getObjective("dash_strength")
                player.playSound("dash", { volume: 0.4, pitch: Math.max(Math.random(), 0.8) })
                //player.sendMessage("View Direction Y: " + player.getViewDirection().y.toString()) 
                    holicHitsSB.addScore(player,0)
                    holicLevel = holicHitsSB.getScore(player)/12
                    player.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, dash_strength - Math.abs(player.getViewDirection().y / 1.5)  + holicLevel, ((player.getViewDirection().y + 1) / 2) * (dash_strength / 2))
                    dashes.addScore(player, dash_usage)


                player.runCommand("function removeFlightTag")
                player.runCommand("function redo_dash_effects")

                player.addTag("flying")
                player.addTag("dash_timer")
                player.addTag("dashAnim")
            }
            else if(player.hasTag("mb85_greatsword") && dashes.getScore(player) == maxDashesPL){
                dashCooldownSB.setScore(player,5)
                //player.sendMessage(`NOT CREATIVE`)
                const scoreboard = world.scoreboard.getObjective("dash_strength")
                player.playSound("dash", { volume: 0.4, pitch: Math.max(Math.random(), 0.8) })
                //player.sendMessage("View Direction Y: " + player.getViewDirection().y.toString()) 
                    holicHitsSB.addScore(player,0)
                    holicLevel = holicHitsSB.getScore(player)/12
                    player.applyKnockback(player.getViewDirection().x, player.getViewDirection().z, dash_strength - Math.abs(player.getViewDirection().y / 1.5)  + holicLevel, ((player.getViewDirection().y + 1) / 2) * (dash_strength / 2))


                player.runCommand("function removeFlightTag")
                player.runCommand("function redo_dash_effects")

                player.addTag("flying")
                player.addTag("dash_timer")
                player.addTag("dashAnim")
            }


        }




        player.runCommand("execute as @s[tag=judgement] run scoreboard players add @s judgement_timer 1")

    })
})


function judgement(player) {

    //code in this range comes from gegacraft

    const judgementTimer = world.scoreboard.getObjective("judgement_timer")
    const playerJudgementTimer = judgementTimer.getScore(player)

    const option = {
        closest: 1,
        location: player.location,
        minDistance: 0.05,
        maxDistance: 10
    }
    const nearestPlayer = player.dimension.getPlayers(option)?.[0]
    //not this part
    if (nearestPlayer != undefined && nearestPlayer.hasTag("ingame")) {
        player.playSound("judgement")
        player.runCommand("xp -1L")
        player.runCommand('execute as "' + nearestPlayer.name + '" positioned as @s run execute positioned ^ ^ ^2 run execute positioned ~ ' + nearestPlayer.location.y + ' ~ run tp "' + player.name + '" ~ ~ ~ facing "' + nearestPlayer.name + '" true')
        player.runCommand("camera @s fade time 0 0 0.5 color 100 100 150")
        player.runCommand("playanimation @s animation.player.judgement")
        player.addTag("judgement")
        player.runCommand("tp @s " + Math.floor(player.location.x) + " " + Math.floor(player.location.y) + " " + Math.floor(player.location.z) + " facing " + nearestPlayer.name)
        nearestPlayer.runCommand("tp @s " + Math.floor(nearestPlayer.location.x) + " " + Math.floor(nearestPlayer.location.y) + " " + Math.floor(nearestPlayer.location.z))
        system.run(() => judgement2(player))
        nearestPlayer.playSound("judgement")
    }
    //end not this part

    //end credits

}


function judgement2(player) {

    const judgementTimer = world.scoreboard.getObjective("judgement_timer")
    const playerJudgementTimer = judgementTimer.getScore(player)

    const option = {
        closest: 1,
        location: player.location,
        minDistance: 0.05,
        maxDistance: 10
    }
    const nearestPlayer = player.dimension.getPlayers(option)?.[0]

    player.runCommand("tp @s " + Math.floor(player.location.x) + " " + Math.floor(player.location.y) + " " + Math.floor(player.location.z) + " facing " + nearestPlayer.name)

    if (nearestPlayer != undefined) {

        if (playerJudgementTimer <= 8) {
            system.run(() => judgement2(player))
        }
        else if (playerJudgementTimer > 8) {
            player.removeTag("judgement")
            nearestPlayer.applyKnockback(player.getViewDirection().x / 5, player.getViewDirection().z / 5, 10, 0.5)
            player.runCommand("execute as @s positioned as @s run execute positioned ^ ^1.5 ^2.5 run function explosion_parry")
            player.runCommand("scoreboard players reset @s judgement_timer")
        }

    }



}