#bridge-file-version: #9
function remove_abilities_clean
tag @s add remote
scoreboard players set @s selected_ability 3
tellraw @s {"rawtext":[{"text":"§e[Ability] §aRemote Trigger§r Selected."}]}