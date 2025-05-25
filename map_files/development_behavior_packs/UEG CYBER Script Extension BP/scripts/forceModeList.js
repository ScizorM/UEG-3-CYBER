import { fishMode, juggernautMode, legacyMode, spleefMode, tntMode, sumoMode } from "./forceLoadoutList.js"
export { modeList }

class modeSystem {
    //loadoutIDCollection: collection of 9 slots with the id of the item you need
    //applyToTeams: 2 slots - [nu,lambda]
    constructor(basicSettings, potionEffects, movementSettings, zoneSettings, miscSettings, displayName) {
        this.basicSettings = basicSettings
        this.potionEffects = potionEffects
        this.movementSettings = movementSettings
        this.zoneSettings = zoneSettings
        this.miscSettings = miscSettings
        this.displayName = displayName

    }
}

/*

events to do:
- tntRain, randomPotions, tntTrail


*/

const tntRain = 0
const randomPotions = 1
const tntTrail = 2

const defaultModeSettings = new modeSystem(
    { maxWins: 2, maxLives: 3 },
    { speed: 2, jumpBoost: 3, slowFalling: 0, darkness: 0 },
    { maxDashes: 10, dashPower: 1, minDashReq: 1, abilities: true },
    { zonePhases: false, initZonePhase: 0, topDeathZone: true },
    { forceLoadout: false, loadoutData: undefined, randomEvents: false, eventTime: undefined, randomEventData: undefined, perTeamPlayerLimit: false, nuLimit: undefined, lambdaLimit: undefined },
    "Default")

const legacyModeSettings = new modeSystem(
    { maxWins: 3, maxLives: 1 },
    { speed: 2, jumpBoost: 3, slowFalling: 0, darkness: 0 },
    { maxDashes: 0, dashPower: 0, minDashReq: 1, abilities: false },
    { zonePhases: false, initZonePhase: 0, topDeathZone: false },
    { forceLoadout: true, loadoutData: legacyMode, randomEvents: false, eventTime: undefined, randomEventData: undefined, perTeamPlayerLimit: false, nuLimit: undefined, lambdaLimit: undefined },
    "Legacy Mode")

const compModeSettings = new modeSystem(
    { maxWins: 3, maxLives: 2 },
    { speed: 2, jumpBoost: 3, slowFalling: 0, darkness: 0 },
    { maxDashes: 10, dashPower: 1, minDashReq: 2, abilities: true },
    { zonePhases: true, initZonePhase: 0, topDeathZone: true },
    { forceLoadout: false, loadoutData: undefined, randomEvents: false, eventTime: undefined, randomEventData: undefined, perTeamPlayerLimit: true, nuLimit: 3, lambdaLimit: 3 },
    "Competitive Mode")

const crazyModeSettings = new modeSystem(
    { maxWins: 2, maxLives: 5 },
    { speed: 4, jumpBoost: 4, slowFalling: 0, darkness: 0 },
    { maxDashes: 10, dashPower: 5, minDashReq: 1, abilities: true },
    { zonePhases: true, initZonePhase: 2, topDeathZone: true },
    { forceLoadout: false, loadoutData: undefined, randomEvents: true, eventTime: 3, randomEventData: [tntRain, randomPotions], perTeamPlayerLimit: false, nuLimit: undefined, lambdaLimit: undefined },
    "Crazy Mode")

const classicSpleefModeSettings = new modeSystem(
    { maxWins: 3, maxLives: 1 },
    { speed: 1, jumpBoost: 1, slowFalling: 0, darkness: 0 },
    { maxDashes: 0, dashPower: 1, minDashReq: 1, abilities: false },
    { zonePhases: false, initZonePhase: 0, topDeathZone: false },
    { forceLoadout: true, loadoutData: spleefMode, randomEvents: false, eventTime: undefined, randomEventData: undefined, perTeamPlayerLimit: false, nuLimit: undefined, lambdaLimit: undefined },
    "Spleef")

const spleefNoveauSettings = new modeSystem(
    { maxWins: 1, maxLives: 1 },
    { speed: 2, jumpBoost: 3, slowFalling: 0, darkness: 0 },
    { maxDashes: 10, dashPower: 1, minDashReq: 1, abilities: true },
    { zonePhases: false, initZonePhase: 0, topDeathZone: true },
    { forceLoadout: false, loadoutData: undefined, randomEvents: true, eventTime: 1, randomEventData: [tntTrail], perTeamPlayerLimit: false, nuLimit: undefined, lambdaLimit: undefined },
    "Spleef Noveau")

const tntSurvivalSettings = new modeSystem(
    { maxWins: 1, maxLives: 1 },
    { speed: 2, jumpBoost: 3, slowFalling: 0, darkness: 0 },
    { maxDashes: 3, dashPower: 1, minDashReq: 1, abilities: true },
    { zonePhases: false, initZonePhase: 0, topDeathZone: true },
    { forceLoadout: true, loadoutData: tntMode, randomEvents: true, eventTime: 3, randomEventData: [0], perTeamPlayerLimit: false, nuLimit: undefined, lambdaLimit: undefined },
    "TNT Survival")

const roboSumoSettings = new modeSystem(
    { maxWins: 2, maxLives: 1 },
    { speed: 3, jumpBoost: 4, slowFalling: 0, darkness: 0 },
    { maxDashes: 10, dashPower: 2, minDashReq: 2, abilities: true },
    { zonePhases: false, initZonePhase: 0, topDeathZone: true },
    { forceLoadout: true, loadoutData: sumoMode, randomEvents: false, eventTime: undefined, randomEventData: undefined, perTeamPlayerLimit: false, nuLimit: undefined, lambdaLimit: undefined },
    "Robo Sumo")

const fishModeSettings = new modeSystem(
    { maxWins: 3, maxLives: 1 },
    { speed: 2, jumpBoost: 3, slowFalling: 0, darkness: 0 },
    { maxDashes: 10, dashPower: 1, minDashReq: 1, abilities: true },
    { zonePhases: false, initZonePhase: 0, topDeathZone: true },
    { forceLoadout: true, loadoutData: fishMode, randomEvents: false, eventTime: undefined, randomEventData: undefined, perTeamPlayerLimit: false, nuLimit: undefined, lambdaLimit: undefined },
    "Aero Joust Fish Mode")

const juggernautSettings = new modeSystem(
    { maxWins: 1, maxLives: 1 },
    { speed: 2, jumpBoost: 3, slowFalling: 0, darkness: 0 },
    { maxDashes: 10, dashPower: 1, minDashReq: 1, abilities: true },
    { zonePhases: true, initZonePhase: 0, topDeathZone: true },
    { forceLoadout: true, loadoutData: juggernautMode, randomEvents: false, eventTime: undefined, randomEventData: undefined, perTeamPlayerLimit: true, nuLimit: 1, lambdaLimit: undefined },
    "Juggernaut Mode")


const modeList =
    [defaultModeSettings, //0 
        legacyModeSettings, //1
        compModeSettings, //2
        crazyModeSettings, //3
        classicSpleefModeSettings, //4
        spleefNoveauSettings, //5
        tntSurvivalSettings, //6
        roboSumoSettings, //7
        fishModeSettings, //8
        juggernautSettings] //9
