#bridge-file-version: #77
##Respawned####################
execute as @a[scores={title_timer=0},tag=title_respawned] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_respawned] run title @s subtitle update§k§0RESPAWNED
execute as @a[scores={title_timer=2},tag=title_respawned] run title @s subtitle update§k§1RESPAWNED
execute as @a[scores={title_timer=3},tag=title_respawned] run title @s subtitle update§k§3RESPAWNED
execute as @a[scores={title_timer=4},tag=title_respawned] run title @s subtitle update§bRESPAWNED
execute as @a[scores={title_timer=30},tag=title_respawned] run title @s subtitle update§k§3RESPAWNED
execute as @a[scores={title_timer=31},tag=title_respawned] run title @s subtitle update§k§1RESPAWNED
execute as @a[scores={title_timer=32},tag=title_respawned] run title @s subtitle update§k§0RESPAWNED
execute as @a[scores={title_timer=33},tag=title_respawned] run title @s subtitle update
execute as @a[scores={title_timer=33..},tag=title_respawned] run hud @s reset crosshair
execute as @a[scores={title_timer=33..},tag=title_respawned] run tag @s remove titlea
execute as @a[scores={title_timer=33..},tag=title_respawned] run tag @s remove title_respawned
###############################
##321##########################
execute as @a[scores={title_timer=0},tag=title_321] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_321] run title @s subtitle update§k§03
execute as @a[scores={title_timer=2},tag=title_321] run title @s subtitle update§k§63
execute as @a[scores={title_timer=3},tag=title_321] run title @s subtitle update§k§g3
execute as @a[scores={title_timer=4},tag=title_321] run title @s subtitle update§e3
execute as @a[scores={title_timer=22},tag=title_321] run title @s subtitle update§k§g2
execute as @a[scores={title_timer=24},tag=title_321] run title @s subtitle update§e2
execute as @a[scores={title_timer=38},tag=title_321] run title @s subtitle update§k§71
execute as @a[scores={title_timer=40},tag=title_321] run title @s subtitle update§61
execute as @a[scores={title_timer=54},tag=title_321] run title @s subtitle update§k§4GO!
execute as @a[scores={title_timer=58},tag=title_321] run title @s subtitle update§cGO!
execute as @a[scores={title_timer=62},tag=title_321] run title @s subtitle update§k§4GO!
execute as @a[scores={title_timer=61},tag=title_321] run title @s subtitle update§k§5GO!
execute as @a[scores={title_timer=62},tag=title_321] run title @s subtitle update§k§0GO!
execute as @a[scores={title_timer=63},tag=title_321] run title @s subtitle update
execute as @a[scores={title_timer=64..},tag=title_321] run hud @s reset crosshair
execute as @a[scores={title_timer=64..},tag=title_321] run tag @s remove titlea
execute as @a[scores={title_timer=64..},tag=title_321] run tag @s remove title_321
###############################
##Azure Stadium##################
#
execute as @a[scores={title_timer=0},tag=title_azure] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_azure] run title @s subtitle update§k§0 Welcome to Azure Stadium!
execute as @a[scores={title_timer=2},tag=title_azure] run title @s subtitle update§k§1 Welcome to Azure Stadium!
execute as @a[scores={title_timer=3},tag=title_azure] run title @s subtitle update§k§3 Welcome to Azure Stadium!
execute as @a[scores={title_timer=4},tag=title_azure] run title @s subtitle update§b Welcome to Azure Stadium!
execute as @a[scores={title_timer=44},tag=title_azure] run title @s subtitle update§k§3 Welcome to Azure Stadium!
execute as @a[scores={title_timer=50},tag=title_azure] run title @s subtitle update§k§2PREGAME SETUP
execute as @a[scores={title_timer=52},tag=title_azure] run title @s subtitle update§aPREGAME SETUP
execute as @a[scores={title_timer=66},tag=title_azure] run title @s subtitle update§k§2PREGAME SETUP
execute as @a[scores={title_timer=68},tag=title_azure] run title @s subtitle update§k§3PREGAME SETUP
execute as @a[scores={title_timer=70},tag=title_azure] run title @s subtitle update§k§0PREGAME SETUP
execute as @a[scores={title_timer=72..},tag=title_azure] run title @s subtitle update
execute as @a[scores={title_timer=72..},tag=title_azure] run hud @s reset crosshair
execute as @a[scores={title_timer=72..},tag=title_azure] run tag @s remove titlea
execute as @a[scores={title_timer=72..},tag=title_azure] run tag @s remove title_azure
###############################
##Phase 01: Pre-Game##################
 
 
 
