const launch = document.getElementById("launch-game");
const tamaName = document.getElementById("tamaName");
const gameOverText = document.getElementById("gameOver");
const titleSatiety = document.getElementById("title-satiety");
const satiety = document.getElementById("satiety");
const titleEntertainment = document.getElementById("title-entertainment");
const entertainment = document.getElementById("entertainment");
const titleEnergy = document.getElementById("title-energy");
const energy = document.getElementById("energy");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const sleep = document.getElementById("sleep");
const feedInput = createInput("feed");
const sleepInput = createInput("sleep");
const playInput = createInput("play");
let gameOver;
let tama;

if(typeof gameOver != "undefined" && !gameOver) {
    gameOverText.innerHTML = "T'as tué ton Tamagotchi! Connard !";
}

const updateSatiety = () => {
    tama.setSatiety(Math.min(tama.getSatiety() + 10, 100));
}

const updateEntertainment = () => {
    tama.setEntertainment(Math.min(tama.getEntertainment() + 10, 100));
}

const updateEnergy = () => {
    tama.setEnergy(Math.min(tama.getEnergy() + 10, 100));
}

const time = (tama) => {
    if(tama.getSatiety() > 0) {
        let satietyUpdated = roundSubstractionCalcul(tama.getSatiety(), 0.5);
        tama.setSatiety(satietyUpdated);
    } else {
        return false;
    }
    
    if(tama.getEntertainment() > 0) {
        let entertainmentUpdated = roundSubstractionCalcul(tama.getEntertainment(), 0.2);
        tama.setEntertainment(entertainmentUpdated);
    } else {
        return false;
    }
    
    if(tama.getEnergy() > 0) {
        let energyUpdated = roundSubstractionCalcul(tama.getEnergy(), 0.1);
        tama.setEnergy(energyUpdated);
    } else {
        return false;
    }

    return true;
}

const initGame = (name) => {
    tama = new Tamagotchi(name);

    // set stats title
    gameOverText.innerHTML = "";
    titleSatiety.innerHTML = "Satiety";
    titleEntertainment.innerHTML = "Entertainment";
    titleEnergy.innerHTML = "Energy";

    // set stats
    tamaName.innerHTML = tama.getName();
    satiety.innerHTML = tama.getEntertainment() + "%";
    entertainment.innerHTML = tama.getEntertainment() + "%";
    energy.innerHTML = tama.getEnergy() + "%";

    // insert input buttons
    document.getElementById("stat-satiety").appendChild(feedInput);
    document.getElementById("stat-energy").appendChild(sleepInput);
    document.getElementById("stat-entertainement").appendChild(playInput);

    return tama;
}

const launchGame = () => {
    gameOver = false;
    const tamaName = document.getElementById("name").value;
    if(tamaName){
        tama = initGame(tamaName);
        feedInput.onclick = updateSatiety;
        playInput.onclick = updateEntertainment;
        sleepInput.onclick = updateEnergy;

        setInterval(() => {
            let result = time(tama);
            if(!result) {
                gameOver = true;
            }
        }, 900);

        setInterval(() => {
            updateHTML(satiety, tama.getSatiety());
            updateHTML(entertainment, tama.getEntertainment());
            updateHTML(energy, tama.getEnergy());
        }, 200);
    }
}

launch.onclick = launchGame;