import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'



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
                cooldownComp5.startCooldown(player)
            }
            break
        case 'sm:emp_drive':
            const cooldownComp6 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[EMP Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 298) {
                cooldownComp6.startCooldown(player)
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
        case 'sm:parry_fist':
            const cooldownComp13 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Parry Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 17) {
                cooldownComp13.startCooldown(player)
            }
            break
        case 'sm:icarus':
            const cooldownComp14 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Icarus Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 4) {
                cooldownComp14.startCooldown(player)
            }
            break
        case 'sm:heavenpiercer':
            const cooldownComp15 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[HeavenPiercer Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 97) {
                cooldownComp15.startCooldown(player)
                player.applyKnockback(player.getViewDirection().x / 5, player.getViewDirection().z / 5, Math.sqrt(player.getViewDirection().x ** 2 + player.getViewDirection().z ** 2) * 1, 2)
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
        case 'sm:baby_stick':
            const cooldownComp21 = item.getComponent(ItemCooldownComponent.componentId)
            //world.sendMessage("[Baby Staff Debug] " + item.getComponent('cooldown').getCooldownTicksRemaining(player))
            if (item.getComponent('cooldown').getCooldownTicksRemaining(player) > 197) {
                cooldownComp21.startCooldown(player)
            }
            break
    }
})