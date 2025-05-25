#bridge-file-version: #12
function remove_abilities_clean
tag @s add vel_cancel
scoreboard players set @s selected_ability 6
tellraw @s {"rawtext":[{"text":"§e[Ability] §aGround Slam§r Selected."}]}