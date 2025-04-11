function getURL(text) {
    return text.replaceAll(" ", "-").toLowerCase();
}

function getTitle(url) {
    var words = url.replaceAll("-", " ").split(" ");
    for (var n in words) {
        words[n] = words[n][0].toUpperCase() + words[n].slice(1);
    }
    return words.join(" ");
}

function getTimestamp(date) {
    date = date.split("-");
    var date = new Date(date[2], date[0] - 1, date[1]);
    return date.getTime();
}

function scroll() {
    window.setTimeout(function () {
        var navigation = document.getElementById("navigation");
        if (navigation == null) return;
        if (window.scrollY == 0) {
            navigation.setAttribute("scrolled", false);
        } else {
            navigation.setAttribute("scrolled", true);
        }
    }, 1);
}

window.onwheel = function () {
    if (page == "game") {
        document.getElementById("game-iframe")?.blur();
        document.body.style.overflowY = "scroll";
    }
}

window.onscroll = scroll;

window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

window.onload = function () {
    loadDoc();
    scroll();
    window.setTimeout(function () {
        resize();
    }, 0);
}

window.onresize = function () {
    resize();
}

var params = {};
var page = "";
var recentUpdates = [];
var newGames = JSON.parse(JSON.stringify(games)).reverse().splice(0, 5);
var searching = false;
var lastSearchValue = "";

function resize() {
    resizeSmallGameCards();
    resizeSquareGameCards();
}

function resizeSmallGameCards() {
    var gameCards = document.body.getElementsByClassName("small-game-card-container");
    for (var card of gameCards) {
        var box = card.getBoundingClientRect();
        var width = box.width;
        if (width < 260) {
            card.children[0].classList.add("hide-version");
        } else {
            card.children[0].classList.remove("hide-version");
        }
    }
}

function resizeSquareGameCards() {
    var gameCards = document.body.getElementsByClassName("square-game-card-container");
    for (var card of gameCards) {
        var box = card.getBoundingClientRect();
        var width = box.width;
        if (width < 220) {
            card.children[0].classList.add("hide-icons");
        } else {
            card.children[0].classList.remove("hide-icons");
        }
    }
}

function initURLParams() {
    var urlQuery = window.location.search;
    var urlParams = new URLSearchParams(urlQuery);
    var keys = urlParams.keys();
    for (var key of keys) {
        params[key] = urlParams.get(key);
    }
}

function initJBGGamesPlayed() {
    if (localStorage.getItem("jbggamesplayed") == null) {
        localStorage.setItem("jbggamesplayed", "{}");
    }
    if (localStorage.getItem("jbgfirstplaydate") == null) {
        localStorage.setItem("jbgfirstplaydate", new Date().getTime());
    }

    var jbggamesplayed = JSON.parse(localStorage.getItem("jbggamesplayed"));
    var keys = Object.keys(jbggamesplayed);
    for (var key of keys) {
        if (!Array.isArray(jbggamesplayed[key])) {
            delete jbggamesplayed[key];
        }
    }
    for (var game of games) {
        var URL = getURL(game);
        var lastPlayed = jbggamesplayed[URL];
        if (lastPlayed === undefined || !Array.isArray(lastPlayed) || lastPlayed.length == 0) {
            lastPlayed = Number(localStorage.getItem("jbgfirstplaydate"));
        } else {
            lastPlayed = lastPlayed[lastPlayed.length - 1].start;
        }
        var gameVersions = versions[URL];
        if (gameVersions.length == 1) continue;
        var currentVersion = gameVersions[gameVersions.length - 1];
        var timestamp = getTimestamp(currentVersion.date);
        if (lastPlayed < timestamp) {
            recentUpdates.push(URL);
        }
    }
    localStorage.setItem("jbggamesplayed", JSON.stringify(jbggamesplayed));
}

function loadNavigationLogo() {
    document.getElementById("navigation-logo-holder").setAttribute("loaded", true);
}

