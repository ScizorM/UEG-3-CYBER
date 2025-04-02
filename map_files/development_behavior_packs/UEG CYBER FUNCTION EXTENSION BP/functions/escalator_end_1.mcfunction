#bridge-file-version: #12
tp @s ~ ~ ~1
camera @s[tag=esc1_started] clear
inputpermission set @s camera enabled
inputpermission set @s movement enabled
tag @s remove esc1_started
tag @s add 3f
tag @s remove 1f
tag @s remove 2f
tag @s add new_title_3f
tag @s add new_title_init