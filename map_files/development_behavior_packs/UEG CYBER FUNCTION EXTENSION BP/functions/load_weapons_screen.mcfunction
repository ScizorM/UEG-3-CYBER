#bridge-file-version: #7
execute positioned 170 16 22 run event entity @e[r=5,type=sm:display_case] sm:despawn
execute if score selected selected_weaponScreen matches 1 run structure load mystructure:Weapons_Default 166 14 22
execute if score selected selected_weaponScreen matches 2 run structure load mystructure:Weapons_Purchase 166 14 22
execute if score selected selected_weaponScreen matches 3 run structure load mystructure:Weapons_Mission 166 14 22
execute if score selected selected_weaponScreen matches 4 run structure load mystructure:Weapons_Secret 166 14 22