#bridge-file-version: #13
tp @s ~ ~ ~-1
camera @s[tag=esc1_started] clear
inputpermission set @s camera enabled
inputpermission set @s movement enabled
tag @s remove esc1_started
tag @s add 2f
tag @s remove 1f
tag @s remove 3f
tag @s add new_title_2f
tag @s add new_title_init