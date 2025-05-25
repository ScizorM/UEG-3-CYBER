#bridge-file-version: #134
function enforcer_tick_cmds
##using this for NPC stuff too, Mojang programmed their NPC system in a way where /execute doesn't work with NPCs which is absolutely ridiculous so I have to do this
execute @a[tag=dialogue_gob_shop] ~ ~ ~ function dialogue_gob_shop
 
execute @a[tag=dialogue_cheeseburger] ~ ~ ~ function dialogue_cheeseburger
 
kill @e[type=falling_block]
 
scoreboard players add @a[tag=tutorial] tutorial_dialogue_timer 1
 
effect @a[tag=!ingame,tag=!tutorialwall,tag=!tutorial] weakness 1 255 true
 
##weaponselect
 
 
 
function weaponSelectTicks
 
function deleteBannedItems
function _extended_ticks
function repulsion_cmds
 
 
 
execute @r[tag=tutorial] ~ ~ ~ function tutorial_ticks
 