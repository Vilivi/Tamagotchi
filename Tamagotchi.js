class Tamagotchi {
    alive;
    name;
    satiety;
    entertainment;
    energy;

    constructor(name) {
        this.alive = true;
        this.name = name;
        this.satiety = 100;
        this.entertainment = 100;
        this.energy = 100;        
    }

    getName() {
        return this.name;
    }

    setName(_name) {
        this.name = _name;
    }

    getSatiety() {
        return this.satiety;
    }

    setSatiety(_satiety) {
        this.satiety = _satiety;
    }

    getEntertainment() {
        return this.entertainment;
    }

    setEntertainment(_entertainment) {
        this.entertainment = _entertainment;
    }

    getEnergy() {
        return this.energy;
    }

    setEnergy(_energy) {
        this.energy = _energy;
    }
}