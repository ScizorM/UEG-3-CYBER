export {quest0Currency, quest1Currency, quest2Currency, quest0Data, quest1Data, quest2Data, otherOptions, questCategories, quest0Requirement, quest1Requirement, quest3Currency, quest3Data, quest3Requirement }

var quest0Data = { name: "Game Winner", description: "Win the specified number of games to earn this advancement." }

var quest1Data = { name: "Round Winner", description: "Win the specified number of rounds to earn this advancement." }

var quest2Data = [{ name: "Extreme Recovery", description: "Launch yourself from the bottom of the arena to the top within five seconds." }, { name: "Death's Escapee", description: "Barely evade death from the lower death barrier ten times in one round." }, {name: "Winstreak Tryhard", description: "Win five consecutive games."}]

var quest3Data = { name: "Skin Collector", description: "Unlock the specified number of skins to earn this advancement." }

var quest0Currency = [5, 5, 5, 10, 10, 10, 25, 50]

var quest0Requirement = [1, 5, 10, 20, 30, 40, 50, 100]

var quest1Requirement = [1, 5, 10, 50, 100, 500]

var quest1Currency = [5, 5, 5, 10, 25, 50]

var quest2Currency = [10, 20, 50]

var quest3Requirement = [1,5,20,50]

var quest3Currency = [5, 5, 10, 30]

var quest4Requirement = [1, 5, 20, 50]

var quest4Currency = [5, 5, 10, 30]

var otherOptions = [{ icon: "textures/ui/button_bg", name: "Player Stats" }]

var questCategories = [{ icon: "textures/ui/button_bg", name: "Game Wins" }, { icon: "textures/ui/button_bg", name: "Round Wins" }, { icon: "textures/ui/button_bg", name: "Expert Missions" }, { icon: "textures/ui/button_bg", name: "Cosmetic Unlocks" }, { icon: "textures/ui/button_bg", name: "Training Goals" }, { icon: "textures/ui/button_bg", name: "Playtime Goals" }]