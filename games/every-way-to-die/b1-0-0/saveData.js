let saveData = [
    null,
    null,
    null,
    null
];

let stored = window.localStorage.getItem("everywaytodiesavedata");
if (stored) {
    saveData = JSON.parse(stored);
}

function updateSaveData() {
    window.localStorage.setItem("everywaytodiesavedata", JSON.stringify(saveData));
}