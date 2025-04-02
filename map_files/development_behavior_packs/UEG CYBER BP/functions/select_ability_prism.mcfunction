#bridge-file-version: #10
function remove_abilities_clean
tag @s add prism
scoreboard players set @s selected_ability 4
tellraw @s {"rawtext":[{"text":"§e[Ability] §aJudgement§r Selected."}]}