#bridge-file-version: #18
tp @s ~ ~-17 ~19
execute as @s positioned as @s run /camera @s[tag=!esc1_started] fade time 0 0.5 0.4 color 0 0 0
inputpermission set @s camera disabled
inputpermission set @s movement disabled
tag @s add esc1_started