#bridge-file-version: #2
function clear_music_info
function clear_settings_info
tellraw @s {"rawtext":[{"text":"§eCutscene skipped.\nIf you need to see the cutscene again, please speak to the main NPC in the room."}]}
clear @s sm:skip_cutscene