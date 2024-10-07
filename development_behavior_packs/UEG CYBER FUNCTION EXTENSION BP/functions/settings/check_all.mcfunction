#bridge-file-version: #5
execute as @e[type=sm:laptop,tag=enforce] run function settings/enforcer_check
execute as @e[type=sm:laptop,tag=zone] run function settings/deathzone_check
execute as @e[type=sm:laptop,tag=izone] run function settings/zone_phase_check
execute as @e[type=sm:laptop,tag=topdeath] run function settings/top_zone_check
execute as @e[type=sm:laptop,tag=maxdashes] run function settings/max_dashes_check
execute as @e[type=sm:laptop,tag=abilities] run  function settings/ability_check
execute as @e[type=sm:laptop,tag=speed] run function settings/speed_check
execute as @e[type=sm:laptop,tag=jumpboost] run function settings/jump_boost_check
execute as @e[type=sm:laptop,tag=slowfalling] run function settings/slow_fall_check
execute as @e[type=sm:laptop,tag=darkness] run function settings/darkness_check
execute as @e[type=sm:laptop,tag=maxwins] run function settings/max_wins_check
execute as @e[type=sm:laptop,tag=maxlives] run function settings/max_lives_check
execute as @e[type=sm:laptop,tag=dash_power] run function settings/dash_power_check
execute as @e[type=sm:laptop,tag=min_dash_requirement] run function settings/dash_requirement_check
execute as @e[type=sm:laptop,tag=dash_vert2] run function settings/dash_vert_check