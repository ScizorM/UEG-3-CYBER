#bridge-file-version: #11
particle sm:emp ~ ~0.5 ~
particle sm:static_wave_2 ~ ~0.4 ~
execute @s[tag=team_nu] ~ ~ ~ camera @a[tag=team_lambda,r=6] fade time 0 0 5
execute @s[tag=team_lambda] ~ ~ ~ camera @a[tag=team_nu,r=6] fade time 0 0 5
 
 
playsound emp @s[tag=teamed]
playsound emp @a[tag=teamed] ~ ~ ~ 0.5