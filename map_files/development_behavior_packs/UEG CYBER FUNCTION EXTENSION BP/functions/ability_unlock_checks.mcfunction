#bridge-file-version: #1
scoreboard players reset count ability_unlock_count
execute if score baby unlocked_abilities matches 1 run scoreboard players add count ability_unlock_count 1
execute if score prism unlocked_abilities matches 1 run scoreboard players add count ability_unlock_count 1
execute if score remote unlocked_abilities matches 1 run scoreboard players add count ability_unlock_count 1
execute if score velocity_cancel unlocked_abilities matches 1 run scoreboard players add count ability_unlock_count 1
scoreboard players add count ability_unlock_count 2