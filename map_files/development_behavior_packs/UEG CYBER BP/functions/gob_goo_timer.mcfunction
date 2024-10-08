#bridge-file-version: #4
scoreboard players add @a[tag=gob_gooed] gob_goo_timer 1
execute @a[scores={gob_goo_timer=100..}] ~ ~ ~ function gob_goo_anim_out