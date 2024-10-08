#bridge-file-version: #0
 
##tutorial part 2
xp -100L @a[tag=tutorial_pt0]
scoreboard players set @a[tag=tutorial_pt0] dashes 0
ability @a[tag=tutorial_pt0] mayfly false
execute @a[tag=tutorial_pt0,scores={tutorial_dialogue_timer=100}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Welcome to §athe Cyber Military!"}]}
execute @a[tag=tutorial_pt0,scores={tutorial_dialogue_timer=200}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"In this section, §eyou will learn about the basic structure of this map's gameplay."}]}
execute @a[tag=tutorial_pt0,scores={tutorial_dialogue_timer=400}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"First and foremost, §cthis map is a player versus player map, and it may be challenging for players who are not experienced with Minecraft's controls."}]}
execute @a[tag=tutorial_pt0,scores={tutorial_dialogue_timer=600}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"This map §abuilds upon the basic features of Minecraft to add more complexity to the combat§r, so it is §chighly recommended§r to have moderate experience in such."}]}
execute @a[tag=tutorial_pt0,scores={tutorial_dialogue_timer=800}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"You will have the opportunity to §elearn more about these new features later on in this tutorial§r. For now, §alet's focus on the main premise of the map."}]}
execute @a[tag=tutorial_pt0,scores={tutorial_dialogue_timer=1000}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"In this map, you are §cplaced in an arena surrounded by indestructible walls, §agiven a variety of (mostly explosive) weapons, §eand set with the goal of using your loadout of weapons to launch the opposing team in the void."}]}
execute @a[tag=tutorial_pt0,scores={tutorial_dialogue_timer=1200}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"The teams you can choose in this map are §cTeam Nu§r and §dTeam Lambda§r - neither team give any particular benefit to choose, so it all comes down to preference to which team you choose before the round starts."}]}
execute @a[tag=tutorial_pt0,scores={tutorial_dialogue_timer=1400}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Now that you know the main premise of the map, let's get you started with the many gameplay mechanics!"}]}
execute @a[tag=tutorial_pt0,scores={tutorial_dialogue_timer=1600}] ~ ~ ~ function tutorial_act1
##tutorial part 1
xp -100L @a[tag=tutorial_pt1]
execute @a[tag=tutorial_pt1,scores={tutorial_dialogue_timer=100}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Welcome to your first test chamber!"}]}
execute @a[tag=tutorial_pt1,scores={tutorial_dialogue_timer=160}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"In the next few sections, you will learn the basic mechanics in your armor!"}]}
execute @a[tag=tutorial_pt1,scores={tutorial_dialogue_timer=240}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"To begin, let's focus on the §eyellow bar§r you can see §eright above the center of your hotbar."}]}
execute @a[tag=tutorial_pt1,scores={tutorial_dialogue_timer=340}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"This is your §eDash Meter."}]}
execute @a[tag=tutorial_pt1,scores={tutorial_dialogue_timer=390}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"The §eDash Meter §rallows you to see how many §edashes §ryou currently have."}]}
execute @a[tag=tutorial_pt1,scores={tutorial_dialogue_timer=460}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§eDashes §ruse your rocket thrusters to §ecross large gaps."}]}
execute @a[tag=tutorial_pt1,scores={tutorial_dialogue_timer=540}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"To trigger a dash, §edouble press jump while moving forwards."}]}
execute @a[tag=tutorial_pt1,scores={tutorial_dialogue_timer=620}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Try it now! §eDash over this gap by triggering a dash while sprinting!"}]}
execute @a[tag=tutorial_pt1,scores={tutorial_dialogue_timer=700}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Once you have crossed the gap, step on the §cglowing block§r on the other side to continue."}]}
##tutorial part 2
xp -100L @a[tag=tutorial_pt2]
execute @a[tag=tutorial_pt2,scores={tutorial_dialogue_timer=100}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"One key component of the dash system is how §edashes regenerate."}]}
execute @a[tag=tutorial_pt2,scores={tutorial_dialogue_timer=160}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"You may have noticed already, but §eeach time you use a dash, you lose a dash from your meter."}]}
execute @a[tag=tutorial_pt2,scores={tutorial_dialogue_timer=240}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§eThese dashes you lose are replenished over time§r, though."}]}
execute @a[tag=tutorial_pt2,scores={tutorial_dialogue_timer=340}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Use the dashes wisely, §eyou never know when you might need them most."}]}
execute @a[tag=tutorial_pt2,scores={tutorial_dialogue_timer=420}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"To continue, §ecomplete the course. §aHint: dashes have no cooldown as long as you have the amount you want to use already charged, you can use them back to back."}]}
##tutorial part 3
ability @a[tag=tutorial_pt3] mayfly false
scoreboard players set @a[tag=tutorial_pt3] dashes 0
execute @a[tag=tutorial_pt3,scores={tutorial_dialogue_timer=100}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"This section will focus on the §eAbility System."}]}
execute @a[tag=tutorial_pt3,scores={tutorial_dialogue_timer=180}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Your §eAbility Indicator§r can be seen at the top right of your hotbar."}]}
execute @a[tag=tutorial_pt3,scores={tutorial_dialogue_timer=260}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"The indicator turns §7gray §rwhenever your ability is not charged, and §fwhite §rwhen it is charged."}]}
execute @a[tag=tutorial_pt3,scores={tutorial_dialogue_timer=350}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Abilities recharge over time, so feel free to use them as much as you'd like!"}]}
execute @a[tag=tutorial_pt3,scores={tutorial_dialogue_timer=450}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"There are many abilities you can choose from, but in this instance we will use the §eRocket Jump§r ability."}]}
execute @a[tag=tutorial_pt3,scores={tutorial_dialogue_timer=550}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"To trigger your ability, §epress your sneak key."}]}
execute @a[tag=tutorial_pt3,scores={tutorial_dialogue_timer=620}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"To proceed, §eutilize the rocket jump to propel yourself through the course. §cYour dash system is temporarily disabled for this section."}]}
execute @a[tag=tutorial_pt3,scores={tutorial_dialogue_timer=740}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§eHint 1: the rocket jump doesn't trigger immediately, so you can move in a certain direction before it explodes to launch yourself further."}]}
execute @a[tag=tutorial_pt3,scores={tutorial_dialogue_timer=840}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§eHint 2: sprint jumping launches you even further."}]}
##tutorial part 4
ability @a[tag=tutorial_pt4,m=!c] mayfly false
scoreboard players set @a[tag=tutorial_pt4] dashes 0
xp -100L @a[tag=tutorial_pt4]
scoreboard players set @a[tag=tutorial_pt4] lives 99
execute @a[tag=tutorial_pt4,scores={tutorial_dialogue_timer=100}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Moving on, I will now explain the §elives system."}]}
execute @a[tag=tutorial_pt4,scores={tutorial_dialogue_timer=180}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Every round you are given a §epre-determined number of lives, and when you run out, §cyou die."}]}
execute @a[tag=tutorial_pt4,scores={tutorial_dialogue_timer=260}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"During rounds, §eyou can see your life counter at the top left of your hotbar."}]}
execute @a[tag=tutorial_pt4,scores={tutorial_dialogue_timer=350}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"The only way to lose lives is to §cfall to the bottom of the arena, where the red blocks seen in front of you can be found."}]}
execute @a[tag=tutorial_pt4,scores={tutorial_dialogue_timer=450}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"When you touch the red blocks with lives remaining, §eyou will be respawned at the top of the arena with slow falling and one less life."}]}
execute @a[tag=tutorial_pt4,scores={tutorial_dialogue_timer=550}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Try this now - §cfall into the pit of red blocks to be teleported to the other side, §ewhere you can step on the red glowing block to proceed."}]}
##tutorial part 5
ability @a[tag=tutorial_pt5,m=!c] mayfly true
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=100}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"This segment is focused on the §eweapon sandbox featured in this map."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=350}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"You can have up to §ethree custom or preset loadouts§r in this map that you can §eselect from before each round."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=500}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"To select your custom loadouts or to select a developer-curated pre-made loadout, §ego to the §aloadout editor§e in the lobby after the tutorial. - Note: only the default and custom loadout is available right now."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=750}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Until you do so, §call three of your loadout slots will be set to the default loadout."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=900}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Once you enter the loadout editor,§e you will be taught how to create loadouts - we will not focus on that here. - Note: this is not implemented yet, just read the signs in the loadout store"}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=1150}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Moving on, the weapon types are as follows:"}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=1200}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§c - Focusing on close-combat, these weapons are typically very powerful at the cost of a restricted range."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=1300}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§d - Weapons that can take out enemies from afar."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=1400}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§s - Tools that can help with preventing yourself from losing while potentially affecting opponents."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=1500}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§a - Tools that can be strategically set to be used against your opponents to catch them off guard."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=1700}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Now that you know all of the weapon types, §etry out the weapon in that display case!"}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=1900}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"To get the item out of the display case, §einteract with the case and select the §aGive Item§e button."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=2100}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Once you are done experimenting, step on the §eglowing red block §rto continue."}]}
execute @a[tag=tutorial_pt5,scores={tutorial_dialogue_timer=5000}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§6 - Look for them."}]}
##tutorial part 6
ability @a[tag=tutorial_pt6,m=!c] mayfly false
xp -100L @a[tag=tutorial_pt6]
scoreboard players set @a[tag=tutorial_pt6] dashes 0
execute @a[tag=tutorial_pt6,scores={tutorial_dialogue_timer=100}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"You're close to the end! This section will teach you one last thing, the currency of this map: §e (Credits)."}]}
execute @a[tag=tutorial_pt6,scores={tutorial_dialogue_timer=250}] ~ ~ ~ tellraw @s {"rawtext":[{"text":" are §eearned by winning rounds and games as a whole, and §acan be used to purchase §dcosmetics, arenas, weapons, and much more. (Not many uses in early access)"}]}
execute @a[tag=tutorial_pt6,scores={tutorial_dialogue_timer=400}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"To see how many  you have, §echeck the top left of your hotbar when you are not in a match."}]}
execute @a[tag=tutorial_pt6,scores={tutorial_dialogue_timer=550}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"That's all you need to know for now! One more thing, though..."}]}
execute @a[tag=tutorial_pt6,scores={tutorial_dialogue_timer=650}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"This map is in early development, so there may be some bugs. If you'd like to give us feedback or even ideas on what to add, join our Discord Server. §aCode: https://discord.gg/x2JzsuUQyr"}]}
execute @a[tag=tutorial_pt6,scores={tutorial_dialogue_timer=800}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"That's all from me! Teleporting to lobby..."}]}
execute @a[tag=tutorial_pt6,scores={tutorial_dialogue_timer=900}] ~ ~ ~ function tutorial_end