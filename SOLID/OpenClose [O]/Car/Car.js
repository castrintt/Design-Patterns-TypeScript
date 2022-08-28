"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(color, year, engine, seats, doors) {
        this.configure(color, year, engine, seats, doors);
    }
    startVehicle() {
        console.log("INICIOU");
    }
    configure(color, year, engine, seats, doors) {
        console.log("Ligando os motores");
    }
}
exports.default = Car;