function loadHeader() {
    if (page != "game" && page != "game-not-found" && page != "timeline" && page != "playlist-not-found") {
        document.body.innerHTML = `<div id="title-bar"><div id="title-bar-text">John Butler Games</div></div>` + document.body.innerHTML;
        window.setTimeout(function () { document.getElementById("title-bar-text").style.transform = "scale(1,1)"; }, 500);
    }
    document.body.innerHTML = `
<div id="search-blur"></div>
<div id="search-bar-results"></div>
<div id="navigation">
<button title="Search games" id="search-button"><img src="images/search-icon-white.png" /></button>
<a href="https://johnbutlergames.com" id="navigation-logo-holder" loaded="false">
<img src="images/logo.png" id="navigation-logo">
<div id="navigation-title-holder">
<font id="navigation-title" class="animated-link">johnbutlergames</font>
</div>
</a>
<div id="navigation-links">
<div><a href="all-games.html" class="animated-link">All Games</a></div>
<div><a href="playlists.html" class="animated-link">Playlists</a></div>
<div><a href="timeline.html" class="animated-link">Timeline</a></div>
<div><a href="highscores.html" class="animated-link">Highscores</a></div>
<div><a href="https://www.redbubble.com/shop/ap/108442916" class="animated-link">Merch</a></div>
</div>
</div>
<div id="search-bar">
<button id="x-button" title="Close"><img src="images/x-icon.png" /></button>
<input id="search-bar-input" placeholder="Search Games...">
</div>
<div id="top-nav-buffer"></div>
` + document.body.innerHTML;
    if (document.URL.indexOf("w3spaces") != -1) {
        document.getElementById("navigation-logo-holder").setAttribute("href", "https://johnbutlergames.w3spaces.com");
    }
    document.getElementById("navigation-logo").onload = loadNavigationLogo;
    var times = [1100, 1300, 1500, 1700, 1900];
    if (page != "home") {
        times = [0, 0, 0, 0];
        for (var child of document.getElementById("navigation-links").children) {
            child.style.transition = "none";
        }
        document.getElementById("navigation-logo").style.transition = "none";
        document.getElementById("navigation-title-holder").style.transition = "none";
        if (document.getElementById("title-bar-text") !== null) {
            document.getElementById("title-bar-text").style.transition = "none";
            document.getElementById("title-bar-text").style.transform = "none";
        }
    }
    window.setTimeout(function () {
        document.getElementById("navigation-links").children[0].setAttribute("loaded", true);
    }, times[0]);
    window.setTimeout(function () {
        document.getElementById("navigation-links").children[1].setAttribute("loaded", true);
    }, times[1]);
    window.setTimeout(function () {
        document.getElementById("navigation-links").children[2].setAttribute("loaded", true);
    }, times[2]);
    window.setTimeout(function () {
        document.getElementById("navigation-links").children[3].setAttribute("loaded", true);
    }, times[3]);
    window.setTimeout(function () {
        document.getElementById("navigation-links").children[4].setAttribute("loaded", true);
    }, times[4]);

    window.setTimeout(function () {
        document.getElementById("search-button").onclick = function () {
            toggleSearchBar(true);
        }
        document.getElementById("x-button").onclick = function () {
            toggleSearchBar(false);
        }
        document.getElementById("search-blur").onclick = function () {
            toggleSearchBar(false);
        }
        document.getElementById("search-bar-input").onkeydown = function (event) {
            window.setTimeout(function () {
                var newSearchValue = document.getElementById("search-bar-input").value;
                if (newSearchValue == lastSearchValue) {
                    return;
                }
                lastSearchValue = newSearchValue;
                search();
            }, 1);
        }
    }, 0);
}

function toggleSearchBar(set) {
    searching = !searching;
    if (set !== undefined) searching = set;
    document.getElementById("navigation").setAttribute("searching", searching);
    document.getElementById("search-bar").setAttribute("searching", searching);
    document.getElementById("search-blur").setAttribute("searching", searching);
    document.getElementById("search-bar-results").setAttribute("searching", searching);
    if (searching) {
        document.getElementById("search-bar-input").focus();
        document.body.style.overflowY = "hidden";
    } else {
        document.getElementById("search-bar-input").value = "";
        document.body.style.overflowY = "scroll";
        document.getElementById("search-bar-results").innerHTML = "";
    }
}

function search() {
    var keys = Object.keys(playlists);
    var accepted = "abcdefghijklmnopqrstuvwxyz1234567890 ";
    var searchValue = document.getElementById("search-bar-input").value.replace(/-/g, " ").toLowerCase();
    searchValue = searchValue.split("").filter(e => accepted.includes(e)).join("");
    var words = searchValue.split(" ");
    var sortedGames = [];
    for (var game of games) {
        var gameText = game.replace(/-/g, " ").toLowerCase();
        for (var key of keys) {
            if (playlists[key].includes(game)) {
                gameText += " " + key.toLowerCase();
            }
        }
        gameText = gameText.split("").filter(e => accepted.includes(e)).join("");
        var gameWords = gameText.split(" ");
        var points = 0;
        for (var word1 of words) {
            for (var word2 of gameWords) {
                points += similarity(word1, word2);
            }
        }
        points /= gameWords.length;
        sortedGames.push({ name: game, points: points });
    }
    sortedGames = sortedGames.filter(e => e.points);
    sortedGames.sort((a, b) => b.points - a.points);
    sortedGames = sortedGames.splice(0, 15);
    var searchBarResults = document.getElementById("search-bar-results");
    searchBarResults.innerHTML = "";
    for (var game of sortedGames) {
        var gameCard = createGameCard(game.name);
        gameCard.children[0].setAttribute("no-transition", true);
        searchBarResults.appendChild(gameCard);
        searchBarResults.appendChild(document.createElement("br"));
    }
    window.setTimeout(function () {
        var searchBarResults = document.getElementById("search-bar-results");
        for (var n = 0; n < searchBarResults.children.length; n += 2) {
            var gameCard = searchBarResults.children[n];
            gameCard.children[0].setAttribute("no-transition", false);
        }
    }, 1);
    if (sortedGames.length == 0 && searchValue != "") {
        searchBarResults.innerHTML = `<font id="no-search-results">We can't find the game you are looking for...</font>`;
    }
}

