#bridge-file-version: #5
setblock 139 -15 77 redstone_block
execute positioned 140.54 2.22 70.31 run event entity @e[r=2,type=sm:metro_sign] waiting
execute as @a[tag=on_train] run function ensure_no_train_lock