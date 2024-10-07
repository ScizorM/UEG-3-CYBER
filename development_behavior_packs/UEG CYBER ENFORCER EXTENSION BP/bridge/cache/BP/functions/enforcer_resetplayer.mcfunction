{
	"file_path": "C:\\Users\\scizo\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\UEG CYBER ENFORCER EXTENSION BP\\functions\\enforcer_resetplayer.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "8aaea20e_3c9d_4fe9_83f0_4c6d07b3ae0c",
	"file_version": 9,
	"cache_content": "tag @s remove ingame\ntag @s remove team_lambda\ntag @s remove team_nu\ntag @s remove teamed\neffect @s clear\nclear @s\nexecute if score enforcer_creditR enforcer_creditR matches 0 run tellraw @a {\"rawtext\": [{\"text\": \"§e[Enforcer Anti-Leave Systems] §c\"}, {\"selector\": \"@s\"},{\"text\": \"§c has reconnected after leaving mid-battle. They have lost §f2§c as a penalty.\"}]}\nexecute if score enforcer_creditR enforcer_creditR matches 0 run scoreboard players remove @s credits 2\nexecute if score enforcer_creditR enforcer_creditR matches 1 run tellraw @a {\"rawtext\": [{\"text\": \"§e[Enforcer Anti-Leave Systems] §c\"}, {\"selector\": \"@s\"},{\"text\": \"§c has reconnected after leaving mid-battle. They will not lose any  as the penalty is disabled in settings.\"}]}\ntp @s 140 -4 62 facing 140 -4 63\ngamemode adventure @s\nability @s mayfly false\nscoreboard players operation @s enforcer_round_verifier = verify enforcer_round_verifier"
}