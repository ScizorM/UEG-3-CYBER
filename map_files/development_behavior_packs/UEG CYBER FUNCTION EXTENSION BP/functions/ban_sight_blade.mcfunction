#bridge-file-version: #11
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run scoreboard players set sight_blade bannedItems 1
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run tag @s add banned
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run tellraw @p {"rawtext":[{"text":"§e[Weapon Bans] §cTrue Holic banned."}]}
function ban_message_check