function similarity(word1, word2) {
    if (word1.length == 0 || word2.length == 0) return 0;
    var points = 0;
    var chars1 = word1.split("");
    var chars2 = word2.split("");
    for (var c of chars1) {
        if (!chars2.includes(c)) continue;
        points++;
        chars2.splice(chars2.indexOf(c), 1);
    }
    var lengthDif = Math.abs(word1.length - word2.length);
    if (points < 4 && lengthDif > 1) points = 0;
    points -= lengthDif;
    points = Math.max(points, 0);
    if (word2.includes(word1)) points += 3;
    return points;
}

function loadFooter() {
    document.body.innerHTML += `
<div id="footer">
<div>
All for games and games for all!
</div>
<br>
<div>
Questions? Comments? Concerns? Send an email to johnbutlergames777@gmail.com
</div>
<br>
<div>
Copyright © 2022 John Butler. All Rights Reserved.
</div>
`;
    for (var time of [1, 100, 200, 1000, 5000]) {
        window.setTimeout(function () {
            positionFooter();
        }, time);
    }
}

function positionFooter() {
    var footer = document.getElementById("footer");
    if (!footer.marginTop) footer.marginTop = 0;
    var rect = footer.getBoundingClientRect();
    var height = window.innerHeight;
    if (rect.y + rect.height < height) {
        footer.marginTop += height - (rect.y + rect.height) - 1;
        footer.style.marginTop = footer.marginTop + "px";
    }
}

function loadDoc() {
    if (document.URL.includes("/index.html") || document.URL == "https://johnbutlergames.com/" || document.URL == "https://johnbutlergames.w3spaces.com/") {
        page = "home";
    }
    if (document.URL.includes("/timeline.html")) {
        page = "timeline";
    }
    if (document.URL.includes("/game.html")) {
        page = "game";
    }
    if (document.URL.includes("/all-games.html")) {
        page = "all-games";
    }
    if (document.URL.includes("/playlists.html")) {
        page = "playlists";
    }
    if (document.URL.includes("/playlist.html")) {
        page = "playlist";
    }
    if (document.URL.includes("/playlist-not-found.html")) {
        page = "playlist-not-found";
    }
    if (document.URL.includes("/highscores.html")) {
        page = "highscores";
    }
    if (document.URL.includes("/game-not-found.html")) {
        page = "game-not-found";
    }
    initURLParams();
    initJBGGamesPlayed();
    loadHeader();
    if (page != "timeline") loadFooter();

    if (page == "home") loadMainPage();
    if (page == "game") loadGamePage();
    if (page == "all-games") loadAllGamesPage();
    if (page == "playlists") loadPlaylistsPage();
    if (page == "playlist") loadPlaylistPage();
    if (page == "highscores") loadHighscoresPage();
    if (page == "timeline") loadTimelinePage();
}

function addNewGamePlay(gameURL) {
    var jbggamesplayed = JSON.parse(localStorage.getItem("jbggamesplayed"));
    if (typeof jbggamesplayed != "object" || Array.isArray(jbggamesplayed)) jbggamesplayed = {};
    if (jbggamesplayed[gameURL] === undefined) jbggamesplayed[gameURL] = [];
    var gameTimes = jbggamesplayed[gameURL];
    if (!Array.isArray(gameTimes)) gameTimes = [];
    var time = new Date().getTime();
    gameTimes.push({ start: time, end: time });
    localStorage.setItem("jbggamesplayed", JSON.stringify(jbggamesplayed));
}

function loadGamePage() {
    if (!params.game) {
        window.open("game-not-found.html", "_self");
        return;
    }
    var gameURL = getURL(params.game);
    if (params.game != getURL(params.game)) {
        window.open("game-not-found.html", "_self");
        return;
    }
    var gameTitle = getTitle(params.game);
    if (!games.includes(gameTitle)) {
        window.open("game-not-found.html", "_self");
        return;
    }
    addNewGamePlay(gameURL);

    var gameVersions = versions[gameURL];
    var version = gameVersions[gameVersions.length - 1].version;
    if (params.version) {
        version = params.version;
        document.getElementById("game-version").innerHTML = `Version: ${params.version}`;
    }
    if (gameVersions.filter(e => e.version == version).length == 0) {
        window.open(`game.html?game=${params.game}`, "_self");
        return;
    }
    version = version.replace(/\./g, "-");

    var gameIframe = document.getElementById("game-iframe");
    gameIframe.src = `games/${params.game}/${version}/index.html`;
    gameIframe.focus();

    document.getElementById("game-title").innerHTML = `<font>${gameTitle}</font>`;
    document.title = `${gameTitle} - John Butler Games`;

    window.focus();
    window.onblur = function () {
        window.setTimeout(function () {
            if (document.activeElement.tagName == "IFRAME") {
                var gameIframe = document.getElementById("game-iframe");
                var bodyBox = document.body.getBoundingClientRect();
                var box = gameIframe.getBoundingClientRect();
                window.scrollTo(0, box.y - bodyBox.y - 85);
                document.body.style.overflow = "hidden";
            }
        }, 1);
    }
    window.onclick = function () {
        document.body.style.overflowY = "scroll";
    }

    var fullscreenButton = document.getElementById("fullscreen-button");
    fullscreenButton.onclick = function () {
        document.getElementById("game-iframe").requestFullscreen();
        document.getElementById("game-iframe").focus();
    }

    window.setInterval(function () {
        setLastPlayToCurrentTime();
    }, 10000);
    window.onbeforeunload = function () {
        setLastPlayToCurrentTime();
    }

    loadGamePageVersionHistory();
    loadGamePageRecommended();
}

