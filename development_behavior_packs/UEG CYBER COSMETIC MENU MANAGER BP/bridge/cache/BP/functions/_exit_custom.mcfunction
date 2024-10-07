{
	"file_path": "C:\\Users\\scizo\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\UEG CYBER COSMETIC MENU MANAGER BP\\functions\\_exit_custom.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "77773412_ff9c_45ee_af71_4447b8e41ba8",
	"file_version": 15,
	"cache_content": "camera @s clear\ntp @s 168 13 1 facing 167 13 1\ninputpermission set @s camera enabled\ninputpermission set @s movement enabled\nexecute as @s[tag=customRoom1] run scoreboard players set SkinSelected customMenu1 -1\nexecute as @s[tag=customRoom2] run scoreboard players set SkinSelected customMenu2 -1\nexecute as @s[tag=customRoom3] run scoreboard players set SkinSelected customMenu3 -1\nexecute as @s[tag=customRoom1] run scoreboard players set customMenu1 customMenuActive 0\nexecute as @s[tag=customRoom2] run scoreboard players set customMenu2 customMenuActive 0\nexecute as @s[tag=customRoom3] run scoreboard players set customMenu3 customMenuActive 0\ntag @s remove customRoom1\ntag @s remove customRoom2\ntag @s remove customRoom3\ntag @s remove customRoom\nclear @s"
}