###############################
##GAME SET - Team Lambda Win Round, game reset
execute as @a[scores={title_timer=0},tag=title_lambdawin1] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_lambdawin1] run title @s subtitle update§k§0ROUND END
execute as @a[scores={title_timer=2},tag=title_lambdawin1] run title @s subtitle update§k§3ROUND END
execute as @a[scores={title_timer=3},tag=title_lambdawin1] run title @s subtitle update§k§2ROUND END
execute as @a[scores={title_timer=4},tag=title_lambdawin1] run title @s subtitle update§aROUND END
execute as @a[scores={title_timer=34},tag=title_lambdawin1] run /titleraw @s subtitle {"rawtext":[{"text":"update§k§4 "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §5 "},{"score":{"name":"team_lambda","objective":"team_wins_1_backup"}}]}
execute as @a[scores={title_timer=36},tag=title_lambdawin1] run /titleraw @s subtitle {"rawtext":[{"text":"update§c "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §d "},{"score":{"name":"team_lambda","objective":"team_wins_1_backup"}}]}
execute as @a[scores={title_timer=46},tag=title_lambdawin1] run /titleraw @s subtitle {"rawtext":[{"text":"update§k§4 "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §5 "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=48},tag=title_lambdawin1] run /titleraw @s subtitle {"rawtext":[{"text":"update§c "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §d "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=80},tag=title_lambdawin1] run title @s subtitle update§k§2PREGAME SETUP
execute as @a[scores={title_timer=82},tag=title_lambdawin1] run title @s subtitle update§aPREGAME SETUP
execute as @a[scores={title_timer=104},tag=title_lambdawin1] run title @s subtitle update§k§2PREGAME SETUP
execute as @a[scores={title_timer=105},tag=title_lambdawin1] run title @s subtitle update§k§3PREGAME SETUP
execute as @a[scores={title_timer=106},tag=title_lambdawin1] run title @s subtitle update§k§0PREGAME SETUP
execute as @a[scores={title_timer=107..},tag=title_lambdawin1] run title @s subtitle update
execute as @a[scores={title_timer=107..},tag=title_lambdawin1] run hud @s reset crosshair
execute as @a[scores={title_timer=107..},tag=title_lambdawin1] run tag @s remove titlea
execute as @a[scores={title_timer=107..},tag=title_lambdawin1] run tag @s remove title_lambdawin1
 
 
###############################
##GAME SET - Team Nu Win Round, game reset
 
 
execute as @a[scores={title_timer=0},tag=title_nuwin1] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_nuwin1] run title @s subtitle update§k§0ROUND END
execute as @a[scores={title_timer=2},tag=title_nuwin1] run title @s subtitle update§k§3ROUND END
execute as @a[scores={title_timer=3},tag=title_nuwin1] run title @s subtitle update§k§2ROUND END
execute as @a[scores={title_timer=4},tag=title_nuwin1] run title @s subtitle update§aROUND END
execute as @a[scores={title_timer=34},tag=title_nuwin1] run /titleraw @s subtitle {"rawtext":[{"text":"update§k§4 "},{"score":{"name":"team_nu","objective":"team_wins_1_backup"}},{"text":"  §5 "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=36},tag=title_nuwin1] run /titleraw @s subtitle {"rawtext":[{"text":"update§c "},{"score":{"name":"team_nu","objective":"team_wins_1_backup"}},{"text":"  §d "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=46},tag=title_nuwin1] run /titleraw @s subtitle {"rawtext":[{"text":"update§k§4 "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §5 "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=48},tag=title_nuwin1] run /titleraw @s subtitle {"rawtext":[{"text":"update§c "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §d "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=80},tag=title_nuwin1] run title @s subtitle update§k§2PREGAME SETUP
execute as @a[scores={title_timer=82},tag=title_nuwin1] run title @s subtitle update§aPREGAME SETUP
execute as @a[scores={title_timer=104},tag=title_nuwin1] run title @s subtitle update§k§2PREGAME SETUP
execute as @a[scores={title_timer=105},tag=title_nuwin1] run title @s subtitle update§k§3PREGAME SETUP
execute as @a[scores={title_timer=106},tag=title_nuwin1] run title @s subtitle update§k§0PREGAME SETUP
execute as @a[scores={title_timer=107..},tag=title_nuwin1] run title @s subtitle update
execute as @a[scores={title_timer=107..},tag=title_nuwin1] run hud @s reset crosshair
execute as @a[scores={title_timer=107..},tag=title_nuwin1] run tag @s remove titlea
execute as @a[scores={title_timer=107..},tag=title_nuwin1] run tag @s remove title_nuwin1
 
###############################
##GAME SET - Team Lambda Win Round, win game
 
execute as @a[scores={title_timer=0},tag=title_lambdawin2] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_lambdawin2] run title @s subtitle update§k§0ROUND END
execute as @a[scores={title_timer=2},tag=title_lambdawin2] run title @s subtitle update§k§3ROUND END
execute as @a[scores={title_timer=3},tag=title_lambdawin2] run title @s subtitle update§k§2ROUND END
execute as @a[scores={title_timer=4},tag=title_lambdawin2] run title @s subtitle update§aROUND END
execute as @a[scores={title_timer=34},tag=title_lambdawin2] run /titleraw @s subtitle {"rawtext":[{"text":"update§k§4 "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §5 "},{"score":{"name":"team_lambda","objective":"team_wins_1_backup"}}]}
execute as @a[scores={title_timer=36},tag=title_lambdawin2] run /titleraw @s subtitle {"rawtext":[{"text":"update§c "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §d "},{"score":{"name":"team_lambda","objective":"team_wins_1_backup"}}]}
execute as @a[scores={title_timer=46},tag=title_lambdawin2] run /titleraw @s subtitle {"rawtext":[{"text":"update§k§4 "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §5 "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=48},tag=title_lambdawin2] run /titleraw @s subtitle {"rawtext":[{"text":"update§c "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §d "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=80},tag=title_lambdawin2] run title @s subtitle update§k§5TEAM LAMBDA WINS!
execute as @a[scores={title_timer=82},tag=title_lambdawin2] run title @s subtitle update§dTEAM LAMBDA WINS!
execute as @a[scores={title_timer=104},tag=title_lambdawin2] run title @s subtitle update§k§5TEAM LAMBDA WINS!
execute as @a[scores={title_timer=105},tag=title_lambdawin2] run title @s subtitle update§k§1TEAM LAMBDA WINS!
execute as @a[scores={title_timer=106},tag=title_lambdawin2] run title @s subtitle update§k§0TEAM LAMBDA WINS!
execute as @a[scores={title_timer=107..},tag=title_lambdawin2] run title @s subtitle update
execute as @a[scores={title_timer=107..},tag=title_lambdawin2] run hud @s reset crosshair
execute as @a[scores={title_timer=107..},tag=title_lambdawin2] run tag @s remove titlea
execute as @a[scores={title_timer=107..},tag=title_lambdawin2] run tag @s remove title_lambdawin2
 
###############################
##GAME SET - Team Nu Win Round, win game
 
execute as @a[scores={title_timer=0},tag=title_nuwin2] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_nuwin2] run title @s subtitle update§k§0ROUND END
execute as @a[scores={title_timer=2},tag=title_nuwin2] run title @s subtitle update§k§3ROUND END
execute as @a[scores={title_timer=3},tag=title_nuwin2] run title @s subtitle update§k§2ROUND END
execute as @a[scores={title_timer=4},tag=title_nuwin2] run title @s subtitle update§aROUND END
execute as @a[scores={title_timer=24},tag=title_nuwin2] run /titleraw @s subtitle {"rawtext":[{"text":"update§k§4 "},{"score":{"name":"team_nu","objective":"team_wins_1_backup"}},{"text":"  §5 "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=26},tag=title_nuwin2] run /titleraw @s subtitle {"rawtext":[{"text":"update§c "},{"score":{"name":"team_nu","objective":"team_wins_1_backup"}},{"text":"  §d "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=36},tag=title_nuwin2] run /titleraw @s subtitle {"rawtext":[{"text":"update§k§4 "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §5 "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=38},tag=title_nuwin2] run /titleraw @s subtitle {"rawtext":[{"text":"update§c "},{"score":{"name":"team_nu","objective":"team_wins_backup"}},{"text":"  §d "},{"score":{"name":"team_lambda","objective":"team_wins_backup"}}]}
execute as @a[scores={title_timer=70},tag=title_nuwin2] run title @s subtitle update§k§4TEAM NU WINS!
execute as @a[scores={title_timer=72},tag=title_nuwin2] run title @s subtitle update§cTEAM NU WINS!
execute as @a[scores={title_timer=94},tag=title_nuwin2] run title @s subtitle update§k§4TEAM NU WINS!
execute as @a[scores={title_timer=95},tag=title_nuwin2] run title @s subtitle update§k§5TEAM NU WINS!
execute as @a[scores={title_timer=96},tag=title_nuwin2] run title @s subtitle update§k§0TEAM NU WINS!
execute as @a[scores={title_timer=97..},tag=title_nuwin2] run title @s subtitle update
execute as @a[scores={title_timer=97..},tag=title_nuwin2] run hud @s reset crosshair
execute as @a[scores={title_timer=97..},tag=title_nuwin2] run tag @s remove titlea
execute as @a[scores={title_timer=97..},tag=title_nuwin2] run tag @s remove title_nuwin2
 
#########################
##ENTER THE TRAIN
execute as @a[scores={title_timer=0},tag=title_entertrain] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_entertrain] run title @s subtitle update§k§0ENTER THE TRAIN
execute as @a[scores={title_timer=2},tag=title_entertrain] run title @s subtitle update§k§3ENTER THE TRAIN
execute as @a[scores={title_timer=3},tag=title_entertrain] run title @s subtitle update§k§2ENTER THE TRAIN
execute as @a[scores={title_timer=4},tag=title_entertrain] run title @s subtitle update§aENTER THE TRAIN
execute as @a[scores={title_timer=20},tag=title_entertrain] run title @s subtitle update§k§2ENTER THE TRAIN
execute as @a[scores={title_timer=21},tag=title_entertrain] run title @s subtitle update§k§3ENTER THE TRAIN
execute as @a[scores={title_timer=22},tag=title_entertrain] run title @s subtitle update§k§0ENTER THE TRAIN
execute as @a[scores={title_timer=23..},tag=title_entertrain] run title @s subtitle update
execute as @a[scores={title_timer=23..},tag=title_entertrain] run hud @s reset crosshair
execute as @a[scores={title_timer=23..},tag=title_entertrain] run tag @s remove titlea
execute as @a[scores={title_timer=23..},tag=title_entertrain] run tag @s remove title_entertrain
 
#########################
##START THE TRAIN
execute as @a[scores={title_timer=0},tag=title_starttrain] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_starttrain] run title @s subtitle update§k§0START THE TRAIN
execute as @a[scores={title_timer=2},tag=title_starttrain] run title @s subtitle update§k§3START THE TRAIN
execute as @a[scores={title_timer=3},tag=title_starttrain] run title @s subtitle update§k§2START THE TRAIN
execute as @a[scores={title_timer=4},tag=title_starttrain] run title @s subtitle update§aSTART THE TRAIN
execute as @a[scores={title_timer=20},tag=title_starttrain] run title @s subtitle update§k§2START THE TRAIN
execute as @a[scores={title_timer=21},tag=title_starttrain] run title @s subtitle update§k§3START THE TRAIN
execute as @a[scores={title_timer=22},tag=title_starttrain] run title @s subtitle update§k§0START THE TRAIN
execute as @a[scores={title_timer=23..},tag=title_starttrain] run title @s subtitle update
execute as @a[scores={title_timer=23..},tag=title_starttrain] run hud @s reset crosshair
execute as @a[scores={title_timer=23..},tag=title_starttrain] run tag @s remove titlea
execute as @a[scores={title_timer=23..},tag=title_starttrain] run tag @s remove title_starttrain
 
##########################################
##DIED
execute as @a[scores={title_timer=0},tag=title_sysfailure] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_sysfailure] run title @s subtitle update§k§0SYSTEM FAILURE
execute as @a[scores={title_timer=2},tag=title_sysfailure] run title @s subtitle update§k§5SYSTEM FAILURE
execute as @a[scores={title_timer=3},tag=title_sysfailure] run title @s subtitle update§k§4SYSTEM FAILURE
execute as @a[scores={title_timer=4},tag=title_sysfailure] run title @s subtitle update§cSYSTEM FAILURE
execute as @a[scores={title_timer=20},tag=title_sysfailure] run title @s subtitle update§k§4SYSTEM FAILURE
execute as @a[scores={title_timer=21},tag=title_sysfailure] run title @s subtitle update§k§5SYSTEM FAILURE
execute as @a[scores={title_timer=22},tag=title_sysfailure] run title @s subtitle update§k§0SYSTEM FAILURE
execute as @a[scores={title_timer=23..},tag=title_sysfailure] run title @s subtitle update
execute as @a[scores={title_timer=23..},tag=title_sysfailure] run hud @s reset crosshair
execute as @a[scores={title_timer=23..},tag=title_sysfailure] run tag @s remove titlea
execute as @a[scores={title_timer=23..},tag=title_sysfailure] run tag @s remove title_sysfailure
##########################################
##2F: Settings
execute as @a[scores={title_timer=0},tag=title_settings] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_settings] run title @s subtitle update§k§0REACTOR SETTINGS CENTER
execute as @a[scores={title_timer=2},tag=title_settings] run title @s subtitle update§k§3REACTOR SETTINGS CENTER
execute as @a[scores={title_timer=3},tag=title_settings] run title @s subtitle update§k§2REACTOR SETTINGS CENTER
execute as @a[scores={title_timer=4},tag=title_settings] run title @s subtitle update§aREACTOR SETTINGS CENTER
execute as @a[scores={title_timer=20},tag=title_settings] run title @s subtitle update§k§2REACTOR SETTINGS CENTER
execute as @a[scores={title_timer=21},tag=title_settings] run title @s subtitle update§k§3REACTOR SETTINGS CENTER
execute as @a[scores={title_timer=22},tag=title_settings] run title @s subtitle update§k§0REACTOR SETTINGS CENTER
execute as @a[scores={title_timer=23..},tag=title_settings] run title @s subtitle update
execute as @a[scores={title_timer=23..},tag=title_settings] run hud @s reset crosshair
execute as @a[scores={title_timer=23..},tag=title_settings] run tag @s remove titlea
execute as @a[scores={title_timer=23..},tag=title_settings] run tag @s remove title_settings
##2F: Music
execute as @a[scores={title_timer=0},tag=title_music] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_music] run title @s subtitle update§k§0TORIMOTI MUSIC
execute as @a[scores={title_timer=2},tag=title_music] run title @s subtitle update§k§3TORIMOTI MUSIC
execute as @a[scores={title_timer=3},tag=title_music] run title @s subtitle update§k§2TORIMOTI MUSIC
execute as @a[scores={title_timer=4},tag=title_music] run title @s subtitle update§aTORIMOTI MUSIC
execute as @a[scores={title_timer=20},tag=title_music] run title @s subtitle update§k§2TORIMOTI MUSIC
execute as @a[scores={title_timer=21},tag=title_music] run title @s subtitle update§k§3TORIMOTI MUSIC
execute as @a[scores={title_timer=22},tag=title_music] run title @s subtitle update§k§0TORIMOTI MUSIC
execute as @a[scores={title_timer=23..},tag=title_music] run title @s subtitle update
execute as @a[scores={title_timer=23..},tag=title_music] run hud @s reset crosshair
execute as @a[scores={title_timer=23..},tag=title_music] run tag @s remove titlea
execute as @a[scores={title_timer=23..},tag=title_music] run tag @s remove title_music
###Lobby 2F
execute as @a[scores={title_timer=0},tag=title_2f] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_2f] run title @s subtitle update§k§02F: CENTRAL PLAZA
execute as @a[scores={title_timer=2},tag=title_2f] run title @s subtitle update§k§32F: CENTRAL PLAZA
execute as @a[scores={title_timer=3},tag=title_2f] run title @s subtitle update§k§22F: CENTRAL PLAZA
execute as @a[scores={title_timer=4},tag=title_2f] run title @s subtitle update§a2F: CENTRAL PLAZA
execute as @a[scores={title_timer=20},tag=title_2f] run title @s subtitle update§k§22F: CENTRAL PLAZA
execute as @a[scores={title_timer=21},tag=title_2f] run title @s subtitle update§k§32F: CENTRAL PLAZA
execute as @a[scores={title_timer=22},tag=title_2f] run title @s subtitle update§k§02F: CENTRAL PLAZA
execute as @a[scores={title_timer=23..},tag=title_2f] run title @s subtitle update
execute as @a[scores={title_timer=23..},tag=title_2f] run hud @s reset crosshair
execute as @a[scores={title_timer=23..},tag=title_2f] run tag @s remove titlea
execute as @a[scores={title_timer=23..},tag=title_2f] run tag @s remove title_2f
 
 
##################################
##TO: AZURE STADIUM
execute as @a[scores={title_timer=0},tag=title_toazure] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_toazure] run title @s subtitle update§k§0TO: AZURE STADIUM
execute as @a[scores={title_timer=2},tag=title_toazure] run title @s subtitle update§k§3TO: AZURE STADIUM
execute as @a[scores={title_timer=3},tag=title_toazure] run title @s subtitle update§k§2TO: AZURE STADIUM
execute as @a[scores={title_timer=4},tag=title_toazure] run title @s subtitle update§aTO: AZURE STADIUM
execute as @a[scores={title_timer=20},tag=title_toazure] run title @s subtitle update§k§2TO: AZURE STADIUM
execute as @a[scores={title_timer=21},tag=title_toazure] run title @s subtitle update§k§3TO: AZURE STADIUM
execute as @a[scores={title_timer=22},tag=title_toazure] run title @s subtitle update§k§0TO: AZURE STADIUM
execute as @a[scores={title_timer=23..},tag=title_toazure] run title @s subtitle update
execute as @a[scores={title_timer=23..},tag=title_toazure] run hud @s reset crosshair
execute as @a[scores={title_timer=23..},tag=title_toazure] run tag @s remove titlea
execute as @a[scores={title_timer=23..},tag=title_toazure] run tag @s remove title_toazure
 
##############################
##OVERHEATING
execute as @a[scores={title_timer=0},tag=title_overheating] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_overheating] run title @s subtitle update§k§0OVERHEATING
execute as @a[scores={title_timer=2},tag=title_overheating] run title @s subtitle update§k§5OVERHEATING
execute as @a[scores={title_timer=3},tag=title_overheating] run title @s subtitle update§k§4OVERHEATING
execute as @a[scores={title_timer=4},tag=title_overheating] run title @s subtitle update§cOVERHEATING
execute as @a[scores={title_timer=20},tag=title_overheating] run title @s subtitle update§k§4OVERHEATING
execute as @a[scores={title_timer=21},tag=title_overheating] run title @s subtitle update§k§5OVERHEATING
execute as @a[scores={title_timer=22},tag=title_overheating] run title @s subtitle update§k§0OVERHEATING
execute as @a[scores={title_timer=23..},tag=title_overheating] run title @s subtitle update
execute as @a[scores={title_timer=23..},tag=title_overheating] run hud @s reset crosshair
execute as @a[scores={title_timer=23..},tag=title_overheating] run tag @s remove titlea
execute as @a[scores={title_timer=23..},tag=title_overheating] run tag @s remove title_overheating
 
##############################
##TEMP. RECOVERED
execute as @a[scores={title_timer=0},tag=title_temprecover] run title @s subtitle update
execute as @a[scores={title_timer=1},tag=title_temprecover] run title @s subtitle update§k§0TEMP. RECOVERED
execute as @a[scores={title_timer=2},tag=title_temprecover] run title @s subtitle update§k§3TEMP. RECOVERED
execute as @a[scores={title_timer=3},tag=title_temprecover] run title @s subtitle update§k§2TEMP. RECOVERED
execute as @a[scores={title_timer=4},tag=title_temprecover] run title @s subtitle update§aTEMP. RECOVERED
execute as @a[scores={title_timer=20},tag=title_temprecover] run title @s subtitle update§k§2TEMP. RECOVERED
execute as @a[scores={title_timer=21},tag=title_temprecover] run title @s subtitle update§k§3TEMP. RECOVERED
execute as @a[scores={title_timer=22},tag=title_temprecover] run title @s subtitle update§k§0TEMP. RECOVERED
execute as @a[scores={title_timer=23..},tag=title_temprecover] run title @s subtitle update
execute as @a[scores={title_timer=23..},tag=title_temprecover] run hud @s reset crosshair
execute as @a[scores={title_timer=23..},tag=title_temprecover] run tag @s remove titlea
execute as @a[scores={title_timer=23..},tag=title_temprecover] run tag @s remove title_temprecover
###############################
##run timer ticks
execute as @a[tag=!titlea] run /scoreboard players reset @s title_timer
execute as @a[tag=titlea] run /scoreboard players add @s title_timer 1
 
 
##fade into light blue: §0 §1 §3 §b
 
##fade into regular blue: §0 §8 §1 §9
 
##fade into red:  §0 §5 §4 §c
 
##fade into gold:  §0 §j §7 §6
 
##fade into yellow:  §0 §6 §g §e
 
##fade into green: §0 §3 §2 §a