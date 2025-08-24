#bridge-file-version: #23
particle sm:emp ~ ~0.5 ~
particle sm:static_wave_2 ~ ~0.4 ~
execute @s[tag=team_nu] ~ ~ ~ execute @a[tag=team_lambda,r=4] ~ ~ ~ execute @s ~ ~ ~ tp @s ~ ~ ~
execute @s[tag=team_lambda] ~ ~ ~ execute @a[tag=team_nu,r=4] ~ ~ ~ execute @s ~ ~ ~ tp @s ~ ~ ~
 
execute @s[tag=team_nu] ~ ~ ~ execute @a[tag=team_lambda,r=4] ~ ~ ~ execute @s ~ ~ ~ camera @s fade time 0 0 0.5 color 0 150 100
execute @s[tag=team_lambda] ~ ~ ~ execute @a[tag=team_nu,r=4] ~ ~ ~ execute @s ~ ~ ~ camera @s fade time 0 0 0.5 color 0 150 100
 
execute @s[tag=team_nu] ~ ~ ~ execute @a[tag=team_lambda,r=4] ~ ~ ~ execute @s ~ ~ ~ /effect @s slowness 2 2 true
execute @s[tag=team_lambda] ~ ~ ~ execute @a[tag=team_nu,r=4] ~ ~ ~ execute @s ~ ~ ~ /effect @s slowness 2 2 true
 
execute @s[tag=team_nu] ~ ~ ~ execute @a[tag=team_lambda,r=4] ~ ~ ~ execute @s ~ ~ ~ /xp -100L @s
execute @s[tag=team_lambda] ~ ~ ~ execute @a[tag=team_nu,r=4] ~ ~ ~ execute @s ~ ~ ~ /xp -100L @s
 
#execute @s[tag=team_nu] ~ ~ ~ execute @a[tag=team_lambda,r=4] ~ ~ ~ execute @s ~ ~ ~ title @s title §a-STUNNED-
#execute @s[tag=team_lambda] ~ ~ ~ execute @a[tag=team_nu,r=4] ~ ~ ~ execute @s ~ ~ ~ title @s title §a-STUNNED-

execute @s[tag=team_nu] ~ ~ ~ execute @a[tag=team_lambda,r=4] ~ ~ ~ execute @s ~ ~ ~ function add_stun
execute @s[tag=team_lambda] ~ ~ ~ execute @a[tag=team_nu,r=4] ~ ~ ~ execute @s ~ ~ ~ function add_stun
 
execute @s[tag=team_nu] ~ ~ ~ execute @a[tag=team_lambda,r=4] ~ ~ ~ execute @s ~ ~ ~ particle sm:stun_bolt ~ ~1 ~
execute @s[tag=team_lambda] ~ ~ ~ execute @a[tag=team_nu,r=4] ~ ~ ~ execute @s ~ ~ ~ particle sm:stun_bolt ~ ~1 ~
 
execute @s[tag=team_nu] ~ ~ ~ scoreboard players set @a[tag=team_lambda,r=4] dashes 0
execute @s[tag=team_lambda] ~ ~ ~ scoreboard players set @a[tag=team_nu,r=4] dashes 0
 
execute @e[r=4,type=sm:landmine_ver_lambda] ~ ~ ~ particle sm:stun_bolt ~ ~0.5 ~
execute @e[r=4,type=sm:landmine_ver_nu] ~ ~ ~ particle sm:stun_bolt ~ ~0.5 ~
event entity @e[type=sm:landmine_ver_lambda,r=4] sm:despawn
event entity @e[type=sm:landmine_ver_nu,r=4] sm:despawn
 
playsound emp @s[tag=teamed]
playsound emp @a[tag=teamed] ~ ~ ~ 0.5
 
fill ~8 ~8 ~8 ~-8 ~-8 ~-8 sm:fabricated_block_emp replace sm:fabricated_block
fill ~8 ~8 ~8 ~-8 ~-8 ~-8 sm:fabricated_block_emp replace sm:fabricated_block_2