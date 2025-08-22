function initializeSaveData() {
    if (localStorage.getItem("oppositeday2savedata") !== null) {
        saveData = JSON.parse(localStorage.getItem("oppositeday2savedata"));
        saveData.redCubesCollected = saveData.redCubesCollected || [];
        saveData.redCubesDiscovered = saveData.redCubesDiscovered || [];
        saveData.ultraRedCubesDiscovered = saveData.ultraRedCubesDiscovered || [];
        saveData.ultraRedCubesTaken = saveData.ultraRedCubesTaken || [];
        saveData.shortcutsDiscovered = saveData.shortcutsDiscovered || [];
        saveData.shortcutsTaken = saveData.shortcutsTaken || [];
        saveData.ultraShortcutsDiscovered = saveData.ultraShortcutsDiscovered || [];
        saveData.ultraShortcutsTaken = saveData.ultraShortcutsTaken || [];
        saveData.blueCubesDiscovered = saveData.blueCubesDiscovered || [];
        saveData.blueCubesCollected = saveData.blueCubesCollected || [];
        saveData.ultraBlueCubesDiscovered = saveData.ultraBlueCubesDiscovered || [];
        saveData.ultraBlueCubesTaken = saveData.ultraBlueCubesTaken || [];
        saveData.levelsBeaten = saveData.levelsBeaten || 0;
        saveData.time = saveData.time || 0;
        saveData.bestLevelSplits = saveData.bestLevelSplits || [];
        game.ui.timer.gameTime = saveData.time;
        saveDataStored = true;
        if (saveData.johnbutlergames) johnbutlergames = true;
        if (saveData.notobiv) notobiv = true;
        if (saveData.ppougjgaming) ppougjgaming = true;
        if (saveData.kribit) kribit = true;
    }
}

function initializeSettingsData() {
    if (localStorage.getItem("oppositeday2settingsdata") !== null) {
        var defaultSettings = structuredClone(menu.settings);
        menu.settings = JSON.parse(localStorage.getItem("oppositeday2settingsdata"));
        for (var key of Object.keys(defaultSettings)) {
            if (menu.settings[key] === undefined) menu.settings[key] = defaultSettings[key];
        }
        game.input.updateKeybinds();
    } else {
        menu.settings.keybinds = structuredClone(defaultKeybinds);
        game.input.updateKeybinds();
    }
}

function updateSaveData() {
    saveData.time = game.ui.timer.gameTime;
    saveData.johnbutlergames = johnbutlergames;
    saveData.ppougjgaming = ppougjgaming;
    saveData.notobiv = notobiv;
    saveData.kribit = kribit;
    saveData.larrythehamster = larrythehamster;
    localStorage.setItem("oppositeday2savedata", JSON.stringify(saveData));
    saveDataStored = true;
}

function deleteSaveData() {
    localStorage.removeItem("oppositeday2savedata");
    saveDataStored = false;
}

function updateSettingsData() {
    localStorage.setItem("oppositeday2settingsdata", JSON.stringify(menu.settings));
}