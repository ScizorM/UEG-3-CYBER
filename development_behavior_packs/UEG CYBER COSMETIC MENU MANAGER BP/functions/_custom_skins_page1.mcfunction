#bridge-file-version: #31
particle sm:0000_recruit ~1 ~6.95 ~-0.05
##slot 2
execute if entity @p[tag=001_skin_unlocked,r=10] run particle sm:0001_uegdefault ~ ~6.95 ~-0.05
execute if entity @p[tag=!001_skin_unlocked,r=10] run particle sm:locked_skin ~ ~6.95 ~-0.05
 
##slot 3
execute if entity @p[tag=003_skin_unlocked,r=10] run particle sm:0002_uegplusdefault ~-1 ~6.95 ~-0.05
execute if entity @p[tag=!003_skin_unlocked,r=10] run particle sm:locked_skin ~-1 ~6.95 ~-0.05
 
##slot 4
execute if entity @p[tag=056_skin_unlocked,r=10] run particle sm:0056_skin ~1 ~5.05 ~-0.05
execute if entity @p[tag=!056_skin_unlocked,r=10] run particle sm:locked_skin ~1 ~5.05 ~-0.05
 
##slot 5
execute if entity @p[tag=048_skin_unlocked,r=10] run particle sm:0048_skin ~ ~5.05 ~-0.05
execute if entity @p[tag=!048_skin_unlocked,r=10] run particle sm:locked_skin ~ ~5.05 ~-0.05
 
##slot 6
execute if entity @p[tag=061_skin_unlocked,r=10] run particle sm:0061_skin ~-1 ~5.05 ~-0.05
execute if entity @p[tag=!061_skin_unlocked,r=10] run particle sm:locked_skin ~-1 ~5.05 ~-0.05
 
 
 