function loadGamePageRecommended() {
    var similarity = [];
    var currentGameURL = params.game;
    for (var game of games) {
        var URL = getURL(game);
        if (URL == params.game) continue;
        var tags1 = tags[URL];
        var tags2 = tags[currentGameURL];
        var score = 0;
        for (var tag of tags1) {
            if (tags2.indexOf(tag) != -1) score++;
        }
        similarity.push([URL, score]);
    }
    similarity = similarity.sort((a, b) => b[1] - a[1]);
    for (var n = 0; n < 12; n++) {
        var div = document.createElement("div");
        div.className = "mini-game-card-position-container";
        var URL = similarity[n][0];
        var mini = createMiniGameCard(URL);
        div.appendChild(mini);
        div.style.marginLeft = n * 130 + "px";
        document.getElementById("recommended-games-container").appendChild(div);
    }
    var paddingDiv = document.createElement("div");
    paddingDiv.id = "recommended-games-container-padding-div";
    document.getElementById("recommended-games-container").appendChild(paddingDiv);

    document.getElementById("recommended-games-scroll-back").onclick = function () {
        document.getElementById("recommended-games-container").scrollBy({ top: 0, left: -500, behavior: "smooth" });
    }
    document.getElementById("recommended-games-scroll-forward").onclick = function () {
        document.getElementById("recommended-games-container").scrollBy({ top: 0, left: 500, behavior: "smooth" });
    }
}

function loadGamePageVersionHistory() {
    var gameURL = getURL(params.game);
    var gameVersions = versions[gameURL];

    var versionHistoryDiv = document.getElementById("version-history-content");

    for (var version of gameVersions) {
        var div = document.createElement("a");
        div.className = "version-section-container";
        div.title = "Click to view this version";
        div.setAttribute("href", `game.html?game=${params.game}&version=${version.version}`);

        if (!version.description) version.description = "";
        if (!version.title) version.title = "";
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var suffixes = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
        var month = months[version.date.split("-")[0] - 1];
        var day = version.date.split("-")[1];
        var suffix = suffixes[day[day.length - 1]];
        if (day[0] == 1) suffix = "th";
        var year = version.date.split("-")[2];
        var dateText = `${month} ${day}${suffix}, ${year}`;
        if (version.date.split("-")[1] == "?") dateText = `${month} ${year}`;
        if (version.date.split("-")[0] == "?") dateText = year;

        div.innerHTML = `
<div class="version-section">
<div class="version-section-date">${dateText}</div>
<div class="game-card-version version version-text">${version.version}</div>
<div class="version-section-title">${version.title}</div>
<div class="version-section-description">${version.description}</div>
</div>
`;
        var versionTextElement = div.children[0].children[1];
        var text = version.version;
        if (text.startsWith("a")) {
            versionTextElement.innerHTML = text;
            versionTextElement.classList.add("alpha");
            versionTextElement.title = "Version: Alpha " + text.slice(1);
        } else if (text.startsWith("b")) {
            versionTextElement.innerHTML = text;
            versionTextElement.classList.add("beta");
            versionTextElement.title = "Version: Beta " + text.slice(1);
        } else {
            versionTextElement.innerHTML = "v" + text;
            versionTextElement.title = "Version: " + text;
        }

        versionHistoryDiv.insertBefore(div, versionHistoryDiv.firstChild);
    }
}

function setLastPlayToCurrentTime() {
    var gameURL = getURL(params.game);
    var jbggamesplayed = JSON.parse(localStorage.getItem("jbggamesplayed"));
    var gameTimes = jbggamesplayed[gameURL];
    var last = gameTimes[gameTimes.length - 1];
    last.end = new Date().getTime();
    localStorage.setItem("jbggamesplayed", JSON.stringify(jbggamesplayed));
}

function loadPlaylistsPage() {
    window.setTimeout(function () {
        document.getElementById("playlists-title").setAttribute("loaded", true);
    }, 0);
    var titles = ["Word", "Timed", "Strategy", "Skill", "Single Player", "Platformer", "Number", "Multiplayer", "Miscellaneous", "Logic", "Festive", "Driving", "Aiming"];
    for (var n = 0; n < titles.length; n++) {
        var title = titles[n];
        var playlistCard = createPlaylistCard(title);
        playlistCard.children[0].style.transitionDelay = n * 120 + 100 + "ms";
        document.getElementById("playlists").appendChild(playlistCard);
    }
    window.setTimeout(function () {
        for (var child of document.getElementById("playlists").children) {
            child.children[0].style.transitionDelay = "0ms";
        }
    }, titles.length * 120 + 100);
}

