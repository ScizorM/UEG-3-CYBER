#bridge-file-version: #13
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run scoreboard players set heirloom bannedItems 1
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run tag @s add banned
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run tellraw @p {"rawtext":[{"text":"§e[Weapon Bans] §cNakaw's Heirloom banned."}]}
function ban_message_check