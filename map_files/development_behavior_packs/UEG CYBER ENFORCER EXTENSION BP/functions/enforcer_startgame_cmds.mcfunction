function enforcer_player_count_saved
scoreboard players add verify enforcer_round_verifier 1
scoreboard players operation @a[tag=team_nu] enforcer_round_verifier = verify enforcer_round_verifier
scoreboard players operation @a[tag=team_lambda] enforcer_round_verifier = verify enforcer_round_verifier