function loadPopularInPlaylist() {
    var playlistGames = playlists[getTitle(params.playlist)];
    if (playlistGames.length < 6) {
        document.getElementById("popular-playlist-games-title").remove();
        return;
    }
    var popularInPlaylist = popularity.filter(e => playlistGames.includes(e));
    for (var n = 0; n < playlistGames.length / 3; n++) {
        var game = popularInPlaylist[n];
        var gameCard = createSquareGameCard(game);
        gameCard.children[0].style.transitionDelay = 600 + n * 120 + "ms";
        document.getElementById("popular-playlist-games").appendChild(gameCard);
    }
    window.setTimeout(function () {
        for (var child of document.getElementById("popular-playlist-games").children) {
            child.children[0].style.transitionDelay = "0ms";
        }
    }, 1080);
    window.setTimeout(function () {
        document.getElementById("popular-playlist-games-title").innerHTML = "Popular:";
        document.getElementById("popular-playlist-games-title").setAttribute("loaded", true);
    }, 500);
}

function loadPlaylistPage() {
    if (!params.playlist || !playlists[getTitle(params.playlist)]) {
        window.open("playlist-not-found.html", "_self");
    }
    var div = createPlaylistTitle(params.playlist);
    document.getElementById("playlist-title").appendChild(div);
    window.setTimeout(function () {
        document.getElementById("playlist-title").children[0].children[0].setAttribute("loaded", true);
    }, 0);

    var playlistGames = playlists[getTitle(params.playlist)];
    playlistGames.sort();
    for (var n = 0; n < playlistGames.length; n++) {
        var game = playlistGames[n];
        var gameCard = createGameCard(game);
        gameCard.children[0].style.transitionDelay = 100 + n * 120 + "ms"
        document.getElementById("playlist-games").appendChild(gameCard);
    }

    window.setTimeout(function () {
        for (var child of document.getElementById("playlist-games").children) {
            child.children[0].style.transitionDelay = "0ms";
        }
    }, 100 + playlistGames.length * 120);

    loadPopularInPlaylist();
}

function loadHighscoresPage() {
    window.setTimeout(function () {
        document.getElementById("highscores-title").setAttribute("loaded", true);
    }, 0);

    var table = document.getElementById("highscore-table");
    for (var n = 0; n < highscores.length; n++) {
        var h = highscores[n];
        var row = document.createElement("tr");
        var URL = getURL(h.game);
        row.innerHTML = `
<th><div>${h.title.replace(getTitle(h.game), `<a href="game.html?game=${URL}">${getTitle(h.game)}</a>`)}</div></th>
<th><div>${h.who}</div></th>
<th><div>${h.text}</div></th>
`;
        table.appendChild(row);
    }
    window.setTimeout(function () {
        var table = document.getElementById("highscore-table");
        for (var n = 0; n < table.children.length; n++) {
            var child = table.children[n];
            var children = child.children;
            children[0].children[0].setAttribute("loaded", true);
            children[1].children[0].setAttribute("loaded", true);
            children[2].children[0].setAttribute("loaded", true);
            children[0].children[0].style.transitionDelay = n * 50 + "ms";
            children[1].children[0].style.transitionDelay = n * 50 + "ms";
            children[2].children[0].style.transitionDelay = n * 50 + "ms";
        }
    }, 0);
}

function loadAllGames() {
    document.getElementById("games-a-to-z").innerHTML = "";
    var sortBy = document.getElementById("sort-by-select").value;
    var gameArray;
    if (sortBy == "A-Z" || sortBy == "Z-A") {
        gameArray = JSON.parse(JSON.stringify(games)).sort();
    }
    if (sortBy == "New" || sortBy == "Old") {
        gameArray = JSON.parse(JSON.stringify(games)).reverse();
    }
    if (sortBy == "Popular" || sortBy == "Unpopular") {
        gameArray = JSON.parse(JSON.stringify(popularity));
    }
    if (sortBy == "Z-A" || sortBy == "Old" || sortBy == "Unpopular") {
        gameArray.reverse();
    }
    for (var n = 0; n < gameArray.length; n++) {
        var gameCard = createGameCard(gameArray[n]);
        document.getElementById("games-a-to-z").appendChild(gameCard);
    }
}

function loadAllGamesPage() {
    window.setTimeout(function () {
        document.getElementById("all-games-title").setAttribute("loaded", true);
    }, 0);
    document.getElementById("sort-by-select").onchange = function () {
        loadAllGames();
    }
    if (params.sort) {
        var accept = ["a-z", "z-a", "new", "old", "popular", "unpopular"];
        var terms = ["A-Z", "Z-A", "New", "Old", "Popular", "Unpopular"];
        if (accept.includes(params.sort)) {
            document.getElementById("sort-by-select").value = terms[accept.indexOf(params.sort)];
        }
    }
    loadAllGames();
}

function loadNewVersions() {
    var gamesUpdatedDates = [];
    for (var game of games) {
        var URL = getURL(game);
        var gameVersions = versions[URL];
        var currentVersion = gameVersions[gameVersions.length - 1];
        var timestamp = getTimestamp(currentVersion.date);
        gamesUpdatedDates.push({ url: URL, timestamp: timestamp });
    }
    gamesUpdatedDates = gamesUpdatedDates.sort((a, b) => b.timestamp - a.timestamp);
    for (var n = 0; n < 5; n++) {
        var URL = gamesUpdatedDates[n].url;
        var gameCard = createGameCard(URL);
        gameCard.children[0].style.transitionDelay = n * 120 + 100 + "ms";
        document.getElementById("new-versions").appendChild(gameCard);
    }
    window.setTimeout(function () {
        document.getElementById("new-versions-title").setAttribute("loaded", true);
    }, 0);
    window.setTimeout(function () {
        var newVersionsContainer = document.getElementById("new-versions");
        for (var child of newVersionsContainer.children) {
            if (child.tagName == "BR") continue;
            child.children[0].style.transitionDelay = "0ms";
        }
    }, 700);
}

