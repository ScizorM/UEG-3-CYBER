import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'

system.runInterval(() => {

    world.getAllPlayers().forEach(player => {

        const lives = world.scoreboard.getObjective("lives")

        const livesMessage = lives.getScore(player)

        const credits = world.scoreboard.getObjective("credits")

        const creditsMessage = credits.getScore(player)

        const wins = world.scoreboard.getObjective("player_wins")

        const winsMessage = wins.getScore(player)




        const playername = player.name

        if (player.hasTag("dev")) {
            const playername = player.name + ''
        }
        else {
            const playername = player.name
        }

        //crown: 
        //credits: 
        //lives: 
        //lambda: 

        if (player.hasTag("dev")) {

            if (player.hasTag("team_nu")) {
                player.nameTag = '' + '§c' + '' + playername + '\n§f' + livesMessage + ' ' + creditsMessage + ' ' + winsMessage + ' '
            }
            else if (player.hasTag("team_lambda")) {
                player.nameTag = '' + '§d' + '' + playername + '\n§f' + livesMessage + ' ' + creditsMessage + ' ' + winsMessage + ' '
            }
            else {
                player.nameTag = '§7' + playername + '\n§f' + '' + creditsMessage + ' ' + winsMessage + ' '
            }
        }

        if (player.hasTag("dev") == false) {

            if (player.hasTag("team_nu")) {
                player.nameTag = '§c' + playername + '\n§f' + livesMessage + ' ' + creditsMessage + ' ' + winsMessage
            }
            else if (player.hasTag("team_lambda")) {
                player.nameTag = '§d' + playername + '\n§f' + livesMessage + ' ' + creditsMessage + ' ' + winsMessage
            }
            else {
                player.nameTag = '§7' + playername + '\n§f' + '' + creditsMessage + ' ' + winsMessage
            }

        }



    })
});