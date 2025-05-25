import { world, system } from '@minecraft/server';
import { QuestTier0Check, QuestTier1Check } from './questConditions';

system.runInterval(() => {


    var winStreakSB = world.scoreboard.getObjective("winStreak");

    var gameWinsSB = world.scoreboard.getObjective("player_wins");
    var roundWinsSB = world.scoreboard.getObjective("player_round_wins");
    var creditsSB = world.scoreboard.getObjective("credits");

    var nearDeathCountSB = world.scoreboard.getObjective("nearDeathCount");

    var yLevelQuestSB = world.scoreboard.getObjective("yLevelQuest");

    var teamSizesSB = world.scoreboard.getObjective("teamSizes");
    teamSizesSB.setScore("teamNu", 0);
    world.getAllPlayers().forEach(player => {
        winStreakSB.addScore(player, 0);
        var winStreakPlayer = winStreakSB.getScore(player);
        yLevelQuestSB.addScore(player, 0);
        var yLevelQuestPlayer = yLevelQuestSB.getScore(player);
        nearDeathCountSB.addScore(player, 0);
        var nearDeathCountPlayer = nearDeathCountSB.getScore(player);

        //Tier 0: Game Wins
        system.run(() => QuestTier0Check(player, gameWinsSB, creditsSB));
        //Tier 1: Round Wins
        system.run(() => QuestTier1Check(player, roundWinsSB, creditsSB));

        //check win streak for quest 2_2
        if (winStreakPlayer >= 5) {
            player.addTag("quest_2_2");
        }

        //check team sizes for quest 2_3
        if (player.hasTag("team_nu")) {
            teamSizesSB.addScore("teamNu", 1);
        }

        //Tick down timer for quest 2_0
        if (yLevelQuestPlayer > 0) {
            yLevelQuestSB.addScore(player, -1);
        }

        //Check for y level for quests 2_0 and 2_1
        if (player.location.y < 20 && player.hasTag("ingame")) {
            if (!player.hasTag("lowestYLevel")) {
                nearDeathCountSB.addScore(player, 1);
                if (nearDeathCountPlayer >= 10) {
                    player.addTag("quest_2_1");
                }
            }
            player.addTag("lowestYLevel");
            yLevelQuestSB.setScore(player, 100);
        }
        else {
            player.removeTag("lowestYLevel");
        }

        //check for y level for quests 2_0 and 2_1
        if (player.location.y > 60 && player.hasTag("ingame")) {
            player.addTag("highestYLevel");
            if (yLevelQuestPlayer > 0) {
                player.addTag("quest_2_0");
            }
        }
        else {
            player.removeTag("highestYLevel");
        }

        if (!player.hasTag("ingame")) {
            nearDeathCountSB.setScore(player, 0);
        }

    });
});
