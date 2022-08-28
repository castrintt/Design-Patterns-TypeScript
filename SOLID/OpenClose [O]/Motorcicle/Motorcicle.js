"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Motorcycle {
    constructor(color, year, engine) {
        this.configure(color, year, engine);
    }
    startVehicle() {
        console.log("INICIOU A MOTO");
    }
    configure(color, year, engine) {
        console.log("MOTO LIGADA");
    }
}
exports.default = Motorcycle;
