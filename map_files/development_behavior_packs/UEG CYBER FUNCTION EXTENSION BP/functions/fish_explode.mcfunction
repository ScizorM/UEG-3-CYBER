#bridge-file-version: #27
camerashake add @a[r=20] 0.5 0.2
summon sm:explosion_display_fish ~ ~ ~
particle sm:explosionburst_fish
particle sm:explosion_ring_fish ~ ~0.1 ~
particle sm:explosion_burst_fish
fill ~10 ~10 ~10 ~-10 ~-10 ~-10 air replace fire
fill ~10 ~10 ~10 ~-10 ~-10 ~-10 cobblestone replace magma
scoreboard players set @a[r=3] icarus_temperature 0
execute as @a[r=3] run /function clear_icarus
effect @a[r=3] fire_resistance 3 0 true
effect @a[r=3] slowness 1 2 true
camera @a[r=3] fade time 0 0 1 color 50 50 100