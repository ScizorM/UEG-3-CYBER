#bridge-file-version: #8
execute as @a run execute positioned as @s run /execute if block ~ ~-2 ~ sm:lobbycontrols_enter_weaponshop run function lobby_enter_marque
execute as @a run execute positioned as @s run /execute if block ~ ~-2 ~ sm:lobbycontrols_arenas run function lobby_enter_arenas
execute as @a run execute positioned as @s run /execute if block ~ ~-2 ~ sm:lobbycontrols_credits run function lobby_enter_credits
execute as @a run execute positioned as @s run /execute if block ~ ~-2 ~ sm:lobbycontrols_race run function lobby_enter_race
execute as @a run execute positioned as @s run /execute if block ~ ~-2 ~ sm:lobbycontrols_reactor run function lobby_enter_reactor
execute as @a run execute positioned as @s run /execute if block ~ ~-2 ~ sm:lobbycontrols_spada run function lobby_enter_spada
execute as @a run execute positioned as @s run /execute if block ~ ~-2 ~ sm:lobbycontrols_splendid run function lobby_enter_splendid
execute as @a run execute positioned as @s run /execute if block ~ ~-2 ~ sm:lobbycontrols_music run function lobby_enter_music
 
 
 
 
execute as @a run execute positioned as @s run /execute if block ~ ~-2 ~ sm:lobbycontrols_exit run function lobby_exit