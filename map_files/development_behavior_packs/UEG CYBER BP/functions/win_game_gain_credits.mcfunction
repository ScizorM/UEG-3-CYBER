#bridge-file-version: #7
tellraw @s[tag=!small_boost,tag=!large_boost] {"rawtext":[{"text":"§e[Earn Credits] §aGame Won! §f+3"}]}
tellraw @s[tag=large_boost] {"rawtext":[{"text":"§e[Earn Credits] §aGame Won! §f+3\n§eBoost Bonus: §f+6"}]}
tellraw @s[tag=small_boost] {"rawtext":[{"text":"§e[Earn Credits] §aGame Won! §f+3\n§eBoost Bonus:§f +3"}]}
scoreboard players add @s credits 3
scoreboard players add @s[tag=large_boost] credits 6
scoreboard players add @s[tag=small_boost] credits 3
scoreboard players set @s player_wins 1