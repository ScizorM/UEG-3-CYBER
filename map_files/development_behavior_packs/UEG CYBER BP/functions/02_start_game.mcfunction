#bridge-file-version: #5
setblock -59.59 10.00 -8.49 redstone_block
execute @a[tag=team_nu] ~ ~ ~ function lobby_exit_teleport
execute @a[tag=team_lambda] ~ ~ ~ function lobby_exit_teleport
tag @a remove timer_actives
event entity @e[type=sm:pregame_timer_1s_tick] sm:stop_timer
scoreboard players set in_lobby in_lobby 0