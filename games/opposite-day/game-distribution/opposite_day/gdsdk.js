var adsEnabled = false;
var adPlaying = false;
var rewardAvailable = false;
var rewardGranted = false;
function initializeAds() {
    window["GD_OPTIONS"] = {
        gameId: "17ef62bfb90e4a709b456cefbe5d7c6e",
        advertisementSettings: {
            autoplay: false
        },
        onEvent: function (event) {
            switch (event.name) {
                case "SDK_GAME_START":
                    break;
                case "SDK_ERROR":
                    adError();
                    break;
                case "AD_ERROR":
                    adError();
                    break;
                case "SDK_GAME_PAUSE":
                    adPlaying = true;
                    game.paused = true;
                    break;
                case "SDK_READY":
                    adsEnabled = true;
                    break
                case "SDK_REWARDED_WATCH_COMPLETE":
                    rewardGranted = true;
                    break;
            }
        },
    };
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://html5.api.gamedistribution.com/main.min.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "gamedistribution-jssdk"));
    console.log("Initializing GDSDK");
}
initializeAds();
preloadRewardedAd();

function adError() {
    game.paused = false;
    adPlaying = false;
    adsEnabled = false;
    rewardAvailable = false;
    rewardGranted = false;
}

//interstitial (blank) or rewarded
function showAd(adType) {
    rewardGranted = false;
    if(!windpw.gdsdk) {
        console.log("GDSDK not available");
        return;
    }
    window.gdsdk.showAd(adType).catch(() => {
        cancelRewardedAd();
        console.log("Ad Error");
    });
}

function cancelRewardedAd() {
    game.paused = false;
    preloadRewardedAd();
}

function preloadRewardedAd() {
    if(!window.gdsdk) {
        console.log("GDSDK not available");
        return;
    }
    window.gdsdk.preloadAd("rewarded").then(() => {
        rewardAvailable = true;
    });
}