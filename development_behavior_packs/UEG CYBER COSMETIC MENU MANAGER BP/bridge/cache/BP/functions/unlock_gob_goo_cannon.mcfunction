{
	"file_path": "C:\\Users\\scizo\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\UEG CYBER COSMETIC MENU MANAGER BP\\functions\\unlock_gob_goo_cannon.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "197ed142_420a_4184_9076_95ec7e9d60cd",
	"file_version": 0,
	"cache_content": "execute if score gob_goo_cannon unlocked_weapons matches 1 run tellraw @s {\"rawtext\":[{\"text\":\"<Gob Dog Salesman> YOU ALREADY HAVE A GOB GOO CANNON!!! NO MORE FOR YOU!!!! I AM KEEPING THE MONEY THOUGH!!!\"}]}\r\nexecute if score gob_goo_cannon unlocked_weapons matches 0 run tellraw @s {\"rawtext\":[{\"text\":\"<Gob Dog Salesman> FREE PRIZE FOR YOU FOR BUYING §lTEN§r DOGS!!!!\"}]}\r\nexecute if score gob_goo_cannon unlocked_weapons matches 0 run function unlock_gob_goo_cannon_real"
}