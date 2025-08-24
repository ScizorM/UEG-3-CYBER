execute unless entity @s[tag=team_nu] run execute unless entity @s[tag=team_lambda] run tp @s -130 17 644 facing -130 17 646
execute unless entity @s[tag=team_nu] run execute unless entity @s[tag=team_lambda] run tag @s add tutorial
execute unless entity @s[tag=team_nu] run execute unless entity @s[tag=team_lambda] run effect @s speed infinite 1 true
execute unless entity @s[tag=team_nu] run execute unless entity @s[tag=team_lambda] run effect @s jump_boost infinite 2 true
execute unless entity @s[tag=team_nu] run execute unless entity @s[tag=team_lambda] run replaceitem entity @s slot.hotbar 0 sm:reload_test_zone 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute unless entity @s[tag=team_nu] run execute unless entity @s[tag=team_lambda] run replaceitem entity @s slot.hotbar 1 sm:exit_test_zone 1 0 {"minecraft:item_lock":{"mode":"lock_in_slot"}}
execute unless entity @s[tag=team_nu] run execute unless entity @s[tag=team_lambda] run replaceitem entity @s slot.hotbar 8 sm:vulcan_cannon 1 0 {"minecraft:item_lock":{"mode":"lock_in_inventory"}}
execute if entity @s[tag=team_nu] run /tellraw @s {"rawtext":[{"text":"§e[Error] §cYou cannot enter this area while you are on a team."}]}
execute if entity @s[tag=team_lambda] run /tellraw @s {"rawtext":[{"text":"§e[Error] §cYou cannot enter this area while you are on a team."}]}