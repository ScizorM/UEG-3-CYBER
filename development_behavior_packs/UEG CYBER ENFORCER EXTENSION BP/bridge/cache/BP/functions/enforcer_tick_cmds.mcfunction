{
	"file_path": "C:\\Users\\scizo\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\UEG CYBER ENFORCER EXTENSION BP\\functions\\enforcer_tick_cmds.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "aea9b069_4b5c_4d80_b132_9b63d042414c",
	"file_version": 2,
	"cache_content": "execute if score enabled enforcer_enabled matches 1 run execute if score count enforcer_player_count_current < count enforcer_player_count_saved run function enforcer_player_leave_commands\nexecute if score enabled enforcer_enabled matches 1 run function enforcer_player_count_current\nexecute as @a[tag=teamed] run execute as @s if score @s enforcer_round_verifier < verify enforcer_round_verifier run function enforcer_resetplayer\nexecute if score game_active game_active matches 0 run scoreboard players operation @a enforcer_round_verifier = verify enforcer_round_verifier\nexecute as @a[tag=teamed] if score game_active game_active matches 0 run function enforcer_resetplayer\nscoreboard players add count enforcer_player_count_saved 0\nexecute if score game_active game_active matches 0 run scoreboard players set count enforcer_player_count_saved 0"
}