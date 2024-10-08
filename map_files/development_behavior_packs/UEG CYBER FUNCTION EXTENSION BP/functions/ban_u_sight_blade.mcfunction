#bridge-file-version: #13
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run scoreboard players set sight_blade bannedItems 0
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run tag @s remove banned
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run tellraw @p {"rawtext":[{"text":"§e[Weapon Bans] §aTrue Holic unbanned."}]}
function ban_message_check