#bridge-file-version: #1
execute if score settings closed_stores matches 1 run execute as @a[tag=enter_reactor] run function closed_store_warning
execute if score operator_s_store_d operator_s_store_d matches 1 run execute as @a[tag=enter_reactor,tag=!op,tag=!operator] run function closed_store_warning
execute if score arenas closed_stores matches 1 run execute as @a[tag=enter_arenas] run function closed_store_warning