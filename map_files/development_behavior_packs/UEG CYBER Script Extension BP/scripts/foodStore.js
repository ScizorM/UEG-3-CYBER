import { itemNameList, itemIconLocation, itemScoreboard, itemDescList, goblinShopItemList, itemBundleCostList, itemBundleFunctionList, itemBundleIconList, itemBundleNameList, foodShopLength, itemPrices, goblinShopBundleList, bundleShopLength, itemBundleDescList, freedomShopItemList } from "./foodList.js"
import { world, ItemCooldownComponent, system, Entity, EntityComponentTypes } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'

system.runInterval(() => {

    var allEntities = world.getDimension("overworld").getEntities().forEach(entity => {



        if (entity.typeId == "sm:goblin_stool") {

            //code yoinked from halo333x from the bedrock addons discord
            var rideableComponent = entity.getComponent('rideable');
            var player = rideableComponent.getRiders()[0];
            //end code yoinking
            
            if (player != undefined) {
                if (!player.hasTag("seated")) {
                    system.run(() => openFoodStoreMenu(0, player))
                }

                player.addTag("seated")
            }
        }

        if (entity.typeId == "sm:oak_stool") {
            
                //code yoinked from halo333x from the bedrock addons discord
                var rideableComponent = entity.getComponent('rideable');
                var player = rideableComponent.getRiders()[0];
                //end code yoinking

            if (player != undefined) {
                if (player.hasTag("enter_freedom")) {

                    if (!player.hasTag("seated")) {
                        system.run(() => openFoodStoreMenu(1, player))
                    }

                    player.addTag("seated")
}

                }
            

        }


    })
})


const foodStoreTitle = new Array(
    "Gob Dog Stand",
    "Freedom Burger Diner"
)

const foodStoreDesc = new Array(
    "Gob Dog Salesman:\nHot giggity gob diggity dog welcome to Gob Dogs how may I help you\n\n",
    "Cheeseburger Freedom Man:\nYA WANT A BURGER??? I GOT BURGERS!!!\n\n"
)


function openFoodStoreMenu(storeID, player) {

    const mainTitle = foodStoreTitle[storeID]
    const mainDesc = foodStoreDesc[storeID]


    let form = new ActionFormData();
    form.title(mainTitle);
    form.body(mainDesc);
    for (var i = 0; i < foodShopLength[storeID]; i++) {
        var foodShopList = new Array(
            goblinShopItemList[i],
            freedomShopItemList[i]
        )
        if (storeID == 1 && i == 0) {
            form.button(`${itemNameList[foodShopList[storeID]]}\n${itemPrices[foodShopList[storeID]]}`, itemIconLocation[foodShopList[storeID]])
        }
        

    }
    for (var i = 0; i < bundleShopLength[storeID]; i++) {
        var foodShopList = new Array(
            goblinShopBundleList[i],
            0
        )
        form.button(`${itemBundleNameList[foodShopList[storeID]]}\n${itemBundleCostList[foodShopList[storeID]]}`, itemBundleIconList[foodShopList[storeID]])

    }
    if (storeID == 0) {
        form.button(`Gob Goo\n0`, "textures/items/foods/gob_goo")
    }
    form.button("Cancel", "textures/ui/button_close");

    form.show(player).then(r => {
        if (storeID == 0) {


            let responseValue = r.selection
            if (responseValue == 0) {
                system.run(() => PurchaseItem(player, 0, false, itemPrices[0], itemNameList[0], itemDescList[0], storeID))
            }
            else if (responseValue == 1) {
                system.run(() => PurchaseItem(player, 1, false, itemPrices[1], itemNameList[1], itemDescList[1], storeID))
            }
            else if (responseValue == 2) {
                system.run(() => PurchaseItem(player, 0, true, itemBundleCostList[0], itemBundleNameList[0], itemBundleDescList[0], storeID))
            }
            else if (responseValue == 3) {
                system.run(() => PurchaseItem(player, 1, true, itemBundleCostList[1], itemBundleNameList[1], itemBundleDescList[1], storeID))
            }
            else if (responseValue == 4) {
                system.run(() => GobGooed(player))
            }
            else {
                player.runCommand("tp @s ~-1 ~-1 ~")
                player.removeTag("seated")
            }

        }
        else if (storeID == 1) {
            let responseValue = r.selection
            if (responseValue == 0) {
                system.run(() => PurchaseItem(player, 2, false, itemPrices[2], itemNameList[2], itemDescList[2], storeID))
            }
            else {
                player.runCommand("tp @s ~ ~ ~1")
                player.removeTag("seated")
            }

        }


    })
}

