export {laptopEvents, settingList }

class SettingLaptop{

    constructor(settingName, isToggle, numberRange, coordinates, scoreboardName, scoreboardPlrName, defaultNumber) {
        this.settingName = settingName
        this.isToggle = isToggle
        this.numberRange = numberRange
        this.coordinates = coordinates
        this.scoreboardName = scoreboardName
        this.scoreboardPlrName = scoreboardPlrName
        this.defaultNumber = defaultNumber
    }


}

const laptopEvents = [
    "sm:add_$NUM", //0-10
    "sm:add_enabled",
    "sm:add_disabled"
]

const settingList = [
    new SettingLaptop("Max Wins", false, [1, 2, 3, 4, 5, 6, 7, 8, 9], { x: 111, y: 14, z: 17 }, "max_wins", "max_wins", 3),
    new SettingLaptop("Max Lives", false, [1, 2, 3, 4, 5, 6, 7, 8, 9], { x: 111, y: 14, z: 11 }, "max_lives", "max_lives", 3),
    new SettingLaptop("Speed", false, [0, 1, 2, 3, 4], { x: 107, y: 13, z: 17 }, "speed_level", "speed_level", 2),
    new SettingLaptop("Jump Boost", false, [0, 1, 2, 3, 4], { x: 107, y: 13, z: 15 }, "jump_boost_level", "jump_boost_level", 3),
    new SettingLaptop("Slow Falling", false, [0, 1, 2, 3, 4], { x: 107, y: 13, z: 13 }, "slow_fall_level", "slow_fall_level", 0),
    new SettingLaptop("Darkness", false, [0, 1, 2, 3, 4], { x: 107, y: 13, z: 11 }, "darkness_level", "darkness_level", 0),
    new SettingLaptop("Max Dashes", false, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { x: 103, y: 14, z: 17 }, "max_dashes", "max_dashes", 10),
    new SettingLaptop("Dash Power", false, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { x: 103, y: 14, z: 15 }, "dash_strength", "dash_strength", 1),
    new SettingLaptop("Minimum Dash Requirement", false, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], { x: 103, y: 14, z: 13 }, "minimum_dash_requirement", "minimum_dash_requirement", 1),
    new SettingLaptop("Abilities", true, [0, 1], { x: 103, y: 14, z: 11 }, "abilities_enabled", "abilities_enabled", 1),
    new SettingLaptop("Arena Vote Rerolls Enabled", true, [0, 1], { x: 110, y: 14, z: 29 }, "rerolls_enabled", "rerolls_enabled", 1),
    new SettingLaptop("Arena Vote Enabled", true, [0, 1], { x: 108, y: 14, z: 29 }, "arena_vote_enabled", "boolean", 1),
    new SettingLaptop("Zone Phases Enabled", true, [0, 1], { x: 106, y: 14, z: 28 }, "deathzone_enabled", "deathzone_enabled", 0),
    new SettingLaptop("Initial Zone Phase", true, [0, 1, 2], { x: 108, y: 14, z: 26 }, "deathzone_initial", "deathzone_initial", 0),
    new SettingLaptop("Enable Top Death Zone", true, [0, 1], { x: 108, y: 14, z: 24 }, "deathzone_top_enabled", "deathzone_top_enabled")

]