export {itemList, beginner0, beginner1, intermediate0, advanced0, intermediate1, intermediateTips, beginnerTips, advancedTips }


var itemList = ["sm:enhanced_platform_fabricator","sm:enhanced_charged_bolt_rifle","sm:teamless_landmine","enhanced_deep_striker"]

//first true/false is dashes enabled, second is abilities enabled, if second, check for ability override, after that, select ability to override with (yes I know this code is a war crime shut up) after that, check for time limit, and set time limit

var beginnerTips = ["To traverse this course, it may seem like it's possible to just jump down to the goal. While it seems like this, it's more likely to succeed if you use the Platform Fabricator supplied to you so you can spawn a platform below you while falling to get to the goal easier.", "To traverse this course, use the Rocket Jump ability and your dashes to get from platform to platform.\n\nRemember: sneak to trigger your rocket jump, and double tap jump to dash."]

var beginner0 = [-134, 35, 437, -134, 35, 436, ["B-1: Platform Fabricator Recovery Training", "Level B-1", false, false, "no_override", false, 0], "sm:enhanced_platform_fabricator"]
var beginner1 = [-156, 7, 415, -155, 7, 415, ["B-2: Rocket Jump Training", "Level B-2", true, true, "select_ability_rocket", false, 0]]

/*
* 0 - Platform Fabricator Recovery [COMPLETE]
* 
* 1 - Rocket Jump Training [COMPLETE]
*
* 2 - Beginner Movement Mechanics Training
*/
var intermediateTips = ["To traverse this course, use the Charged Bolt Rifle to launch yourself in the opposite direction that you are facing.\nIt will launch you even further if you are looking straight down.","To traverse this course, use The Deep Striker to launch yourself to the distant platforms.\nYou can do this by aiming at a wall and triggering the weapon, letting it turn around and shoot you.\nYou will go further if you do this while midair.\nUse the gaps in the distant walls as guides for where to aim, and be sure to jump and stand at the end of a ledge at times."]
var intermediate0 = [-134, 8, 459, -134, 8, 458, ["I-1: Charged Bolt Rifle Movement Training", "Level I-1", true, false, "no_override", false, 0], "sm:enhanced_charged_bolt_rifle"] 
var intermediate1 = [-111, 4, 460, -111, 4, 459, ["I-2: Deep Striker Movement Training", "Level I-2", false, false, "no_override", false, 0], "sm:enhanced_deep_striker"] 
/*
* 0 - Charged Bolt Rifle Movement Training [COMPLETE]
* 
* 1 - Deep Striker Movement Training
*
* 2 - Implosion Grenade Stalling <WARNING! IMPLEMENT TIMER!!!!>
*
* 3 - Bungee Anchor Training
*
* 4 - Intermediate Movement Mechanics Training
*/
var advancedTips = ["To traverse this course, use the collection of recovery/movement-oriented weapons/items to your advantage.\n\nIf you're stuck, the method to complete this course is to fall, spawn a platform below you, spawn a landmine, jump, then look down and punch the landmine, and then finally after being launched upwards by the landmine look down and use the Charged Bolt Rifle to launch yourself the rest of the way up.\n\nLook out for headbumps though..."]
var advanced0 = [-111, 35, 437, -112, 35, 437, ["A-1: Advanced Item Recovery Training", "Level A-1", true, true, "select_ability_rocket", false, 0], "sm:enhanced_platform_fabricator", "sm:teamless_landmine","sm:enhanced_charged_bolt_rifle"] 
/*
* 0 - Platform & Landmine Combo Training
*
* 1 - Charged Bolt Rifle & Deep Striker Combo Training
*
*/

/*
*
* Slot 1-3: Start coords
* Slot 4-6: Facing
* Slot 7: Name
*
*/