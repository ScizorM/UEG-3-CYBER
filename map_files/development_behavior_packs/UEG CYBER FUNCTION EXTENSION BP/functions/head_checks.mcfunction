execute if score found_heads found_heads matches 4 run scoreboard players set "uegcybers_bananaland" unlocked_arenas_new 1 
execute if score found_heads found_heads matches 4 run tellraw @a {"rawtext":[{"text":"§e[Arena Unlock] §cBananaland Bouncehouse §runlocked."}]}
execute if score found_heads found_heads matches 8 run scoreboard players set "uegcybers_abstract_cyber" unlocked_arenas_new 1 
execute if score found_heads found_heads matches 8 run tellraw @a {"rawtext":[{"text":"§e[Arena Unlock] §cABS:CYBER §runlocked."}]}
execute if score found_heads found_heads matches 12 run function unlock_salmon_bomb 
execute if score found_heads found_heads matches 12 run scoreboard players set "uegcybers_shrek_on" unlocked_arenas_new 1
execute if score found_heads found_heads matches 12 run tellraw @a {"rawtext":[{"text":"§e[Arena Unlock] §cshrek on crack §runlocked."}]}
execute if score found_heads found_heads matches 16 run function unlock_shreddedcheese 
execute if score found_heads found_heads matches 20 run scoreboard players set "uegcybers_hog_metro_hq" unlocked_arenas_new 1
execute if score found_heads found_heads matches 20 run tellraw @a {"rawtext":[{"text":"§e[Arena Unlock] §cHog Metro HQ §runlocked."}]}
##execute if score found_heads found_heads matches 19 run say wow ##open dev room