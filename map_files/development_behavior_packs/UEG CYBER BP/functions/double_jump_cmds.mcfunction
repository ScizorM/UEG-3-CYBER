#bridge-file-version: #33
#execute @a[tag=!flying,tag=dash_enabled,m=!c,tag=ingame] ~ ~ ~ 

#execute @a[tag=flying,tag=dash_enabled,m=!c,tag=ingame] ~ ~ ~ /gamemode adventure
#execute @a[tag=flying,tag=dash_enabled,m=!c,tag=ingame] ~ ~ ~ /gamemode survival
#execute @a[tag=flying,tag=dash_enabled,m=!c,tag=ingame] ~ ~ ~ /event entity @s sm:doublejump
#execute @a[tag=start_timer,tag=ingame] ~ ~ ~ scoreboard players add @s dash_ready_timer 1
#execute @a[scores={dash_ready_timer=40..},tag=ingame] ~ ~ ~ scoreboard players add @s dashes 1
#execute @a[scores={dash_ready_timer=40..},tag=ingame] ~ ~ ~ scoreboard players set @s dash_ready_timer 0
 
#tag @s add dash_enabled
 
tell @s incomplete
 
#execute @a[tag=!flying,tag=dash_enabled,m=!c,tag=mission] ~ ~ ~ ability @s mayfly false
#execute @a[tag=flying,tag=dash_enabled,m=!c,tag=mission] ~ ~ ~ /gamemode adventure
#execute @a[tag=flying,tag=dash_enabled,m=!c,tag=mission] ~ ~ ~ /gamemode survival
#execute @a[tag=flying,tag=dash_enabled,m=!c,tag=mission] ~ ~ ~ /event entity @s sm:doublejump
#execute @a[tag=start_timer,tag=mission] ~ ~ ~ scoreboard players add @s dash_ready_timer 1
#execute @a[scores={dash_ready_timer=40..},tag=mission] ~ ~ ~ scoreboard players add @s dashes 1
#execute @a[scores={dash_ready_timer=40..},tag=mission] ~ ~ ~ scoreboard players set @s dash_ready_timer 0
 
 
#execute @a[tag=!flying,tag=dash_enabled,m=!c,tag=tutorial] ~ ~ ~ ability @s mayfly false
#execute @a[tag=flying,tag=dash_enabled,m=!c,tag=tutorial] ~ ~ ~ /gamemode adventure
#execute @a[tag=flying,tag=dash_enabled,m=!c,tag=tutorial] ~ ~ ~ /gamemode survival
#execute @a[tag=flying,tag=dash_enabled,m=!c,tag=tutorial] ~ ~ ~ /event entity @s sm:doublejump
#execute @a[tag=start_timer,tag=tutorial] ~ ~ ~ scoreboard players add @s dash_ready_timer 1
#execute @a[scores={dash_ready_timer=40..},tag=tutorial] ~ ~ ~ scoreboard players add @s dashes 1
#execute @a[scores={dash_ready_timer=40..},tag=tutorial] ~ ~ ~ scoreboard players set @s dash_ready_timer 0