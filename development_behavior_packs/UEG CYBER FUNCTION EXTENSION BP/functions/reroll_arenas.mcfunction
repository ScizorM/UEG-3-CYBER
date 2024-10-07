#bridge-file-version: #4
execute if score rerolls_enabled rerolls_enabled matches 1 run function randomize_arenas
execute if score rerolls_enabled rerolls_enabled matches 0 run tellraw @a[r=3] {"rawtext": [{"text": "§e[Error] §cArena rerolls are not enabled."}]}
function reset_player_vote_values
execute positioned -50 1 140 run execute as @e[r=20,type=sm:arenainfo] run playanimation @s animation.arena_info_display.animate