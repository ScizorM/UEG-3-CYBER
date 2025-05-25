#bridge-file-version: #8
function remove_abilities_clean
tag @s add baby
scoreboard players set @s selected_ability 5
tellraw @s {"rawtext":[{"text":"§e[Ability] §aBungee Anchor§r Selected."}]}