"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarIPrinciple {
    constructor(color, year, engine, seats) {
        this.configurationCar(color, year, engine, seats);
    }
    startVehicle() {
        console.log("Ligando os motores");
    }
    configurationCar(color, year, engine, seats) {
        console.log(`Carro da cor ${color}, ano ${year} motor de ${engine} cavalos e ${seats} assentos`);
        this.startVehicle();
    }
}
exports.default = CarIPrinciple;