function loadNewGames() {
    for (var n = 0; n < newGames.length; n++) {
        var gameCard;
        if (n < 1) {
            var gameCard = createGameCard(newGames[n]);
        } else {
            var gameCard = createSmallGameCard(newGames[n]);
        }
        gameCard.children[0].style.transitionDelay = n * 120 + 900 + "ms";
        document.getElementById("new-games").appendChild(gameCard);
        if (n < 1) document.getElementById("new-games").appendChild(document.createElement("br"));
        if (n >= 1) {
            if (n % 2 == 0) {
                gameCard.setAttribute("odd", true);
            }
        }
    }
    window.setTimeout(function () {
        document.getElementById("new-games-title").setAttribute("loaded", true);
    }, 800);
    window.setTimeout(function () {
        var newGamesContainer = document.getElementById("new-games");
        for (var child of newGamesContainer.children) {
            if (child.tagName == "BR") continue;
            child.children[0].style.transitionDelay = "0ms";
        }
    }, 1500);
    window.setTimeout(function () {
        document.getElementById("view-all-new-games-container").setAttribute("loaded", true);
    }, 1520);
}

function loadPopularGames() {
    for (var n = 0; n < popularity.length && n < 10; n++) {
        var gameCard = createSmallGameCard(popularity[n]);
        gameCard.children[0].style.transitionDelay = n * 100 + 1600 + "ms";
        document.getElementById("popular-games").appendChild(gameCard);
        if (n % 2 == 1) {
            gameCard.setAttribute("odd", true);
        }
    }
    window.setTimeout(function () {
        document.getElementById("popular-games-title").setAttribute("loaded", true);
    }, 1600);
    window.setTimeout(function () {
        var popularGamesContainer = document.getElementById("popular-games");
        for (var child of popularGamesContainer.children) {
            child.children[0].style.transitionDelay = "0ms";
        }
    }, 2600);
    window.setTimeout(function () {
        document.getElementById("view-all-popular-games-container").setAttribute("loaded", true);
    }, 2620);
}

function loadDailyGame() {
    var gamesToPlay = JSON.parse(JSON.stringify(popularity)).splice(0, 30);
    var dailyGame = gamesToPlay[Math.floor(new Date().getTime() % (86400000 * gamesToPlay.length) / 86400000)];
    var dailyGameDiv = document.getElementById("daily-game");
    var gameCard = createSquareGameCard(dailyGame);
    dailyGameDiv.children[1].appendChild(gameCard);

    window.setTimeout(function () {
        document.getElementById("daily-game-title").setAttribute("loaded", true);
    }, 1300);
    window.setTimeout(function () {
        document.getElementById("daily-game-container").setAttribute("loaded", true);
    }, 1500);
}

function loadUpdates() {
    for (var n = 0; n < 5; n++) {
        var update = updates[n];
        var p = document.createElement("p");
        var content = update.content;
        for (var game of update.games) {
            var title = getTitle(game);
            var url = getURL(game);
            content = content.replace(title, `<a href="game.html?game=${url}">${title}</a>`);
        }
        p.innerHTML = `${update.date}: ${content}`; update.date + ': ' + content;
        document.getElementById("updates-container").appendChild(p);
    }

    window.setTimeout(function () {
        document.getElementById("updates-title").setAttribute("loaded", true);
    }, 800);
    window.setTimeout(function () {
        document.getElementById("updates-container").setAttribute("loaded", true);
    }, 1150);
    window.setTimeout(function () {
        document.getElementById("view-full-changelog-container").setAttribute("loaded", true);
    }, 1500);
}

function loadOppositeDayCoolmathgames() {
    window.setTimeout(function () {
        document.getElementById("opposite-day-coolmathgames").setAttribute("loaded", true);
    }, 1700);
}

function loadContinuePlaying() {
    var jbggamesplayed = JSON.parse(localStorage.getItem("jbggamesplayed"));
    var keys = Object.keys(jbggamesplayed);
    if (keys.length == 0) {
        document.getElementById("continue-playing").remove();
        return;
    }
    var lastPlay = { date: 0, game: false };
    for (var key of keys) {
        var plays = jbggamesplayed[key];
        var last = plays[plays.length - 1];
        if (last.end > lastPlay.date) {
            lastPlay.date = last.end;
            lastPlay.game = key;
        }
    }
    var div = createSquareGameCard(lastPlay.game);
    document.getElementById("continue-playing-container").appendChild(div);

    window.setTimeout(function () {
        document.getElementById("continue-playing-title").setAttribute("loaded", true);
    }, 1900);
    window.setTimeout(function () {
        document.getElementById("continue-playing-container").setAttribute("loaded", true);
    }, 2400);
}

function loadLatestVideo() {
    window.setTimeout(function () {
        document.getElementById("latest-video-title").setAttribute("loaded", true);
    }, 400);
    window.setTimeout(function () {
        document.getElementById("latest-video").setAttribute("loaded", true);
    }, 650);
    window.setTimeout(function () {
        document.getElementById("youtube-logo").setAttribute("loaded", true);
    }, 650);
}

