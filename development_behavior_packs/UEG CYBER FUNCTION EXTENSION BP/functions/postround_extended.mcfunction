#bridge-file-version: #5
execute if score "§cTeam Nu" points >= max_wins max_wins run title @a[tag=ingame,tag=team_nu] title 
execute if score "§cTeam Nu" points >= max_wins max_wins run title @a[tag=team_lambda] title 
execute if score "§dTeam Lambda" points >= max_wins max_wins run title @a[tag=ingame,tag=team_lambda] title 
execute if score "§dTeam Lambda" points >= max_wins max_wins run title @a[tag=team_nu] title 
##lose: 
##win: 
execute if score "§cTeam Nu" points < max_wins max_wins run execute if score "§dTeam Lambda" points < max_wins max_wins run title @a[tag=ingame] title 