#bridge-file-version: #11
function remove_abilities_clean
tag @s add rocketjump
scoreboard players set @s selected_ability 2
tellraw @s {"rawtext":[{"text":"§e[Ability] §aRocket Jump§r Selected."}]}