function loadDiscord() {
    window.setTimeout(function () {
        document.getElementById("discord-title").setAttribute("loaded", true);
    }, 400);
    window.setTimeout(function () {
        document.getElementById("discord").setAttribute("loaded", true);
    }, 650);
}

function loadSloganImage() {
    window.setTimeout(function () {
        document.getElementById("slogan").setAttribute("loaded", true);
    }, 1700);
}

function loadMainPage() {
    loadNewVersions();
    loadNewGames();
    loadPopularGames();
    loadOppositeDayCoolmathgames();
    loadUpdates();
    loadContinuePlaying();
    loadDiscord();
    //loadLatestVideo();
    loadDailyGame();
    loadSloganImage();
}

function loadTimelinePage() {
}

function createPlaylistTitle(playlist) {
    var url = getURL(playlist);
    var div = document.createElement('div');
    div.setAttribute("playlist", url);
    div.className = "playlist-title-container";
    div.innerHTML = `
<div class="playlist-title">
<div class="playlist-title-image-container">
<img src="playlist-icons/${url}.png"></img>
</div>
<div class="playlist-title-title-container">
<font>${getTitle(playlist)} Games:</font>
</div>
</div>
</div>
`;
    return div;
}

function createPlaylistCard(playlist) {
    var url = getURL(playlist);
    var div = document.createElement('div');
    div.setAttribute("playlist", url);
    div.className = "playlist-card-container";
    div.innerHTML = `
<div class="playlist-card">
<a href="playlist.html?playlist=${url}">
<button></button>
<div class="playlist-card-image-container">
<img src="playlist-icons/${url}.png"></img>
</div>
<div class="playlist-card-title-container">
<font>${getTitle(playlist)}</font>
</div>
</a>
</div>
</div>
`;
    div.children[0].children[0].children[1].children[0].onload = function () {
        this.parentElement.parentElement.parentElement.setAttribute("loaded", true);
    }
    return div;
}

function createGameCard(game) {
    var url = getURL(game);
    var title = getTitle(game);
    var updated = recentUpdates.indexOf(url) != -1;
    var div = document.createElement("div");
    var gameVersions = versions[url];
    var version = false;
    if (gameVersions) {
        var current = gameVersions[gameVersions.length - 1];
        version = current.version;
    }
    div.className = "game-card-container";
    div.innerHTML = `
<div class="game-card" loaded="false">
<a href="game.html?game=${url}">
<div class="game-card-icons-container"></div>
<div class="game-card-image-container">
<img src="game-gifs/${url}.gif"></img>
<img src="game-icons/${url}.png"></img>
</div>
<div class="game-card-title-container">
<font class="game-card-title">${title}</font>
<font class="game-card-version version version-text"></font>
</div>
<div class="game-card-description-container">
<font>${descriptions[url]}</font>
</div>
</a>
</div>
`;
    var versionTextElement = div.children[0].children[0].children[2].children[1];
    if (!version) {
        versionTextElement.remove();
    } else {
        if (version.startsWith("a")) {
            versionTextElement.innerHTML = version;
            versionTextElement.classList.add("alpha");
            versionTextElement.title = "Version: Alpha " + version.slice(1);
        } else if (version.startsWith("b")) {
            versionTextElement.innerHTML = version;
            versionTextElement.classList.add("beta");
            versionTextElement.title = "Version: Beta " + version.slice(1);
        } else {
            versionTextElement.innerHTML = "v" + version;
            versionTextElement.title = "Version: " + version;
        }
    }
    div.children[0].children[0].children[1].children[1].onload = function () {
        this.parentElement.parentElement.parentElement.setAttribute("loaded", true);
    }
    var tags = div.children[0].children[0].children[0];
    var keys = Object.keys(playlists);
    for (var key of keys) {
        if (!playlists[key].includes(title)) continue;
        tags.innerHTML += `<div class="playlist-tag" title="${key}"><img src="playlist-icons/${getURL(key)}.png" ></div>`;
    }
    if (popularity.indexOf(title) >= 0 && popularity.indexOf(title) < 10) {
        tags.innerHTML += `<div class="playlist-tag" title="Top Ten!"><img src="playlist-icons/top-ten.png" ></div>`;
    }
    if (newGames.includes(title)) {
        tags.innerHTML += `<div class="playlist-tag" title="New!"><img src="playlist-icons/new.png" ></div>`;
    }
    if (updated) {
        tags.innerHTML += `<div class="playlist-tag" title="Updated!"><img src="playlist-icons/updated.png" ></div>`;
        div.children[0].className = `game-card updated`;
    }
    return div;
}

