import { world, ItemCooldownComponent, system, Entity } from '@minecraft/server'
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui'



const dimension = world.getDimension("Overworld")

var randomSong1
var randomSong2
var randomSong3
var randomSong4
var randomSong5
var randomSong6

var randomSongActive

var randomSongName1
var randomSongName2
var randomSongName3
var randomSongName4
var randomSongName5
var randomSongName6

var randomSongNameActive

var currentRandomSong



///////////////////
system.runInterval(() => {


    const songEnabledScoreboard = world.scoreboard.getObjective("songs_enabled")
    const song01e = songEnabledScoreboard.getScore("song_1")
    const song02e = songEnabledScoreboard.getScore("song_2")
    const song03e = songEnabledScoreboard.getScore("song_3")
    const song04e = songEnabledScoreboard.getScore("song_4")
    const song05e = songEnabledScoreboard.getScore("song_5")
    const song06e = songEnabledScoreboard.getScore("song_6")
    const song07e = songEnabledScoreboard.getScore("song_7")
    const song08e = songEnabledScoreboard.getScore("song_8")
    const song09e = songEnabledScoreboard.getScore("song_9")
    const song10e = songEnabledScoreboard.getScore("song_10")
    const song11e = songEnabledScoreboard.getScore("song_11")
    const song12e = songEnabledScoreboard.getScore("song_12")
    const song13e = songEnabledScoreboard.getScore("song_13")
    const song14e = songEnabledScoreboard.getScore("song_14")
    const song15e = songEnabledScoreboard.getScore("song_15")
    const song16e = songEnabledScoreboard.getScore("song_16")
    const song17e = songEnabledScoreboard.getScore("song_17")
    const song18e = songEnabledScoreboard.getScore("song_18")

    var songEnabledCount = song01e + song02e + song03e + song04e + song05e + song06e + song07e + song08e + song09e + song10e + song11e + song12e + song12e + song13e + song14e + song15e + song16e + song17e + song18e

    const debugME2 = world.scoreboard.getObjective("debugME2")
    const debugME2_enabled = debugME2.getScore("debugME2")
    if (debugME2_enabled == 1) {
        system.run(() => randomizeMusic0())
        debugME2.setScore("debugME2", 0)
    }


    function randomizeMusic0() {
        currentRandomSong = 1
        system.run(() => randomizeMusic1(currentRandomSong))
        ////world.sendMessage("randomizeMusic: Phase 0")
    }

    function randomizeMusic1(currentRandomSong) {
        var continue_disabled = true
        if (songEnabledCount == 1) {
            if (song01e == 1) {
                randomSongActive = 1
            }
            else if (song02e == 1) {
                randomSongActive = 2
            }
            else if (song03e == 1) {
                randomSongActive = 3
            }
            else if (song04e == 1) {
                randomSongActive = 4
            }
            else if (song05e == 1) {
                randomSongActive = 5
            }
            else if (song06e == 1) {
                randomSongActive = 6
            }
            else if (song07e == 1) {
                randomSongActive = 7
            }
            else if (song08e == 1) {
                randomSongActive = 8
            }
            else if (song09e == 1) {
                randomSongActive = 9
            }
            else if (song10e == 1) {
                randomSongActive = 10
            }
            else if (song11e == 1) {
                randomSongActive = 11
            }
            else if (song12e == 1) {
                randomSongActive = 12
            }
            else if (song13e == 1) {
                randomSongActive = 13
            }
            else if (song14e == 1) {
                randomSongActive = 14
            }
            else if (song15e == 1) {
                randomSongActive = 15
            }
            else if (song16e == 1) {
                randomSongActive = 16
            }
            else if (song17e == 1) {
                randomSongActive = 17
            }
            else if (song18e == 1) {
                randomSongActive = 18
            }
        }
        else if (songEnabledCount == 0) {
            randomSongActive = 0
        }
        else {
            var randomSongActive = Math.round(Math.random() * 18)
            if (randomSongActive < 1 || randomSongActive > 18) {
                var randomSongActive = Math.round(Math.random() * 18)
            }
        }
        switch (randomSongActive){
            case 1:
                if (song01e == 1) {
                    randomSongNameActive = "music.marionette"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 2:
                if (song02e == 1) {
                    randomSongNameActive = "music.galaxy_torimoti"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 3:
                if (song03e == 1) {
                    randomSongNameActive = "music.tv_makes_you_dumber"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 4:
                if (song04e == 1) {
                    randomSongNameActive = "music.comic_mischief"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 5:
                if (song05e == 1) {
                    randomSongNameActive = "music.glassy_twins"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 6:
                if (song06e == 1) {
                    randomSongNameActive = "music.anything_to_gain_nothing_to_lose"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 7:
                if (song07e == 1) {
                    randomSongNameActive = "music.eject_plus_channel"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 8:
                if (song08e == 1) {
                    randomSongNameActive = "music.my_turbo_xeona"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 9:
                if (song09e == 1) {
                    randomSongNameActive = "music.tinydeath_kaizo_slumber_mix"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 10:
                if (song10e == 1) {
                    randomSongNameActive = "music.green_comet_in_the_key_of_something"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 11:
                if (song11e == 1) {
                    randomSongNameActive = "music.aquas_door_heaven_mix"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 12:
                if (song12e == 1) {
                    randomSongNameActive = "music.a_conflict_between_earth_mother_and_the_technogaia"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 13:
                if (song13e == 1) {
                    randomSongNameActive = "music.you_wouldnt_download"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 14:
                if (song14e == 1) {
                    randomSongNameActive = "music.purple_is_the_new_green"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 15:
                if (song15e == 1) {
                    randomSongNameActive = "music.schlierberg"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 16:
                if (song16e == 1) {
                    randomSongNameActive = "music.a_nu_earth"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 17:
                if (song17e == 1) {
                    randomSongNameActive = "music.gengar_ecstasy"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
            case 18:
                if (song18e == 1) {
                    randomSongNameActive = "music.space_angels_from_cyrene"
                    continue_disabled = false
                }
                else {
                    continue_disabled = true
                }
                break;
        }

        if (continue_disabled == false) {
            ////world.sendMessage("randomizeMusic: song is enabled")

            switch (currentRandomSong) {
                case 1:
                    randomSong1 = randomSongActive
                    randomSongName1 = randomSongNameActive
                    ////world.sendMessage("randomizeMusic: Song 1")
                    currentRandomSong = 2
                    system.run(() => randomizeMusic1(currentRandomSong))
                    break;
                case 2:
                    if (randomSongActive != randomSong1 && songEnabledCount > 1) {
                        randomSong2 = randomSongActive
                        randomSongName2 = randomSongNameActive
                        currentRandomSong = 3
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 2")
                    }
                    else if (randomSongActive != randomSong1 && songEnabledCount == 1) {
                        randomSong2 = randomSong1
                        randomSongName2 = randomSongName1
                        currentRandomSong = 3
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 2 (is the same as 1!)")
                    }
                    else {
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 2 invalid")
                    }
                    break;
                case 3:
                    if (randomSongActive != randomSong1 && randomSongActive != randomSong2 && songEnabledCount > 2) {
                        randomSong3 = randomSongActive
                        randomSongName3 = randomSongNameActive
                        currentRandomSong = 4
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 3")
                    }
                    else if (songEnabledCount <= 2) {
                        randomSong3 = randomSong1
                        randomSongName3 = randomSongName1
                        currentRandomSong = 4
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 3 (only 2 songs enabled!)")
                    }
                    else {
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 3 invalid")
                    }
                    break;
                case 4:
                    if (randomSongActive != randomSong1 && randomSongActive != randomSong2 && randomSongActive != randomSong3 && songEnabledCount > 3) {
                        randomSong4 = randomSongActive
                        randomSongName4 = randomSongNameActive
                        currentRandomSong = 5
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 4")
                    }
                    else if (songEnabledCount <= 3) {
                        randomSong4 = randomSong2
                        randomSongName4 = randomSongName2
                        currentRandomSong = 5
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 4 (only 3 songs or less enabled!)")
                    }
                    else {
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 4 invalid")
                    }
                    break;
                case 5:
                    if (randomSongActive != randomSong1 && randomSongActive != randomSong2 && randomSongActive != randomSong3 && randomSongActive != randomSong4 && songEnabledCount > 4) {
                        randomSong5 = randomSongActive
                        randomSongName5 = randomSongNameActive
                        currentRandomSong = 6
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 5")
                    }
                    else if (songEnabledCount <= 4) {
                        randomSong5 = randomSong3
                        randomSongName5 = randomSongName3
                        currentRandomSong = 6
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 5 (only 4 or less enabled)")
                    }
                    else {
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 5 invalid")
                    }
                    break;
                case 6:
                    if (randomSongActive != randomSong1 && randomSongActive != randomSong2 && randomSongActive != randomSong3 && randomSongActive != randomSong4 && randomSongActive != randomSong5 && songEnabledCount > 5) {
                        randomSong6 = randomSongActive
                        randomSongName6 = randomSongNameActive
                        //world.sendMessage("randomizeMusic: Song 6")
                        system.run(() => randomizeMusic2(randomSong1, randomSong2, randomSong3, randomSong4, randomSongName1, randomSongName2, randomSongName3, randomSongName4, randomSongName5, randomSongName6))
                        //world.sendMessage("Song 1: " + randomSongName1 + "\nSong 2: " + randomSongName2 + "\nSong 3: " + randomSongName3 + "\nSong 4: " + randomSongName4 + "\nSong 5: " + randomSongName5 + "\nSong 6: " + randomSongName6)
                    }
                    else if (songEnabledCount <= 5) {
                        randomSong6 = randomSong1
                        randomSongName6 = randomSongName1
                        //world.sendMessage("randomizeMusic: Song 6 (5 or less!)")
                        system.run(() => randomizeMusic2(randomSong1, randomSong2, randomSong3, randomSong4, randomSongName1, randomSongName2, randomSongName3, randomSongName4, randomSongName5, randomSongName6))
                        //world.sendMessage("Song 1: " + randomSongName1 + "\nSong 2: " + randomSongName2 + "\nSong 3: " + randomSongName3 + "\nSong 4: " + randomSongName4 + "\nSong 5: " + randomSongName5 + "\nSong 6: " + randomSongName6)
                    }
                    else {
                        system.run(() => randomizeMusic1(currentRandomSong))
                        //world.sendMessage("randomizeMusic: Song 6 invalid")
                    }
                    break;

            }
        }
        else {
            system.run(() => randomizeMusic1(currentRandomSong))
            //world.sendMessage("randomizeMusic: song is disabled")
        }
        

        //world.sendMessage(randomSongActive + "")
    }




    function randomizeMusic2(randomSong1, randomSong2, randomSong3, randomSong4, randomSongName1, randomSongName2, randomSongName3, randomSongName4, randomSongName5, randomSongName6) {
        ////world.sendMessage("received randomize2")
        const playMusicSB = world.scoreboard.getObjective("playMusic")
        const playMusicScore = playMusicSB.getScore("playMusic")
        

        if (playMusicScore == 0) {
            system.run(() => randomizeMusic2(randomSong1, randomSong2, randomSong3, randomSong4, randomSongName1, randomSongName2, randomSongName3, randomSongName4, randomSongName5, randomSongName6))
        }
        else {
            var timesStarted = 1
            system.run(() => playMusicF(randomSong1, randomSong2, randomSong3, randomSong4, randomSongName1, randomSongName2, randomSongName3, randomSongName4, randomSongName5, randomSongName6, timesStarted))
        }

        
    }

    var warning2
    function playMusicF(randomSong1, randomSong2, randomSong3, randomSong4, randomSongName1, randomSongName2, randomSongName3, randomSongName4, randomSongName5, randomSongName6, timesStarted, warning2) {
        const playMusicSB = world.scoreboard.getObjective("playMusic")
        const playMusicScore = playMusicSB.getScore("playMusic")

        const playMusicTimer = world.scoreboard.getObjective("playMusicTimer")
        const playMusicTimerS = playMusicTimer.getScore("playMusicTimer")

        //world.sendMessage("playmusic found")
        if (playMusicScore == 1) {
        system.run(() => playMusicG(randomSong1, randomSong2, randomSong3, randomSong4, randomSongName1, randomSongName2, randomSongName3, randomSongName4, randomSongName5, randomSongName6, timesStarted, warning2))
        function playMusicG(randomSong1, randomSong2, randomSong3, randomSong4, randomSongName1, randomSongName2, randomSongName3, randomSongName4, randomSongName5, randomSongName6, timesStarted, warning2) {


                world.getAllPlayers().forEach(player => {
                    player.playMusic(randomSongName1, { fade: 1 })
                        player.queueMusic(randomSongName2, { fade: 1 })
                        player.sendMessage(player.name + "Song 2 armed")
                        player.queueMusic(randomSongName3, { fade: 1 })
                        player.sendMessage(player.name + "Song 3 armed")
                        player.queueMusic(randomSongName4, { fade: 1 })
                        player.sendMessage(player.name + "Song 4 armed")
                        player.queueMusic(randomSongName5, { fade: 1 })
                        player.sendMessage(player.name + "Song 5 armed")
                        player.queueMusic(randomSongName6, { fade: 1 })
                    player.sendMessage(player.name + "Song 6 armed")
                    player.queueMusic(randomSongName2, { fade: 1 })
                    player.sendMessage(player.name + "Song 2 armed")
                    player.queueMusic(randomSongName3, { fade: 1 })
                    player.sendMessage(player.name + "Song 3 armed")
                    player.queueMusic(randomSongName4, { fade: 1 })
                    player.sendMessage(player.name + "Song 4 armed")
                    player.queueMusic(randomSongName5, { fade: 1 })
                    player.sendMessage(player.name + "Song 5 armed")
                    player.queueMusic(randomSongName6, { fade: 1 })
                    player.sendMessage(player.name + "Song 6 armed")
                        playMusicSB.setScore("playMusic", 0)
                        player.sendMessage("All songs armed")
                        playMusicTimer.setScore("playMusicTimer", 0)
                })
            }

        }
        else {
            system.run(() => playMusicF(randomSong1, randomSong2, randomSong3, randomSong4, randomSongName1, randomSongName2, randomSongName3, randomSongName4, randomSongName5, randomSongName6, timesStarted, warning2))
        }

    }
    const stopMb4Round_T = world.scoreboard.getObjective("stopMb4Round_T")
    const stopMb4Round_Ts = stopMb4Round_T.getScore("stopMb4Round_T")

    if (stopMb4Round_Ts == 1) {
        world.getAllPlayers().forEach(player => {

            if (player.hasTag("team_nu") || player.hasTag("team_lambda")) {
                player.playMusic("unknown", {fade: 3})
            }

        })
        stopMb4Round_T.setScore("stopMb4Round_T", 0)
    }

    world.getAllPlayers().forEach(player => {


        if (player.hasTag("teamed") && player.hasTag("musicPlaying") == false && player.hasTag("ingame") == false) {
            player.playMusic("music.sunshine_isles", { fade: 2 })
            player.sendMessage("playing waiting music")
            player.addTag("musicPlaying")
        }

        if (player.hasTag("resetMusic")) {
            player.playMusic("music.tagrst", { fade: 2 })
            player.sendMessage("playing lobby music")
            player.removeTag("resetMusic")
        }

        const musicEnabled = world.scoreboard.getObjective("music_enabled")
        const musicEnabledVar = musicEnabled.getScore(player)
        var musicBool

        switch (musicEnabledVar) {
            case 0:
                musicBool = false
                break;
            case 1:
                musicBool = true
                break;
        }

        var songName
        var songCredits

        if (player.hasTag("exit_stores") == false && player.hasTag("enter_music") == false) {
            songName = "music.urti"
            songCredits = "Kaizo Slumber - Urti"
        }
        else if (player.hasTag("enter_music")) {
            songName = "none"
            songCredits = "No Music"
        }
        else if (player.hasTag("exit_stores")) {
            songName = "music.tagrst"
            songCredits = "Kaizo Slumber - Tagrst"
        }
        else {
            songName = "unknown"
            songCredits = "unknown"
        }



        if (player.hasTag("music_playing") == false && player.hasTag("teamed") == false && player.hasTag("ingame") == false) {

            player.sendMessage("playing lobby music")

            if (songName != "none") {
                player.playMusic(songName, { loop: true, fade: 0.1 })
                player.addTag("music_playing")
            }
            else {
                player.playMusic(songName, { loop: true, fade: 1 })
                player.addTag("music_playing")
            }

        }
        else if (player.hasTag("music_playing") == false && player.hasTag("ingamemusic"))
        {

            player.removeTag("ingamemusic")
            player.runCommand("scoreboard players set queueMusicTrigger queueMusicTrigger 0")

        }



        if (player.hasTag("musicSettings")) {
            let form = new ModalFormData()
            form.title("Effect Generator");
            form.slider("Effect Level", 0, 100, 10)
            form.toggle("Enable Music", musicBool)

            form.show(player).then(r => {



                if (r.canceled)
                player.removeTag("musicSettings")
                return;

                let [slider, toggle] = r.formValues;

                musicEnabled.setScore(player,slider)


            })//.catch((e) => {
            ////world.sendMessage(e + "")
            //})
        }

        
    })


});

