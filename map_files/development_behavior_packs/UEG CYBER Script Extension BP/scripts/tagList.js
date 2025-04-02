export {titleTags, storeTags }

// "new_title_init" is used for starting the titles, a placeholder will run if one of the following tags aren't specified

const titleTags = new Array(
    "new_title_respawned",
    "new_title_death",
    "new_title_3",
    "new_title_2",
    "new_title_1",
    "new_title_engage",
    "new_title_round_end",
    "new_title_team_nu_win",
    "new_title_team_lambda_win",
    "new_title_overheat",
    "new_title_cooldown",
    "new_title_stunned",
    "new_title_scaled",
    "new_title_1f",
    "new_title_2f",
    "new_title_3f",
    "new_title_train_ready",
    "new_title_to_azure",
    "new_title_welcome_azure",
    "new_title_arena_vote",
    "new_title_start_train",
    "new_title_riftzone",
    "new_title_j_mikes",
    "new_title_abilitystore",
    "new_title_hot_topic_clone",
    "new_title_perfume_store",
    "new_title_gamblinzone",
    "new_title_training_try_again",
    "new_title_training_checkpoint",
    "new_title_training_clear",
    "new_title_enter_training_center"
)

//Note on these: there are still some remaining functions from older versions of the map where certain stores were in different slots, but any tag not on this list does not have a particular purpose anymore.
//Note 2: these are out of order because I used the indexes when I first created this array.
const storeTags = new Array(
    //2F
    "enter_marque",     //Marque's Weapon Store                                 Index 0
    "enter_music",      //Torimoti Music                                        Index 1
    "enter_credits",    //Actually the arena Store                              Index 2
    "enter_reactor",    //REACTOR Settings Center                               Index 3
    "enter_splendid",   //Splendid Suits                                        Index 4
    //Misc.
    "exit_stores",       //No store                                             Index 5
    //2F Part 2
    "enter_credits_new",//Credits Store                                         Index 6
    //3F
    "enter_ueg",
    "enter_rpg",
    "enter_bank",
    //1F
    "enter_freedom",
    //???
    "enter_riftzone",
    "enter_j_mikes",
    //3F again
    "enter_abilitystore",
    "enter_hot_topic_clone",
    "enter_perfume_store",
    "enter_gamblinzone",
    "enter_tc",
    "enter_questMaster"
)