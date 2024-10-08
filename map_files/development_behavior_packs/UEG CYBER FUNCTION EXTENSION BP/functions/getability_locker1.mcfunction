#bridge-file-version: #5
execute if score locker1_selectedability locker1_selectedability matches 1 run execute as @p run function remove_abilities
execute if score locker1_selectedability locker1_selectedability matches 2 run execute as @p run function select_ability_rocket
execute if score locker1_selectedability locker1_selectedability matches 3 run execute as @p run function select_ability_remote
execute if score locker1_selectedability locker1_selectedability matches 4 run execute as @p run function select_ability_prism
execute if score locker1_selectedability locker1_selectedability matches 5 run execute as @p run function select_ability_baby