#bridge-file-version: #10
tellraw @a {"rawtext": [{"text": "§e[PVP Announcements] "},{"text": "§6A new match has begun!"}]}
function pregame_train_teleport
function enforcer_startgame_cmds
execute @a[tag=team_nu] ~ ~ ~ function lobby_exit_teleport
execute @a[tag=team_lambda] ~ ~ ~ function lobby_exit_teleport
function close_settings_area
tag @a[tag=team_nu] remove musicPlaying
tag @a[tag=team_lambda] remove musicPlaying
effect @a[tag=team_nu] clear
effect @a[tag=team_lambda] clear
event entity @e[type=sm:team_nu_dialogue] sm:despawn
event entity @e[type=sm:team_lambda_dialogue] sm:despawn
function deathzone_reset
tag @a[tag=team_nu] add new_title_to_azure
tag @a[tag=team_nu] add new_title_init
tag @a[tag=team_lambda] add new_title_to_azure
tag @a[tag=team_lambda] add new_title_init