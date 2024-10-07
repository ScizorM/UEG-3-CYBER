#bridge-file-version: #7
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run scoreboard players set gob_goo_cannon bannedItems 0
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run tag @s remove banned
execute if score game_active game_active matches 0 run execute if score bans_enabled bans_enabled matches 0 run tellraw @p {"rawtext":[{"text":"§e[Weapon Bans] §aGob Goo Cannon unbanned."}]}
function ban_message_check