#bridge-file-version: #9
camera @s set minecraft:free ease 1 in_out_sine pos ~-2 ~2.5 ~-2 facing @s
tellraw @s {"rawtext":[{"text":"<Gob Dog Salesman> GOB YOU!!!!"}]}
tag @s add gob_gooed
effect @s slowness 20 2 true
particle sm:gob_gooed
inputpermission set @s movement disabled
inputpermission set @s camera disabled