#bridge-file-version: #8
execute if score time_elap_sec_ingame time_elap_sec_ingame matches 0..59 run /scoreboard players add time_elap_sec_ingame time_elap_sec_ingame 1
execute if score time_elap_sec_ingame time_elap_sec_ingame matches 60.. run function time_elapsed_min_ingame
scoreboard players add time_elap_sec_ingame time_elap_sec_ingame 0
scoreboard players add time_elap_min_ingame time_elap_min_ingame 0