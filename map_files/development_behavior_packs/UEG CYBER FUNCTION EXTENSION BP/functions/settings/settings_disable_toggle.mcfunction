#bridge-file-version: #8
scoreboard players add operator_s_store_d operator_s_store_d 1
execute if score operator_s_store_d operator_s_store_d matches 2.. run scoreboard players set operator_s_store_d operator_s_store_d 0
execute if score operator_s_store_d operator_s_store_d matches -10..-1 run scoreboard players set operator_s_store_d operator_s_store_d 1
execute if score operator_s_store_d operator_s_store_d matches 1 run event entity @s sm:add_disabled
execute if score operator_s_store_d operator_s_store_d matches 0 run event entity @s sm:add_enabled