#bridge-file-version: #0
execute if score train_timer_started train_timer_started matches 1 run scoreboard players add train_timer train_timer 1
execute if score train_timer train_timer matches 600.. run function stop_train_timer