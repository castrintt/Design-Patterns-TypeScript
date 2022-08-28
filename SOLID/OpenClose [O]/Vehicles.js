"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicles {
    constructor(color, year, engine, seats, doors) {
        this.color = color;
        this.year = year;
        this.engine = engine;
        this.seats = seats;
        this.doors = doors;
    }
    startVehicle() {
        console.log("Ligando os motores");
    }
}
exports.default = Vehicles;
