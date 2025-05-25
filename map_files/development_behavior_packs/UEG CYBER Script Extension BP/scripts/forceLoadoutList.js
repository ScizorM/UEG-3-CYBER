export {fishMode, juggernautMode,legacyMode,spleefMode,tntMode,sumoMode }

class loadoutSystem {
    //loadoutIDCollection: collection of 9 slots with the id of the item you need
    //applyToTeams: 2 slots - [nu,lambda]
    constructor(loadoutIDCollection,applyToTeams) {
        this.loadoutIDCollection = loadoutIDCollection
        this.applyToTeams = applyToTeams
    }
}

const fishMode = new loadoutSystem([0, 0, 0, 0, 33, 0, 0, 0, 0], {nu: true, lambda: true})

const juggernautMode = new loadoutSystem([0, 0, 0, 0, 34, 0, 0, 0, 0], { nu: true, lambda: false })

const legacyMode = new loadoutSystem([9, 3, 4, 5, 7, 8, 0, 0, 0], { nu: true, lambda: true })

const spleefMode = new loadoutSystem([0, 0, 0, 0, 4, 0, 0, 0, 0], { nu: true, lambda: true })

const tntMode = new loadoutSystem([5, 7, 13, 2, 0, 0, 0, 0, 0], { nu: true, lambda: true })

const sumoMode = new loadoutSystem([0, 0, 0, 0, 4, 0, 0, 0, 0], { nu: true, lambda: true })

