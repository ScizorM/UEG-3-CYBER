#bridge-file-version: #5
execute if score @s[tag=!walljumpmessage] wallJumps matches 0 run /tag @s add walljumpmessage
execute if score @s wallJumps matches 1.. run /scoreboard players remove @s wallJumps 1
execute if score @s wallJumps matches 1.. run /event entity @s sm:levitation