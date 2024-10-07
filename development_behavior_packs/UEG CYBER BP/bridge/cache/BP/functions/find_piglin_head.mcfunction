{
	"file_path": "C:\\Users\\scizo\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\UEG CYBER BP\\functions\\find_piglin_head.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "296cd1e9_97df_4dff_98bd_51cbc7afb033",
	"file_version": 39,
	"cache_content": "scoreboard players add found_heads found_heads 1\nparticle sm:respawn_beam ~ ~ ~\ntellraw @a {\"rawtext\": [{\"text\": \"§e[Piglin Heads] §6\"}, {\"selector\": \"@p\"},{\"text\": \" has found a Piglin head!\"}]}\nsetblock ~ ~ ~ air"
}