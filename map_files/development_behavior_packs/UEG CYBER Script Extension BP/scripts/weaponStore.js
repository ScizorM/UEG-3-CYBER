import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { marqueWeaponFunctions, marqueWeaponNames, marqueWeaponDescs, marqueWeaponIcons, marqueWeaponPrices, marqueUnlockTests } from './weaponStoreArrays.js'


system.runInterval(() => {

    for (const player of world.getPlayers()) {

        if (player.hasTag("open_loadoutmenu2")) {
            system.run(() => StoreMenu(player))
            player.removeTag("open_loadoutmenu2")
        }

    }
})

function StoreMenu(player){

    const mainTitle = "Marque's Weapon Shop"
    const mainDesc = "Welcome to Marque's Weapon Shop Terminal!\n\nPlease select a weapon from our catalog to learn more about it and to buy it.\n\n"


    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    for (var i = 0; i < marqueWeaponDescs.length; i++) {
        if (marqueWeaponNames[i].length > 20) {
            form.button(`${marqueWeaponNames[i]} ${marqueWeaponPrices[i]}`, marqueWeaponIcons[i])
        }
        else {
            form.button(`${marqueWeaponNames[i]}\n${marqueWeaponPrices[i]}`, marqueWeaponIcons[i])
        }
        
    }
    form.button("Cancel", "textures/ui/button_close");

    form.show(player).then(r => {

        let responseValue = r.selection
        if (responseValue < marqueWeaponDescs.length) {
            system.run(() => BuyWeapon(player, responseValue));
        }

    })

}

function BuyWeapon(player, selectedItem) {
    const currency = world.scoreboard.getObjective("credits")
    const currencyCount = currency.getScore(player)

    const gcurrency = world.scoreboard.getObjective("global_credits")
    const gcurrencyCount = gcurrency.getScore("global_credits")

    var itemCost = marqueWeaponPrices[selectedItem]

    const unlockedWeaponSB = world.scoreboard.getObjective("unlocked_weapons")
    var unlockedWeapon = unlockedWeaponSB.getScore(marqueUnlockTests[selectedItem])

    var title = `Purchase ${marqueWeaponNames[selectedItem]}`


    let form = new ActionFormData();
    form.title(title);
    var desc = `${marqueWeaponNames[selectedItem]}\n\n${marqueWeaponDescs[selectedItem]}`

    if (unlockedWeapon != 1) {
        if (currencyCount < itemCost) {
            form.button("Insufficient Personal Credits!\n" + currencyCount + "", "textures/ui/button_currency");
        }
        else {
            form.button("Use Personal Credits \n" + currencyCount + "", "textures/ui/button_currency");
        }
        if (gcurrencyCount < itemCost) {
            form.button("Insufficient Global Credits!\n" + gcurrencyCount + "", "textures/ui/button_global_currency");
        }
        else {
            form.button("Use Global Credits \n" + gcurrencyCount + "", "textures/ui/button_global_currency");
        }
        desc = desc + `\n\nPrice: ${itemCost}\n\nPlease select a payment method:\n\n`
    }
    else {
        desc = desc + "\n\nYou already own this weapon!\n\n"
    }



    form.body(desc);








    form.button("Back", "textures/ui/button_back");


    form.show(player).then(r => {

        let responseValue = r.selection
        if (unlockedWeapon != 1) {
            if (responseValue == 0) {
                if (currencyCount >= itemCost) {
                    currency.addScore(player, -itemCost)
                    player.runCommand(`function ${marqueWeaponFunctions[selectedItem]}`)
                }
                else {
                    player.sendMessage("§cInsufficient Funds.")
                }
            }
            else if (responseValue == 1) {
                if (gcurrencyCount >= itemCost) {
                    gcurrency.addScore("global_credits", -itemCost)
                    player.runCommand(`function ${marqueWeaponFunctions[selectedItem]}`)
                }
                else {
                    player.sendMessage("§cInsufficient Funds.")
                }
            }
            else if (responseValue == 2) {
                system.run(() => StoreMenu(player))
            }
        }
        else {
            if (responseValue == 0) {
                system.run(() => StoreMenu(player))
            }
        }
    })

}