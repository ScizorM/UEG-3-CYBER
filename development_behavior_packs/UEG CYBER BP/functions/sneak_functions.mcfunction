#bridge-file-version: #13
execute @s[tag=rocketjump,lm=1] ~ ~ ~ summon sm:non_destructive_explosion
execute @s[tag=rocketjump,lm=1] ~ ~ ~ function explosion_rocketjump
execute @s[tag=prism,lm=1] ~ ~ ~ function antigrav_prism
execute @s[tag=team_lambda,tag=remote,lm=1] ~ ~ ~ function explode_lambda_landmines
execute @s[tag=team_nu,tag=remote,lm=1] ~ ~ ~ function explode_nu_landmines
execute @s[tag=baby,lm=1] ~ ~ ~ function baby_storm
execute @s[tag=vel_cancel,lm=1] ~ ~ ~ function velocity_cancel
xp -1L @s[lm=1]