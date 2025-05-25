#bridge-file-version: #19
##kill team nu
execute if score deathzone_phase deathzone_phase matches 0 run execute as @a[tag=ingame,y=-11,dy=2,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches 1 run function death
execute if score deathzone_phase deathzone_phase matches 1 run execute as @a[tag=ingame,y=-11,dy=20,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches 1 run function death
execute if score deathzone_phase deathzone_phase matches 2 run execute as @a[tag=ingame,y=-11,dy=35,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches 1 run function death
##respawn team nu
execute if score deathzone_phase deathzone_phase matches 0 run execute as @a[tag=ingame,y=-11,dy=2,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches !1 run function respawn
execute if score deathzone_phase deathzone_phase matches 1 run execute as @a[tag=ingame,y=-11,dy=20,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches !1 run function respawn
execute if score deathzone_phase deathzone_phase matches 2 run execute as @a[tag=ingame,y=-11,dy=35,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches !1 run function respawn
##kill team lambda
execute if score deathzone_phase deathzone_phase matches 0 run execute as @a[tag=ingame,y=-11,dy=2,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches 1 run function death
execute if score deathzone_phase deathzone_phase matches 1 run execute as @a[tag=ingame,y=-11,dy=20,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches 1 run function death
execute if score deathzone_phase deathzone_phase matches 2 run execute as @a[tag=ingame,y=-11,dy=35,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches 1 run function death
##respawn team lambda
execute if score deathzone_phase deathzone_phase matches 0 run execute as @a[tag=ingame,y=-11,dy=2,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches !1 run function respawn
execute if score deathzone_phase deathzone_phase matches 1 run execute as @a[tag=ingame,y=-11,dy=20,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches !1 run function respawn
execute if score deathzone_phase deathzone_phase matches 2 run execute as @a[tag=ingame,y=-11,dy=35,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches !1 run function respawn
 
 
##kill team nu
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 0 run execute as @a[tag=ingame,y=94,dy=-1,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches 1 run function death
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 1 run execute as @a[tag=ingame,y=94,dy=-6,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches 1 run function death
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 2 run execute as @a[tag=ingame,y=94,dy=-11,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches 1 run function death
##respawn team nu
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 0 run execute as @a[tag=ingame,y=94,dy=-1,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches !1 run function respawn
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 1 run execute as @a[tag=ingame,y=94,dy=-6,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches !1 run function respawn
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 2 run execute as @a[tag=ingame,y=94,dy=-11,x=-159,z=230,dx=50,dz=50,tag=team_nu] run execute as @s if score @s lives matches !1 run function respawn
##kill team lambda
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 0 run execute as @a[tag=ingame,y=94,dy=-1,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches 1 run function death
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 1 run execute as @a[tag=ingame,y=94,dy=-6,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches 1 run function death
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 2 run execute as @a[tag=ingame,y=94,dy=-11,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches 1 run function death
##respawn team lambda
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 0 run execute as @a[tag=ingame,y=94,dy=-1,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches !1 run function respawn
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 1 run execute as @a[tag=ingame,y=94,dy=-6,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches !1 run function respawn
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score deathzone_phase deathzone_phase matches 2 run execute as @a[tag=ingame,y=94,dy=-11,x=-159,z=230,dx=50,dz=50,tag=team_lambda] run execute as @s if score @s lives matches !1 run function respawn
 
 
##execute if score deathzone_phase deathzone_phase matches 0 run execute if score round_active round_active matches 1 run particle sm:deathzone -134 33 255
execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 0 run particle sm:deathzone -134 -8.1 255
execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 1 run particle sm:deathzone -134 10.1 255
execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 2 run particle sm:deathzone -134 25.1 255
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 0 run particle sm:deathzone -134 92.1 255
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 1 run particle sm:deathzone -134 88.1 255
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 2 run particle sm:deathzone -134 83.1 255
 
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 0 run particle sm:deathzone_top -134 92.1 255
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 1 run particle sm:deathzone_top -134 88.1 255
execute if score deathzone_top_enabled deathzone_top_enabled matches 1 run execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 2 run particle sm:deathzone_top -134 83.1 255
execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 0 run particle sm:deathzone_top -134 -8.1 255
execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 1 run particle sm:deathzone_top -134 10.1 255
execute if score game_active game_active matches 1 run execute if score deathzone_phase deathzone_phase matches 2 run particle sm:deathzone_top -134 25.1 255





