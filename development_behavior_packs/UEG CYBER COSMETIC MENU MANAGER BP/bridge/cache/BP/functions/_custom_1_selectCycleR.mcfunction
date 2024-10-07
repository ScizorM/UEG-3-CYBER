{
	"file_path": "C:\\Users\\scizo\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\UEG CYBER COSMETIC MENU MANAGER BP\\functions\\_custom_1_selectCycleR.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "b21e6fe0_1fcb_4aa1_916f_b448323588a1",
	"file_version": 14,
	"cache_content": "execute if entity @s[tag=customRoom1] run execute if score SlotSelected customMenu1 matches 6 run scoreboard players set SlotSelected customMenu1 0\nexecute if entity @s[tag=customRoom1] run execute if score SlotSelected customMenu1 matches 0..6 run scoreboard players add SlotSelected customMenu1 1\n \nexecute if entity @s[tag=customRoom2] run execute if score SlotSelected customMenu2 matches 6 run scoreboard players set SlotSelected customMenu2 0\nexecute if entity @s[tag=customRoom2] run execute if score SlotSelected customMenu2 matches 0..6 run scoreboard players add SlotSelected customMenu2 1\n \nexecute if entity @s[tag=customRoom3] run execute if score SlotSelected customMenu3 matches 6 run scoreboard players set SlotSelected customMenu3 0\nexecute if entity @s[tag=customRoom3] run execute if score SlotSelected customMenu3 matches 0..6 run scoreboard players add SlotSelected customMenu3 1"
}