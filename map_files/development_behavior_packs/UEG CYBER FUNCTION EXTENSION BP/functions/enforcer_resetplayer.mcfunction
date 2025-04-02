#bridge-file-version: #9
tag @s remove ingame
tag @s remove team_lambda
tag @s remove team_nu
tag @s remove teamed
effect @s clear
clear @s
execute if score enforcer_creditR enforcer_creditR matches 0 run tellraw @a {"rawtext": [{"text": "§e[Enforcer Anti-Leave Systems] §c"}, {"selector": "@s"},{"text": "§c has reconnected after leaving mid-battle. They have lost §f2§c as a penalty."}]}
execute if score enforcer_creditR enforcer_creditR matches 0 run scoreboard players remove @s credits 2
execute if score enforcer_creditR enforcer_creditR matches 1 run tellraw @a {"rawtext": [{"text": "§e[Enforcer Anti-Leave Systems] §c"}, {"selector": "@s"},{"text": "§c has reconnected after leaving mid-battle. They will not lose any  as the penalty is disabled in settings."}]}
tp @s 140 13 -41 facing 140 13 -40
gamemode adventure @s
#ability @s mayfly false
gamemode adventure @s
#ability @s mayfly false
gamemode adventure @s
#ability @s mayfly false
scoreboard players operation @s enforcer_round_verifier = verify enforcer_round_verifier