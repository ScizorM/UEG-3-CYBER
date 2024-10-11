import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'
import { skinList, designerList, skinSet, skinSet_over, skinFileLoc } from './skinList.js'
import { clsM, bacM } from './arenaSelects.js'

world.beforeEvents.itemUse.subscribe(data => {

    const player = data.source




    if (data.itemStack.typeId === "sm:settings" && player.hasTag("enter_splendid") == true) {

        system.run(() => skinCategoryInit(player))

    }
})

function skinCategoryInit(player) {
    let form = new ActionFormData();
    form.title("Series Select")
    form.body("Select a Series:\n")
    form.button("UEG CYBER Originals [2024]", "textures/ui/button_cyber");
    form.button("UEG (Legacy) [2020-22]", "textures/ui/button_ueg1");
    form.button("RPG Game Series [2020-23]", "textures/ui/button_rpg1");
    form.button("Close", "textures/ui/button_close");
    form.show(player).then(r => {

        let responseVal = r.selection


        if (responseVal == 0) {
            system.run(() => skinCategoryUEGC(player))
        }
        else if (responseVal == 1) {

        }
        else if (responseVal == 2) {

        }

    })
}

function skinCategoryUEGC(player) {

    var selectedCPack = 0

    var secretsUnlocked = 0

    let form = new ActionFormData();
    form.title("... > UEG CYBER Originals")
    form.body("Select a Collection:\n")//13-17 are secret, remove from list, goes up to 20 but they are legacy
    form.button(skinSet_over[1], skinFileLoc[1]);
    form.button(skinSet_over[2], skinFileLoc[2]);
    form.button(skinSet_over[3], skinFileLoc[3]);
    form.button(skinSet_over[4], skinFileLoc[4]);
    form.button(skinSet_over[5], skinFileLoc[5]);
    form.button(skinSet_over[6], skinFileLoc[6]);
    form.button(skinSet_over[7], skinFileLoc[7]);
    form.button(skinSet_over[8], skinFileLoc[8]);
    form.button(skinSet_over[9], skinFileLoc[9]);
    form.button(skinSet_over[10], skinFileLoc[10]);
    form.button(skinSet_over[11], skinFileLoc[11]);
    form.button(skinSet_over[12], skinFileLoc[12]);
    if (player.hasTag("spack_secret_freedom")) {
        secretsUnlocked += 1
        form.button(skinSet_over[13], skinFileLoc[13]);
    }
    if (player.hasTag("spack_secret_s")) {
        secretsUnlocked += 1
        form.button(skinSet_over[14], skinFileLoc[14]);
    }
    if (player.hasTag("spack_secret_dev")) {
        secretsUnlocked += 1
        form.button(skinSet_over[15], skinFileLoc[15]);
    }
    if (player.hasTag("spack_secret_specialThanks")) {
        secretsUnlocked += 1
        form.button(skinSet_over[16], skinFileLoc[16]);
    }
    if (player.hasTag("spack_secret_earlyS")) {
        secretsUnlocked += 1
        form.button(skinSet_over[17], skinFileLoc[17]);
    }
    form.button("Back", "textures/ui/button_back");
    form.button("Close", "textures/ui/button_close");
    form.show(player).then(r => {

        let responseVal = r.selection



        switch (responseVal) {
            case 0:
                selectedCPack = 1
                break;
            case 1:
                selectedCPack = 2
                break;
            case 2:
                selectedCPack = 3
                break;
            case 3:
                selectedCPack = 4
                break;
            case 4:
                selectedCPack = 5
                break;
            case 5:
                selectedCPack = 6
                break;
            case 6:
                selectedCPack = 7
                break;
            case 7:
                selectedCPack = 8
                break;
            case 8:
                selectedCPack = 9
                break;
            case 9:
                selectedCPack = 10
                break;
            case 10:
                selectedCPack = 11
                break;
            case 11:
                selectedCPack = 12
                break;
            case 12:
                if (secretsUnlocked == 0) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_freedom")) {

                }
                else if (player.hasTag("spack_secret_freedom") == false && player.hasTag("spack_secret_s")) {

                }
                else if (player.hasTag("spack_secret_freedom") == false && player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev")) {

                }
                else if (player.hasTag("spack_secret_freedom") == false && player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks")) {

                }
                else if (player.hasTag("spack_secret_freedom") == false && player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS")) {

                }
                break;
            case 13:

                if (secretsUnlocked == 1) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_s")) {

                }
                else if (player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev")) {

                }
                else if (player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks")) {

                }
                else if (player.hasTag("spack_secret_s") == false && player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS")) {

                }
                break;
            case 14:
                if (secretsUnlocked == 2) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_dev")) {

                }
                else if (player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks")) {

                }
                else if (player.hasTag("spack_secret_dev") == false && player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS")) {

                }
                break;
            case 15:
                if (secretsUnlocked == 3) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_specialThanks")) {

                }
                else if (player.hasTag("spack_secret_specialThanks") == false && player.hasTag("spack_secret_earlyS")) {

                }
                break;
            case 16:
                if (secretsUnlocked == 4) {
                    system.run(() => skinCategoryInit(player))
                }
                else if (player.hasTag("spack_secret_earlyS")) {

                }
                break;
            case 17:
                if (secretsUnlocked == 5) {
                    system.run(() => skinCategoryInit(player))
                }
                break;

        }

    })
}