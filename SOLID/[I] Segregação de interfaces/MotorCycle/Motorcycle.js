"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MotorcycleIPrinciple {
    constructor(color, year, engine) {
        this.configureMotorcycle(color, year, engine);
    }
    configureMotorcycle(color, year, engine) {
        console.log("CRIANDO UMA MOTO");
        this.startVehicle();
    }
    startVehicle() {
        console.log("Ligando os motores");
    }
}
exports.default = MotorcycleIPrinciple;