function createSmallGameCard(game) {
    var url = getURL(game);
    var title = getTitle(game);
    var updated = recentUpdates.indexOf(url) != -1;
    var div = document.createElement("div");
    var gameVersions = versions[url];
    var version = false;
    if (gameVersions) {
        var current = gameVersions[gameVersions.length - 1];
        version = current.version;
    }
    div.className = "small-game-card-container";
    div.innerHTML = `
<div class="small-game-card" loaded="false">
<a href="game.html?game=${url}">
<div class="small-game-card-icons-container"></div>
<div class="small-game-card-image-container">
<img src="game-gifs/${url}.gif"></img>
<img src="game-icons/${url}.png"></img>
</div>
<div class="small-game-card-title-container version-container">
<div class="small-game-card-version-container version">
<div>
<font class="small-game-card-version version-text"></font>
</div>
</div>
<font class="small-game-card-title" game-title="${title}">${title}</font>
</div>
</a>
</div>
`;
    var tags = div.children[0].children[0].children[0];
    var keys = Object.keys(playlists);
    var versionContainer = div.children[0].children[0].children[2].children[0];
    var versionTextElement = versionContainer.children[0].children[0];
    if (!version) {
        versionContainer.remove();
    } else {
        if (version.startsWith("a")) {
            versionTextElement.innerHTML = version;
            versionTextElement.classList.add("alpha");
            versionContainer.classList.add("alpha");
            versionTextElement.title = "Version: Alpha " + version.slice(1);
        } else if (version.startsWith("b")) {
            versionTextElement.innerHTML = version;
            versionTextElement.classList.add("beta");
            versionContainer.classList.add("beta");
            versionTextElement.title = "Version: Beta " + version.slice(1);
        } else {
            versionTextElement.innerHTML = "v" + version;
            versionTextElement.title = "Version: " + version;
        }
    }
    div.children[0].children[0].children[1].children[1].onload = function () {
        this.parentElement.parentElement.parentElement.setAttribute("loaded", true);
    }
    for (var key of keys) {
        if (!playlists[key].includes(title)) continue;
        tags.innerHTML += `<div class="playlist-tag" title="${key}"><img src="playlist-icons/${getURL(key)}.png" ></div>`;
    }
    if (popularity.indexOf(title) >= 0 && popularity.indexOf(title) < 10) {
        tags.innerHTML += `<div class="playlist-tag" title="Top Ten!"><img src="playlist-icons/top-ten.png" ></div>`;
    }
    if (newGames.includes(title)) {
        tags.innerHTML += `<div class="playlist-tag" title="New!"><img src="playlist-icons/new.png" ></div>`;
    }
    if (updated) {
        tags.innerHTML += `<div class="playlist-tag" title="Updated!"><img src="playlist-icons/updated.png" ></div>`;
        div.children[0].className = `small-game-card updated`;
    }
    return div;
}

function createSquareGameCard(game) {
    var url = getURL(game);
    var title = getTitle(game);
    var updated = recentUpdates.indexOf(url) != -1;
    var div = document.createElement("div");
    div.className = "square-game-card-container";
    div.innerHTML = `
<div class="square-game-card" loaded="false">
<div class="square-game-card-icons-container"></div>
<a href="game.html?game=${url}">
<button></button>
<div class="square-game-card-image-container">
<img src="game-gifs/${url}.gif"></img>
<img src="game-icons/${url}.png"></img>
</div>
<div class="square-game-card-title-container">
<font class="square-game-card-title">${title}</font>
</div>
</a>
</div>
`;
    div.children[0].children[1].children[1].children[1].onload = function () {
        this.parentElement.parentElement.parentElement.setAttribute("loaded", true);
    }
    div.children[0].children[1].style.fontSize = Math.min(400 / getTitle(game).length, 30) + "px";
    var tags = div.children[0].children[0];
    var keys = Object.keys(playlists);
    var n = 0;
    for (var key of keys) {
        if (!playlists[key].includes(title)) continue;
        tags.innerHTML += `<div class="playlist-tag" title="${key}"><img src="playlist-icons/${getURL(key)}.png" ></div>`;
        n++;
    }
    if (popularity.indexOf(title) >= 0 && popularity.indexOf(title) < 10) {
        tags.innerHTML += `<div class="playlist-tag" title="Top Ten!"><img src="playlist-icons/top-ten.png" ></div>`;
        n++;
    }
    if (newGames.includes(title)) {
        tags.innerHTML += `<div class="playlist-tag" title="New!"><img src="playlist-icons/new.png" ></div>`;
        n++;
    }
    if (updated) {
        tags.innerHTML += `<div class="playlist-tag" title="Updated!"><img src="playlist-icons/updated.png" ></div>`;
        div.children[0].className = `square-game-card updated`;
        n++;
    }
    while (n < 6) {
        tags.innerHTML += `<div class="playlist-tag" empty="true"></div>`;
        n++;
    }
    while (n < 6) {
        tags.children[0].remove();
        n--;
    }
    return div;
}

function createMiniGameCard(game) {
    var url = getURL(game);
    var title = getTitle(game);
    var div = document.createElement("div");
    div.className = "mini-game-card-container";
    div.innerHTML = `
<div class="mini-game-card" loaded="false">
<a href="game.html?game=${url}">
<div class="mini-game-card-image-container">
<img src="game-icons/${url}.png"></img>
<div class="mini-game-card-blur">
<div class="mini-game-card-title-container">
<p class="mini-game-card-title">${title}</p>
</div>
</div>
</div>
</a>
</div>
`;
    div.children[0].children[0].children[0].onload = function () {
        this.parentElement.parentElement.parentElement.setAttribute("loaded", true);
    }
    return div;
}