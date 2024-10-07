#bridge-file-version: #6
setblock -55.58 10.00 -8.65 redstone_block
execute @a[tag=team_nu] ~ ~ ~ function lobby_exit_teleport
execute @a[tag=team_lambda] ~ ~ ~ function lobby_exit_teleport
tag @a[tag=teamed] remove arenaMusic
tag @a[tag=teamed] remove musicPlaying