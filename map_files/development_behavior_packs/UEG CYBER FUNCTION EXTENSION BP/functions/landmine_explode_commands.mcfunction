#bridge-file-version: #3
playanimation @s[tag=!anim_active] animation.landmine.charged
event entity @s[tag=!anim_active] sm:pre_explode
tag @s add anim_active