{
	"file_path": "C:\\Users\\scizo\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\UEG CYBER COSMETIC MENU MANAGER BP\\functions\\_teleport_to_custom2.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "bae63606_89df_40ea_8cda_b58b7bb20ce3",
	"file_version": 26,
	"cache_content": "camera @s set minecraft:free pos -47 33 -5 facing -47 33 -4\ntp @s -45 32 0 facing -45 32 -1\ninputpermission set @s camera disabled\ninputpermission set @s movement disabled\nclear @s\ntag @s add customRoom\ntag @s add customRoom2\n \nscoreboard players set customMenu2 customMenuActive 1\nscoreboard players set MenuSelected customMenu2 1\nscoreboard players set ScreenSelected customMenu2 1\nscoreboard players set SlotSelected customMenu2 1\n \nreplaceitem entity @s slot.hotbar 0 sm:exit_menu 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\n \nreplaceitem entity @s slot.hotbar 2 sm:menu_left 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\nreplaceitem entity @s slot.hotbar 3 sm:left 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\nreplaceitem entity @s slot.hotbar 4 sm:select_skin 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\nreplaceitem entity @s slot.hotbar 5 sm:right 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\nreplaceitem entity @s slot.hotbar 6 sm:menu_right 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}\n \nreplaceitem entity @s slot.hotbar 8 sm:rotate 1 0 {\"minecraft:item_lock\":{\"mode\":\"lock_in_slot\"}}"
}