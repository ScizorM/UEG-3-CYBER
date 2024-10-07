#bridge-file-version: #7
setblock -63.40 10.00 -8.35 redstone_block
execute @a[tag=team_nu] ~ ~ ~ function lobby_exit_teleport
execute @a[tag=team_lambda] ~ ~ ~ function lobby_exit_teleport
function deathzone_reset
function start_zone_timer
scoreboard players operation @a[tag=teamed] lives = max_lives max_lives
function 03_start_round_extended
function startround_extended