function PurchaseItem(player, selectedItem, isBundle, itemCost, titleSub, desc, storeID) {
    const currency = world.scoreboard.getObjective("credits")
    const currencyCount = currency.getScore(player)




    var title = `Purchase `
    title = title + titleSub


    let form = new ActionFormData();
    form.title(title);



    desc = desc + `§fPrice: ${itemCost}\n\nPlease select a payment method:\n\n`


    form.body(desc);


    if (selectedItem < 2) {
        form.button("Use Personal Credits \n" + currencyCount + "", "textures/ui/button_currency");


    }
    else {
        if (currencyCount < itemCost) {
            form.button("Insufficient Personal Credits!\n" + currencyCount + "", "textures/ui/button_currency");
        }
        else {
            form.button("Use Personal Credits \n" + currencyCount + "", "textures/ui/button_currency");
        }


    }





    form.button("Back", "textures/ui/button_back");


    form.show(player).then(r => {

        let responseValue = r.selection

        if (storeID == 0) {
            if (responseValue == 0) {
                if (currencyCount < itemCost) {
                    player.runCommand("function not_enough_money_gob_shop")
                }
                else if (!isBundle) {
                    player.runCommand(`scoreboard players add @s ${itemScoreboard[selectedItem]} 1`)
                    currency.addScore(player, -itemCost)
                    player.sendMessage(`§e[Food Purchase]§a ${itemNameList[selectedItem]} purchased.`)

                    player.runCommand("tp @s ~-1 ~-1 ~")
                    player.removeTag("seated")
                }
                else {
                    player.runCommand(`scoreboard players add @s ${itemScoreboard[selectedItem]} 10`)
                    currency.addScore(player, -itemCost)
                    player.runCommand(`${itemBundleFunctionList[selectedItem]}`)
                    player.sendMessage(`§e[Bundle Purchase]§a ${itemBundleNameList[selectedItem]} purchased.\n(+ ${itemNameList[selectedItem]} x10)`)
                    player.runCommand("tp @s ~-1 ~-1 ~")
                    player.removeTag("seated")
                }
            }
            else {
                player.removeTag("seated")
            }
        }
        else if (storeID == 1) {
            if (responseValue == 0) {
                if (!isBundle) {
                    player.runCommand(`scoreboard players add @s ${itemScoreboard[selectedItem]} 1`)
                    currency.addScore(player, -itemCost)
                    player.sendMessage(`§e[Food Purchase]§a ${itemNameList[selectedItem]} purchased.`)

                    player.runCommand("tp @s ~ ~ ~1")
                    player.removeTag("seated")
                }
                else {
                    player.runCommand(`scoreboard players add @s ${itemScoreboard[selectedItem]} 10`)
                    currency.addScore(player, -itemCost)
                    player.runCommand(`${itemBundleFunctionList[selectedItem]}`)
                    player.sendMessage(`§e[Bundle Purchase]§a ${itemBundleNameList[selectedItem]} purchased.\n(+ ${itemNameList[selectedItem]} x10)`)
                    player.runCommand("tp @s ~ ~ ~1")
                    player.removeTag("seated")
                }
            }
            else {
                player.removeTag("seated")
            }
        }


    })

}

function GobGooed(player) {
    player.runCommand("function gob_goo_anim_in")
}